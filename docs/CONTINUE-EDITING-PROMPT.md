# 換機續編：貼給 AI 的開場 prompt

在另一部電腦 clone 好 repo 之後，把下面**整段**（由 `---` 到下一個 `---`）貼給 AI，
再在最後一節寫上你這次想做的事，就可以接上。

---

你正在接手維護一個純靜態教學網站：**DSEPass 自學追上站**（repo 根目錄**就是**網站根目錄，
線上 `https://math-lov.github.io/dse-pass/`；本機路徑 `C:\Code Buddy\DSEPass`；Windows ＋ PowerShell）。

## 一、先確認環境（未 clone 才需要）

```powershell
git clone https://github.com/math-lov/dse-pass.git "C:\Code Buddy\DSEPass"
cd "C:\Code Buddy\DSEPass"; npm install     # jsdom ＋ katex（冒煙測試與 KaTeX 檢查要用）
```

需要：Git、Node.js ≥ 22、Python 3（日常工具只用標準庫）。push 需要一次 GitHub 登入。

## 二、動任何東西之前，先跑一次閘門確認「綠燈」

```powershell
cd "C:\Code Buddy\DSEPass"
python -X utf8 tools/make_learn_data.py       # 生成 data/*.js ＋ 寫版本戳
python -X utf8 tools/learn_check.py           # 必須 0 錯 0 警
python -X utf8 tools/learn_lang_check.py --site
python -X utf8 tools/learn_figure_check.py    # 有改圖才需要
$env:NODE_PATH = "C:\Code Buddy\DSEPass\node_modules"
node tools\learn_katex_check.js               # all LaTeX renders cleanly
node tools\learn_smoke_test.js                # all DSE Pass smoke tests passed
```

任何一項不是綠燈，**先告訴我**，不要開始改。

## 三、先讀這兩份

* `README.md` —— 檔案地圖、日常流程、內容規則、換機步驟
* `docs/LEARN-ADD-TOPICS-HANDOFF.md` —— 加課題的硬規則（頁碼與路徑屬姊妹專案，數字要按本站現況對照）

## 四、架構要點（不要誤改）

* **唯一手改**：`data/learn/` 的 `bank.json`（題目）、`solutions.json`（題解）、
  `concepts.json`（概念卡）、`lessons.json`（課題／頁面編排）、`figures.json`（圖）、`prompt-templates.json`。
* **生成檔，不可手改**：`data/index.js`、`data/meta.js`、`data/topic-<id>.js`；
  由 `tools/make_learn_data.py` 產生，同時把內容 hash 寫進 `index.html`／`topic.html`／`wrong.html` 的 `window.__V`。
* **前端**：`assets/app.js`（渲染）、`assets/i18n.js`（中英三態）、`assets/style.css`；KaTeX 自托管於 `vendor/`。
* 題目 id 一律 `eph-(ws0N|as0N)-…`（`app.js` 的 `belongsTo()` 只認這個前綴）。
* 題圖是 SVG：由 `tools/make_learn_figures.py` 產生到 `data/learn/figures.json`，再由生成器掛到
  概念卡／題目的 `figures` 欄位。**MC 的圖預設作答後才出**（避免圖內影像點洩漏答案）；
  如果圖本身就是題目的一部分（讀圖題），要在該題加 `"figBefore": true` —— 前端會在題幹下面即刻出圖，
  但只出圖、不出 `caption`（caption 寫的是讀圖解說，會給答案），caption 作答後才補。

## 五、內容硬規則（閘門會擋）

1. 題目照原檔（英文）；**解說中英齊全**（缺英文＝ I1–I7 錯誤，不可發佈）。
2. 數式一律英文 —— `math`／`highlight` 與散文 `$…$` 內不可有中文（「或」寫 `\text{or}`）。
3. 過長的式子要在 `=`／`\Rightarrow` **之前**斷行，運算符留在續行開頭。
4. 不可用 Markdown `**`（前端不 render）。
5. 不標籤學生（不寫「補底／落後／後進生」等）。
6. MC：要有 A–D 四個選項；`answer` 必須是其中一個；`traps` **不可指向正確答案**且至少 2 個；必有 `tip`。
7. 長題：`parts[].marks` 加總 ＝ 總分；`steps[].marking` 加總 ＝ 總分。
8. 概念卡：`{{math:N}}` 數量 ＝ `math` 條數，而且標記必須放在**行尾**
   （I12：公式方塊之後不可留句子尾巴或標點）。
9. 改完任何 `data/learn/*.json` 都要 `make_learn_data.py` 再跑閘門。

## 六、每次改動的流程

改 `data/learn/*.json` → `make_learn_data.py` → 上面五道檢查全綠 →
`git add -A; git commit -m "說明改了甚麼"; git push`（約 1 分鐘上線；既有檔案 CDN 最多 10 分鐘）。
兩部電腦：**開工前先 `git pull`；離開前一定要 push。**

## 七、這次想做的事

> （在這裡寫，例如：新增課題 ws02／改某題詳解／加一張概念卡／修正排版）

## 八、回報要求

* 每次改完告訴我：改了甚麼、哪幾道閘門跑過（結果）、有沒有動到生成檔或前端。
* 內容有疑問就問，不要自行加我沒要求的內容。

---
