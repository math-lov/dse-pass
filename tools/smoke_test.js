/* 真實 DOM 冒煙測試（jsdom）：模擬學生完整流程
 * 用法： node tools/smoke_test.js
 *
 * 覆蓋：
 *   1. 頁面能渲染當日批次（3 張題卡、每題 4 個選項）
 *   2. 點選選項 → 立即判定對錯 + 顯示回饋
 *   3. 有解答的題目 → 可展開逐步解答（steps / traps / tip / answer）
 *   4. 無解答的題目 → 顯示待更新，且不會誤判對錯
 *   5. 進度（作答數 / 正確率 / 錯題本 / 存檔）正確寫入與呈現
 *   6. 語言切換會改變解答文字
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { JSDOM } = require("jsdom");

const root = path.join(__dirname, "..");
const site = path.join(root, "site");
// 本機預覽資料（含未發放題目）：python tools/make_site_data.py --all --out build/preview
const previewDir = path.join(root, "build", "preview", "data");
const hasPreview = fs.existsSync(path.join(previewDir, "bank.js"));
let fails = 0;
const ok = (cond, label) => { console.log((cond ? "  PASS  " : "  FAIL  ") + label); if (!cond) fails++; };

const html = fs.readFileSync(path.join(site, "index.html"), "utf8");
const dom = new JSDOM(html, { url: "https://example.test/", pretendToBeVisual: true, runScripts: "outside-only" });
const ctx = dom.getInternalVMContext();

// KaTeX 用樁替換（避免測試依賴 CDN）
ctx.window.katex = { render: (src, el) => { el.textContent = src; } };
ctx.window.renderMathInElement = () => {};
// 固定「今天」為首批日期，確保測到第一天的批次
const RealDate = ctx.window.Date;
ctx.window.Date = class extends RealDate {
  constructor(...a) { if (a.length) return new RealDate(...a); return new RealDate("2026-09-16T09:00:00"); }
  static now() { return new RealDate("2026-09-16T09:00:00").getTime(); }
};

["bank", "solutions", "releases", "app"].forEach((n) => {
  const p = n === "app" ? path.join(site, "assets", "app.js") : path.join(site, "data", n + ".js");
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: n + ".js" });
});
const doc = ctx.document;
const $ = (s) => doc.querySelector(s);
const $$ = (s) => Array.prototype.slice.call(doc.querySelectorAll(s));

console.log("\n— 批次渲染 —");
const cards = $$(".q-card");
ok(cards.length === 3, "renders 3 question cards");
ok($("#batchTitle").textContent.length > 0, "batch title rendered");
ok($("#batchDate").textContent === "2026-09-16", "batch date is 2026-09-16");

console.log("\n— 題目內容 —");
ok($$(".q-card .q-no").length === 3, "each card has a question badge");
const badgeTxt = cards[0].querySelector(".q-no").textContent.trim();
ok(/^\d{2}-P\d+Q\d{2}$/.test(badgeTxt), "question badge shows the paper code, e.g. 25-P2Q03 (got " + badgeTxt + ")");
ok($$(".q-card img.q-img").length === 3, "each card shows the question image");
const firstOptCount = cards[0].querySelectorAll(".opt").length;
ok(firstOptCount === 4, "first question has 4 options (got " + firstOptCount + ")");
const stemTex = cards[0].querySelector(".q-stem");
ok(stemTex && /27x/.test(stemTex.textContent), "stem LaTeX rendered on card 1");
ok($$(".q-card .chip-time").length === 3, "every card shows the suggested time");
ok($$(".q-card .stars").length === 3, "every card shows a difficulty rating");
ok($$(".q-card .chip-topic").length === 3, "every card shows its learning unit");
ok($$(".q-card details.fig-note").length >= 1 && $$(".q-card details.fig-note[open]").length === 0,
  "figure description stays collapsed (batch 1 has a chart question)");

console.log("\n— 作答：正確路徑 (Q1, answer C) —");
const q1opts = cards[0].querySelectorAll(".opt");
q1opts[2].click(); // C
ok(cards[0].querySelector(".feedback").classList.contains("ok"), "correct pick shows positive feedback");
ok(q1opts[2].classList.contains("correct"), "chosen correct option is highlighted");
ok(Array.prototype.every.call(q1opts, (o) => o.disabled), "options lock after answering");
const solBtn = Array.prototype.filter.call(cards[0].querySelectorAll(".q-actions .btn"), (b) => /solution/i.test(b.textContent))[0];
ok(!!solBtn, "a 'see solution' button appears");
solBtn.click();
ok(cards[0].querySelector(".sol").classList.contains("open"), "solution panel opens");
ok(cards[0].querySelectorAll(".steps .step").length >= 3, "solution has multiple steps");
ok(!!cards[0].querySelector(".traps li"), "common-mistake (traps) list rendered");
ok(!!cards[0].querySelector(".tip p"), "tip rendered");
ok(/C/.test(cards[0].querySelector(".answer-line").textContent), "answer line states the answer");

console.log("\n— 作答：錯誤路徑 (Q2, answer C, choose A) —");
const q2opts = cards[1].querySelectorAll(".opt");
q2opts[0].click(); // A
ok(cards[1].querySelector(".feedback").classList.contains("no"), "wrong pick shows corrective feedback");
ok(q2opts[0].classList.contains("wrong"), "wrong choice marked");
ok(cards[1].querySelectorAll(".opt.correct").length === 1, "correct option revealed after a wrong answer");

console.log("\n— 進度與錯題本 —");
ok($("#stAttempts").textContent === "2", "attempt counter = 2 (got " + $("#stAttempts").textContent + ")");
ok($("#stCorrect").textContent === "1", "correct counter = 1");
ok($("#stAccuracy").textContent === "50%", "accuracy = 50% (got " + $("#stAccuracy").textContent + ")");
ok($("#wrongCount").textContent === "1", "review list has 1 item");
ok(/Indices|Algebra|Statistics|Coordinate|Geometry|Mensuration/i.test($("#wrongList").textContent) || $("#wrongList").textContent.length > 5, "review item shows topic info");
ok($$("#topicStats .topic-row").length >= 1, "per-topic stats rendered");

console.log("\n— 存檔導航 —");
const nReleases = (ctx.window.RELEASES || {}).releases.length;
ok($$("#archive a").length === nReleases, `archive lists every batch (${nReleases})`);
ok(!!$("#archive a.now"), "current batch is highlighted");

console.log("\n— 語言切換 —");
const before = cards[0].querySelector(".step .s-note").textContent;
$("#langBtn").click();
const cardsAfter = $$(".q-card");
const after = cardsAfter[0].querySelector(".step .s-note").textContent;
const afterTitle = cardsAfter[0].querySelector(".step .s-title").textContent;
const hasCJK = (s) => /[\u4e00-\u9fff]/.test(s);
ok(before !== after, "switching language changes the solution text");
ok(!hasCJK(after) && !hasCJK(afterTitle), "EN mode shows English-only solution text (got: " + after.slice(0, 45) + ")");
ok(/Step 1/.test(afterTitle), "step titles are localised too (got: " + afterTitle + ")");
ok(cardsAfter[0].querySelector(".feedback").classList.contains("ok"), "attempt state survives re-render");

/* Helper: boot a jsdom on a given batch with real KaTeX, optionally removing one solution
 * (so the "solution not released yet" path can be tested no matter what the data holds).
 * dataDirOverride: 用本機預覽資料（build/preview，含未發放題目）跑排版檢查。 */
function boot(url, stripQid, dataDirOverride) {
  const dataDir = dataDirOverride || path.join(site, "data");
  const dom = new JSDOM(html, { url, pretendToBeVisual: true, runScripts: "outside-only" });
  const c = dom.getInternalVMContext();
  vm.runInContext(fs.readFileSync(path.join(site, "vendor", "katex", "katex.min.js"), "utf8"), c, { filename: "katex.min.js" });
  vm.runInContext(fs.readFileSync(path.join(site, "vendor", "katex", "auto-render.min.js"), "utf8"), c, { filename: "auto-render.min.js" });
  ["bank", "solutions"].forEach((n) => {
    vm.runInContext(fs.readFileSync(path.join(dataDir, n + ".js"), "utf8"), c, { filename: n + ".js" });
  });
  if (stripQid && c.window.SOLUTIONS && c.window.SOLUTIONS.solutions) {
    delete c.window.SOLUTIONS.solutions[stripQid];
  }
  ["releases"].forEach((n) => {
    vm.runInContext(fs.readFileSync(path.join(dataDir, n + ".js"), "utf8"), c, { filename: n + ".js" });
  });
  vm.runInContext(fs.readFileSync(path.join(site, "assets", "app.js"), "utf8"), c, { filename: "app.js" });
  return {
    ctx: c, doc: dom.window.document,
    cards: Array.prototype.slice.call(dom.window.document.querySelectorAll(".q-card")),
    $$: (s) => Array.prototype.slice.call(dom.window.document.querySelectorAll(s)),
    card: (qid) => Array.prototype.slice.call(dom.window.document.querySelectorAll('.q-card[data-qid="' + qid + '"]'))[0],
  };
}

console.log("\n— 題幹排版（batch 2 全是文字題）—");
const b2 = boot("https://example.test/?batch=2");
ok(b2.$$(".q-card .q-stem-text").length === 3, "each card shows the wording block");
ok(b2.cards.every((c) => !c.querySelector(".q-stem")), "no duplicated display formula above the wording");

console.log("\n— 行內數學：整條公式一次 KaTeX 渲染 —");
if (hasPreview) {
  const b4 = boot("https://example.test/?batch=4", null, previewDir);
  const q5Card = b4.card("2025-p2-q05");
  ok(!!q5Card, "preview data: batch 4 shows Q5");
  const q5Tex = q5Card && q5Card.querySelector(".q-stem-text");
  const runs = q5Tex ? q5Tex.querySelectorAll(".katex").length : -1;
  ok(runs === 1, "the whole formula renders as a single KaTeX run (got " + runs + ")");
  ok(!!q5Tex && /x2\+4x=k2/.test(q5Tex.textContent.replace(/\s/g, "")),
    "the formula sits inline in the wording");
} else {
  console.log("  SKIP  build/preview 不存在 → 先跑 python tools/make_site_data.py --all --out build/preview");
}

console.log("\n— 未發佈解答的題目 —");
// Strip one solution so this path is always exercised, whatever the current data contains.
const b2p = boot("https://example.test/?batch=2", "2025-p2-q06");
const pendingCard = b2p.card("2025-p2-q06");
ok(!!pendingCard, "found the question whose solution was withheld");
pendingCard.querySelectorAll(".opt")[0].click();
const fb = pendingCard.querySelector(".feedback");
ok(fb.classList.contains("pending"), "question without a solution shows a 'pending' state (not wrong)");
ok(!pendingCard.querySelector(".opt.correct"), "no answer is revealed when none is released");
ok(!pendingCard.querySelector(".sol.open"), "solution stays closed when not available");

console.log("\n" + (fails ? `${fails} test(s) FAILED` : "all smoke tests passed"));
process.exit(fails ? 1 : 0);
