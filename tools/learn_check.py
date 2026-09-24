#!/usr/bin/env python3
"""自學追上站資料檢查器 —— data/learn/*.json（0 錯誤才可發佈）

檢查項目
  S1 結構：lessons.json 引用的 conceptCard / question id 必須存在
  S2 題目：mc 必須有 A–D 選項；long 必須有 parts；id／code／topic 不可重複或缺少
  S3 題解：每題（含 long）必須有 solution.steps，每步有 math 欄與中文 zh 說明
  S4 答案：mc 的 answer 必須是其中一個選項；traps 指向的選項必須真實存在
  S5 覆核：被課程引用但 review 未清的題目 → 錯誤（不得出站）
  S6 貨幣／定界符：文字欄位不准出現單數 $（會被當成數學定界符）
  S8 概念卡 vocab：每組要有 en／zh，中文欄不可被英文詞頭污染（english = 中文）
  S10 術語一致性：代數語境用「公因式」，不可寫成「公因數」（純數字 H.C.F. 除外）
  R1 課程合規：角度一律用度（禁 rad／弧度／\\frac{\\pi}{n}）
  R2 主解法不得用坐標法或向量法（幾何題）
      → R1／R2 的樣式與 tools/syllabus_check.py 一致，重用同一套規則
  K  由 tools/learn_katex_check.js 逐條用真 KaTeX 解析（另跑）

用法
    python tools/learn_check.py
    python tools/learn_check.py --quiet
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data", "learn")

# ── 課程合規樣式（與 tools/syllabus_check.py 同源）────────────────────────
RAD_PAT = re.compile(
    r"\\operatorname\{rad\}|\\text\{\s*rad|\\mathrm\{rad\}|\bradians?\b|弧度"
    r"|\\frac\{\\pi\}\{\d+\}|\\frac\{\d+\\pi\}\{\d+\}|\\pi\s*/\s*\d|=\s*\\pi\b",
    re.I)

COORD_PAT = re.compile(
    r"坐標|坐标|座標|(?<!-)(?<!without )\bcoordinates?\b|\\overrightarrow|\\vec\{|"
    r"\bvectors?\b|向量",
    re.I)

# 本身屬坐標幾何的課題（用坐標是課程內做法）—— 見 WORKBUDDY-DAILY 4d 的單元表
COORD_NATIVE_UNITS = {2, 8, 9, 10, 12, 13}

# 這些字眼出現在題幹時，整題屬坐標／向量題，不檢查 R2
STEM_COORD_HINT = re.compile(r"coordinate|origin|坐標|座標|坐标|原點|原点|向量|vector", re.I)


def _load(name: str, default=None):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        return default if default is not None else {}
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def _text_of(node) -> str:
    """把任意 JSON 節點攤平成可搜尋的文字。"""
    if node is None:
        return ""
    if isinstance(node, str):
        return node
    if isinstance(node, (int, float)):
        return str(node)
    if isinstance(node, list):
        return " ".join(_text_of(x) for x in node)
    if isinstance(node, dict):
        return " ".join(_text_of(v) for v in node.values())
    return ""


def _dollar_ok(s: str) -> bool:
    """未轉義的 $ 必須成對（貨幣符號要寫 \\$ 或改用純數字）。"""
    return s.replace("\\$", "").count("$") % 2 == 0


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    ap = argparse.ArgumentParser(description="自學追上站資料檢查")
    ap.add_argument("--quiet", action="store_true", help="只印錯誤摘要")
    args = ap.parse_args(argv)

    bank = _load("bank.json", {"questions": []})
    lessons = _load("lessons.json", {"topics": [], "assessments": []})
    concepts = _load("concepts.json", {"cards": []})
    sols = (_load("solutions.json", {"solutions": {}}) or {}).get("solutions") or {}

    errors: list[str] = []
    warnings: list[str] = []

    def err(rule: str, msg: str) -> None:
        errors.append("[%s] %s" % (rule, msg))

    def warn(rule: str, msg: str) -> None:
        warnings.append("[%s] %s" % (rule, msg))

    questions = bank.get("questions", [])
    by_id: dict[str, dict] = {}
    for q in questions:
        qid = q.get("id")
        if not qid:
            err("S2", "有題目缺少 id")
            continue
        if qid in by_id:
            err("S2", "%s：id 重複" % qid)
        by_id[qid] = q

    cards_by_id = {c.get("id"): c for c in concepts.get("cards", [])}

    # ── S1／S5：課程編排引用的 id ─────────────────────────────────────────
    referenced: set[str] = set()
    for t in lessons.get("topics", []):
        tid = t.get("id", "?")
        for les in t.get("lessons", []):
            for cid in les.get("conceptCards", []):
                if cid not in cards_by_id:
                    err("S1", "%s/%s：概念卡 %s 不存在" % (tid, les.get("id"), cid))
            for qid in les.get("longQuestionIds", []) + \
                       [q for page in les.get("mcPages", []) for q in page]:
                referenced.add(qid)
                q = by_id.get(qid)
                if not q:
                    err("S1", "%s/%s：題目 %s 不在 bank.json" % (tid, les.get("id"), qid))
                    continue
                if q.get("type") == "mc" and qid in les.get("longQuestionIds", []):
                    err("S1", "%s：mc 題 %s 被放在長題示範" % (tid, qid))
                if q.get("type") == "long" and qid not in les.get("longQuestionIds", []):
                    err("S1", "%s：long 題 %s 被放在 MC 頁" % (tid, qid))
                if q.get("topic") and q.get("topic") != tid:
                    warn("S1", "%s：題目 %s 的 topic 是 %s" % (tid, qid, q.get("topic")))
                if q.get("review") and not args.quiet:
                    err("S5", "%s：題目 %s 的 review 未清（%s）——不得出站"
                        % (tid, qid, q.get("review")))

    for qid in by_id:
        if qid not in referenced:
            warn("S1", "%s：題目未編入任何課（孤兒題）" % qid)

    # ── S2–S4：題目與題解契約 ─────────────────────────────────────────────
    for q in questions:
        qid = q.get("id", "?")
        qtype = q.get("type")
        if qtype not in ("mc", "long"):
            err("S2", "%s：type 必須是 mc 或 long（現為 %r）" % (qid, qtype))
        for key in ("code", "topic", "difficulty"):
            if q.get(key) in (None, ""):
                err("S2", "%s：缺少 %s" % (qid, key))
        stem = _text_of(q.get("stem"))
        if not stem.strip():
            err("S2", "%s：題幹為空" % qid)
        if not _dollar_ok(stem):
            err("S6", "%s：題幹的 $ 不成對（貨幣請用純數字）" % qid)

    # ── S7：概念卡的公式是否用 {{math:N}} 定位（否則公式會全部排在正文最後）──
    for cid, c in cards_by_id.items():
        maths = c.get("math") or []
        body = _text_of((c.get("body") or {}).get("zh"))
        if len(maths) >= 2 and "{{math" not in body:
            warn("S7", "%s：有 %d 條公式但正文沒有 {{math:N}} 定位標記（公式會全部擠在最後）"
                 % (cid, len(maths)))
        marks = body.count("{{math")
        if marks and marks != len(maths):
            warn("S7", "%s：正文有 %d 個定位標記，但 math 有 %d 條（數量不符）"
                 % (cid, marks, len(maths)))

        s = sols.get(qid)
        if not s:
            err("S3", "%s：缺少題解" % qid)
            continue
        sol = s.get("solution") or {}
        steps = sol.get("steps") or []
        if not steps:
            err("S3", "%s：solution.steps 為空" % qid)
        for i, st in enumerate(steps, 1):
            if "math" not in st:
                err("S3", "%s：steps[%d] 缺少 math 欄" % (qid, i))
            zh = (st.get("zh") or "").strip()
            if len(zh) < 10:
                err("S3", "%s：steps[%d] 中文說明太短（要寫給弱生看）" % (qid, i))
            if not _dollar_ok(zh) or not _dollar_ok(st.get("math", "")):
                err("S6", "%s：steps[%d] 的 $ 不成對" % (qid, i))
        tip = (sol.get("tip") or {}).get("zh")
        if not tip:
            warn("S3", "%s：沒有 tip（可取走的技巧）" % qid)

        options = q.get("options") or {}
        if qtype == "mc":
            missing = [k for k in ("A", "B", "C", "D") if not (options.get(k) or "").strip()]
            if missing:
                err("S2", "%s：MC 缺少選項 %s" % (qid, ",".join(missing)))
            ans = s.get("answer")
            if ans not in options:
                err("S4", "%s：answer=%r 不是其中一個選項" % (qid, ans))
            for tr in sol.get("traps") or []:
                opt = tr.get("opt")
                if opt not in options:
                    err("S4", "%s：traps 指向不存在的選項 %r" % (qid, opt))
                elif opt == ans:
                    err("S4", "%s：traps 指向正確答案 %r" % (qid, opt))
        else:
            # parts 是選填：文字應用題（單一問題）本來就沒有 (a)(b) 分部；
            # 有的話每一部都要有內容。
            for i, pt in enumerate(q.get("parts") or [], 1):
                if not str(pt.get("text") or "").strip():
                    err("S2", "%s：parts[%d] 沒有內容" % (qid, i))
            # 分部分數加總必須等於總分（否則學生看到的計分欄位自相矛盾）
            parts = q.get("parts") or []
            if parts and q.get("marks") is not None:
                try:
                    part_sum = sum(int(p.get("marks") or 0) for p in parts)
                except (TypeError, ValueError):
                    part_sum = None
                if part_sum is not None and part_sum != q.get("marks"):
                    err("S2", "%s：parts 分數合計 %d ≠ 總分 %s"
                        % (qid, part_sum, q.get("marks")))
            if s.get("answer") not in (None, ""):
                warn("S4", "%s：long 題不需要 answer（現為 %r）" % (qid, s.get("answer")))
            if options:
                warn("S2", "%s：long 題不應有 options" % qid)

        # ── R1／R2 課程合規 ──
        blob_all = " ".join([_text_of(sol), s.get("answer") or "", stem])
        unit = q.get("unit")
        coord_native_q = bool(STEM_COORD_HINT.search(stem))
        for zone in ("steps", "traps", "tip", "alt"):
            blob = _text_of(sol.get(zone))
            m = RAD_PAT.search(blob)
            if m:
                err("R1", "%s：%s 出現弧度（%s）——角度一律用度"
                    % (qid, zone, m.group(0)))
        if unit not in COORD_NATIVE_UNITS and not coord_native_q and not s.get("coordMethodAllowed"):
            for i, st in enumerate(steps, 1):
                m = COORD_PAT.search(_text_of(st))
                if m:
                    err("R2", "%s：steps[%d] 用坐標／向量（%s）——主解法要用課程內方法"
                        % (qid, i, m.group(0)))
        if not _dollar_ok(blob_all):
            err("S6", "%s：題解整體 $ 不成對" % qid)

    # ── S8：概念卡的 vocab 格式（英文詞組不可以被空格拆散）──────────────────
    # 面板舊版用「english 中文」以空格分隔，遇到 "cross method 十字相乘法" 會存成
    # en="cross"、zh="method 十字相乘法"（詞被拆裂）。改為 "english = 中文" 後，
    # 這裡把「zh 以英文小寫字開頭」視為錯誤，防止再靜靜地寫壞。
    for cid, c in cards_by_id.items():
        for v in (c.get("vocab") or []):
            en = ((v or {}).get("en") or "").strip()
            zh = ((v or {}).get("zh") or "").strip()
            if not en or not zh:
                err("S8", "%s：vocab 有一組缺少 en 或 zh（%r / %r）" % (cid, en, zh))
            elif re.match(r"^[a-z]{2,}\s", zh):
                err("S8", "%s：vocab 的中文欄以英文字開頭（en=%r, zh=%r）—— "
                          "疑似「english 中文」被空格拆散，請用「english = 中文」" % (cid, en, zh))

    # ── S10：術語一致性（代數語境一律「公因式」）──────────────────────────
    # 只有純數字才叫「公因數」（H.C.F.）；含字母或整條括號的一律「公因式」。
    # 例外：「最大公因數」、概念卡釋義引號內的「公因數」、以及談係數 H.C.F. 的「係數的公因數」。
    BAD_TERM = re.compile(r"(?<!最大)(?<!「)(?<!係數的)公因數")
    for qid, s in sols.items():
        if BAD_TERM.search(_text_of(s)):
            warn("S10", "%s：題解用了「公因數」——代數語境應寫「公因式」（純數字 H.C.F. 除外）" % qid)
    for cid, c in cards_by_id.items():
        if BAD_TERM.search(_text_of(c)):
            warn("S10", "%s：概念卡用了「公因數」——代數語境應寫「公因式」（純數字 H.C.F. 除外）" % cid)

    # ── S9：示意圖（SVG）安全檢查（概念卡同題目都用同一套）────────────────
    figures_doc = _load("figures.json", {"figures": {}})
    known_ids = {c.get("id") for c in concepts.get("cards", [])} | \
                {q.get("id") for q in questions}
    for fid in (figures_doc.get("figures") or {}):
        if fid not in known_ids:
            warn("S9", "figures.json：%s 唔對應任何概念卡或題目（會被忽略）" % fid)
    for fid, items in (figures_doc.get("figures") or {}).items():
        if isinstance(items, str):                 # 舊格式（單一幅圖）都接受
            items = [{"svg": items}]
        if not isinstance(items, list):
            err("S9", "figures.json：%s 要係一幅圖或圖的陣列" % fid)
            continue
        for i, item in enumerate(items, 1):
            svg = (item or {}).get("svg")
            if not isinstance(svg, str) or "<svg" not in svg or "</svg>" not in svg:
                err("S9", "figures.json：%s 第 %d 幅唔係完整的 SVG" % (fid, i))
                continue
            low = svg.lower()
            for bad in ("<script", "onerror=", "onload=", "onclick=", "javascript:"):
                if bad in low:
                    err("S9", "figures.json：%s 第 %d 幅含可疑內容（%s）" % (fid, i, bad))
            # 長題示範：圖要標明屬於題解第幾步（前端跟住那一步出場）
            q = by_id.get(fid)
            if q is not None and q.get("type") == "long":
                n_steps = len(((sols.get(fid) or {}).get("solution") or {}).get("steps") or [])
                step = (item or {}).get("step")
                if step is None:
                    err("S9", "figures.json：%s 第 %d 幅冇標 step（長題示範要跟步驟出圖）" % (fid, i))
                elif isinstance(step, bool) or not isinstance(step, int) or not (1 <= step <= n_steps):
                    err("S9", "figures.json：%s 第 %d 幅 step=%r 超出題解步數（1–%d）"
                        % (fid, i, step, n_steps))

    # ── 統計 ──────────────────────────────────────────────────────────────
    n_mc = sum(1 for q in questions if q.get("type") == "mc")
    n_long = sum(1 for q in questions if q.get("type") == "long")
    if not args.quiet:
        print("課題 %d 個 · 題目 %d 題（MC %d、長題 %d）· 題解 %d 份 · 概念卡 %d 張"
              % (len(lessons.get("topics", [])), len(questions), n_mc, n_long,
                 len(sols), len(concepts.get("cards", []))))

    for w in warnings:
        print("⚠ " + w)
    if errors:
        print("\n✗ 發現 %d 個錯誤：" % len(errors))
        for e in errors:
            print("  " + e)
        print("\n發佈閘門：不通過（0 錯誤才可上線）")
        return 1
    print("\n✓ 0 個錯誤（警告 %d 個）" % len(warnings))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
