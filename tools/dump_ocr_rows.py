r"""把整份試卷的 OCR 行資料（座標 + 文字 + 是否題號錨點）快取成 JSON。

用途：離線分析版面（題號錨點、題帶邊界、圖形位置），避免每次重跑 OCR。
輸出：review/ocr_rows.json（review/ 已在 .gitignore）

用法：
    python tools/dump_ocr_rows.py                       # 預設 p2.pdf
    python tools/dump_ocr_rows.py --pdf "2026 paper 2 eng.pdf"
"""
from __future__ import annotations

import argparse
import json
import os
import sys

import fitz

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import cut_questions as cq  # noqa: E402

BASE = cq.BASE
Z = 3.125
OUT = os.path.join(BASE, "review", "ocr_rows.json")


def main() -> int:
    ap = argparse.ArgumentParser(description="快取試卷 OCR 行資料")
    ap.add_argument("--pdf", default=os.path.join(BASE, "p2.pdf"))
    args = ap.parse_args()

    doc = fitz.open(args.pdf)
    ok, problems = cq.check_dpi(doc)
    if not ok:
        print("[拒絕] 來源 DPI 不足：", problems)
        return 2

    ocr = cq.RapidOCR()
    os.makedirs(os.path.join(BASE, "review"), exist_ok=True)
    tmp = os.path.join(BASE, "review", "_dump_tile.png")

    pages = []
    for pno in range(len(doc)):
        page = doc[pno]
        rows = cq.ocr_rows(page, ocr, tmp, Z)
        items = []
        for (y, x, t) in rows:
            stripped = t.strip()
            m = cq.QNUM_RE.match(stripped)
            items.append({
                "y": round(y, 1), "x": round(x, 1), "text": t,
                "isAnchor": bool(m and x < cq.QNUM_X_MAX),
                "num": int(m.group(1)) if (m and x < cq.QNUM_X_MAX) else None,
            })
        pages.append({"page": pno, "w": round(page.rect.width, 1), "h": round(page.rect.height, 1),
                      "rows": items})
        print(f"  p{pno}: {len(items)} 行，錨點 {sum(1 for i in items if i['isAnchor'])} 個")

    doc.close()
    if os.path.exists(tmp):
        os.unlink(tmp)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"pdf": os.path.basename(args.pdf), "zoom": Z, "pages": pages},
                  f, ensure_ascii=False, indent=1)
    print(f"已寫入 {os.path.relpath(OUT, BASE)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
