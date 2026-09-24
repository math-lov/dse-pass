/* LaTeX 體檢：用真正的 KaTeX 逐條解析所有數學式
 * 用法： node tools/katex_check.js
 * 覆蓋：題幹 / 四個選項 / 解答每一步的 math 與 highlight /
 *       步驟說明、常見錯誤、技巧文字裡的 $...$ 行內數學
 * 任何一條解析失敗 → 非 0 退出（CI 會檔住）
 */
const fs = require("fs");
const path = require("path");
const katex = require("katex");

const root = path.join(__dirname, "..");
const bank = JSON.parse(fs.readFileSync(path.join(root, "data", "bank.json"), "utf8"));
const solutions = JSON.parse(fs.readFileSync(path.join(root, "data", "solutions.json"), "utf8")).solutions || {};

let errors = 0;
let checked = 0;

/* 剝掉外圍數學分隔符（$...$、\(...\)、\[...\]）—— 轉寫偶爾會多包一層 */
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

/* 解碼 HTML 實體 —— stem.html 裡的 $...$ 片段是「已跳脫」的字串
 * （< → &lt;），瀏覽器渲染時會先解碼再交給 KaTeX，檢查器要比照。 */
function decodeEntities(s) {
  return String(s)
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
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

/* 選項／文字欄位：含 $ 時只驗 $...$ 片段（與學生端的行內渲染一致）；否則整串當純 LaTeX */
function checkField(v, where) {
  if (!v) return;
  if (v.indexOf("$") >= 0) {
    inlineTex(v).forEach((t, i) => check(decodeEntities(t), `${where} [${i + 1}]`));
  } else {
    check(stripDelims(v), where);
  }
}

/* 從編輯文字中抽出所有 $...$ 片段。
 * 注意：\$（如錢幣 \$46\,000）是跳脫的錢幣符號，不是分隔符 → 先換成佔位再計數。 */
function inlineTex(s) {
  const out = [];
  const bare = String(s).replace(/\\\$/g, "\u0001");
  const re = /\$([^$]+)\$/g;
  let m;
  while ((m = re.exec(bare)) !== null) out.push(m[1]);
  const odd = (bare.match(/\$/g) || []).length % 2;
  if (odd) {
    console.log("[ERROR] unbalanced $ delimiters: " + s);
    errors++;
  }
  return out;
}
function checkText(obj, where, keys) {
  keys.forEach((k) => {
    if (obj && obj[k]) inlineTex(obj[k]).forEach((t, i) => check(t, `${where} ${k}[${i + 1}]`));
  });
}

// ── 題庫 ──
bank.questions.forEach((q) => {
  check(q.stem.latex, `${q.id} · stem`);
  ["A", "B", "C", "D"].forEach((L) => checkField(q.options[L], `${q.id} · option ${L}`));
  // 文字題幹裡的 $...$ 行內數學也要驗（自動偵測若把 \text{ cm} 之類切斷就會在這裡被抓到）。
  // 片段來自已跳脫的 HTML → 先解碼實體再驗（瀏覽器就是這樣做的）。
  if (q.stem && q.stem.html) {
    inlineTex(q.stem.html).forEach((t, i) => check(decodeEntities(t), `${q.id} · stem.html[${i + 1}]`));
  }
});

// ── 解答 ──
Object.keys(solutions).forEach((qid) => {
  const s = solutions[qid];
  const sol = s.solution || {};
  (sol.steps || []).forEach((st, i) => {
    const tag = `${qid} · step ${i + 1}`;
    check(st.math, tag + " math");
    (st.highlight || []).forEach((h, j) => check(h, `${tag} highlight[${j + 1}]`));
    checkText(st, tag + " note", ["en", "zh"]);
    if (st.title) checkText(st.title, tag + " title", ["en", "zh"]);
  });
  (sol.traps || []).forEach((t) => checkText(t, `${qid} · trap ${t.opt}`, ["en", "zh"]));
  if (sol.tip) checkText(sol.tip, `${qid} · tip`, ["en", "zh"]);
  if (!["A", "B", "C", "D"].includes(s.answer)) {
    console.log(`[ERROR] ${qid} · invalid answer ${s.answer}`);
    errors++;
  }
});

console.log(`checked ${checked} LaTeX fragment(s) across ${bank.questions.length} questions and ${Object.keys(solutions).length} solutions`);
console.log(errors ? `${errors} LaTeX problem(s)` : "all LaTeX renders cleanly");
process.exit(errors ? 1 : 0);
