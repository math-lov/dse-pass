#!/usr/bin/env python3
"""EPH 工作紙抽取器 — docx → data/learn/raw/<code>.json（草稿層，禁止手改）

用途：把 inbox_learn/ 的 EPH《HKDSE All-Round Level 5 Assurance Pack》Word 檔案
（WS01–WS24 工作紙、Ass1–8 Assessment，每份都有題目版與 _sol 題解版）
抽成結構化 JSON 草稿，交給 AI／老師整理成 data/learn/{bank,concepts,solutions,lessons}.json。

設計重點
  1. 上標還原：Word 用 w:vertAlign 標記上標（x² 抽成純文字會變 x2），
     這裡逐 run 讀取並還原成 ^{...}，再轉成 LaTeX 的 x^{2}。
  2. 嵌圖公式：部分表達式是圖片（非文字），這裡在原文位置插入 [IMG:xxx.png] 標記，
     並對「只有圖沒有字」的段落標 embed-fig 旗標（需人工轉寫）。
  3. 去重：Word 的文字方塊（w:txbxContent）內容常與正文重複（如 "Example 1Example 1"），
     這裡標記 context 與 dup 索引，方便整理時過濾。
  4. 雜訊標記：頁首 "Name: ____ ( ) Class:" 與 "MCQ ANSWER SHEET" 等標為 noise。
  5. 原檔不動：只讀 inbox_learn/，輸出 data/learn/raw/（比照 transcripts 禁手改）。

用法
    python tools/extract_eph.py                 # 抽全部（WS01-24 + Ass1-8，含 _sol）
    python tools/extract_eph.py --stage 1       # 只抽 Stage 1（WS01-04 + Ass1）
    python tools/extract_eph.py --files WS01,Ass1
    python tools/extract_eph.py --list          # 列出可抽的檔案
    python tools/extract_eph.py --help

輸出
    data/learn/raw/<CODE>.json        題目版
    data/learn/raw/<CODE>-sol.json    題解版
    data/learn/raw/_index.json        抽取總表（品質統計，供人工抽查）
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import zipfile
from datetime import datetime, timezone
from xml.etree import ElementTree as ET

# ── 路徑 ────────────────────────────────────────────────────────────────
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INBOX = os.path.join(BASE, "inbox")
RAW_DIR = os.path.join(BASE, "data", "learn", "raw")

# ── OOXML 命名空間 ──────────────────────────────────────────────────────
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
R = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}"
A = "{http://schemas.openxmlformats.org/drawingml/2006/main}"
V = "{urn:schemas-microsoft-com:vml}"
M = "{http://schemas.openxmlformats.org/officeDocument/2006/math}"
PKG_REL = "{http://schemas.openxmlformats.org/package/2006/relationships}"
WPS = "{http://schemas.microsoft.com/office/word/2010/wordprocessingShape}"

# ── EPH 檔名規則 ────────────────────────────────────────────────────────
FNAME_RE = re.compile(r"^EPH_(?:DSEL5|DSEPass)_(WS\d{2}|Ass\d+)_e(?P<sol>_sol)?\.docx$", re.I)

# ── Stage 對應（依 Content L5_e.pdf 實測）────────────────────────────────
STAGES: dict[int, list[str]] = {
    1: ["WS01", "WS02", "WS03", "WS04", "Ass1"],
    2: ["WS05", "WS06", "WS07", "Ass2"],
    3: ["WS08", "WS09", "WS10", "Ass3"],
    4: ["WS11", "WS12", "WS13", "Ass4", "WS14", "WS15", "WS16", "Ass5"],
    5: ["WS17", "WS18", "WS19", "Ass6", "WS20", "WS21", "Ass7",
        "WS22", "WS23", "WS24", "Ass8"],
}

# ── 雜訊／結構判別樣式 ───────────────────────────────────────────────────
RE_HEADER = re.compile(r"^Name:\s*_+", re.I)
RE_ANSWER_SHEET = re.compile(r"MCQ ANSWER SHEET|YOU ARE ADVISED TO USE H\.B\. PENCILS", re.I)
RE_MARKS = re.compile(r"\(\s*\d+\s*marks?\s*\)", re.I)
RE_MARKING = re.compile(r"\(\s*\d+\s*[MA]\b[^)]*\)")          # (1A) (1M: ...)
RE_DSE_REF = re.compile(r"\[?(HKDSE\s+\d{4}\s+Paper\s+1[^\]]*)\]?")
RE_EXAMPLE = re.compile(r"^Example\s*\d+", re.I)
RE_PRACTICE = re.compile(r"^Practice\s*\d+", re.I)
RE_SOLUTION = re.compile(r"^Solution\b", re.I)
RE_OPTION = re.compile(r"^([A-D])\s*\.\s*(.+)$", re.S)
RE_QNUM = re.compile(r"^(\d{1,2})\s*\.\s*(.*)$", re.S)
RE_TOPIC_HINT = re.compile(r"Key Concepts|Related HKDSE", re.I)


# ════════════════════════════════════════════════════════════════════════
# 低階：把 w:p 轉成文字（逐 run，處理上標／下標／圖片／公式）
# ════════════════════════════════════════════════════════════════════════
# Wingdings／Symbol 字型的私用區字元 → 可讀 Unicode
# （EPH 用 Wingdings 畫箭頭／方框，用 Symbol 排減號、不等號等數學符號）
SYM_MAP = {
    0xF074: "→",     # Wingdings 右箭頭（步驟提示）
    0xF0D8: "→",
    0xF0E0: "•",
    0xF06E: "▪",
    0xF0A7: "▪",
    0xF0A8: "□",
    0xF0FC: "✔",
    0xF0FE: "☑",
    # Symbol 字型（0xF0xx = 0x00xx 偏移）
    0xF02D: "−", 0xF02B: "+", 0xF03D: "=",
    0xF03C: "<", 0xF03E: ">",
    0xF0A3: "≤", 0xF0B3: "≥", 0xF0B9: "≠", 0xF0BB: "≈",
    0xF0B4: "×", 0xF0B8: "÷", 0xF0D7: "⋅",
    0xF0B0: "°", 0xF0A5: "∞", 0xF0D6: "√", 0xF0AE: "→",
    0xF0B1: "±", 0xF0A2: "′", 0xF0BA: "≡", 0xF0B5: "∝",
    0xF0E5: "∑", 0xF0F2: "∫", 0xF071: "γ", 0xF0C1: "Α",
    0xF0B7: "•", 0xF07B: "∠", 0xF044: "△",
    # 清單項目符號／結論標記（EPH 的 "Solution Key Steps" 用）
    0xF081: "•", 0xF082: "•", 0xF06C: "•", 0xF083: "→",
}


def _sym_char(code: int) -> str:
    """w:sym 字元碼 → Unicode。

    注意：這類字元碼是「字型內碼」，低 byte 常等於 ASCII（例如 0xF062 = 斜體 b、
    0xF061 = 斜體 a），所以先查對照表，再用 ASCII 區間兜底。
    """
    if code in SYM_MAP:
        return SYM_MAP[code]
    if 0xF020 <= code <= 0xF07E:
        return chr(code - 0xF000)         # 斜體字母 a–z、常見標點
    if 0xF000 <= code <= 0xF0FF:
        return "[SYM:%04X]" % code        # 未知私用區字元 → 明示，方便人工判讀
    try:
        return chr(code)
    except ValueError:
        return ""


def _run_text(run: ET.Element, rels: dict[str, str], media: list[str]) -> str:
    """取一個 run 的文字；上標 → ^{...}、下標 → _{...}，圖片 → [IMG:name]。"""
    va = None
    rpr = run.find(W + "rPr")
    if rpr is not None:
        v = rpr.find(W + "vertAlign")
        if v is not None:
            va = v.get(W + "val")          # "superscript" | "subscript" | "baseline"

    out: list[str] = []
    for child in run:
        tag = child.tag
        if tag == W + "t":
            out.append(child.text or "")
        elif tag == W + "tab":
            out.append(" ")
        elif tag in (W + "br", W + "cr"):
            out.append("\n")
        elif tag == W + "sym":
            # 符號字型字元（± ∞ ∠ 等）→ 直接組出 Unicode
            ch = child.get(W + "char")
            if ch:
                try:
                    out.append(_sym_char(int(ch, 16)))
                except ValueError:
                    pass
        elif tag in (W + "drawing", W + "pict", W + "object"):
            name = _image_name(child, rels)
            if name:
                media.append(name)
                out.append("[IMG:%s]" % name)
            omath = child.findall(".//" + M + "oMath")
            if omath:
                out.append("[EQ]")
    txt = "".join(out)
    if not txt:
        return ""
    if va == "superscript":
        return "^{%s}" % txt
    if va == "subscript":
        return "_{%s}" % txt
    return txt


def _image_name(node: ET.Element, rels: dict[str, str]) -> str | None:
    """從繪圖／VML／OLE 物件取媒體檔名。"""
    blip = node.find(".//" + A + "blip")
    if blip is not None:
        rid = blip.get(R + "embed") or blip.get(R + "link")
        if rid and rid in rels:
            return os.path.basename(rels[rid])
    imagedata = node.find(".//" + V + "imagedata")
    if imagedata is not None:
        rid = imagedata.get(R + "id") or imagedata.get("id")
        if rid:
            if rid in rels:
                return os.path.basename(rels[rid])
            return os.path.basename(rid)
    ole = node.find(".//" + W + "OLEObject")
    if ole is not None:
        rid = ole.get(R + "id")
        if rid and rid in rels:
            return "OLE:" + os.path.basename(rels[rid])
    return None


def _iter_runs(node: ET.Element):
    """逐個回傳 run，但在 w:txbxContent（文字方塊）處停下 ——
    文字方塊的內容由 _textbox_paras() 另存，否則同一段文字會被抽兩次。"""
    for child in node:
        if child.tag == W + "txbxContent":
            continue
        if child.tag == W + "r":
            yield child
        else:
            yield from _iter_runs(child)


def _para_record(p: ET.Element, rels: dict[str, str], media: list[str],
                 context: str) -> dict | None:
    """把一個 w:p 轉成文字區塊記錄（沒有文字也沒有圖 → None）。"""
    media_local: list[str] = []
    parts: list[str] = []
    eq_count = 0
    for run in _iter_runs(p):
        t = _run_text(run, rels, media_local)
        if t:
            parts.append(t)
        eq_count += len(run.findall(".//" + M + "oMath"))
    text = "".join(parts)

    # 段落層級的樣式（粗體／標題層級）供整理時參考
    style = None
    ppr = p.find(W + "pPr")
    if ppr is not None:
        ps = ppr.find(W + "pStyle")
        if ps is not None:
            style = ps.get(W + "val")
        olvl = ppr.find(W + "outlineLvl")
        if olvl is not None:
            style = (style or "") + "|lvl" + str(olvl.get(W + "val"))

    if not text and not media_local:
        return None

    rec: dict = {"type": "para", "text": text}
    if context != "body":
        rec["context"] = context
    if style:
        rec["style"] = style
    if media_local:
        rec["images"] = media_local
    if eq_count:
        rec["omath"] = eq_count

    flags = _para_flags(text, media_local)
    if flags:
        rec["flags"] = flags
    return rec


def _para_flags(text: str, images: list[str]) -> list[str]:
    flags: list[str] = []
    stripped = text.strip()
    if images and len(re.sub(r"\[IMG:[^\]]+\]|\[EQ\]", "", stripped).strip()) <= 2:
        flags.append("embed-fig")          # 只有圖、沒有（或幾乎沒有）文字 → 圖片公式
    if RE_HEADER.search(stripped):
        flags.append("header-noise")
    if RE_ANSWER_SHEET.search(stripped):
        flags.append("answer-sheet-noise")
    if RE_MARKS.search(stripped):
        flags.append("marks")
    if RE_MARKING.search(stripped):
        flags.append("marking")
    if RE_DSE_REF.search(stripped):
        flags.append("dse-ref")
    if RE_EXAMPLE.match(stripped):
        flags.append("example")
    if RE_PRACTICE.match(stripped):
        flags.append("practice")
    if RE_SOLUTION.match(stripped):
        flags.append("solution")
    return flags


# ════════════════════════════════════════════════════════════════════════
# 中階：走訪 body，依文件順序產出區塊
# ════════════════════════════════════════════════════════════════════════
def _table_record(tbl: ET.Element, rels: dict[str, str], media: list[str]) -> dict | None:
    rows: list[list[str]] = []
    for tr in tbl.findall(W + "tr"):
        cells: list[str] = []
        for tc in tr.findall(W + "tc"):
            chunks: list[str] = []
            for p in tc.findall(W + "p"):
                rec = _para_record(p, rels, media, "table")
                if rec and str(rec["text"]).strip():
                    chunks.append(str(rec["text"]).strip())
            # 用換行保留儲存格內的分行（解答步驟就是靠分行區分）
            cells.append("\n".join(chunks))
        if any(c.strip() for c in cells):
            rows.append(cells)
    if not rows:
        return None
    return {"type": "table", "rows": rows}


def _textbox_paras(node: ET.Element, rels: dict[str, str], media: list[str]) -> list[dict]:
    out: list[dict] = []
    for tb in node.iter(W + "txbxContent"):
        for p in tb.findall(W + "p"):
            rec = _para_record(p, rels, media, "textbox")
            if rec:
                out.append(rec)
    return out


def _walk(node: ET.Element, rels: dict[str, str], media: list[str],
          blocks: list[dict], context: str = "body") -> None:
    for child in node:
        tag = child.tag
        if tag == W + "p":
            rec = _para_record(child, rels, media, context)
            if rec:
                blocks.append(rec)
            # 段落內的文字方塊內容另存（標 context=textbox，方便過濾重複）
            for extra in _textbox_paras(child, rels, media):
                blocks.append(extra)
        elif tag == W + "tbl":
            rec = _table_record(child, rels, media)
            if rec:
                blocks.append(rec)
            for extra in _textbox_paras(child, rels, media):
                blocks.append(extra)
        elif tag == W + "sdt":
            content = child.find(W + "sdtContent")
            if content is not None:
                _walk(content, rels, media, blocks, context)
        elif tag in (W + "body", W + "tc", W + "txbxContent"):
            _walk(child, rels, media, blocks, context)


def _mark_duplicates(blocks: list[dict]) -> int:
    """文字完全相同的區塊 → 標 dup（指向第一次出現的索引）。回傳標記數。"""
    seen: dict[str, int] = {}
    dups = 0
    for i, b in enumerate(blocks):
        if b.get("type") != "para":
            continue
        key = re.sub(r"\s+", " ", str(b.get("text", ""))).strip().lower()
        if len(key) < 4:
            continue
        if key in seen:
            b["dup"] = seen[key]
            dups += 1
        else:
            seen[key] = i
    return dups


# ════════════════════════════════════════════════════════════════════════
# 高階：抽一個 docx
# ════════════════════════════════════════════════════════════════════════
def _rels(z: zipfile.ZipFile) -> dict[str, str]:
    out: dict[str, str] = {}
    try:
        xml = z.read("word/_rels/document.xml.rels")
    except KeyError:
        return out
    root = ET.fromstring(xml)
    for rel in root.findall(PKG_REL + "Relationship"):
        out[rel.get("Id", "")] = rel.get("Target", "")
    return out


def _media_manifest(z: zipfile.ZipFile) -> list[dict]:
    out: list[dict] = []
    for n in z.namelist():
        if n.startswith("word/media/") and not n.endswith("/"):
            out.append({"name": os.path.basename(n), "size": z.getinfo(n).file_size})
    out.sort(key=lambda d: d["name"])
    return out


def extract_file(path: str, media_dir: str | None = None) -> dict:
    """抽一個 docx → 草稿 dict。

    media_dir 給定時，同時把 word/media/* 複製到該目錄（供 WMF→PNG 轉換、
    讓 AI／老師可以「看」到嵌圖公式）。重複的媒體檔只寫一次。
    """
    fname = os.path.basename(path)
    m = FNAME_RE.match(fname)
    code = m.group(1).upper() if m else os.path.splitext(fname)[0]
    is_sol = bool(m and m.group("sol"))

    with zipfile.ZipFile(path) as z:
        rels = _rels(z)
        doc = ET.fromstring(z.read("word/document.xml"))
        media_manifest = _media_manifest(z)
        if media_dir:
            os.makedirs(media_dir, exist_ok=True)
            for entry in media_manifest:
                src = "word/media/" + entry["name"]
                dst = os.path.join(media_dir, entry["name"])
                if not os.path.exists(dst):
                    with open(dst, "wb") as f:
                        f.write(z.read(src))

    body = doc.find(W + "body")
    blocks: list[dict] = []
    media_order: list[str] = []
    if body is not None:
        _walk(body, rels, media_order, blocks)
    dups = _mark_duplicates(blocks)

    # 統計
    stats = {
        "blocks": len(blocks),
        "dups": dups,
        "images": len(media_manifest),
        "images_inline": len(media_order),
        "sup": sum(1 for b in blocks for _ in re.findall(r"\^\{", str(b.get("text", "")))),
        "embedFig": sum(1 for b in blocks if "embed-fig" in (b.get("flags") or [])),
        "numEq": sum(len(re.findall(r"(?<![A-Za-z0-9^.^{])[-−]?\d+(?:\.\d+)?\s*(?:\.|\))", str(b.get("text", "")))) for b in blocks[:0]),
        "marks": sum(1 for b in blocks if "marks" in (b.get("flags") or [])),
        "marking": sum(1 for b in blocks if "marking" in (b.get("flags") or [])),
        "examples": sum(1 for b in blocks if "example" in (b.get("flags") or [])),
        "practices": sum(1 for b in blocks if "practice" in (b.get("flags") or [])),
        "solutions": sum(1 for b in blocks if "solution" in (b.get("flags") or [])),
        "noise": sum(1 for b in blocks
                     if {"header-noise", "answer-sheet-noise"} & set(b.get("flags") or [])),
        "tables": sum(1 for b in blocks if b.get("type") == "table"),
    }

    return {
        "_comment": "由 tools/extract_eph.py 自動產生（草稿層）。請勿手改；"
                    "要修正內容請改 data/learn/{bank,concepts,solutions,lessons}.json。",
        "sourceFile": fname,
        "code": code,
        "variant": "solution" if is_sol else "question",
        "extractedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "stats": stats,
        "mediaManifest": media_manifest,
        "blocks": blocks,
    }


# ════════════════════════════════════════════════════════════════════════
# CLI
# ════════════════════════════════════════════════════════════════════════
def discover() -> list[tuple[str, str, bool]]:
    """回傳 [(code, path, is_sol)]，依 code 排序（題目版在題解版之前）。"""
    if not os.path.isdir(INBOX):
        return []
    out: list[tuple[str, str, bool]] = []
    # 遞迴：教材按系列分資料夾（inbox/Exercise、inbox/Assessment）
    for root, dirs, fns in os.walk(INBOX):
        dirs[:] = [d for d in dirs if not d.startswith(".")]
        for fn in fns:
            m = FNAME_RE.match(fn)
            if not m:
                continue
            out.append((m.group(1).upper(), os.path.join(root, fn), bool(m.group("sol"))))
    out.sort(key=lambda t: (_code_key(t[0]), t[2]))
    return out


def _code_key(code: str) -> tuple[int, int]:
    if code.upper().startswith("WS"):
        return (0, int(code[2:]))
    if code.upper().startswith("ASS"):
        return (1, int(code[3:]))
    return (2, 0)


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    ap = argparse.ArgumentParser(description="EPH 工作紙 docx → data/learn/raw/*.json")
    ap.add_argument("--files", help="只抽指定代碼，逗號分隔（例：WS01,Ass1）")
    ap.add_argument("--stage", type=int, choices=sorted(STAGES),
                    help="只抽某個 Stage（1–5，見 Content L5_e.pdf）")
    ap.add_argument("--list", action="store_true", help="列出可抽的檔案後結束")
    ap.add_argument("--out", default=RAW_DIR, help="輸出目錄（預設 data/learn/raw）")
    ap.add_argument("--no-media", action="store_true",
                    help="不要複製 word/media/*（預設會複製到 <out>/media/<CODE>/）")
    args = ap.parse_args(argv)

    files = discover()
    if args.list:
        for code, path, is_sol in files:
            print("%-6s %-8s %s" % (code, "sol" if is_sol else "q", os.path.basename(path)))
        print("共 %d 個檔" % len(files))
        return 0

    if not files:
        print("找不到 inbox_learn/*.docx，請確認路徑：%s" % INBOX)
        return 1

    want: set[str] | None = None
    if args.files:
        want = {c.strip().upper() for c in args.files.split(",") if c.strip()}
    elif args.stage:
        want = {c.upper() for c in STAGES[args.stage]}

    os.makedirs(args.out, exist_ok=True)
    index: list[dict] = []
    wrote = 0
    for code, path, is_sol in files:
        if want is not None and code.upper() not in want:
            continue
        try:
            media_dir = None
            if not args.no_media:
                media_dir = os.path.join(args.out, "media",
                                         "%s%s" % (code, "-sol" if is_sol else ""))
            doc = extract_file(path, media_dir)
        except Exception as e:                                # noqa: BLE001
            print("✗ %s 抽取失敗：%s" % (os.path.basename(path), e))
            index.append({"code": code, "variant": "solution" if is_sol else "question",
                          "file": os.path.basename(path), "error": str(e)})
            continue
        out_name = "%s%s.json" % (code, "-sol" if is_sol else "")
        out_path = os.path.join(args.out, out_name)
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(doc, f, ensure_ascii=False, indent=1)
        wrote += 1
        s = doc["stats"]
        print("✓ %-12s blocks=%-4d dup=%-3d img=%-3d embed-fig=%-3d sup=%-4d "
              "ex=%d pr=%d sol=%d marks=%d"
              % (out_name, s["blocks"], s["dups"], s["images"], s["embedFig"],
                 s["sup"], s["examples"], s["practices"], s["solutions"], s["marks"]))
        index.append({"code": code, "variant": doc["variant"], "file": doc["sourceFile"],
                      "out": out_name, "stats": s})

    idx_path = os.path.join(args.out, "_index.json")
    with open(idx_path, "w", encoding="utf-8") as f:
        json.dump({"_comment": "extract_eph.py 抽取總表（草稿層，禁手改）",
                   "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                   "files": index}, f, ensure_ascii=False, indent=1)
    print("\n完成：寫出 %d 個草稿檔 + _index.json → %s" % (wrote, args.out))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
