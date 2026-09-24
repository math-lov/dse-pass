r"""題庫與解答完整性校驗。

檢查項：
  1. bank.json 結構（paper/questions/必要欄位/id 唯一/四選項）
  2. 每題圖片檔是否存在
  3. solutions.json：id 必須存在於題庫；answer ∈ {A,B,C,D}；solution.steps 有 math 且中英齊備
  4. 覆蓋率報告：已解答 / 未解答題數、各難度可用題數（供每日挑題用）
  5. releases.json：date 格式、每批 3 題、id 必須存在、難度是否覆蓋 ≥2 種

有問題時以非 0 退出碼結束（可掛進 CI）。
"""
from __future__ import annotations

import io
import json
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANK = os.path.join(BASE, "data", "bank.json")
SOLUTIONS = os.path.join(BASE, "data", "solutions.json")
RELEASES = os.path.join(BASE, "data", "releases.json")
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []

    if not os.path.exists(BANK):
        print("缺少 data/bank.json，請先執行 tools/build_bank.py")
        return 1
    bank = json.load(open(BANK, encoding="utf-8-sig"))
    questions = {q["id"]: q for q in bank["questions"]}

    # 1) 結構
    for qid, q in questions.items():
        for field in ("no", "topic", "difficulty", "timeSec", "stem", "options", "images"):
            if field not in q:
                errors.append(f"{qid}: 缺少欄位 {field}")
        if not 1 <= q.get("difficulty", 0) <= 3:
            errors.append(f"{qid}: difficulty 必須為 1-3")
        if len([L for L in "ABCD" if (q.get("options") or {}).get(L)]) != 4:
            warnings.append(f"{qid}: 選項不齊")

    # 2) 圖片
    for qid, q in questions.items():
        for rel in q.get("images", []):
            if not os.path.exists(os.path.join(BASE, rel)):
                errors.append(f"{qid}: 圖片不存在 {rel}")

    # 3) 解答
    solutions = {}
    if os.path.exists(SOLUTIONS):
        solutions = json.load(open(SOLUTIONS, encoding="utf-8-sig")).get("solutions", {})
        for qid, s in solutions.items():
            if qid not in questions:
                errors.append(f"solutions: {qid} 不在題庫中")
                continue
            if s.get("answer") not in {"A", "B", "C", "D"}:
                errors.append(f"{qid}: answer 無效（{s.get('answer')!r}）")
            for i, st in enumerate((s.get("solution") or {}).get("steps") or [], 1):
                if not st.get("math"):
                    errors.append(f"{qid}: step {i} 缺少 math")
                if not st.get("en") or not st.get("zh"):
                    warnings.append(f"{qid}: step {i} 未齊備中英說明")
            if not ((s.get("solution") or {}).get("tip") or {}).get("en"):
                warnings.append(f"{qid}: 缺少 tip")
    else:
        warnings.append("尚無 data/solutions.json（學生端會顯示「解答待更新」）")

    # 4) 覆蓋率
    solved = set(solutions)
    by_diff = {1: 0, 2: 0, 3: 0}
    for qid, q in questions.items():
        if qid in solved:
            by_diff[q["difficulty"]] += 1

    # 5) 排程
    if os.path.exists(RELEASES):
        releases = json.load(open(RELEASES, encoding="utf-8-sig")).get("releases", [])
        for r in releases:
            if not DATE_RE.match(r.get("date", "")):
                errors.append(f"release {r.get('batch')}: date 格式錯誤")
            ids = r.get("ids") or []
            if len(ids) != 3:
                warnings.append(f"release {r.get('date')}: 題數為 {len(ids)}（建議 3）")
            diffs = set()
            for qid in ids:
                if qid not in questions:
                    errors.append(f"release {r.get('date')}: {qid} 不在題庫中")
                else:
                    diffs.add(questions[qid]["difficulty"])
                    if qid not in solved:
                        warnings.append(f"release {r.get('date')}: {qid} 尚無解答")
            # 全部中等可以接受；全部「易」或全部「難」則提醒（學生會覺得太淺或太挫敗）
            if len(diffs) == 1 and next(iter(diffs)) in (1, 3):
                warnings.append(
                    f"release {r.get('date')}: 三題都是難度 {next(iter(diffs))}，建議混合不同難度"
                )
    else:
        warnings.append("尚無 data/releases.json")

    print(f"題庫 {len(questions)} 題；已解答 {len(solved)} 題")
    print(f"可發佈題數：易 {by_diff[1]} / 中 {by_diff[2]} / 難 {by_diff[3]}")
    for w in warnings:
        print(f"[warn] {w}")
    for e in errors:
        print(f"[ERROR] {e}")
    print(f"\n結果：{len(errors)} 個錯誤、{len(warnings)} 個警告")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
