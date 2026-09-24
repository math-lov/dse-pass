r"""合併 AI 的分類建議（unit / difficulty / timeSec）到 data/overrides.json。

用法：
    python tools/merge_classification.py                      # 預設讀 data/ai/classification.json，只出報告（不改檔）
    python tools/merge_classification.py --only-changed        # 報告只列與現況不同的題目
    python tools/merge_classification.py --apply               # 寫入 data/overrides.json

安全設計：
  * 預設 dry-run，一定要 --apply 才會改檔
  * 每條建議都要通過校驗（id 存在、unit 0-20、difficulty 1-3、timeSec 合規）
  * 同時輸出人工覆核報告（含 AI 的理由），方便老師快速掃一遍
  * 只改 unit/difficulty/timeSec 三個欄位，不會動到其他內容
"""
from __future__ import annotations

import argparse
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

UNITS = {
    0: "Junior Math", 1: "Quadratic Equations", 2: "Functions and Graphs",
    3: "Exponential & Logarithmic", 4: "More about Polynomials", 5: "More about Equations",
    6: "Variations", 7: "Sequences", 8: "Inequalities & L.P.", 9: "Graphs of Functions",
    10: "Straight Lines", 11: "Circles (properties)", 12: "Loci", 13: "Circles (equations)",
    14: "Trigonometry", 15: "Permutations & Combinations", 16: "Probability",
    17: "Measures of Dispersion", 18: "Statistics (uses & abuses)", 19: "Further Applications",
    20: "Inquiry & Investigation",
}
ALLOWED_TIME = {60, 90, 120, 150}   # 與提示詞一致，避免 AI 給出無意義的時間


def load_suggestions(path: str) -> list[dict]:
    # utf-8-sig：兼容帶 BOM 的檔案（Gemini 下載、PowerShell 寫出的 JSON 都可能有 BOM）
    data = json.load(open(path, encoding="utf-8-sig"))
    if isinstance(data, list):
        return data
    for key in ("classifications", "questions", "results", "items"):
        if isinstance(data.get(key), list):
            return data[key]
    raise SystemExit(f"{path}: 找不到 classifications / questions 陣列")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", default=os.path.join(BASE, "data", "ai", "classification.json"))
    ap.add_argument("--overrides", default=os.path.join(BASE, "data", "overrides.json"))
    ap.add_argument("--review", default=os.path.join(BASE, "data", "ai", "classification_review.md"))
    ap.add_argument("--apply", action="store_true", help="寫入 overrides.json（預設只出報告）")
    ap.add_argument("--only-changed", action="store_true")
    ap.add_argument("--units-only", action="store_true",
                    help="只採用 unit，保留現有的 difficulty / timeSec"
                         "（建議：難度與時間等實際寫完解答時再定案）")
    args = ap.parse_args()

    if not os.path.exists(args.input):
        print(f"找不到 {args.input}（先把 Gemini 回傳的 JSON 存到這個路徑）")
        return 1

    bank = json.load(open(os.path.join(BASE, "data", "bank.json"), encoding="utf-8-sig"))
    by_id = {q["id"]: q for q in bank["questions"]}

    ov_path = args.overrides
    ov_doc = json.load(open(ov_path, encoding="utf-8-sig")) if os.path.exists(ov_path) else {"version": 1, "overrides": {}}
    overrides = ov_doc.setdefault("overrides", {})

    suggestions = load_suggestions(args.input)
    errors: list[str] = []
    rows: list[dict] = []

    for s in suggestions:
        qid = str(s.get("id") or "").strip()
        q = by_id.get(qid)
        if not q:
            errors.append(f"{qid!r}: 題庫中沒有這個 id")
            continue
        try:
            unit = int(s["unit"])
        except (KeyError, TypeError, ValueError):
            errors.append(f"{qid}: unit 不是整數（{s.get('unit')!r}）")
            continue
        if not 0 <= unit <= 20:
            errors.append(f"{qid}: unit {unit} 超出 0-20")
            continue
        try:
            diff = int(s["difficulty"])
        except (KeyError, TypeError, ValueError):
            errors.append(f"{qid}: difficulty 不是整數（{s.get('difficulty')!r}）")
            continue
        if not 1 <= diff <= 3:
            errors.append(f"{qid}: difficulty {diff} 超出 1-3")
            continue
        try:
            tsec = int(s["timeSec"])
        except (KeyError, TypeError, ValueError):
            errors.append(f"{qid}: timeSec 不是整數（{s.get('timeSec')!r}）")
            continue
        if tsec not in ALLOWED_TIME:
            errors.append(f"{qid}: timeSec {tsec} 不在允許值 {sorted(ALLOWED_TIME)}")
            continue

        cur = overrides.get(qid, {})
        cur_unit = cur.get("unit", q["topic"].get("unit"))
        cur_diff = cur.get("difficulty", q["difficulty"])
        cur_time = cur.get("timeSec", q["timeSec"])
        changed = (unit != cur_unit) if args.units_only else (
            (unit != cur_unit) or (diff != cur_diff) or (tsec != cur_time)
        )
        rows.append({
            "id": qid, "no": q["no"],
            "unit": unit, "unit_name": UNITS.get(unit, "?"),
            "cur_unit": cur_unit,
            "difficulty": diff, "cur_difficulty": cur_diff,
            "timeSec": tsec, "cur_time": cur_time,
            "confidence": s.get("confidence") or "-",
            "why": (s.get("why") or "").strip(),
            "changed": changed,
        })

    rows.sort(key=lambda r: r["no"])
    n_changed = sum(1 for r in rows if r["changed"])

    mode = "只套用 unit（難度／時間保留）" if args.units_only else "unit + 難度 + 時間"
    print(f"模式：{mode}")
    print(f"建議 {len(rows)} 條，其中 {n_changed} 條與現況不同"
          + (f"；{len(errors)} 條校驗失敗" if errors else ""))
    print(f"\n{'Q':>3}  {'unit':>10} → {'':<10} {'diff':>6}   {'time':>9}  conf   why")
    print("-" * 108)
    for r in rows:
        if args.only_changed and not r["changed"]:
            continue
        u_from = str(r["cur_unit"]) if r["cur_unit"] is not None else "-"
        u_to = f"{r['unit']} {r['unit_name']}"
        flag_u = " *" if r["cur_unit"] != r["unit"] else "  "
        flag_d = "" if args.units_only else ("*" if r["cur_difficulty"] != r["difficulty"] else " ")
        flag_t = "" if args.units_only else ("*" if r["cur_time"] != r["timeSec"] else " ")
        print(f"{r['no']:>3}  {u_from:>10} →{u_to:<22}{flag_u} "
              f"{r['cur_difficulty']}→{r['difficulty']} {flag_d}  "
              f"{r['cur_time']:>4}→{r['timeSec']:<4} {flag_t}  {r['confidence']:<6} {r['why'][:46]}")
    if errors:
        print("\n[校驗失敗]")
        for e in errors:
            print("  -", e)

    # 人工覆核報告
    os.makedirs(os.path.dirname(args.review), exist_ok=True)
    with open(args.review, "w", encoding="utf-8") as f:
        f.write("# AI 分類建議覆核報告\n\n")
        f.write(f"來源：`{os.path.relpath(args.input, BASE)}`　模式：{mode}\n\n")
        f.write(f"建議 {len(rows)} 條，與現況不同 {n_changed} 條。\n\n")
        f.write("「→」左邊是現況（含 overrides），右邊是 AI 建議。標 * 表示有改動。\n\n")
        if args.units_only:
            f.write("> 本輪**只採用 unit**；難度與時間欄位僅供參考，待實際寫完解答後定案。\n\n")
        f.write("| Q | 現況 unit | AI unit | unit 名稱 | 難度 | 時間 | 信心 | AI 理由 |\n")
        f.write("|---|---|---|---|---|---|---|---|\n")
        for r in rows:
            mark = " *" if r["changed"] else ""
            f.write(f"| {r['no']} | {r['cur_unit']} | {r['unit']}{mark} | {r['unit_name']} | "
                    f"{r['cur_difficulty']}→{r['difficulty']} | {r['cur_time']}→{r['timeSec']} | "
                    f"{r['confidence']} | {r['why']} |\n")
        if errors:
            f.write("\n## 校驗失敗\n\n")
            for e in errors:
                f.write(f"- {e}\n")
    print(f"\n覆核報告：{os.path.relpath(args.review, BASE)}")

    if not args.apply:
        print("\n（dry-run，未改動任何檔案。確認無誤後加 --apply 寫入）")
        return 0

    for r in rows:
        entry = overrides.setdefault(r["id"], {})
        entry["unit"] = r["unit"]
        if not args.units_only:
            entry["difficulty"] = r["difficulty"]
            entry["timeSec"] = r["timeSec"]
    with open(ov_path, "w", encoding="utf-8") as f:
        json.dump(ov_doc, f, ensure_ascii=False, indent=2)
    scope = "（只套用 unit，難度／時間維持原值）" if args.units_only else "（unit + 難度 + 時間）"
    print(f"\n已寫入 {os.path.relpath(ov_path, BASE)}{scope}：{len(rows)} 條")
    print("下一步：\n  python tools/build_bank.py\n  python tools/make_site_data.py\n  node tools/site_check.js")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
