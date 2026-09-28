/* ==========================================================================
   自學追上站 · 語言層（中文／英文／中英）
   ---------------------------------------------------------------------------
   所有頁面共用（連不載入 app.js 的 start.html 都用同一支），全站一個 localStorage key。
     body[data-lang="zh"|"en"|"both"] 由這支設定；顯示哪一份交給 CSS：
       body[data-lang="en"] .l-zh { display: none }
       body[data-lang="zh"] .l-en { display: none }
       body[data-lang="both"] .l-en { opacity: .85 }（標題類另加小字副標樣式）
   內容渲染（把 {zh,en} 變成 .l-zh/.l-en 兩份）在 assets/app.js 的 biNode()；
   HTML 靜態文字則直接寫 .l-zh / .l-en 兩份。
   硬規則：所有文字欄位必須中英齊全（tools/learn_check.py 的 I1–I5 會擋）。
   ========================================================================== */
(function () {
  "use strict";

  var KEY = "dse-learn:lang";
  var LANGS = ["zh", "en", "both"];
  var DEFAULT = "both";                     /* 預設中英並列：弱生看中文、同時見到考試英文字眼 */
  var LABELS = [["zh", "中文"], ["en", "EN"], ["both", "中英"]];

  function get() {
    try {
      var v = localStorage.getItem(KEY);
      return LANGS.indexOf(v) >= 0 ? v : DEFAULT;
    } catch (e) { return DEFAULT; }
  }

  function set(l) {
    if (LANGS.indexOf(l) < 0) return;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply();
    /* 部分文字（提示列句子、chip 標籤等）是渲染時才組出來的單語文字，
       所以切語言要重新繪製目前這一頁（app.js 註冊 window.__LEARN_RELANG）。 */
    if (typeof window.__LEARN_RELANG === "function") {
      try { window.__LEARN_RELANG(); } catch (e) {}
    }
  }

  function apply() {
    var l = get();
    document.body.setAttribute("data-lang", l);
    /* dir/lang 屬性：英文模式時用 en，方便瀏覽器選字與讀屏 */
    document.documentElement.setAttribute("lang", l === "en" ? "en" : "zh-Hant");
    var bs = document.querySelectorAll(".langbar button");
    Array.prototype.forEach.call(bs, function (b) {
      var on = b.getAttribute("data-lang") === l;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  /* 依目前語言取字串；英文缺席時退回中文（內容未齊都不會顯示空白） */
  function text(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    var l = get();
    if (l === "en") return obj.en || obj.zh || "";
    return obj.zh || obj.en || "";
  }

  function bar() {
    var bar = document.createElement("div");
    bar.className = "langbar";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", "語言 / Language");
    LABELS.forEach(function (p) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = p[1];
      b.setAttribute("data-lang", p[0]);
      b.onclick = function () { set(p[0]); };
      bar.appendChild(b);
    });
    return bar;
  }

  /* 把切換器放入每個頁面的 [data-lang-slot]（或 #lang-slot） */
  function mount() {
    var slots = document.querySelectorAll("[data-lang-slot], #lang-slot");
    Array.prototype.forEach.call(slots, function (s) {
      if (!s.querySelector(".langbar")) s.appendChild(bar());
    });
    apply();
  }

  window.LEARN_I18N = {
    get: get, set: set, apply: apply, text: text, bar: bar, mount: mount,
    LANGS: LANGS, DEFAULT: DEFAULT, KEY: KEY
  };

  /* 本檔用 <script defer> 載入：執行時 body 已經解析完 →
     即時 mount（切換器會早過 DOMContentLoaded 出現，jsdom 測試亦一定掛得上）。
     只有被放在 <head> 且沒有 defer 時，才等 DOMContentLoaded。 */
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
