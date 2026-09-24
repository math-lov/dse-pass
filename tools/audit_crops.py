r"""裁剪圖體檢：找出「被切到」的題目圖。

原理：若裁切邊界正好切過內容，圖片的**最上／最下幾行像素會有墨跡**。
  * 下緣有墨 + 墨在右半 → 通常是圖形被切（圖形向下跨過下一題的題號帶）
  * 下緣有墨 + 墨在左半 → 選項文字被切
  * 上緣有墨 → 分式分子或上一題尾巴被切

用法：
    python tools/audit_crops.py                 # 檢查 images/questions/*.png
    python tools/audit_crops.py --edge 6        # 邊界帶寬度（像素）
    python tools/audit_crops.py --list-only     # 只列可疑題號
"""
from __future__ import annotations

import argparse
import glob
import io
import os
import sys

import fitz

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(BASE, "images", "questions")


def ink_stats(path: str, edge: int) -> dict:
    """回傳圖片上下邊界帶的墨跡統計。"""
    doc = fitz.open(path)
    pix = doc[0].get_pixmap()
    w, h, n, stride = pix.width, pix.height, pix.n, pix.stride
    buf = pix.samples

    def dark(x: int, y: int) -> bool:
        i = y * stride + x * n
        if n >= 3:
            return (buf[i] + buf[i + 1] + buf[i + 2]) / 3 < 128
        return buf[i] < 128

    def band(y0: int, y1: int) -> tuple[int, float]:
        count = 0
        xs = []
        for y in range(max(0, y0), min(h, y1)):
            for x in range(w):
                if dark(x, y):
                    count += 1
                    xs.append(x)
        cx = (sum(xs) / len(xs) / w) if xs else 0.0    # 墨跡的水平重心（0=左、1=右）
        return count, cx

    top_cnt, top_cx = band(0, edge)
    bot_cnt, bot_cx = band(h - edge, h)
    doc.close()
    return {"w": w, "h": h, "top": top_cnt, "top_cx": top_cx, "bottom": bot_cnt, "bot_cx": bot_cx}


def main() -> int:
    ap = argparse.ArgumentParser(description="裁剪圖邊緣體檢")
    ap.add_argument("--edge", type=int, default=6, help="邊界帶寬（像素）")
    ap.add_argument("--min-ink", type=int, default=6, help="判定為「切到」的最少墨跡像素數")
    ap.add_argument("--list-only", action="store_true")
    ap.add_argument("--strict", action="store_true", help="有題目被切時以非 0 退出（供發佈閘門使用）")
    args = ap.parse_args()

    files = sorted(glob.glob(os.path.join(IMG_DIR, "*.png")))
    if not files:
        print(f"找不到圖：{IMG_DIR}")
        return 1

    cut_bottom, cut_top, clean = [], [], 0
    for path in files:
        qid = os.path.splitext(os.path.basename(path))[0]
        try:
            st = ink_stats(path, args.edge)
        except Exception as e:  # noqa: BLE001
            print(f"[warn] 讀不到 {qid}: {e!r}")
            continue
        where = "右側（圖形）" if st["bot_cx"] > 0.55 else ("左側（文字）" if st["bot_cx"] < 0.45 else "中間")
        if st["bottom"] >= args.min_ink:
            cut_bottom.append((qid, st["bottom"], where))
        if st["top"] >= args.min_ink:
            cut_top.append((qid, st["top"], "右側（圖形）" if st["top_cx"] > 0.55 else "左側（文字）"))
        if st["bottom"] < args.min_ink and st["top"] < args.min_ink:
            clean += 1

    print(f"共 {len(files)} 張；下緣切到 {len(cut_bottom)} 張、上緣切到 {len(cut_top)} 張、乾淨 {clean} 張")
    if cut_bottom:
        print("\n下緣有內容（可能被切）：")
        for qid, cnt, where in cut_bottom:
            print(f"  {qid:<20} 墨跡 {cnt:>5} px · 位置 {where}")
    if cut_top:
        print("\n上緣有內容（可能被切）：")
        for qid, cnt, where in cut_top:
            print(f"  {qid:<20} 墨跡 {cnt:>5} px · 位置 {where}")
    if not args.list_only and not cut_bottom and not cut_top:
        print("全部乾淨。")
    if args.strict and (cut_bottom or cut_top):
        print("[拒絕] 有題目圖被切到——請執行 tools/recut_figures.py --apply 重裁後再發佈。")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
