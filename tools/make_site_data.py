r"""把 data/*.json 轉成網站可讀的 JS 資料檔，並把題圖複製進輸出目錄。

輸出（預設 --out site）：
    <out>/data/bank.js        window.BANK = {...}
    <out>/data/solutions.js   window.SOLUTIONS = {...}
    <out>/data/releases.js    window.RELEASES = {...}
    <out>/images/questions/*.png

**發布邊界**：只輸出「已發放（date ≤ 基準日）且未被收回」的題目、解答與題圖。
未發放的內容不會出現在網站檔案裡，學生改網址也看不到（收回同理）。

    python tools/make_site_data.py                              # 正式輸出，以今天為基準
    python tools/make_site_data.py --as-of 2026-09-20            # 模擬某天的發布狀態
    python tools/make_site_data.py --all --out build/preview     # 本機預覽全部（勿上線）

為什麼用 window.XXX：普通 script 的 const 不會掛到 window，容易與讀取端不一致。
index.html 會用「按小時變化的版本號」載入這些檔案，繞過 GitHub Pages 的 10 分鐘快取。
"""
from __future__ import annotations

import argparse
import io
import json
import os
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))   # 讓 import release_model 在各種呼叫方式下都成立
import release_model as rm  # noqa: E402

if (getattr(sys.stdout, "encoding", "") or "").lower().replace("-", "") != "utf8" and hasattr(sys.stdout, "buffer"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data")
SITE = os.path.join(BASE, "site")


def load(name: str, default):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        return default
    return json.load(open(path, encoding="utf-8-sig"))


# 只在工作台（教師端）顯示、不應出現在公開網站的欄位。
# data/*.json 是編輯層，完整保留；這裡只是生成公開資料檔時略去。
TEACHER_ONLY_Q = ("notes", "transcribedBy", "editedBy", "classifiedBy")
TEACHER_ONLY_SOL = ("review", "coordMethodAllowed")


def strip_teacher_only(bank: dict, solutions: dict) -> tuple[int, int]:
    """移除教師專用欄位，回傳 (略去的 notes 題數, 略去的 review 題數)。"""
    n_notes = n_review = 0
    for q in bank.get("questions", []):
        if "notes" in q:
            n_notes += 1
        for k in TEACHER_ONLY_Q:
            q.pop(k, None)
    for s in (solutions.get("solutions") or {}).values():
        if "review" in s:
            n_review += 1
        for k in TEACHER_ONLY_SOL:
            s.pop(k, None)
    return n_notes, n_review


def slice_to_release_boundary(bank: dict, solutions: dict, releases: list[dict],
                              as_of: str, include_all: bool) -> tuple[dict, dict, dict]:
    """切出「學生端應該看到」的內容：未發放與已收回的題目／解答一律不輸出。"""
    if include_all:
        live = {q["id"] for q in bank["questions"]}
        visible = releases
    else:
        live, _revoked, _pending = rm.live_qids(releases, as_of)
        visible = [r for r in releases if rm.is_visible(r, as_of)]

    pub_bank = {k: v for k, v in bank.items() if k != "questions"}
    pub_bank["questions"] = [q for q in bank["questions"] if q["id"] in live]

    # papers：卷別清單保留，題數改成實際輸出的數量（學生端只用得到 name）
    papers = []
    for p in bank.get("papers", []):
        p2 = dict(p)
        p2["questions"] = sum(1 for q in pub_bank["questions"] if q.get("paper") == p.get("id"))
        papers.append(p2)
    pub_bank["papers"] = papers

    pub_sol = {
        "version": solutions.get("version", 1),
        "solutions": {k: v for k, v in (solutions.get("solutions") or {}).items() if k in live},
    }
    pub_rel = {"version": 1, "asOf": as_of, "releases": [rm.slim_release(r) for r in visible]}
    return pub_bank, pub_sol, pub_rel


def write_js(path: str, var: str, obj) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write("// 自動生成，請勿手改（來源：data/；重新生成：python tools/make_site_data.py）\n")
        f.write(f"window.{var} = ")
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write(";\n")


def main() -> int:
    ap = argparse.ArgumentParser(description="生成網站資料檔（只含已發放且未收回的內容）")
    ap.add_argument("--as-of", default=None, help="基準日 YYYY-MM-DD（預設今天）")
    ap.add_argument("--all", action="store_true", help="輸出全部題目（本機預覽用，切勿上線）")
    ap.add_argument("--out", default=SITE, help="輸出根目錄（預設 site；可用 build/preview 做本機預覽）")
    ap.add_argument("--keep-stale-images", action="store_true", help="不刪除輸出目錄中已下架的題圖")
    args = ap.parse_args()

    out_root = args.out if os.path.isabs(args.out) else os.path.join(BASE, args.out)
    bank = load("bank.json", None)
    if not bank:
        print("缺少 data/bank.json")
        return 1
    solutions = load("solutions.json", {"version": 1, "solutions": {}})
    releases_doc = rm.load_releases()
    as_of = rm.today_iso(args.as_of)
    stats = rm.summary(releases_doc["releases"], as_of)

    pub_bank, pub_sol, pub_rel = slice_to_release_boundary(
        bank, solutions, releases_doc["releases"], as_of, args.all)
    n_notes, n_review = strip_teacher_only(pub_bank, pub_sol)

    out_data = os.path.join(out_root, "data")
    write_js(os.path.join(out_data, "bank.js"), "BANK", pub_bank)
    write_js(os.path.join(out_data, "solutions.js"), "SOLUTIONS", pub_sol)
    write_js(os.path.join(out_data, "releases.js"), "RELEASES", pub_rel)

    # 題圖：只複製已發放的題目，並清掉輸出目錄裡已下架（收回／未發放）的圖
    dst_root = os.path.join(out_root, "images", "questions")
    os.makedirs(dst_root, exist_ok=True)
    keep, copied = set(), 0
    for q in pub_bank["questions"]:
        for rel in q.get("images", []):
            keep.add(os.path.basename(rel))
            src = os.path.join(BASE, rel)
            dst = os.path.join(out_root, rel)
            if os.path.exists(src):
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copyfile(src, dst)
                copied += 1
    stale = 0
    if not args.keep_stale_images:
        for fn in os.listdir(dst_root):
            if os.path.isfile(os.path.join(dst_root, fn)) and fn not in keep:
                os.remove(os.path.join(dst_root, fn))
                stale += 1

    out_disp = os.path.relpath(out_root, BASE)
    print(f"輸出 {out_disp}/data/{{bank,solutions,releases}}.js；複製 {copied} 張題圖"
          + (f"；清除 {stale} 張已下架題圖" if stale else ""))
    if args.all:
        print("⚠ --all：已輸出全部題目（含未發放），僅供本機預覽，切勿發佈")
    else:
        print(f"發布邊界（基準日 {as_of}）：可作答 {stats['liveQuestions']} 題、"
              f"已收回 {stats['revokedQuestions']}、未發放 {stats['pendingQuestions']}"
              f"；批次 發放中 {stats['liveBatches']}／已收回 {stats['withdrawnBatches']}／"
              f"未發放 {stats['scheduledBatches']}")
    print(f"公開檔：題庫 {len(pub_bank['questions'])} 題、解答 {len(pub_sol['solutions'])} 題、"
          f"批次 {len(pub_rel['releases'])}")
    print(f"公開資料檔已略去教師專用欄位：notes {n_notes} 題、review {n_review} 題（原檔 data/ 不變）")

    pool = [q for q in bank["questions"] if q["id"] in (solutions.get("solutions") or {})]
    by_diff: dict[int, int] = {}
    for q in pool:
        by_diff[q.get("difficulty")] = by_diff.get(q.get("difficulty"), 0) + 1
    print(f"全題庫 {len(bank['questions'])} 題，已有解答 {len(pool)} 題"
          f"（易 {by_diff.get(1, 0)}／中 {by_diff.get(2, 0)}／難 {by_diff.get(3, 0)}）")
    return 0


if __name__ == "__main__":
    sys.exit(main())
