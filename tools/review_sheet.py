r"""產生「需目視確認」一頁式複核清單（review/review_sheet.html）。

為什麼要有這支工具：
  * 題目轉寫有疑問時，老師最省力的做法是「一次看到所有疑點 + 原圖 + 要回答的那一句話」
  * 分兩類：A 類會影響答案（必須看圖）；B 類只是印刷模糊，但「若讀法錯誤，四個選項會對不上」，
    加上獨立驗算已鎖定唯一答案，通常掃一眼即可

用法：
    python tools/review_sheet.py            # 產生 HTML
    python tools/review_sheet.py --open     # 產生並用瀏覽器開啟
"""
from __future__ import annotations

import argparse
import io
import json
import os
import sys
import webbrowser

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(BASE, "review")
OUT = os.path.join(OUT_DIR, "review_sheet.html")

# 每題「要確認的那一句話」（針對實際疑點，避免老師自己摸索）
ASK = {
    "2025-p2-q27": "選項 A 的 x² + y² − 14x ⬜ 10y − 95 = 0：10y 前面印的是「+」還是「−」？"
                   "（按圓心 (7,5) 應為「−」；若是「+」，列印答案就會不同）",
    "2025-p2-q44": "題幹說「the standard scores of a boy and a girl … are 2 and z」——"
                   "男生的標準分印的是 2 還是 −2？（四個選項都指向 −2；若是 2，則四個選項都不符）",
    "2025-p2-q07": "題幹 4y+1 < 5y−3 ⬜ 8y−9：第二個不等號是 ≤ 還是 <？（現按 ≤，答案 D）",
    "2025-p2-q11": "題幹的連比是否為 (α+2β):(β+2γ):(γ+2α) = 4:9:5，而最後問的是 α:β？（答案 A）",
    "2025-p2-q15": "扇形半徑是否印成 3π cm，周界 12π cm？（答案 D）",
    "2025-p2-q31": "十六進位數是否為 3E 後接 12 個 0（共 14 位，下標 16）？（答案 D）",
    "2025-p2-q37": "命題 I 是否為「3^p, 3^q, 3^r 成等比數列」？（答案 A：只有 I 必然成立）",
    "2025-p2-q42": "題幹是否為「at least 1 manager」（至少一位經理）？（答案 B）",
    "2025-p2-q45": "題幹第一處 m₁（mean）是否只是印刷較淡、確實存在於題目？（答案 D）",
}
# A 類：會影響答案，必須看圖
PRIORITY = ("2025-p2-q27", "2025-p2-q44")

CSS = """
:root{--bg:#f6f7fb;--card:#fff;--line:#dfe3ee;--txt:#1c2338;--dim:#6b7392;--a:#c0392b;--b:#2d6cdf;--ok:#1e8e5a}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--txt);font:15px/1.65 system-ui,"Segoe UI","Microsoft JhengHei",sans-serif}
.wrap{max-width:1180px;margin:0 auto;padding:20px}
h1{font-size:20px;margin:0 0 4px}
h2{font-size:16px;margin:26px 0 10px;padding-bottom:6px;border-bottom:2px solid var(--line)}
.hint{color:var(--dim);font-size:13.5px}
.badge{display:inline-block;font-size:12px;padding:2px 8px;border-radius:999px;border:1px solid var(--line);background:#fff}
.badge.a{color:#fff;background:var(--a);border-color:var(--a)}
.badge.b{color:#fff;background:var(--b);border-color:var(--b)}
.item{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px;margin:12px 0;
      display:grid;grid-template-columns:minmax(240px,1fr) minmax(300px,1.25fr);gap:16px}
@media(max-width:820px){.item{grid-template-columns:1fr}}
.item img{width:100%;border:1px solid var(--line);border-radius:8px;background:#fff;cursor:zoom-in}
.ask{background:#fff7e6;border-left:4px solid #e0a10a;padding:10px 12px;border-radius:8px;margin-bottom:10px}
.cur{font-size:13.5px;color:var(--dim)}
.cur pre{white-space:pre-wrap;word-break:break-word;background:#f3f5fa;border:1px solid var(--line);
         border-radius:8px;padding:8px;margin:6px 0 0;font-size:12.5px}
label{display:block;font-size:13px;color:var(--dim);margin:10px 0 4px}
select,textarea,input{font:inherit;width:100%;padding:7px 9px;border:1px solid var(--line);border-radius:8px;background:#fff}
textarea{min-height:56px}
.bar{position:sticky;bottom:0;background:#ffffffee;backdrop-filter:blur(8px);border-top:1px solid var(--line);
     padding:12px 0;display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:22px}
button{cursor:pointer;font:inherit;padding:9px 15px;border-radius:10px;border:1px solid var(--line);background:#fff}
button.primary{background:var(--b);border-color:var(--b);color:#fff;font-weight:700}
button.ok{background:var(--ok);border-color:var(--ok);color:#fff}
.st{font-size:13px;color:var(--dim)}
#zoom{position:fixed;inset:0;background:#000c;display:none;align-items:center;justify-content:center;cursor:zoom-out;z-index:9}
#zoom img{max-width:96vw;max-height:96vh;border-radius:8px}
"""

JS = """
function zoom(el){
  var z=document.getElementById("zoom");
  if(!z){ z=document.createElement("div"); z.id="zoom";
    var im=document.createElement("img"); z.appendChild(im);
    z.onclick=function(){ z.style.display="none"; }; document.body.appendChild(z); }
  z.querySelector("img").src=el.src; z.style.display="flex";
}
function collect(){
  var out={};
  document.querySelectorAll(".item").forEach(function(it){
    var sel=it.querySelector("select"), note=it.querySelector("textarea");
    out[it.dataset.id]={verdict:sel.value, note:note.value.trim()};
  });
  return out;
}
function markAll(v){
  document.querySelectorAll(".item select").forEach(function(s){ s.value=v; });
}
function copyRes(){
  var js=JSON.stringify(collect(),null,1);
  navigator.clipboard.writeText(js).then(function(){ document.getElementById("st").textContent="已複製 "+Object.keys(collect()).length+" 項結果，貼給 CodeBuddy 即可"; },
    function(){ document.getElementById("box").value=js; });
}
function showRes(){ document.getElementById("box").value=JSON.stringify(collect(),null,1); }
"""


def esc(s) -> str:
    return (str(s if s is not None else "")
            .replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def build() -> tuple[str, int]:
    bank = json.load(open(os.path.join(BASE, "data", "bank.json"), encoding="utf-8-sig"))
    sol = json.load(open(os.path.join(BASE, "data", "solutions.json"), encoding="utf-8-sig"))["solutions"]
    by_id = {q["id"]: q for q in bank["questions"]}

    items: dict[str, dict] = {}
    for qid, e in sol.items():
        if e.get("review"):
            items.setdefault(qid, {"reasons": []})["reasons"].append(e["review"])
    for q in bank["questions"]:
        if q.get("notes"):
            items.setdefault(q["id"], {"reasons": []})["reasons"].append("Gemini 轉寫備註：" + q["notes"])

    order = [i for i in PRIORITY if i in items] + [i for i in sorted(items) if i not in PRIORITY]
    # 已複核過的（data/reviews.json）不再列入待辦
    rev: dict = {}
    rp = os.path.join(BASE, "data", "reviews.json")
    if os.path.exists(rp):
        rev = json.load(open(rp, encoding="utf-8-sig")).get("reviews", {})
    order = [i for i in order if i not in rev]
    confirmed = sorted(rev.items())

    parts = [
        '<!DOCTYPE html><html lang="zh-Hant"><head><meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        "<title>需目視確認清單 · HKDSE Daily Three</title>",
        "<style>" + CSS + "</style></head><body><div class='wrap'>",
        "<h1>需目視確認清單</h1>",
    ]
    if order:
        parts.append(
            "<p class='hint'>待確認 " + str(len(order)) + " 題（已確認 " + str(len(confirmed)) + " 題）。"
            "<span class='badge a'>A</span> 會影響答案或選項，必須看圖；"
            "<span class='badge b'>B</span> 只是印刷模糊的備註——若不照現行讀法，四個選項會互相矛盾，"
            "且獨立驗算已鎖定唯一答案，通常掃一眼確認即可。<br>"
            "看完按最下方「複製結果」貼給 CodeBuddy，我會據此修正或清除旗標（原圖可點擊放大）。</p>"
        )
    else:
        parts.append(
            "<p class='hint'><span class='badge' style='background:#1e8e5a;color:#fff;border-color:#1e8e5a'>"
            "目前沒有待確認項目</span> 下方是已複核的紀錄（來源：data/reviews.json）。</p>"
        )

    for qid in order:
        q = by_id.get(qid, {})
        is_a = qid in PRIORITY
        code = q.get("code") or qid
        reasons = items[qid]["reasons"]
        opts = q.get("options") or {}
        cur = ("stem_latex: " + str((q.get("stem") or {}).get("latex") or "-") + "\n"
               + "stem_text : " + str((q.get("stem") or {}).get("text") or "-") + "\n"
               + "options   : " + " | ".join(f"{L}: {opts.get(L) or '-'}" for L in "ABCD") + "\n"
               + "figure    : " + str(q.get("figure") or "-"))
        parts.append(
            "<article class='item' data-id='" + qid + "'>"
            "<div><img src='../" + esc((q.get("images") or ["images/questions/" + qid + ".png"])[0]) +
            "' alt='" + esc(code) + "' onclick='zoom(this)'>"
            "<div class='hint' style='margin-top:6px'>點圖放大</div></div>"
            "<div>"
            "<div><b>" + esc(code) + "</b> "
            "<span class='badge " + ("a" if is_a else "b") + "'>" + ("A 影響答案" if is_a else "B 印刷備註") + "</span>"
            " <span class='hint'>難度 " + str(q.get("difficulty") or "-") + " · 答案 "
            + esc((sol.get(qid) or {}).get("answer") or "-") + "</span></div>"
            "<div class='ask'><b>要確認：</b>" + esc(ASK.get(qid, "轉寫是否與印刷一致？")) + "</div>"
            "<div class='cur'><b>疑點來源</b><ul>"
            + "".join("<li>" + esc(r) + "</li>" for r in reasons) + "</ul>"
            + "<b>目前轉寫</b><pre>" + esc(cur) + "</pre></div>"
            "<label>判定</label>"
            "<select><option value='ok'>✅ 與印刷一致，照現行處理</option>"
            "<option value='fix'>❌ 需修正（在下方寫正確內容）</option>"
            "<option value='unsure'>❓ 看不清，需要重掃／問 Gemini</option></select>"
            "<label>備註（需修正時填正確內容）</label>"
            "<textarea placeholder='例：選項 A 應為 x² + y² − 14x − 10y − 95 = 0'></textarea>"
            "</div></article>"
        )

    if confirmed:
        parts.append("<h2>已複核紀錄（" + str(len(confirmed)) + "）</h2>"
                     "<table><thead><tr><th>題號</th><th>結果</th><th>備註</th><th>日期</th></tr></thead><tbody>")
        for qid, v in confirmed:
            ok = v.get("verdict") == "ok"
            parts.append(
                "<tr><td class='mono'>" + esc((by_id.get(qid) or {}).get("code") or qid) + "</td>"
                "<td>" + ("✅ 與印刷一致" if ok else "✏️ 已修正轉寫") + "</td>"
                "<td>" + esc(v.get("note") or "") + "</td>"
                "<td class='mono'>" + esc(v.get("at") or "") + "</td></tr>"
            )
        parts.append("</tbody></table>")

    parts.append(
        "<div class='bar'>"
        "<button class='ok' onclick=\"markAll('ok')\">全部標為一致</button>"
        "<button class='primary' onclick='copyRes()'>複製結果</button>"
        "<button onclick='showRes()'>顯示 JSON</button>"
        "<button onclick='window.print()'>列印／存 PDF</button>"
        "<span class='st' id='st'></span></div>"
        "<textarea id='box' style='margin-top:10px' placeholder='按「複製結果」後會出現在這裡'></textarea>"
        "<script>" + JS + "</script></div></body></html>"
    )
    return "".join(parts), len(order), len(confirmed)


def main() -> int:
    ap = argparse.ArgumentParser(description="產生需目視確認清單")
    ap.add_argument("--open", action="store_true", help="產生後用瀏覽器開啟")
    args = ap.parse_args()

    os.makedirs(OUT_DIR, exist_ok=True)
    html, n, done = build()
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"已產生 {os.path.relpath(OUT, BASE)}：待確認 {n} 題、已確認 {done} 題")
    if args.open:
        webbrowser.open("file:///" + OUT.replace("\\", "/"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
