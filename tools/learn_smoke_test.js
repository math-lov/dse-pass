/* DSE Pass 站冒煙測試（jsdom）：模擬學生的完整流程
 * 用法： node tools/learn_smoke_test.js
 *
 * 設計：斷言盡量由 data/learn/lessons.json 驅動（課題數量、頁數、題號），
 *       日後由 WS01 加到 WS19 時，測試不用改動。
 *
 * 覆蓋：
 *   1. 首頁：課題按鈕、進度環、繼續學習、統計
 *   2. 開始之前（前言頁）
 *   3. 課題頁：分頁列、概念卡、MC 頁數與選項數
 *   4. MC：答錯（陷阱解說 + 進弱點升級庫）／答對（綠色 + 答案行 + 提示逐步）
 *   5. 長題示範：逐步揭示 → 完成橫幅 → 步驟分 → (a)→(b) 連結塊
 *   6. 弱點升級庫：列出答錯的題目、再練一次會清除
 *   7. 資料層：答案鍵、干擾項、tip、步驟分加總
 *   8. 二次不等式探索器（獨立頁）
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { JSDOM } = require("jsdom");

const root = path.join(__dirname, "..");
const learn = root;                     // 網站就在 repo 根目錄（Pages 由 root 提供）
const LS_KEY = "dse-learn:v1";

const katexJs = fs.readFileSync(path.join(learn, "vendor", "katex", "katex.min.js"), "utf8");
const autoRenderJs = fs.readFileSync(path.join(learn, "vendor", "katex", "auto-render.min.js"), "utf8");
const appJs = fs.readFileSync(path.join(learn, "assets", "app.js"), "utf8");
const i18nJs = fs.readFileSync(path.join(learn, "assets", "i18n.js"), "utf8");
const indexJs = fs.readFileSync(path.join(learn, "data", "index.js"), "utf8");

const LESSONS = JSON.parse(fs.readFileSync(path.join(root, "data", "learn", "lessons.json"), "utf8"));
const BANK = JSON.parse(fs.readFileSync(path.join(root, "data", "learn", "bank.json"), "utf8")).questions;
const SOLS = JSON.parse(fs.readFileSync(path.join(root, "data", "learn", "solutions.json"), "utf8")).solutions;
const CARDS = JSON.parse(fs.readFileSync(path.join(root, "data", "learn", "concepts.json"), "utf8")).cards;

let fails = 0;
const ok = (cond, label) => { console.log((cond ? "  PASS  " : "  FAIL  ") + label); if (!cond) fails++; };

function boot(page, search, storage) {
  const html = fs.readFileSync(path.join(learn, page), "utf8");
  const dom = new JSDOM(html, {
    url: "https://example.test/" + (search || ""),
    pretendToBeVisual: true, runScripts: "outside-only",
  });
  const ctx = dom.getInternalVMContext();
  ctx.window.confirm = () => true;
  const scrolls = [];
  ctx.window.scrollTo = (x, y) => { scrolls.push(y); };
  if (storage) ctx.window.localStorage.setItem(LS_KEY, storage);
  vm.runInContext(katexJs, ctx, { filename: "katex.min.js" });
  vm.runInContext(autoRenderJs, ctx, { filename: "auto-render.min.js" });
  vm.runInContext(indexJs, ctx, { filename: "index.js" });
  const topicFiles = fs.readdirSync(path.join(learn, "data")).filter((f) => /^topic-.*\.js$/.test(f));
  topicFiles.forEach((f) => vm.runInContext(fs.readFileSync(path.join(learn, "data", f), "utf8"), ctx, { filename: f }));
  vm.runInContext(i18nJs, ctx, { filename: "i18n.js" });   // 語言層（頁面用 <script defer>）
  vm.runInContext(appJs, ctx, { filename: "app.js" });
  if (typeof ctx.window.__LEARN_START === "function") ctx.window.__LEARN_START();
  const doc = dom.window.document;
  return {
    dom, ctx, doc, scrolls,
    $: (s) => doc.querySelector(s),
    $$: (s) => Array.prototype.slice.call(doc.querySelectorAll(s)),
    store: () => JSON.parse(ctx.window.localStorage.getItem(LS_KEY) || "{}"),
  };
}

/* ── 1. 首頁 ─────────────────────────────────────────────────────────── */
console.log("\n— 首頁：課題按鈕 —");
const home = boot("index.html", "");
ok(home.$$(".topic-btn").length === LESSONS.topics.length,
   "renders one button per topic (got " + home.$$(".topic-btn").length + " of " + LESSONS.topics.length + ")");
ok(/共 \d+ 個課題/.test((home.$("#site-stats") || {}).textContent || ""), "site stats rendered");
ok(!home.$("#continue").classList.contains("hidden"), "'continue learning' is visible when nothing is finished");
ok(/繼續學習/.test(home.$("#continue-label").textContent), "continue button labels the next topic");
ok(!!home.$(".topic-btn .ring"), "topic shows a progress ring");
ok(/練習 \d+ 題/.test(home.$(".topic-btn .t-meta").textContent), "topic shows its item counts");
ok(!!home.$(".safety-note") && /沒有老師打分/.test(home.$(".safety-note").textContent),
   "home states the no-pressure design");
ok(!!home.$('.safety-note a[href="start.html"]'), "home links to the preface");

/* ── 2. 開始之前（前言）───────────────────────────────────────────────── */
console.log("\n— 開始之前（前言）—");
const pre = boot("start.html", "");
ok(!!pre.$(".pre-hero h1"), "the preface has a hero heading");
ok(pre.$$(".pre-block").length >= 4, "the preface is split into blocks (got " + pre.$$(".pre-block").length + ")");
ok(pre.$$(".pre-go .pre-step").length === 3, "the three study habits are numbered steps");
ok(/繁體中文/.test(pre.$("#prompt-text").textContent), "the AI prompt template is ready to copy");
ok(/問 AI/.test(pre.$(".pre-help").textContent) && /Ask AI/.test(pre.$(".pre-help").textContent),
   "前言第二步已改成「用網站內置問 AI 按鈕」的說明（中英齊）");
const aiStep = pre.$$(".pre-help .pre-step").filter((s) => /問 AI/.test(s.textContent))[0];
ok(!!aiStep && aiStep.querySelectorAll("ul li").length === 3,
   "前言第二步列出三個「問 AI」按鈕位置（"
   + (aiStep ? aiStep.querySelectorAll("ul li").length : 0) + "）");

/* ── 3. 課題頁：分頁列與概念卡 ────────────────────────────────────────── */
console.log("\n— 課題頁：分頁列 —");
// 每課的頁數：1 張概念卡頁 ＋ 每條長題各一頁 ＋ 每頁 MC（長題不再合併成「示範集」）
const expectedPages = (t) => t.lessons.reduce(
  (n, l) => n + 1 + l.longQuestionIds.length + l.mcPages.length, 0);
const firstMcIndex = (t) => 1 + t.lessons[0].longQuestionIds.length;

for (const t of LESSONS.topics) {
  const p0 = boot("topic.html", "?t=" + t.id + "&p=0");
  ok((p0.$("#topic-name").textContent || "").trim().length > 0,
     t.id + " renders its topic name (" + p0.$("#topic-name").textContent + ")");
  const navCells = p0.$$("#pagenav .pg").length;
  ok(navCells >= 1 && navCells <= expectedPages(t),
     t.id + " 分頁列只渲染需要顯示的格（" + navCells + " / 邏輯上最多 " + expectedPages(t) + "）");
  ok(!!p0.$("#pagenav .pg.current"), t.id + " 分頁列標出「現時頁」");
  ok(p0.$$(".ccard-head h3").length === 1, t.id + " shows one concept card at a time");
  ok(p0.$$(".concept-body").length === 1, t.id + " renders the card body");
  ok(p0.$$(".cmd-hints .ch-chip").length >= 4 && p0.$$(".cmd-hints .ch-chip").length <= 6,
     t.id + " keeps 4–6 command-word chips (got " + p0.$$(".cmd-hints .ch-chip").length + ")");

  const hasMc = t.lessons.some((l) => (l.mcPages || []).length > 0);
  if (hasMc) {
    const mcIdx = firstMcIndex(t);
    const pmc = boot("topic.html", "?t=" + t.id + "&p=" + mcIdx);
    const cards = pmc.$$("#topic-body .card[data-qid]");
    ok(cards.length === 3, t.id + " first MC page holds 3 questions (got " + cards.length + ")");
    ok(pmc.$$("#topic-body .opt").length === 12, t.id + " MC page has 3 × 4 options (got " + pmc.$$("#topic-body .opt").length + ")");
    ok(pmc.$$("#topic-body .hint-row").length === 3, t.id + " every question offers hints before answering");
    /* 同一課題同時有長題與練習頁時，練習頁標籤要加 P，避免與題號（1、2、3）撞 */
    if (t.lessons.some((l) => l.longQuestionIds.length > 0)) {
      ok(pmc.$$("#pagenav .pg").some((x) => /^P1$/.test((x.textContent || "").trim())),
         t.id + " 同時有長題與練習頁 → 練習頁標籤加 P（P1）");
    }
  } else {
    /* 純長題課題（ws01c）：每條長題各佔一頁，導覽列用題號，可逐題點入去自己試 */
    const firstQ = (t.lessons[0].longQuestionIds || [])[0];
    const pdemo = boot("topic.html", "?t=" + t.id + "&p=1");
    ok(!!pdemo.$("#topic-body .card[data-qid]") &&
       pdemo.$("#topic-body .card[data-qid]").getAttribute("data-qid") === firstQ,
       t.id + "（純長題課題）第 2 格＝第一條長題（" + firstQ + "），單獨一頁");
    ok(!!pdemo.$("#topic-body .card[data-qid] [data-weak]"),
       t.id + " 長題可以逐題加入弱點升級庫");
    ok(/^1$/.test((((pdemo.$$("#pagenav .pg")[1] || {}).textContent) || "").trim()),
       t.id + " 導覽列用淨數字做標籤（" + ((pdemo.$$("#pagenav .pg")[1] || {}).textContent || "") + "）");
    ok(!!pdemo.$("#pagenav .pg-more"),
       t.id + " 同一節其餘題目收成「…」（只顯示現時題 ±2）");
    /* 「…」按一下要跳到第一條收起的題目（第 1 節 = Q1…Q8，收起 Q4 起） */
    const dots = pdemo.$("#pagenav .pg-more");
    ok(!!dots && dots.dataset.page === "4" && /收起/.test(dots.title || ""),
       "「…」指向第一條收起的題目（第 4 格＝Q4），並說明收起了幾題");
    /* 摺疊後「現時頁」與「✓ 完成」都要認 dataset.page（不再靠 .pg 清單位置）：
       ws01c 第 32 格 = 第 4 節第 5 題（Q29）—— 摺疊後它排在第 7 個位置 */
    const dNav = boot("topic.html", "?t=" + t.id + "&p=32",
      JSON.stringify({ mc: {}, long: { "eph-ws01c-q29": true }, cards: {}, weak: {} }), "zh");
    const curCell = dNav.$("#pagenav .pg.current");
    ok(!!curCell && curCell.dataset.page === "32",
       "摺疊後「現時頁」仍指對格（dataset.page=" + (curCell && curCell.dataset.page) + "）");
    const doneCells = dNav.$$("#pagenav .pg.done");
    ok(doneCells.length === 1 && doneCells[0].dataset.page === "32",
       "摺疊後「✓ 完成」標在正確的格（" +
       doneCells.map((x) => x.dataset.page).join(",") + "）");
    /* 頁底要有「← 上一題」（按「全部顯示」看完示範後才會出現；跳頁本身是 go()，jsdom 不模擬） */
    const pPrev = boot("topic.html", "?t=" + t.id + "&p=5");     // 第 5 格 = 第 1 節的第 5 題
    const allB = pPrev.$$(".card .btn").filter((b) => /全部顯示/.test(b.textContent || ""))[0];
    if (allB) allB.click();
    const pvBtn = pPrev.$$(".card .btn").filter((b) => /上一題/.test(b.textContent || ""))[0];
    const nxBtn = pPrev.$$(".card .btn").filter((b) => /下一頁/.test(b.textContent || ""))[0];
    ok(!!pvBtn && !!nxBtn, t.id + " 長題頁底同時有「← 上一題」與「下一頁 →」");
  }
}

/* ── 3c. 分頁列要顯示橫向滾動條（老師要求；否則學生不知道右邊還有頁）── */
const cssNav = fs.readFileSync(path.join(root, "assets", "style.css"), "utf8");
ok(/\.pagenav \{[\s\S]{0,220}?scrollbar-width: thin/.test(cssNav),
   "分頁列顯示橫向滾動條（scrollbar-width: thin）");
ok(!/\.pagenav::-webkit-scrollbar \{ display: none/.test(cssNav),
   "分頁列不再隱藏滾動條");

/* ── 3b. 長公式要分幾行顯示（不是橫向滾動）──────────────────────────── */
console.log("\n— 長公式斷行 —");
const mlMath = (c) => (c.math || []).filter((m) => m.indexOf("\n") >= 0)[0];
const mlCard = CARDS.filter(mlMath)[0];
ok(!!mlCard, "at least one concept card carries a multi-line formula (" +
   CARDS.filter(mlMath).length + " cards)");
if (mlCard) {
  const tc = boot("topic.html", "?t=" + mlCard.topic + "&p=0");
  let g = 0;
  while (g < 12 && ((tc.$(".ccard-head h3") || {}).textContent || "").indexOf(mlCard.title.zh) < 0) {
    const b = tc.$$(".card .row .btn").filter((x) => /下一張/.test(x.textContent))[0];
    if (!b) break;
    b.click(); g++;
  }
  const want = mlMath(mlCard).split("\n").filter((s) => s.trim()).length;
  /* 中英各渲染一份 → 計數要指定語言那一份（否則會被當成雙倍）*/
  const zhLines = tc.$$(".ccard-body > .l-zh .formula-multi .formula-line");
  const enLines = tc.$$(".ccard-body > .l-en .formula-multi .formula-line");
  ok(zhLines.length === want,
     "the long formula renders on " + want + " lines (got " + zhLines.length + ")");
  ok(enLines.length === want,
     "the English copy of the concept card renders the same " + want + " lines (got " + enLines.length + ")");
  ok(tc.$$(".ccard-body > .l-zh .formula-multi .katex").length === want,
     "every line is typeset by KaTeX (got " + tc.$$(".ccard-body > .l-zh .formula-multi .katex").length + ")");
  ok(tc.$$(".ccard-body > .l-zh .formula-line[data-tex]").length === want,
     "each line keeps data-tex so a late KaTeX load can still re-render it");
}

/* ── 4. MC 作答流程（用第一個課題）────────────────────────────────────── */
console.log("\n— MC 練習 —");
const t0 = LESSONS.topics[0];
const t0mc = boot("topic.html", "?t=" + t0.id + "&p=" + firstMcIndex(t0));
const qCards = t0mc.$$("#topic-body .card[data-qid]");
const firstQ = qCards[0];
const qid = firstQ.getAttribute("data-qid");
const sol = SOLS[qid];
ok(!!sol && ["A", "B", "C", "D"].includes(sol.answer), "the question carries a real answer key (" + (sol || {}).answer + ")");
const wrongLetter = ["A", "B", "C", "D"].filter((L) => L !== sol.answer)[0];
Array.prototype.slice.call(firstQ.querySelectorAll(".opt"))
  .filter((o) => o.dataset.opt === wrongLetter)[0].click();
ok(!!firstQ.querySelector(".trap-head"), "a wrong answer shows the 'you fell into a trap' header");
ok(/陷阱/.test(firstQ.querySelector(".trap-head").textContent), "the header uses trap framing, not blame");
ok(!!firstQ.querySelector(".answer-line.miss"), "the correct answer is still shown after a wrong pick");
ok(qCards[2].querySelectorAll(".opt.wrong, .opt.correct, .opt.reveal").length === 0,
   "answering question 1 leaves question 3 untouched");
// 答對第二題
const second = qCards[1];
const qid2 = second.getAttribute("data-qid");
const ans2 = SOLS[qid2].answer;
second.querySelectorAll(".opt")[["A", "B", "C", "D"].indexOf(ans2)].click();
ok(!!second.querySelector(".opt.correct"), "answering correctly marks the option green");
ok(Object.keys(t0mc.store().mc || {}).length >= 1, "answers are persisted to localStorage");
// 提示逐步揭示
const preHint = qCards[2].querySelector(".hint-row .btn");
preHint.click();
ok(qCards[2].querySelectorAll(".steps .step").length === 1, "hint reveals one step at a time before answering");

/* ── 5. 長題示範 ─────────────────────────────────────────────────────── */
console.log("\n— 長題示範 —");
const d = boot("topic.html", "?t=" + t0.id + "&p=1");
ok(!!d.$(".demo-try"), "demo page invites the student to try first");
d.$(".demo-try .btn").click();
ok(d.$$(".steps .step").length === 1, "steps are revealed one at a time");
d.$$(".card .row .btn").filter((b) => /全部顯示/.test(b.textContent))[0].click();
ok(d.$$(".steps .step").length >= 3, "all steps revealed (got " + d.$$(".steps .step").length + ")");
ok(!!d.$(".done-banner"), "finishing the demo shows the completion banner");
ok(d.$$(".step .marking").length >= 1, "DSE marking codes (1A/1M) are shown");
ok(d.$$(".step .why").length >= 1, "each step carries the long Chinese explanation");
ok(!!d.$(".step-link"), "the (b) step carries a 'take it from (a)' highlight block");
ok(/\(a\)/.test(d.$(".step-link").textContent), "the block names part (a)");

/* ── 6. 弱點升級庫 ───────────────────────────────────────────────────── */
console.log("\n— 弱點升級庫 —");
const wrongStore = JSON.stringify(t0mc.store());
const w = boot("wrong.html", "", wrongStore);
ok(w.$$(".wrong-item").length >= 1, "wrong book lists the answered-wrong questions (got " + w.$$(".wrong-item").length + ")");
const again = w.$$(".wrong-item .btn").filter((b) => /再練一次/.test(b.textContent))[0];
ok(!!again, "'practise again' button present");
const wrongBefore = Object.keys(w.store().mc || {}).filter((k) => w.store().mc[k].correct === false).sort();
again.click();
ok(!w.store().mc[wrongBefore[0]], "retrying clears that question's record (" + wrongBefore[0] + ")");
const w2 = boot("wrong.html", "", JSON.stringify({ mc: {}, long: {}, cards: {} }));
ok(/空的/.test(w2.$("#wrong-body").textContent), "empty state explains there is nothing to review");

/* ── 7. 資料層契約 ───────────────────────────────────────────────────── */
console.log("\n— 資料層契約 —");
const mcQs = BANK.filter((q) => q.type === "mc");
const longQs = BANK.filter((q) => q.type === "long");
ok(mcQs.every((q) => ["A", "B", "C", "D"].includes((SOLS[q.id] || {}).answer)),
   "every MC has a real answer key (" + mcQs.length + " questions)");
ok(mcQs.every((q) => ((SOLS[q.id] || {}).solution.traps || []).length >= 2),
   "every MC explains at least two real distractors");
ok(mcQs.every((q) => (((SOLS[q.id] || {}).solution.tip || {}).zh || "").length > 0),
   "every MC carries a takeaway tip");
const markSum = (q) => ((SOLS[q.id] || {}).solution.steps || []).reduce((n, st) =>
  n + ((st.marking || "").match(/\d+\s*[MA]/g) || []).reduce((m, s) => m + parseInt(s, 10), 0), 0);
const badMarks = longQs.filter((q) => markSum(q) !== q.marks);
ok(badMarks.length === 0,
   "every demo's step marks add up to its marks" +
   (badMarks.length ? " (" + badMarks.map((q) => q.code + ":" + markSum(q) + "/" + q.marks).join(", ") + ")" : ""));
ok(CARDS.every((c) => (c.vocab || []).every((v) => v.en && v.zh)), "every card's vocab has en and zh");
ok(LESSONS.topics.every((t) => (t.cmdHints || []).length >= 4 && (t.cmdHints || []).length <= 6),
   "every topic keeps 4–6 command words");

/* ── 8. 二次不等式探索器（獨立頁）────────────────────────────────────── */
console.log("\n— 二次不等式探索器（獨立頁）—");
function bootQuiz() {
  const file = "quadratic-inequalities.html";
  const html = fs.readFileSync(path.join(learn, file), "utf8");
  const dom = new JSDOM(html, {
    url: "https://example.test/" + file,
    pretendToBeVisual: true, runScripts: "outside-only",
  });
  const ctx = dom.getInternalVMContext();
  const fake2d = new Proxy({}, {
    get: (t, k) => (k === "canvas" ? null : () => fake2d),
    set: () => true,
  });
  ctx.window.HTMLCanvasElement.prototype.getContext = () => fake2d;
  vm.runInContext(katexJs, ctx, { filename: "katex.min.js" });
  vm.runInContext(autoRenderJs, ctx, { filename: "auto-render.min.js" });
  const doc = dom.window.document;
  Array.prototype.slice.call(doc.querySelectorAll("script:not([src])"))
    .forEach((s, i) => vm.runInContext(s.textContent, ctx, { filename: file + "#inline" + i }));
  dom.window.dispatchEvent(new dom.window.Event("load"));
  return {
    dom, ctx, doc,
    $: (s) => doc.querySelector(s),
    $$: (s) => Array.prototype.slice.call(doc.querySelectorAll(s)),
    run: (code) => vm.runInContext(code, ctx),
  };
}

const tQuiz = bootQuiz();
ok(!!tQuiz.$("#quizQuestionMath") && !!tQuiz.$("#quizValX1") && !!tQuiz.$("#quizValX2"),
   "the explorer page boots with a question and two answer boxes");
ok(/3 sig\. figs\./.test(tQuiz.$("#quizRootsInputContainer").textContent),
   "the answer boxes spell out the 3 sig. figs. allowance for irrational roots");
// 回歸：a < 0（開口向下）時「> 0」的解是單一有界區間 —— 舊寫法只認運算子，這題永遠判錯
tQuiz.run("quizState.correctSolution = solveQuadraticInequality(-1, -3, -2, 'gt');");
ok(tQuiz.run("intervalPatternOf(quizState.correctSolution)") === "single_open",
   "a downward parabola with > gives the single-bounded-interval structure");
ok(tQuiz.run("quizState.correctSolution.inequalityStr") === "-2 < x < -1",
   "its solution reads -2 < x < -1 (" + tQuiz.run("quizState.correctSolution.inequalityStr") + ")");
tQuiz.$('input[name="quizPattern"][value="single_open"]').click();
tQuiz.$("#quizValX1").value = "-2";
tQuiz.$("#quizValX2").value = "-1";
tQuiz.run("checkQuizAnswer()");
ok(/Excellent/.test(tQuiz.$("#feedbackTitle").textContent),
   "answering -2 < x < -1 is accepted (" + tQuiz.$("#feedbackTitle").textContent + ")");
tQuiz.$('input[name="quizPattern"][value="union_open"]').click();
tQuiz.run("checkQuizAnswer()");
ok(/Not quite right/.test(tQuiz.$("#feedbackTitle").textContent),
   "the opposite structure (two outer rays) is still rejected");
// 退化題（Δ=0 重根）：> 的解是 x ≠ r、≤ 的解是 x = r，六個選項都表達不到
const randOrig = tQuiz.ctx.window.Math.random;
const poor = [];
let delta0 = 0;
["easy", "medium", "hard"].forEach((lv) => {
  for (let i = 0; i < 10; i++) {
    const v = i / 10;
    tQuiz.ctx.window.Math.random = () => v;
    tQuiz.run("generateQuiz('" + lv + "')");
    if (Math.abs(tQuiz.run("quizState.correctSolution.delta")) < 1e-7) delta0++;
    if (!tQuiz.run("intervalPatternOf(quizState.correctSolution)")) poor.push(lv + "@" + v);
  }
});
tQuiz.ctx.window.Math.random = randOrig;
ok(delta0 >= 1, "the sweep really produces repeated-root questions, so the guard is exercised (" + delta0 + ")");
ok(poor.length === 0,
   "every generated question has a structure the six answer options can express" +
   (poor.length ? " (" + poor.join(", ") + ")" : ""));

/* ── 9. 基調驗證：中英雙語（中文／英文／中英）────────────────────────── */
console.log("\n— 基調：中英雙語 —");
const LANG_KEY = "dse-learn:lang";

function bootLang(page, search, storage, lang) {
  const d = boot(page, search, storage);
  let clip = "";
  try {
    Object.defineProperty(d.ctx.window.navigator, "clipboard", {
      configurable: true,
      value: { writeText: (t) => { clip = t; return Promise.resolve(); } },
    });
  } catch (e) { /* ignore */ }
  d.clip = () => clip;
  if (lang) d.ctx.window.LEARN_I18N.set(lang);
  return d;
}

const lHome = bootLang("index.html", "", null, null);
const langOf = (d) => d.doc.body.getAttribute("data-lang");
ok(lHome.$$(".langbar button").length === 3, "語言切換器有 3 個選項（中文／EN／中英）");
ok(langOf(lHome) === "both", "預設語言是「中英」（" + langOf(lHome) + "）");
lHome.$$(".langbar button")[1].click();
ok(langOf(lHome) === "en", "按 EN → body[data-lang]=en");
ok(lHome.ctx.window.localStorage.getItem(LANG_KEY) === "en", "語言選擇寫入 localStorage");
ok(!!lHome.$("#site-stats .l-zh") && /共 \d+ 個課題/.test(lHome.$("#site-stats .l-zh").textContent),
   "首頁統計有中文版");
ok(!!lHome.$("#site-stats .l-en") && /\d+ topics/.test(lHome.$("#site-stats .l-en").textContent),
   "首頁統計有英文版");
ok(!!lHome.$(".brand .l-en") && /Catch-up Maths/.test(lHome.$(".brand .l-en").textContent),
   "品牌名有英文版");

const siteCss = fs.readFileSync(path.join(learn, "assets", "style.css"), "utf8");
ok(/body\[data-lang="en"\] \.l-zh \{ display: none; \}/.test(siteCss),
   "style.css：英文模式隱藏 .l-zh");
ok(/body\[data-lang="zh"\] \.l-en \{ display: none; \}/.test(siteCss),
   "style.css：中文模式隱藏 .l-en");

const t0id = LESSONS.topics[0].id;
const tI18n = bootLang("topic.html", "?t=" + t0id + "&p=" + firstMcIndex(LESSONS.topics[0]), null, "both");
const cI18n = tI18n.$$("#topic-body .card[data-qid]")[0];
ok(!!cI18n.querySelector(".q-stem .l-zh") && !!cI18n.querySelector(".q-stem .l-en"),
   "MC 題幹有中英兩份");
cI18n.querySelector(".hint-row button").click();            // 顯示第一步
const stI18n = cI18n.querySelector(".step");
ok(!!stI18n.querySelector("h4 .l-zh") && !!stI18n.querySelector("h4 .l-en"),
   "題解步驟標題有中英兩份");
ok(!!stI18n.querySelector(".why .l-zh") && !!stI18n.querySelector(".why .l-en"),
   "題解步驟解說有中英兩份");
cI18n.querySelectorAll(".opt")[0].click();                  // 作答 → 出答案行／陷阱／技巧
ok(!!tI18n.$(".answer-line .l-zh") && !!tI18n.$(".answer-line .l-en"), "答案行有中英兩份");
ok(tI18n.$$(".trap .l-zh").length >= 1 && tI18n.$$(".trap .l-en").length >= 1,
   "陷阱解說有中英兩份");
ok(!!tI18n.$(".tip .l-zh") && !!tI18n.$(".tip .l-en"), "「帶得走的技巧」有中英兩份");

const tCards = bootLang("topic.html", "?t=" + t0id + "&p=0", null, "both");
ok(!!tCards.$(".ccard-body > .l-zh") && !!tCards.$(".ccard-body > .l-en"),
   "概念卡正文有中英兩份");
ok(tCards.$$(".ccard-body > .l-en .katex").length >= 1, "英文正文的公式一樣經 KaTeX 渲染");

/* 切語言要重繪：單語文字（T() 出來那些）也要跟著轉 */
const tSwitch = bootLang("topic.html", "?t=" + t0id + "&p=" + firstMcIndex(LESSONS.topics[0]), null, "zh");
const chipZh = tSwitch.$(".cmd-hints .ch-title").textContent;
tSwitch.ctx.window.LEARN_I18N.set("en");
const chipEn = tSwitch.$(".cmd-hints .ch-title").textContent;
ok(chipZh !== chipEn && /Command/.test(chipEn),
   "切到英文後，題目字眼標題變成英文（" + chipZh + " → " + chipEn + "）");

/* 重繪必須 idempotent：切幾次語言都不可以疊出多份內容
   （曾經的 bug：renderIndex/renderWrong 只 appendChild 沒有清空容器）*/
const lDup = bootLang("index.html", "", null, "both");
const cardsBefore = lDup.$$(".topic-btn").length;
const secsBefore = lDup.$$("#topics .section-title").length;
ok(cardsBefore === LESSONS.topics.length,
   "首頁課題卡數目 = 課題數（" + cardsBefore + " vs " + LESSONS.topics.length + "）");
[0, 1, 2].forEach((i) => lDup.$$(".langbar button")[i].click());
ok(lDup.$$(".topic-btn").length === cardsBefore,
   "切三次語言後課題卡數目不變（" + cardsBefore + " → " + lDup.$$(".topic-btn").length + "）");
ok(lDup.$$("#topics .section-title").length === secsBefore,
   "階段標題也不會變成多份（" + secsBefore + " → " + lDup.$$("#topics .section-title").length + "）");

const wDup = bootLang("wrong.html", "", JSON.stringify({
  mc: { "eph-ws01-q1": { picked: "A", correct: false, tries: 1, ts: 1 } }, long: {}, cards: {} }), "both");
const wBefore = wDup.$$(".wrong-item").length;
wDup.ctx.window.LEARN_I18N.set("en");
wDup.ctx.window.LEARN_I18N.set("zh");
ok(wBefore >= 1 && wDup.$$(".wrong-item").length === wBefore,
   "弱點升級庫切語言後項目數目不變（" + wBefore + " → " + wDup.$$(".wrong-item").length + "）");

/* ── 9b. 長／短答（紙上作答）：加入弱點升級庫 + 英文題幹在中文模式要見到 ── */
console.log("\n— 長／短答：加入弱點升級庫 —");
const tDemo = LESSONS.topics[0];
const dSet = boot("topic.html", "?t=" + tDemo.id + "&p=1", null, "zh");
ok(!!dSet.$(".card[data-qid]") &&
   dSet.$(".card[data-qid]").getAttribute("data-qid") === tDemo.lessons[0].longQuestionIds[0],
   "長題不再合併成示範集：第 2 格就是第一條長題（單獨一頁）");
ok(/^1$/.test((((dSet.$$("#pagenav .pg")[1] || {}).textContent) || "").trim()),
   "導覽列用淨數字做標籤（" + ((dSet.$$("#pagenav .pg")[1] || {}).textContent || "") + "）");
ok(!!dSet.$(".card[data-qid] [data-weak]"), "長／短答有「加入弱點升級庫」按鈕");
dSet.$("[data-weak]").click();
ok(/已在弱點升級庫/.test(dSet.$("[data-weak]").textContent), "按一下 → 變成「已在弱點升級庫」");
ok(/（1）/.test((dSet.$("#wrong-count") || {}).textContent || ""), "弱點升級庫徽章變為 1");
dSet.$("[data-weak]").click();
ok(/加入弱點升級庫/.test(dSet.$("[data-weak]").textContent) &&
   !/已在/.test(dSet.$("[data-weak]").textContent), "再按一下 → 取消加入");

const wWeak = bootLang("wrong.html", "", JSON.stringify({
  mc: {}, long: {}, cards: {}, weak: { "eph-ws01-s01": { ts: 1 } } }), "zh");
ok(!!wWeak.$(".wrong-item"), "弱點升級庫列出自己加入的長／短答");
ok(/自己加入/.test((wWeak.$(".wrong-item") || {}).textContent || ""), "標示為「你自己加入的」");
ok(!!wWeak.$(".wrong-item .btn"), "有「再練一次」按鈕");

/* 題目現已中英齊全（老師審查要求）：短答題幹要有中英兩份 */
const scZh = bootLang("topic.html", "?t=" + tDemo.id + "&p=3", null, "zh");  // 第 3 格＝第一條短答
const stemZh = scZh.$(".card[data-qid] .q-stem");
ok(!!stemZh.querySelector(".l-zh") && !!stemZh.querySelector(".l-en"),
   "短答題幹中英齊全（.l-zh ＋ .l-en，biNode 契約）");
ok(/因式分解/.test(stemZh.querySelector(".l-zh").textContent || "") &&
   /Factorize/.test(stemZh.querySelector(".l-en").textContent || ""),
   "短答題幹：中文「因式分解」／英文「Factorize …」");
ok(!!scZh.$(".card[data-qid] .q-kind"), "短答題有「短答 / Short answer」標記");
ok(!!scZh.$(".card[data-qid] [data-weak]"), "短答題一樣可以加入弱點升級庫");

/* 弱點升級庫「再練一次」的基礎：?q=<qid> 要直接跳到那一題（長題也要跳得中） */
const jumpQ = boot("topic.html", "?t=ws01c&q=eph-ws01c-q05", null, "zh");
ok(!!jumpQ.$(".card[data-qid]") &&
   jumpQ.$(".card[data-qid]").getAttribute("data-qid") === "eph-ws01c-q05",
   "?q=<qid> 直接跳到那一條長題（弱點升級庫「再練一次」用）");

/* ── 10. 基調驗證：問 AI 提問生成 ────────────────────────────────────── */
console.log("\n— 基調：問 AI 提問生成 —");
const MC0 = BANK.filter((q) => q.type === "mc")[0];
const pQ = bootLang("topic.html", "?t=" + MC0.topic + "&p=" + firstMcIndex(LESSONS.topics[0]), null, "zh");
const aiBtn = pQ.$("#topic-body .card[data-qid] .hint-row .btn-ai");
ok(!!aiBtn, "練習題有「問 AI」按鈕");
pQ.$("#topic-body .card[data-qid] .hint-row button").click();     // 先顯示第一步 → 應該出「問 AI」小按鈕
ok(pQ.$$("#topic-body .card[data-qid] .ai-step").length === 1, "每個題解步驟旁有「問 AI」小按鈕");

pQ.$$("#topic-body .card[data-qid] .ai-step")[0].click();         // 聚焦第 1 步的提問
const modal = pQ.$(".prompt-modal");
ok(!!modal, "按「問 AI」會開提問視窗");
const prev = pQ.$(".pm-preview");
const statusEl = pQ.$(".pm-status");        // 關窗後節點仍在，Promise 完成後才驗
const txt = prev ? prev.value : "";
ok(txt.length > 150, "視窗即時生成 prompt（" + txt.length + " 字）");
ok(txt.indexOf(MC0.code) >= 0, "prompt 帶入題號 " + MC0.code);
ok(txt.indexOf("第 1 步") >= 0, "prompt 指明聚焦第 1 步");
ok(/DSE/.test(txt) && /補底老師|考生/.test(txt), "prompt 帶入角色與學生情境");
ok(txt.indexOf("請你這樣做") >= 0, "prompt 有列明要求");

const cb = pQ.$('.pm-opt input[data-opt="simpler"]');
cb.checked = true;
cb.onchange();
ok(pQ.$(".pm-preview").value.indexOf("更淺白") >= 0, "勾選「用更淺白的方式解釋」會加入相應要求");

pQ.$("[data-pm-copy]").click();
ok(pQ.clip() === pQ.$(".pm-preview").value, "按「複製」會把整份 prompt 寫入剪貼簿");
pQ.$(".pm-x").click();
ok(!pQ.$(".prompt-modal"), "按 ✕ 會關閉視窗");

/* 英文模式：同一題要生成英文 prompt */
const pEN = bootLang("topic.html", "?t=" + MC0.topic + "&p=" + firstMcIndex(LESSONS.topics[0]), null, "en");
pEN.$("#topic-body .card[data-qid] .hint-row .btn-ai").click();
const txtEn = pEN.$(".pm-preview").value;
ok(/tutor|HKDSE/.test(txtEn) && /DSE Mathematics candidate/.test(txtEn), "英文模式生成英文 prompt");
ok(!/請你這樣做/.test(txtEn), "英文 prompt 內不含中文字眼");

/* 提示模板本身：中英對稱（新增課題不用改，但改模板要齊）*/
const TPL = JSON.parse(indexJs.slice(indexJs.indexOf("{"), indexJs.lastIndexOf("}") + 1)).promptTemplates;
ok(!!TPL && !!TPL.zh && !!TPL.en, "index.js 已內嵌中英各一份提問模板");
ok(TPL.zh.requirements.length === TPL.en.requirements.length, "中英模板的要求數目一致");
ok(["simpler", "examples", "examTips", "visual", "practice"].every(
   (k) => TPL.zh.options[k] && TPL.en.options[k] && TPL.zh.optionLabels[k] && TPL.en.optionLabels[k]),
   "五個可選項中英齊全（含標籤）");

/* ── 10b. 進階解法／驗算（solution.alt）：MC 與長題共用 ─────────────── */
console.log("\n— 進階解法／驗算（alt）—");
const mcAlt = BANK.filter((q) => q.type === "mc" && q.topic === "ws01b");
ok(mcAlt.length === 27, "ws01b 有 27 題 MC（" + mcAlt.length + "）");
ok(mcAlt.every((q) => (((SOLS[q.id] || {}).solution || {}).alt || []).length >= 1),
   "ws01b 每題 MC 都有至少一條另解／驗算（代入法或展開法）");
ok((((SOLS["eph-ws01b-m12"] || {}).solution || {}).alt || []).length >= 2,
   "m12 有兩條另解（展開法 ＋ 數值代入法）");
ok(/\\frac\{1\}\{3\}/.test((((SOLS["eph-ws01-ex01"] || {}).solution || {}).alt || [{}])[0].zh || ""),
   "ex01 的另解含 Formula 01 求根（$x=\\frac{1}{3}$）");
const altQ = boot("topic.html", "?t=ws01&p=1", null, "zh");
const allBtnA = altQ.$$(".card .btn").filter((b) => /全部顯示/.test(b.textContent))[0];
ok(!!allBtnA, "示範頁有「全部顯示」按鈕");
if (allBtnA) allBtnA.click();
ok(!!altQ.$(".alt-toggle"), "看完示範後出現「進階解法／驗算」按鈕（長題也支援 alt）");
ok(!!altQ.$(".alt-body.hidden"), "另解預設收起");
if (altQ.$(".alt-toggle")) {
  altQ.$(".alt-toggle").click();
  ok(!altQ.$(".alt-body").classList.contains("hidden"), "按一下 → 另解展開");
}

/* ── 11. 版本戳：一定要是「內容 hash」，不可退回小時制 ─────────────────── */
console.log("\n— 版本戳（cache stamp）—");
["index.html", "topic.html", "wrong.html"].forEach((p) => {
  const txt = fs.readFileSync(path.join(root, p), "utf8");
  ok(/window\.__V = "[0-9a-f]{8}"/.test(txt),
     p + " 的 ?v= 由 make_learn_data.py 依內容 hash 寫入");
  ok(!/new Date\(\)\.toISOString\(\)\.slice\(0, 13\)/.test(txt),
     p + " 不再用小時制快取戳（同一小時內再部署會取到舊檔）");
});

/* 剪貼簿是 Promise，最後等一個 microtask 才驗狀態提示，然後才總結 */
setTimeout(() => {
  ok(!!statusEl && /已複製/.test(statusEl.textContent), "複製後顯示狀態提示（剪貼簿完成後）");
  console.log("\n" + (fails ? fails + " test(s) FAILED" : "all DSE Pass smoke tests passed"));
  process.exit(fails ? 1 : 0);
}, 0);
