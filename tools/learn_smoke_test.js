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

/* ── 3. 課題頁：分頁列與概念卡 ────────────────────────────────────────── */
console.log("\n— 課題頁：分頁列 —");
// 每課的頁數：1 張概念卡頁 ＋ 長題示範（≥4 條才收在同一頁）＋ MC 頁
const expectedPages = (t) => t.lessons.reduce(
  (n, l) => n + 1 + (l.longQuestionIds.length >= 4 ? 1 : l.longQuestionIds.length) + l.mcPages.length, 0);
const firstMcIndex = (t) => 1 + (t.lessons[0].longQuestionIds.length >= 4 ? 1 : t.lessons[0].longQuestionIds.length);

for (const t of LESSONS.topics) {
  const p0 = boot("topic.html", "?t=" + t.id + "&p=0");
  ok((p0.$("#topic-name").textContent || "").trim().length > 0,
     t.id + " renders its topic name (" + p0.$("#topic-name").textContent + ")");
  ok(p0.$$("#pagenav .pg").length === expectedPages(t),
     t.id + " nav lists every page (got " + p0.$$("#pagenav .pg").length + ", expected " + expectedPages(t) + ")");
  ok(p0.$$(".ccard-head h3").length === 1, t.id + " shows one concept card at a time");
  ok(p0.$$(".concept-body").length === 1, t.id + " renders the card body");
  ok(p0.$$(".cmd-hints .ch-chip").length >= 4 && p0.$$(".cmd-hints .ch-chip").length <= 6,
     t.id + " keeps 4–6 command-word chips (got " + p0.$$(".cmd-hints .ch-chip").length + ")");

  const mcIdx = firstMcIndex(t);
  const pmc = boot("topic.html", "?t=" + t.id + "&p=" + mcIdx);
  const cards = pmc.$$("#topic-body .card[data-qid]");
  ok(cards.length === 3, t.id + " first MC page holds 3 questions (got " + cards.length + ")");
  ok(pmc.$$("#topic-body .opt").length === 12, t.id + " MC page has 3 × 4 options (got " + pmc.$$("#topic-body .opt").length + ")");
  ok(pmc.$$("#topic-body .hint-row").length === 3, t.id + " every question offers hints before answering");
}

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
  ok(tc.$$(".formula-multi .formula-line").length === want,
     "the long formula renders on " + want + " lines (got " + tc.$$(".formula-multi .formula-line").length + ")");
  ok(tc.$$(".formula-multi .katex").length === want,
     "every line is typeset by KaTeX (got " + tc.$$(".formula-multi .katex").length + ")");
  ok(tc.$$(".formula-line[data-tex]").length === want,
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

console.log("\n" + (fails ? fails + " test(s) FAILED" : "all DSE Pass smoke tests passed"));
process.exit(fails ? 1 : 0);
