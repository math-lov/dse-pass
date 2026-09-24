r"""把既有裁剪圖（figures/qNNN.png）導入題庫圖片目錄（images/questions/<paper>-qNN.png）。

用於「題圖已由其他方式裁好」的情況；若要用 PDF 重新裁圖，請用 tools/cut_questions.py。

用法：
    python tools/import_figures.py --paper 2025-p2 --src figures
"""
from __future__ import annotations

import argparse
import io
import os
import re
import shutil
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NUM_RE = re.compile(r"q0*(\d{1,3})\.png$", re.I)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--paper", default="2025-p2")
    ap.add_argument("--src", default=os.path.join(BASE, "figures"))
    ap.add_argument("--dst", default=os.path.join(BASE, "images", "questions"))
    args = ap.parse_args()

    os.makedirs(args.dst, exist_ok=True)
    n = 0
    for name in sorted(os.listdir(args.src)):
        m = NUM_RE.search(name)
        if not m:
            continue
        no = int(m.group(1))
        dst = os.path.join(args.dst, f"{args.paper}-q{no:02d}.png")
        shutil.copyfile(os.path.join(args.src, name), dst)
        n += 1
    print(f"導入 {n} 張題圖 → {args.dst}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
