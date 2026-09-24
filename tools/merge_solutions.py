r"""把一批新解答併入 data/solutions.json（僅新增，不覆蓋既有題目）。

為什麼需要這支工具：
  * solutions.json 是人工／AI 編輯檔，直接手改容易漏逗號、破壞 JSON
  * 自動化（CodeBuddy 定時任務）與面板都需要一個「可驗證的寫入口」

用法：
    python tools/merge_solutions.py --file data/ai/solutions_batch1.json
    python tools/merge_solutions.py --file batch.json --force    # 允許覆蓋既有題目
    python tools/merge_solutions.py --file batch.json --dry-run  # 只驗證不寫入

輸入檔格式（兩種都接受）：
    { "solutions": { "2025-p2-q10": {...}, ... } }
    或  { "2025-p2-q10": {...}, ... }

驗證規則（不通過就整批拒絕，不會寫入半份資料）：
  * id 必須存在於 data/bank.json
  * answer ∈ {A, B, C, D}
  * solution.steps 至少 2 步，每步要有 math / en / zh
  * solution.tip.en 必須存在
"""
from __future__ import annotations

import argparse
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANK = os.path.join(BASE, "data", "bank.json")
SOLUTIONS = os.path.join(BASE, "data", "solutions.json")


def load_json(path: str):
    return json.load(open(path, encoding="utf-8-sig"))


def check_entry(qid: str, e: dict, known: set[str]) -> list[str]:
    errs: list[str] = []
    if qid not in known:
        errs.append(f"{qid}: 不在題庫中")
    if e.get("answer") not in {"A", "B", "C", "D"}:
        errs.append(f"{qid}: answer 無效（{e.get('answer')!r}）")
    sol = e.get("solution") or {}
    steps = sol.get("steps") or []
    if len(steps) < 2:
        errs.append(f"{qid}: steps 少於 2 步")
    for i, st in enumerate(steps, 1):
        if not st.get("math"):
            errs.append(f"{qid}: step {i} 缺少 math")
        if not st.get("en") or not st.get("zh"):
            errs.append(f"{qid}: step {i} 缺少中英說明")
    if not (sol.get("tip") or {}).get("en"):
        errs.append(f"{qid}: 缺少 tip.en")
    for t in sol.get("traps") or []:
        if t.get("opt") not in {"A", "B", "C", "D"}:
            errs.append(f"{qid}: trap opt 無效（{t.get('opt')!r}）")
    return errs


def main() -> int:
    ap = argparse.ArgumentParser(description="併入新解答到 data/solutions.json")
    ap.add_argument("--file", required=True, help="要併入的 JSON 檔")
    ap.add_argument("--force", action="store_true", help="允許覆蓋已存在的題目")
    ap.add_argument("--dry-run", action="store_true", help="只驗證，不寫入")
    args = ap.parse_args()

    if not os.path.exists(args.file):
        print(f"找不到 {args.file}")
        return 1

    bank = load_json(BANK)
    known = {q["id"] for q in bank["questions"]}
    doc = load_json(SOLUTIONS)
    current = doc.setdefault("solutions", {})

    incoming = load_json(args.file)
    if "solutions" in incoming and isinstance(incoming["solutions"], dict):
        incoming = incoming["solutions"]

    errors: list[str] = []
    for qid, entry in incoming.items():
        errors += check_entry(qid, entry, known)
        if qid in current and not args.force:
            errors.append(f"{qid}: 已存在解答（要覆蓋請加 --force）")

    if errors:
        print(f"[拒絕] 共 {len(errors)} 個問題，未寫入任何內容：")
        for e in errors:
            print("  -", e)
        return 1

    added = sorted(incoming)
    print(f"驗證通過 {len(added)} 題：{', '.join(added)}")
    if args.dry_run:
        print("（--dry-run：未寫入）")
        return 0

    for qid in added:
        current[qid] = incoming[qid]
    with open(SOLUTIONS, "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"solutions.json 現有 {len(current)} 題（本次新增/更新 {len(added)}）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
