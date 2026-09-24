/* 診斷：用真實 KaTeX + auto-render 在 jsdom 裡重現學生端渲染結果
 * 用法：node tools/_diag_render.js [題號]
 */
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const root = path.join(__dirname, "..");
const no = parseInt(process.argv[2] || "3", 10);
const bank = JSON.parse(fs.readFileSync(path.join(root, "data", "bank.json"), "utf8"));
const q = bank.questions.find((x) => x.no === no);

const katexSrc = fs.readFileSync(path.join(root, "site", "vendor", "katex", "katex.min.js"), "utf8");
const autoSrc = fs.readFileSync(path.join(root, "site", "vendor", "katex", "auto-render.min.js"), "utf8");

const dom = new JSDOM("<!DOCTYPE html><body><div id='t'></div></body>", { runScripts: "dangerously" });
dom.window.eval(katexSrc);
dom.window.eval(autoSrc);

const t = dom.window.document.getElementById("t");
t.innerHTML = q.stem.html || "";
console.log("stem.html     :", q.stem.html);
console.log("DOM 文字（未渲染前）:", JSON.stringify(t.textContent));

dom.window.renderMathInElement(t, {
  delimiters: [{ left: "$", right: "$", display: false }],
  throwOnError: false, strict: false,
});

console.log("--- 渲染後 textContent（＝若 KaTeX CSS 缺失時可見的文字）---");
console.log(JSON.stringify(t.textContent));
console.log("katex 區塊數:", t.querySelectorAll(".katex").length,
            "| mathml:", t.querySelectorAll(".katex-mathml").length,
            "| annotation:", t.querySelectorAll("annotation").length);
console.log("--- 渲染後 HTML（前 400 字）---");
console.log(t.innerHTML.slice(0, 400));
