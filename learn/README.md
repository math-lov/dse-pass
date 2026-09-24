# 自學追上站（learn/）

給**能力落後、但有心追上**的同學：按課題逐課學習，先看概念卡，再看示範題解，然後每頁三題練習。
無計時、無連續天數、可重做、可重置；進度只存在學生自己的瀏覽器。

* 網址（與每日三題站同一個 Pages）：`https://math-lov.github.io/daily.math/learn/`
* 進度儲存：`localStorage` key = `dse-learn:v1`（與每日三題站的 `daily3.v1` **完全分開**）
* 內容來源：校內訂購的 EPH《HKDSE All-Round Level 5 Assurance Pack》（`inbox_learn/`）

---

## 1. 頁面結構

| 檔案 | 用途 |
|---|---|
| `start.html` | **開始之前**（前言，純靜態、不載入 app.js）：無壓力聲明 → 三個自學習慣 → 卡住時的三步求助法（含可複製的 AI 提問範本）→ 收尾；用顏色框＋編號徽章分區 |
| `index.html` | 首頁：Stage 分組的課題按鈕牆、進度環、「繼續學習」、弱點升級庫入口、清除進度；另有「無打分、無排名」的安心提示＋前往 `start.html` 的按鈕 |
| `topic.html?t=<topicId>&p=<頁碼>` | 課題頁：**頁數導覽列**（學習／示範／練習；**多節課題會插入「第 N 節」分隔**，避免兩個「學習」分不清）＋常駐「← 回到主目錄」＋頁頂「題目字眼」提示（Factorize completely／Hence…）；題目列會顯示「第 N 節 · 第 X / Y 頁」 |
| `wrong.html` | 弱點升級庫（前稱錯題本）：只收答錯的 MC，答對就移出 |
| `quadratic-inequalities.html` | **二次不等式探索器**（獨立互動頁，不載入 app.js）：拖係數 slider 即時看拋物線、解集陰影、x 軸解集與五步詳解；另一分頁是隨機生成的練習（自評分，不寫入進度）。所有資源自托管（`vendor/tailwind`、`vendor/fontawesome`、`vendor/katex`） |

每課固定節奏：**① 概念卡（2–6 張）→ ② 長題目示範 → ③ MC 每頁 3 題**。
頁面切換用 query param（不用 hash），所有資源路徑都是**相對路徑**（因為掛在 `/learn/` 子目錄）。

## 2. 資料流

```
inbox_learn/*.docx                    原始教材（唯讀，不進 git）
      │  python tools/extract_eph.py --stage 1
      ▼
data/learn/raw/*.json + media/       抽取草稿（禁手改；media 為圖，不入 git）
      │  python tools/wmf_to_png.py --dir data/learn/raw/media --recursive
      ▼
data/learn/raw/media/**/*.png        公式圖轉 PNG（讓 AI／老師可讀圖轉寫）
      │  （AI 整理＋標旗標）
      ▼
data/learn/bank.json                 題庫（mc / long，含 review 旗標）
data/learn/concepts.json             概念卡
data/learn/solutions.json            題解（steps ＋ why 詳解 ＋ marking ＋ traps ＋ tip）
data/learn/lessons.json              課程編排（Stage → 課題 → 課 → 頁）
      │  python tools/make_learn_data.py
      ▼
learn/data/*.js + learn/vendor/katex 生成檔（禁手改）＋ 自托管 KaTeX
```

**編輯層 vs 生成層**：要改內容，一律改 `data/learn/*.json`；`learn/data/*.js` 是生成物，下次生成會被覆蓋。

## 3. 三支檢查器（發佈閘門）

```powershell
cd "C:\Code Buddy\HKDSE"
$py   = "C:\Users\t073\.workbuddy\binaries\python\envs\default\Scripts\python.exe"
$node = "C:\Users\t073\.workbuddy\binaries\node\versions\22.22.2-3\node.exe"

& $py   tools\make_learn_data.py      # 產生 learn/data/*.js
& $py   tools\learn_check.py          # 結構／契約／覆核旗標／度制／禁坐標向量 → 必須 0 錯誤
& $node tools\learn_katex_check.js    # 用真 KaTeX 逐條解析所有數學式
& $node tools\learn_smoke_test.js     # 模擬學生全流程（首頁→概念卡→示範→MC→弱點升級庫）
```

CI（`.github/workflows/deploy.yml`）在發佈前也會跑齊以上四步，但**只作警告**（`continue-on-error: true`）：
自學站有問題**不會擋住每日三題站**的發佈，但該步會在 Actions 顯示失敗並附警告訊息。

> 真正的內容防線在生成器：`make_learn_data.py` 不會輸出 `review` 未清的題目，
> `learn_check.py` 亦會把「被課程引用但未覆核」列為錯誤 —— 所以未覆核的內容不會出現在網站上，
> 即使 CI 只作警告也一樣。（每日站的四道檢查仍是硬閘門，失敗即整份不部署。）

## 4. 硬規則（與每日三題站一致）

1. **角度一律用「度」**，禁弧度（`rad`、`\frac{\pi}{3}`…）。
2. **主解法必須在 DSE 必修範圍內**：追角／全等相似／面積比／直角三角形三角比；
   坐標法、向量法只可放 `solution.alt`（學生端摺疊顯示，**不作第一解法**）。
3. 文字欄位內**不准裸寫 `$`**（貨幣請寫純數字，例如 `46 422`）。
4. `review` 旗標非 `null` 的題目**不會出站**（`make_learn_data.py` 剔除、`learn_check.py` 報錯）。
5. 教師欄位（`notes`、`review`…）不進公開檔（`strip_teacher_only()`）。

## 5. 新增一個課題（之後補 WS02–WS24 / AS1–8）

> **接手前先讀 [`docs/LEARN-ADD-TOPICS-HANDOFF.md`](../docs/LEARN-ADD-TOPICS-HANDOFF.md)**：
> 現況統計、過渡題（Bridging）標準做法、**頁碼對照表**（改 `mcPages` 時要同步改 smoke test 的哪幾行）、
> 硬規則、已有前端功能清單、以及可直接貼到新 chat 的開場白。

```powershell
& $py tools\extract_eph.py --files WS02,WS02-sol     # 1. 抽取（-sol 為題解版，指令用 WS02 會連題解版一齊）
& $py tools\eph_digest.py --files WS02 --variant both  # 2. 產生閱讀用摘要 data/learn/raw/digest/
# 3. 逐題整理進 data/learn/{bank,concepts,solutions,lessons}.json
& $py tools\make_learn_data.py                        # 4. 生成
& $py tools\learn_check.py; & $node tools\learn_katex_check.js; & $node tools\learn_smoke_test.js
git add -A; git commit -m "Learn: add WS02"; git push  # 5. 發佈（GitHub Pages 約 1 分鐘）
```

## 6. 嵌圖公式（EPH 把公式存成 WMF 圖）

`inbox_learn` 的 Word 檔有大量公式是**圖片**（Stage 1 十個檔就有 835 個 WMF）。
處理方式：`wmf_to_png.py` 用 Windows GDI+ 轉成高解析 PNG → 讀圖轉寫成 LaTeX →
在 `bank.json` 標 `review` 旗標 → 老師覆核後清掉旗標才出站。

## 6b. EPH 原檔的已知陷阱（轉寫時要留意）

| 現象 | 處理 |
|---|---|
| 題解的變數 `b` 被打成希臘字母 `β`（WS02 有 25 處） | 一律寫回 `b`；`w:sym font="Symbol" char="F061"/F062` 才是斜體 `a`／`b`（抽取器已正確還原） |
| 連等題（$A=B=C$）在摘要中會被拆散 | 讀 `data/learn/raw/<CODE>.json` 原始區塊，不要只看 digest |
| 選項文字短（如 `A. –1.`）會跨題重複而被 digest 去重 | 同上：需要時用 `--variant both` 或直接查 raw JSON 的 `dup` 欄位 |
| 金額 `$70` 是裸 `$`，會被 KaTeX 當定界符 | 一律寫 `\$70`（`learn_check` 會把裸 `$` 當錯誤擋下） |

## 7. 本機維護平台（`start-learn-panel.bat`，127.0.0.1:8788）

與每日三題站的面板（8787）**完全獨立**（不同資料層、不同埠，可同時開）。

| 分頁 | 功能 |
|---|---|
| **總覽** | 題數／概念卡／待覆核統計；**課題開關**（暫緩＝學生看不到，資料檔會被自動清除）；孤兒題；最後生成時間 |
| **覆核清單** | 列出 `review` 旗標未清的題目（嵌圖公式 `embed-fig`、可疑轉寫），逐題「通過（清除旗標＋寫審計）」或「保留（加備註）」 |
| **內容編輯** | 直接改概念卡／題目／題解的文字（見下節），**即時 KaTeX 預覽**，儲存前驗證、儲存後自動「生成 + 結構檢查」 |
| **發佈** | 「重新生成 + 檢查」＝ `make_learn_data` → `learn_check` → `learn_katex_check` → `learn_smoke_test`（失敗即停）；「一鍵發佈」＝ 再 git add／commit／push |
| （右上角） | **本機預覽** ↗ `/site/index.html` —— 直接 serve `learn/` 前端，改完馬上用手機／瀏覽器看 |

寫入的檔案：`data/learn/publish.json`（課題開關）、`data/learn/review_log.json`（覆核審計）、
`data/learn/edit_log.json`（編輯審計）、`data/learn/*.json`（實際內容）。

### 內容編輯：改哪裡、怎麼改

編輯器分四種對象，各自對應檔案：

| 編輯對象 | 檔案 | 可改欄位 |
|---|---|---|
| 課題名稱／簡介 | `lessons.json` | `name.zh` / `name.en` / `intro.zh` |
| 概念卡 | `concepts.json` | 標題（中英）、正文、顯示公式、常見錯誤、英文生字 |
| 題目 | `bank.json` | 題幹、選項 A–D（MC）、長題分部、難度、來源 |
| 題解 | `solutions.json` | 每步（標題／公式／中文解說）、干擾選項解說、帶得走的技巧、答案 |

* **步驟輸入法**：每步三行一組 —— 第 1 行標題、第 2 行公式（純 LaTeX）、第 3 行起是中文解說；用空行分隔步驟。
* **英文生字輸入法**：每行一組，用 **`english = 中文`**（等號分隔）。不要用空格 ——
  英文詞組含空格（例：`cross method`）會被拆成 en=`cross`、zh=`method 十字相乘法`（`learn_check` S8 會擋）。
* **公式定位標記**：概念卡的正文可用 `{{math:0}}`（0 起算）或 `{{math}}`（依序）把 `math[]` 的公式**插到文字中間**，
  例如「檢驗中間項：\n{{math:1}}\n與題目的中間項相同」；沒有標記的公式會依原順序補在正文下方。
  編輯器的即時預覽會同步顯示插好的位置。
* **儲存前驗證**（不通過就不寫檔）：`$` 成對、概念卡正文 ≥20 字、步驟解說 ≥10 字、MC 答案必須是其中一個選項、
  `traps` 不可指向正確答案、角度用「度」、主解法不可用坐標／向量。
* **儲存後**會自動跑 `make_learn_data.py` + `learn_check.py` 並回報結果（其餘兩道留給發佈流程）。
* 面板 API 自我測試：`& $py tools\learn_panel_test.py`
  （自己起測試行程 → 測 API 與**編輯器前端**（`tools/learn_editor_test.js`，jsdom）→ 測完自動還原檔案、清掉測試審計記錄）。

## 8. 已知限制

* 目前只有 **Stage 1 的第一課（WS01 因式分解）**；其餘課題按第 5 節流程逐批補上。
* 長題目示範只展示題解與教學，**不要求學生作答**（進度記「已讀完示範」）。
* 弱點升級庫只收 MC；示範題答錯不記錄。
* 一堂課的概念卡如果太多（≥7 張）或 MC 太多（≥18 題），要拆成兩節（例：ws01-1 基礎／ws01-2 進階），
  避免弱生一次過面對太多內容而放棄。
* KaTeX 為自托管（`learn/vendor/katex`），**不要改用 CDN**（學校網絡／離線要能用）。
* 獨立互動頁（`quadratic-inequalities.html`）的所有前端資源同樣要自托管：
  `vendor/tailwind/tailwind.min.js`（Tailwind Play CDN 的離線副本）、
  `vendor/fontawesome/all.min.css` ＋ `webfonts/fa-solid-900.*`。
  **新增這類頁面時，`learn/*.html` 內不可以再出現任何 `https://` 的 `<script src>`／`<link href>`。**
  數學一律用站內 KaTeX（`renderMathInElement`，定界符 `$$…$$`、`\[…\]`、`\(…\)`、`$…$`），不要用 MathJax。
