/* ==========================================================================
   自學追上站 · 前端
   純靜態、無框架、無 build step。三種頁面共用這支檔案：
     body[data-page="index"]  首頁（課題按鈕牆）
     body[data-page="topic"]  課題頁（概念卡 → 長題示範 → MC 每頁 3 題）
     body[data-page="wrong"]  弱點升級庫（前稱「錯題本」）
   進度存 localStorage：key = dse-learn:v1（與每日三題站分開）

   數學渲染沿用每日三題站已驗證的兩路機制：
     data-tex        → katex.render（整串 LaTeX）
     data-tex-inline → renderMathInElement（文字中的 $...$）
   選項則沿用 isProse() 三路判別（純 LaTeX／含 $...$ 的文字／純文字）。
   ========================================================================== */
(function () {
  "use strict";

  var LS_KEY = "dse-learn:v1";
  var INDEX = window.LEARN_INDEX || { topics: [], stages: [], counts: {} };
  var TOPIC = null;                       // 目前課題的完整資料
  var PAGE = (document.body.getAttribute("data-page") || "index");

  /* ── 儲存 ───────────────────────────────────────────────────────────── */
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(LS_KEY)) || {};
      s.mc = s.mc || {};        // { qid: {picked, correct, ts, tries} }
      s.long = s.long || {};    // { qid: true }（已讀完示範）
      s.cards = s.cards || {};  // { lessonId: true }（已看完概念卡）
      return s;
    } catch (e) {
      return { mc: {}, long: {}, cards: {} };
    }
  }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {}
  }
  var store = load();

  /* ── DOM 小工具 ─────────────────────────────────────────────────────── */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  /* 注意：第二個參數 root 一定要保留 —— 作答時只鎖「這一題」的選項，
     否則會把整頁其他題目的選項一併鎖住（曾經踩過的 bug）。 */
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  /* 換卡／換內容後把視窗帶回頂部：要扣掉黏性頂部分頁列的高度。
     不做這件事的話，內容重繪但滾動位置不變 → 學生會停在卡片底部。 */
  function scrollToTopOf(node) {
    if (!node || typeof window.scrollTo !== "function") return;
    var bar = qs(".topbar");
    var offset = (bar ? bar.getBoundingClientRect().height : 0) + 12;
    var y = node.getBoundingClientRect().top + (window.pageYOffset || 0) - offset;
    try { window.scrollTo(0, Math.max(0, y)); } catch (e) {}
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  /* 所有頁面跳轉都走這裡：記錄最後一次跳轉目標（smoke test 用），並統一處理
     jsdom／舊瀏覽器不支援 location 指派的情況。 */
  function go(url) {
    window.__LEARN_LAST_NAV = url;
    try { location.href = url; } catch (e) {}
  }
  function toast(msg) {
    var t = qs("#toast");
    if (!t) { t = el("div", "toast"); t.id = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t.dataset.timer);
    t.dataset.timer = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  /* ── 數學渲染（沿用每日站兩路機制）───────────────────────────────────── */
  function tex(node, src, display) {
    if (!src) { node.textContent = "—"; return; }
    node.setAttribute("data-tex", src);
    node.setAttribute("data-display", display ? "1" : "0");
    if (window.katex) {
      try {
        katex.render(src, node, { displayMode: !!display, throwOnError: false, strict: false });
        return;
      } catch (e) { /* 退回純文字 */ }
    }
    node.textContent = src;
  }
  /* 長公式放唔落：math 字串內用 \n 斷行 → 每行一個 <div class="formula-line">
     （各自帶 data-tex，KaTeX 遲載入時 rerenderAll 仍可逐行重繪） */
  function formulaBlock(host, src, display) {
    var lines = String(src == null ? "" : src).split(/\r?\n/)
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length; });
    if (lines.length <= 1) { tex(host, src, display); return; }
    host.classList.add("formula-multi");
    lines.forEach(function (ln) {
      var row = el("div", "formula-line");
      tex(row, ln, display);
      host.appendChild(row);
    });
  }
  function autoRender(node) {
    if (!window.renderMathInElement || !node) return;
    try {
      renderMathInElement(node, {
        delimiters: [{ left: "$", right: "$", display: false }],
        ignoredClasses: ["cur"],          // 貨幣符號不參與數學配對
        throwOnError: false, strict: false
      });
    } catch (e) {}
  }
  function rerenderAll() {
    if (!window.katex) return false;
    qsa("[data-tex]").forEach(function (n) {
      try {
        katex.render(n.getAttribute("data-tex"), n, {
          displayMode: n.getAttribute("data-display") === "1",
          throwOnError: false, strict: false
        });
      } catch (e) {}
    });
    qsa("[data-tex-inline]").forEach(autoRender);
    return true;
  }
  /* 文字（可含 $...$ 與換行）→ 行內渲染容器 */
  /* 資料層的貨幣寫成 \$（跳脫，避免與數學 $ 配對衝突）。
     顯示層把它還原成 <span class="cur">$</span>：auto-render 會跳過 .cur，
     所以「is \$53 while … is \$34」不會被當成一段數學。 */
  var CURRENCY_RE = /\\\$/g;
  function htmlWithCurrency(escapedHtml) {
    return escapedHtml.replace(CURRENCY_RE, '<span class="cur">$</span>');
  }
  function richInto(node, s) {
    node.setAttribute("data-tex-inline", "1");
    node.innerHTML = htmlWithCurrency(esc(s)).replace(/\n/g, "<br>");
  }
  function isProse(s) {
    if (s.indexOf("$") >= 0 || s.indexOf("\\") >= 0) return false;
    return /(^|[^A-Za-z])[A-Za-z]{2,}\s+[A-Za-z]{2,}(?![A-Za-z])/.test(s);
  }
  /* 短標籤（步驟標題、卡片標題、解法名）也可能含 $...$ → 行內數學渲染。
     直接用 textContent 的話會把 $q$、$p$ 原字元露出來。 */
  function labelInto(node, s) {
    richInto(node, (s == null ? "" : String(s)));
    autoRender(node);
    return node;
  }
  function mathInto(node, s) {                  // 選項三路判別
    if (!s) { node.textContent = "—"; return; }
    if (s.indexOf("$") >= 0 || isProse(s)) { richInto(node, s); autoRender(node); }
    else tex(node, s, false);
  }

  /* ── 進度計算 ───────────────────────────────────────────────────────── */
  function mcState(qid) { return store.mc[qid] || null; }
  function isTopicDone(t) { return topicPercent(t) >= 100; }

  function topicCounts(t) {
    var s = t.stats || {};
    return { mc: s.mc || 0, long: s.long || 0, cards: s.cards ? 1 : 0 };
  }
  function topicPercent(t) {
    var c = topicCounts(t);
    var total = c.mc + c.long + c.cards;
    if (!total) return 0;
    var done = 0;
    // 已掌握的 MC（答對）
    Object.keys(store.mc).forEach(function (qid) {
      if (store.mc[qid].correct && belongsTo(qid, t)) done++;
    });
    Object.keys(store.long).forEach(function (qid) {
      if (store.long[qid] && belongsTo(qid, t)) done++;
    });
    // 概念卡：以「課」為單位（lessonIds 由生成器帶入）
    var lessons = t.lessonIds || [];
    if (lessons.length && lessons.every(function (lid) { return !!store.cards[lid]; })) done += 1;
    return Math.min(100, Math.round(done / total * 100));
  }
  /* 題目屬於哪個課題：以 id 前綴判斷（eph-ws01-… → ws01）
     課題可以帶小寫尾碼（一份工作紙拆成兩課時，例如 ws05a／ws05b）。 */
  function belongsTo(qid, t) {
    var m = /^eph-(ws\d+[a-z]?|as\d+)-/.exec(qid);
    return m && m[1] === t.id;
  }

  /* ── 首頁 ───────────────────────────────────────────────────────────── */
  function renderIndex() {
    var host = qs("#topics");
    if (!host) return;
    var byStage = {};
    (INDEX.topics || []).forEach(function (t) {
      (byStage[t.stage] = byStage[t.stage] || []).push(t);
    });
    var stageNames = {};
    (INDEX.stages || []).forEach(function (s) { stageNames[s.id] = s.name || {}; });

    Object.keys(byStage).sort().forEach(function (sid) {
      var name = stageNames[sid] || {};
      var st = el("div", "section-title");
      st.appendChild(el("span", null, (name.zh || ("階段 " + sid)) + (name.en ? " · " + name.en : "")));
      host.appendChild(st);

      var grid = el("div", "topic-grid");
      byStage[sid].forEach(function (t) {
        var pct = topicPercent(t);
        var btn = el("button", "topic-btn" + (pct >= 100 ? " done" : ""));
        var ring = el("div", "ring" + (pct >= 100 ? " full" : ""));
        ring.style.setProperty("--p", pct);
        ring.setAttribute("data-label", pct + "%");
        btn.appendChild(ring);

        var body = el("div", "t-body");
        var nm = el("div", "t-name", (t.name && t.name.zh) || t.id);
        if (t.name && t.name.en) nm.appendChild(el("span", "t-en", t.name.en));
        body.appendChild(nm);
        var meta = el("div", "t-meta");
        var s = t.stats || {};
        meta.textContent = "概念卡 " + (s.cards || 0) + " 張 · 示範 " + (s.long || 0) +
                           " 題 · 練習 " + (s.mc || 0) + " 題";
        body.appendChild(meta);
        btn.appendChild(body);
        btn.onclick = function () { go("topic.html?t=" + encodeURIComponent(t.id)); };
        grid.appendChild(btn);
      });
      host.appendChild(grid);
    });

    // 繼續學習：跳到第一個未完成課題
    var next = (INDEX.topics || []).filter(function (t) { return !isTopicDone(t); })[0];
    var goBtn = qs("#continue");
    if (goBtn) {
      if (next) {
        goBtn.classList.remove("hidden");
        goBtn.onclick = function () { go("topic.html?t=" + encodeURIComponent(next.id)); };
        var lbl = qs("#continue-label");
        if (lbl) lbl.textContent = "繼續學習 · " + ((next.name && next.name.zh) || next.id);
      } else if ((INDEX.topics || []).length) {
        goBtn.classList.remove("hidden");
        goBtn.onclick = function () { toast("全部課題都完成了，做得好！"); };
        var l2 = qs("#continue-label");
        if (l2) l2.textContent = "全部完成 ✓";
      }
    }

    var c = INDEX.counts || {};
    var stat = qs("#site-stats");
    if (stat) {
      stat.textContent = "共 " + (c.topics || 0) + " 個課題 · " + (c.mc || 0) +
                         " 題練習 · " + (c.long || 0) + " 題示範";
    }
    var rb = qs("#reset");
    if (rb) rb.onclick = function () {
      if (!confirm("要清除這個網站的學習進度嗎？（每日三題站的進度不受影響）")) return;
      store = { mc: {}, long: {}, cards: {} };
      save();
      location.reload();
    };
    updateWrongBadge();
  }

  function updateWrongBadge() {
    var n = wrongList().length;
    var b = qs("#wrong-count");
    if (b) {
      b.textContent = n ? "弱點升級庫 (" + n + ")" : "弱點升級庫";
      if (n) b.classList.add("has-items"); else b.classList.remove("has-items");
    }
  }
  function wrongList() {
    var out = [];
    Object.keys(store.mc).forEach(function (qid) {
      if (store.mc[qid].correct === false) out.push(qid);
    });
    return out.sort();
  }

  /* ── 課題頁 ─────────────────────────────────────────────────────────── */
  function topicIdFromUrl() {
    var p = new URLSearchParams(location.search);
    return (p.get("t") || (INDEX.topics[0] || {}).id || "").toLowerCase();
  }
  function pageFromUrl() {
    var p = new URLSearchParams(location.search);
    var n = parseInt(p.get("p") || "0", 10);
    return isNaN(n) || n < 0 ? 0 : n;
  }
  /* ?q=<qid>：跳到含這條題目的那一頁（弱點升級庫「再練一次」用） */
  function pageOfQuestion(pages, qid) {
    if (!qid) return -1;
    for (var i = 0; i < pages.length; i++) {
      var p = pages[i];
      if (p.kind === "mc" && p.row.some(function (q) { return q.id === qid; })) return i;
      if (p.kind === "long" && p.q && p.q.id === qid) return i;
      if (p.kind === "demos" && (p.demos || []).some(function (q) { return q.id === qid; })) return i;
    }
    return -1;
  }
  function loadTopicScript(id, cb) {
    var varName = "LEARN_TOPIC_" + id.toUpperCase().replace(/-/g, "_");
    if (window[varName]) { cb(window[varName]); return; }
    var s = document.createElement("script");
    s.src = "data/topic-" + id + ".js" + (window.__V ? "?v=" + window.__V : "");
    s.onload = function () { cb(window[varName] || null); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  /* 同一課的示範收成一頁的門檻（見 buildPages） */
  var DEMO_GROUP_MIN = 4;

  function buildPages(topic) {
    var pages = [];
    (topic.lessons || []).forEach(function (les) {
      if (les.cards && les.cards.length) pages.push({ kind: "cards", lesson: les });
      // 示範頁：一條示範一頁；同一課有 4 條或以上時收成「一頁多條」（用「下一條」切換，
      // 像學習頁那樣），否則分頁列會被示範塞爆。示範數量不設上限。
      var longs = les.long || [];
      if (longs.length >= DEMO_GROUP_MIN) {
        pages.push({ kind: "demos", lesson: les, demos: longs });
      } else {
        longs.forEach(function (q) { pages.push({ kind: "long", q: q, lesson: les }); });
      }
      (les.pages || []).forEach(function (row) { pages.push({ kind: "mc", row: row, lesson: les }); });
    });
    return pages;
  }

  function pageDone(p) {
    if (p.kind === "cards") return !!store.cards[p.lesson.id];
    if (p.kind === "long") return !!store.long[p.q.id];
    if (p.kind === "demos") {
      return (p.demos || []).length > 0 &&
        p.demos.every(function (q) { return !!store.long[q.id]; });
    }
    return p.row.every(function (q) { return !!mcState(q.id); });
  }

  function renderTopic() {
    var id = topicIdFromUrl();
    loadTopicScript(id, function (topic) {
      if (!topic) {
        qs("#topic-body").innerHTML = "";
        qs("#topic-body").appendChild(el("div", "empty", "找不到這個課題的資料（" + id + "）"));
        return;
      }
      TOPIC = topic;
      var pages = buildPages(topic);
      var cur = Math.min(pageFromUrl(), Math.max(0, pages.length - 1));
      var byQ = new URLSearchParams(location.search).get("q");
      var focusQid = null;
      if (byQ) {
        var hit = pageOfQuestion(pages, byQ);
        if (hit >= 0) { cur = hit; focusQid = byQ; }
      }

      var nameEl = qs("#topic-name");
      if (nameEl) nameEl.textContent = (topic.name && topic.name.zh) || topic.id;
      var enEl = qs("#topic-en");
      if (enEl) enEl.textContent = (topic.name && topic.name.en) || "";
      document.title = ((topic.name && topic.name.zh) || topic.id) + " · 自學追上站";

      // 頁數導覽列（多節課題插入「第 N 節」分隔 —— 否則兩個「學習」分不清是哪一節）
      var nav = qs("#pagenav");
      var lessons = topic.lessons || [];
      var multiLesson = lessons.length > 1;
      nav.innerHTML = "";
      pages.forEach(function (p, i) {
        if (multiLesson && p.lesson && (i === 0 || pages[i - 1].lesson !== p.lesson)) {
          var sep = el("span", "pg-lesson", "第 " + (lessons.indexOf(p.lesson) + 1) + " 節");
          sep.title = (p.lesson.title && p.lesson.title.zh) || "";
          nav.appendChild(sep);
        }
        var b = el("button", "pg" + (i === cur ? " current" : "") + (pageDone(p) ? " done" : ""));
        if (p.kind === "cards") {
          b.textContent = "學習";
          b.classList.add("kind");
          b.title = (p.lesson && p.lesson.title && p.lesson.title.zh) || "概念卡";
        } else if (p.kind === "long") {
          b.textContent = "示範";
          b.classList.add("kind");
          b.title = (p.q && p.q.code) ? ("長題示範 " + p.q.code) : "長題示範";
        } else if (p.kind === "demos") {
          b.textContent = "示範";
          b.classList.add("kind");
          b.title = "長題示範 ×" + (p.demos || []).length +
            (p.lesson && p.lesson.title && p.lesson.title.zh ? "（" + p.lesson.title.zh + "）" : "");
        } else {
          var mcIdx = pages.slice(0, i + 1).filter(function (x) { return x.kind === "mc"; }).length;
          b.textContent = String(mcIdx);
          b.title = "練習 第 " + mcIdx + " 頁";
        }
        b.dataset.page = String(i);
        b.onclick = function () { gotoPage(id, i); };
        nav.appendChild(b);
      });

      renderPage(pages, cur, id, focusQid);

      // 頁數位置與完成度：都顯示在頂部（底部不再有上一頁／下一頁，跳頁一律按頂部分頁列）
      var pct = Math.round(pages.filter(pageDone).length / pages.length * 100);
      var bar = qs("#topic-progress");
      if (bar) {
        // 多節課題順便講清楚「你現在在第幾節」
        var sec = "";
        if (multiLesson && pages[cur] && pages[cur].lesson) {
          var li = lessons.indexOf(pages[cur].lesson);
          if (li >= 0) sec = "第 " + (li + 1) + " 節 · ";
        }
        bar.textContent = sec + "第 " + (cur + 1) + " / " + pages.length + " 頁 · 本課完成 " + pct + "%";
      }

      // 分頁列係橫向捲動（捲軸隱藏），要自動捲到「目前這一頁」——
      // 否則學生只看得到左邊幾頁，右邊（第 2 節／後面的練習頁）永遠「顯示不了」。
      var curBtn = navPageBtn(cur);
      if (curBtn && typeof curBtn.scrollIntoView === "function") {
        try { curBtn.scrollIntoView({ block: "nearest", inline: "center" }); } catch (e) {}
      }

      updateWrongBadge();
    });
  }

  /* 分頁列的「第 i 頁」按鈕。
     注意：分頁列中間可能夾雜「第 N 節」分隔元素，所以**不可以**用 nav.children[i]，
     一定要用 .pg 清單取第 i 個，否則會標錯完成的頁。 */
  function navPageBtn(i) {
    return qsa("#pagenav .pg")[i] || null;
  }

  function gotoPage(tid, n) {
    go("topic.html?t=" + encodeURIComponent(tid) + "&p=" + n);
  }

  function renderPage(pages, cur, tid, focusQid) {
    var body = qs("#topic-body");
    body.innerHTML = "";
    var p = pages[cur];
    if (!p) { body.appendChild(el("div", "empty", "這一頁沒有內容")); return; }

    if (cur === 0 && TOPIC.intro && TOPIC.intro.zh) {
      var intro = el("div", "card");
      var h = el("div", "q-head");
      h.appendChild(el("span", "q-code", "這一課"));
      intro.appendChild(h);
      var it = el("div", "ccard-body");
      richInto(it, TOPIC.intro.zh);
      autoRender(it);
      intro.appendChild(it);
      body.appendChild(intro);
    }

    appendCommandHints(body);      // 常駐考試指令提示：做之前先看，減少「睇錯題目」的失分

    if (p.kind === "cards") renderCards(body, p, pages, cur, tid);
    else if (p.kind === "long") renderLong(body, p, pages, cur, tid);
    else if (p.kind === "demos") renderDemoSet(body, p, pages, cur, tid);
    else renderMcPage(body, p, pages, cur, tid, focusQid);

    // 卡住時才需要的東西：放在頁尾，不干擾作答
    var help = el("div", "help-link");
    help.innerHTML = '卡住了？看看<a href="start.html">「開始之前」的三步求助法</a>。';
    body.appendChild(help);
  }

  /* ── 概念卡：正文與公式交錯 ─────────────────────────────────────────── */
  /* 正文可用定位標記把公式插到指定位置：
       {{math:0}}  插入 math[0]（0 起算）
       {{math}}    依序插入下一條未使用的公式
     沒有標記的公式，最後依原順序補在正文下方（與舊資料相容）。 */
  var MATH_MARK_RE = /\{\{math(?::(\d+))?\}\}/g;

  function renderMathBody(host, text, maths) {
    maths = maths || [];
    var used = {};
    var last = 0;
    var auto = 0;
    var m;
    MATH_MARK_RE.lastIndex = 0;

    function addText(s) {
      if (!s) return;
      var d = el("div", "btext");
      d.setAttribute("data-tex-inline", "1");
      d.innerHTML = htmlWithCurrency(esc(s)).replace(/\n/g, "<br>");
      autoRender(d);
      host.appendChild(d);
    }
    function addFormula(i) {
      if (!maths[i]) return;
      var f = el("div", "formula");
      formulaBlock(f, maths[i], true);
      host.appendChild(f);
    }

    while ((m = MATH_MARK_RE.exec(text)) !== null) {
      addText(text.slice(last, m.index));
      last = m.index + m[0].length;
      var idx = (m[1] === undefined) ? auto++ : parseInt(m[1], 10);
      used[idx] = true;
      addFormula(idx);
    }
    addText(text.slice(last));
    maths.forEach(function (mm, i) { if (!used[i]) addFormula(i); });
  }

  /* ── 概念卡 ─────────────────────────────────────────────────────────── */
  /* 示意圖（SVG）：概念卡／題目都係「一組圖」，逐幅插入（來源可控） */
  function appendFigure(host, fg) {
    if (!fg || !fg.svg) return;
    var fig = el("div", "fig");
    fig.innerHTML = fg.svg;
    host.appendChild(fig);
    if (fg.caption) host.appendChild(el("div", "fig-cap", fg.caption));
  }
  function appendFigures(host, node) {
    (node.figures || []).forEach(function (fg) { appendFigure(host, fg); });
  }

  /* 步驟附加內容：(a)→(b) 的「整塊打包替換」提示 + 高亮答案。
     長題示範與 MC 提示共用，避免兩處各寫一次。 */
  /* 長題示範的「常見錯誤」：資料在 solution.traps。
     長題沒有選項，所以用 label（不是 MC 的 opt）；學生也未作答，
     所以語氣是「做完之後，檢查自己有沒有踩中」，不是「你答錯了」。 */
  function appendLongTraps(host, sol) {
    var traps = (sol && sol.traps) || [];
    if (!traps.length) return;
    var box = el("div", "traps long-traps");
    traps.forEach(function (tr) {
      var t = el("div", "trap");
      var tag = tr.label || tr.opt || "";
      if (tag) t.appendChild(el("b", null, tag + "："));
      var sp = el("span");
      richInto(sp, tr.zh || "");
      autoRender(sp);
      t.appendChild(sp);
      box.appendChild(t);
    });
    host.appendChild(el("div", "trap-head",
      "做完之後，檢查自己有沒有踩中這幾個常見錯誤："));
    host.appendChild(box);
  }

  function appendStepExtras(box, st) {
    if (st.link && st.link.math) {
      var lk = el("div", "step-link");
      lk.appendChild(el("span", "lk-tag",
        st.link.label || ("用 " + (st.link.from || "(a)") + " 的答案")));
      var lf = el("span", "lk-formula");
      tex(lf, st.link.math, false);
      lk.appendChild(lf);
      box.appendChild(lk);
    }
    (st.highlight || []).forEach(function (h2) {
      var hl = el("div", "hl");
      tex(hl, h2, false);
      box.appendChild(hl);
    });
  }

  /* 常駐考試指令提示：DSE 題目用英文字眼，弱生最常誤解這幾個字。
     放在每一頁的最頂，看完提示再開始做（不是測驗，不扣分）。
     每一課的字眼不同（見 lessons.json 的 cmdHints）——
     例如二次方程要認得 two distinct real roots／no real roots，
     坐標變換要認得 reflected with respect to／rotated anticlockwise。
     課題沒有提供時，才退回下面這組通用字眼。 */
  var CMD_HINTS = [
    ["Factorize completely", "徹底分解（要分解到不能再分解為止）"],
    ["Hence", "由此（必須用上一小題的答案）"],
    ["Show that", "證明（要把推導過程寫出來）"],
    ["Write down", "直接寫出（通常一步就有分）"]
  ];
  function cmdHints() {
    var h = TOPIC && TOPIC.cmdHints;
    if (!h || !h.length) return CMD_HINTS;
    var out = [];
    h.forEach(function (x) {
      var en = Array.isArray(x) ? x[0] : (x && x.en);
      var zh = Array.isArray(x) ? x[1] : (x && x.zh);
      if (en) out.push([en, zh || ""]);
    });
    return out.length ? out : CMD_HINTS;
  }
  function appendCommandHints(body) {
    var box = el("div", "cmd-hints");
    box.appendChild(el("span", "ch-title", "題目字眼"));
    cmdHints().forEach(function (p) {
      var chip = el("span", "ch-chip");
      // 英文與中文都可以含 $...$（例如 $a+bi$、$\Delta>0$）→ 兩邊都要行內渲染
      var en = el("b");
      richInto(en, p[0]);
      autoRender(en);
      chip.appendChild(en);
      var z = el("span");
      richInto(z, p[1]);
      autoRender(z);
      chip.appendChild(z);
      box.appendChild(chip);
    });
    body.appendChild(box);
  }

  function renderCards(body, page, pages, cur, tid) {
    var cards = page.lesson.cards || [];
    var i = 0;
    var cardEl = null;          // 目前這一張卡（換卡後捲回它的頂部）

    function draw() {
      body.innerHTML = "";
      if (i === 0) {
        var intro = el("div", "card");
        var hh = el("div", "q-head");
        hh.appendChild(el("span", "q-code", "先學會"));
        hh.appendChild(el("span", "q-source", "看過概念卡再做練習"));
        intro.appendChild(hh);
        var it = el("div", "ccard-body");
        richInto(it, "這一課有 " + cards.length + " 張概念卡，每張都有定義、公式和常見錯誤。看完按「下一張」，最後一張會打 ✓。");
        autoRender(it);
        intro.appendChild(it);
        body.appendChild(intro);
      }

      // 提示列要「常駐」：換卡時 body 被清空，所以要重新加上（否則學習頁會冇咗）
      appendCommandHints(body);

      var c = cards[i];
      var card = el("div", "card");
      var head = el("div", "ccard-head");
      head.appendChild(labelInto(el("h3"), (c.title && c.title.zh) || ""));
      if (c.title && c.title.en) head.appendChild(el("span", "en", c.title.en));
      card.appendChild(head);

      // 概念卡示意圖（一張卡可以有多幅圖：例如變換多於一次就逐步畫）
      appendFigures(card, c);

      var b = el("div", "ccard-body concept-body");
      renderMathBody(b, (c.body && c.body.zh) || "", c.math || []);
      card.appendChild(b);

      if (c.warn && c.warn.zh) {
        var w = el("div", "callout");
        w.appendChild(el("span", "tag", "常見錯誤"));
        var ws = el("span");
        richInto(ws, c.warn.zh);
        autoRender(ws);
        w.appendChild(ws);
        card.appendChild(w);
      }

      if (c.vocab && c.vocab.length) {
        var v = el("div", "vocab");
        c.vocab.forEach(function (x) {
          var sp = el("span");
          var bd = el("b", null, x.en);
          sp.appendChild(bd);
          sp.appendChild(document.createTextNode(" " + x.zh));
          v.appendChild(sp);
        });
        card.appendChild(v);
      }

      var foot = el("div", "row");
      foot.style.marginTop = "14px";
      var prev = el("button", "btn btn-sm", "← 上一張");
      prev.disabled = i === 0;
      prev.onclick = function () { i--; draw(); scrollToTopOf(cardEl); };
      var next = el("button", "btn btn-sm btn-primary",
                    i === cards.length - 1 ? "看完了，開始練習 →" : "下一張 →");
      next.onclick = function () {
        if (i === cards.length - 1) {
          store.cards[page.lesson.id] = true;
          save();
          gotoPage(tid, cur + 1);
        } else { i++; draw(); scrollToTopOf(cardEl); }
      };
      foot.appendChild(prev);
      foot.appendChild(next);
      card.appendChild(foot);

      var cnt = el("div", "small muted center", (i + 1) + " / " + cards.length);
      cnt.style.marginTop = "10px";
      card.appendChild(cnt);
      body.appendChild(card);
      cardEl = card;
    }
    draw();
  }

  /* ── 長題目示範 ─────────────────────────────────────────────────────── */
  /* opt（選填）：同一頁放多條示範時用來做「下一條／上一條」切換
     { header: "示範 2 / 5", nextLabel: "下一條示範 →", onNext: fn, prev: fn|null } */
  function renderLong(body, page, pages, cur, tid, opt) {
    var q = page.q;
    var sol = q.solution || {};
    var steps = sol.steps || [];
    var shown = 0;

    var card = el("div", "card");
    var head = el("div", "q-head");
    head.appendChild(el("span", "q-code", q.code || q.id));
    head.appendChild(el("span", "q-source", q.source || ""));
    if (q.marks) head.appendChild(el("span", "q-source", "（" + q.marks + " 分）"));
    card.appendChild(head);

    // 同一頁放多條示範時：頂部提供「上一條／下一條」（像學習頁翻卡），可即時回頭或跳去下一條
    if (opt && opt.total > 1) {
      var demoNav = el("div", "row demo-nav");
      var pv = el("button", "btn btn-sm", "← 上一條");
      pv.disabled = !opt.prev;
      pv.onclick = function () { if (opt.prev) opt.prev(); };
      demoNav.appendChild(pv);
      demoNav.appendChild(el("span", "small muted demo-count", opt.header || ""));
      var nx = el("button", "btn btn-sm", opt.isLast ? "（最後一條）" : "下一條 →");
      nx.disabled = !!opt.isLast;
      nx.onclick = function () { if (!opt.isLast && opt.onNext) opt.onNext(); };
      demoNav.appendChild(nx);
      card.appendChild(demoNav);
    }

    var stem = el("div", "q-stem");
    richInto(stem, (q.stem && q.stem.text) || "");
    autoRender(stem);
    card.appendChild(stem);

    (q.parts || []).forEach(function (pt) {
      var d = el("div", "q-stem");
      var l = el("b", null, (pt.label || "") + " ");
      d.appendChild(l);
      var sp = el("span");
      richInto(sp, pt.text || "");
      autoRender(sp);
      d.appendChild(sp);
      if (pt.marks) d.appendChild(el("span", "q-source", "（" + pt.marks + " 分）"));
      card.appendChild(d);
    });

    var tryRow = el("div", "demo-try");
    tryRow.appendChild(el("span", null, "先自己想一想、動手寫一寫，再逐步看題解。"));
    var startBtn = el("button", "btn btn-sm btn-primary", "開始看題解 →");
    tryRow.appendChild(startBtn);
    card.appendChild(tryRow);

    var stepsHost = el("div", "steps");
    card.appendChild(stepsHost);

    var moreRow = el("div", "row");
    moreRow.style.marginTop = "12px";
    var moreBtn = el("button", "btn btn-sm", "下一步");
    var allBtn = el("button", "btn btn-sm btn-ghost", "全部顯示");
    moreRow.appendChild(moreBtn);
    moreRow.appendChild(allBtn);
    moreRow.classList.add("hidden");
    card.appendChild(moreRow);

    var endRow = el("div", "hidden");
    card.appendChild(endRow);

    function drawStep(i) {
      var st = steps[i];
      if (!st) return;                        // 防禦：步驟已全部顯示時再被觸發
      var box = el("div", "step");
      var h = labelInto(el("h4"), (st.title && st.title.zh) || ("第 " + (i + 1) + " 步"));
      box.appendChild(h);
      if (st.math) {
        var f = el("div", "formula");
        formulaBlock(f, st.math, true);
        box.appendChild(f);
      }
      var why = el("div", "why");
      richInto(why, st.zh || st.en || "");
      autoRender(why);
      box.appendChild(why);
      if (st.marking) box.appendChild(el("span", "marking", st.marking));
      appendStepExtras(box, st);
      stepsHost.appendChild(box);
      // 逐步出圖：標了 step 的圖跟住那一步出場（圖跟步驟逐幅出，唔會一次過爆出來）
      (q.figures || []).forEach(function (fg) {
        if (fg && fg.svg && (Number(fg.step) || 1) === i + 1) appendFigure(box, fg);
      });
      // scrollIntoView 在部分環境（jsdom／舊瀏覽器）不存在 → 保護，不讓它中斷揭示流程
      if (typeof box.scrollIntoView === "function") {
        try { box.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
      }
    }

    startBtn.onclick = function () {
      tryRow.classList.add("hidden");
      moreRow.classList.remove("hidden");
      shown = 0;
      drawStep(0); shown = 1;
      if (shown >= steps.length) finish();
    };
    moreBtn.onclick = function () {
      if (shown < steps.length) { drawStep(shown); shown++; }
      if (shown >= steps.length) finish();
    };
    allBtn.onclick = function () {
      while (shown < steps.length) { drawStep(shown); shown++; }
      finish();
    };

    function finish() {
      moreRow.classList.add("hidden");
      var boxt = el("div", "done-banner");
      boxt.appendChild(el("div", "big", "✓ 看完示範"));
      // tip 可以含 $...$（例如 $\Delta$、$^{2}$）→ 一定要行內渲染，否則會露出原字元
      var t = el("p");
      richInto(t, (sol.tip && sol.tip.zh) || "");
      autoRender(t);
      boxt.appendChild(t);
      endRow.appendChild(boxt);
      endRow.classList.remove("hidden");
      appendLongTraps(endRow, sol);       // 常見錯誤（只有標了 traps 的示範才有）
      var row = el("div", "row");
      if (opt && opt.prev) {
        var pb = el("button", "btn", "← 上一條");
        pb.onclick = opt.prev;
        row.appendChild(pb);
      }
      var goNext = el("button", "btn btn-block btn-primary",
                      (opt && opt.nextLabel) || "下一頁 →");
      goNext.onclick = function () {
        if (opt && opt.onNext) { opt.onNext(); return; }
        gotoPage(tid, cur + 1);
      };
      var back = el("button", "btn btn-block btn-ghost", "← 回主目錄");
      back.onclick = function () { go("index.html"); };
      row.appendChild(goNext); row.appendChild(back);
      row.style.marginTop = "10px";
      endRow.appendChild(row);

      store.long[q.id] = true;
      save();
      // 打「已完成」勾：單條示範頁做一次就夠；一頁多條時要全部看完才算
      var allDone = page.kind !== "demos" ||
        (page.demos || []).every(function (x) { return !!store.long[x.id]; });
      if (allDone) {
        var nb = navPageBtn(cur);
        if (nb) nb.classList.add("done");
      }
    }
    body.appendChild(card);
  }

  /* ── 同一頁看多條示範（像學習頁那樣用「下一條」切換）──────────────────── */
  function renderDemoSet(body, page, pages, cur, tid) {
    var demos = page.demos || [];
    var i = 0;

    function draw() {
      body.innerHTML = "";
      appendCommandHints(body);              // 換示範時提示列要重新加上（示範題也常用 Hence／Show that）
      var last = i === demos.length - 1;
      renderLong(body, { kind: "demo", q: demos[i], lesson: page.lesson }, pages, cur, tid, {
        header: "示範 " + (i + 1) + " / " + demos.length,
        total: demos.length,
        isLast: last,
        nextLabel: last ? "看完示範，開始練習 →" : "下一條示範 →",
        onNext: function () {
          if (last) { gotoPage(tid, cur + 1); return; }
          i++; draw();
          try { window.scrollTo(0, 0); } catch (e) {}
        },
        prev: i > 0 ? function () {
          i--; draw();
          try { window.scrollTo(0, 0); } catch (e) {}
        } : null
      });
    }
    draw();
  }

  /* ── MC 頁 ──────────────────────────────────────────────────────────── */
  /* 完成一頁的即時回饋：不是分數，而是「你已經拿下本課 X%」的進度感。
     弱生需要的是微小而立即的成功訊號（否則很快就放棄）。 */
  function refreshPageDone(page) {
    var n = qs("#page-done");
    if (!n || !page || !page.row || !page.row.length) return;
    var done = page.row.filter(function (q) { return !!mcState(q.id); }).length;
    var t = null;
    (INDEX.topics || []).some(function (x) {
      if (x.id === (TOPIC && TOPIC.id)) { t = x; return true; }
      return false;
    });
    if (done >= page.row.length) {
      n.classList.add("pd-finish");
      n.innerHTML = '<b class="pd-title">✓ 這一頁 ' + page.row.length + ' 題完成了</b>' +
        '<span class="pd-sub">本課已完成 ' + (t ? topicPercent(t) : 0) +
        '%　按「下一頁」繼續。</span>';
    } else {
      n.classList.remove("pd-finish");
      n.textContent = "做完這 " + page.row.length + " 題，按「下一頁」繼續" +
        "（答錯的會自動進「弱點升級庫」，隔天再練一次就好）。";
    }
  }

  function renderMcPage(body, page, pages, cur, tid, focusQid) {
    var wrap = el("div");
    page.row.forEach(function (q, idx) {
      wrap.appendChild(mcCard(q, page, pages, cur, tid, idx + 1, page.row.length));
    });
    // 從弱點升級庫「再練一次」回來：標出這一題，並且讓它回到未作答狀態
    if (focusQid) {
      var focus = qs('.card[data-qid="' + focusQid + '"]', wrap);
      if (focus) {
        focus.classList.add("focus-card");
        var note = el("div", "focus-note", "從弱點升級庫回來：這一題已清空作答記錄，重新試一次吧。");
        wrap.insertBefore(note, focus);
      }
    }
    body.appendChild(wrap);

    var nextRow = el("div", "card");
    var txt = el("div", "small muted page-done");
    txt.id = "page-done";
    nextRow.appendChild(txt);
    refreshPageDone(page);
    var row = el("div", "row");
    row.style.marginTop = "10px";
    var nx = el("button", "btn btn-sm btn-primary", "下一頁 →");
    nx.onclick = function () { gotoPage(tid, cur + 1); };
    var hm = el("button", "btn btn-sm btn-ghost", "回主目錄");
    hm.onclick = function () { go("index.html"); };
    row.appendChild(nx); row.appendChild(hm);
    nextRow.appendChild(row);
    body.appendChild(nextRow);
  }

  function mcCard(q, page, pages, cur, tid, num, total) {
    var card = el("div", "card");
    card.setAttribute("data-qid", q.id);
    var head = el("div", "q-head");
    head.appendChild(el("span", "q-code", q.code || q.id));
    head.appendChild(el("span", "q-diff", "★".repeat(q.difficulty || 1) + "☆".repeat(3 - (q.difficulty || 1))));
    if (q.source) head.appendChild(el("span", "q-source", q.source));
    card.appendChild(head);

    var stem = el("div", "q-stem");
    richInto(stem, (q.stem && q.stem.text) || "");
    autoRender(stem);
    card.appendChild(stem);

    // 注意：題目示意圖唔好放喺題幹下面 —— 圖入面有影像點，會洩漏答案。
    // 改為作答後（或按「看完整解答」）先同解說一齊出現，見 showTail()。

    var opts = el("div", "opts");
    opts.setAttribute("data-tex-inline", "1");
    card.appendChild(opts);

    var hintRow = el("div", "hint-row");
    var stepsHost = el("div", "steps");
    var tail = el("div");
    card.appendChild(hintRow);
    card.appendChild(stepsHost);
    card.appendChild(tail);

    var sol = q.solution || {};
    var steps = sol.steps || [];
    var revealed = 0;
    var hinted = false;              // 是否看過提示（看提示不扣分，只是記錄）

    ["A", "B", "C", "D"].forEach(function (L) {
      var b = el("button", "opt");
      b.dataset.opt = L;
      b.appendChild(el("span", "letter", L));
      var v = el("span", "val");
      mathInto(v, q.options && q.options[L]);
      b.appendChild(v);
      b.onclick = function () { pick(L, b); };
      opts.appendChild(b);
    });

    var prev = mcState(q.id);

    /* 提示「一開始就顯示」：弱生可以先看提示再作答，看提示不扣分。
       （舊版是答完才出現，等於逼學生先猜 —— 已修正） */
    function showHints() {
      hintRow.innerHTML = "";
      if (revealed >= steps.length) {
        hintRow.appendChild(el("span", "small muted", "已顯示完整解答。"));
        return;
      }
      hintRow.appendChild(el("span", "small muted", "卡住了？先看提示再作答也沒問題："));
      var b = el("button", "btn btn-sm", "提示 " + (revealed + 1) + " →");
      b.onclick = function () {
        hinted = true;
        drawStep(revealed);
        revealed++;
        showHints();
      };
      var all = el("button", "btn btn-sm btn-ghost", "看完整解答");
      all.onclick = function () {
        hinted = true;
        while (revealed < steps.length) { drawStep(revealed); revealed++; }
        showHints();
        appendFigures(tail, q);        // 睇晒步驟＝放棄作答 → 圖都可以出場
      };
      hintRow.appendChild(b);
      hintRow.appendChild(all);
    }

    function lock(picked, correct) {
      qsa(".opt", opts).forEach(function (b) {     // 只鎖這一題的選項（root = opts）
        b.disabled = true;
        if (b.dataset.opt === q.answer) {
          b.classList.add(correct ? "correct" : "reveal");
        } else if (b.dataset.opt === picked && !correct) {
          b.classList.add("wrong");
        }
      });
      showHints();
      showTail(correct ? null : picked);
    }

    function pick(L, btn) {
      var correct = L === q.answer;
      var rec = store.mc[q.id] || { tries: 0 };
      rec.picked = L;
      rec.correct = correct;
      rec.tries = (rec.tries || 0) + 1;
      rec.hinted = !!(hinted || rec.hinted);
      rec.ts = Date.now();
      store.mc[q.id] = rec;
      save();
      lock(L, correct);
      if (correct) {
        toast(hinted ? "答對了 ✓（看過提示也可以）" : "答對了 ✓");
        // 完成這一頁的所有題目 → 更新導覽列
        var pageAll = page.row.every(function (x) { return !!mcState(x.id); });
        if (pageAll) {
          var nb = navPageBtn(cur);
          if (nb) nb.classList.add("done");
        }
        if (pageAll) toast("✓ 這一頁完成了 —— 繼續下一頁");
      } else {
        // 答錯是「掉進陷阱」，不是「你不會」→ 先安撫，再指向陷阱解說
        toast("差一點！看看陷阱在哪裡");
      }
      refreshPageDone(page);
      updateWrongBadge();
    }

    showHints();                                  // 作答前就顯示提示按鈕
    if (prev) lock(prev.picked, prev.correct);

    function drawStep(i) {
      var st = steps[i];
      if (!st) return;                        // 防禦：步驟已全部顯示時再被觸發
      var box = el("div", "step");
      box.appendChild(labelInto(el("h4"), (st.title && st.title.zh) || ("第 " + (i + 1) + " 步")));
      if (st.math) {
        var f = el("div", "formula");
        formulaBlock(f, st.math, true);
        box.appendChild(f);
      }
      var why = el("div", "why");
      richInto(why, st.zh || st.en || "");
      autoRender(why);
      box.appendChild(why);
      if (st.marking) box.appendChild(el("span", "marking", st.marking));
      appendStepExtras(box, st);
      stepsHost.appendChild(box);
    }

    function showTail(picked) {
      tail.innerHTML = "";
      if (!picked) {
        tail.appendChild(el("div", "answer-line", "答案：" + q.answer + " ✓"));
      } else {
        tail.appendChild(el("div", "answer-line miss", "正確答案：" + q.answer));
      }
      // 示意圖放喺答案欄：先睇答案，再睇圖配上解說（兩次變換嘅題目有兩幅）
      appendFigures(tail, q);
      // 干擾選項解說（只顯示學生選的那個 + 其他錯的選項為何錯）
      var traps = sol.traps || [];
      if (traps.length) {
        var box = el("div", "traps");
        traps.forEach(function (tr) {
          if (picked && tr.opt !== picked) return;   // 只解釋他選的那個，避免資訊過載
          var t = el("div", "trap");
          t.appendChild(el("b", null, "選 " + tr.opt + " 的話："));
          var sp = el("span");
          richInto(sp, tr.zh || "");
          autoRender(sp);
          t.appendChild(sp);
          box.appendChild(t);
        });
        if (box.children.length) {
          // 把「答錯」重新框架成「掉進陷阱」：內部歸因 → 具體策略修正
          tail.appendChild(el("div", "trap-head",
            picked ? "✕ 差一點 —— 你不是不懂，而是掉進了出卷人設計的陷阱。看看偏差出在哪一步："
                   : "為什麼會這樣選？"));
          tail.appendChild(box);
        }
      }
      if (sol.tip && sol.tip.zh) {
        var tip = el("div", "tip");
        tip.appendChild(el("b", null, "帶得走的技巧："));
        var ts = el("span");
        richInto(ts, sol.tip.zh);
        autoRender(ts);
        tip.appendChild(ts);
        tail.appendChild(tip);
      }
      if (sol.alt && sol.alt.length) {
        var tgl = el("button", "btn btn-sm btn-ghost alt-toggle", "進階解法（參考）");
        var ab = el("div", "alt-body hidden");
        sol.alt.forEach(function (a, i) {
          var nm = labelInto(el("div", "small muted"),
                             (a.name && (a.name.zh || a.name.en)) || ("進階解法 " + (i + 1)));
          ab.appendChild(nm);
          var sp = el("div");
          richInto(sp, a.zh || a.en || "");
          autoRender(sp);
          ab.appendChild(sp);
        });
        tgl.onclick = function () { ab.classList.toggle("hidden"); };
        tail.appendChild(tgl);
        tail.appendChild(ab);
      }
    }

    return card;
  }

  /* ── 弱點升級庫（前稱錯題本）───────────────────────────────────────────── */
  function renderWrong() {
    var host = qs("#wrong-body");
    if (!host) return;
    var ids = wrongList();
    if (!ids.length) {
      var e = el("div", "card");
      e.appendChild(el("div", "done-banner"));
      var b1 = el("div", "empty", "升級庫是空的 —— 或者你已經把弱點全部補好了 ✓");
      e.appendChild(b1);
      var b2 = el("button", "btn btn-primary", "回主目錄");
      b2.onclick = function () { go("index.html"); };
      e.appendChild(b2);
      host.appendChild(e);
      return;
    }

    var groups = {};
    ids.forEach(function (qid) {
      var m = /^eph-(ws\d+[a-z]?|as\d+)-/.exec(qid);
      var t = m ? m[1] : "其他";
      (groups[t] = groups[t] || []).push(qid);
    });
    var names = {};
    (INDEX.topics || []).forEach(function (t) { names[t.id] = (t.name && t.name.zh) || t.id; });

    Object.keys(groups).sort().forEach(function (t) {
      var sec = el("div", "section-title");
      sec.appendChild(el("span", null, names[t] || t));
      host.appendChild(sec);

      groups[t].forEach(function (qid) {
        var row = el("div", "card");
        var inner = el("div", "wrong-item");
        var q = el("div", "wq");
        var st = store.mc[qid];
        var m = /-q(\d+)$/.exec(qid);
        q.appendChild(el("div", null, (names[t] || t) + " · 練習 " + (m ? parseInt(m[1], 10) : qid)));
        q.appendChild(el("div", "small muted",
          "你選了 " + st.picked + "（答錯 " + (st.tries || 1) + " 次）"));
        inner.appendChild(q);

        var again = el("button", "btn btn-sm btn-primary", "再練一次");
        again.onclick = function () {
          delete store.mc[qid];
          save();
          go("topic.html?t=" + t + "&q=" + encodeURIComponent(qid));
        };
        inner.appendChild(again);
        row.appendChild(inner);
        host.appendChild(row);
      });
    });

    var clr = qs("#wrong-clear");
    if (clr) clr.onclick = function () {
      if (!confirm("要把弱點升級庫清空嗎？")) return;
      Object.keys(store.mc).forEach(function (qid) {
        if (store.mc[qid].correct === false) delete store.mc[qid];
      });
      save();
      location.reload();
    };
    updateWrongBadge();
  }

  /* ── 啟動 ───────────────────────────────────────────────────────────── */
  var started = false;
  function start() {
    if (started) return;              // 防止 DOMContentLoaded 與手動啟動重複渲染
    started = true;
    if (PAGE === "index") renderIndex();
    else if (PAGE === "topic") renderTopic();
    else if (PAGE === "wrong") renderWrong();

    // KaTeX 以 defer 載入：晚到時補排
    if (!window.katex) {
      var tries = 0;
      var timer = setInterval(function () {
        tries++;
        if (rerenderAll() || tries > 80) clearInterval(timer);
      }, 125);
    } else {
      rerenderAll();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();

  // 測試（jsdom）用：讓 smoke test 可以明確啟動，不必等 DOMContentLoaded
  window.__LEARN_START = start;
})();
