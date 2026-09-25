#!/usr/bin/env python3
"""DSE Pass 站語言檢查器 —— 資料層必須全繁體中文（zh-HK）

背景：題目／題解／概念卡曾經混入簡體字（「展开」「虽然」等）。這類字散落在
      上千行 JSON 裡，肉眼極難發現，所以把它做成閘門：發現簡體字就 exit 1，
      跟 tools/learn_check.py 一樣「0 錯誤才可上線」。

檢查範圍
    data/learn/{bank,concepts,solutions,lessons}.json      （預設）
    --site   另外檢查網站外殼：*.html、assets/app.js、assets/style.css

用法
    python tools/learn_lang_check.py
    python tools/learn_lang_check.py --site
    python tools/learn_lang_check.py --quiet        # 只印結論

注意：這是「常見簡體字對照表」式檢查（不是字典比對），目的是擋下絕大多數
      誤用；若有漏網，把該組字補進 SIMPLE2TRAD 即可。
"""

from __future__ import annotations

import argparse
import io
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data", "learn")

# 簡體 → 繁體（只收「常見且不會在繁體行文裡正常出現」的字，避免誤報）
SIMPLE2TRAD = {
    "这": "這", "们": "們", "个": "個", "时": "時", "对": "對", "应": "應",
    "变": "變", "关": "關", "图": "圖", "学": "學", "来": "來", "说": "說",
    "试": "試", "进": "進", "误": "誤", "记": "記", "还": "還", "会": "會",
    "题": "題", "无": "無", "种": "種", "样": "樣", "点": "點", "开": "開",
    "两": "兩", "为": "為", "级": "級", "线": "線", "组": "組", "给": "給",
    "问": "問", "间": "間", "单": "單", "实": "實", "号": "號", "彻": "徹",
    "计": "計", "机": "機", "键": "鍵", "盘": "盤", "输": "輸", "检": "檢",
    "结": "結", "项": "項", "数": "數", "质": "質", "验": "驗", "颠": "顛",
    "随": "隨", "凑": "湊", "极": "極", "须": "須", "仅": "僅", "适": "適",
    "尝": "嘗", "观": "觀", "态": "態", "养": "養", "习": "習", "惯": "慣",
    "扩": "擴", "虽": "雖", "于": "於", "与": "與", "从": "從", "并": "併",
    "论": "論", "设": "設", "证": "證", "话": "話", "读": "讀", "课": "課",
    "语": "語", "谁": "誰", "请": "請", "让": "讓", "认": "認", "识": "識",
    "讲": "講", "转": "轉", "软": "軟", "轻": "輕", "较": "較", "长": "長",
    "门": "門", "队": "隊", "阶": "階", "阳": "陽", "阴": "陰", "电": "電",
    "买": "買", "卖": "賣", "觉": "覺", "该": "該", "务": "務", "条": "條",
    "东": "東", "车": "車", "马": "馬", "双": "雙", "导": "導", "专": "專",
    "将": "將", "选": "選", "择": "擇", "举": "舉", "报": "報", "拟": "擬",
    "录": "錄", "归": "歸", "价": "價", "优": "優", "难": "難", "义": "義",
    "处": "處", "复": "復", "备": "備", "龙": "龍", "龟": "龜",
}

SITE_FILES = ["index.html", "topic.html", "start.html", "wrong.html",
              "quadratic-inequalities.html", "README.md",
              os.path.join("assets", "app.js"), os.path.join("assets", "style.css")]


def scan(path: str, label: str, hits: list[str]) -> int:
    if not os.path.exists(path):
        return 0
    with io.open(path, encoding="utf-8") as f:
        text = f.read()
    n = 0
    for ch, trad in SIMPLE2TRAD.items():
        i = text.find(ch)
        if i < 0:
            continue
        n += 1
        snippet = text[max(0, i - 28):i + 28].replace("\n", " ")
        hits.append("  %s：「%s」→ 建議「%s」\n      …%s…" % (label, ch, trad, snippet))
    return n


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    ap = argparse.ArgumentParser(description="檢查資料層是否混入簡體中文")
    ap.add_argument("--site", action="store_true", help="連網站外殼（HTML/JS/CSS）一起檢查")
    ap.add_argument("--quiet", action="store_true", help="只印結論")
    args = ap.parse_args(argv)

    targets = [(os.path.join(DATA, f), f) for f in
               ("bank.json", "concepts.json", "solutions.json", "lessons.json")]
    if args.site:
        targets += [(os.path.join(BASE, f), f.replace("\\", "/")) for f in SITE_FILES]

    hits: list[str] = []
    total = 0
    for path, label in targets:
        total += scan(path, label, hits)

    if hits:
        print("✗ 發現簡體字 %d 處：" % total)
        print("\n".join(hits))
        print("\n語言閘門：不通過（資料層必須全繁體中文 zh-HK）")
        return 1
    if not args.quiet:
        print("✓ 語言檢查通過：%d 個檔案全繁體中文" % len(targets))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
