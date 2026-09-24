r"""本機控制面板（僅 127.0.0.1，零額外依賴）。

用途：老師在自己的電腦上
  1) 上載新試卷（PDF + Gemini 整卷 JSON）→ 切題 → 入庫
  2) 看題庫／解答／驗算覆蓋率、需目視確認清單
  3) 解題隊列（產生待解清單與可複製的提示詞，交給 CodeBuddy 自動化）
  4) 一鍵發佈：跑完檢查後 git commit + push（GitHub Pages 自動上線）

啟動：
    雙擊 start-panel.bat      （或 python tools\panel_server.py --port 8787）
"""
from __future__ import annotations

import datetime
import io
import json
import os
import re
import shutil
import subprocess
import sys
import threading
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import fitz  # PyMuPDF：面板即時重裁用

# 控制台訊息一律英文（cmd/PowerShell 的 codepage 對中文不友善）；
# 網頁介面仍是中文（瀏覽器用 UTF-8，沒有這個問題）。
if hasattr(sys.stdout, "buffer"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import release_model as rm  # noqa: E402  （發布治理：狀態、邊界、收回）

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = sys.executable
PANEL_HTML = os.path.join(BASE, "tools", "panel", "index.html")
DATA = os.path.join(BASE, "data")
INBOX = os.path.join(BASE, "inbox")
RUN_LOCK = threading.Lock()
STARTED_AT = datetime.datetime.now()          # 行程啟動時間（用來偵測「程式已更新但沒重啟」）
SERVER_CODE = os.path.join(BASE, "tools", "panel_server.py")


def code_mtime() -> float:
    try:
        return os.path.getmtime(SERVER_CODE)
    except OSError:
        return 0.0


# ───────────────────────── 小工具 ─────────────────────────
def load(name: str, default):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        return default
    try:
        return json.load(open(path, encoding="utf-8-sig"))
    except Exception as e:  # noqa: BLE001
        print(f"[warn] cannot read {name}: {e!r}")
        return default


def node_exe() -> str:
    for cand in (
        os.environ.get("NODE_EXE"),
        r"C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe",
    ):
        if cand and os.path.exists(cand):
            return cand
    return "node"


def run(cmd: list[str], timeout: int = 900) -> dict:
    """執行外部指令並回傳 {cmd, code, out}。"""
    shown = " ".join(cmd if cmd[0] != PY else ["python"] + cmd[1:])
    print(f"$ {shown}")
    try:
        p = subprocess.run(
            cmd, cwd=BASE, capture_output=True, text=True,
            encoding="utf-8", errors="replace", timeout=timeout,
        )
        out = (p.stdout or "") + (p.stderr or "")
        print(out.strip()[-2000:])
        return {"cmd": shown, "code": p.returncode, "out": out.strip()}
    except subprocess.TimeoutExpired:
        return {"cmd": shown, "code": -1, "out": f"[timeout] exceeded {timeout}s"}
    except FileNotFoundError as e:
        return {"cmd": shown, "code": -1, "out": f"[command not found] {e}"}


def py_tool(*args: str) -> list[str]:
    return [PY, os.path.join("tools", args[0]), *args[1:]]


def verify_coverage() -> dict:
    """讀 verify_answers.py 的 CHECKS 表（純文字解析）。

    不用 import：該模組載入時會重新包裝 sys.stdout，會干擾本程式的輸出。
    """
    path = os.path.join(BASE, "tools", "verify_answers.py")
    try:
        src = open(path, encoding="utf-8").read()
    except OSError as e:
        return {"checked": [], "count": 0, "error": repr(e)}
    block = re.search(r"CHECKS\s*=\s*\{(.*?)\n\}", src, re.S)
    ids = re.findall(r'"([A-Za-z0-9\-]+-q\d+)"', block.group(1) if block else src)
    uniq = sorted(set(ids))
    return {"checked": uniq, "count": len(uniq)}


def now_iso() -> str:
    return datetime.datetime.now().isoformat(timespec="seconds")


def cut_index() -> dict:
    return load("cut_index.json", {"pdf": "p2.pdf", "questions": []})


def find_cut(qid: str) -> dict | None:
    return next((q for q in cut_index().get("questions", []) if q["id"] == qid), None)


def auto_box(qid: str) -> list[float] | None:
    """用 OCR 行快取算「下一題題號 −6pt」的自動裁切框（不重跑 OCR）。"""
    item = find_cut(qid)
    if not item:
        return None
    path = os.path.join(BASE, "review", "ocr_rows.json")
    if not os.path.exists(path):
        return item.get("cropPt")
    try:
        doc = json.load(open(path, encoding="utf-8-sig"))
    except Exception:  # noqa: BLE001
        return item.get("cropPt")
    page = next((p for p in doc["pages"] if p["page"] == item["page"]), None)
    if not page:
        return item.get("cropPt")
    anchors = sorted([(r["y"], r["num"]) for r in page["rows"] if r.get("isAnchor")], key=lambda t: t[0])
    idx = next((i for i, (_y, n) in enumerate(anchors) if n == item["no"]), None)
    if idx is None:
        return item.get("cropPt")
    ph = page["h"]
    y0 = max(0.0, anchors[idx][0] - 18.0)
    y1 = (anchors[idx + 1][0] - 6.0) if idx + 1 < len(anchors) else ph - 8.0
    return [40.0, round(y0, 1), round(page["w"] - 20.0, 1), round(y1, 1)]


def recrop(qid: str, box: list[float], figure: list[float] | None = None) -> dict:
    """依指定框即時重裁單題，並同步到 site/。"""
    item = find_cut(qid)
    if not item:
        return {"ok": False, "error": f"cut_index.json 找不到 {qid}"}
    pdf = os.path.join(BASE, cut_index().get("pdf") or "p2.pdf")
    if not os.path.exists(pdf):
        return {"ok": False, "error": f"找不到 PDF：{pdf}"}
    doc = fitz.open(pdf)
    page = doc[item["page"]]
    z = 3.125
    x0, y0, x1, y1 = [float(v) for v in box]
    if x1 - x0 < 50 or y1 - y0 < 30:
        doc.close()
        return {"ok": False, "error": "裁切框太小"}
    band = page.get_pixmap(matrix=fitz.Matrix(z, z), clip=fitz.Rect(x0, y0, x1, y1))
    out = os.path.join(BASE, "images", "questions", f"{qid}.png")
    if not figure:
        band.save(out)
    else:
        fx0, fy0, fx1, fy1 = [float(v) for v in figure]
        cont = page.get_pixmap(matrix=fitz.Matrix(z, z), clip=fitz.Rect(fx0, fy0, fx1, fy1))
        n = band.n
        xoff = round((fx0 - x0) * z)
        W = max(band.width, xoff + cont.width)
        H = band.height + cont.height
        buf = bytearray(b"\xff" * (W * H * n))
        for src, xo, yo in ((band, 0, 0), (cont, xoff, band.height)):
            for r in range(src.height):
                s = r * src.stride
                d = ((yo + r) * W + xo) * n
                buf[d:d + src.width * n] = src.samples[s:s + src.width * n]
        fitz.Pixmap(band.colorspace, W, H, bytes(buf), band.alpha).save(out)
    doc.close()
    shutil.copyfile(out, os.path.join(BASE, "site", "images", "questions", f"{qid}.png"))
    return {"ok": True, "bytes": os.path.getsize(out), "box": [round(v, 1) for v in box]}


def question_detail(qid: str) -> dict:
    bank = load("bank.json", {"questions": []})
    q = next((x for x in bank["questions"] if x["id"] == qid), None)
    if not q:
        return {"ok": False, "error": f"{qid} 不在題庫"}
    sol = load("solutions.json", {"solutions": {}}).get("solutions", {}).get(qid)
    edits = load("question_edits.json", {"edits": {}}).get("edits", {}).get(qid)
    cuts = load("cut_overrides.json", {"crops": {}}).get("crops", {}).get(qid)
    ver = load(os.path.join("ai", "answer_verification.json"), {})
    vres = next((r for r in ver.get("results", []) if r["id"] == qid), None)
    paper = q.get("paper")
    transcript = None
    tpath = os.path.join(DATA, "transcripts", f"{paper}.json")
    if os.path.exists(tpath):
        try:
            tq = json.load(open(tpath, encoding="utf-8-sig"))
            transcript = next((x for x in tq.get("questions", [])
                               if int(x.get("question_number", -1)) == q["no"]), None)
        except Exception:  # noqa: BLE001
            transcript = None
    return {
        "ok": True,
        "qid": qid,
        "bank": q,
        "solution": sol,
        "edits": edits,
        "crop": cuts,
        "transcript": transcript,
        "cutIndex": find_cut(qid),
        "autoBox": auto_box(qid),
        "verification": vres,
        "imgVersion": int(datetime.datetime.now().timestamp()),
    }


def save_qtext(qid: str, payload: dict) -> dict:
    path = os.path.join(DATA, "question_edits.json")
    doc = load("question_edits.json", {"version": 1, "edits": {}})
    edits = doc.setdefault("edits", {})
    if payload.get("reset"):
        edits.pop(qid, None)
    else:
        entry = {k: payload[k] for k in ("stem_text", "stem_latex", "figure", "notes") if k in payload}
        if isinstance(payload.get("options"), dict):
            entry["options"] = {L: payload["options"].get(L) for L in "ABCD"}
        if not entry:
            return {"ok": False, "error": "沒有要儲存的欄位"}
        entry["at"] = now_iso()
        edits[qid] = entry
    with open(path, "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False, indent=2)
        f.write("\n")
    steps = [{"cmd": f"寫入 {os.path.relpath(path, BASE)}（{qid}{' 已還原' if payload.get('reset') else ''}）",
              "code": 0, "out": f"現有修訂 {len(edits)} 題"}]
    for cmd in (py_tool("build_bank.py"), py_tool("make_site_data.py")):
        r = run(cmd)
        steps.append(r)
        if r["code"] != 0:
            return {"ok": False, "steps": steps}
    return {"ok": True, "steps": steps}


def save_qsol(qid: str, payload: dict) -> dict:
    sol = payload.get("solution") or {}
    entry = {"answer": payload.get("answer"), "verify": payload.get("verify") or "checked",
             "solution": sol}
    if payload.get("review"):
        entry["review"] = payload["review"]
    tmp_dir = os.path.join(DATA, "ai")
    os.makedirs(tmp_dir, exist_ok=True)
    tmp = os.path.join(tmp_dir, "_panel_solution.json")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump({"solutions": {qid: entry}}, f, ensure_ascii=False, indent=1)
    steps = []
    for cmd in ([PY, os.path.join("tools", "merge_solutions.py"),
                 "--file", os.path.relpath(tmp, BASE), "--force"],
                py_tool("make_site_data.py")):
        r = run(cmd)
        steps.append(r)
        if r["code"] != 0:
            return {"ok": False, "steps": steps}
    return {"ok": True, "steps": steps}


PAPER_ID_RE = re.compile(r"^(\d{4})-p(\d+)$")


def paper_label(p: dict, fallback: str) -> str:
    """左側欄的分組標題：歷年卷 → '2025 Paper 2'；自訂卷 → 卷名；最後退回 paper id。"""
    pid = str(p.get("id") or fallback or "")
    m = PAPER_ID_RE.match(pid)
    if m:
        return f"{m.group(1)} Paper {m.group(2)}"
    return str(p.get("name") or pid or "（未分類）")


def qlist() -> list[dict]:
    bank = load("bank.json", {"questions": []})
    sol = load("solutions.json", {"solutions": {}}).get("solutions", {})
    ver = load(os.path.join("ai", "answer_verification.json"), {})
    verified = {r["id"] for r in ver.get("results", []) if r.get("ok")}
    edits = load("question_edits.json", {"edits": {}}).get("edits", {})
    crops = load("cut_overrides.json", {"crops": {}}).get("crops", {})
    papers = {p.get("id"): p for p in bank.get("papers", [])}
    out = []
    for q in bank["questions"]:
        s = sol.get(q["id"]) or {}
        pmeta = papers.get(q.get("paper")) or {}
        out.append({
            "id": q["id"], "code": q.get("code"), "no": q.get("no"), "paper": q.get("paper"),
            "paperLabel": paper_label(pmeta, q.get("paper")),
            "paperName": pmeta.get("name") or "",
            "unit": (q.get("topic") or {}).get("zh") or (q.get("topic") or {}).get("en"),
            "difficulty": q.get("difficulty"), "hasFigure": bool(q.get("figure")),
            "answer": s.get("answer"), "verify": s.get("verify"),
            "verified": q["id"] in verified, "edited": q["id"] in edits,
            "cropManual": q["id"] in crops, "review": s.get("review"),
        })
    return out


def page_png(qid: str) -> tuple[bytes, float, float] | None:
    item = find_cut(qid)
    if not item:
        return None
    pdf = os.path.join(BASE, cut_index().get("pdf") or "p2.pdf")
    doc = fitz.open(pdf)
    page = doc[item["page"]]
    pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5))
    data = pix.tobytes("png")
    pw, ph = page.rect.width, page.rect.height
    doc.close()
    return data, pw, ph


def save_crop(qid: str, payload: dict) -> dict:
    path = os.path.join(DATA, "cut_overrides.json")
    doc = load("cut_overrides.json", {"version": 1, "crops": {}})
    crops = doc.setdefault("crops", {})
    if payload.get("mode") == "auto":
        box = auto_box(qid)
        if not box:
            return {"ok": False, "error": "無法計算自動裁切框（缺 OCR 快取？）"}
        crops.pop(qid, None)                    # 清除人工覆寫＝回到自動
    else:
        box = [float(payload[k]) for k in ("x0", "y0", "x1", "y1")]
        crops[qid] = {"crop": [round(v, 1) for v in box],
                      "figure": payload.get("figure") or None, "at": now_iso()}
    with open(path, "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False, indent=2)
        f.write("\n")
    r = recrop(qid, box, payload.get("figure"))
    if not r["ok"]:
        return {"ok": False, "steps": [{"cmd": f"重裁 {qid}", "code": -1, "out": r["error"]}]}
    return {"ok": True, "steps": [{"cmd": f"重裁 {qid} → {r['bytes']} bytes",
                                   "code": 0, "out": f"框：[{', '.join(str(v) for v in box)}]"
                                                     + ("（已回到自動規則）" if payload.get("mode") == "auto"
                                                        else "（已記錄為人工調整）")}]}


def git_porcelain() -> list[str]:
    """未提交的變更（安靜執行，供面板顯示）。"""
    try:
        p = subprocess.run(["git", "status", "--porcelain"], cwd=BASE, capture_output=True,
                           text=True, encoding="utf-8", errors="replace", timeout=30)
        return [ln for ln in (p.stdout or "").splitlines() if ln.strip()]
    except (OSError, subprocess.SubprocessError):
        return []


def releases_view() -> dict:
    """發布管理頁的資料：每批的狀態與題目、可換入的庫存、統計、未提交變更。"""
    bank = load("bank.json", {"questions": [], "papers": []})
    sol = load("solutions.json", {"solutions": {}}).get("solutions", {})
    doc = rm.load_releases()
    rels = doc["releases"]
    by_id = {q["id"]: q for q in bank.get("questions", [])}
    live, revoked, _pending = rm.live_qids(rels)
    scheduled = {i for r in rels for i in rm.ids_of(r)}

    def qbrief(qid: str) -> dict:
        q = by_id.get(qid) or {}
        s = sol.get(qid) or {}
        return {
            "id": qid, "code": q.get("code") or qid,
            "unit": (q.get("topic") or {}).get("zh") or (q.get("topic") or {}).get("en") or "",
            "difficulty": q.get("difficulty"),
            "solved": qid in sol, "answer": s.get("answer"), "verify": s.get("verify"),
            "live": qid in live, "revoked": qid in revoked,
        }

    batches = []
    for r in rels:
        batches.append({
            "batch": r.get("batch"), "date": rm.date_of(r), "status": rm.status_of(r),
            "title": (r.get("title") or {}).get("zh") or (r.get("title") or {}).get("en") or "",
            "notice": r.get("notice") or None,
            "withdrawnIds": sorted(rm.held_ids(r)),
            "questions": [qbrief(i) for i in rm.ids_of(r)],
            "history": list(reversed(r.get("history") or []))[:10],
        })

    inventory = [qbrief(q["id"]) for q in bank.get("questions", [])
                 if q["id"] in sol and q["id"] not in scheduled]
    return {
        "asOf": rm.today_iso(),
        "stats": rm.summary(rels),
        "batches": batches,
        "inventory": inventory,
        "dirty": git_porcelain(),
    }


def release_action(payload: dict) -> dict:
    """執行一次發布管理操作；所有變更都要填原因，寫入 history（可審計）。"""
    def bad(msg: str) -> dict:
        return {"ok": False, "error": msg}

    action = str(payload.get("action") or "")
    note = str(payload.get("note") or "").strip()
    if not note:
        return bad("請填寫原因（會寫入操作記錄，方便日後回溯）")

    doc = rm.load_releases()
    rels = doc["releases"]
    r = rm.find_batch(rels, batch=payload.get("batch"))
    if not r:
        return bad(f"找不到批次 {payload.get('batch')}")

    qid = str(payload.get("qid") or "")
    ids = rm.ids_of(r)
    held = rm.held_ids(r)
    msg = ""

    if action == "withdraw_batch":
        if rm.status_of(r) == rm.WITHDRAWN:
            return bad("此批次已經是收回狀態")
        r["status"] = rm.WITHDRAWN
        rm.append_history(r, "withdraw", note, scope="batch")
        msg = f"批次 {r.get('batch')} 已收回（{len(ids)} 題下架）"

    elif action == "restore_batch":
        if rm.status_of(r) == rm.PUBLISHED:
            return bad("此批次本來就是發放中")
        r["status"] = rm.PUBLISHED
        rm.append_history(r, "restore", note, scope="batch")
        msg = f"批次 {r.get('batch')} 已恢復發放"

    elif action == "withdraw_question":
        if qid not in ids:
            return bad(f"{qid} 不在批次 {r.get('batch')} 內")
        held.add(qid)
        r["withdrawnIds"] = sorted(held)
        rm.append_history(r, "withdraw", note, scope="question", qid=qid)
        msg = f"{qid} 已收回（同批其餘照常）"

    elif action == "restore_question":
        held.discard(qid)
        if held:
            r["withdrawnIds"] = sorted(held)
        else:
            r.pop("withdrawnIds", None)
        rm.append_history(r, "restore", note, scope="question", qid=qid)
        msg = f"{qid} 已恢復"

    elif action == "reschedule":
        date = str(payload.get("date") or "")
        if not re.match(r"^\d{4}-\d{2}-\d{2}$", date):
            return bad("日期格式應為 YYYY-MM-DD")
        clash = [x for x in rels if rm.date_of(x) == date and x is not r]
        if clash:
            return bad(f"{date} 已經有批次 {clash[0].get('batch')}")
        old = rm.date_of(r)
        r["date"] = date
        rm.append_history(r, "reschedule", f"{note}（{old} → {date}）", scope="batch")
        msg = f"批次 {r.get('batch')} 改期：{old} → {date}"

    elif action == "swap":
        new_qid = str(payload.get("newQid") or "")
        if qid not in ids:
            return bad(f"{qid} 不在批次 {r.get('batch')} 內")
        used = {i for x in rels for i in rm.ids_of(x)}
        if not new_qid:
            return bad("請選擇要換入的題目")
        if new_qid in used:
            return bad(f"{new_qid} 已在其他批次，請先把它移出再換")
        if new_qid not in load("solutions.json", {"solutions": {}}).get("solutions", {}):
            return bad(f"{new_qid} 還沒有解答，先解題再換入")
        ids[ids.index(qid)] = new_qid
        r["ids"] = ids
        held.discard(qid)
        if held:
            r["withdrawnIds"] = sorted(held)
        else:
            r.pop("withdrawnIds", None)
        rm.append_history(r, "swap", f"{note}（{qid} → {new_qid}）", scope="question", qid=qid)
        msg = f"批次 {r.get('batch')}：{qid} 換成 {new_qid}"

    elif action == "notice":
        en, zh = str(payload.get("en") or "").strip(), str(payload.get("zh") or "").strip()
        if not en and not zh:
            return bad("公告內容不能是空的")
        r["notice"] = {"en": en or zh, "zh": zh or en}
        rm.append_history(r, "notice", f"{note}（公告：{zh or en}）", scope="batch")
        msg = f"批次 {r.get('batch')} 已加上更正公告"

    elif action == "clear_notice":
        r.pop("notice", None)
        rm.append_history(r, "notice", f"{note}（清除公告）", scope="batch")
        msg = f"批次 {r.get('batch')} 的公告已清除"

    else:
        return bad(f"未知操作 {action}")

    rm.save_releases(doc)
    return {"ok": True, "message": msg, "view": releases_view()}


def status() -> dict:
    bank = load("bank.json", {"questions": [], "papers": []})
    sol = load("solutions.json", {"solutions": {}}).get("solutions", {})
    rel = load("releases.json", {"releases": []}).get("releases", [])
    qs = bank.get("questions", [])
    by_id = {q["id"]: q for q in qs}

    solved = set(sol)
    cov = verify_coverage()
    checked = set(cov["checked"])
    unsolved = [
        {"id": q["id"], "code": q.get("code"), "no": q["no"],
         "topic": (q.get("topic") or {}).get("zh") or (q.get("topic") or {}).get("en"),
         "difficulty": q.get("difficulty"),
         "hasFigure": bool(q.get("figure"))}
        for q in qs if q["id"] not in solved
    ]
    merged: dict[str, dict] = {}
    for qid, e in sol.items():
        if e.get("review"):
            merged.setdefault(qid, {"id": qid, "code": (by_id.get(qid) or {}).get("code"), "why": []})
            merged[qid]["why"].append(e["review"])
    for q in qs:
        if q.get("notes"):
            merged.setdefault(q["id"], {"id": q["id"], "code": q.get("code"), "why": []})
            merged[q["id"]]["why"].append(f"轉寫備註：{q['notes']}")
    reviews_done = load("reviews.json", {"reviews": {}}).get("reviews", {})
    review = [
        {"id": k, "code": v["code"], "why": " ／ ".join(v["why"])}
        for k, v in sorted(merged.items()) if k not in reviews_done
    ]
    confirmed = [
        {"id": k, "code": (by_id.get(k) or {}).get("code"), "verdict": v.get("verdict"),
         "note": v.get("note"), "at": v.get("at")}
        for k, v in sorted(reviews_done.items())
    ]
    pooled = [q for q in qs if q["id"] in solved]
    released_ids = {i for r in rel for i in r.get("ids", [])}
    pool_by_diff = {1: 0, 2: 0, 3: 0}
    for q in pooled:
        if q["id"] not in released_ids:
            pool_by_diff[q.get("difficulty", 2)] = pool_by_diff.get(q.get("difficulty", 2), 0) + 1

    releases = []
    for r in rel:
        releases.append({
            "date": r.get("date"), "batch": r.get("batch"),
            "title": (r.get("title") or {}).get("zh") or (r.get("title") or {}).get("en"),
            "ids": r.get("ids", []),
            "codes": [(by_id.get(i) or {}).get("code") for i in r.get("ids", [])],
            "allSolved": all(i in solved for i in r.get("ids", [])),
        })

    queue = load("queue.json", {"ids": [], "createdAt": None})
    ver = load(os.path.join("ai", "answer_verification.json"), {})
    return {
        "papers": bank.get("papers", []),
        "totals": {
            "questions": len(qs), "solved": len(solved), "unsolved": len(unsolved),
            "releases": len(rel), "releasedQuestions": len(released_ids),
            "verifyChecks": cov["count"],
        },
        "pool_by_diff": pool_by_diff,
        "unsolved": unsolved,
        "review": review,
        "confirmed": confirmed,
        "releases": releases,
        "queue": {"ids": queue.get("ids", []), "createdAt": queue.get("createdAt")},
        "server": {
            "startedAt": STARTED_AT.isoformat(timespec="seconds"),
            "codeMtime": datetime.datetime.fromtimestamp(code_mtime()).isoformat(timespec="seconds"),
            # 程式檔比行程新 → 這個行程是舊的，新功能（如 /edit）不會生效
            "stale": code_mtime() > STARTED_AT.timestamp() + 1,
        },
        "verification": {
            "asOf": ver.get("generatedAt"),
            "unverified": ver.get("unverified", []),
            "failed": [r for r in ver.get("results", []) if not r.get("ok")],
        },
        "paths": {"inbox": INBOX, "transcripts": os.path.join(DATA, "transcripts")},
    }


def save_upload(parsed, body: bytes) -> dict:
    q = urllib.parse.parse_qs(parsed.query)
    kind = (q.get("kind") or [""])[0]
    name = os.path.basename((q.get("name") or [""])[0])
    if not name:
        return {"ok": False, "error": "缺少 name 參數"}
    if kind == "pdf":
        os.makedirs(INBOX, exist_ok=True)
        dst = os.path.join(INBOX, name)
    elif kind == "transcript":
        if not name.lower().endswith(".json"):
            return {"ok": False, "error": "轉寫檔必須是 .json"}
        os.makedirs(os.path.join(DATA, "transcripts"), exist_ok=True)
        dst = os.path.join(DATA, "transcripts", name)
        try:
            json.loads(body.decode("utf-8-sig"))
        except Exception as e:  # noqa: BLE001
            return {"ok": False, "error": f"JSON 解析失敗：{e}"}
    elif kind == "figures":
        os.makedirs(os.path.join(INBOX, "figures"), exist_ok=True)
        dst = os.path.join(INBOX, "figures", name)
    else:
        return {"ok": False, "error": f"未知的 kind：{kind}"}
    with open(dst, "wb") as f:
        f.write(body)
    return {"ok": True, "saved": os.path.relpath(dst, BASE), "bytes": len(body)}


ACTIONS = {
    "cut": lambda p: [
        py_tool("cut_questions.py", "--pdf", p["pdf"], "--paper", p["paper"]),
    ],
    "ingest": lambda p: [
        py_tool("build_bank.py"),
        py_tool("validate_bank.py"),
        py_tool("make_site_data.py"),
        # 新卷入庫就做 KaTeX 體檢：轉寫偶爾會在選項多包 $...$，早抓早修
        [node_exe(), os.path.join("tools", "katex_check.js")],
    ],
    "check": lambda p: [
        py_tool("validate_bank.py"),
        py_tool("verify_answers.py", "--json"),
        py_tool("audit_crops.py", "--strict"),
        py_tool("syllabus_check.py"),
        # 本機預覽（含未發放題目）：smoke test 用它驗排版；build/ 不會進 git
        py_tool("make_site_data.py", "--all", "--out", "build/preview"),
        [node_exe(), os.path.join("tools", "site_check.js")],
        [node_exe(), os.path.join("tools", "katex_check.js")],
        [node_exe(), os.path.join("tools", "smoke_test.js")],
    ],
    "publish": lambda p: [
        py_tool("validate_bank.py"),
        py_tool("verify_answers.py"),
        py_tool("audit_crops.py", "--strict"),
        py_tool("syllabus_check.py"),
        py_tool("make_site_data.py"),
        py_tool("make_site_data.py", "--all", "--out", "build/preview"),
        [node_exe(), os.path.join("tools", "site_check.js")],
        [node_exe(), os.path.join("tools", "katex_check.js")],
        [node_exe(), os.path.join("tools", "smoke_test.js")],
        # 有變更才 commit、有領先才 push；「沒有變更」不再是失敗
        py_tool("git_publish.py", "--message", f"發布：批次 {p.get('batch') or ''}（本機面板）".strip()),
    ],
    "pick": lambda p: [py_tool("pick_batch.py", "--apply")],
    "review": lambda p: [py_tool("review_sheet.py", "--open")],
    "queue": lambda p: [],          # 由 handler 直接處理
    # ── 發布管理：收回／恢復／改期／換題之後「套用」──
    "release-rebuild": lambda p: [
        py_tool("make_site_data.py"),
        py_tool("make_site_data.py", "--all", "--out", "build/preview"),
    ],
    "release-publish": lambda p: [
        py_tool("syllabus_check.py"),
        py_tool("make_site_data.py"),
        py_tool("make_site_data.py", "--all", "--out", "build/preview"),
        [node_exe(), os.path.join("tools", "site_check.js")],
        [node_exe(), os.path.join("tools", "katex_check.js")],
        [node_exe(), os.path.join("tools", "smoke_test.js")],
        py_tool("git_publish.py", "--message", f"發布：{p.get('msg') or '發布管理（本機面板）'}"),
    ],
    "release-emergency": lambda p: [
        # 緊急收回：先讓學生看不到，再慢慢修。跳過完整檢查，但仍走 git（可回溯）
        py_tool("make_site_data.py"),
        py_tool("git_publish.py", "--message", f"緊急收回：{p.get('msg') or '（本機面板）'}"),
    ],
}


class Handler(BaseHTTPRequestHandler):
    server_version = "HKDSE-Panel/1.0"

    def log_message(self, fmt, *args):  # 靜音預設 access log
        pass

    # ── 回應工具 ──
    def _send(self, obj, code: int = 200, ctype: str = "application/json; charset=utf-8"):
        body = obj if isinstance(obj, bytes) else json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _not_found(self, path: str):
        """瀏覽器要 HTML、程式要 JSON；順便提示「可能是舊行程」。"""
        accept = self.headers.get("Accept") or ""
        if "text/html" in accept:
            safe = path.replace("<", "&lt;").replace(">", "&gt;")
            body = ("<!DOCTYPE html><html lang='zh-Hant'><head><meta charset='utf-8'>"
                    "<title>找不到</title></head>"
                    "<body style='font-family:system-ui,\"Microsoft JhengHei\",sans-serif;padding:40px;line-height:1.8'>"
                    "<h2>找不到這個路徑</h2>"
                    f"<p>請求：<code>{safe}</code></p>"
                    "<p>如果這是<b>剛新增的功能</b>（例如工作台 <code>/edit</code>），"
                    "代表目前跑的是<b>舊的面板行程</b>——"
                    "請回控制面板按右上角「重啟面板」，或關掉視窗重新雙擊 "
                    "<code>start-panel.bat</code>。</p>"
                    "<p><a href='/'>← 回控制面板</a></p></body></html>")
            return self._send(body.encode("utf-8"), 404, "text/html; charset=utf-8")
        return self._send({"ok": False, "error": "not found"}, 404)

    # ── GET ──
    def do_GET(self):  # noqa: N802
        parsed = urllib.parse.urlparse(self.path)
        q = urllib.parse.parse_qs(parsed.query)
        if parsed.path in ("/", "/index.html", "/panel/"):
            if not os.path.exists(PANEL_HTML):
                return self._send({"error": "缺少 tools/panel/index.html"}, 500)
            with open(PANEL_HTML, "rb") as f:
                return self._send(f.read(), 200, "text/html; charset=utf-8")
        if parsed.path in ("/review", "/review/"):
            # 複核清單：不存在就即時生成，然後回傳（頁面用相對路徑 ../images/…，
            # 所以下面也要提供 /images/ 靜態路由）
            sheet = os.path.join(BASE, "review", "review_sheet.html")
            if not os.path.exists(sheet):
                r = run(py_tool("review_sheet.py"))
                if r["code"] != 0:
                    return self._send({"ok": False, "error": r["out"]}, 500)
            with open(sheet, "rb") as f:
                return self._send(f.read(), 200, "text/html; charset=utf-8")
        if parsed.path.startswith("/images/"):
            full = os.path.normpath(os.path.join(BASE, parsed.path.lstrip("/")))
            allowed = os.path.normpath(os.path.join(BASE, "images"))
            if (full.startswith(allowed) and os.path.isfile(full)
                    and full.lower().endswith((".png", ".jpg", ".jpeg", ".webp"))):
                ctype = "image/png" if full.lower().endswith(".png") else "image/jpeg"
                with open(full, "rb") as f:
                    return self._send(f.read(), 200, ctype)
            return self._send({"ok": False, "error": "image not found"}, 404)
        if parsed.path in ("/edit", "/edit/"):
            path = os.path.join(BASE, "tools", "panel", "edit.html")
            if not os.path.exists(path):
                return self._send({"error": "缺少 tools/panel/edit.html"}, 500)
            with open(path, "rb") as f:
                return self._send(f.read(), 200, "text/html; charset=utf-8")
        if parsed.path in ("/releases", "/releases/"):
            path = os.path.join(BASE, "tools", "panel", "releases.html")
            if not os.path.exists(path):
                return self._send({"error": "缺少 tools/panel/releases.html"}, 500)
            with open(path, "rb") as f:
                return self._send(f.read(), 200, "text/html; charset=utf-8")
        if parsed.path.startswith("/katex/"):
            full = os.path.normpath(os.path.join(BASE, "site", "vendor", parsed.path.lstrip("/")))
            allowed = os.path.normpath(os.path.join(BASE, "site", "vendor"))
            if not (full.startswith(allowed) and os.path.isfile(full)):
                return self._send({"ok": False, "error": "not found"}, 404)
            ext = os.path.splitext(full)[1].lower()
            ctype = {".css": "text/css; charset=utf-8", ".js": "application/javascript; charset=utf-8",
                     ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf"}.get(
                ext, "application/octet-stream")
            with open(full, "rb") as f:
                return self._send(f.read(), 200, ctype)
        if parsed.path == "/api/qlist":
            return self._send({"ok": True, "list": qlist()})
        if parsed.path == "/api/q":
            return self._send(question_detail((q.get("qid") or [""])[0]))
        if parsed.path == "/api/pageimg":
            r = page_png((q.get("qid") or [""])[0])
            if not r:
                return self._send({"ok": False, "error": "找不到題目"}, 404)
            data, pw, ph = r
            self.send_response(200)
            self.send_header("Content-Type", "image/png")
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-store")
            self.send_header("X-Page-Width", str(pw))
            self.send_header("X-Page-Height", str(ph))
            self.end_headers()
            self.wfile.write(data)
            return
        if parsed.path == "/api/status":
            return self._send({"ok": True, "status": status()})
        if parsed.path == "/api/releases":
            return self._send({"ok": True, "view": releases_view()})
        if parsed.path == "/api/prompt":
            path = os.path.join(BASE, "prompts", "automation_solver_prompt.txt")
            txt = open(path, encoding="utf-8").read() if os.path.exists(path) else "（缺少提示詞檔）"
            return self._send({"ok": True, "prompt": txt})
        return self._not_found(parsed.path)

    # ── POST ──
    def do_POST(self):  # noqa: N802
        parsed = urllib.parse.urlparse(self.path)
        length = int(self.headers.get("Content-Length") or 0)
        body = self.rfile.read(length) if length else b""
        q = urllib.parse.parse_qs(parsed.query)

        if parsed.path == "/api/upload":
            return self._send(save_upload(parsed, body))

        if parsed.path in ("/api/qtext", "/api/qsol", "/api/qcrop"):
            qid = (q.get("qid") or [""])[0]
            if not qid:
                return self._send({"ok": False, "error": "缺少 qid"}, 400)
            try:
                payload = json.loads(body.decode("utf-8")) if body else {}
            except Exception as e:  # noqa: BLE001
                return self._send({"ok": False, "error": f"JSON 解析失敗：{e}"}, 400)
            if not RUN_LOCK.acquire(blocking=False):
                return self._send({"ok": False, "error": "已有動作執行中，請稍候"}, 409)
            try:
                fn = {"qtext": save_qtext, "qsol": save_qsol, "qcrop": save_crop}[parsed.path.rsplit("/", 1)[-1]]
                return self._send(fn(qid, payload))
            finally:
                RUN_LOCK.release()

        if parsed.path == "/api/release":
            try:
                payload = json.loads(body.decode("utf-8")) if body else {}
            except Exception as e:  # noqa: BLE001
                return self._send({"ok": False, "error": f"JSON 解析失敗：{e}"}, 400)
            if not RUN_LOCK.acquire(blocking=False):
                return self._send({"ok": False, "error": "已有動作執行中，請稍候"}, 409)
            try:
                return self._send(release_action(payload))
            finally:
                RUN_LOCK.release()

        if parsed.path == "/api/action":
            name = (q.get("name") or [""])[0]
            params = {k: v[0] for k, v in q.items() if k != "name"}
            if name == "restart":
                # 自我重啟：回完這次回應後用 execv 換掉自己（新程式碼立即生效）。
                # 用絕對路徑 + 先切到專案根目錄 —— 行程 cwd 不是 BASE 時，相對路徑會 execv 失敗。
                def _restart() -> None:
                    try:
                        os.chdir(BASE)
                        os.execv(sys.executable, [sys.executable,
                                                  os.path.join(BASE, "tools", "panel_server.py"),
                                                  *sys.argv[1:]])
                    except OSError as e:
                        print(f"[restart] failed: {e}")

                threading.Timer(0.7, _restart).start()
                return self._send({"ok": True, "steps": [
                    {"cmd": "面板重啟中…", "code": 0, "out": "約 2 秒後重新載入此頁"}
                ]})
            if name == "setcode":
                # 把卷別代碼寫進轉寫檔（非歷年卷顯示用，如 MOCK-A → MOCK-A-Q03）
                pid, code = params.get("paper", ""), params.get("code", "")
                path = os.path.join(DATA, "transcripts", f"{pid}.json")
                if not os.path.exists(path):
                    return self._send({"ok": False, "error": f"找不到 {os.path.relpath(path, BASE)}"}, 400)
                doc = json.load(open(path, encoding="utf-8-sig"))
                doc["paperCode"] = code
                with open(path, "w", encoding="utf-8") as f:
                    json.dump(doc, f, ensure_ascii=False, indent=1)
                return self._send({"ok": True, "steps": [
                    {"cmd": f"寫入 paperCode={code} → data/transcripts/{pid}.json", "code": 0,
                     "out": "請按「合併入庫」重建題庫"}
                ]})
            if name == "queue":
                bank = load("bank.json", {"questions": []})
                sol = load("solutions.json", {"solutions": {}}).get("solutions", {})
                ids = [x["id"] for x in bank["questions"] if x["id"] not in sol]
                payload = {"ids": ids, "createdAt": None}
                import datetime
                payload["createdAt"] = datetime.datetime.now().isoformat(timespec="seconds")
                with open(os.path.join(DATA, "queue.json"), "w", encoding="utf-8") as f:
                    json.dump(payload, f, ensure_ascii=False, indent=2)
                return self._send({"ok": True, "steps": [
                    {"cmd": "寫入 data/queue.json", "code": 0,
                     "out": f"待解題目 {len(ids)} 題：" + (", ".join(ids) if ids else "（無）")}
                ]})
            if name not in ACTIONS:
                return self._send({"ok": False, "error": f"未知動作 {name}"}, 400)
            if not RUN_LOCK.acquire(blocking=False):
                return self._send({"ok": False, "error": "已有動作執行中，請稍候"}, 409)
            try:
                steps, ok = [], True
                for cmd in ACTIONS[name](params):
                    r = run(cmd)
                    steps.append(r)
                    if r["code"] != 0:
                        ok = False
                        break
                return self._send({"ok": ok, "steps": steps})
            finally:
                RUN_LOCK.release()

        return self._not_found(parsed.path)


def main() -> int:
    import argparse

    ap = argparse.ArgumentParser(description="HKDSE 本機控制面板")
    ap.add_argument("--port", type=int, default=8787)
    ap.add_argument("--no-browser", action="store_true")
    args = ap.parse_args()

    httpd = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    url = f"http://127.0.0.1:{args.port}/"
    print(f"Panel is running at {url}   (press Ctrl+C to stop)")
    if not args.no_browser:
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nPanel stopped.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
