#!/usr/bin/env python3
"""WMF／EMF → PNG 轉換器（Windows GDI+）

用途：EPH 工作紙把大量行內公式存成 WMF 向量圖（Stage 1 十個檔已有 835 個）。
Windows 的 GDI+ 可以直接讀 WMF／EMF 並以任意倍率重繪，這裡用 PowerShell
呼叫 System.Drawing 轉成高解析 PNG，讓 AI（讀圖）與老師都能檢視，
也讓網站可以選擇「原圖顯示」這些公式。

用法
    python tools/wmf_to_png.py --dir data/learn/raw/media/ASS1-sol --scale 4
    python tools/wmf_to_png.py --dir data/learn/raw/media --recursive
    python tools/wmf_to_png.py --dir <dir> --out <dir> --force
"""

from __future__ import annotations

import argparse
import os
import subprocess
import sys
import tempfile

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# PowerShell：GDI+ 讀 WMF／EMF，放大重繪成透明底 PNG
PS_SCRIPT = r"""
param([string]$Src, [string]$Dst, [double]$Scale)
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($Src)
try {
  $w = [int][Math]::Max(1, [Math]::Round($img.Width  * $Scale))
  $h = [int][Math]::Max(1, [Math]::Round($img.Height * $Scale))
  $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $bmp.SetResolution(300, 300)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear([System.Drawing.Color]::Transparent)
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)))
  $g.Dispose()
  $bmp.Save($Dst, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output "ok"
} finally { $img.Dispose() }
"""


def _convert(src: str, dst: str, scale: float, ps_file: str) -> bool:
    cmd = ["powershell", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
           "-File", ps_file, "-Src", src, "-Dst", dst, "-Scale", str(scale)]
    r = subprocess.run(cmd, capture_output=True, text=True)
    return r.returncode == 0 and os.path.exists(dst)


def find_vectors(root: str, recursive: bool) -> list[str]:
    out: list[str] = []
    if recursive:
        for dirpath, _dirnames, filenames in os.walk(root):
            for fn in filenames:
                if fn.lower().endswith((".wmf", ".emf")):
                    out.append(os.path.join(dirpath, fn))
    else:
        for fn in os.listdir(root):
            if fn.lower().endswith((".wmf", ".emf")):
                out.append(os.path.join(root, fn))
    return sorted(out)


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    ap = argparse.ArgumentParser(description="WMF／EMF → PNG（Windows GDI+）")
    ap.add_argument("--dir", required=True, help="含 WMF／EMF 的目錄")
    ap.add_argument("--out", help="輸出目錄（預設與來源相同，副檔名改 .png）")
    ap.add_argument("--scale", type=float, default=4.0, help="放大倍率（預設 4）")
    ap.add_argument("--recursive", action="store_true", help="遞迴掃描子目錄")
    ap.add_argument("--force", action="store_true", help="已存在也重轉")
    args = ap.parse_args(argv)

    src_root = args.dir if os.path.isabs(args.dir) else os.path.join(BASE, args.dir)
    if not os.path.isdir(src_root):
        print("找不到目錄：%s" % src_root)
        return 1

    files = find_vectors(src_root, args.recursive)
    if not files:
        print("目錄內沒有 .wmf／.emf：%s" % src_root)
        return 0

    with tempfile.NamedTemporaryFile("w", suffix=".ps1", delete=False,
                                     encoding="utf-8") as f:
        f.write(PS_SCRIPT)
        ps_file = f.name

    ok = skipped = failed = 0
    try:
        for src in files:
            rel = os.path.relpath(src, src_root)
            if args.out:
                out_root = args.out if os.path.isabs(args.out) else os.path.join(BASE, args.out)
                dst = os.path.join(out_root, os.path.splitext(rel)[0] + ".png")
            else:
                dst = os.path.splitext(src)[0] + ".png"
            if os.path.exists(dst) and not args.force:
                skipped += 1
                continue
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            if _convert(src, dst, args.scale, ps_file):
                ok += 1
            else:
                failed += 1
                print("✗ 轉換失敗：%s" % rel)
    finally:
        try:
            os.remove(ps_file)
        except OSError:
            pass

    print("轉出 %d 個 PNG（略過 %d、失敗 %d）" % (ok, skipped, failed))
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
