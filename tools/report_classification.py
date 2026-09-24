r"""列出題庫的分類結果（學習單元 / 難度 / 建議時間），方便老師核對與挑題。

用法：
    python tools/report_classification.py            # 全部題目
    python tools/report_classification.py --solved   # 只看已有解答（可即時發佈）
"""
from __future__ import annotations

import argparse
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--solved", action="store_true", help="只列出已有解答的題目")
    args = ap.parse_args()

    bank = json.load(open(os.path.join(BASE, "data", "bank.json"), encoding="utf-8"))
    sol_path = os.path.join(BASE, "data", "solutions.json")
    solved = set(json.load(open(sol_path, encoding="utf-8-sig"))["solutions"]) if os.path.exists(sol_path) else set()

    print(f"{'Q':>3}  {'unit':<6} {'diff':<5} {'time':>5}  {'answer':<7} topic")
    print("-" * 92)
    counts: dict[str, int] = {}
    for q in bank["questions"]:
        if args.solved and q["id"] not in solved:
            continue
        unit = int(q["topic"].get("unit") or 0)
        tag = f"LU{unit}" if unit else "JNR"
        label = f"{q['topic']['en']} / {q['topic']['zh']}"
        if unit == 0:
            label = "Junior Math / 初中數學（不屬 20 個高中單元）"
        ans = "-"
        if q["id"] in solved:
            s = json.load(open(sol_path, encoding="utf-8-sig"))["solutions"][q["id"]]
            ans = s["answer"]
        print(f"{q['no']:>3}  {tag:<6} {'★' * q['difficulty']:<5} {q['timeSec']:>4}s  {ans:<7} {label}")
        counts[tag] = counts.get(tag, 0) + 1

    print("-" * 92)
    print("分布：" + "、".join(f"{k} {v} 題" for k, v in sorted(counts.items(), key=lambda kv: -kv[1])))
    print(f"合計 {sum(counts.values())} 題（已有解答 {len(solved)} 題，用 --solved 只看可發佈的）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
