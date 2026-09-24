r"""從試卷 PDF 裁出「每題一張圖」。

用法：
    python tools/cut_questions.py --pdf p2.pdf --paper 2025-p2
    python tools/cut_questions.py --pdf "2026 paper 2 eng.pdf" --paper 2026-p2 --dry-run

流程（沿用實測有效的參數）：
    0) DPI 校驗：嵌入圖有效 DPI < 250 → 拒絕並提示重掃
    1) 原生解析度分塊 OCR（塊 1300px / 步長 1000px），找出題號錨點（^數字. 且 x<75pt）
    2) 依錨點切出每題的 y 區間（題號上方留 18pt，容納分式分子）
    3) 以 300 DPI 裁圖 → images/questions/<paper>-qNN.png，並輸出 questions.json 清單

注意：不使用 Matrix(2,2)（會降採樣）；不使用 fitz.Pixmap(pix, IRect)（新版 PyMuPDF 會拋 TypeError）。
"""
from __future__ import annotations

import argparse
import io
import json
import os
import re
import sys
import tempfile

import fitz
from rapidocr_onnxruntime import RapidOCR

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DPI = 300
MIN_DPI = 250.0
TILE_PX, STEP_PX = 1300, 1000
QNUM_X_MAX = 75.0
STEM_UP_BAND_PT = 18.0
MARGIN_X0, MARGIN_X1 = 40.0, 20.0

QNUM_RE = re.compile(r"^(\d{1,2})\s*\.\s*(.*)$")


def check_dpi(doc: fitz.Document) -> tuple[bool, list[str]]:
    """每頁「內容圖」的有效 DPI 必須 >= 250，否則整卷不合格。

    佔位圖不算：有些掃描器會放一張 1x1 的背景／浮水印層、拉到整頁大，
    用它算 DPI 會得到 0 而誤判整卷不合格。只看真正承載內容的圖（邊長 >= 100px）。
    """
    problems: list[str] = []
    imaged = 0
    min_px = 100
    for pno in range(len(doc)):
        page_has = False
        for im in doc[pno].get_image_info():
            pw, ph = im.get("width") or 0, im.get("height") or 0
            if pw < min_px or ph < min_px:
                continue                     # 佔位圖（背景／浮水印層）
            b = im["bbox"]
            bw = b[2] - b[0]
            if not pw or bw <= 1:
                continue
            dpi = pw / (bw / 72.0)
            imaged += 1
            page_has = True
            if dpi < MIN_DPI:
                problems.append(f"page {pno + 1}: {dpi:.0f} DPI (< {MIN_DPI:.0f})")
        if not page_has:
            problems.append(f"page {pno + 1}: no content image")
    if imaged == 0:
        problems.append("no embedded image found on any page")
    return (not problems), problems


def ocr_rows(page: fitz.Page, ocr: RapidOCR, tmp_path: str, z: float):
    """分塊 OCR → [(y_pt, x_pt, text)]（去重後）。"""
    rows = []
    pw, ph = page.rect.width, page.rect.height
    tile_pt, step_pt = TILE_PX / z, STEP_PX / z
    y0 = 0.0
    while y0 < ph:
        x0 = 0.0
        while x0 < pw:
            clip = fitz.Rect(x0, y0, min(x0 + tile_pt, pw), min(y0 + tile_pt, ph))
            pix = page.get_pixmap(matrix=fitz.Matrix(z, z), clip=clip)
            pix.save(tmp_path)
            try:
                res, _ = ocr(tmp_path)
            except Exception:  # noqa: BLE001
                res = None
            if res:
                for it in res:
                    xs = [float(p[0]) for p in it[0]]
                    ys = [float(p[1]) for p in it[0]]
                    rows.append((
                        (y0 * z + min(ys)) / z,
                        (x0 * z + min(xs)) / z,
                        str(it[1]),
                    ))
            x0 += step_pt
        y0 += step_pt
    # 去重（同文本 + 座標桶 → 取第一條）
    uniq = {}
    for y, x, t in rows:
        key = (t, round(y / 6), round(x / 6))
        uniq.setdefault(key, (y, x, t))
    return sorted(uniq.values())


def cut(pdf_path: str, paper: str, out_dir: str, dry_run: bool = False) -> dict:
    doc = fitz.open(pdf_path)
    ok, problems = check_dpi(doc)
    if not ok:
        doc.close()
        return {"ok": False, "error": "source DPI too low — please rescan", "problems": problems}

    z = DPI / 72.0
    ocr = RapidOCR()
    tmp_path = os.path.join(tempfile.gettempdir(), "_cut_tile.png")
    os.makedirs(out_dir, exist_ok=True)
    items, no = [], 0

    for pno in range(len(doc)):
        page = doc[pno]
        rows = ocr_rows(page, ocr, tmp_path, z)
        anchors = [(y, x, m) for (y, x, t) in rows if (m := QNUM_RE.match(t.strip())) and x < QNUM_X_MAX]
        anchors.sort(key=lambda a: a[0])
        for i, (y, _x, m) in enumerate(anchors):
            y0 = max(0.0, y - STEM_UP_BAND_PT)
            y1 = min(page.rect.height, (anchors[i + 1][0] - 6) if i + 1 < len(anchors) else page.rect.height - 8)
            if y1 - y0 < 40:  # 太小 → 頁腳/誤檢
                continue
            no += 1
            qid = f"{paper}-q{no:02d}"
            rel = f"images/questions/{qid}.png"
            if not dry_run:
                clip = fitz.Rect(MARGIN_X0, y0, page.rect.width - MARGIN_X1, y1)
                pix = page.get_pixmap(matrix=fitz.Matrix(z, z), clip=clip)
                pix.save(os.path.join(BASE, rel))
            items.append({
                "id": qid,
                "no": no,
                "detectedNumber": int(m.group(1)),
                "page": pno,
                "image": rel,
                "cropPt": [MARGIN_X0, round(y0, 1), round(page.rect.width - MARGIN_X1, 1), round(y1, 1)],
                "stemHint": m.group(2).strip() or None,
            })
    doc.close()
    if os.path.exists(tmp_path):
        os.unlink(tmp_path)
    return {"ok": True, "paper": paper, "pdf": os.path.basename(pdf_path), "questions": items}


def main() -> int:
    ap = argparse.ArgumentParser(description="PDF → 每題裁剪圖")
    ap.add_argument("--pdf", required=True, help="試卷 PDF 路徑")
    ap.add_argument("--paper", required=True, help="試卷 id（如 2025-p2），用於命名")
    ap.add_argument("--out", default=os.path.join(BASE, "data", "cut_index.json"))
    ap.add_argument("--dry-run", action="store_true", help="只偵測題號不裁圖")
    args = ap.parse_args()

    result = cut(args.pdf, args.paper, os.path.join(BASE, "images", "questions"), args.dry_run)
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    if not result["ok"]:
        print(f"[拒絕] {result['error']}")
        for p in result["problems"]:
            print("  -", p)
        return 2
    print(f"裁出 {len(result['questions'])} 題 → {args.out}")
    for q in result["questions"][:5]:
        print(f"  {q['id']} page {q['page']} crop {q['cropPt']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
