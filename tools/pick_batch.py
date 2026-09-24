r"""自動挑選下一天的 3 題（1 易 1 中 1 難、盡量不同單元），寫入 data/releases.json。

用法：
    python tools/pick_batch.py                 # 只建議（dry run）
    python tools/pick_batch.py --apply         # 實際寫入 releases.json
    python tools/pick_batch.py --apply --days 5  # 一次排 5 天

設計：
  * 只從「已有解答、且尚未排進任何 release」的題池挑（學生不會看到「解答待更新」）
  * 優先 1 易 / 1 中 / 1 難；某個難度沒貨時，用最近的難度補上（並在輸出提醒）
  * 同一天盡量不要三個同單元
  * 日期接在已有排程之後（若全部已過期，就從今天開始）
"""
from __future__ import annotations

import argparse
import datetime
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANK = os.path.join(BASE, "data", "bank.json")
SOLUTIONS = os.path.join(BASE, "data", "solutions.json")
RELEASES = os.path.join(BASE, "data", "releases.json")

WANT = [1, 2, 3]          # 易 / 中 / 難


def load(path: str, default):
    if not os.path.exists(path):
        return default
    return json.load(open(path, encoding="utf-8-sig"))


def pick_day(pool: list[dict]) -> list[dict]:
    """從題池挑 3 題：1 易 1 中 1 難，盡量不同單元。"""
    chosen: list[dict] = []
    used_units: set[int] = set()
    remaining = list(pool)
    for diff in WANT:
        cands = [q for q in remaining if q["difficulty"] == diff]
        if not cands:                       # 該難度沒貨 → 用最接近的難度補
            cands = sorted(remaining, key=lambda q: abs(q["difficulty"] - diff))
        if not cands:
            break
        fresh = [q for q in cands if (q.get("topic") or {}).get("unit") not in used_units]
        q = (fresh or cands)[0]             # 題池已按題號排序，取第一題（最舊的優先）
        chosen.append(q)
        remaining.remove(q)
        used_units.add((q.get("topic") or {}).get("unit"))
    return chosen


def title_of(batch: list[dict], lang: str) -> str:
    """由當天三題的單元名合成標題（例：圓的基本性質 · 軌跡 · 三角學續論）。"""
    names = []
    for q in batch:
        t = q.get("topic") or {}
        n = t.get(lang) or t.get("en") or t.get("zh")
        if n and n not in names:
            names.append(n)
    return " · ".join(names[:3]) or ("Daily practice" if lang == "en" else "每日練習")


def main() -> int:
    ap = argparse.ArgumentParser(description="自動挑選下一批每日三題")
    ap.add_argument("--apply", action="store_true", help="寫入 data/releases.json")
    ap.add_argument("--days", type=int, default=1, help="要排幾天（預設 1）")
    args = ap.parse_args()

    bank = load(BANK, {"questions": []})
    solutions = load(SOLUTIONS, {"solutions": {}}).get("solutions", {})
    doc = load(RELEASES, {"version": 1, "releases": []})
    releases = doc.setdefault("releases", [])

    released = {i for r in releases for i in r.get("ids", [])}
    pool = [q for q in bank["questions"] if q["id"] in solutions and q["id"] not in released]
    print(f"題池：{len(pool)} 題可排（已解答且未發佈）；已排 {len(releases)} 批")

    if not pool:
        print("[停止] 沒有可排的題目——請先補新試卷或先解題。")
        return 1

    last_date = max((r.get("date") for r in releases), default=None)
    today = datetime.date.today()
    start = max(today, datetime.date.fromisoformat(last_date)) if last_date else today
    next_batch = max((r.get("batch") or 0 for r in releases), default=0)

    made = []
    for d in range(args.days):
        batch = pick_day(pool)
        if len(batch) < 3:
            print(f"[警告] 只夠挑 {len(batch)} 題（題池快用完）")
        for q in batch:
            pool.remove(q)
        date = (start + datetime.timedelta(days=d + 1)).isoformat()
        next_batch += 1
        entry = {
            "date": date,
            "batch": next_batch,
            "title": {"en": title_of(batch, "en"), "zh": title_of(batch, "zh")},
            "ids": [q["id"] for q in batch],
        }
        made.append(entry)
        codes = "、".join(q.get("code") or q["id"] for q in batch)
        print(f"  {date} 批次 {next_batch}: {codes}  ← {entry['title']['zh']}")
        if not pool:
            print("  （題池已空）")
            break

    if args.apply:
        releases.extend(made)
        releases.sort(key=lambda r: r["date"])
        with open(RELEASES, "w", encoding="utf-8") as f:
            json.dump(doc, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print(f"已寫入 {RELEASES}（現有 {len(releases)} 批）")
        print("下一步：python tools\\make_site_data.py && node tools\\site_check.js && node tools\\smoke_test.js，然後 git push")
    else:
        print("（dry run：未寫入。要寫入請加 --apply）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
