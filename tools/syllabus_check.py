r"""課程合規檢查：題解不得超出 HKDSE 數學必修課程。

學生沒學過的方法，就算答案對，對他也沒有用 —— 所以這支程式把「解法必須在課程內」
變成機器可檢查的規則，而不只是靠提示詞自律。

規則
────
R1  角度一律用「**度**」。不得出現弧度：`rad`、`radian`、`\text{rad}`、`\frac{\pi}{3}`、
    `=\pi`、`\theta=\frac{5\pi}{6}`、中文「弧度」等。
    （π 出現在面積／體積（`9\pi^{2}`、`288\pi`）是正常的，只針對「角度」用法。）

R2  幾何題的**主解法**（`solution.steps`）不得一開始就建立坐標系或用向量；
    課程內方法＝追角、全等／相似三角形、面積比、直角三角形三角比。
    例外：
      * 題目本身屬坐標幾何的單元（見 COORD_NATIVE_UNITS）
      * 該題在 `solutions.json` 明寫 `"coordMethodAllowed": "理由"`（降為警告，留審計痕跡）

R3  進階方法（坐標法／向量法）要放選填欄位 `solution.alt`（學生端以摺疊的
    「進階解法（參考）」顯示），不要混進主解法。

例外清單（技術債）
──────────────────
`data/syllabus_exceptions.json` 可暫時把已知違規降為警告，讓發佈流程不被卡住：

    { "exceptions": [ { "qid": "2025-p2-q17", "rule": "R2",
                        "why": "待重寫成面積比法", "until": "2026-10-01" } ] }

`until` 過期後會自動恢復為錯誤 —— 技術債不會無聲無息地留下來。

用法
────
    python tools/syllabus_check.py
    python tools/syllabus_check.py --json     # 給面板／CI 用的結構化輸出
"""
from __future__ import annotations

import argparse
import datetime
import io
import json
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data")

# 這些單元本來就是坐標系／向量範圍，用坐標解是「課程內」的解法
COORD_NATIVE_UNITS = {
    2,    # Functions and Graphs
    8,    # Inequalities and Linear Programming
    9,    # More about Graphs of Functions
    10,   # Equations of Straight Lines
    12,   # Loci
    13,   # Equations of Circles
}

RAD_PAT = re.compile(
    r"\\operatorname\{rad\}|\\text\{\s*rad|\\mathrm\{rad\}|\bradians?\b|弧度"
    r"|\\frac\{\\pi\}\{\d+\}|\\frac\{\d+\\pi\}\{\d+\}|\\pi\s*/\s*\d|=\s*\\pi\b|\\pi\\text\{ ?rad",
    re.I)

# 用 \b 詞邊界：否則 "original"、"coordinated" 這類普通英文字也會命中（假警報）。
# 另排除連字號（x-coordinate）與否定語境（without coordinates）；
# 英文 origin 不再列入 —— 它在圖像題（如「不經原點」）是正常用語。
COORD_PAT = re.compile(
    r"坐標|坐标|座標|(?<!-)(?<!without )\bcoordinates?\b|\\overrightarrow|\\vec\{|"
    r"\bvectors?\b|向量|原點|原点", re.I)


def _text_of(node) -> str:
    """把任一 JSON 節點攤平成可搜尋的文字。"""
    if isinstance(node, dict):
        return " ".join(_text_of(v) for v in node.values())
    if isinstance(node, list):
        return " ".join(_text_of(v) for v in node)
    return str(node)


def _load(name: str, default):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        return default
    with open(path, encoding="utf-8-sig") as f:
        return json.load(f)


def _exceptions() -> dict[tuple[str, str], dict]:
    doc = _load("syllabus_exceptions.json", {"exceptions": []})
    out = {}
    today = datetime.date.today().isoformat()
    for e in doc.get("exceptions", []):
        until = str(e.get("until") or "")
        if until and until < today:          # 過期 → 不再放行
            continue
        out[(str(e.get("qid")), str(e.get("rule")))] = e
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description="檢查題解是否符合 HKDSE 必修課程範圍")
    ap.add_argument("--json", action="store_true", help="輸出 JSON（給面板／CI）")
    args = ap.parse_args()

    bank = _load("bank.json", {"questions": []})
    sols = _load("solutions.json", {"solutions": {}}).get("solutions", {})
    by_id = {q["id"]: q for q in bank.get("questions", [])}
    exc = _exceptions()

    errors: list[dict] = []
    warnings: list[dict] = []

    def report(rule: str, qid: str, code: str, where: str, hit: str, ctx: str, why: str) -> None:
        item = {"rule": rule, "qid": qid, "code": code, "where": where,
                "hit": hit, "context": ctx.strip()[:160], "hint": why}
        e = exc.get((qid, rule))
        if e:
            item["exception"] = e.get("why") or "（未寫原因）"
            warnings.append(item)
        else:
            errors.append(item)

    for qid, s in sorted(sols.items()):
        q = by_id.get(qid) or {}
        code = q.get("code") or qid
        unit = (q.get("topic") or {}).get("unit")
        sol = s.get("solution") or {}
        steps = sol.get("steps") or []

        # ── R1 弧度（掃描全部文字，包含 alt 參考解法）──
        zones = [("steps", steps), ("traps", sol.get("traps") or []),
                 ("tip", [sol.get("tip") or {}]), ("alt", sol.get("alt") or [])]
        for zone, nodes in zones:
            for i, node in enumerate(nodes):
                blob = _text_of(node)
                for m in RAD_PAT.finditer(blob):
                    where = zone if zone in ("tip",) else f"{zone}[{i + 1}]"
                    report("R1", qid, code, where, m.group(0),
                           blob, "角度請用「度」（°）：弧度不在必修課程內，扇形題也要先換算成度")

        # ── R2／R3 坐標法或向量法當主解法 ──
        # 題目本身即坐標／向量題（平移、旋轉、直線方程等）→ 用坐標屬課程內做法，不檢查
        stem_blob = _text_of(q.get("stem") or {}) + " " + _text_of(q.get("figure") or "")
        coord_native_q = bool(re.search(r"coordinate|origin|坐標|座標|坐标|原點|原点", stem_blob, re.I))
        if unit not in COORD_NATIVE_UNITS and not s.get("coordMethodAllowed") and not coord_native_q:
            for i, st in enumerate(steps):
                blob = _text_of(st)
                m = COORD_PAT.search(blob)
                if m:
                    report("R2", qid, code, f"steps[{i + 1}]", m.group(0), blob,
                           "主解法請用課程內方法（追角／全等相似三角形／面積比／直角三角形三角比）；"
                           "坐標法或向量法請放到 solution.alt 作參考")
        if (unit not in COORD_NATIVE_UNITS and not s.get("coordMethodAllowed")
                and not coord_native_q and sol.get("tip")):
            blob = _text_of(sol["tip"])
            m = COORD_PAT.search(blob)
            if m:
                warnings.append({"rule": "R3", "qid": qid, "code": code, "where": "tip",
                                 "hit": m.group(0), "context": blob[:160],
                                 "hint": "tip 不應建議坐標法；進階方法請放 solution.alt"})

    if args.json:
        print(json.dumps({"errors": errors, "warnings": warnings,
                          "checked": len(sols)}, ensure_ascii=False, indent=1))
        return 1 if errors else 0

    print(f"課程合規檢查：{len(sols)} 題")
    for item in warnings:
        tail = f"（例外：{item['exception']}）" if item.get("exception") else ""
        print(f"[warn] {item['code']} {item['rule']} {item['where']} ← 「{item['hit']}」{tail}")
        print(f"       {item['hint']}")
    for item in errors:
        print(f"[ERROR] {item['code']} {item['rule']} {item['where']} ← 「{item['hit']}」")
        print(f"        {item['context']}")
        print(f"        → {item['hint']}")
    print(f"\n結果：{len(errors)} 個錯誤、{len(warnings)} 個警告")
    if errors:
        print("有題解超出必修課程範圍 —— 請改寫（或寫入 data/syllabus_exceptions.json 並註明原因）")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
