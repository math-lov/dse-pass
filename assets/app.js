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
      s.weak = s.weak || {};    // { qid: {ts} }（自己按「加入弱點升級庫」的長／短答題）
      return s;
    } catch (e) {
      return { mc: {}, long: {}, cards: {}, weak: {} };
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
  /* ── i18n：語言層在 assets/i18n.js（所有頁面共用）─────────────────────
     資料契約：所有文字欄位都必須中英齊全 —— {zh, en} 物件，或同一層的 zh/en 一對。
     缺英文時退回中文（不會出現空白），但 tools/learn_check.py 的 I1–I5 會擋。 */
  function T(obj) {
    var i = window.LEARN_I18N;
    if (i && i.text) return i.text(obj);
    return (obj && (obj.zh || obj.en)) || "";
  }
  /* {zh,en} → 兩份節點（.l-zh / .l-en），由 CSS 決定顯示哪份 */
  function biNode(obj, tag, cls) {
    var t = tag || "div";
    var box = el(t, cls || "bi");
    var zh = (obj && obj.zh) || "";
    var en = (obj && obj.en) || "";
    /* 只有一份文字時不加語言 class（任何語言模式都顯示）。
       題目可以只提供英文（只有詳解要中英）—— 若照舊只認 zh，中文模式會空白一片。 */
    if (!en || !zh) { richInto(box, zh || en); autoRender(box); return box; }
    var z = el(t === "span" ? "span" : "div", "l-zh");
    richInto(z, zh);
    var e = el(t === "span" ? "span" : "div", "l-en");
    richInto(e, en);
    box.appendChild(z);
    box.appendChild(e);
    autoRender(box);
    return box;
  }
  function biSpan(obj) { return biNode(obj, "span", "bi"); }
  function setPair(node, obj) { node.innerHTML = ""; node.appendChild(biSpan(obj)); return node; }
  /* 按鈕：文字用 {zh,en} 物件 */
  function btnPair(cls, obj) {
    var b = el("button", cls);
    b.appendChild(biSpan(obj));
    return b;
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
    /* 重新繪製（例如切換語言）時一定要先清空，否則會疊出多份課題卡 */
    host.innerHTML = "";
    var byStage = {};
    (INDEX.topics || []).forEach(function (t) {
      (byStage[t.stage] = byStage[t.stage] || []).push(t);
    });
    var stageNames = {};
    (INDEX.stages || []).forEach(function (s) { stageNames[s.id] = s.name || {}; });

    Object.keys(byStage).sort().forEach(function (sid) {
      var name = stageNames[sid] || {};
      var st = el("div", "section-title");
      st.appendChild(biSpan({
        zh: name.zh || ("階段 " + sid),
        en: name.en || ("Stage " + sid)
      }));
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
        var nm = el("div", "t-name");
        nm.appendChild(biSpan(t.name || { zh: t.id }));
        body.appendChild(nm);
        var meta = el("div", "t-meta");
        var s = t.stats || {};
        meta.appendChild(biSpan({
          zh: "概念卡 " + (s.cards || 0) + " 張 · 示範 " + (s.long || 0) + " 題 · 練習 " + (s.mc || 0) + " 題",
          en: (s.cards || 0) + " concept cards · " + (s.long || 0) + " demos · " +
              (s.mc || 0) + " practice questions"
        }));
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
        if (lbl) setPair(lbl, {
          zh: "繼續學習 · " + ((next.name && next.name.zh) || next.id),
          en: "Continue · " + ((next.name && next.name.en) || next.id)
        });
      } else if ((INDEX.topics || []).length) {
        goBtn.classList.remove("hidden");
        goBtn.onclick = function () {
          toast(T({ zh: "全部課題都完成了，做得好！", en: "You have finished every topic — well done!" }));
        };
        var l2 = qs("#continue-label");
        if (l2) setPair(l2, { zh: "全部完成 ✓", en: "All done ✓" });
      }
    }

    var c = INDEX.counts || {};
    var stat = qs("#site-stats");
    if (stat) {
      setPair(stat, {
        zh: "共 " + (c.topics || 0) + " 個課題 · " + (c.mc || 0) + " 題練習 · " +
            (c.long || 0) + " 題示範",
        en: (c.topics || 0) + " topics · " + (c.mc || 0) + " practice questions · " +
            (c.long || 0) + " demonstrations"
      });
    }
    var rb = qs("#reset");
    if (rb) rb.onclick = function () {
      if (!confirm(T({
        zh: "要清除這個網站的學習進度嗎？（每日三題站的進度不受影響）",
        en: "Clear the progress of this site? (The Daily Three site is not affected.)"
      }))) return;
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
      setPair(b, n
        ? { zh: "弱點升級庫（" + n + "）", en: "Weak-spot list (" + n + ")" }
        : { zh: "弱點升級庫", en: "Weak-spot list" });
      if (n) b.classList.add("has-items"); else b.classList.remove("has-items");
    }
  }
  function wrongList() {
    var out = [];
    Object.keys(store.mc).forEach(function (qid) {
      if (store.mc[qid].correct === false) out.push(qid);
    });
    /* 長／短答是紙上作答：學生自己按「加入弱點升級庫」，一樣列出來 */
    Object.keys(store.weak).forEach(function (qid) {
      if (out.indexOf(qid) < 0) out.push(qid);
    });
    return out.sort();
  }

  /* 「加入弱點升級庫」開關：長／短答在紙上做，學生自己決定要不要留起來再練 */
  function weakBtn(q) {
    var b = el("button", "btn btn-sm btn-ghost btn-weak");
    b.setAttribute("data-weak", q.id);
    function paint() {
      var on = !!store.weak[q.id];
      b.innerHTML = "";
      b.appendChild(biSpan(on
        ? { zh: "✓ 已在弱點升級庫", en: "✓ In your weak-spot list" }
        : { zh: "+ 加入弱點升級庫", en: "+ Add to weak-spot list" }));
      if (on) b.classList.add("on"); else b.classList.remove("on");
    }
    b.onclick = function () {
      if (store.weak[q.id]) {
        delete store.weak[q.id];
        toast("已從弱點升級庫移除");
      } else {
        store.weak[q.id] = { ts: Date.now() };
        toast("已加入弱點升級庫 —— 之後在主目錄按「弱點升級庫」可以再練");
      }
      save();
      paint();
      updateWrongBadge();
    };
    paint();
    return b;
  }

  /* 題目在第幾頁：從弱點升級庫按「再練一次」時直接跳去那一題
     （長題示範可能藏在後幾頁，而 ≥4 條長題會合成「示範集」一頁） */
  function pageOfQuestion(tid, qid) {
    var t = null, i, j;
    (INDEX.topics || []).forEach(function (x) { if (x.id === tid) t = x; });
    if (!t) return 0;
    var n = 0;
    var lessons = t.lessons || [];
    for (i = 0; i < lessons.length; i++) {
      var l = lessons[i];
      n += 1;                                     // 每個 lesson 先有一頁概念卡
      var longs = l.longQuestionIds || [];
      if (longs.indexOf(qid) >= 0) {
        return n + (longs.length >= 4 ? 0 : longs.indexOf(qid));
      }
      n += longs.length >= 4 ? 1 : longs.length;   // 示範頁
      var pages = l.mcPages || [];
      for (j = 0; j < pages.length; j++) {
        if (pages[j].indexOf(qid) >= 0) return n + j;
      }
      n += pages.length;
    }
    return 0;
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
      if (nameEl) setPair(nameEl, topic.name || { zh: topic.id });
      var enEl = qs("#topic-en");        /* 英文名已在 #topic-name 內，這裡不再重複 */
      if (enEl) enEl.textContent = "";
      document.title = T(topic.name || { zh: topic.id }) + " · 自學追上站 / Catch-up Maths";

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
          b.appendChild(biSpan({ zh: "學習", en: "Learn" }));
          b.classList.add("kind");
          b.title = (p.lesson && p.lesson.title && p.lesson.title.zh) || "概念卡";
        } else if (p.kind === "long") {
          b.appendChild(biSpan({ zh: "示範", en: "Demo" }));
          b.classList.add("kind");
          b.title = (p.q && p.q.code) ? ("長題示範 " + p.q.code + " / demo") : "長題示範 / demo";
        } else if (p.kind === "demos") {
          b.appendChild(biSpan({ zh: "示範", en: "Demo" }));
          b.classList.add("kind");
          b.title = "長題示範 ×" + (p.demos || []).length + " / demo" +
            (p.lesson && p.lesson.title && p.lesson.title.zh ? "（" + p.lesson.title.zh + "）" : "");
        } else {
          var mcIdx = pages.slice(0, i + 1).filter(function (x) { return x.kind === "mc"; }).length;
          b.textContent = String(mcIdx);
          b.title = T({ zh: "練習 第 " + mcIdx + " 頁", en: "Practice page " + mcIdx });
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
        var secZh = "", secEn = "";
        if (multiLesson && pages[cur] && pages[cur].lesson) {
          var li = lessons.indexOf(pages[cur].lesson);
          if (li >= 0) { secZh = "第 " + (li + 1) + " 節 · "; secEn = "Lesson " + (li + 1) + " · "; }
        }
        setPair(bar, {
          zh: secZh + "第 " + (cur + 1) + " / " + pages.length + " 頁 · 本課完成 " + pct + "%",
          en: secEn + "Page " + (cur + 1) + " / " + pages.length + " · " + pct + "% of this topic"
        });
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

    if (cur === 0 && TOPIC.intro && (TOPIC.intro.zh || TOPIC.intro.en)) {
      var intro = el("div", "card");
      var h = el("div", "q-head");
      h.appendChild(el("span", "q-code", T({ zh: "這一課", en: "This lesson" })));
      intro.appendChild(h);
      intro.appendChild(biNode(TOPIC.intro, "div", "ccard-body"));
      body.appendChild(intro);
    }

    appendCommandHints(body);      // 常駐考試指令提示：做之前先看，減少「睇錯題目」的失分

    if (p.kind === "cards") renderCards(body, p, pages, cur, tid);
    else if (p.kind === "long") renderLong(body, p, pages, cur, tid);
    else if (p.kind === "demos") renderDemoSet(body, p, pages, cur, tid);
    else renderMcPage(body, p, pages, cur, tid, focusQid);

    // 卡住時才需要的東西：放在頁尾，不干擾作答
    var help = el("div", "help-link");
    var hz = el("span", "l-zh");
    hz.innerHTML = '卡住了？看看<a href="start.html">「開始之前」的三步求助法</a>。';
    var he = el("span", "l-en");
    he.innerHTML = 'Stuck? See the <a href="start.html">three steps to get help</a> in "Before you start".';
    help.appendChild(hz);
    help.appendChild(he);
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
      var lab = biSpan({
        zh: (tr.label || tr.opt || "") + ((tr.label || tr.opt) ? "：" : ""),
        en: (tr.labelEn || tr.label || tr.opt || "") + ((tr.labelEn || tr.label || tr.opt) ? ": " : "")
      });
      t.appendChild(el("b")).appendChild(lab);
      t.appendChild(biNode({ zh: tr.zh || "", en: tr.en || tr.zh || "" }, "span"));
      box.appendChild(t);
    });
    host.appendChild(el("div", "trap-head",
      T({ zh: "做完之後，檢查自己有沒有踩中這幾個常見錯誤：",
          en: "After finishing, check whether you fell into any of these common mistakes:" })));
    host.appendChild(box);
  }

  function appendStepExtras(box, st) {
    if (st.link && st.link.math) {
      var lk = el("div", "step-link");
      var ltag = el("span", "lk-tag");
      ltag.appendChild(biSpan({
        zh: st.link.label || ("用 " + (st.link.from || "(a)") + " 的答案"),
        en: st.link.labelEn || ("Use the answer of " + (st.link.from || "(a)"))
      }));
      lk.appendChild(ltag);
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
    box.appendChild(el("span", "ch-title", T({ zh: "題目字眼", en: "Command words" })));
    cmdHints().forEach(function (p) {
      var chip = el("span", "ch-chip");
      // 英文考試字眼永遠顯示（那是題目真正的指令）；中文解釋只在中文／中英模式顯示
      var en = el("b");
      richInto(en, p[0]);
      autoRender(en);
      chip.appendChild(en);
      var z = el("span", "l-zh");
      richInto(z, " " + p[1]);
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
        hh.appendChild(el("span", "q-code", T({ zh: "先學會", en: "Learn first" })));
        hh.appendChild(el("span", "q-source", T({
          zh: "看過概念卡再做練習", en: "Read the concept cards before practising"
        })));
        intro.appendChild(hh);
        intro.appendChild(biNode({
          zh: "這一課有 " + cards.length + " 張概念卡，每張都有定義、公式和常見錯誤。看完按「下一張」，最後一張會打 ✓。",
          en: "This lesson has " + cards.length + " concept cards, each with definitions, formulas " +
              "and common mistakes. Press \"Next card\" when you finish one; the last card gets a ✓."
        }, "div", "ccard-body"));
        body.appendChild(intro);
      }

      // 提示列要「常駐」：換卡時 body 被清空，所以要重新加上（否則學習頁會冇咗）
      appendCommandHints(body);

      var c = cards[i];
      var card = el("div", "card");
      var head = el("div", "ccard-head");
      head.appendChild(biNode(c.title || { zh: "" }, "h3"));
      card.appendChild(head);

      // 概念卡示意圖（一張卡可以有多幅圖：例如變換多於一次就逐步畫）
      appendFigures(card, c);

      /* 正文：中英各渲染一次（{{math:N}} 兩邊一樣，所以兩份都插得對）*/
      var b = el("div", "ccard-body concept-body");
      var bz = el("div", "l-zh");
      renderMathBody(bz, (c.body && c.body.zh) || "", c.math || []);
      var be = el("div", "l-en");
      renderMathBody(be, (c.body && c.body.en) || (c.body && c.body.zh) || "", c.math || []);
      b.appendChild(bz);
      b.appendChild(be);
      card.appendChild(b);

      if (c.warn && (c.warn.zh || c.warn.en)) {
        var w = el("div", "callout");
        w.appendChild(el("span", "tag", T({ zh: "常見錯誤", en: "Common mistake" })));
        w.appendChild(biNode(c.warn, "span"));
        card.appendChild(w);
      }

      if (c.vocab && c.vocab.length) {
        var v = el("div", "vocab");
        c.vocab.forEach(function (x) {
          var sp = el("span");
          sp.appendChild(el("b", null, x.en));         // 英文術語永遠顯示（要學的就是它）
          var z = el("span", "l-zh");
          z.textContent = " " + x.zh;
          sp.appendChild(z);
          v.appendChild(sp);
        });
        card.appendChild(v);
      }

      var foot = el("div", "row");
      foot.style.marginTop = "14px";
      var prev = btnPair("btn btn-sm", { zh: "← 上一張", en: "← Previous card" });
      prev.disabled = i === 0;
      prev.onclick = function () { i--; draw(); scrollToTopOf(cardEl); };
      var next = btnPair("btn btn-sm btn-primary", i === cards.length - 1
        ? { zh: "看完了，開始練習 →", en: "Done — start practising →" }
        : { zh: "下一張 →", en: "Next card →" });
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
    card.setAttribute("data-qid", q.id);
    var head = el("div", "q-head");
    head.appendChild(el("span", "q-code", q.code || q.id));
    if (q.kind === "short") {
      var kc = el("span", "q-kind");
      kc.appendChild(biSpan({ zh: "短答", en: "Short answer" }));
      head.appendChild(kc);
    }
    head.appendChild(el("span", "q-source", q.source || ""));
    head.appendChild(weakBtn(q));     // 加入弱點升級庫（長／短答是紙上作答，自己標記）
    if (q.marks) {
      var mk = el("span", "q-source");
      mk.appendChild(biSpan({ zh: "（" + q.marks + " 分）", en: "(" + q.marks + " marks)" }));
      head.appendChild(mk);
    }
    card.appendChild(head);

    // 同一頁放多條示範時：頂部提供「上一條／下一條」（像學習頁翻卡），可即時回頭或跳去下一條
    if (opt && opt.total > 1) {
      var demoNav = el("div", "row demo-nav");
      var pv = btnPair("btn btn-sm", { zh: "← 上一條", en: "← Previous" });
      pv.disabled = !opt.prev;
      pv.onclick = function () { if (opt.prev) opt.prev(); };
      demoNav.appendChild(pv);
      var dc = el("span", "small muted demo-count");
      dc.appendChild(biSpan(opt.header || { zh: "", en: "" }));
      demoNav.appendChild(dc);
      var nx = btnPair("btn btn-sm", opt.isLast
        ? { zh: "（最後一條）", en: "(last one)" }
        : { zh: "下一條 →", en: "Next →" });
      nx.disabled = !!opt.isLast;
      nx.onclick = function () { if (!opt.isLast && opt.onNext) opt.onNext(); };
      demoNav.appendChild(nx);
      card.appendChild(demoNav);
    }

    var stem = el("div", "q-stem");
    stem.appendChild(biNode(q.stem || { zh: "", en: "" }));
    card.appendChild(stem);

    (q.parts || []).forEach(function (pt) {
      var d = el("div", "q-stem");
      d.appendChild(el("b", null, (pt.label || "") + " "));
      d.appendChild(biNode({
        zh: pt.zh || pt.text || (q.stem && q.stem.zh) || "",
        en: pt.en || pt.text || (q.stem && q.stem.en) || ""
      }, "span"));
      if (pt.marks) {
        var pm = el("span", "q-source");
        pm.appendChild(biSpan({ zh: "（" + pt.marks + " 分）", en: "(" + pt.marks + " marks)" }));
        d.appendChild(pm);
      }
      card.appendChild(d);
    });

    var tryRow = el("div", "demo-try");
    var tt = el("span");
    tt.appendChild(biSpan({
      zh: "先自己想一想、動手寫一寫，再逐步看題解。",
      en: "Think it through and write it down yourself first, then reveal the steps one by one."
    }));
    tryRow.appendChild(tt);
    var startBtn = btnPair("btn btn-sm btn-primary", { zh: "開始看題解 →", en: "Show the steps →" });
    tryRow.appendChild(startBtn);
    if (aiOn()) {
      var ai = btnPair("btn btn-sm btn-ai", { zh: "問 AI", en: "Ask AI" });
      ai.setAttribute("data-ai-demo", q.id);
      ai.onclick = function () { openPrompt({ q: q, item: q }); };
      tryRow.appendChild(ai);
    }
    card.appendChild(tryRow);

    var stepsHost = el("div", "steps");
    card.appendChild(stepsHost);

    var moreRow = el("div", "row");
    moreRow.style.marginTop = "12px";
    var moreBtn = btnPair("btn btn-sm", { zh: "下一步", en: "Next step" });
    var allBtn = btnPair("btn btn-sm btn-ghost", { zh: "全部顯示", en: "Show all" });
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
      var h = biNode({
        zh: (st.title && st.title.zh) || ("第 " + (i + 1) + " 步"),
        en: (st.title && st.title.en) || ("Step " + (i + 1))
      }, "h4");
      if (aiOn()) h.appendChild(aiStepBtn(q, st, i));
      box.appendChild(h);
      if (st.math) {
        var f = el("div", "formula");
        formulaBlock(f, st.math, true);
        box.appendChild(f);
      }
      var why = biNode({ zh: st.zh || "", en: st.en || st.zh || "" }, "div", "why");
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
      var big = el("div", "big");
      big.appendChild(biSpan({ zh: "✓ 看完示範", en: "✓ Demonstration finished" }));
      boxt.appendChild(big);
      // tip 可以含 $...$（例如 $\Delta$、$^{2}$）→ 一定要行內渲染，否則會露出原字元
      if (sol.tip && (sol.tip.zh || sol.tip.en)) boxt.appendChild(biNode(sol.tip, "p"));
      endRow.appendChild(boxt);
      endRow.classList.remove("hidden");
      appendLongTraps(endRow, sol);       // 常見錯誤（只有標了 traps 的示範才有）
      var row = el("div", "row");
      if (opt && opt.prev) {
        var pb = btnPair("btn", { zh: "← 上一條", en: "← Previous" });
        pb.onclick = opt.prev;
        row.appendChild(pb);
      }
      var goNext = btnPair("btn btn-block btn-primary",
                           (opt && opt.nextLabel) || { zh: "下一頁 →", en: "Next page →" });
      goNext.onclick = function () {
        if (opt && opt.onNext) { opt.onNext(); return; }
        gotoPage(tid, cur + 1);
      };
      var back = btnPair("btn btn-block btn-ghost", { zh: "← 回主目錄", en: "← Home" });
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
        header: { zh: "示範 " + (i + 1) + " / " + demos.length,
                  en: "Demo " + (i + 1) + " / " + demos.length },
        total: demos.length,
        isLast: last,
        nextLabel: last
          ? { zh: "看完示範，開始練習 →", en: "Done with the demos — start practising →" }
          : { zh: "下一條示範 →", en: "Next demo →" },
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
      var b1 = el("b", "pd-title");
      b1.appendChild(biSpan({
        zh: "✓ 這一頁 " + page.row.length + " 題完成了",
        en: "✓ All " + page.row.length + " questions on this page are done"
      }));
      var s1 = el("span", "pd-sub");
      s1.appendChild(biSpan({
        zh: "本課已完成 " + (t ? topicPercent(t) : 0) + "%　按「下一頁」繼續。",
        en: (t ? topicPercent(t) : 0) + "% of this topic complete — press \"Next page\"."
      }));
      n.innerHTML = "";
      n.appendChild(b1);
      n.appendChild(s1);
    } else {
      n.classList.remove("pd-finish");
      setPair(n, {
        zh: "做完這 " + page.row.length + " 題，按「下一頁」繼續" +
            "（答錯的會自動進「弱點升級庫」，隔天再練一次就好）。",
        en: "Finish these " + page.row.length + " questions, then press \"Next page\" " +
            "(anything you miss goes into the weak-spot list automatically — try it again tomorrow)."
      });
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
        var note = el("div", "focus-note");
        note.appendChild(biSpan({
          zh: "從弱點升級庫回來：這一題已清空作答記錄，重新試一次吧。",
          en: "Back from the weak-spot list: this question's record has been cleared, so try it again."
        }));
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
    var nx = btnPair("btn btn-sm btn-primary", { zh: "下一頁 →", en: "Next page →" });
    nx.onclick = function () { gotoPage(tid, cur + 1); };
    var hm = btnPair("btn btn-sm btn-ghost", { zh: "回主目錄", en: "Home" });
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
    stem.appendChild(biNode(q.stem || { zh: "", en: "" }));
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
        hintRow.appendChild(el("span", "small muted",
          T({ zh: "已顯示完整解答。", en: "The full solution is shown." })));
        return;
      }
      hintRow.appendChild(el("span", "small muted", T({
        zh: "卡住了？先看提示再作答也沒問題：",
        en: "Stuck? You can look at a hint before answering — it costs nothing:"
      })));
      var b = btnPair("btn btn-sm", { zh: "提示 " + (revealed + 1) + " →",
                                      en: "Hint " + (revealed + 1) + " →" });
      b.onclick = function () {
        hinted = true;
        drawStep(revealed);
        revealed++;
        showHints();
      };
      var all = btnPair("btn btn-sm btn-ghost", { zh: "看完整解答", en: "Show the full solution" });
      all.onclick = function () {
        hinted = true;
        while (revealed < steps.length) { drawStep(revealed); revealed++; }
        showHints();
        appendFigures(tail, q);        // 睇晒步驟＝放棄作答 → 圖都可以出場
      };
      hintRow.appendChild(b);
      hintRow.appendChild(all);
      if (aiOn()) {                    // 問 AI：連這題的題幹一起生成提問
        var ai = btnPair("btn btn-sm btn-ai", { zh: "問 AI", en: "Ask AI" });
        ai.setAttribute("data-ai-q", q.id);
        ai.onclick = function () { openPrompt({ q: q, item: q }); };
        hintRow.appendChild(ai);
      }
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
      var h = biNode({
        zh: (st.title && st.title.zh) || ("第 " + (i + 1) + " 步"),
        en: (st.title && st.title.en) || ("Step " + (i + 1))
      }, "h4");
      if (aiOn()) h.appendChild(aiStepBtn(q, st, i));
      box.appendChild(h);
      if (st.math) {
        var f = el("div", "formula");
        formulaBlock(f, st.math, true);
        box.appendChild(f);
      }
      box.appendChild(biNode({ zh: st.zh || "", en: st.en || st.zh || "" }, "div", "why"));
      if (st.marking) box.appendChild(el("span", "marking", st.marking));
      appendStepExtras(box, st);
      stepsHost.appendChild(box);
    }

    function showTail(picked) {
      tail.innerHTML = "";
      if (!picked) {
        var ok = el("div", "answer-line");
        ok.appendChild(biSpan({ zh: "答案：" + q.answer + " ✓", en: "Answer: " + q.answer + " ✓" }));
        tail.appendChild(ok);
      } else {
        var bad = el("div", "answer-line miss");
        bad.appendChild(biSpan({ zh: "正確答案：" + q.answer, en: "Correct answer: " + q.answer }));
        tail.appendChild(bad);
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
          var lb = el("b");
          lb.appendChild(biSpan({ zh: "選 " + tr.opt + " 的話：", en: "If you chose " + tr.opt + ": " }));
          t.appendChild(lb);
          t.appendChild(biNode({ zh: tr.zh || "", en: tr.en || tr.zh || "" }, "span"));
          box.appendChild(t);
        });
        if (box.children.length) {
          // 把「答錯」重新框架成「掉進陷阱」：內部歸因 → 具體策略修正
          tail.appendChild(el("div", "trap-head", T(picked
            ? { zh: "✕ 差一點 —— 你不是不懂，而是掉進了出卷人設計的陷阱。看看偏差出在哪一步：",
                en: "✕ So close — you are not lost, you stepped into a trap the examiner set. " +
                    "See which step went off:" }
            : { zh: "為什麼會這樣選？", en: "Why would someone choose these?" })));
          tail.appendChild(box);
        }
      }
      if (sol.tip && (sol.tip.zh || sol.tip.en)) {
        var tip = el("div", "tip");
        tip.appendChild(el("b", null, T({ zh: "帶得走的技巧：", en: "Take-away tip: " })));
        tip.appendChild(biNode(sol.tip, "span"));
        tail.appendChild(tip);
      }
      if (sol.alt && sol.alt.length) {
        var tgl = btnPair("btn btn-sm btn-ghost alt-toggle",
                          { zh: "進階解法（參考）", en: "Advanced method (reference)" });
        var ab = el("div", "alt-body hidden");
        sol.alt.forEach(function (a, i) {
          var nm = el("div", "small muted");
          nm.appendChild(biSpan((a.name && (a.name.zh || a.name.en))
            ? a.name
            : { zh: "進階解法 " + (i + 1), en: "Advanced method " + (i + 1) }));
          ab.appendChild(nm);
          ab.appendChild(biNode({ zh: a.zh || "", en: a.en || a.zh || "" }));
        });
        tgl.onclick = function () { ab.classList.toggle("hidden"); };
        tail.appendChild(tgl);
        tail.appendChild(ab);
      }
      if (aiOn()) {
        var ai = btnPair("btn btn-sm btn-ai",
                         { zh: "問 AI：我唔明白這題的某一步", en: "Ask AI about a step of this question" });
        ai.setAttribute("data-ai-tail", q.id);
        ai.onclick = function () { openPrompt({ q: q, item: q }); };
        tail.appendChild(ai);
      }
    }

    return card;
  }

  /* ── 弱點升級庫（前稱錯題本）───────────────────────────────────────────── */
  function renderWrong() {
    var host = qs("#wrong-body");
    if (!host) return;
    host.innerHTML = "";          // 同上：重繪前先清空（切語言會重繪）
    var ids = wrongList();
    if (!ids.length) {
      var e = el("div", "card");
      e.appendChild(el("div", "done-banner"));
      var b1 = el("div", "empty");
      b1.appendChild(biSpan({
        zh: "升級庫是空的 —— 或者你已經把弱點全部補好了 ✓",
        en: "This list is empty — either nothing to fix yet, or you have cleared every weak spot ✓"
      }));
      e.appendChild(b1);
      var b2 = btnPair("btn btn-primary", { zh: "回主目錄", en: "Home" });
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
    var names = {};        /* id → {zh,en} 課題名（雙語）*/
    (INDEX.topics || []).forEach(function (t) {
      names[t.id] = t.name || { zh: t.id, en: t.id };
    });

    Object.keys(groups).sort().forEach(function (t) {
      var sec = el("div", "section-title");
      sec.appendChild(biSpan(names[t] || { zh: t, en: t }));
      host.appendChild(sec);

      groups[t].forEach(function (qid) {
        var row = el("div", "card");
        var inner = el("div", "wrong-item");
        var q = el("div", "wq");
        var st = store.mc[qid];
        var manual = !st && store.weak[qid];   // 自己加入的長／短答（紙上作答，無選項）
        var m = /-q(\d+)$/.exec(qid);
        var rec = el("div");
        rec.appendChild(biSpan({
          zh: (names[t] || {}).zh + " · 練習 " + (m ? parseInt(m[1], 10) : qid),
          en: ((names[t] || {}).en || (names[t] || {}).zh) + " · practice " +
              (m ? parseInt(m[1], 10) : qid)
        }));
        q.appendChild(rec);
        var note = el("div", "small muted");
        note.appendChild(biSpan(manual
          ? { zh: "你自己加入的（長／短答在紙上作答，對完題解再決定要不要留著）",
              en: "Added by you (long/short answers are written on paper — check the worked solution, then decide)" }
          : { zh: "你選了 " + st.picked + "（答錯 " + (st.tries || 1) + " 次）",
              en: "You chose " + st.picked + " (wrong " + (st.tries || 1) +
                  ((st.tries || 1) === 1 ? " time)" : " times)") }));
        q.appendChild(note);
        inner.appendChild(q);

        var again = btnPair("btn btn-sm btn-primary", { zh: "再練一次", en: "Practise again" });
        again.onclick = function () {
          delete store.mc[qid];
          delete store.weak[qid];
          save();
          go("topic.html?t=" + t + "&p=" + pageOfQuestion(t, qid) +
             "&q=" + encodeURIComponent(qid));
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
      store.weak = {};                      // 自己加入的長／短答記錄也一併清空
      save();
      location.reload();
    };
    updateWrongBadge();
  }

  /* ── 問 AI：提問 Prompt 生成器 ────────────────────────────────────────
     所有 prompt 都由「一份模板（data/learn/prompt-templates.json，中英各一份）＋
     題目資料」即時生成 → 改模板一次＝全站更新，新增課題不用另外維護 prompt。
     入口：練習頁提示列（整題）、題解每一步（聚焦該步）、題解底部。
  ──────────────────────────────────────────────────────────────────── */
  var TPLS = (INDEX && INDEX.promptTemplates) || null;
  var PM_OPTS = ["simpler", "examples", "examTips", "visual", "practice"];

  function aiOn() { return !!(TPLS && TPLS.zh && TPLS.en); }
  function tpl() {
    if (!aiOn()) return null;
    var l = window.LEARN_I18N ? window.LEARN_I18N.get() : "zh";
    return TPLS[l === "en" ? "en" : "zh"];
  }
  /* 取雙語值：物件按目前語言取，字串直接用 */
  function pickText(v) {
    if (!v) return "";
    return typeof v === "string" ? v : T(v);
  }
  function stepTitleText(st, i) {
    var tt = (st && st.title) || {};
    return T({ zh: tt.zh || ("第 " + (i + 1) + " 步"), en: tt.en || ("Step " + (i + 1)) });
  }
  function buildPrompt(o) {
    var t = tpl();
    if (!t) return "";
    var q = o.q || {};
    var L = [];
    var h = t.headings || {};

    L.push(t.role);
    L.push("");
    L.push(t.student);
    if (q.source || q.code) {
      L.push(h.source + "：" + [q.code, q.source].filter(Boolean).join(" · "));
    }
    L.push("");
    L.push(h.question + "：");
    var stem = pickText(q.stem);
    if (stem) L.push(stem);
    if (q.stem && q.stem.en && q.stem.en !== q.stem.zh) L.push("(EN) " + q.stem.en);
    if (q.type === "mc") {
      L.push(h.items + "：");
      ["A", "B", "C", "D"].forEach(function (K) {
        var v = (q.options || {})[K];
        if (v != null) L.push(K + ". " + pickText(v));
      });
    } else if ((q.parts || []).length) {
      L.push(h.parts + "：");
      (q.parts || []).forEach(function (pt) {
        L.push((pt.label || "") + " " + pickText({ zh: pt.zh || pt.text || "",
                                                   en: pt.en || pt.text || "" }));
      });
    }

    L.push("");
    L.push(h.focus + "：" + (o.step
      ? String(t.focusStep).replace("{n}", String((o.index || 0) + 1))
                         .replace("{title}", stepTitleText(o.step, o.index || 0))
      : t.focusAll));

    var steps = (q.solution && q.solution.steps) || [];
    var list = o.step ? [{ st: o.step, i: o.index || 0 }]
                      : steps.map(function (x, i) { return { st: x, i: i }; });
    if (list.length) {
      L.push("");
      L.push(h.existing + "：");
      list.forEach(function (x) {
        var line = "(" + (x.i + 1) + ") " + stepTitleText(x.st, x.i);
        if (x.st.math) line += "  " + x.st.math;
        L.push(line);
        var why = pickText({ zh: x.st.zh, en: x.st.en });
        if (why) L.push("    " + why);
      });
    }

    L.push("");
    L.push(h.doubt + "：");
    L.push(o.doubt || t.doubtPlaceholder);
    L.push("");
    L.push(h.requirements + "：");
    var n = 0;
    (t.requirements || []).forEach(function (r) { n++; L.push(n + ". " + r); });
    PM_OPTS.forEach(function (k) {
      if (o.opts && o.opts[k] && (t.options || {})[k]) { n++; L.push(n + ". " + t.options[k]); }
    });
    L.push("");
    L.push(h.format + "：" + t.format);
    return L.join("\n");
  }

  function openPrompt(o) {
    if (!aiOn()) return null;
    var t = tpl();
    var state = { opts: {} };
    var wrap = el("div", "prompt-modal");
    var box = el("div", "pm-box");

    var head = el("div", "pm-head");
    head.appendChild(el("h3", null, T({ zh: "問 AI：複製提問（可先修改）",
                                        en: "Ask AI: copy a prompt (edit it first if you like)" })));
    var x = el("button", "pm-x", "✕");
    x.setAttribute("aria-label", "close");
    x.onclick = function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); };
    head.appendChild(x);
    box.appendChild(head);

    box.appendChild(el("p", "pm-hint", T({
      zh: "下面的文字可以直接修改。按「複製」後貼去任何 AI（ChatGPT／Gemini／Claude），就可以繼續追問。",
      en: "The text below can be edited. Press Copy, then paste it into any AI " +
          "(ChatGPT / Gemini / Claude) and keep asking."
    })));

    var optsBox = el("div", "pm-opts");
    PM_OPTS.forEach(function (k) {
      var lb = el("label", "pm-opt");
      var cb = el("input");
      cb.type = "checkbox";
      cb.setAttribute("data-opt", k);
      cb.onchange = function () { state.opts[k] = cb.checked; refresh(); };
      lb.appendChild(cb);
      lb.appendChild(el("span", null, (t.optionLabels || {})[k] || k));
      optsBox.appendChild(lb);
    });
    box.appendChild(optsBox);

    var dl = el("label", "pm-label");
    dl.appendChild(biSpan({ zh: "我的具體疑問（寫下你想不通的那一行）",
                            en: "My specific question (the exact line you are stuck on)" }));
    box.appendChild(dl);
    var doubt = el("textarea", "pm-doubt");
    doubt.rows = 2;
    doubt.setAttribute("data-pm-doubt", "1");
    doubt.placeholder = t.doubtPlaceholder || "";
    doubt.oninput = function () { refresh(); };
    box.appendChild(doubt);

    var prev = el("textarea", "pm-preview");
    prev.rows = 14;
    prev.setAttribute("readonly", "readonly");
    prev.setAttribute("data-pm-preview", "1");
    box.appendChild(prev);

    var actions = el("div", "pm-actions");
    var copy = btnPair("btn btn-sm btn-primary", { zh: "複製", en: "Copy" });
    copy.setAttribute("data-pm-copy", "1");
    var status = el("span", "pm-status");
    actions.appendChild(copy);
    actions.appendChild(status);
    box.appendChild(actions);

    function refresh() {
      prev.value = buildPrompt({
        q: o.q, step: o.step, index: o.index, opts: state.opts, doubt: doubt.value
      });
    }
    copy.onclick = function () {
      var done = function () {
        status.textContent = T({ zh: "已複製 ✓ 可以貼去 AI 了", en: "Copied ✓ paste it into your AI" });
        setTimeout(function () { status.textContent = ""; }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(prev.value).then(done, function () {
          prev.select();
          status.textContent = T({ zh: "請長按選取並按「複製」",
                                   en: "Select the text and copy it manually" });
        });
      } else {
        try {
          prev.select();
          document.execCommand("copy");
          done();
        } catch (e) {
          status.textContent = T({ zh: "請長按選取並按「複製」",
                                   en: "Select the text and copy it manually" });
        }
      }
    };
    refresh();

    wrap.appendChild(box);
    wrap.onclick = function (e) { if (e.target === wrap) x.onclick(); };
    document.body.appendChild(wrap);
    return wrap;
  }

  /* 題解步驟標題旁的「問 AI」小按鈕（聚焦這一步） */
  function aiStepBtn(q, st, i) {
    var b = el("button", "ai-step");
    b.appendChild(biSpan({ zh: "問 AI", en: "Ask AI" }));
    b.setAttribute("data-ai-step", String(i));
    b.onclick = function () { openPrompt({ q: q, step: st, index: i }); };
    return b;
  }

  /* ── 啟動 ───────────────────────────────────────────────────────────── */
  var started = false;
  function renderCurrentPage() {
    if (PAGE === "index") renderIndex();
    else if (PAGE === "topic") renderTopic();
    else if (PAGE === "wrong") renderWrong();
  }
  /* 切換語言時由 assets/i18n.js 呼叫：單語文字（T() 出來的那些）要重新繪製 */
  window.__LEARN_RELANG = function () {
    if (!started) return;
    renderCurrentPage();
    rerenderAll();
  };

  function start() {
    if (started) return;              // 防止 DOMContentLoaded 與手動啟動重複渲染
    started = true;
    renderCurrentPage();

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
