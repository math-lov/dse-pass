#!/usr/bin/env python3
"""自學追上站資料生成器 —— data/learn/*.json → learn/data/*.js

仿 tools/make_site_data.py 的做法：
  * 只輸出「可以出站」的內容（review 旗標非 null 的題目一律剔除）
  * strip_teacher_only()：教師欄位不進公開檔
  * 每課題一個 .js 檔（首頁只載入 index.js，進入課題才載入該課題的檔）
  * 題圖複製到 learn/images/（本階段題目全文字，暫無題圖）

輸出
    learn/data/index.js            首頁用：Stage、課題清單、統計
    learn/data/topic-<id>.js       單一課題的完整內容（概念卡＋長題示範＋MC 頁）
    learn/data/meta.js             版本與產生時間（除錯用）

用法
    python tools/make_learn_data.py
    python tools/make_learn_data.py --out build/learn-preview   # 本機預覽
    python tools/make_learn_data.py --include-review            # 連未覆核題目一併輸出（只限本機預覽）
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import sys
from datetime import datetime, timezone

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data", "learn")
OUT_ROOT = BASE          # 網站就在 repo 根目錄（Pages 由 root 提供）→ 直接寫入 data/

# 只在教師端／編輯層出現、不進公開檔的欄位
TEACHER_ONLY_Q = ("notes", "transcribedBy", "editedBy", "reviewNote")
TEACHER_ONLY_SOL = ("reviewNote", "answerRaw")


def _load(name: str, default=None):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        if default is None:
            raise SystemExit("缺少資料檔：%s" % path)
        return default
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def strip_teacher_only(bank: dict, sols: dict) -> int:
    """移除教師專用欄位（原地修改），回傳被剔除的欄位數。"""
    removed = 0
    for q in bank.get("questions", []):
        for k in TEACHER_ONLY_Q:
            if k in q:
                q.pop(k, None)
                removed += 1
    for s in (sols.get("solutions") or {}).values():
        for k in TEACHER_ONLY_SOL:
            if k in s:
                s.pop(k, None)
                removed += 1
    return removed


def write_js(path: str, var: str, obj) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write("// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）\n")
        f.write("window.%s = " % var)
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write(";\n")


def _with_figures(obj: dict, figures: dict, key: str) -> dict:
    """概念卡／題目附加示意圖（只進公開檔，唔寫入 concepts.json / bank.json）。"""
    if figures.get(key):
        return dict(obj, figures=figures[key])
    return obj


def build_topic(topic: dict, bank_by_id: dict, cards_by_id: dict, sols: dict,
                blocked: set[str], figures: dict | None = None) -> dict:
    """組出單一課題的完整內容（給前端）。"""
    figures = figures or {}
    lessons_out = []
    for les in topic.get("lessons", []):
        cards = []
        for cid in les.get("conceptCards", []):
            card = cards_by_id.get(cid)
            if card:
                # 示意圖只進公開檔（SVG 由 make_learn_figures.py 產生）
                # 一張卡可以有多幅圖（例如變換多於一次）
                cards.append(_with_figures(card, figures, cid))

        long_qs = []
        for qid in les.get("longQuestionIds", []):
            q = bank_by_id.get(qid)
            if q and qid not in blocked:
                long_qs.append(_with_figures(q, figures, qid))

        pages = []
        for page in les.get("mcPages", []):
            row = [_with_figures(bank_by_id[qid], figures, qid)
                   for qid in page if qid in bank_by_id and qid not in blocked]
            if row:
                pages.append(row)

        lessons_out.append({
            "id": les.get("id"),
            "title": les.get("title", {}),
            "cards": cards,
            "long": long_qs,
            "pages": pages,
        })

    n_mc = sum(len(p) for les in lessons_out for p in les["pages"])
    n_long = sum(len(les["long"]) for les in lessons_out)
    return {
        "id": topic.get("id"),
        "stage": topic.get("stage"),
        "unit": topic.get("unit"),
        "subtopic": topic.get("subtopic"),
        "source": topic.get("source"),
        "name": topic.get("name", {}),
        "intro": topic.get("intro", {}),
        # 這一課自己的「題目字眼」（常駐提示列；未提供時前端用預設那組）
        "cmdHints": topic.get("cmdHints", []),
        "lessons": lessons_out,
        "stats": {"mc": n_mc, "long": n_long,
                  "cards": sum(len(les["cards"]) for les in lessons_out),
                  "pages": sum(len(les["pages"]) for les in lessons_out)},
    }


def main(argv: list[str] | None = None) -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    ap = argparse.ArgumentParser(description="data/learn → data/*.js")
    ap.add_argument("--out", default=OUT_ROOT, help="輸出根目錄（預設 repo 根）")
    ap.add_argument("--include-review", action="store_true",
                    help="連 review 未覆核的題目一併輸出（只限本機預覽，切勿發佈）")
    args = ap.parse_args(argv)

    bank = _load("bank.json")
    lessons = _load("lessons.json")
    concepts = _load("concepts.json", {"cards": []})
    sols_doc = _load("solutions.json", {"solutions": {}})
    sols = sols_doc.get("solutions") or {}
    # 概念卡示意圖（SVG）：由 tools/make_learn_figures.py 產生
    figures = (_load("figures.json", {"figures": {}}).get("figures") or {})
    # 課題開關（面板維護）：holdTopics 內的課題暫緩出站，學生看不到
    pub_doc = _load("publish.json", {"holdTopics": []})
    hold: set[str] = {str(x) for x in (pub_doc.get("holdTopics") or [])}

    questions = bank.get("questions", [])
    bank_by_id = {q["id"]: q for q in questions}
    cards_by_id = {c["id"]: c for c in concepts.get("cards", [])}

    # 未覆核（review 非 null）→ 不出站（除非 --include-review）
    blocked: set[str] = set()
    if not args.include_review:
        blocked = {q["id"] for q in questions if q.get("review")}

    # 把題解併進題目（前端一次拿到完整資料）
    merged = 0
    for qid, q in bank_by_id.items():
        s = sols.get(qid)
        if s:
            q["solution"] = s.get("solution", {})
            q["answer"] = s.get("answer")
            q["verify"] = s.get("verify")
            merged += 1

    removed = strip_teacher_only(bank, sols_doc)

    out = args.out if os.path.isabs(args.out) else os.path.join(BASE, args.out)
    out_data = os.path.join(out, "data")

    # 首頁索引（輕量）
    topics_index = []
    kept_files: set[str] = set()
    for t in lessons.get("topics", []):
        tid = t.get("id")
        if tid in hold:
            continue                              # 面板暫緩的課題：不輸出
        payload = build_topic(t, bank_by_id, cards_by_id, sols, blocked, figures)
        kept_files.add("topic-%s.js" % tid)
        topics_index.append({
            "id": tid,
            "stage": t.get("stage"),
            "unit": t.get("unit"),
            "name": t.get("name", {}),
            "intro": t.get("intro", {}),
            "source": t.get("source"),
            "stats": payload["stats"],
            # 前端算進度時要知道「這個課題有哪些課」（概念卡完成度以 lesson 為單位）
            "lessonIds": [les.get("id") for les in t.get("lessons", [])],
        })
        write_js(os.path.join(out_data, "topic-%s.js" % tid),
                 "LEARN_TOPIC_%s" % str(tid).upper().replace("-", "_"), payload)

    index_obj = {
        "version": lessons.get("version", 1),
        "stages": lessons.get("stages", []),
        "topics": topics_index,
        "assessments": lessons.get("assessments", []),
        "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "counts": {
            "topics": len(topics_index),
            "held": len(hold),
            "mc": sum(t["stats"]["mc"] for t in topics_index),
            "long": sum(t["stats"]["long"] for t in topics_index),
            "cards": sum(t["stats"]["cards"] for t in topics_index),
            "blocked": len(blocked),
        },
    }

    # 清掉已暫緩／已刪除課題的殘留資料檔（否則學生仍載入得到舊內容）
    stale = 0
    if os.path.isdir(out_data):
        for fn in os.listdir(out_data):
            if fn.startswith("topic-") and fn.endswith(".js") and fn not in kept_files:
                os.remove(os.path.join(out_data, fn))
                stale += 1
    if stale:
        print("已移除 %d 個暫緩／不再使用課題的資料檔" % stale)
    write_js(os.path.join(out_data, "index.js"), "LEARN_INDEX", index_obj)
    write_js(os.path.join(out_data, "meta.js"), "LEARN_META",
             {"generatedAt": index_obj["generatedAt"],
              "blockedQuestions": sorted(blocked),
              "teacherFieldsRemoved": removed})

    # 題圖（本階段暫無；保留未來使用）
    img_src = os.path.join(BASE, "images", "questions")
    if os.path.isdir(img_src):
        os.makedirs(os.path.join(out, "images", "questions"), exist_ok=True)

    # KaTeX 自托管資源：learn/vendor/katex 若不存在，從每日站的 copy 過來
    # （離線可用，不依賴 CDN；只需做一次，之後可提交入庫）
    vendor_dst = os.path.join(out, "vendor", "katex")
    vendor_src = os.path.join(BASE, "site", "vendor", "katex")
    if not os.path.isdir(vendor_dst) and os.path.isdir(vendor_src):
        shutil.copytree(vendor_src, vendor_dst)
        print("已複製 KaTeX 自托管資源 → %s" % os.path.relpath(vendor_dst, BASE))

    print("輸出目錄：%s" % os.path.relpath(out, BASE))
    print("課題 %d 個 · MC %d 題 · 長題示範 %d 題 · 概念卡 %d 張"
          % (index_obj["counts"]["topics"], index_obj["counts"]["mc"],
             index_obj["counts"]["long"], index_obj["counts"]["cards"]))
    if blocked:
        print("暫緩出站（review 未覆核）：%d 題 → %s" % (len(blocked), ", ".join(sorted(blocked))))
    if hold:
        print("暫緩出站（面板開關）：課題 %s" % ", ".join(sorted(hold)))
    if figures:
        n_card = sum(1 for k in figures if not k.startswith("eph-"))
        print("示意圖（SVG）：概念卡 %d 張 · 題目 %d 題 · 共 %d 幅"
              % (n_card, len(figures) - n_card, sum(len(v) for v in figures.values())))
    print("已剔除教師欄位 %d 個；題解已併入題目 %d 題" % (removed, merged))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
