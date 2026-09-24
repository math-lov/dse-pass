#!/usr/bin/env python3
"""自學追上站 · 本機維護平台（127.0.0.1:8788）

與每日三題站的面板（tools/panel_server.py，8787）**完全獨立**：
不同的資料層（data/learn/）、不同的工作流（docx 抽取 → 覆核 → 生成 → 發佈）、
不同的埠。兩者可同時開，互不干擾。

功能
  1. 總覽：課題／題數／待覆核／檢查狀態；課題「發佈／暫緩」開關
  2. 覆核清單：列出 review 旗標未清的題目（嵌圖公式、可疑轉寫），逐題「通過」或「保留」；
     通過會清掉旗標並寫入審計記錄 data/learn/review_log.json
  3. 一鍵發佈：make_learn_data → learn_check → learn_katex_check → learn_smoke_test
     → git add / commit / push（任何一步失敗即中止）
  4. 本機預覽：/site/… 直接serve learn/ 前端，改完馬上用手機／瀏覽器看

用法
    雙擊 start-learn-panel.bat
    或 python tools\\learn_panel.py --port 8788
"""

from __future__ import annotations

import argparse
import datetime
import json
import os
import subprocess
import sys
import threading
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEARN_DATA = os.path.join(BASE, "data", "learn")
LEARN_SITE = os.path.join(BASE, "learn")
DATA_FILES = ("bank.json", "lessons.json", "concepts.json", "solutions.json", "publish.json")


def py_exe() -> str:
    for cand in (os.environ.get("PY_EXE"),
                 r"C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"):
        if cand and os.path.exists(cand):
            return cand
    return sys.executable or "python"


def node_exe() -> str:
    for cand in (os.environ.get("NODE_EXE"),
                 r"C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe"):
        if cand and os.path.exists(cand):
            return cand
    return "node"


PY = py_exe()
NODE = node_exe()


# ── 檔案讀寫 ────────────────────────────────────────────────────────────
def load(name: str, default=None):
    path = os.path.join(LEARN_DATA, name)
    try:
        with open(path, encoding="utf-8-sig") as f:
            return json.load(f)
    except FileNotFoundError:
        return {} if default is None else default
    except Exception as e:                                    # noqa: BLE001
        print(f"[warn] cannot read {name}: {e!r}")
        return {} if default is None else default


def save(name: str, obj) -> None:
    path = os.path.join(LEARN_DATA, name)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write("\n")


def now_iso() -> str:
    return datetime.datetime.now().isoformat(timespec="seconds")


def run(cmd: list[str], timeout: int = 900) -> dict:
    """執行外部指令並回傳 {cmd, code, out}。"""
    shown = " ".join(cmd if cmd[0] != PY else ["python"] + cmd[1:])
    print(f"$ {shown}")
    try:
        p = subprocess.run(cmd, cwd=BASE, capture_output=True, text=True,
                           encoding="utf-8", errors="replace", timeout=timeout)
        out = ((p.stdout or "") + (p.stderr or "")).strip()
        print(out[-2000:])
        return {"cmd": shown, "code": p.returncode, "out": out}
    except subprocess.TimeoutExpired:
        return {"cmd": shown, "code": -1, "out": f"[timeout] exceeded {timeout}s"}
    except FileNotFoundError as e:
        return {"cmd": shown, "code": -1, "out": f"[command not found] {e}"}


def py_tool(*args: str) -> list[str]:
    return [PY, os.path.join("tools", args[0]), *args[1:]]


# ── 資料彙整 ────────────────────────────────────────────────────────────
def status() -> dict:
    bank = load("bank.json", {"questions": []})
    lessons = load("lessons.json", {"topics": [], "assessments": []})
    concepts = load("concepts.json", {"cards": []})
    sols = (load("solutions.json", {"solutions": {}}) or {}).get("solutions") or {}
    pub = load("publish.json", {"holdTopics": []})

    questions = bank.get("questions", [])
    by_id = {q.get("id"): q for q in questions}
    sols_for = {qid: s for qid, s in sols.items()}

    topics = []
    for t in lessons.get("topics", []):
        ids, cards = [], 0
        for les in t.get("lessons", []):
            cards += len(les.get("conceptCards", []))
            ids += les.get("longQuestionIds", [])
            ids += [x for page in les.get("mcPages", []) for x in page]
        mc = [i for i in ids if (by_id.get(i) or {}).get("type") == "mc"]
        lng = [i for i in ids if (by_id.get(i) or {}).get("type") == "long"]
        topics.append({
            "id": t.get("id"),
            "stage": t.get("stage"),
            "name": t.get("name", {}),
            "source": t.get("source"),
            "cards": cards,
            "mc": len(mc),
            "long": len(lng),
            "missingSolutions": [i for i in ids if i not in sols_for],
            "held": t.get("id") in (pub.get("holdTopics") or []),
        })

    # 待覆核（review 旗標未清）
    needs_review = []
    for q in questions:
        if q.get("review"):
            needs_review.append({
                "id": q.get("id"), "code": q.get("code"), "topic": q.get("topic"),
                "type": q.get("type"), "source": q.get("source"),
                "reason": q.get("review"),
                "stem": ((q.get("stem") or {}).get("text") or "")[:140],
                "hasSolution": q.get("id") in sols_for,
            })

    referenced: set[str] = set()
    for t in lessons.get("topics", []):
        for les in t.get("lessons", []):
            referenced |= set(les.get("longQuestionIds", []))
            referenced |= {x for page in les.get("mcPages", []) for x in page}
    orphans = [q.get("id") for q in questions if q.get("id") not in referenced]

    return {
        "topics": topics,
        "stages": lessons.get("stages", []),
        "needsReview": needs_review,
        "orphans": orphans,
        "holdTopics": pub.get("holdTopics") or [],
        "counts": {
            "questions": len(questions),
            "mc": sum(1 for q in questions if q.get("type") == "mc"),
            "long": sum(1 for q in questions if q.get("type") == "long"),
            "solutions": len(sols),
            "cards": len(concepts.get("cards", [])),
            "missingSolutions": len([q for q in questions if q.get("id") not in sols_for]),
        },
        "generated": load_meta(),
        "reviewLog": (load("review_log.json", {"entries": []}) or {}).get("entries", [])[-8:],
        "generatedAt": now_iso(),
    }


def load_meta() -> dict:
    """讀生成物 learn/data/meta.js（最後一次生成的資訊）。"""
    path = os.path.join(LEARN_SITE, "data", "meta.js")
    try:
        with open(path, encoding="utf-8") as f:
            txt = f.read()
        head = txt.split("=", 1)[1].rsplit(";", 1)[0]
        return json.loads(head)
    except Exception:                                         # noqa: BLE001
        return {}


CHECKS = [
    ("生成資料（make_learn_data）", lambda: [PY, "tools/make_learn_data.py"]),
    ("結構與課程合規（learn_check）", lambda: [PY, "tools/learn_check.py"]),
    ("LaTeX 逐條解析（learn_katex_check）", lambda: [NODE, "tools/learn_katex_check.js"]),
    ("學生流程（learn_smoke_test）", lambda: [NODE, "tools/learn_smoke_test.js"]),
]


def run_checks() -> dict:
    results = []
    for name, mk in CHECKS:
        r = run(mk())
        results.append({"name": name, "cmd": r["cmd"], "code": r["code"],
                        "ok": r["code"] == 0, "out": r["out"][-4000:]})
        if r["code"] != 0:
            break                      # 失敗即停，避免拿壞資料去發佈
    return {"ok": all(x["ok"] for x in results), "steps": results, "at": now_iso()}


def git_state() -> dict:
    r = run(["git", "status", "--porcelain"])
    changed = [ln for ln in (r["out"] or "").splitlines() if ln.strip()]
    b = run(["git", "rev-parse", "--abbrev-ref", "HEAD"])
    return {"branch": (b["out"] or "").strip(), "changed": changed, "count": len(changed)}


def publish(message: str, push: bool) -> dict:
    checks = run_checks()
    if not checks["ok"]:
        return {"ok": False, "stage": "checks", "checks": checks}
    steps = [checks]
    r = run(["git", "add", "-A"])
    steps.append({"name": "git add", "code": r["code"], "ok": r["code"] == 0, "out": r["out"]})
    if r["code"] != 0:
        return {"ok": False, "stage": "git add", "steps": steps}
    st = git_state()
    if st["count"] == 0:
        return {"ok": True, "stage": "no-change", "steps": steps,
                "message": "沒有任何改動，不用發佈。"}
    cm = ["git", "commit", "-m", message or "Learn: 內容更新（本機面板）"]
    r = run(cm)
    steps.append({"name": "git commit", "code": r["code"], "ok": r["code"] == 0, "out": r["out"]})
    if r["code"] != 0:
        return {"ok": False, "stage": "git commit", "steps": steps}
    if push:
        r = run(["git", "push"], timeout=300)
        steps.append({"name": "git push", "code": r["code"], "ok": r["code"] == 0, "out": r["out"]})
        if r["code"] != 0:
            return {"ok": False, "stage": "git push", "steps": steps}
    return {"ok": True, "stage": "pushed" if push else "committed", "steps": steps}


# ── 線上編輯 ────────────────────────────────────────────────────────────
# 只改 data/learn/*.json（編輯層）；learn/** 是生成物，永不直接寫。
import re

RAD_PAT = re.compile(  # 與 tools/syllabus_check.py / tools/learn_check.py 同源
    r"\\operatorname\{rad\}|\\text\{\s*rad|\\mathrm\{rad\}|\bradians?\b|弧度"
    r"|\\frac\{\\pi\}\{\d+\}|\\frac\{\d+\\pi\}\{\d+\}|\\pi\s*/\s*\d|=\s*\\pi\b", re.I)
COORD_PAT = re.compile(
    r"坐標|坐标|座標|(?<!-)(?<!without )\bcoordinates?\b|\\overrightarrow|\\vec\{|"
    r"\bvectors?\b|向量", re.I)
EDITABLE_FILES = {"lessons": "lessons.json", "concepts": "concepts.json",
                  "bank": "bank.json", "solutions": "solutions.json"}


def _dollars_ok(s) -> bool:
    return str(s or "").replace("\\$", "").count("$") % 2 == 0


def _other_cmd_hints(topic_id) -> dict:
    """其他課題的「題目字眼」（用來擋整組照抄別課）。回傳 {課題 id: [英文…]}。"""
    lessons = load("lessons.json", {"topics": []})
    out: dict = {}
    for t in lessons.get("topics", []):
        if t.get("id") == topic_id:
            continue
        out[str(t.get("id"))] = [str((h or {}).get("en") or "").strip()
                                 for h in (t.get("cmdHints") or [])]
    return out


def _topic_bundle(topic_id: str) -> dict:
    """回傳某課題所有可編輯內容（給編輯器）。"""
    bank = load("bank.json", {"questions": []})
    lessons = load("lessons.json", {"topics": []})
    concepts = load("concepts.json", {"cards": []})
    sols = (load("solutions.json", {"solutions": {}}) or {}).get("solutions") or {}

    topic = next((t for t in lessons.get("topics", []) if t.get("id") == topic_id), None)
    if not topic:
        return {"ok": False, "error": "找不到課題 " + topic_id}

    by_id = {q.get("id"): q for q in bank.get("questions", [])}
    cards_by_id = {c.get("id"): c for c in concepts.get("cards", [])}

    card_ids, long_ids, mc_ids = [], [], []
    for les in topic.get("lessons", []):
        card_ids += les.get("conceptCards", [])
        long_ids += les.get("longQuestionIds", [])
        for page in les.get("mcPages", []):
            mc_ids += page

    def q_payload(qid, kind):
        q = by_id.get(qid)
        if not q:
            return None
        s = sols.get(qid) or {}
        return {
            "kind": kind, "id": qid, "code": q.get("code"), "type": q.get("type"),
            "source": q.get("source"), "difficulty": q.get("difficulty"),
            "stem": (q.get("stem") or {}).get("text", ""),
            "parts": q.get("parts") or [], "options": q.get("options") or {},
            "answer": s.get("answer"),
            "steps": ((s.get("solution") or {}).get("steps")) or [],
            "traps": ((s.get("solution") or {}).get("traps")) or [],
            "tip": ((s.get("solution") or {}).get("tip")) or {},
            "review": q.get("review"),
        }

    return {
        "ok": True,
        "topic": {"id": topic.get("id"), "name": topic.get("name", {}),
                  "intro": topic.get("intro", {}), "source": topic.get("source"),
                  "stage": topic.get("stage"),
                  "cmdHints": topic.get("cmdHints") or []},
        "cards": [cards_by_id[i] for i in card_ids if i in cards_by_id],
        "long": [x for x in (q_payload(i, "long") for i in long_ids) if x],
        "mc": [x for x in (q_payload(i, "mc") for i in mc_ids) if x],
        "files": {k: os.path.join("data", "learn", v) for k, v in EDITABLE_FILES.items()},
        "topics": [{"id": t.get("id"), "name": t.get("name", {})}
                   for t in lessons.get("topics", [])],
    }


def _validate(kind: str, patch: dict, ctx: dict) -> list[str]:
    errs: list[str] = []

    def check_pairs(label, vals):
        for name, val in vals:
            if not _dollars_ok(val):
                errs.append("%s 的 $ 不成對：%s" % (label, name))

    if kind == "topic":
        for k in ("zh", "en"):
            if not (patch.get("name") or {}).get(k, "").strip():
                errs.append("課題名稱（%s）不可留空" % k)
        check_pairs("課題簡介", [("intro.zh", patch.get("intro", {}).get("zh"))])
        # 題目字眼（這一課的 DSE 字眼）：留空＝前端用預設那組；有填就要逐組有英文＋中文
        hints = patch.get("cmdHints")
        if hints is not None and hints:
            hs = [h if isinstance(h, dict) else {} for h in hints]
            if len(hs) < 2:
                errs.append("題目字眼至少要 2 組（整個清空＝用預設那組；否則請寫 4–6 組）")
            if len(hs) > 8:
                errs.append("題目字眼最多 8 組（提示列放不下，學生亦睇唔完）")
            seen: set[str] = set()
            for i, h in enumerate(hs, 1):
                en = str(h.get("en") or "").strip()
                zh = str(h.get("zh") or "").strip()
                if not en:
                    errs.append("第 %d 組題目字眼缺少 English 字眼" % i)
                if not zh:
                    errs.append("第 %d 組題目字眼缺少中文解釋（弱生靠它才知題目要什麼）" % i)
                if en in seen:
                    errs.append("題目字眼「%s」重複了" % en)
                seen.add(en)
            check_pairs("題目字眼", [("第 %d 組 en" % i, h.get("en")) for i, h in enumerate(hs, 1)]
                                    + [("第 %d 組 zh" % i, h.get("zh")) for i, h in enumerate(hs, 1)])
            others = _other_cmd_hints(ctx.get("topicId"))
            mine = {str(h.get("en") or "").strip() for h in hs}
            twin = [t for t, ws in others.items() if ws and set(ws) == mine]
            if twin:
                errs.append("這一課的題目字眼與 %s 完全相同——每課要為該課而設"
                            "（可以一兩個字眼相同，但不可整組照抄）" % "、".join(twin))

    elif kind == "card":
        t = patch.get("title") or {}
        if not (t.get("zh") or "").strip():
            errs.append("概念卡標題（中文）不可留空")
        body = (patch.get("body") or {}).get("zh") or ""
        if len(body.strip()) < 20:
            errs.append("概念卡正文太短（至少 20 字，要寫給弱生看）")
        check_pairs("概念卡", [("title.zh", t.get("zh")), ("title.en", t.get("en")),
                            ("body.zh", body), ("warn.zh", (patch.get("warn") or {}).get("zh"))])
        for i, m in enumerate(patch.get("math") or [], 1):
            if "$" in m:
                errs.append("math[%d] 只放純 LaTeX，不要加 $（例：a^{2}-b^{2}）" % i)

    elif kind == "question":
        stem = patch.get("stem") or ""
        if not stem.strip():
            errs.append("題幹不可留空")
        check_pairs("題目", [("stem", stem)])
        for p in patch.get("parts") or []:
            check_pairs("長題分部", [("part " + str(p.get("label")), p.get("text"))])
        if patch.get("type") == "mc":
            opts = patch.get("options") or {}
            miss = [k for k in ("A", "B", "C", "D") if not (opts.get(k) or "").strip()]
            if miss:
                errs.append("MC 缺少選項 " + ",".join(miss))
            for k in ("A", "B", "C", "D"):
                check_pairs("選項 " + k, [(k, opts.get(k))])
            ans = (ctx.get("solution") or {}).get("answer")
            if ans and ans not in opts:
                errs.append("題解記錄的答案是 %r，但已不是其中一個選項（請同時改題解）" % ans)

    elif kind == "solution":
        steps = patch.get("steps") or []
        if not steps:
            errs.append("至少要有一個步驟")
        qtype = (ctx.get("question") or {}).get("type")
        if qtype == "mc" and not (patch.get("answer") or "").strip():
            errs.append("MC 題必須有答案（A–D）")
        if qtype == "mc":
            opts = (ctx.get("question") or {}).get("options") or {}
            if patch.get("answer") not in opts:
                errs.append("答案必須是其中一個選項（A–D）")
        for i, st in enumerate(steps, 1):
            zh = (st.get("zh") or "").strip()
            if len(zh) < 10:
                errs.append("第 %d 步的中文解說太短（至少 10 字，要解釋「為什麼」）" % i)
            check_pairs("第 %d 步" % i, [("math", st.get("math")), ("zh", zh),
                                        ("title.zh", (st.get("title") or {}).get("zh"))])
            blob = "%s %s %s" % (zh, st.get("math") or "", (st.get("title") or {}).get("zh") or "")
            m = RAD_PAT.search(blob)
            if m:
                errs.append("第 %d 步出現弧度（%s）——角度一律用「度」" % (i, m.group(0)))
            m2 = COORD_PAT.search(blob)
            if m2 and not (ctx.get("question") or {}).get("coordAllowed"):
                errs.append("第 %d 步用坐標／向量（%s）——主解法要在課程內（坐標法請放 alt）"
                            % (i, m2.group(0)))
        for tr in patch.get("traps") or []:
            # MC 用 opt（要對得上選項）；長題沒有選項，用 label
            opt = tr.get("opt")
            label = tr.get("label")
            opts = (ctx.get("question") or {}).get("options") or {}
            if opts and opt not in opts:
                errs.append("干擾選項 %r 不是有效選項" % opt)
            if opt and opt == patch.get("answer"):
                errs.append("干擾選項 %r 就是正確答案" % opt)
            check_pairs("干擾選項 " + str(opt or label), [("zh", tr.get("zh"))])
        check_pairs("技巧", [("tip.zh", (patch.get("tip") or {}).get("zh"))])
    return errs


def _audit(kind: str, ident: str, fields: list[str]) -> None:
    log = load("edit_log.json", {"entries": []})
    log.setdefault("entries", []).append({
        "at": now_iso(), "kind": kind, "id": ident, "fields": fields, "by": "teacher-panel",
    })
    save("edit_log.json", log)


def apply_edit(kind: str, ident: str, patch: dict, run_fast_checks: bool = True) -> dict:
    """把編輯套用到編輯層 JSON。驗證不通過就不寫入（除非 force）。"""
    ctx: dict = {}
    if kind == "topic":
        doc = load("lessons.json", {"topics": []})
        hit = next((t for t in doc.get("topics", []) if t.get("id") == ident), None)
        if hit is None:
            return {"ok": False, "errors": ["找不到課題 " + ident]}
        ctx = {"topicId": ident}
    elif kind == "card":
        doc = load("concepts.json", {"cards": []})
        hit = next((c for c in doc.get("cards", []) if c.get("id") == ident), None)
        if hit is None:
            return {"ok": False, "errors": ["找不到概念卡 " + ident]}
    elif kind == "question":
        doc = load("bank.json", {"questions": []})
        hit = next((q for q in doc.get("questions", []) if q.get("id") == ident), None)
        if hit is None:
            return {"ok": False, "errors": ["找不到題目 " + ident]}
        sols = (load("solutions.json", {"solutions": {}}) or {}).get("solutions") or {}
        ctx = {"solution": sols.get(ident) or {}}
    elif kind == "solution":
        doc = load("solutions.json", {"solutions": {}})
        hit = next((s for qid, s in (doc.get("solutions") or {}).items() if qid == ident), None)
        if hit is None:
            return {"ok": False, "errors": ["找不到題解 " + ident]}
        bank = load("bank.json", {"questions": []})
        ctx = {"question": next((q for q in bank.get("questions", []) if q.get("id") == ident), {})}
    else:
        return {"ok": False, "errors": ["未知的編輯類型 " + kind]}

    errs = _validate(kind, patch, ctx)
    if errs:
        return {"ok": False, "errors": errs}

    changed = sorted(patch.keys())
    if kind == "topic":
        hit["name"] = patch.get("name", hit.get("name"))
        hit["intro"] = patch.get("intro", hit.get("intro"))
        if "cmdHints" in patch:                       # 這一課的「題目字眼」（前端每頁常駐那條）
            hit["cmdHints"] = patch["cmdHints"]
        save("lessons.json", doc)
    elif kind == "card":
        for k in ("title", "body", "math", "warn", "vocab"):
            if k in patch:
                hit[k] = patch[k]
        save("concepts.json", doc)
    elif kind == "question":
        if "stem" in patch:
            hit.setdefault("stem", {})["text"] = patch["stem"]
        for k in ("options", "parts", "code", "difficulty", "source"):
            if k in patch:
                hit[k] = patch[k]
        save("bank.json", doc)
    elif kind == "solution":
        sol = hit.setdefault("solution", {})
        for k in ("steps", "traps", "tip"):
            if k in patch:
                sol[k] = patch[k]
        if "answer" in patch:
            hit["answer"] = patch["answer"]
        save("solutions.json", doc)

    _audit(kind, ident, changed)

    out: dict = {"ok": True, "kind": kind, "id": ident, "changed": changed}
    if run_fast_checks:                     # 即時回饋：重新生成 + 結構檢查（其餘留給發佈流程）
        steps = []
        for cmd in ([PY, "tools/make_learn_data.py"], [PY, "tools/learn_check.py"]):
            r = run(cmd, timeout=180)
            steps.append({"cmd": r["cmd"], "ok": r["code"] == 0, "out": r["out"][-3000:]})
        out["checks"] = steps
        out["checksOk"] = all(s["ok"] for s in steps)
    return out


# ── HTML ────────────────────────────────────────────────────────────────
CSS = """
:root{--p:#2B6CB0;--a:#319795;--bg:#F7FAFC;--line:#E2E8F0;--tx:#1A202C;--mu:#4A5568;
--ok:#38A169;--warn:#DD6B20;--err:#E53E3E}
*{box-sizing:border-box}
body{margin:0;padding:24px;font-family:system-ui,"Microsoft JhengHei",sans-serif;
line-height:1.7;color:var(--tx);background:var(--bg)}
h1{font-size:22px;margin:0 0 4px}h2{font-size:16px;margin:26px 0 10px;color:var(--mu)}
a{color:var(--p)}
.wrap{max-width:900px;margin:0 auto}
.top{display:flex;align-items:center;gap:12px;margin-bottom:18px;flex-wrap:wrap}
.badge{background:#EBF8FF;color:var(--p);border-radius:999px;padding:2px 10px;font-size:12px;font-weight:700}
.card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:12px;
box-shadow:0 1px 2px rgba(0,0,0,.04)}
.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.spacer{flex:1}
button{font:inherit;font-size:14px;padding:9px 16px;border-radius:999px;border:1px solid var(--line);
background:#fff;cursor:pointer}
button:hover{border-color:#CBE3F7}
button.primary{background:linear-gradient(135deg,var(--p),var(--a));color:#fff;border-color:transparent;font-weight:600}
button.danger{border-color:#FEB2B2;color:var(--err)}
button:disabled{opacity:.5;cursor:default}
table{width:100%;border-collapse:collapse;font-size:14px}
th,td{text-align:left;padding:8px 6px;border-bottom:1px solid var(--line);vertical-align:top}
th{color:var(--mu);font-size:13px;font-weight:600}
.k{font-family:Consolas,monospace;font-size:13px;background:#EDF2F7;border-radius:6px;padding:1px 6px}
.ok{color:var(--ok);font-weight:700}.warn{color:var(--warn);font-weight:700}.err{color:var(--err);font-weight:700}
.muted{color:var(--mu);font-size:13px}
pre{background:#1A202C;color:#E2E8F0;border-radius:10px;padding:12px;overflow:auto;font-size:12.5px;
max-height:340px;white-space:pre-wrap}
.pill{font-size:12px;border-radius:999px;padding:2px 9px;border:1px solid var(--line)}
.pill.held{background:#FFFAF0;border-color:#FBD38D;color:#9C4221}
.pill.live{background:#F0FFF4;border-color:#9AE6B4;color:#22543D}
.tag{font-size:12px;background:#FFF5F5;border:1px solid #FEB2B2;color:var(--err);border-radius:999px;padding:1px 8px}
.rq{border-left:4px solid var(--warn);background:#FFFAF0;border-radius:0 10px 10px 0;padding:10px 12px;margin:8px 0}
input[type=text]{font:inherit;font-size:14px;padding:8px 12px;border-radius:8px;border:1px solid var(--line);min-width:220px}
nav a{margin-right:12px;font-size:14px}
"""


def page(title: str, body: str) -> bytes:
    html = f"""<!DOCTYPE html>
<html lang="zh-Hant"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · 自學追上站維護平台</title><style>{CSS}</style></head>
<body><div class="wrap">
<div class="top">
  <div><h1>自學追上站 · 維護平台</h1>
  <div class="muted">本機專用（127.0.0.1:8788）· 與每日三題站的面板完全分開</div></div>
  <div class="spacer"></div>
  <nav><a href="/">總覽</a><a href="/review">覆核清單</a><a href="/edit">內容編輯</a>
  <a href="/site/index.html" target="_blank">本機預覽 ↗</a>
  <a href="http://127.0.0.1:8787/" target="_blank">每日站面板 ↗</a></nav>
</div>
{body}
</div></body></html>"""
    return html.encode("utf-8")


def render_index(st: dict, git: dict, last_check: dict | None) -> bytes:
    c = st["counts"]
    rows = []
    for t in st["topics"]:
        name = (t["name"] or {})
        pill = ('<span class="pill held">暫緩</span>' if t["held"]
                else '<span class="pill live">已發佈</span>')
        warn = ""
        if t["missingSolutions"]:
            warn = f'<div class="muted err">缺少題解：{", ".join(t["missingSolutions"])}</div>'
        rows.append(
            f"<tr><td><b>{name.get('zh','')}</b><div class='muted'>{name.get('en','')}"
            f"<br>{t.get('source','')}</div></td>"
            f"<td>Stage {t.get('stage')}<br><span class='muted'>概念卡 {t['cards']}<br>"
            f"示範 {t['long']} · MC {t['mc']}</span></td>"
            f"<td>{pill}</td>"
            f"<td><button onclick=\"toggleHold('{t['id']}', {str(not t['held']).lower()})\">"
            f"{'恢復發佈' if t['held'] else '暫緩發佈'}</button></td></tr>{warn}")
    review_rows = "".join(
        f"<tr><td><span class='k'>{r['id']}</span><div class='muted'>{r.get('source') or ''}</div></td>"
        f"<td><span class='tag'>{r.get('reason')}</span></td>"
        f"<td class='muted'>{r['stem']}</td></tr>"
        for r in st["needsReview"][:20]) or "<tr><td colspan='3' class='muted'>沒有待覆核題目 ✓</td></tr>"

    log_rows = "".join(
        f"<tr><td class='muted'>{e.get('at','')}</td><td><span class='k'>{e.get('qid','')}</span></td>"
        f"<td>{e.get('action','')}</td><td class='muted'>{e.get('note','')}</td></tr>"
        for e in reversed(st.get("reviewLog") or [])) or \
        "<tr><td colspan='4' class='muted'>尚無覆核記錄</td></tr>"

    gen = st.get("generated") or {}
    check_html = ""
    if last_check:
        okall = last_check.get("ok")
        items = "".join(
            f"<div>{'<span class=ok>✓</span>' if s['ok'] else '<span class=err>✗</span>'} {s['name']}</div>"
            for s in last_check["steps"])
        check_html = f"<div class='card'><b>最後一次檢查</b> {last_check.get('at','')}"
        check_html += "<div>" + ("<span class='ok'>全部通過</span>" if okall
                                 else "<span class='err'>有失敗，已中止</span>") + "</div>"
        check_html += items
        if not okall:
            bad = [s for s in last_check["steps"] if not s["ok"]][0]
            check_html += f"<pre>{bad['out']}</pre>"
        check_html += "</div>"

    body = f"""
<div class="card row">
  <div><b>題目 <span class="k">{c['questions']}</span></b>
    <div class="muted">MC {c['mc']} · 長題 {c['long']} · 題解 {c['solutions']} · 概念卡 {c['cards']}</div></div>
  <div style="margin-left:22px"><b>待覆核 <span class="{'warn' if st['needsReview'] else 'ok'}">{len(st['needsReview'])}</span></b>
    <div class="muted">未清的 review 旗標不會出站</div></div>
  <div style="margin-left:22px"><b>孤兒題 <span class="k">{len(st['orphans'])}</span></b>
    <div class="muted">未編入任何課</div></div>
  <div class="spacer"></div>
  <div class="muted">最後生成：{gen.get('generatedAt','—')}<br>
    上次擋下題目：{len(gen.get('blockedQuestions') or [])} 題</div>
</div>

<h2>課題開關</h2>
<div class="card"><table>
<tr><th>課題</th><th>內容</th><th>狀態</th><th>操作</th></tr>
{''.join(rows) or '<tr><td colspan=4 class=muted>尚無課題</td></tr>'}
</table>
<div class="muted" style="margin-top:8px">暫緩的課題不會輸出到 learn/data/（學生看不到），
舊資料檔會被自動清除。改完記得按下面「重新生成 + 檢查」。</div></div>

<h2>待覆核（review 旗標）</h2>
<div class="card"><table>
<tr><th>題目</th><th>原因</th><th>題幹</th></tr>{review_rows}
</table>
<div class="row" style="margin-top:10px">
  <a href="/review"><button class="primary">開啟覆核清單 →</button></a>
  <span class="muted">逐題「通過」後旗標才會清除，題目才可以出站。</span>
</div></div>

<h2>發佈</h2>
<div class="card">
  <div class="row">
    <button class="primary" onclick="runChecks()">重新生成 + 檢查</button>
    <input type="text" id="msg" placeholder="commit 訊息（可留空）" style="flex:1">
    <button onclick="doPublish(true)">一鍵發佈（含 push）</button>
    <button onclick="doPublish(false)">只 commit</button>
  </div>
  <div class="muted" style="margin-top:8px">
    流程：生成資料 → 結構／課程合規 → KaTeX → 學生流程，全過才 commit／push。
    任何一步失敗即中止（不會把壞資料推上線）。
  </div>
  <div class="muted" style="margin-top:6px">
    Git：分支 <span class="k">{git.get('branch','?')}</span> ·
    未提交改動 <b>{git.get('count',0)}</b> 個
  </div>
  <div id="out" style="margin-top:12px"></div>
</div>
{check_html}

<h2>覆核記錄（最近 8 筆）</h2>
<div class="card"><table>
<tr><th>時間</th><th>題目</th><th>動作</th><th>備註</th></tr>{log_rows}</table></div>

<script>
function show(t){{document.getElementById('out').innerHTML='<pre>'+t+'</pre>';}}
async function api(path, body){{
  const r = await fetch(path, {{method:'POST', headers:{{'Content-Type':'application/json'}},
    body: JSON.stringify(body||{{}})}});
  return await r.json();
}}
async function toggleHold(id, hold){{
  const r = await api('/api/hold', {{topic:id, hold:hold}});
  alert(r.ok ? (hold ? '已暫緩 '+id+'，請按「重新生成 + 檢查」' : '已恢復 '+id+'，請按「重新生成 + 檢查」')
             : '失敗：'+JSON.stringify(r));
  location.reload();
}}
async function runChecks(){{
  show('執行中…（約 20–60 秒）');
  const r = await api('/api/check');
  show(r.steps.map(s=>((s.ok?'✓ ':'✗ ')+s.name+'\\n'+s.out)).join('\\n\\n'));
  location.reload();
}}
async function doPublish(push){{
  if(!confirm(push ? '跑檢查 → commit → push，確定？' : '跑檢查 → commit（不 push），確定？')) return;
  show('執行中…');
  const r = await api('/api/publish', {{push:push, message:document.getElementById('msg').value}});
  show((r.ok ? '完成：'+r.stage : '中止於：'+r.stage) + '\\n\\n' +
       (r.steps||[]).map(s=>((s.ok===false?'✗ ':'✓ ')+s.name+'\\n'+s.out)).join('\\n\\n'));
}}
</script>"""
    return page("總覽", body)


def render_review(st: dict) -> bytes:
    if not st["needsReview"]:
        return page("覆核清單", "<div class='card'><b class='ok'>✓ 沒有待覆核的題目</b>"
                                "<div class='muted'>所有 review 旗標都已清除。"
                                "<br><a href='/'>← 回總覽</a></div></div>")
    cards = []
    for r in st["needsReview"]:
        cards.append(f"""
<div class="card">
  <div class="row"><span class="k">{r['id']}</span>
    <span class="k">{r.get('code')}</span>
    <span class="tag">{r.get('reason')}</span>
    <div class="spacer"></div>
    <span class="muted">{r.get('source') or ''}</span></div>
  <div class="rq"><b>題幹</b><div>{r['stem'] or '<span class="muted">（空）</span>'}</div></div>
  <div class="row">
    <input type="text" id="note-{r['id']}" placeholder="備註（例：對照原圖已確認）" style="flex:1">
    <button class="primary" onclick="decide('{r['id']}', 'approve')">通過（清除旗標）</button>
    <button onclick="decide('{r['id']}', 'keep')">保留（仍需修正）</button>
  </div>
</div>""")
    body = f"""
<div class="card">
  <b>共 {len(st['needsReview'])} 題待覆核</b>
  <div class="muted">這些題目的內容未經人工確認，因此不會出站。
  「通過」代表你已對照原始教材確認轉寫無誤（清除 review 旗標並留下審計記錄）；
  「保留」會把備註寫進記錄，旗標不清除。
  <br><b>提醒</b>：標記 <span class="tag">embed-fig</span> 的題目，原式在 Word 裡是圖片，
  請先開 <span class="k">data/learn/raw/media/&lt;CODE&gt;/…png</span> 對照。</div>
</div>
{''.join(cards)}
<script>
async function decide(qid, action){{
  const note = (document.getElementById('note-'+qid)||{{}}).value || '';
  if(action==='approve' && !confirm('確認已對照原始教材，'+qid+' 的轉寫無誤？')) return;
  const r = await fetch('/api/review', {{method:'POST', headers:{{'Content-Type':'application/json'}},
    body: JSON.stringify({{qid:qid, action:action, note:note}})}}).then(x=>x.json());
  if(!r.ok){{ alert('失敗：'+JSON.stringify(r)); return; }}
  location.reload();
}}
</script>"""
    return page("覆核清單", body)


def render_edit(sel_topic: str = "") -> bytes:
    """內容編輯器：左邊選項目、右邊表單 ＋ 即時 KaTeX 預覽（與學生端同一套 KaTeX）。"""
    body = """
<div class="card row">
  <div><b>內容編輯</b>
    <div class="muted">直接改 <span class="k">data/learn/*.json</span>（編輯層）。
    儲存時會驗證格式（$ 成對、步驟長度、答案對應選項、度制、禁坐標主解法），
    通過才寫入並自動「重新生成 + 結構檢查」。<br>
    網站檔 <span class="k">learn/**</span> 是生成物，這裡永遠不會直接寫它。</div></div>
  <div class="spacer"></div>
  <select id="topicSel" style="font:inherit;padding:8px 12px;border-radius:8px;border:1px solid #E2E8F0"></select>
</div>

<div style="display:flex;gap:14px;align-items:flex-start;flex-wrap:wrap">
  <div class="card" style="flex:0 0 250px;max-height:70vh;overflow:auto">
    <div id="list"></div>
  </div>
  <div class="card" style="flex:1;min-width:320px">
    <div id="editor"><div class="muted">← 從左邊選一張概念卡、一題示範或一題練習開始編輯</div></div>
  </div>
</div>

<script src="/site/vendor/katex/katex.min.js"></script>
<script src="/site/vendor/katex/auto-render.min.js"></script>
<script>
let BUNDLE = null, SEL = null;

function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function $(id){return document.getElementById(id);}
function val(id){const n=$(id);return n?n.value:'';}

/* 即時預覽：整串 LaTeX 用 katex.render；含 $...$ 的文字用 renderMathInElement */
function prevTex(node, src, display){
  node.innerHTML='';
  if(!src){node.innerHTML='<span class="muted">（空）</span>';return;}
  try{katex.render(src, node, {displayMode:!!display, throwOnError:false, strict:false});}
  catch(e){node.innerHTML='<span class="err">LaTeX 錯誤：'+esc(e.message.split('\\n')[0])+'</span>';}
}
function prevRich(node, txt){
  node.innerHTML=esc(txt).replace(/\\n/g,'<br>');
  try{renderMathInElement(node,{delimiters:[{left:'$',right:'$',display:false}],
      throwOnError:false,strict:false});}catch(e){}
}
/* 概念卡正文預覽：支援 {{math:0}} 定位標記，把公式插到文字中間（與學生端一致） */
function prevBody(out, bodyTxt, mathTxt){
  const maths = String(mathTxt||'').split('\\n').map(s=>s.trim()).filter(Boolean);
  const re = /\\{\\{math(?::(\\d+))?\\}\\}/g;
  out.innerHTML = '';
  const used = {};
  let last = 0, m, auto = 0;
  const addText = (s)=>{
    if(!s) return;
    const d = document.createElement('div');
    d.innerHTML = esc(s).replace(/\\n/g,'<br>');
    out.appendChild(d);
    try{renderMathInElement(d,{delimiters:[{left:'$',right:'$',display:false}],
        throwOnError:false,strict:false});}catch(e){}
  };
  const addFormula = (i)=>{
    const f = document.createElement('div');
    f.style.textAlign = 'center';
    if(maths[i]){
      try{katex.render(maths[i], f, {displayMode:true, throwOnError:false, strict:false});}
      catch(e){ f.innerHTML = '<span class="err">'+esc(e.message.split('\\n')[0])+'</span>'; }
    }
    out.appendChild(f);
  };
  while((m = re.exec(bodyTxt)) !== null){
    addText(bodyTxt.slice(last, m.index));
    last = m.index + m[0].length;
    const idx = (m[1] === undefined) ? auto++ : parseInt(m[1], 10);
    used[idx] = true;
    addFormula(idx);
  }
  addText(bodyTxt.slice(last));
  maths.forEach((mm, i)=>{ if(!used[i]) addFormula(i); });   // 未用標記的公式補在最後
}
function bindPreview(ids){
  ids.forEach(function(p){
    const src=$(p[0]), out=$(p[1]);
    if(!src||!out) return;
    const upd=function(){ p[2]==='tex'?prevTex(out,src.value,false):prevRich(out,src.value); };
    src.addEventListener('input',upd); upd();
  });
}

async function loadTopics(){
  let r;
  try {
    r = await fetch('/api/edit').then(x=>x.json());
  } catch (e) {
    $('list').innerHTML = '<span class="err">載入失敗：' + esc(e.message) +
      '<br>請確認面板是從這個網址開啟（不是 file://），並重新啟動面板。</span>';
    return;
  }
  BUNDLE = r;
  const topics = r.topics || [];
  const sel=$('topicSel');
  sel.innerHTML = topics.map(t=>'<option value="' + t.id + '">' + esc((t.name||{}).zh||t.id) + '</option>').join('');
  if(!topics.length){
    $('list').innerHTML = '<span class="muted">data/learn/lessons.json 裡還沒有課題</span>';
    return;
  }
  sel.value = r.topic ? r.topic.id : topics[0].id;
  sel.onchange = ()=>openTopic(sel.value);
  openTopic(sel.value);
}

/* 事件委派：按鈕用 data-act / data-id，避免在 HTML 字串裡組 onclick（引號極易出錯） */
document.addEventListener('click', function(e){
  const t = e.target.closest ? e.target.closest('[data-act]') : null;
  if(!t) return;
  const act = t.getAttribute('data-act'), id = t.getAttribute('data-id') || '';
  if(act==='topic') editTopic();
  else if(act==='card') editCard(id);
  else if(act==='q') editQ(id);
  else if(act==='saveTopic') saveTopic();
  else if(act==='saveCard') saveCard(id);
  else if(act==='saveQ') saveQ(id);
});

async function openTopic(tid){
  const r = await fetch('/api/edit?topic='+encodeURIComponent(tid)).then(x=>x.json());
  if(!r.ok){ $('list').innerHTML='<span class="err">'+esc(r.error||'載入失敗')+'</span>'; return; }
  BUNDLE = r;
  const rows=[];
  rows.push('<div class="section-title"><span>課題資料</span></div>'
    + '<div><button data-act="topic">課題名稱／簡介</button></div>');
  rows.push('<div class="section-title"><span>概念卡（' + r.cards.length + '）</span></div>');
  r.cards.forEach(c=>rows.push('<div><button data-act="card" data-id="' + esc(c.id) + '">'
    + esc((c.title||{}).zh||c.id) + '</button></div>'));
  rows.push('<div class="section-title"><span>長題示範（' + r.long.length + '）</span></div>');
  r.long.forEach(q=>rows.push('<div><button data-act="q" data-id="' + esc(q.id) + '">'
    + esc(q.code) + ' · ' + esc(q.source||'') + '</button></div>'));
  rows.push('<div class="section-title"><span>MC 練習（' + r.mc.length + '）</span></div>');
  r.mc.forEach(q=>rows.push('<div><button data-act="q" data-id="' + esc(q.id) + '">'
    + esc(q.code) + ' · ' + esc(player(q.stem)) + '</button></div>'));
  $('list').innerHTML = rows.join('');
  $('editor').innerHTML = '<div class="muted">← 選一個項目開始編輯</div>';
}
function player(s){return String(s||'').replace(/\\$/g,'').slice(0,26);}

function head(title, file){
  return `<div class="row"><b>${esc(title)}</b><div class="spacer"></div>
    <span class="k">${esc(file)}</span></div>
    <div class="muted" style="margin-bottom:10px">欄位下方是即時預覽（與學生端同一套 KaTeX）</div>`;
}
function field(label, id, value, rows){
  return `<div style="margin:10px 0"><div class="muted">${label}</div>
    <textarea id="${id}" rows="${rows||3}" style="width:100%;font:inherit;font-size:14px;
      padding:10px;border-radius:8px;border:1px solid #E2E8F0">${esc(value)}</textarea>
    <div class="card" id="pv-${id}" style="margin:6px 0 0;background:#F7FAFF"></div></div>`;
}

function editTopic(){
  const t = BUNDLE.topic;
  $('editor').innerHTML = head('課題名稱／簡介／題目字眼', BUNDLE.files.lessons) +
    field('中文名稱', 'f_zh', (t.name||{}).zh) +
    field('English name', 'f_en', (t.name||{}).en, 2) +
    field('簡介（可含 $...$）', 'f_intro', (t.intro||{}).zh, 4) +
    field('題目字眼（每行一組，格式：English | 中文解釋。這一課學生最常睇錯的 DSE 字眼，建議 4–6 組、至少 3 組是這一課獨有；留空＝用預設那組）',
          'f_hints', (t.cmdHints||[]).map(h=>(h.en||'')+' | '+(h.zh||'')).join('\\n'), 6) +
    '<button class="primary" data-act="saveTopic">儲存</button>';
  bindPreview([['f_intro','pv-f_intro','rich'], ['f_hints','pv-f_hints','rich']]);
}

function editCard(id){
  const c = BUNDLE.cards.find(x=>x.id===id);
  $('editor').innerHTML = head('概念卡 · ' + ((c.title||{}).zh||id), BUNDLE.files.concepts) +
    `<div class="muted">id <span class="k">${c.id}</span></div>` +
    field('標題（中文）', 'f_tzh', (c.title||{}).zh, 2) +
    field('Title (English)', 'f_ten', (c.title||{}).en, 2) +
    field('正文（中文，用 Enter 換行；數學用 $...$；用 {{math:0}} 把第 1 條公式插進文字中間）',
          'f_body', (c.body||{}).zh, 10) +
    field('顯示公式（每行一條純 LaTeX，不加 $）', 'f_math', (c.math||[]).join('\\n'), 4) +
    field('常見錯誤（橙框）', 'f_warn', (c.warn||{}).zh, 4) +
    field('英文生字（每行一組，格式：english = 中文）', 'f_vocab',
          (c.vocab||[]).map(v=>v.en+' = '+v.zh).join('\\n'), 4) +
    '<button class="primary" data-act="saveCard" data-id="' + esc(id) + '">儲存</button>';
  bindPreview([['f_warn','pv-f_warn','rich'], ['f_math','pv-f_math','tex']]);
  const _b=$('f_body'), _m=$('f_math'), _o=$('pv-f_body');
  if(_b && _m && _o){
    const _upd=()=>prevBody(_o, _b.value, _m.value);
    _b.addEventListener('input', _upd);
    _m.addEventListener('input', _upd);
    _upd();
  }
}

function editQ(id){
  const q = BUNDLE.long.concat(BUNDLE.mc).find(x=>x.id===id);
  const isMc = q.type==='mc';
  let html = head((isMc?'MC 練習 · ':'長題示範 · ') + q.code, BUNDLE.files.bank) +
    `<div class="muted">id <span class="k">${q.id}</span>　難度
      <input id="f_diff" type="text" value="${q.difficulty||1}" style="width:52px">　
      來源 <input id="f_src" type="text" value="${esc(q.source||'')}" style="min-width:240px"></div>` +
    field('題幹（可含 $...$）', 'f_stem', q.stem, 3);
  if (!isMc) {
    html += field('長題分部（每行一條，格式：標籤 | 內容 | 分數，例：(a)| $x+1$ | 1）', 'f_parts',
      (q.parts||[]).map(p=>`${p.label}| ${p.text} | ${p.marks||''}`).join('\\n'), 4);
  } else {
    ['A','B','C','D'].forEach(L=>{
      html += field('選項 '+L, 'f_opt'+L, (q.options||{})[L], 2);
    });
  }
  html += `<div class="section-title"><span>題解（${esc(BUNDLE.files.solutions)}）</span></div>`;
  if (isMc) html += field('答案（A–D）', 'f_ans', q.answer||'', 1);
  html += `<div class="muted">步驟：每步 3 行一組 —— 第 1 行標題／第 2 行公式（純 LaTeX）／第 3 行中文解說（其餘行接續解說）</div>
    <textarea id="f_steps" rows="12" style="width:100%;font:inherit;font-size:14px;padding:10px;
      border-radius:8px;border:1px solid #E2E8F0">${esc(stepsToText(q.steps||[]))}</textarea>
    <div class="card" id="pv-f_steps" style="margin:6px 0 0;background:#F7FAFF"></div>`;
  html += field(isMc
      ? '干擾選項解說（每行：選項|解說，例：B| $x$ 的符號錯了）'
      : '常見錯誤（每行：標籤|解說，例：漏中間項| 展開 $(x-1)^{2}$ 時漏了 $-2x$。長題沒有選項，所以用標籤）',
    'f_traps',
    (q.traps||[]).map(t=>`${isMc ? (t.opt||'') : (t.label||t.opt||'')}| ${t.zh}`).join('\\n'), 3);
  html += field('帶得走的技巧', 'f_tip', (q.tip||{}).zh, 3);
  html += '<button class="primary" data-act="saveQ" data-id="' + esc(id) + '">儲存</button>';
  $('editor').innerHTML = html;
  bindPreview([['f_stem','pv-f_stem','rich'], ['f_tip','pv-f_tip','rich']]);
  ['A','B','C','D'].forEach(L=>{
    const n=$('f_opt'+L);
    if(n) bindPreview([['f_opt'+L,'pv-f_opt'+L,'rich']]);
  });
  const sp=$('f_steps'), out=$('pv-f_steps');
  const upd=function(){ prevRich(out, textToSteps(sp.value).map(s=>s.title.zh+'  '+s.math+'\\n'+s.zh).join('\\n\\n')); };
  sp.addEventListener('input', upd); upd();
}

function stepsToText(steps){
  return steps.map(s=>((s.title||{}).zh||'（標題）')+'\\n'+(s.math||'')+'\\n'+(s.zh||'')).join('\\n\\n');
}
function textToSteps(txt){
  return String(txt||'').split(/\\n\\s*\\n/).filter(b=>b.trim()).map(b=>{
    const lines = b.split('\\n');
    return { title: { zh: (lines.shift()||'').trim() },
             math: (lines.shift()||'').trim(),
             zh: lines.join('\\n').trim() };
  });
}
function parsePairs(txt, sep){
  return String(txt||'').split('\\n').map(l=>l.trim()).filter(Boolean).map(l=>{
    const i = l.indexOf(sep);
    return i<0 ? [l.trim(), ''] : [l.slice(0,i).trim(), l.slice(i+1).trim()];
  });
}

async function post(payload){
  const r = await fetch('/api/edit', {method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)}).then(x=>x.json());
  if(!r.ok){
    alert('未儲存（驗證未通過）：\\n\\n' + (r.errors||[]).join('\\n'));
    return false;
  }
  const bad = (r.checks||[]).filter(c=>!c.ok);
  const tail = (r.checks||[]).map(c=>(c.ok?'✓ ':'✗ ')+c.cmd+'\\n'+(c.out||'').split('\\n').slice(-6).join('\\n')).join('\\n\\n');
  alert('已儲存 ✓\\n\\n' + tail + (bad.length ? '\\n\\n⚠ 檢查未全過，請看輸出' : ''));
  openTopic(BUNDLE.topic.id);
  return true;
}
function saveTopic(){
  post({kind:'topic', id:BUNDLE.topic.id, patch:{
    name:{zh:val('f_zh'), en:val('f_en')}, intro:{zh:val('f_intro')},
    cmdHints: parsePairs(val('f_hints'),'|').map(p=>({en:p[0].trim(), zh:p.slice(1).join('|').trim()}))}});
}
function saveCard(id){
  post({kind:'card', id:id, patch:{
    title:{zh:val('f_tzh'), en:val('f_ten')},
    body:{zh:val('f_body')},
    math:val('f_math').split('\\n').map(s=>s.trim()).filter(Boolean),
    warn:{zh:val('f_warn')},
    vocab:parsePairs(val('f_vocab'),'=').map(p=>({en:p[0].trim(), zh:p.slice(1).join('=').trim()}))}});
}
function saveQ(id){
  const q = BUNDLE.long.concat(BUNDLE.mc).find(x=>x.id===id);
  const isMc = q.type==='mc';
  const patch = {stem:val('f_stem'), difficulty:parseInt(val('f_diff')||'1',10),
                 source:val('f_src')};
  if(!isMc){
    patch.parts = parsePairs(val('f_parts'),'|').map(p=>{
      const parts = p[1].split('|');
      return {label:p[0], text:(parts[0]||'').trim(), marks:parseInt((parts[1]||'').trim()||'0',10)};
    });
  } else {
    patch.options = {A:val('f_optA'), B:val('f_optB'), C:val('f_optC'), D:val('f_optD')};
  }
  const steps = textToSteps(val('f_steps'));
  const solution = {
    steps: steps,
    // MC 的 traps 指向選項（opt）；長題沒有選項，用自由標籤（label）
    traps: parsePairs(val('f_traps'),'|').map(p=>{
      const tag = p[0].trim();
      const zh = p.slice(1).join('|').trim();
      return isMc ? {opt: tag.toUpperCase(), zh: zh} : {label: tag, zh: zh};
    }),
    tip: {zh: val('f_tip')}
  };
  (async function(){
    const ok1 = await post({kind:'question', id:id, patch:patch});
    if(ok1) await post({kind:'solution', id:id, patch:Object.assign({}, solution,
      isMc ? {answer:val('f_ans').toUpperCase()} : {})});
  })();
}
loadTopics();
</script>"""
    return page("內容編輯", body)


# ── HTTP ────────────────────────────────────────────────────────────────
LAST_CHECK: dict | None = None
LOCK = threading.Lock()
STATIC_TYPES = {".html": "text/html; charset=utf-8", ".js": "application/javascript; charset=utf-8",
                ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
                ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
                ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2",
                ".woff": "font/woff", ".ttf": "font/ttf", ".md": "text/plain; charset=utf-8"}


class Handler(BaseHTTPRequestHandler):
    server_version = "Learn-Panel/1.0"

    def log_message(self, fmt, *args):                        # 靜音 access log
        pass

    def _send(self, obj, code: int = 200, ctype: str = "application/json; charset=utf-8"):
        body = obj if isinstance(obj, bytes) else json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _json_body(self) -> dict:
        try:
            n = int(self.headers.get("Content-Length") or 0)
            return json.loads(self.rfile.read(n).decode("utf-8")) if n else {}
        except Exception:                                     # noqa: BLE001
            return {}

    def do_GET(self):  # noqa: N802
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        if path in ("/", "/index.html"):
            return self._send(render_index(status(), git_state(), LAST_CHECK),
                              200, "text/html; charset=utf-8")
        if path in ("/review", "/review/"):
            return self._send(render_review(status()), 200, "text/html; charset=utf-8")
        if path in ("/edit", "/edit/"):
            return self._send(render_edit(), 200, "text/html; charset=utf-8")
        if path == "/api/edit":
            qs = urllib.parse.parse_qs(parsed.query)
            tid = (qs.get("topic") or [""])[0].strip()
            if not tid:
                ldoc = load("lessons.json", {"topics": []})
                return self._send({"ok": True, "topic": None,
                                   "topics": [{"id": t.get("id"), "name": t.get("name", {})}
                                              for t in ldoc.get("topics", [])]})
            return self._send(_topic_bundle(tid))
        if path == "/api/status":
            return self._send(status())
        if path == "/api/git":
            return self._send(git_state())
        if path.startswith("/site/"):
            return self._static(LEARN_SITE, path[len("/site/"):])
        if path.startswith("/media/"):
            return self._static(os.path.join(LEARN_DATA, "raw", "media"), path[len("/media/"):])
        return self._send({"ok": False, "error": "not found: " + path}, 404)

    def _static(self, root: str, rel: str):
        full = os.path.normpath(os.path.join(root, rel))
        if not full.startswith(os.path.normpath(root)) or not os.path.isfile(full):
            return self._send({"ok": False, "error": "not found"}, 404)
        ext = os.path.splitext(full)[1].lower()
        ctype = STATIC_TYPES.get(ext, "application/octet-stream")
        with open(full, "rb") as f:
            return self._send(f.read(), 200, ctype)

    def do_POST(self):  # noqa: N802
        global LAST_CHECK
        path = urllib.parse.urlparse(self.path).path
        body = self._json_body()

        if path == "/api/hold":
            with LOCK:
                pub = load("publish.json", {"holdTopics": []})
                hold = {str(x) for x in (pub.get("holdTopics") or [])}
                tid = str(body.get("topic") or "")
                if not tid:
                    return self._send({"ok": False, "error": "missing topic"}, 400)
                if body.get("hold"):
                    hold.add(tid)
                else:
                    hold.discard(tid)
                pub["holdTopics"] = sorted(hold)
                pub["updatedAt"] = now_iso()
                save("publish.json", pub)
            return self._send({"ok": True, "holdTopics": sorted(hold)})

        if path == "/api/review":
            qid = str(body.get("qid") or "")
            action = str(body.get("action") or "")
            note = str(body.get("note") or "")
            if not qid or action not in ("approve", "keep"):
                return self._send({"ok": False, "error": "bad request"}, 400)
            with LOCK:
                bank = load("bank.json", {"questions": []})
                hit = None
                for q in bank.get("questions", []):
                    if q.get("id") == qid:
                        hit = q
                        break
                if hit is None:
                    return self._send({"ok": False, "error": "question not found"}, 404)
                if action == "approve":
                    hit["review"] = None
                    hit["reviewedAt"] = now_iso()
                    hit["reviewedBy"] = "teacher-panel"
                    save("bank.json", bank)
                log = load("review_log.json", {"entries": []})
                log.setdefault("entries", []).append({
                    "at": now_iso(), "qid": qid, "action": action, "note": note,
                    "by": "teacher-panel",
                })
                save("review_log.json", log)
            return self._send({"ok": True, "qid": qid, "action": action})

        if path == "/api/edit":
            kind = str(body.get("kind") or "")
            ident = str(body.get("id") or "")
            patch = body.get("patch") or {}
            if not kind or not ident or not isinstance(patch, dict):
                return self._send({"ok": False, "errors": ["bad request"]}, 400)
            with LOCK:
                res = apply_edit(kind, ident, patch)
                if res.get("checks"):
                    LAST_CHECK = {"ok": res.get("checksOk"),
                                  "steps": [{"name": s["cmd"], "ok": s["ok"], "out": s["out"]}
                                            for s in res["checks"]],
                                  "at": now_iso()}
            return self._send(res, 200 if res.get("ok") else 400)

        if path == "/api/check":
            with LOCK:
                LAST_CHECK = run_checks()
            return self._send(LAST_CHECK)

        if path == "/api/publish":
            with LOCK:
                res = publish(str(body.get("message") or ""), bool(body.get("push")))
                LAST_CHECK = (res.get("steps") or [{}])[0] if res.get("steps") else LAST_CHECK
            return self._send(res)

        return self._send({"ok": False, "error": "not found: " + path}, 404)


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:                                         # noqa: BLE001
        pass
    ap = argparse.ArgumentParser(description="自學追上站本機維護平台")
    ap.add_argument("--port", type=int, default=8788)
    ap.add_argument("--no-browser", action="store_true")
    args = ap.parse_args(argv)

    httpd = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    url = f"http://127.0.0.1:{args.port}/"
    print(f"自學追上站維護平台：{url}")
    print(f"  資料層：{os.path.relpath(LEARN_DATA, BASE)}")
    print(f"  前端預覽：{url}site/index.html")
    print("  Ctrl+C 結束")
    if not args.no_browser:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n再見")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
