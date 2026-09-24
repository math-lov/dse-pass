#!/usr/bin/env python3
"""EPH 草稿 → 精簡摘要（給 AI／老師逐題整理的閱讀版）

問題：extract_eph.py 抽出的 raw JSON 又長又雜（重複文字方塊、頁首、答案卡版面、
     表格把整段解答塞成一格），直接讀很耗費注意力。
做法：過濾雜訊與重複、把表格攤平、標出嵌圖公式的圖片路徑，輸出精簡 Markdown。

用法
    python tools/eph_digest.py --files WS01            # 題目版（預設）
    python tools/eph_digest.py --files WS01 --variant both
    python tools/eph_digest.py --stage 1 --variant q    # 只出題目版
    python tools/eph_digest.py --files WS01 --stdout   # 直接印出，不寫檔
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW_DIR = os.path.join(BASE, "data", "learn", "raw")
DIGEST_DIR = os.path.join(RAW_DIR, "digest")

STAGES: dict[int, list[str]] = {
    1: ["WS01", "WS02", "WS03", "WS04", "ASS1"],
    2: ["WS05", "WS06", "WS07", "ASS2"],
    3: ["WS08", "WS09", "WS10", "ASS3"],
    4: ["WS11", "WS12", "WS13", "ASS4", "WS14", "WS15", "WS16", "ASS5"],
    5: ["WS17", "WS18", "WS19", "ASS6", "WS20", "WS21", "ASS7",
        "WS22", "WS23", "WS24", "ASS8"],
}

IMG_RE = re.compile(r"\[IMG:([^\]]+)\]")
SKIP_FLAGS = {"header-noise", "answer-sheet-noise", "dup-noise"}


def _media_path(code: str, variant: str, name: str) -> str:
    sub = "%s%s" % (code, "-sol" if variant == "solution" else "")
    return "media/%s/%s" % (sub, name)


def _fmt_text(t: str, max_len: int) -> str:
    t = t.replace("\r", "")
    t = re.sub(r"\n{2,}", "\n", t)
    if max_len and len(t) > max_len:
        t = t[:max_len] + " …"
    return t.replace("\n", "\n    ")


def build_digest(doc: dict, max_len: int = 600) -> str:
    code = doc["code"]
    variant = doc["variant"]
    lines: list[str] = []
    s = doc.get("stats", {})
    lines.append("# %s · %s — %s" % (code, "題解版" if variant == "solution" else "題目版",
                                     doc.get("sourceFile", "")))
    lines.append("")
    lines.append("stats: " + ", ".join("%s=%s" % (k, v) for k, v in sorted(s.items())))
    lines.append("")

    imgs_used: list[str] = []
    for i, b in enumerate(doc.get("blocks", [])):
        flags = list(b.get("flags") or [])
        if b.get("dup") is not None:
            continue                          # 文字方塊重複 → 略
        if SKIP_FLAGS & set(flags):
            continue

        if b.get("type") == "table":
            rows = b.get("rows") or []
            if not rows:
                continue
            lines.append("[%3d] TABLE %dx%d" % (i, len(rows), max(len(r) for r in rows)))
            for r, row in enumerate(rows):
                for c, cell in enumerate(row):
                    if not str(cell).strip():
                        continue
                    cell_s = _fmt_text(str(cell).strip(), max_len)
                    lines.append("      r%dc%d: %s" % (r, c, cell_s))
                    imgs_used += IMG_RE.findall(str(cell))
            lines.append("")
            continue

        text = str(b.get("text", ""))
        if not text.strip():
            continue
        shown = _fmt_text(text.strip(), max_len)
        tag = ("[" + ",".join(flags) + "] ") if flags else ""
        lines.append("[%3d] %s%s" % (i, tag, shown))
        names = IMG_RE.findall(text)
        for n in names:
            if n.startswith("OLE:"):
                lines.append("      ↳ OLE 物件（無法轉圖）：%s" % n[4:])
                continue
            imgs_used.append(n)
            base = os.path.splitext(n)[0] + ".png"
            lines.append("      ↳ 圖：%s" % _media_path(code, variant, base))

    # 檔尾：全部圖檔清單（方便逐張開啟）
    uniq: list[str] = []
    for n in imgs_used:
        if n not in uniq:
            uniq.append(n)
    if uniq:
        lines.append("")
        lines.append("## 圖片清單（%d 張，已轉 PNG）" % len(uniq))
        for n in uniq:
            lines.append("- " + _media_path(code, variant, os.path.splitext(n)[0] + ".png"))
    return "\n".join(lines) + "\n"


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    ap = argparse.ArgumentParser(description="EPH raw JSON → 精簡摘要 Markdown")
    ap.add_argument("--files", help="代碼，逗號分隔（例：WS01,ASS1）")
    ap.add_argument("--stage", type=int, choices=sorted(STAGES), help="只做某個 Stage")
    ap.add_argument("--all", action="store_true", help="全部")
    ap.add_argument("--variant", choices=["q", "sol", "both"], default="q",
                    help="題目版／題解版／兩者（預設 q）")
    ap.add_argument("--max-len", type=int, default=600, help="單一區塊最多字元（預設 600）")
    ap.add_argument("--stdout", action="store_true", help="直接印出，不寫檔")
    ap.add_argument("--out", default=DIGEST_DIR, help="輸出目錄")
    args = ap.parse_args(argv)

    want: set[str] | None = None
    if args.files:
        want = {c.strip().upper() for c in args.files.split(",") if c.strip()}
    elif args.stage:
        want = {c.upper() for c in STAGES[args.stage]}
    elif not args.all:
        ap.error("請給 --files、--stage 或 --all")

    variants = ["question", "solution"] if args.variant == "both" else \
               (["solution"] if args.variant == "sol" else ["question"])

    if not os.path.isdir(RAW_DIR):
        print("找不到 %s，請先跑 tools/extract_eph.py" % RAW_DIR)
        return 1

    made = 0
    for fn in sorted(os.listdir(RAW_DIR)):
        if not fn.endswith(".json") or fn.startswith("_"):
            continue
        path = os.path.join(RAW_DIR, fn)
        try:
            with open(path, encoding="utf-8") as f:
                doc = json.load(f)
        except Exception:                                    # noqa: BLE001
            continue
        if "blocks" not in doc:
            continue
        if want is not None and str(doc.get("code", "")).upper() not in want:
            continue
        if doc.get("variant") not in variants:
            continue

        text = build_digest(doc, args.max_len)
        if args.stdout:
            print(text)
        else:
            os.makedirs(args.out, exist_ok=True)
            out = os.path.join(args.out, fn.replace(".json", ".md"))
            with open(out, "w", encoding="utf-8") as f:
                f.write(text)
            print("✓ %s" % os.path.relpath(out, BASE))
        made += 1

    if not args.stdout:
        print("完成：%d 份摘要 → %s" % (made, args.out))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
