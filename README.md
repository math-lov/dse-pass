# 自學追上站 · DSE Pass

按課題逐課自學：**概念卡 → 長題逐步示範 → MC 每頁 3 題**。題目照原檔（英文）、題解中英對照，
可重做、可重置；進度只存在學生自己的瀏覽器（無計時、不計分、無排名）。

| 項目 | 值 |
|---|---|
| 線上 | `https://math-lov.github.io/dse-pass/`（網站就在 repo 根目錄） |
| Repo | `https://github.com/math-lov/dse-pass` |
| 本機 | `C:\Code Buddy\DSEPass` |
| 現有課題 | **ws01a**（18 MC ＋ 7 條示範）、**ws01b**（27 題 MC）、**ws01c**（卷一 32 題） |
| 規模 | 84 題（MC 45 ＋ 長題 39）· 10 張概念卡 · 84 份題解 |
| 進度 | 只存學生瀏覽器；與「每日三題」站完全分開 |

## 頁面與檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 首頁（課題卡、統計、其他網站跳轉列） |
| `topic.html?t=<topic>&p=N` | 課題頁：概念卡 → 示範頁 → MC 練習頁（多節課題有「第 N 節」分隔） |
| `wrong.html` | 弱點升級庫（答錯的 MC ＋ 學生自己加入的長／短答） |
| `start.html` | 開始之前（使用指南） |
| `quadratic-inequalities.html` | 二次不等式探索器（獨立互動頁） |
| `data/learn/*.json` | ✅ **手改**：`bank`／`concepts`／`solutions`／`lessons`／`figures`／`prompt-templates` |
| `data/*.js` | ❌ 生成檔（下次生成會覆蓋） |
| `tools/make_learn_data.py` | 生成 `data/*.js` ＋ 寫版本戳（**內容 hash**；算 hash 時會剔走 `generatedAt`，所以無改動時 `?v=` 不會亂跳） |
| `tools/learn_check.py` | 結構／契約／雙語／數式規則（I1–I11）→ **必須 0 錯 0 警** |
| `tools/learn_katex_check.js` | 用真 KaTeX 逐條解析所有數學式 |
| `tools/learn_smoke_test.js` | 學生全流程測試（jsdom ＋ 真 KaTeX） |
| `tools/learn_lang_check.py` | 繁體中文（台灣／大陸字形）檢查 |
| `docs/LEARN-ADD-TOPICS-HANDOFF.md` | **加課題的完整交接文件**：現況統計、過渡題做法、頁碼對照、硬規則、可直接貼的開場白 |

## 日常流程

```powershell
cd "C:\Code Buddy\DSEPass"

python -X utf8 tools/make_learn_data.py      # 生成（同時更新三個 HTML 的版本戳）
python -X utf8 tools/learn_check.py          # 0 錯 0 警
python -X utf8 tools/learn_lang_check.py --site

$env:NODE_PATH = "C:\Code Buddy\DSEPass\node_modules"
node tools\learn_katex_check.js              # all LaTeX renders cleanly
node tools\learn_smoke_test.js               # all DSE Pass smoke tests passed

git add -A; git commit -m "…"; git push      # 約 1 分鐘上線
```

## 內容規則（2026-09-28 老師指示，四個站共用）

1. **題目照原檔**（通常全英）；**解說中英齊全**（缺英文 = I1–I7 錯誤，不可發佈）。
2. **數式一律英文** —— `math`／`highlight` 與散文 `$…$` 內不可有中文（「或」寫 `\text{or}`）；中文只在解說。
3. **數式要分行** —— 一行過長要在 `=`／`\Rightarrow` **之前**斷行，運算符留在續行開頭。
4. **不標籤學生** —— 不寫「補底／落後／後進生／基礎較弱」等；改為描述做法。
5. **不可用 Markdown `**`**（前端不 render，會原樣顯示）。

自動防線：`learn_check` 的 **I9**（`**`）、**I10**（數式內中文）＝錯誤；**I11**（單行過長）＝警告；
`learn_smoke_test.js` 亦會掃 `**` 與數式內中文。

## 加課題

見 **`docs/LEARN-ADD-TOPICS-HANDOFF.md`**（先讀它；內有現況、頁碼對照表與硬規則）。
現時 ws01a／ws01b／ws01c 三個課題已完成；下一個課題照該文件的流程加入即可。

## 與其他站的關係（首頁有跳轉列）

| 站 | 網址 |
|---|---|
| 每日三題 Daily 3 | `https://math-lov.github.io/daily.math/` |
| **自學追上站**（本站） | `https://math-lov.github.io/dse-pass/` |
| 5A 數學溫習站 | `https://math-lov.github.io/s5a-maths/` |
| Endeavour 研習站 | `https://math-lov.github.io/endeavour/` |

⚠️ **不要連去 `daily.math/learn/`** —— 該站計劃砍掉重做（連 deploy workflow 的 assemble 步驟一齊拆）。
