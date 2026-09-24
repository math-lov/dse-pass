/* 自學追上站 LaTeX 體檢：用真正的 KaTeX 逐條解析所有數學式
 * 用法： node tools/learn_katex_check.js
 * 覆蓋：data/learn/bank.json、concepts.json、solutions.json
 *       （題幹、選項、parts、概念卡 math 與內文 $...$、每步 math／why、traps、tip）
 * 任何一條解析失敗 → 非 0 退出（發佈閘門會擋住）
 *
 * 這支是 tools/katex_check.js 的 learn 版（每日站的檢查器不動）。
 */
const fs = require("fs");
const path = require("path");
const katex = require("katex");

const root = path.join(__dirname, "..");
const dataDir = path.join(root, "data", "learn");
const bank = JSON.parse(fs.readFileSync(path.join(dataDir, "bank.json"), "utf8"));
const concepts = JSON.parse(fs.readFileSync(path.join(dataDir, "concepts.json"), "utf8"));
const solutions = JSON.parse(fs.readFileSync(path.join(dataDir, "solutions.json"), "utf8")).solutions || {};

let errors = 0;
let checked = 0;

/* 剝掉外圍數學分隔符（$...$、\(...\)、\[...\]） */
function stripDelims(t) {
  const s = String(t == null ? "" : t).trim();
  const pairs = [["$", "$"], ["\\(", "\\)"], ["\\[", "\\]"]];
  for (const [a, b] of pairs) {
    if (s.length > a.length + b.length - 1 && s.startsWith(a) && s.endsWith(b)) {
      return s.slice(a.length, s.length - b.length).trim();
    }
  }
  return s;
}

function check(tex, where) {
  if (!tex) return;
  checked++;
  try {
    katex.renderToString(stripDelims(tex), { throwOnError: true, strict: false, displayMode: false });
  } catch (e) {
    console.log("[ERROR] " + where);
    console.log("        source: " + tex);
    console.log("        reason: " + String(e.message).split("\n")[0]);
    errors++;
  }
}

/* 從文字中抽出 $...$ 片段；\$ 是跳脫的錢幣符號，先換成佔位再計數 */
function inlineTex(s, where) {
  const out = [];
  const bare = String(s == null ? "" : s).replace(/\\\$/g, "\u0001");
  const re = /\$([^$]+)\$/g;
  let m;
  while ((m = re.exec(bare)) !== null) out.push(m[1]);
  if ((bare.match(/\$/g) || []).length % 2) {
    console.log("[ERROR] unbalanced $ delimiters: " + where + " → " + s);
    errors++;
  }
  return out;
}

/* 純文字欄位（無 $ 又無任何 LaTeX 特徵）不要當成數學渲染 ——
   否則中文解說／①② 之類會被丟進 KaTeX，產生一堆無意義的
   「No character metrics for '①'」警告。真正的數學欄位（math、highlight）
   仍然一定會被檢查，所以不會漏。 */
const TEX_HINT = /[\\^_{}]/;
/* 一個欄位：含 $ 只驗 $...$ 片段；否則有 LaTeX 特徵才整串當 LaTeX */
function checkField(v, where) {
  if (!v) return;
  const s = String(v);
  if (s.indexOf("$") >= 0) { inlineTex(s, where).forEach((t, i) => check(t, `${where} [${i + 1}]`)); return; }
  if (!TEX_HINT.test(s)) return;          // 純文字（中文解說、標題）→ 不是數學
  check(stripDelims(s), where);
}

// ── 題庫 ──
bank.questions.forEach((q) => {
  checkField(q.stem && q.stem.text, `${q.id} · stem`);
  ["A", "B", "C", "D"].forEach((L) => {
    if (q.options && q.options[L]) checkField(q.options[L], `${q.id} · option ${L}`);
  });
  (q.parts || []).forEach((p, i) => checkField(p.text, `${q.id} · part ${i + 1}`));
});

// ── 概念卡 ──
(concepts.cards || []).forEach((c) => {
  (c.math || []).forEach((t, i) => check(t, `${c.id} · math[${i + 1}]`));
  if (c.title) checkField(c.title.zh || c.title.en, `${c.id} · title`);
  if (c.body) checkField(c.body.zh, `${c.id} · body.zh`);
  if (c.warn) checkField(c.warn.zh, `${c.id} · warn.zh`);
});

// ── 題解 ──
Object.keys(solutions).forEach((qid) => {
  const s = solutions[qid];
  const sol = s.solution || {};
  (sol.steps || []).forEach((st, i) => {
    const tag = `${qid} · step ${i + 1}`;
    check(st.math, tag + " math");
    (st.highlight || []).forEach((h, j) => check(h, `${tag} highlight[${j + 1}]`));
    checkField(st.zh, tag + " zh");
    if (st.title) checkField(st.title.zh || st.title.en, tag + " title");
  });
  (sol.traps || []).forEach((t) => checkField(t.zh, `${qid} · trap ${t.opt}`));
  if (sol.tip) checkField(sol.tip.zh, `${qid} · tip.zh`);
  const q = bank.questions.find((x) => x.id === qid);
  const isMc = q && q.type === "mc";
  if (isMc && !["A", "B", "C", "D"].includes(s.answer)) {
    console.log(`[ERROR] ${qid} · invalid answer ${s.answer}`);
    errors++;
  }
});

console.log(`checked ${checked} LaTeX fragment(s) across ${bank.questions.length} questions, ` +
            `${(concepts.cards || []).length} concept cards and ${Object.keys(solutions).length} solutions`);
console.log(errors ? `${errors} LaTeX problem(s)` : "all LaTeX renders cleanly");
process.exit(errors ? 1 : 0);
