/* 站點自檢：語法檢查 + 資料一致性 + 圖片完整性
 * 用法： node tools/site_check.js
 * 會檢查：
 *   1. site/assets/app.js 語法（vm.Script，不執行）
 *   2. window.BANK / SOLUTIONS / RELEASES 能否載入
 *   3. solutions 的 id 都在題庫、answer 都在四個選項內
 *   4. releases 的 id 都存在、每批題數
 *   5. 每題圖片檔是否存在
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const site = path.join(root, "site");
let errors = 0;
let warnings = 0;
const err = (m) => { console.log("[ERROR] " + m); errors++; };
const warn = (m) => { console.log("[warn] " + m); warnings++; };

// 1) app.js 語法
const appCode = fs.readFileSync(path.join(site, "assets", "app.js"), "utf8");
try {
  new vm.Script(appCode, { filename: "app.js" });
  console.log("app.js syntax: OK");
} catch (e) {
  err("app.js syntax: " + e.message);
}

// 2) 載入資料檔
const sandbox = { window: {} };
vm.createContext(sandbox);
["bank", "solutions", "releases"].forEach((n) => {
  const p = path.join(site, "data", n + ".js");
  if (!fs.existsSync(p)) { err("missing site/data/" + n + ".js"); return; }
  try {
    vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: n + ".js" });
  } catch (e) {
    err("cannot load " + n + ".js: " + e.message);
  }
});
const BANK = sandbox.window.BANK;
const SOLUTIONS = (sandbox.window.SOLUTIONS || {}).solutions || {};
const RELEASES = (sandbox.window.RELEASES || {}).releases || [];
if (!BANK) { err("window.BANK missing"); process.exit(1); }

const byId = new Map(BANK.questions.map((q) => [q.id, q]));
console.log(`bank: ${BANK.questions.length} questions · solutions: ${Object.keys(SOLUTIONS).length} · releases: ${RELEASES.length}`);

// 3) 解答
for (const [qid, s] of Object.entries(SOLUTIONS)) {
  const q = byId.get(qid);
  if (!q) { err(`${qid}: solution for unknown question`); continue; }
  if (!["A", "B", "C", "D"].includes(s.answer)) err(`${qid}: invalid answer ${s.answer}`);
  if (!q.options[s.answer]) err(`${qid}: answer ${s.answer} has no option text`);
  const steps = (s.solution || {}).steps || [];
  if (!steps.length) err(`${qid}: no solution steps`);
  steps.forEach((st, i) => {
    if (!st.math) err(`${qid} step ${i + 1}: missing math`);
    if (!st.en || !st.zh) warn(`${qid} step ${i + 1}: not fully bilingual`);
  });
  if (!((s.solution || {}).tip || {}).en) warn(`${qid}: missing tip`);
  if (!((s.solution || {}).traps || []).length) warn(`${qid}: no traps listed`);
}

// 4) 排程（公開檔只含已發放且未收回的題目；已收回的批次仍保留條目，供 Archive 顯示）
const seen = new Set();
let liveQ = 0, heldQ = 0;
for (const r of RELEASES) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date || "")) err(`release ${r.batch}: bad date`);
  if (seen.has(r.date)) warn(`duplicate release date ${r.date}`);
  seen.add(r.date);

  const status = r.status || "published";
  const held = new Set(r.withdrawnIds || []);

  if (status === "withdrawn") {
    // 整批收回：題目與解答已不在公開檔，只確認條目還在（Archive 才有佔位可顯示）
    if (!(r.ids || []).length) warn(`release ${r.date}: withdrawn but has no ids`);
    heldQ += (r.ids || []).length;
    continue;
  }

  const live = (r.ids || []).filter((qid) => !held.has(qid));
  liveQ += live.length;
  heldQ += held.size;
  if (live.length !== 3) warn(`release ${r.date}: ${live.length} question(s) live (expected 3)`);
  if (held.size) console.log(`[info] release ${r.date}: ${held.size} question(s) withdrawn → ${[...held].join(", ")}`);

  const diffs = new Set();
  for (const qid of live) {
    const q = byId.get(qid);
    if (!q) { err(`release ${r.date}: unknown id ${qid} (should be in the published bank)`); continue; }
    diffs.add(q.difficulty);
    if (!SOLUTIONS[qid]) warn(`release ${r.date}: ${qid} has no solution yet`);
  }
  // An all-medium day is fine; an all-easy or all-hard day is not (students get either a
  // trivial set or a demoralising one). Mixed is still preferred.
  if (diffs.size === 1 && (diffs.has(1) || diffs.has(3))) {
    warn(`release ${r.date}: every question is difficulty ${[...diffs][0]} — mix them or move some`);
  }
}
console.log(`released questions: ${liveQ} live · ${heldQ} withdrawn`);

// 4b) 發布邊界：公開檔不應含有未發放的題目（以 releases 為準交叉核對）
const releasedIds = new Set();
for (const r of RELEASES) {
  if ((r.status || "published") === "withdrawn") continue;
  for (const qid of r.ids || []) if (!(r.withdrawnIds || []).includes(qid)) releasedIds.add(qid);
}
for (const q of BANK.questions) {
  if (!releasedIds.has(q.id)) err(`${q.id}: question is in the public bank but not released`);
}
for (const qid of Object.keys(SOLUTIONS)) {
  if (!releasedIds.has(qid)) err(`${qid}: solution is public but the question is not released`);
}

// 5) 圖片
let imgs = 0;
for (const q of BANK.questions) {
  for (const rel of q.images || []) {
    const p = path.join(site, rel);
    if (!fs.existsSync(p)) err(`${q.id}: missing image ${rel}`);
    else imgs++;
  }
}
console.log(`images: ${imgs} files present`);

// 6) 已發放題目統計（公開檔只含已發放內容；完整題庫統計見 make_site_data.py 的輸出）
const pool = BANK.questions.filter((q) => SOLUTIONS[q.id]);
const byDiff = { 1: 0, 2: 0, 3: 0 };
pool.forEach((q) => byDiff[q.difficulty]++);
console.log(`released questions with solutions: easy ${byDiff[1]} / medium ${byDiff[2]} / hard ${byDiff[3]}`);

console.log(`\nresult: ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
