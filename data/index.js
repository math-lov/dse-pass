// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_INDEX = {
 "version": 1,
 "stages": [
  {
   "id": 1,
   "name": {
    "zh": "第一階段 · 代數基礎",
    "en": "Stage 1 · Algebra Basics"
   },
   "note": {
    "zh": "以「及格」為目標：先補最常考、最容易拿分的代數基本功，由因式分解開始。"
   }
  }
 ],
 "topics": [
  {
   "id": "ws01",
   "stage": 1,
   "unit": 4,
   "name": {
    "zh": "WS01a · 因式分解基本功",
    "en": "WS01a · Factorization — Basic Skills"
   },
   "intro": {
    "zh": "這一課學四種方法：抽公因式、併項分組、用恆等式（平方差／完全平方）、十字相乘。DSE 卷一幾乎年年考一題因式分解，而且題目一定設計成「(a) 先分一個簡單的，(b) 再用 (a) 的結果」——所以 (a) 答對，(b) 就等於送分。",
    "en": "This lesson covers four methods: taking out the common factor, grouping, the identities (difference of two squares / perfect square) and the cross-method. Paper 1 of the HKDSE asks a factorisation question almost every year, and it is always designed as “(a) factorise something simple, then (b) use the result of (a)” — so getting (a) right makes (b) almost free marks."
   },
   "source": "EPH DSE Pass · Worksheet 1",
   "stats": {
    "mc": 18,
    "long": 7,
    "cards": 4,
    "pages": 6
   },
   "lessonIds": [
    "ws01-1"
   ]
  },
  {
   "id": "ws01b",
   "stage": 1,
   "unit": 4,
   "name": {
    "zh": "WS01b · 卷二 MC 27 題",
    "en": "WS01b · 27 MC (Paper 2 style)"
   },
   "intro": {
    "zh": "這一課把卷一因式分解的功夫搬去卷二（MC）。卷二題目多、時間少，所以除了「識做」，還要「快」：先看符號刪去一半選項、認出題目其實是平方差、或者先製造出共同的括號。每題都是歷屆 HKCEE／HKDSE 卷二真題，做完你就會發現它們來來去去都是同幾條路。",
    "en": "This lesson moves the factorization skills of Paper 1 into Paper 2 (multiple choice). Paper 2 has many questions and little time, so you need speed as well as understanding: read the signs to delete half the options, spot a hidden difference of two squares, or create the common bracket first. Every question is a real HKCEE/HKDSE Paper 2 question — you will see the same few routes again and again."
   },
   "source": "EPH DSE Pass · Worksheet 1 · Section 1C (DSE Paper 2 MC)",
   "stats": {
    "mc": 27,
    "long": 0,
    "cards": 2,
    "pages": 9
   },
   "lessonIds": [
    "ws01b-1"
   ]
  },
  {
   "id": "ws01c",
   "stage": 1,
   "unit": 4,
   "name": {
    "zh": "WS01c · 卷一 32 題（逐步示範）",
    "en": "WS01c · 32 Paper 1 questions, step by step"
   },
   "intro": {
    "zh": "卷一長題（DSE Paper 1）的因式分解題幾乎年年出現，而且設計成「(a) 先做一個簡單的，(b) 再用 (a) 的結果」。這一課把 WS01 第 2 節的 32 題全部拆成逐步示範：先自己做，卡住了才逐步看，重點是學會「(b) 一定藏著 (a) 的括號」這個套路 —— 看懂一次，之後所有年份的卷一都會做。",
    "en": "The Paper 1 factorization question appears almost every year and is designed as “(a) do something simple, (b) use the result of (a)”. This lesson breaks all 32 questions of WS01 Section 1B into step-by-step demonstrations: try each one yourself first, reveal the steps only when stuck, and learn the routine that (b) always hides the bracket from (a)."
   },
   "source": "EPH DSE Pass · Worksheet 1 · Section 1B (DSE Paper 1 long questions)",
   "stats": {
    "mc": 0,
    "long": 32,
    "cards": 4,
    "pages": 0
   },
   "lessonIds": [
    "ws01c-1",
    "ws01c-2",
    "ws01c-3",
    "ws01c-4"
   ]
  }
 ],
 "assessments": [],
 "promptTemplates": {
  "version": 1,
  "_note": "問 AI 提問模板（中英各一份）：前端所有 prompt 都由這份模板 + 題目資料即時生成，改一次＝全站更新。硬規則：新增課題不用改這裡；但改動這份檔案要跑 tools/learn_check.py（I6 會驗欄位齊全）。",
  "zh": {
   "role": "你是一位香港中學文憑試（DSE）數學科的補底老師，專門幫助基礎較弱的學生。請用繁體中文回答，語氣要鼓勵、具體，不要長篇大論。",
   "student": "我是香港 DSE 數學科考生，正在用「自學追上站」自學。",
   "headings": {
    "source": "題目出處",
    "question": "題目",
    "items": "選項",
    "parts": "分題",
    "focus": "我卡住的地方",
    "existing": "網站已經有的解說（請不要重複，直接針對我不明白的地方）",
    "doubt": "我的具體疑問",
    "requirements": "請你這樣做",
    "format": "回答格式"
   },
   "focusAll": "整題（由第一步開始）",
   "focusStep": "第 {n} 步：{title}",
   "requirements": [
    "用最淺白的語言解釋「為甚麼」要做這一步，不要只寫算式",
    "如果涉及公式或恆等式，指出它對應題目的哪一部分（哪一項、哪個括號）",
    "指出我這一步最可能犯的錯（符號、括號、運算次序）",
    "最後給我一句可以帶去考試的提醒"
   ],
   "format": "先寫「你卡住的原因」，再寫「逐步解釋」，最後寫「考試提醒」。每段不超過 4 行。",
   "doubtPlaceholder": "（例如：我不明白為甚麼抽負號時，括號內每一項都要變號）",
   "optionLabels": {
    "simpler": "用更淺白的方式解釋",
    "examples": "用簡單數字示範一次（例如代入 x = 1）",
    "examTips": "提醒我這類題在 DSE 的常見陷阱",
    "visual": "用圖像或表格說明",
    "practice": "出 2 題類似題給我練"
   },
   "options": {
    "simpler": "請用更淺白的語言重講一次（假設我完全沒有基礎）。",
    "examples": "請用簡單數字（例如代入 x = 1 或 x = 0）示範一次運算過程。",
    "examTips": "請指出這類題目在 DSE 最常見的陷阱與失分位。",
    "visual": "請用圖表或表格把這個關係呈現出來（可用文字描述表格）。",
    "practice": "請出 2 題同類型、由淺入深的題目給我練，先不要給答案。"
   }
  },
  "en": {
   "role": "You are a patient HKDSE Mathematics tutor who specialises in helping weaker students. Answer in clear, simple English. Be encouraging and specific, and keep it short.",
   "student": "I am a Hong Kong DSE Mathematics candidate studying on my own with the site \"Catch-up Maths\".",
   "headings": {
    "source": "Question source",
    "question": "Question",
    "items": "Options",
    "parts": "Parts",
    "focus": "Where I am stuck",
    "existing": "The explanation the site already gives (do not repeat it — answer my exact point)",
    "doubt": "My specific question",
    "requirements": "Please do this",
    "format": "Answer format"
   },
   "focusAll": "the whole question (from step 1)",
   "focusStep": "step {n}: {title}",
   "requirements": [
    "Explain WHY this step is done, in the simplest possible language — do not just write the algebra",
    "If a formula or identity is used, point out which part of the question it matches (which term or bracket)",
    "Point out the mistake I am most likely to make here (signs, brackets, order of operations)",
    "Finish with one sentence I can carry into the exam"
   ],
   "format": "First \"why you are stuck\", then \"step-by-step explanation\", then \"exam reminder\". Keep each part to 4 lines or fewer.",
   "doubtPlaceholder": "(e.g. I don't understand why every term inside the bracket changes sign when a minus is taken out)",
   "optionLabels": {
    "simpler": "Explain it more simply",
    "examples": "Show it with simple numbers (e.g. x = 1)",
    "examTips": "Warn me about the usual DSE traps",
    "visual": "Explain it with a diagram or table",
    "practice": "Give me 2 similar questions to try"
   },
   "options": {
    "simpler": "Please explain it again in simpler language (assume I have no background at all).",
    "examples": "Please work through it once with simple numbers (e.g. substitute x = 1 or x = 0).",
    "examTips": "Please tell me the most common traps and lost marks for this type of question in the DSE.",
    "visual": "Please present the relationship as a diagram or table (a text-drawn table is fine).",
    "practice": "Please give me 2 similar questions, easy to harder, without the answers yet."
   }
  }
 },
 "generatedAt": "2026-09-28T12:41:56Z",
 "counts": {
  "topics": 3,
  "held": 0,
  "mc": 45,
  "long": 39,
  "cards": 10,
  "blocked": 0
 }
};
