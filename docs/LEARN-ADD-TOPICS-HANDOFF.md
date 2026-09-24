# 自學追上站 · 新增課題交接文件

> **用途**：帶這份文件到**新的 chat**，繼續做 WS07 之後的課題（或 AS 評估）。
> ws01–ws06 的內容已完成並上線，結構已獲老師確認「很好很滿意」→
> **不要改結構，照下面既有的 pattern 加內容就好。**
>
> 最後更新：2026-09-19 · 狀態：**已 push 並上線**（`main` ＝ `origin/main`）——
> WS06（**函數與圖像 · 一課兩節**，17 MC ＋ 4 示範 ＋ 6 概念卡）＋ 7 幅拋物線示意圖
> （新增 `Frame.curve()`／`Frame.vline()`），全部檢查綠燈
> （`learn_check` 0 錯誤 0 警告／`learn_figure_check` 49 幅合格／`learn_katex_check`／`learn_smoke_test`／`learn_panel_test`）。
> 之前兩輪：WS05＋題目字眼（`9e31015`）、ws01–ws04 內容（`b580877`）。

---

## 0. 30 秒現況

| 項目 | 數字 |
|---|---|
| 已完成課題 | ws01（**兩節**）、ws02、ws03、ws04、ws05a（**兩節**）、ws05b、**ws06（兩節）** |
| MC 練習 | 127 題 |
| 長題示範 | 23 題（ws05a 5、ws05b 4、ws06 4；同一節 ≥4 條會收成一頁） |
| 概念卡 | 42 張（ws06 的「配方法」「最大／最小值」是獨立兩張） |
| SVG 示意圖 | 49 幅（31 個 id；ws04 25 個／**ws06 6 個**） |
| 題解 | 150 份（每題一份） |
| 自編過渡題 | **26 題**（ws01 ×2 暖身、ws02 ×4、ws03 ×4、ws04 ×4、ws05a ×4、ws05b ×4、**ws06 ×4**） |
| 題目字眼（每課一組） | **7 課**各自 5–6 組，全部為該課而設（見 §3.4） |

**各課頁數**（＝ 1 個學習頁 ＋ 長題示範 ＋ 練習頁）

| 課 | 節 | 學習 | 示範頁 | 練習頁 | MC | 總頁數 |
|---|---|---|---|---|---|---|
| ws01 | ws01-1 基礎三招 | 1 | 0 | 3 | 9 | **4** |
| ws01 | ws01-2 進階 | 1 | 2 | 4 | 11 | **7** |
| ws02 | ws02-1 | 1 | 2 | 6 | 18 | **9** |
| ws03 | ws03-1 | 1 | 3 | 8 | 22 | **12** |
| ws04 | ws04-1 | 1 | 3 | 6 | 16 | **10** |
| ws05a | ws05a-1 三種解法與應用題 | 1 | 2 | 3 | 9 | **6** |
| ws05a | ws05a-2 判別式與根的性質 | 1 | 3 | 3 | 8 | **7** |
| ws05b | ws05b-1 複數 | 1 | 4 條 → **1 頁** | 6 | 17 | **8** |
| ws06 | ws06-1 函數記號與二次函數圖像 | 1 | 2 | 3 | 9 | **6** |
| ws06 | ws06-2 配方法、頂點與最大最小值 | 1 | 2 | 3 | 8 | **6** |

* 「示範頁」＝ 學生按分頁列的那一格。**同一節 ≥4 條示範會自動收成一頁**（用「下一條」切換），
  2–3 條仍是一條一頁；所以 ws05b 的 4 條示範在分頁列只佔 1 格，而 ws05a／ws06 各節只有 2–3 條 → 一條一頁。
* 網址：`https://math-lov.github.io/daily.math/learn/`（現時線上已是 ws01–ws06 版：7 個課題）
* 每日三題站（`site/`、`data/bank.json`、`data/solutions.json`）**與自學站完全分開**，這一輪沒有動它。

---

## 1. 新 chat 開場先讀這幾份（依序）

1. **`learn/README.md`** —— 自學站的資料流、檢查器、面板、硬規則（契約層）
2. **本文件** —— 現況、pattern、頁碼對照、**審閱常客錯誤（§5.2）**、踩過的坑
3. **`WORKBUDDY-DAILY.md`** 的「每次新增課題」與「本機維護平台（面板）」兩節 —— 抽取與面板流程
4. `data/learn/lessons.json` —— 課程編排（各課題的 `cmdHints` 也在這裡）
5. `data/learn/{bank,solutions,concepts}.json` —— **以 ws04（有圖）／ws05a、ws05b、ws06（最新，含拋物線圖）做範本**
6. `tools/make_learn_figures.py` —— SVG 圖產生器（`Frame`、`point`、`seg`、`arrow`、`arc`、`mirror_h/v`、**`curve`、`vline`**…）
7. `tools/learn_smoke_test.js` —— **硬編碼頁碼與課題數在這裡**（見 §6）
8. `data/learn/raw/` —— 來源抽取（**WS01–WS06、ASS1 已抽好**；下一份要抽的是 WS07，見 §3.0）

---

## 2. 一課的固定節奏（不要改）

```
① 概念卡（2–6 張）→ ② 長題示範（0–3 題；≥4 條自動收成一頁）→ ③ MC 每頁 3 題
```

* 一堂課如果**概念卡 ≥ 7 張**或 **MC ≥ 18 題** → **拆成兩節**（範本：`ws01-1` 基礎 / `ws01-2` 進階）。
  〔有時按節奏直接指定拆節：`ws05a` 只有 6 卡／17 MC（未達門檻），仍按老師要求拆成
  「第一節 三種解法與應用題（c1–c4＋EX1/EX3）／第二節 判別式與根的性質（c5–c6＋EX2/EX4/EX5）」；
  `ws06` 同理（6 卡／17 MC）：第一節「函數記號與二次函數圖像」（c1–c4＋EX1/EX2＋w01–w03、q01–q06）、
  第二節「配方法、頂點與最大最小值」（c5–c6＋EX3/EX4＋w04、q07–q13）〕
* 如果一份工作紙的概念跨度太大（例：WS05 一元二次方程 vs 複數）→ **拆成兩個課題**
  （`ws05a`／`ws05b`，各有自己的 `cmdHints`、過渡題與示範）。前端 `belongsTo()` 認得小寫尾碼，
  弱點升級庫也會自動分成兩組。
* ⚠️ 拆節的代價：每節的示範若少於 4 條就不會收成一頁 → 分頁列變長（ws05a 由 8 格變 13 格）。
  拆完記得同步改 `learn_smoke_test.js` 的頁數、分節標籤數與 `p=` 索引（見 §6）。
* 多節課題的分頁列會**自動**顯示「第 N 節」分隔，題目列自動顯示「第 2 節 · 第 3 / 11 頁」
  （`learn/assets/app.js` 已處理，**不用**在資料層設定任何東西）。
* MC 盡量每頁 3 題；除不盡才用 2 題（如 ws03 最後兩頁、ws04 最後兩頁、ws05a 最後一頁、**ws06 每節最後一頁**）。
* 練習頁順序＝**過渡題在最前**（見 §4）。
* 示範由淺入深：**銜接示範排第一**（弱生先做得到，再上真題）。

---

## 3. 新增一課的步驟（照抄）

### 3.0 抽取來源（**WS05 起的第一步，不可跳過**）

`inbox_learn/` 只有 docx，不能直接讀；先抽成 JSON 草稿：

```powershell
cd "C:\Code Buddy\HKDSE"
$py = "C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"

& $py tools\extract_eph.py --files WS06        # → data/learn/raw/WS06.json + WS06-sol.json
& $py tools\wmf_to_png.py --dir data\learn\raw\media --recursive   # 內的公式圖轉 PNG（讀圖轉寫要用）
& $py tools\eph_digest.py --files WS06 --variant both             # → raw/digest/WS06{,‑sol}.md（可讀摘要）
```

* 已抽好的：`WS01–WS06`、`ASS1`；**WS07 之後全部要先抽**。
* `data/learn/raw/` 是**草稿層、禁止手改**（改了就重抽）。
* ★ **官方評分參考就在 `WS0X-sol.json` 的表格儲存格裡**，例如
  `… = (4c – 1)^{2}  (1A)`、`… (1M: Use the result of (a).)`、`(4 marks)`。
  **長題 `parts[].marks` 一律照它抄**（見 §5.2 第 2 點，這是曾出錯的地方）。
* `raw/digest/*.md` 是最省時間的閱讀入口；`raw/_index.json` 有每份檔的品質統計
  （`blocks`／`images`／`embedFig`… 可看出哪幾段是圖片公式、要人工轉寫）。

### 3.1 題目 → `data/learn/bank.json`

```jsonc
{
 "id": "eph-ws06-q01",              // ⚠️ 必須 eph-<topic>-…（見 §5.1 第 5 條）
 "type": "mc",                       // mc 或 long
 "topic": "ws06",
 "unit": 0,                          // 見 WORKBUDDY-DAILY.md §4d 單元表
 "subtopic": "factorization",
 "difficulty": 1,                    // 1–3
 "code": "WS6-Q01",                  // 學生看到的編號
 "source": "EPH WS06 Q1 · [HKDSE 20xx Paper 2 Qn]",   // 自編題要寫「（自編）」
 "stem": { "text": "English wording, inline maths in $...$" },
 "options": { "A": "$...$", "B": "...", "C": "...", "D": "..." },
 "review": null                      // 非 null 的題目**不會出站**
}
```

`long` 題沒有 `options`，改用 `parts`（＋總分 `marks`）：

```jsonc
"parts": [ { "label": "(a)", "text": "$...$", "marks": 1 },
           { "label": "(b)", "text": "$...$", "marks": 3 } ],
"marks": 4,                          // ⚠️ 必須＝parts 分數加總（S2 會擋）
```

### 3.2 題解 → `data/learn/solutions.json`（key ＝ 題目 id）

```jsonc
"eph-ws06-q01": {
 "answer": "C",                      // mc 必填；long 為 null
 "verify": "checked",
 "topic": "ws06",
 "source": "…（與 bank 一致）",
 "solution": {
  "steps": [{
    "title": { "zh": "第 1 步 · …", "en": "Step 1 · …" },   // title 可含 $...$
    "math": "3a=7-2b",                                      // 該步顯示公式（無 $）
    "zh": "中文詳解，≥10 字，要解釋『為什麼』",              // ⚠️ 檢查器會擋太短的
    "en": "English one-liner",
    "marking": "(1A)",                                     // 選填：DSE 步驟分（照官方抄）
    "highlight": ["a=\\frac{7-2b}{3}"],                    // 選填：答案高亮 chips（KaTeX 欄位）
    "link": {                                              // 選填：(a)→(b)「整塊打包替換」
      "from": "(a)",
      "label": "認出 (a) 的整塊，加括號",                   // 選填，預設「用 (a) 的答案」
      "math": "-\\big(16c^{2}-8c+1\\big)"
    }
  }],
  "traps": [{ "opt": "B", "zh": "…", "en": "…" }],          // 指向真實干擾選項，不可指正確答案
  "tip": { "zh": "帶得走的技巧", "en": "…" },
  "alt": [{ "name": {"zh":"坐標法"}, "zh": "…" }]           // 選填：超出必修範圍的進階解法（摺疊顯示）
 }
}
```

**長題的步驟分要能加起來等於該部分的分數**。範例（EX2，官方＝(a) 1A、(b) 1M+1M+1A）：
`step1 (1A)` → `step2 無` → `step3 (1M: Use the result of (a).)` → `step4 (1M) (1A)`。
一步要拿兩分就寫成 `"(1M + 1A)"`（`markSum` 會加起來）。

`traps` 的兩種用法：

* **MC**：`{ "opt": "B", "zh": "…" }` —— `opt` 必須是真的選項，而且不可指向正確答案（`learn_check` S4 會擋）。
* **長題示範**：長題沒有選項，所以改用**自由標籤 `label`**：`{ "label": "漏平方係數", "zh": "…" }`。
  前端會在「看完示範」之後，用琥珀色列出（不是「你答錯」的紅色，因為學生未作答）。

### 3.3 概念卡 → `data/learn/concepts.json`

```jsonc
{
 "id": "ws06-c1", "topic": "ws06",
 "title": { "zh": "…", "en": "…" },
 "body": { "zh": "正文…\n{{math:0}}\n{{math:1}} 可插在文字中間（不寫標記＝全部排在正文最後）" },
 "math": ["a^{2}-b^{2}\\equiv(a+b)(a-b)", "…"],   // 純 LaTeX，不加 $
 "vocab": [{ "en": "difference of two squares", "zh": "平方差" }],
 "warn": { "zh": "常見錯誤（顯示成橙框）" }
}
```

* **`{{math:N}}` 數量要等於 `math` 陣列長度**（否則 `learn_check` S7 出警告）。
* vocab 的中文欄**不可以**以英文字開頭（S8 會擋）—— 這是「english 中文」被空格拆裂的徵狀；
  用面板輸入時格式是 **`english = 中文`**（等號分隔，見 §7）。
* 概念卡內容用「方法一／二／三」編號，並在最後一張放「流程與常見錯誤」總覽。

### 3.4 編排 → `data/learn/lessons.json`（含這一課的「題目字眼」）

```jsonc
{ "id": "ws06", "stage": 1, "unit": 0, "subtopic": "…",
  "source": "EPH All-Round L5 · Worksheet 6",
  "name": { "zh": "…", "en": "…" },
  "intro": { "zh": "…" },
  "cmdHints": [                                   // ★ 這一課自己的「題目字眼」（見下方規則）
    { "en": "the graph opens upwards / downwards", "zh": "圖像開口方向（$a>0$ 向上、$a<0$ 向下）" },
    { "en": "the coordinates of the vertex",       "zh": "頂點 $(h,\\ k)$（配方後括號外那個數就是 $k$）" }
  ],
  "lessons": [{
    "id": "ws06-1", "title": { "zh": "…", "en": "…" },
    "conceptCards": ["ws06-c1", "ws06-c2"],
    "longQuestionIds": ["eph-ws06-ex01"],
    "mcPages": [["eph-ws06-w01","eph-ws06-w02","eph-ws06-w03"], ["eph-ws06-q01","eph-ws06-q02","eph-ws06-q03"]]
  }]
}
```

**`cmdHints` = 每頁最頂常駐那條「題目字眼」提示列**（學生做之前先看，減少「睇錯題目」的失分）。
`en` 與 `zh` 都可以含 `$...$`（前端會用 KaTeX 行內渲染）。

規則（**每課要為該課而設，唔可以每課都一樣**）：

| 規則 | 內容 |
|---|---|
| 數量 | **4–6 組**（少於 2 或超過 8 面板會擋；前端用 `flex-wrap` 換行） |
| 為該課而設 | 每課**至少 3 組是這一課獨有**（其他課沒有） |
| 可以重疊 | 任兩課**最多重覆 2 組**（例如 ws01 與 ws05b 都有 `Hence`，可以） |
| 不可照抄 | 不可以與另一課**整組完全相同**（面板儲存時會擋） |
| 留空 | 整個清空＝前端退回通用那組（Factorize completely／Hence／Show that／Write down），**不建議** |
| 出處 | 先掃該課全部題目（stem／parts／options）挑真正出現過的字眼，不要憑空作 |

`learn_smoke_test.js` 已鎖上表 1–4 條（見 §6.2）；面板課題編輯器可直接改（見 §7）。

### 3.5 圖（如需要）→ `tools/make_learn_figures.py`

```python
"eph-ws06-q01": [(my_fig_fn, "圖的說明（caption，顯示在圖下面）")],

# 長題示範要「逐步出圖」：第三個元素＝題解第幾步（1 起算）
"eph-ws06-ex01": [(fn_step1, "第 1 步：…", 1), (fn_step2, "第 2 步：…", 2)],
```

* 長題的圖**一定要標 `step`**（`learn_check` S9 會驗：必須存在、且落在 1..題解步數內）。
  現有 11 幅為範本（EX1 3 幅、EX2 4 幅、EX3 4 幅）。
* **純代數課題不需要圖**（ws05a 一元二次方程、ws05b 複數都沒有出圖）——「如需要」才加。
* 圖形慣例：**實心點＝原本**、**空心點＝影像**、虛線＝輔助線／路徑、粗線＝鏡軸、弧形箭嘴＝旋轉方向。
* 畫完**一定**要跑 `learn_figure_check.py`（自動驗標籤出界／互疊／壓點；通常要調幾次 `dx/dy`）。
* 用 `_du(f, px)` 把像素偏移換成資料單位；`_right_angle()` 可畫直角標記；`f.arc(r, a1, a2, "90°")` 畫旋轉弧。
* **函數／圖像課（`ws06` 是範本）**：`Frame.curve(fn, x1, x2)` 畫 $y=fn(x)$ 的曲線、`Frame.vline(x)` 畫對稱軸虛線。
  畫布是**等比例正方格**，所以要自己挑一個窄一點的 $x$ 區間，令曲線的 $y$ 值留在畫布內。
  ⚠️ SVG 文字裡的 `<` 一定要寫成 `&lt;`（直接用 `<` 會令 `learn_figure_check` 爆 XML ParseError）。
  純代數概念卡（ws06-c1 函數記號、c5 配方法）**不需要**圖；ws06 的 4 條長題亦沒有圖（示範題解答只出文字）。
* **MC 題的圖在「作答後」才出**（防劇透），所以圖放 `figures.json`，不要寫進題幹。

### 3.6 跑檢查

```powershell
cd "C:\Code Buddy\HKDSE"
$py   = "C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"
$node = "C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe"

& $py   tools\make_learn_figures.py     # 有加圖才需要
& $py   tools\make_learn_data.py        # data/learn/*.json → learn/data/*.js
& $py   tools\learn_check.py            # 結構／契約／覆核旗標／度制／禁坐標向量／vocab／parts 分數 → 0 錯誤
& $py   tools\learn_figure_check.py     # 圖形自動體檢
& $node tools\learn_katex_check.js      # 真 KaTeX 逐條解析所有數學式
& $node tools\learn_smoke_test.js       # 學生全流程（必須 all passed）
```

改了面板／編輯器才需要：`& $py tools\learn_panel_test.py`
（它會自己起測試面板、改資料、**最後還原並比對檔案**；編輯器前端 42 項 jsdom 斷言都在裡面）。

### 3.7 發佈

雙擊 `start-learn-panel.bat` → **發佈** 分頁 → 「重新生成 + 檢查」→「一鍵發佈」（＝上面幾步 + commit + push）。
或手動：`git add -A; git commit -m "Learn: add WS06"; git push`（GitHub Pages 約 1 分鐘部署；
**更新已存在的檔案**可能受 CDN 快取影響最多 10 分鐘，用無痕／Ctrl+F5 即時看到）。

---

## 4. 「過渡題（Bridging）」已成為本專案的標準做法

**目的**：弱生一開始就撞上 DSE 真題難度 → 放棄。所以在每個課題的**第一個練習頁**放 4 題極簡階梯題。

| 規格 | 內容 |
|---|---|
| 數量 | 4 題（ws01 是 2 題暖身） |
| 難度 | 全部 `difficulty: 1`（少數 2），Level 1 → Level 4 由淺入深 |
| 題解 | 2–4 步；`traps` ≥ 2 個（指向真實干擾項）；一定有 `tip` |
| 圖 | ws04 起每題配一幅「單一動作」圖（ws05a／ws05b 純代數，不出圖） |
| 放置 | `mcPages` 最前面（通常第 1 頁放 3 題、第 2 頁放 1 題＋真題 2 題） |

**命名（已統一，勿改）**

| 欄位 | 值 |
|---|---|
| `id` | `eph-wsNN-w01` … `eph-wsNN-w04` |
| `code` | `WSNN-W01` … |
| `source` | `WSNN 過渡題（自編）· Level N <主題>` |
| `subtopic` | 與該課題一致 |

**⚠️ 自編題必須在 `source` 標明「（自編）」** —— 不可假稱出自 EPH／HKDSE（House rule 2）。

**已完成的 26 題**

| 課題 | 過渡題 | 覆蓋的斷層 |
|---|---|---|
| ws01 | `eph-ws01-w01` $3x^2-6x$、`-w02` $x^2-16$ | 提公因式、平方差（起步） |
| ws02 | `-w01` 加減消去（相反數）、`-w02` 代入法整塊代入、`-w03` 只乘一條方程、`-w04` 文字題設式 | 消去／代入／列式 |
| ws03 | `-w01` 兩步換主項、`-w02` 目標在兩側抽公因式、`-w03` 比較係數、`-w04` 代特殊值 | 移項／抽因式／≡ |
| ws04 | `-w01` 平移、`-w02` 對軸反射、`-w03` 逆 90°、`-w04` 180° | 四種單一變換 |
| ws05a | `-w01` 提公因式解方程、`-w02` 兩邊有 $x$ 不可約、`-w03` 開平方、`-w04` 判別式 | 因式分解 → 判別式 |
| ws05b | `-w01` $i^2=-1$、`-w02` $i$ 的冪、`-w03` 加減法、`-w04` 實部／虛部 | 虛數單位 / 化簡 |
| ws06 | `-w01` 函數求值、`-w02` 代入式 $f(2x)$、`-w03` $y$ 截距、`-w04` 配方法 | 函數記號 → 圖像特徵 → 配方 |

`learn_smoke_test.js` 已鎖：**ws02–ws06 的第一個練習頁必須全部是 `-w0\d` 題**
（新增課題時請照樣加同款斷言，見 §6.3）。

---

## 5. 硬規則

### 5.1 不可違反（違反會被閘門擋，或被前端靜靜弄壞）

1. **角度一律用「度」**，禁弧度（`rad`、`\frac{\pi}{3}`…）。`learn_check` R1 會擋。
2. **幾何題主解法不得用坐標／向量**；例外單元：`unit ∈ {2, 8, 9, 10, 12, 13}`（本身是坐標幾何課）。
   進階解法放 `solution.alt`（學生端摺疊顯示）。
3. **題目只英文**（stem／options／parts）；**解答 zh 必填且 ≥10 字**（S3）。
4. **文字欄位不可有裸 `$`**（貨幣寫 `\$53`）。S6 會擋。
5. **`id` 必須 `eph-<topic>-…`**（前端 `belongsTo()` 只認這個 regex）。
   用 `bridge-ws02-q01` 之類 → **進度環、弱點升級庫分組、孤兒題檢查全部失效**。
6. **選項寫法統一**：數學用 `"$2$"`、金錢用 `"\\$24"`；不要裸字串（`"2"`）。
7. **前端不支援 Markdown**：`**粗體**` 會原樣顯示 `**`。要強調就用中文標點或句子結構（本專案一律用「」）。
   `learn_smoke_test.js` 現已掃描所有課題資料，出現 `**` 就 FAIL（ws03／ws04 曾有 28 處，已清）。
8. **生成檔不可手改**：`learn/data/*.js`、`data/learn/figures.json`（下次生成會覆蓋）。
   要改內容一律改 `data/learn/*.json`。
9. **`highlight`／`math` 是 KaTeX 欄位**：不要放中文長句、金額、Markdown。
10. **`review` 非 null 的題目不會出站**（`make_learn_data.py` 剔除、`learn_check` 報錯）。
11. **長題 `parts[].marks` 加總必須＝`marks`**（S2 錯誤），而且 `steps[].marking` 要與
    官方評分參考一致（`raw/WS0X-sol.json` 有原文）。
12. **代數語境一律「公因式」**（S10 警告）；只有純數字的 H.C.F. 才叫「公因數」。
13. **每課的 `cmdHints`（題目字眼）要為該課而設**：4–6 組、至少 3 組獨有、
    任兩課最多重覆 2 組、不可整組照抄別課（§3.4；smoke 與面板都會擋）。

### 5.2 ★ 三輪審閱最常挑出的 10 類問題（開工前先掃一次，可省一輪來回）

| # | 問題 | 具體案例／做法 |
|---|---|---|
| 1 | **id 前綴寫錯** | 曾用 `bridge-ws02-q01` → 前端認不出課題。一律 `eph-wsNN-…` |
| 2 | **長題分數對不上** | WS1-EX1 總分 3 但 parts 1+1；EX2 總分 4 但 1+1。照官方 marking 抄：EX1＝(a)1A、(b)1M+1A；EX2＝(a)1A、(b)1M+1M+1A。**步驟分要逐題加起來＝`marks`**；`learn_smoke_test.js` 已對全部 23 個示範把關（`markSum`）。ws03／ws04 曾有多題少一分，已照 `raw/digest/WS03-sol.md`／`WS04-sol.md` 修好 |
| 3 | **術語不一致** | 只改了 3 處「公因數」，實際有 24 處（q01–q04、q08、q15、c3、c7、多個 tip） |
| 4 | **選項格式混用** | 統一 `"$…$"`（數學）／`"\\$…"`（金錢）。註：純數字字串其實也會經 KaTeX 渲染，但格式仍要一致 |
| 5 | **自編題沒標來源** | 一律寫「WS0N 過渡題（自編）· Level N …」 |
| 6 | **數值設計錯（最嚴重）** | 曾有一題：2 杯奶茶＋1 蛋撻＝\$40、1 杯＝3 蛋撻 → $7y=40$，**四個選項全部錯**。出題後一定要驗算「至少要有一個選項是對的」 |
| 7 | **解說自相矛盾／教錯** | 曾寫「代 x=3 求 A」——$x=3$ 令 $A(x-3)$ 消失，永遠求不到 $A$；也曾出現「$7y=40\Rightarrow y=8$」。寫完要自己順一次算式 |
| 8 | **KaTeX 欄位放錯東西** | `highlight` 放了金額 `\$24`／Markdown `**粗體**`（前端不支援，會原樣顯示） |
| 9 | **課程合規** | 角度用度；幾何題主解法不用坐標／向量（例外見 §5.1 第 2 條） |
| 10 | **題目字眼照抄別課** | 每課都是同一組 `Factorize completely／Hence／Show that／Write down` → 換了課題卻沒有換字眼，提示列等於冇用。要掃該課題目挑該課的字眼（§3.4） |

> 這 10 類現在大部份已有自動防線（S2／S8／S10／S9／smoke 斷言／面板驗證），
> 但**第 6、7 類仍要靠人手驗算**。

---

## 6. ⚠️ 改動課題數／頁數時，一定要同步改 smoke test

`tools/learn_smoke_test.js` 內**硬編碼**了課題數、頁數與頁碼，改 `lessons.json` 後一定要更新。

### 6.1 目前的頁碼對照表

| 課題 | 總頁數 | 結構 | smoke test 內引用的 `p=` |
|---|---|---|---|
| ws01 | **11** | 0 學習① · 1–3 練習① · 4 學習② · 5 示範 EX1 · 6 示範 EX2 · 7–10 練習② | `p=0`（卡片）、`p=1`（練習①，暖身）、`p=4`（學習②）、`p=5`（EX1 示範） |
| ws02 | **9** | 0 學習 · 1–2 示範 · 3–8 練習（6 頁） | `p=0`、`p=3`（過渡題頁）、`p=4`（第 2 練習頁）、`p=5`（q03）、`p=8`（q13 貨幣） |
| ws03 | **12** | 0 學習 · 1–3 示範 · 4–11 練習（8 頁） | `p=0`、`p=4`（過渡題頁） |
| ws04 | **10** | 0 學習 · 1–3 示範 · 4–9 練習（6 頁） | `p=0`、`p=4`（過渡題頁）、`p=6`（q03/q04/q05 出圖）、`p=1/2/3`（EX1–3 逐步出圖） |
| ws05a-1 | **6** | 0 學習（4 卡）· 1–2 示範（EX1、EX3 各一頁）· 3–5 練習（3 頁，9 題） | `p=0`（卡片）、`p=1`（EX1 示範）、`p=2`（EX3 示範）、`p=3`（過渡題頁） |
| ws05a-2 | **7** | 6 學習（2 卡）· 7–9 示範（EX2、EX4、EX5 各一頁）· 10–12 練習（3 頁，8 題） | `p=6`（卡片）、`p=8`（EX4）、`p=9`（EX5） |
| ws05b | **8** | 0 學習 · **1 示範頁（4 條）** · 2–7 練習（6 頁） | `p=0`（卡片）、`p=1`（示範頁）、`p=2`（過渡題頁、實際作答 w02） |
| ws06-1 | **6** | 0 學習（4 卡）· 1–2 示範（EX1、EX2 各一頁）· 3–5 練習（3 頁，9 題） | `p=0`（卡片）、`p=1`（EX1 示範）、`p=3`（過渡題頁）、`p=5`（q04–q06，出圖） |
| ws06-2 | **6** | 6 學習（2 卡）· 7–8 示範（EX3、EX4 各一頁）· 9–11 練習（3 頁，8 題） | `p=8`（EX4 示範）、`p=11`（q12、q13 兩題頁） |

要改的地方（搜尋 `pagenav .pg").length ===` 與 `?t=ws0X&p=`）：

```js
ok(t02.$$("#pagenav .pg").length === 9,  "ws02 = 1 card page + 2 demos + 6 MC pages …");
ok(t03.$$("#pagenav .pg").length === 12, "ws03 = 1 card page + 3 demos + 8 MC pages …");
ok(t04.$$("#pagenav .pg").length === 10, "ws04 = 1 card page + 3 demos + 6 MC pages …");
ok(t05.$$("#pagenav .pg").length === 13, "ws05a = two lessons (1+2+3 and 1+3+3 pages) …");
ok(t06.$$("#pagenav .pg").length === 7,  "ws05b = 1 card page + 1 demo page (4 demos) + 5 MC pages …");
ok(t07.$$("#pagenav .pg").length === 12, "ws06 = two lessons (1+2+3 and 1+2+3 pages) …");
```

### 6.2 其他「題數／張數／課題數」斷言

* **`ok(home.$$(".topic-btn").length === 7, "home lists all seven topics …")`** ←
  **再加課題就要同步改這個數**（現時 7：ws01、ws02、ws03、ws04、ws05a、ws05b、ws06）。
* ws04 概念卡圖數（6 張卡 / 7 幅）：`"ws04 shows 7 figures: card 1 has two"`。
* **ws06（圖像課）**：第一節概念卡要出圖（3 張卡共 4 幅 —— 開口方向那張卡有兩幅）、
  圖要是真曲線（`svg polyline`）、讀圖題（q06／q13）作答後才出圖（測到 `(0, 0, 1)`）、
  以及「這課要有配方法／頂點／判別式／讀圖各一題」的內容覆蓋斷言。
* MC 出圖頁（`p=6`）斷言 `(1, 1, 2)`：兩步題（q05）出 2 幅圖。
* **有圖的課題，每題都要有圖**：每個課題頁都斷言「作答前 0 幅圖、作答後每題都有圖」。
* 純數字選項必須經 KaTeX 渲染（`plain numeric options still go through KaTeX`）。
* **每課的「題目字眼」規則（§3.4）**：七課的 chips 要 ① 每課 4–6 個、② 每課至少 3 個獨有、
  ③ 任兩課最多重覆 2 個、④ 不可有兩課完全相同；另加「提示列經 KaTeX、無裸 `$`」
  （`hintWords` / `ownWords` / `pairShared` / `twinSets` 那幾條）。
* 【現已修好，不要再改回去】學習頁（卡片頁）換卡時 `body.innerHTML` 會被清空 →
  `renderCards()` 要在 `draw()` 內重新 `appendCommandHints()`，否則提示列會消失。
* **全站資料體檢（三個跨課題斷言，加內容後會自動把關）**：
  ① 每個示範的步驟分加起來＝該題 `marks`（23 個示範；`markSum`）；
  ② 沒有任何長題題幹以逗號結尾（「未完成的句子」）；
  ③ 整份課題資料不含 `**`（前端不支援 Markdown）。
* **多節課題**（ws01、ws05a、ws06）另有三類斷言：① `#pagenav .pg-lesson` 的數量與文字（「第 1 節」「第 2 節」）；
  ② 每節的練習頁形狀，例如 ws05a／ws06 都是 `[[3,3,3],[3,3,2]]`；③ 每條示範都有自己的分頁格
  （該節示範 <4 條時不會收成一頁）。
* 一頁多條示範的切換器（`示範 1 / 4`、上一條／下一條、橫幅「下一條示範」）現在由 **ws05b** 把關
  （ws05a／ws06 每節只有 2–3 條）。改動那部分時記得別把這些斷言一起刪掉。

### 6.3 新增一課（WS07）時要加的斷言（照 **ws06** 那段抄 —— 它是最新的範本）

1. 首頁課題數：`=== 7` → **`=== 8`**
2. `const t08 = boot("topic.html", "?t=ws07&p=0")` →
   課題名渲染、`#pagenav .pg` 頁數、概念卡有公式、分節標籤（如該課分兩節）
3. 過渡題頁：第一個練習頁 `card[data-qid]` 全部符合 `/-w0\d$/`、`opt.length === 12`
4. 兩節的 `cards` / `long` / `pages` 分配（`payload.lessons[i]…`）＋ 頁形（如 `[[3,3,3],[3,3,2]]`）
5. 有圖的話：概念卡逐張出圖（`while` 按「下一張」那個 loop）、作答前 0 幅、作答後每題至少 1 幅
   （＋長題逐步出圖；純代數卡不需要圖）
6. 專屬「題目字眼」：把 `"ws07"` 加進 §6.2 那個 `["ws01", …, "ws06"]` 清單，
   再補一條「ws07 有它自己的字眼」
7. 有示範多過 3 條就要斷言「收成一頁」（`示範 1 / N`）＋「最後一條係銜接示範」
8. 每個長題示範都要斷言「步驟分加起來＝該題 `marks`」（`markSum` 那條，見 §5.2 第 2 點）
9. 前言頁／求助連結等「全站性」斷言不用重複加

---

## 7. 前端已有功能（不要重複做，也不要弄壞）

| 功能 | 位置 | 說明 |
|---|---|---|
| 常駐「題目字眼」提示 | `.cmd-hints`（app.js `appendCommandHints`／`cmdHints()`） | **每一課不同**（讀 `lessons.json` 的 `cmdHints`，每頁最頂；未提供才用通用那組）。`en`／`zh` 都支援 `$...$` |
| 同課示範收成一頁 | `.demo-nav`／`.demo-count`（app.js `renderDemoSet`） | 同一課 **≥4 條**示範收成一頁用「下一條」切換（分頁列才不會被塞爆）；2–3 條仍是一條一頁 |
| 完成一頁的微成就 | `#page-done`（`refreshPageDone`） | 完成該頁 → 「✓ 這一頁 3 題完成了　本課完成 X%」 |
| 答錯的重新框架 | `.trap-head`、`.answer-line.miss` | 「差一點 —— 掉進了出卷人的陷阱」＋仍然顯示正確答案 |
| 心理安全卡 | `.safety-note`（index.html） | 「這裡沒有老師打分，也沒有排名…」＋通往 `start.html` 的按鈕 |
| **前言／使用指南** | `learn/start.html`（純靜態，不載入 app.js） | 顏色框（`.pre-block` / `.pre-ok` / `.pre-go` / `.pre-help`）＋編號徽章 `.pre-step`；含可複製的 AI 提問範本（`#prompt-text`、`#copy-prompt`）。**不要**把它做成學習卡（會干擾進度計算） |
| 練習頁求助連結 | `.help-link`（app.js） | 每個練習頁底部連去 `start.html` |
| 弱點升級庫 | `wrong.html` | **前稱「錯題本」**，全站已改名 |
| 多節課題分節標籤 | `.pagenav .pg-lesson` | 自動插入「第 N 節」；題目列顯示「第 N 節 · 第 X / Y 頁」 |
| ⚠️「完成」標記 | app.js `navPageBtn()` | **一定要用 `.pg` 清單索引**，不可用 `nav.children[i]`（分節標籤會令索引錯位） |
| 長題示範逐步出圖 | `figures.json` 的 `step` | 圖跟題解第 N 步出場（`renderLong` 內 `drawStep`） |
| 長題示範「常見錯誤」 | `.traps.long-traps`（app.js `appendLongTraps`） | 看完所有步驟後列出 `solution.traps`；長題用 `label`（不是 MC 的 `opt`）；琥珀色＝「做完後檢查自己有沒有踩中」，不是「你答錯」 |
| (a)→(b) 打包替換高亮 | `solution.steps[].link` | 橙色「用 (a) 的答案」區塊 |
| 面板改「題目字眼」 | `learn_panel.py` 課題編輯器 | 欄位 **`f_hints`**，每行一組、格式 **`English | 中文解釋`**；驗證：組數 2–8、每組要有中英、字眼不可重複、不可整組照抄別課 |

### 檢查器／面板「已改好」的行為（不要改回去）

* `learn_check.py` **S2**：長題 `parts` 分數加總 ≠ `marks` → **錯誤**。
* `learn_check.py` **S8**：vocab 的中文欄以英文小寫字開頭 → **錯誤**（防「english 中文」被空格拆裂）。
* `learn_check.py` **S9**：長題示範的圖必須有合法 `step`。
* `learn_check.py` **S10**：代數語境用「公因數」→ **警告**（應為「公因式」）。
* `learn_katex_check.js`：**沒有 `$` 又沒有 LaTeX 特徵（`\ ^ _ { }`）的欄位視為純文字略過**
  （否則中文解說／①② 會被丟進 KaTeX 噴一堆 `No character metrics` 警告）。
  `math`／`highlight` 仍然全部強制解析，所以把關沒有放鬆。
* `tools/learn_panel.py` 的英文生字輸入格式＝ **`english = 中文`**（等號分隔）——**不要改回空格**。
* `tools/learn_panel.py` **課題編輯器會一併儲存 `cmdHints`**（`apply_edit` kind `topic`）；
  驗證錯誤訊息是中文、直接講清楚要改什麼（「至少 3 組是這一課獨有」這類要求寫在欄位標籤裡）。
* `tools/learn_panel.py` 的題目編輯器：`traps` 按題型分流 —— **MC 用 `opt`**（指向選項、不可指正確答案）、
  **長題用 `label`**（自由標籤，例：`漏中間項`）。儲存時若把長題的 label 當成 `opt`，會寫成 `"UNDEFINED"` 把標籤毀掉；
  `learn_editor_test.js` 已加 6 條斷言把關（欄位預填格式、無 `undefined`、POST 的是 `label`）。

---

## 8. 建議下一步

1. **WS07–WS24**：每課照 §3（含 §3.0 抽取）＋ §4 過渡題 ＋ §3.4 題目字眼。
2. **AS1–AS8 評估**：`lessons.json` 的 `assessments` 目前是 **空陣列**；要實作需先設計結構
   （同 `lessons` 類似：概念卡／示範／MC 頁），並在前端加對應頁面。ASS1 的 raw 已抽好可參考。
3. **可選**：ws01／ws02／ws03 目前沒有圖，可補圖令全站一致（ws04 是變換圖示範、**ws06 是函數圖像示範**）。
   ws05a／ws05b 是純代數課，**不需要**圖。
4. **可選**：`cmdHints` 目前只有課題層；如果將來想「同一課題的第 2 節換字眼」，
   可在 `lesson` 加同名欄位（前端 `cmdHints()` 已寫成讀 `TOPIC.cmdHints`，改動很小）。
5. 每課做完可獨立發佈，或幾課一次過發佈。

---

## 9. 已知事項／技術債（不急，但要知道）

* **舊學生的進度百分比會回落**：加了過渡題令分母變大
  （ws01 18→20 題、ws02 14→18、ws03 18→22、ws04 12→16、ws05a 17、ws05b 17、**ws06 17**）。
* **WS06（函數與圖像）已加入**：一課兩節（`ws06-1` 函數記號與二次函數圖像／`ws06-2` 配方法、頂點與最大最小值），
  17 MC（w01–w04 過渡題 ＋ q01–q13）＋ 4 條長題示範（EX1 求值三步、EX2 HKDSE 2014 P1 Q13(b) 三角形面積、
  EX3 HKDSE 2015 P1 Q18 判別式＋頂點、EX4 HKDSE 2013 P1 Q17 繩子圍出面積最大）＋ 6 張概念卡，
  並新增 7 幅拋物線圖（`Frame.curve()`／`Frame.vline()`）。**全部答案與干擾項都獨立驗算過**
  （恆等變形用數值等價核對；EX4 的 $A=24x-\frac{3}{2}x^{2}$、最大值 $96$ 亦重新推導過）。
  註：`unit 2`（Functions and Graphs）本身在 `COORD_NATIVE_UNITS` 之內，所以 R2「不用坐標當主解法」不適用，
  `learn_check` 不會因「coordinates of the vertex」而報錯。
* **新增獨立互動頁 `learn/quadratic-inequalities.html`（二次不等式探索器）**：老師提供的單頁工具
  （Canvas 畫拋物線＋解集陰影＋五步詳解＋隨機練習）。
  原檔依賴 **3 個 CDN**（Tailwind／FontAwesome／MathJax）→ 已全部改為自托管
  （`learn/vendor/tailwind/`、`learn/vendor/fontawesome/`、站內 KaTeX），否則校網一擋 CDN 就會整頁走樣（`learn/README.md` §8）。
  順手修好原檔兩個問題：① 步驟 4「區間測試表」的區間名（例如 `(-\infty, 2)`）是**裸 LaTeX、沒有定界符** →
  永遠不會被渲染；已包上 `$…$`。② MathJax 是 CDN ＋ `async`，首次載入時 `updateAll()` 可能早過它 →
  初次進站可能完全冇數學；改用站內 KaTeX 後同步即時渲染。
  驗證：用 jsdom ＋ 真 KaTeX 跑一次（canvas 用假 context），26 項斷言全過（含拖 slider、換題、答對）。
* **WS06 題解升級（採納老師提供的審閱建議）**：17 題 MC ＋ 4 條長題示範的解說全面改寫（把「為什麼」講得更透：
  代入負數要包括號、$(2x)^{2}$ 連係數要平方、$-3(x-1)$ 負負得正、兩點 $y$ 坐標相同＝水平線…），
  並修正 3 處：① `eph-ws06-ex02` 合併步驟要補回「面積公式」的 1M（否則步驟分 5 ≠ 6，`markSum` 會 FAIL）；
  ② ex04 的「抽出公因數」改寫（`learn_check` S10 會對「公因數」出警告，全站要保持 0 警告）；
  ③ 刪掉多餘的 `title.en`（全站 `title.en` 皆空，面板儲存亦會清掉）。
  同時新增前端功能 **長題示範的「常見錯誤」**（見 §7）：`solution.traps` 用 `label`，看完示範後顯示；
  目前只有 ws06 的 4 條示範有。`learn_smoke_test.js` 新增 10 條斷言（含「只有 ws06 有」與「沒有 traps 的示範不會出空框」）。
* **ws05b 補充過一次**：共軛（最難的一步）由 c3 一句帶過 → 獨立成卡 `ws05b-c4`
  （共軛是甚麼／為甚麼乘共軛有效／$(a+bi)/(c+di)$ 公式／$c^{2}+d^{2}$ 捷徑／完整例題／驗算），
  並加 2 題除法練習 `eph-ws05b-q11`（$\frac{3+2i}{1-i}$）、`-q12`（$\frac{1}{2+i}+\frac{1}{2-i}$，虛部抵消）。
  兩題的答案與三個干擾項都用 Python `complex` 獨立驗算過。
  示範 2、3 是同類題（求 $k$ 再取實部），老師指示「保留也可」，故未刪。
* **第三方 AI 審閱（WS05／ws05a／ws05b）核實結果**：
  * **採納** ①`eph-ws05b-ex02/ex03` 題幹以逗號結尾（「If … are equal, 」未完句，而且那是 (b) 的前提）
    → 條件搬進 (b)，(a) 補「in terms of $k$」；
    ②`ws05b-ex01/ex02/ex03` 是**全站唯一三題完全冇 `marking` 的長題** → 已補齊（(a)1M+1A 一路對應分部分數），
    `smoke` 新增「每個示範的步驟分加起來＝該題分數」斷言；
    ③`ws05b` 教了「純虛數 → 實部 $=0$」卻冇題練 → 新增 `eph-ws05b-q13`（$z=(3k-6)+(2k+5)i$，$k=2$），
    第 5 練習頁因此補足 3 題；`cmdHints` 的實數那一格也一併講埋純虛數（兩者條件剛好相反）。
  * **「拆 ws05a」的處理**：本站拆分門檻是「概念卡 ≥7 張或 MC ≥18 題」，ws05a 只有 6 卡／17 MC，
    所以最初沒有照拆（ws03 有 6 卡／22 MC 3 示範，更大亦已上線），而且建議書把 MC 切成含 `[q07]`、`[q13]`
    的 1 題頁（違反「每頁 3 題」）。**老師其後決定拆**，並採用本專案提出的切法：
    `ws05a-1` 三種解法與應用題（c1–c4＋EX1/EX3＋MC w01–w03、q01–q06，頁形 `[3,3,3]`）／
    `ws05a-2` 判別式與根的性質（c5–c6＋EX2/EX4/EX5＋MC w04、q07–q13，頁形 `[3,3,2]`，第一頁以 W04 開頭）。
    總頁數由 8 → 13（每節示範少於 4 條，不再收成一頁）。
  * `ws05b-c5`（流程與常見錯誤）改用老師提供的版本：改成「固定四步」＋「DSE 致命陷阱」一段
    （選項必定放 $k$ 的值當誘餌）。⚠️ 舊版寫「題目的最後一句通常會提醒你 Do not forget to find the real part」
    —— 查 `raw/WS05.json` 後確認那句在**題解**的註記，不在題幹，已修正；`eph-ws05b-ex02` 第 4 步的引述也一併改成
    「官方題解特別寫上…」（原題正解 D $=9$，選項 C $=2$ 就是中途的 $k$）。
  * **不採納**「補 `title.en`」：`title.en`／`step.en` 全站 200 多處（ws02–ws05a）都是空的，
    前端只顯示 `title.zh`（`why` 才用 `st.zh || st.en`），而且面板儲存題目時會整批清掉 `en` 欄 —— 補了會即刻再消失。
* ✅ **已完成（老師指示）**：`ws03-ex01/ex02/ex03`、`ws04-ex01/ex02/ex03` 的 `steps[].marking`
  照 `raw/digest/WS03-sol.md`／`WS04-sol.md` 官方評分重新分配（例：ws03 的 (b) 官方是 1M+1M、
  ws04 的「證明垂直」是 1M（斜率）+1A（值）+1A（結論）），ws03 的裸 `1M`／`1A` 亦統一成 `(1M)`／`(1A)`；
  `learn_smoke_test.js` 的加總斷言已由 ws05a／ws05b 擴展到**全部七課 23 個示範**（ws06 亦已納入）。
  同時清掉 ws03／ws04 共 28 處 **Markdown `**粗體**`**（前端不支援，會原樣顯示），並加斷言防再犯。
  ⚠️ 只改 `marking`、無增刪步驟 —— ws04-ex02／ex03 的示意圖綁定題解步數（`figures.json` 的 `step`）。
* **已發佈**：WS06（含 7 幅圖、smoke 斷言、本文件）已 commit 並 push（`main` ＝ `origin/main`）；
  上一輪 WS05＋題目字眼是 `9e31015`。GitHub Pages 部署約 1 分鐘，**更新已存在的檔案**受 CDN 快取影響最多 10 分鐘（用無痕／Ctrl+F5）。
* `learn_check.py` 的 S7 概念卡檢查寫在 `for q in questions:` 迴圈內（會重複執行同一批卡片檢查）。
  **無害、未修**；如要整理請連測試一齊改。
* `learn/data/*.js` 是生成檔但**屬 git 追蹤**（部署時整份 `learn/` 上 Pages），
  所以**每次改完資料都要跑 `make_learn_data.py` 再 commit**。
* GitHub Pages 對**已存在的檔案**有 `max-age=600` 快取：剛 push 完用無痕／Ctrl+F5 才即時看到新版。
* CI（`.github/workflows/deploy.yml`）的 learn 四道檢查是 `continue-on-error: true`
  （只警告、不擋每日站）→ **真正的防線是本機這幾道檢查**，一定要跑齊才發佈。
* `docs/LEARN-ADD-TOPICS-HANDOFF.md`（本文件）本身也要在重大改動後更新。

---

## 10. 新 chat 開場白（可直接貼）

```
接手「自學追上站」（C:\Code Buddy\HKDSE\learn\）的內容開發。

先讀，然後按它開工：
1. docs/LEARN-ADD-TOPICS-HANDOFF.md   ← 交接文件（現況、pattern、頁碼對照、審閱常客錯誤、硬規則）
2. learn/README.md                     ← 自學站契約（資料流、檢查器、面板）
3. WORKBUDDY-DAILY.md 的「每次新增課題」＋「本機維護平台（面板）」兩節
4. data/learn/lessons.json             ← 課程編排（含各課 cmdHints）

這次要做：WS07（來源：inbox_learn/ 內的 EPH DSEL5 WS07 docx 與 _sol.docx）
做法：
 (1) 先照 handoff §3.0 抽取來源（extract_eph → wmf_to_png → eph_digest）
 (2) 照 §3.1–3.5 整理題目／題解／概念卡／編排／圖（以 ws04、ws06 為範本）
 (3) 照 §3.4 為這一課寫 cmdHints（4–6 組、至少 3 組是這課獨有，先掃題目挑字眼）
 (4) 加 §4 的 4 題過渡題（放第一個練習頁）
 (5) 跑齊 §3.6 檢查，全綠才回報
 (6) 改 smoke test：§6.2 的「課題數 7 → 8」＋ §6.3 的新課斷言（含題目字眼那一條）

⚠️ 開工前先掃 handoff §5.2「審閱最常挑出的 10 類問題」（特別是長題分數要對官方 marking、
   出題後要驗算至少一個選項正確、解說不可以自相矛盾、題目字眼不可照抄別課）。
⚠️ 不要改既有結構（頁面節奏、分頁列、已有功能），也不要動 site/（每日三題站）。
```

---

## 11. 快速自我檢查（每課完成前）

- [ ] `extract_eph.py --files WSxx` 抽過，`raw/digest/` 有可讀摘要
- [ ] 長題 `parts` 分數加總＝`marks`，且每個 `steps[].marking` 對得上官方評分參考
- [ ] 每題都親手驗算過：**至少一個選項是正確答案**、解說算式沒有自相矛盾
- [ ] 自編題在 `source` 標明「（自編）」
- [ ] `cmdHints` 是為這一課而設（4–6 組、≥3 組獨有、與其他課最多重覆 2 組）
- [ ] `make_learn_data.py` 跑過，`learn/data/topic-wsxx.js` 已更新
- [ ] `learn_check.py` **0 錯誤 0 警告**
- [ ] `learn_katex_check.js` **all LaTeX renders cleanly**（無 stderr 警告）
- [ ] `learn_figure_check.py` **全部合格**（如該課有圖）
- [ ] `learn_smoke_test.js` **all learn smoke tests passed**（含改好的課題數／頁碼／題目字眼）
- [ ] 改了面板才需要的 `learn_panel_test.py` **all panel tests passed**
- [ ] 第一個練習頁是過渡題、題目難度由淺入深
- [ ] 每題 `zh` 解釋都寫給弱生看（不是只寫算式）
- [ ] 抽 1 題在瀏覽器（面板 → 本機預覽）實際做一次：作答 → 看題解 → 看圖
