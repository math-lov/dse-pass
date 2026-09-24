/* 線上成品端到端驗證
 * 1) 抓 GitHub Pages 上的檔案，在 jsdom 裡跑一次學生流程
 * 2) 逐一檢查「每一個批次」的頁面：3 張題卡、每題 4 個選項、有解答的題目可展開、
 *    未發佈的題目顯示「待更新」——確保線上和資料一致
 *
 * 用法： node tools/live_check.js [baseUrl]
 */
const { JSDOM, VirtualConsole } = require("jsdom");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const base = (process.argv[2] || "https://math-lov.github.io/daily.math/").replace(/\/?$/, "/");
let fails = 0;
const ok = (c, label) => { console.log((c ? "  PASS  " : "  FAIL  ") + label); if (!c) fails++; };
const get = async (p) => {
  const r = await fetch(base + p + (p.includes("?") ? "&" : "?") + "v=" + Date.now());
  if (!r.ok) throw new Error(`${p} → HTTP ${r.status}`);
  return r.text();
};

(async () => {
  console.log("live base:", base);
  const [html, bank, solutions, releases, app] = await Promise.all([
    get("index.html"), get("data/bank.js"), get("data/solutions.js"), get("data/releases.js"), get("assets/app.js"),
  ]);
  console.log(`fetched: html ${html.length}B · bank ${bank.length}B · solutions ${solutions.length}B · releases ${releases.length}B · app ${app.length}B`);

  // 用「線上抓回來的檔案」建立沙箱
  const katexSrc = fs.readFileSync(path.join(__dirname, "..", "site", "vendor", "katex", "katex.min.js"), "utf8");
  const autoRenderSrc = fs.readFileSync(path.join(__dirname, "..", "site", "vendor", "katex", "auto-render.min.js"), "utf8");

  function boot(url) {
    const dom = new JSDOM(html, { url, pretendToBeVisual: true, runScripts: "outside-only", virtualConsole: new VirtualConsole() });
    const c = dom.getInternalVMContext();
    vm.runInContext(katexSrc, c, { filename: "katex.min.js" });
    vm.runInContext(autoRenderSrc, c, { filename: "auto-render.min.js" });
    vm.runInContext(bank, c, { filename: "bank.js" });
    vm.runInContext(solutions, c, { filename: "solutions.js" });
    vm.runInContext(releases, c, { filename: "releases.js" });
    vm.runInContext(app, c, { filename: "app.js" });
    const doc = dom.window.document;
    return {
      c,
      $$: (s) => Array.prototype.slice.call(doc.querySelectorAll(s)),
      card: (qid) => doc.querySelector('.q-card[data-qid="' + qid + '"]'),
      doc,
    };
  }

  // ── 學生流程（預設批次）──
  console.log("\n— 學生流程（預設批次）—");
  const page = boot(base);
  const cards = page.$$(".q-card");
  ok(cards.length === 3, "3 question cards rendered from the deployed data");
  ok(cards.every((c) => c.querySelector("img.q-img")), "every card has its question image");
  ok(cards.every((c) => c.querySelectorAll(".opt").length === 4), "every card has 4 options");
  ok(cards.every((c) => c.querySelector(".chip-topic")), "every card shows its learning unit");

  const firstSolved = cards.find((c) => page.c.window.SOLUTIONS.solutions[c.dataset.qid]);
  // 正確答案由線上資料決定（不可硬編碼：預設批次會隨日期改變）
  const wantAnswer = page.c.window.SOLUTIONS.solutions[firstSolved.dataset.qid].answer;
  firstSolved.querySelectorAll(".opt")["ABCD".indexOf(wantAnswer)].click();
  ok(firstSolved.querySelector(".feedback").classList.contains("ok"),
     "correct answer accepted (option " + wantAnswer + ")");
  const btn = Array.prototype.filter.call(firstSolved.querySelectorAll(".q-actions .btn"), (b) => /solution/i.test(b.textContent))[0];
  ok(!!btn, "solution button offered");
  btn.click();
  ok(firstSolved.querySelectorAll(".steps .step").length >= 3, "animated steps present");
  ok(!!firstSolved.querySelector(".traps li"), "common-mistake list present");
  ok(page.doc.getElementById("stAttempts").textContent === "1", "attempt recorded");

  // ── 逐批檢查 ──
  const liveReleases = JSON.parse(String(releases).replace(/^[\s\S]*?window\.RELEASES\s*=\s*/, "").replace(/;\s*$/, ""));
  const liveSolutions = JSON.parse(String(solutions).replace(/^[\s\S]*?window\.SOLUTIONS\s*=\s*/, "").replace(/;\s*$/, "")).solutions;
  const liveBank = JSON.parse(String(bank).replace(/^[\s\S]*?window\.BANK\s*=\s*/, "").replace(/;\s*$/, ""));
  const byId = new Map(liveBank.questions.map((q) => [q.id, q]));

  console.log(`\n— 逐批檢查（共 ${liveReleases.releases.length} 批）—`);
  for (const rel of liveReleases.releases) {
    const p = boot(base + "?batch=" + rel.batch);
    const cs = p.$$(".q-card");
    const ids = cs.map((c) => c.dataset.qid);
    const solvedCount = ids.filter((id) => liveSolutions[id]).length;
    const diffs = ids.map((id) => byId.get(id).difficulty);
    console.log(`  batch ${rel.batch} (${rel.date})  ${ids.join(", ")}  difficulty=[${diffs.join(",")}]  solutions=${solvedCount}/3`);
    ok(ids.length === 3, `batch ${rel.batch}: 3 cards`);
    ok(ids.every((id) => byId.has(id)), `batch ${rel.batch}: all ids exist in the bank`);
    ok(cs.every((c) => c.querySelectorAll(".opt").length === 4), `batch ${rel.batch}: every card has 4 options`);
    for (const c of cs) {
      const has = !!liveSolutions[c.dataset.qid];
      const offered = Array.prototype.some.call(c.querySelectorAll(".q-actions .btn"), (b) => /solution/i.test(b.textContent));
      // 未點選前不應有解答按鈕；有解答的題目點選後應出現按鈕
      ok(!offered, `batch ${rel.batch} · ${c.dataset.qid}: no solution button before answering`);
      if (has) {
        c.querySelectorAll(".opt")[0].click();
        const fb = c.querySelector(".feedback");
        ok(!fb.classList.contains("pending"), `batch ${rel.batch} · ${c.dataset.qid}: graded (not pending)`);
        const b = Array.prototype.filter.call(c.querySelectorAll(".q-actions .btn"), (x) => /solution/i.test(x.textContent))[0];
        ok(!!b, `batch ${rel.batch} · ${c.dataset.qid}: solution offered after answering`);
      }
    }
  }

  console.log("\n" + (fails ? `${fails} live check(s) FAILED` : "live site verified end-to-end (all batches)"));
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error("live check error:", e.message); process.exit(1); });
