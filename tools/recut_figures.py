r"""重新裁切題目圖（修正「圖形被下邊界切斷」）。

問題成因（p2.pdf 實測）：
    現有圖片的裁切邊界是「最後一行文字」而不是「下一題題號」，
    所以畫在右側、比文字更長的圖形被切掉下半。
    例：Q21 現圖只有 163pt 高，但正確題帶（下一題號 −6pt）是 249pt。

修正方法：
    y0 = 題號上 18pt；y1 = **下一題題號 −6pt**（跨頁則到頁底 −8pt）。
    這個題帶本來就包含整幅圖形；若仍有圖形越界（少見），可用 --extend 續接。

錨點處理（避免封面與重複偵測）：
    * 跳過封面頁（--skip-pages 0）
    * 題號必須遞增；相距 <20pt 的同號錨點視為重複

輸出：
    images/questions/<paper>-qNN.png
    data/cut_index.json              每題裁切框（可追溯）

用法：
    python tools/recut_figures.py --scan                     # 只列表
    python tools/recut_figures.py --apply                    # 全部重裁
    python tools/recut_figures.py --apply --only q14,q17,q18,q19,q21,q22,q38,q39
"""
from __future__ import annotations

import argparse
import json
import os
import sys

import fitz

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import cut_questions as cq  # noqa: E402  重用 OCR 分塊與題號偵測

BASE = cq.BASE
DPI_Z = 3.125                 # 225 DPI：與現有 45 張圖一致（1674px 寬）
DEDUP_PT = 20.0
SCAN_Z = 3.0
INK_MIN_PX = 4
NEAR_PT = 8.0
GAP_PT = 16.0
LOOKAHEAD_PT = 340.0
PAD_PT = 5.0
FOOTER_PAD_PT = 8.0           # 頁尾題：內容最後一行之下留多少 pt
FOOTER_GAP_PT = 40.0          # 頁腳與內容之間的最小空隙
TILE_PT = 220.0


# ───────────────────────── 錨點 ─────────────────────────
def strip_ink_rows(page: fitz.Page, y0: float, y1: float, x0: float, x1: float) -> list[float]:
    """回傳 [y0, y1) 內「有墨跡」的列（pt）。"""
    rows: list[float] = []
    yy = y0
    while yy < y1:
        step = min(TILE_PT, y1 - yy)
        pix = page.get_pixmap(matrix=fitz.Matrix(SCAN_Z, SCAN_Z), clip=fitz.Rect(x0, yy, x1, yy + step))
        n, stride, buf = pix.n, pix.stride, pix.samples
        for py in range(pix.height):
            base = py * stride
            cnt = 0
            for px in range(pix.width):
                i = base + px * n
                v = buf[i] if n == 1 else (buf[i] + buf[i + 1] + buf[i + 2]) / 3
                if v < 128:
                    cnt += 1
                    if cnt >= INK_MIN_PX:
                        break
            if cnt >= INK_MIN_PX:
                rows.append(yy + (py + 0.5) / SCAN_Z)
        yy += step
    return rows


def ink_x_range(page: fitz.Page, y: float, x0: float, x1: float) -> tuple[float, float] | None:
    """某一列（y ±1.5pt）內墨跡的水平範圍，用來判斷圖形落在哪個 x 區間。"""
    pix = page.get_pixmap(matrix=fitz.Matrix(SCAN_Z, SCAN_Z),
                          clip=fitz.Rect(x0, y - 1.5, x1, y + 1.5))
    n, stride, buf = pix.n, pix.stride, pix.samples
    xs = []
    for py in range(pix.height):
        base = py * stride
        for px in range(pix.width):
            i = base + px * n
            v = buf[i] if n == 1 else (buf[i] + buf[i + 1] + buf[i + 2]) / 3
            if v < 128:
                xs.append(x0 + (px + 0.5) / SCAN_Z)
    return (min(xs), max(xs)) if xs else None


def content_bottom(rows: list[float], ph: float) -> float:
    """頁尾題用：回傳「內容」的最後一列（忽略頁腳）。

    頁腳 = 靠近頁底、與上方內容有大空隙、且本身很薄（≤14pt）的獨立區塊。
    """
    if not rows:
        return ph - 8
    blocks: list[tuple[float, float]] = []
    start = prev = rows[0]
    for y in rows[1:]:
        if y - prev > FOOTER_GAP_PT:
            blocks.append((start, prev))
            start = y
        prev = y
    blocks.append((start, prev))
    if len(blocks) >= 2:
        s, e = blocks[-1]
        gap = s - blocks[-2][1]
        # 貼近頁底 + 與上方內容有大空隙 + 本身不高 → 視為頁腳／「Go on to the next page」提示
        if s > ph - 90 and gap >= FOOTER_GAP_PT and (e - s) <= 45.0:
            blocks.pop()
    return blocks[-1][1]


def load_anchors(pdf: str, skip_pages: int) -> list[tuple[int, float, int]]:
    """回傳全域錨點序列 [(page, y, 題號)]，已跳過封面並去重、強制遞增。"""
    doc = fitz.open(pdf)
    ok, problems = cq.check_dpi(doc)
    if not ok:
        doc.close()
        raise SystemExit(f"[拒絕] 來源 DPI 不足：{problems}")
    ocr = cq.RapidOCR()
    os.makedirs(os.path.join(BASE, "review"), exist_ok=True)
    tmp = os.path.join(BASE, "review", "_recut_tile.png")

    raw: list[tuple[int, float, int]] = []
    for pno in range(len(doc)):
        if pno < skip_pages:
            continue
        for (y, x, t) in cq.ocr_rows(doc[pno], ocr, tmp, DPI_Z):
            m = cq.QNUM_RE.match(t.strip())
            if m and x < cq.QNUM_X_MAX:
                raw.append((pno, y, int(m.group(1))))
    if os.path.exists(tmp):
        os.unlink(tmp)
    doc.close()

    raw.sort(key=lambda t: (t[0], t[1]))
    seq: list[tuple[int, float, int]] = []
    for item in raw:
        if seq and seq[-1][2] == item[2] and abs(seq[-1][1] - item[1]) < DEDUP_PT:
            continue                      # 同號重複偵測
        if seq and item[2] <= seq[-1][2]:
            continue                      # 題號必須遞增（濾掉雜訊）
        seq.append(item)
    return seq


def main() -> int:
    ap = argparse.ArgumentParser(description="重切題目圖（修正圖形被切）")
    ap.add_argument("--pdf", default=os.path.join(BASE, "p2.pdf"))
    ap.add_argument("--paper", default=None)
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--scan", action="store_true", help="只偵測列表（等同不加 --apply）")
    ap.add_argument("--only", default="", help="只處理這些題號，如 q21,q22")
    ap.add_argument("--skip-pages", type=int, default=1, help="跳過前幾頁（封面）")
    ap.add_argument("--extend", action="store_true", help="題帶仍被圖形越界時，續接圖形欄（實驗性）")
    ap.add_argument("--out-debug", default=os.path.join(BASE, "review", "cut_plan.txt"))
    args = ap.parse_args()

    paper = args.paper or ("2025-p2" if os.path.basename(args.pdf).lower().startswith("p2") else None)
    if not paper:
        print("請用 --paper 指定試卷 id（如 2026-p2）")
        return 1
    only = {int(s.strip().lstrip("qQ")) for s in args.only.split(",") if s.strip()}

    seq = load_anchors(args.pdf, args.skip_pages)
    nums = [n for _p, _y, n in seq]
    print(f"錨點 {len(seq)} 個：{nums[:8]} … {nums[-4:]}")
    missing = [n for n in range(1, max(nums) + 1) if n not in nums]
    if missing:
        print(f"[注意] 缺題號 {missing}（可能 OCR 漏檢，該題會用前後錨點推斷）")

    doc = fitz.open(args.pdf)
    img_dir = os.path.join(BASE, "images", "questions")
    os.makedirs(img_dir, exist_ok=True)

    by_page: dict[int, list[tuple[float, int]]] = {}
    for pno, y, num in seq:
        by_page.setdefault(pno, []).append((y, num))

    # 面板手動調整的裁切框（data/cut_overrides.json）優先於自動規則
    overrides: dict = {}
    ov_path = os.path.join(BASE, "data", "cut_overrides.json")
    if os.path.exists(ov_path):
        try:
            overrides = json.load(open(ov_path, encoding="utf-8-sig")).get("crops", {})
        except Exception as e:  # noqa: BLE001
            print(f"[warn] 讀不到 cut_overrides.json：{e!r}")

    plan, index, done = [], [], []
    for pno in sorted(by_page):
        page = doc[pno]
        pw, ph = page.rect.width, page.rect.height
        x0, x1 = cq.MARGIN_X0, pw - cq.MARGIN_X1
        items = sorted(by_page[pno])
        for i, (ay, num) in enumerate(items):
            qid = f"{paper}-q{num:02d}"
            cx0, cx1 = x0, x1
            y0 = max(0.0, ay - cq.STEM_UP_BAND_PT)
            if i + 1 < len(items):
                y1 = min(ph, items[i + 1][0] - 6)
            else:
                # 頁尾題：題帶到頁底，但頁腳（卷號／頁碼）不該進圖 → 只裁到實際內容底部
                rows = strip_ink_rows(page, y0, ph - 4, x0, x1)
                y1 = min(ph - 8, content_bottom(rows, ph) + FOOTER_PAD_PT)
            if y1 - y0 < 40:
                print(f"[跳過] {qid} 題帶過短（{y1 - y0:.0f}pt）")
                continue

            fig_pt = None
            manual = overrides.get(qid)
            if manual and manual.get("crop"):        # 面板手動調整優先
                cx0, y0, cx1, y1 = [float(v) for v in manual["crop"]]
                fig_pt = [float(v) for v in manual["figure"]] if manual.get("figure") else None
            elif args.extend:
                rows = strip_ink_rows(page, y0, min(ph, y1 + LOOKAHEAD_PT), x0, x1)
                edge = [y for y in rows if y1 - 3.0 <= y <= y1 + NEAR_PT]
                if edge:
                    bottom = edge[0]
                    for y in [r for r in rows if r >= y1 - 3.0]:
                        if y > min(ph, y1 + LOOKAHEAD_PT) or y - bottom > GAP_PT:
                            break
                        bottom = y
                    if bottom > y1 + 1:
                        xr = ink_x_range(page, y1 - 1.0, x0, x1)
                        if xr:
                            fig_pt = [round(xr[0], 1), round(y1, 1), round(xr[1], 1), round(min(ph, bottom + PAD_PT), 1)]

            plan.append(f"p{pno} Q{num:02d} {qid}: y {y0:.0f}→{y1:.0f}（{y1 - y0:.0f}pt）"
                        + (" [人工]" if manual else "")
                        + (f" + 續接 {fig_pt[1]:.0f}→{fig_pt[3]:.0f}" if fig_pt else ""))
            index.append({"id": qid, "no": num, "page": pno,
                          "cropPt": [round(cx0, 1), round(y0, 1), round(cx1, 1), round(y1, 1)],
                          "figurePt": fig_pt,
                          "source": "manual" if manual else "auto"})

            if not args.apply or (only and num not in only):
                continue
            band = page.get_pixmap(matrix=fitz.Matrix(DPI_Z, DPI_Z), clip=fitz.Rect(cx0, y0, cx1, y1))
            if not fig_pt:
                band.save(os.path.join(img_dir, f"{qid}.png"))
            else:
                fx0, fy0, fx1, fy1 = fig_pt
                cont = page.get_pixmap(matrix=fitz.Matrix(DPI_Z, DPI_Z), clip=fitz.Rect(fx0, fy0, fx1, fy1))
                n = band.n
                xoff = round((fx0 - cx0) * DPI_Z)
                W = max(band.width, xoff + cont.width)
                H = band.height + cont.height
                buf = bytearray(b"\xff" * (W * H * n))
                for src, xo, yo in ((band, 0, 0), (cont, xoff, band.height)):
                    for r in range(src.height):
                        s = r * src.stride
                        d = ((yo + r) * W + xo) * n
                        buf[d:d + src.width * n] = src.samples[s:s + src.width * n]
                fitz.Pixmap(band.colorspace, W, H, bytes(buf), band.alpha).save(
                    os.path.join(img_dir, f"{qid}.png"))
            done.append(num)

    doc.close()
    with open(args.out_debug, "w", encoding="utf-8") as f:
        f.write("\n".join(plan))

    if args.apply:
        with open(os.path.join(BASE, "data", "cut_index.json"), "w", encoding="utf-8") as f:
            json.dump({"paper": paper, "pdf": os.path.basename(args.pdf), "zoom": DPI_Z,
                       "rule": "y0=anchor-18pt, y1=next anchor-6pt",
                       "questions": index}, f, ensure_ascii=False, indent=1)
        print(f"已重裁 {len(done)} 題：{sorted(done)}")
        print("檢查：node tools\\site_check.js → python tools\\audit_crops.py")
    else:
        print(f"共 {len(index)} 題；計畫寫入 {os.path.relpath(args.out_debug, BASE)}（未裁圖）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
