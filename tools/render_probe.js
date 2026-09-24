/* 渲染探針：用「真正的」KaTeX + auto-render 在 jsdom 裡跑一次頁面，
 * 把題幹文字區（.q-text / .q-stem）的實際 DOM 打出來，用來診斷
 * 「同一頁出現兩種數學字體」這類渲染問題。
 *
 * 用法： node tools/render_probe.js [batch] [--full]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { JSDOM } = require("jsdom");

const root = path.join(__dirname, "..");
const site = path.join(root, "site");
const batch = process.argv.find((a) => /^\d+$/.test(a)) || "2";
const full = process.argv.includes("--full");

const html = fs.readFileSync(path.join(site, "index.html"), "utf8");
const dom = new JSDOM(html, { url: `https://example.test/?batch=${batch}`, pretendToBeVisual: true, runScripts: "outside-only" });
const ctx = dom.getInternalVMContext();

// 真 KaTeX（自託管的那兩個檔案）
vm.runInContext(fs.readFileSync(path.join(site, "vendor", "katex", "katex.min.js"), "utf8"), ctx, { filename: "katex.min.js" });
vm.runInContext(fs.readFileSync(path.join(site, "vendor", "katex", "auto-render.min.js"), "utf8"), ctx, { filename: "auto-render.min.js" });
console.log("katex loaded:", typeof ctx.window.katex, "| auto-render:", typeof ctx.window.renderMathInElement);

// 資料 + 應用
["bank", "solutions", "releases", "assets/app"].forEach((n) => {
  const p = n === "assets/app" ? path.join(site, "assets", "app.js") : path.join(site, "data", n + ".js");
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: n + ".js" });
});

const doc = ctx.document;
const cards = Array.prototype.slice.call(doc.querySelectorAll(".q-card"));
console.log(`\nbatch ${batch}: ${cards.length} cards\n`);

cards.forEach((card, i) => {
  const stem = card.querySelector(".q-stem");
  const text = card.querySelector(".q-text");
  console.log(`=== card ${i + 1} (${card.querySelector(".q-no").textContent}) ===`);
  [["stem", stem], ["text", text]].forEach(([tag, el]) => {
    if (!el) return;
    const h = el.innerHTML;
    const nKatex = el.querySelectorAll(".katex").length;
    const nMathml = el.querySelectorAll("math").length;
    const rawTex = /\{[^}]*\}|\^|\\[a-zA-Z]+/.test(el.textContent.replace(/\s/g, " "));
    console.log(`  [${tag}] katex spans=${nKatex} mathml=${nMathml} leftover-TeX-in-text=${rawTex}`);
    console.log(`         textContent: ${el.textContent.slice(0, 110)}`);
    if (full) console.log("         html: " + h.slice(0, 600).replace(/\s+/g, " "));
  });
});

// 也檢查題目圖片與選項
const opts = cards[0].querySelectorAll(".opt");
console.log(`\ncard 1 options: ${opts.length}, katex-rendered: ${cards[0].querySelectorAll(".opt .katex").length}`);
