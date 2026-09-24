r"""匯出「給 AI 分類用」的精簡輸入檔（只含分類所需欄位，不含答案）。

用法：
    python tools/export_for_ai.py                 # → data/ai/classification_input.json（全部題目）
    python tools/export_for_ai.py --limit 5       # 只匯出前 5 題（測試用）
    python tools/export_for_ai.py --include-current   # 附上目前的分類，讓 AI 只覆核有疑問的

輸出檔可直接貼給 Gemini（配 prompts/gemini_classification.md 的提示詞），
再把 Gemini 回傳的 JSON 存成 data/ai/classification.json，用
tools/merge_classification.py 合併。
"""
from __future__ import annotations

import argparse
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 20 個學習單元 + Junior Math，附「什麼屬於這一單元」的簡短界說（減少誤分類）
UNIT_SCOPE = {
    0: "Junior secondary level: number systems, percentages & interest, plane geometry (similar triangles, area ratios), "
       "sector/arc mensuration, simple ratio, elementary statistics, powers of i",
    1: "Solving quadratic equations in one unknown (factorising, formula, graphs) and the nature of roots",
    2: "Function notation, evaluating f(x), domain, reading graphs of functions",
    3: "Laws of indices, exponential and logarithmic functions, log equations, exponential growth such as compound interest",
    4: "Remainder and factor theorems, polynomial division, HCF/LCM of polynomials, identities and comparing coefficients",
    5: "Solving other equations (fractional, radical, simultaneous), change of subject, equation word problems",
    6: "Direct, inverse and joint variation",
    7: "Arithmetic and geometric sequences: general term, summation, recurrence",
    8: "Solving inequalities, linear programming, feasible region, greatest/least value",
    9: "Transformations of graphs, max/min of functions, relationship between graphs and equations",
    10: "Equations of straight lines: slope, parallel/perpendicular, intersection, distance, in-centre by coordinates",
    11: "Circle properties: angles at centre/circumference, tangents, cyclic quadrilaterals",
    12: "Loci and their description",
    13: "Equations of circles: centre/radius, tangents, intersection with axes",
    14: "Trigonometric ratios, identities, equations, sine/cosine formulae, 2-D and 3-D trigonometry",
    15: "Permutations and combinations, counting problems",
    16: "Probability, expectation, conditional probability, independence",
    17: "Measures of dispersion: range, inter-quartile range, standard deviation, variance, standard score",
    18: "Uses and abuses of statistics: misleading graphs, sampling, interpretation",
    19: "Further applications combining several units",
    20: "Inquiry and investigation tasks",
}
UNIT_NAMES = {
    0: ("Junior Math", "初中數學"),
    1: ("Quadratic Equations in One Unknown", "一元二次方程"),
    2: ("Functions and Graphs", "函數與圖像"),
    3: ("Exponential and Logarithmic Functions", "指數與對數函數"),
    4: ("More about Polynomials", "多項式續論"),
    5: ("More about Equations", "方程續論"),
    6: ("Variations", "變分"),
    7: ("Arithmetic and Geometric Sequences", "等差等比數列"),
    8: ("Inequalities and Linear Programming", "不等式與線性規劃"),
    9: ("More about Graphs of Functions", "函數圖像續論"),
    10: ("Equations of Straight Lines", "直線方程"),
    11: ("Basic Properties of Circles", "圓的基本性質"),
    12: ("Loci", "軌跡"),
    13: ("Equations of Circles", "圓的方程"),
    14: ("More about Trigonometry", "三角學續論"),
    15: ("Permutations and Combinations", "排列與組合"),
    16: ("More about Probability", "概率續論"),
    17: ("Measures of Dispersion", "離差的度量"),
    18: ("Uses and Abuses of Statistics", "統計的應用與誤用"),
    19: ("Further Applications", "進一步應用"),
    20: ("Inquiry and Investigation", "探究與研究"),
}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="只匯出前 N 題（0 = 全部）")
    ap.add_argument("--include-current", action="store_true", help="附上目前分類方便 AI 覆核")
    ap.add_argument("--out", default=os.path.join(BASE, "data", "ai", "classification_input.json"))
    args = ap.parse_args()

    bank = json.load(open(os.path.join(BASE, "data", "bank.json"), encoding="utf-8-sig"))
    questions = bank["questions"][: args.limit or len(bank["questions"])]

    payload = {
        "task": "Classify each HKDSE Maths MC question into exactly one learning unit (0-20), "
                "and estimate difficulty and solving time. Do NOT solve the question.",
        "units": [
            {"unit": u, "en": UNIT_NAMES[u][0], "zh": UNIT_NAMES[u][1], "scope": UNIT_SCOPE[u]}
            for u in sorted(UNIT_NAMES)
        ],
        "schema": {
            "classifications": [
                {
                    "id": "string, must equal the question id",
                    "unit": "integer 0-20",
                    "difficulty": "1 (routine) | 2 (multi-step) | 3 (needs insight)",
                    "timeSec": "60 | 90 | 120 | 150",
                    "confidence": "high | medium | low",
                    "why": "<= 25 words, English / 中文, explain WHICH mathematics decides the unit",
                }
            ]
        },
        "questions": [],
    }
    for q in questions:
        item = {
            "id": q["id"],
            "no": q["no"],
            "stem_text": q["stem"]["text"],
            "stem_latex": q["stem"]["latex"],
            "figure": q["figure"],
            "options": q["options"],
        }
        if args.include_current:
            item["current"] = {
                "unit": q["topic"].get("unit"),
                "unitName": q["topic"]["en"],
                "difficulty": q["difficulty"],
                "timeSec": q["timeSec"],
                "source": q.get("classifiedBy"),
            }
        payload["questions"].append(item)

    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=1)
    print(f"已匯出 {len(payload['questions'])} 題 → {args.out}")
    print("下一步：把這個檔案連同 prompts/gemini_classification.md 的提示詞交給 Gemini，")
    print("        回傳的 JSON 存成 data/ai/classification.json，再跑 tools/merge_classification.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
