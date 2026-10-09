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
  I13 長題區塊齊全：每條長題都要有 traps（常見錯誤）與 alt（進階解法／驗算）——
      第一階段與第二階段的學生看到的區塊一致（2026-10-09 對齊）
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

    # ── S3／S4／R1／R2：題解契約與課程合規（逐題檢查）──────────────────────
    # 註：這一段原本誤縮排在上一段的「概念卡」迴圈內，只會用「最後一題」的 qid
    #     檢查一次 —— 於是「traps 指向正確答案」「answer 與步驟結論不符」都攔不到
    #     （2026-10-06 老師回報 AS2 之後發現）。已改成獨立的逐題迴圈。
    for q in questions:
        qid = q.get("id", "?")
        qtype = q.get("type")
        stem = _text_of(q.get("stem"))
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

        # ── I13：長題的說明區塊要齊 ────────────────────────────────────────
        # 每條長題都要有「常見錯誤」(traps) 與「進階解法／驗算」(alt)：
        # 前者是做完之後的自我檢查，後者是另一條路／驗算方法。
        # （2026-10-09 把第一階段對齊第二階段的標準，兩邊學生看到的區塊一致。）
        if qtype == "long":
            if not (sol.get("traps") or []):
                err("I13", "%s：長題缺 traps（常見錯誤）" % qid)
            if not (sol.get("alt") or []):
                err("I13", "%s：長題缺 alt（進階解法／驗算）" % qid)

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
            # 步驟自己寫的結論必須與答案鍵一致：
            # 例：步驟寫「答案是 B」但 answer 鍵仍是 A（改了題目、忘了改 key）。
            said = set()
            for st in steps:
                txt = (st.get("zh") or "") + " " + (st.get("en") or "")
                for m in re.finditer(r"答案[是為]\s*([A-D])|answer is\s*([A-D])", txt):
                    said.add(m.group(1) or m.group(2))
            wrong = sorted(x for x in said if x != ans)
            if wrong:
                err("S4", "%s：步驟寫「答案是 %s」，但 answer 鍵是 %r —— 兩者必須一致"
                    % (qid, "/".join(wrong), ans))
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

    # ── I1–I7：中英雙語契約（本站基調）────────────────────────────────────
    # 每個學生會看到的文字都要有 zh 與 en：前端三態切換（中文／英文／中英）靠兩份
    # 文字；英文缺席時前端會退回中文，但那樣「英文模式」就等於壞掉。
    # 新增課題一律要中英齊全（見 docs/LEARN-ADD-TOPICS-HANDOFF.md 的雙語一節）。
    HAN = re.compile(r"[\u4e00-\u9fff]")

    # 概念卡排版（I12）：{{math:N}} 會渲染成「置中公式方塊」（div），所以標記必須放在行尾 ——
    # 標記之後若仍有同一句的文字，那段文字會由新一行開始，最刺眼的是孤零零一個「。」或「；」，
    # 其次是「→ 只剩 …」「lunch sets.」這類句子尾巴被切開。
    RE_MATH_THEN_TEXT = re.compile(r"\{\{math:\d+\}\}(?=[^\n])")
    RE_LINE_START_PUNCT = re.compile(r"\n[。，、；：）」』】？！,.;:)]")
    # 整行只有標點（例如一個「。」獨佔一行）也是同一類毛病
    RE_PUNCT_ONLY_LINE = re.compile(r"(?:^|\n)[ \t]*[。，、；：）」』】？！,.;:)][ \t]*(?=\n|$)")

    def need_pair(rule: str, label: str, zh, en, allow_han_in_en: bool = True,
                  min_en: int = 4, zh_optional: bool = False) -> None:
        zh_s = (zh or "").strip()
        en_s = (en or "").strip()
        # 題目（stem／parts／選項）：英文必備、中文選填 —— 卷面本來就是英文，
        # 題目照原檔全英；詳解（I5）與概念卡（I3／I4）仍然要中英齊全。
        if not zh_s and not zh_optional:
            err(rule, "%s：缺中文（zh）" % label)
        if not en_s:
            err(rule, "%s：缺英文（en）—— 三態語言切換會退回中文" % label)
            return
        if len(en_s) < min_en:
            err(rule, "%s：英文太短（%r）" % (label, en_s))
        elif not allow_han_in_en and HAN.search(en_s):
            err(rule, "%s：英文欄含中文字（%r…）—— 請改寫成英文" % (label, en_s[:30]))

    for q in questions:
        qid = q.get("id", "?")
        st = q.get("stem") or {}
        need_pair("I1", "%s stem" % qid, st.get("zh") or st.get("text"), st.get("en"),
                  min_en=6, zh_optional=True)
        for i, pt in enumerate(q.get("parts") or [], 1):
            need_pair("I2", "%s parts[%d]" % (qid, i), pt.get("zh") or pt.get("text"),
                      pt.get("en") or pt.get("text"), min_en=1, zh_optional=True)
        for k, opt in (q.get("options") or {}).items():
            if isinstance(opt, dict):
                need_pair("I2", "%s 選項 %s" % (qid, k), opt.get("zh"), opt.get("en"),
                          min_en=1, zh_optional=True)

    for c in concepts.get("cards", []):
        cid = c.get("id", "?")
        ttl = c.get("title") or {}
        need_pair("I4", "%s 標題" % cid, ttl.get("zh"), ttl.get("en"))
        body = c.get("body") or {}
        need_pair("I3", "%s 正文" % cid, body.get("zh"), body.get("en"),
                  allow_han_in_en=False, min_en=15)
        wn = c.get("warn") or {}
        if wn.get("zh") or wn.get("en"):
            need_pair("I3", "%s 常見錯誤" % cid, wn.get("zh"), wn.get("en"),
                      allow_han_in_en=False, min_en=10)
        # 重點框（選填 box 欄位；由 Endeavour 移植）：標籤＋標題＋正文＋公式，中英都要齊。
        bx = c.get("box") or {}
        if bx:
            bt = bx.get("tag") or {}
            if bt:
                need_pair("I3", "%s 重點框標籤" % cid, bt.get("zh"), bt.get("en"), min_en=2)
            bti = bx.get("title") or {}
            need_pair("I4", "%s 重點框標題" % cid, bti.get("zh"), bti.get("en"))
            need_pair("I3", "%s 重點框正文" % cid, bx.get("zh"), bx.get("en"),
                      allow_han_in_en=False, min_en=15)
            bmaths = bx.get("math") or []
            if bmaths:
                bmarks = (_text_of(bx.get("zh")) or "").count("{{math") + \
                         (_text_of(bx.get("en")) or "").count("{{math")
                if bmarks != 2 * len(bmaths):
                    warn("S7", "%s：重點框的 {{math:N}} 標記（中英合計 %d 個）與 math %d 條不符"
                         % (cid, bmarks, len(bmaths)))
        # I12：公式方塊之後不要把句子尾巴留到下一行（排版問題，見上方的說明）
        for label, text in (("正文 zh", (c.get("body") or {}).get("zh")),
                            ("正文 en", (c.get("body") or {}).get("en")),
                            ("重點框 zh", (bx or {}).get("zh")),
                            ("重點框 en", (bx or {}).get("en"))):
            if not text:
                continue
            m = RE_MATH_THEN_TEXT.search(text)
            if m:
                warn("I12", "%s %s：{{math:N}} 後面仍有文字（%r…）—— 那段文字會由新一行開始，"
                            "請把標記移到行尾"
                     % (cid, label, text[m.end():m.end() + 12].strip()[:12]))
            m = RE_LINE_START_PUNCT.search(text)
            if m:
                warn("I12", "%s %s：有一行以標點開頭（%r）—— 標點應留在上一行"
                     % (cid, label, text[m.start():m.start() + 14].replace("\n", "⏎")))
            m = RE_PUNCT_ONLY_LINE.search(text)
            if m:
                warn("I12", "%s %s：有一整行只有標點（%r）—— 應與上一句合併"
                     % (cid, label, m.group(0).strip()[:6]))

    for t in lessons.get("topics", []):
        tid = t.get("id", "?")
        nm = t.get("name") or {}
        need_pair("I4", "%s 課題名" % tid, nm.get("zh"), nm.get("en"))
        intro = t.get("intro") or {}
        if intro:
            need_pair("I4", "%s intro" % tid, intro.get("zh"), intro.get("en"),
                      allow_han_in_en=False, min_en=15)
        for i, h in enumerate(t.get("cmdHints") or [], 1):
            if isinstance(h, dict):
                need_pair("I4", "%s cmdHints[%d]" % (tid, i), h.get("zh"), h.get("en"), min_en=2)
        for les in t.get("lessons", []):
            lt = les.get("title") or {}
            need_pair("I4", "%s/%s 節名" % (tid, les.get("id")), lt.get("zh"), lt.get("en"))
    for stg in lessons.get("stages", []):
        nm = stg.get("name") or {}
        need_pair("I4", "stage %s 名稱" % stg.get("id"), nm.get("zh"), nm.get("en"))

    for qid, s in sols.items():
        sol = s.get("solution") or {}
        for i, st in enumerate(sol.get("steps") or [], 1):
            ttl = st.get("title") or {}
            need_pair("I5", "%s 第 %d 步標題" % (qid, i), ttl.get("zh"), ttl.get("en"))
            need_pair("I5", "%s 第 %d 步解說" % (qid, i), st.get("zh"), st.get("en"),
                      allow_han_in_en=False, min_en=15)
        for i, tr in enumerate(sol.get("traps") or [], 1):
            need_pair("I5", "%s 陷阱 %d" % (qid, i), tr.get("zh"), tr.get("en"),
                      allow_han_in_en=False, min_en=10)
            if tr.get("label") and not tr.get("labelEn"):
                err("I5", "%s 陷阱 %d 有 label 但缺 labelEn（長題陷阱要中英標籤）" % (qid, i))
        tip = sol.get("tip") or {}
        if tip:
            need_pair("I5", "%s tip" % qid, tip.get("zh"), tip.get("en"),
                      allow_han_in_en=False, min_en=10)
        for i, a in enumerate(sol.get("alt") or [], 1):
            nm = a.get("name") or {}
            need_pair("I5", "%s alt[%d] 名稱" % (qid, i), nm.get("zh"), nm.get("en"), min_en=2)
            need_pair("I5", "%s alt[%d] 內文" % (qid, i), a.get("zh"), a.get("en"),
                      allow_han_in_en=False, min_en=10)

    # ── I6：問 AI 提問模板（中英對稱；改模板一次＝全站更新）────────────────
    tpl_doc = _load("prompt-templates.json", {}) or {}
    TPL_KEYS = ("role", "student", "headings", "focusAll", "focusStep", "requirements",
                "format", "optionLabels", "options")
    TPL_HEADS = ("source", "question", "items", "parts", "focus", "existing", "doubt",
                 "requirements", "format")
    TPL_OPTS = ("simpler", "examples", "examTips", "visual", "practice")
    if not tpl_doc.get("zh") or not tpl_doc.get("en"):
        err("I6", "prompt-templates.json：必須同時有 zh 與 en 兩份模板")
    else:
        for lg in ("zh", "en"):
            node = tpl_doc.get(lg) or {}
            for k in TPL_KEYS:
                if not node.get(k):
                    err("I6", "prompt-templates.json %s 缺欄位 %s" % (lg, k))
            for k in TPL_HEADS:
                if not (node.get("headings") or {}).get(k):
                    err("I6", "prompt-templates.json %s 的 headings 缺 %s" % (lg, k))
            if not isinstance(node.get("requirements"), list) or not node.get("requirements"):
                err("I6", "prompt-templates.json %s 的 requirements 必須是非空陣列" % lg)
            for k in TPL_OPTS:
                if not (node.get("options") or {}).get(k):
                    err("I6", "prompt-templates.json %s 缺 options.%s" % (lg, k))
                if not (node.get("optionLabels") or {}).get(k):
                    err("I6", "prompt-templates.json %s 缺 optionLabels.%s" % (lg, k))
            if "{n}" not in (node.get("focusStep") or ""):
                err("I6", "prompt-templates.json %s 的 focusStep 必須包含 {n}（步驟編號）" % lg)
        if HAN.search(_text_of(tpl_doc.get("en"))):
            err("I6", "prompt-templates.json 的英文模板含中文字 —— 英文模板要真的是英文")

    # ── I7：語言層掛載（每一頁都要有切換器與 i18n.js）──────────────────────
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if not os.path.exists(os.path.join(repo, "assets", "i18n.js")):
        err("I7", "缺少 assets/i18n.js（語言層）")
    for page in ("index.html", "topic.html", "wrong.html", "start.html"):
        path = os.path.join(repo, page)
        if not os.path.exists(path):
            err("I7", "缺少頁面 %s" % page)
            continue
        with open(path, encoding="utf-8") as f:
            txt = f.read()
        if "data-lang-slot" not in txt:
            err("I7", "%s 沒有語言切換掛載點（data-lang-slot）" % page)
        if "assets/i18n.js" not in txt:
            err("I7", "%s 沒有載入 assets/i18n.js" % page)

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

    # ── I9：表達規範 ──────────────────────────────────────────────────────
    # ① 文字欄不可用 Markdown 粗體 **…**：前端不會 render，會「原樣」顯示給學生（已發生過）。
    # ② 一條 math 內多過 1 個 ⇒ 就應該每個 ⇒ 開新行，否則要橫向捲動（學生看不完一整條）。
    def _scan_strings(node, path):
        if isinstance(node, dict):
            for k, v in node.items():
                yield from _scan_strings(v, "%s.%s" % (path, k))
        elif isinstance(node, list):
            for i, v in enumerate(node):
                yield from _scan_strings(v, "%s[%d]" % (path, i))
        elif isinstance(node, str):
            yield path, node

    for fname, blob in (("bank.json", bank), ("solutions.json", sols),
                        ("concepts.json", concepts), ("lessons.json", lessons)):
        for path, text in _scan_strings(blob, fname):
            if "**" in text:
                err("I9", "%s：含 Markdown 粗體 **…**（前端不會 render，會原樣顯示給學生）" % path)
    for fname, blob in (("concepts.json", concepts), ("solutions.json", sols)):
        for path, text in _scan_strings(blob, fname):
            if ".math" not in path or "\n" in text:
                continue
            n = text.count("\\Rightarrow") + text.count("⇒")
            if n >= 2:
                warn("I9", "%s：單行內有 %d 個 ⇒，建議每個 ⇒ 後開新行（否則要橫向捲動）"
                     % (path, n))

    # ③ 數式一律英文（老師 2026-09-28）：`math`／`highlight` 不可以有中文，例如「或」要寫 \text{or}。
    #    中文只可出現在解說文字（zh／body 的散文）。
    import re as _re
    # 漢字 ＋ 中日韓標點（、。「」）＋ 全角符號（；，！）：數式內全部不可出現
    _cjk = _re.compile(r"[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\u3000-\u303f\uff00-\uffef]")
    for fname, blob in (("bank.json", bank), ("solutions.json", sols),
                        ("concepts.json", concepts), ("lessons.json", lessons)):
        for path, text in _scan_strings(blob, fname):
            if "math" not in path and "highlight" not in path:
                continue
            if _cjk.search(text):
                err("I10", "%s：數式內出現中文（數式一律用英文，如 \\text{or}；中文只可出現在解說）"
                    % path)
    # ④ 數式每行不宜過長（老師 2026-09-28：太長了，盡量分行書寫）—— 過長學生要橫向捲才睇得完。
    def _disp_width(line):
        t = _re.sub(r"\\text\{([^}]*)\}", r"\1", line)
        t = t.replace("\\Rightarrow", "⇒")
        t = _re.sub(r"\\[a-zA-Z]+", "x", t)
        t = t.replace("\\ ", " ").replace("\\,", " ").replace("\\;", " ")
        return len(_re.sub(r"[{}]", "", t).strip())

    for fname, blob in (("bank.json", bank), ("solutions.json", sols), ("concepts.json", concepts)):
        for path, text in _scan_strings(blob, fname):
            if "math" not in path and "highlight" not in path:
                continue
            for ln in text.split("\n"):
                w = _disp_width(ln)
                if w > 44:
                    warn("I11", "%s：數式有一行長 %d 字，建議在 =／⇒ 之前分行（%s）"
                         % (path, w, ln.strip()[:28]))

    # 散文中的行內數學 $…$ 也應該全英（只警告，避免誤中括號內的正常中文）
    for fname, blob in (("bank.json", bank), ("solutions.json", sols),
                        ("concepts.json", concepts), ("lessons.json", lessons)):
        for path, text in _scan_strings(blob, fname):
            if "math" in path or "highlight" in path:
                continue
            for m in _re.finditer(r"\$([^$]+)\$", text):
                if _cjk.search(m.group(1)):
                    warn("I10", "%s：行內數學 $…$ 內含中文（%s）→ 數式部分要英文"
                         % (path, m.group(0)[:24]))

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
