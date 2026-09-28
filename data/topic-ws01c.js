// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS01C = {
 "id": "ws01c",
 "stage": 1,
 "unit": 4,
 "subtopic": "factorization",
 "source": "EPH DSE Pass · Worksheet 1 · Section 1B (DSE Paper 1 long questions)",
 "name": {
  "zh": "WS01c · 卷一 32 題（逐步示範）",
  "en": "WS01c · 32 Paper 1 questions, step by step"
 },
 "intro": {
  "zh": "卷一長題（DSE Paper 1）的因式分解題幾乎年年出現，而且設計成「(a) 先做一個簡單的，(b) 再用 (a) 的結果」。這一課把 WS01 第 2 節的 32 題全部拆成逐步示範：先自己做，卡住了才逐步看，重點是學會「(b) 一定藏著 (a) 的括號」這個套路 —— 看懂一次，之後所有年份的卷一都會做。",
  "en": "The Paper 1 factorization question appears almost every year and is designed as “(a) do something simple, (b) use the result of (a)”. This lesson breaks all 32 questions of WS01 Section 1B into step-by-step demonstrations: try each one yourself first, reveal the steps only when stuck, and learn the routine that (b) always hides the bracket from (a)."
 },
 "cmdHints": [
  {
   "en": "Hence",
   "zh": "由此：必須用 (a) 的結果（卷一的固定套路）"
  },
  {
   "en": "using the result of (a)",
   "zh": "用 (a) 的答案：先把 (a) 抽出的那個括號找出來"
  },
  {
   "en": "Factorize the following expressions",
   "zh": "分解以下各式（(a)(b)(c) 要逐部做）"
  },
  {
   "en": "write down the result",
   "zh": "寫出結果：每個括號都要寫齊，漏寫會失分"
  },
  {
   "en": "Factorize completely",
   "zh": "徹底分解：分到每個括號都不能再分為止"
  }
 ],
 "lessons": [
  {
   "id": "ws01c-1",
   "title": {
    "zh": "第 1 節 · 三部曲入門（Q1–Q8）",
    "en": "Set 1 · The (a)→(b) routine (Q1–Q8)"
   },
   "cards": [
    {
     "id": "ws01c-c1",
     "topic": "ws01c",
     "title": {
      "zh": "卷一的固定套路：見 Hence 就用 (a)",
      "en": "The Paper 1 routine: use (a) whenever you see Hence"
     },
     "body": {
      "zh": "卷一長題（Factorize (a)…(b)…）幾乎永遠是同一個結構：**(a) 用一個簡單方法分解，(b) 必須用 (a) 的結果。**\n標準三步：① 先做 (a) 並把答案圈起來；② 在 (b) 找出「同一條括號」（通常是把餘下兩項抽公因式之後出現）；③ 把共同括號抽走。\n例：$x^{2}y+3xy^{2}+2x+6y$ —— (a) 給 $xy(x+3y)$，而 $+2x+6y=2(x+3y)$：{{math:0}}\n**不要**重新由頭分解 (b)：既浪費時間，又拿不到方法分。",
      "en": "Paper 1 long questions (Factorize (a)…(b)…) almost always share one structure: **(a) uses a simple method, (b) must use the result of (a).**\nThree standard moves: (1) do (a) and circle the answer; (2) find the same bracket in (b) (usually after factoring the remaining two terms); (3) take that bracket out.\nExample: $x^{2}y+3xy^{2}+2x+6y$ — (a) gives $xy(x+3y)$ and $+2x+6y=2(x+3y)$: {{math:0}}\nNever start (b) from scratch: it wastes time and loses the method mark."
     },
     "math": [
      "x^{2}y+3xy^{2}+2x+6y=xy(x+3y)+2(x+3y)=(x+3y)(xy+2)"
     ],
     "vocab": [
      {
       "en": "Hence",
       "zh": "由此（要用上一部的結果）"
      },
      {
       "en": "factorize completely",
       "zh": "徹底分解"
      }
     ],
     "warn": {
      "zh": "(b) 最少要寫一行「用 (a) 的結果」的動作（例如把 (a) 的答案搬過來），否則會失去方法分 (1M)。",
      "en": "Part (b) must show at least one line using (a)'s result (e.g. copying it in), otherwise the method mark (1M) is lost."
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws01c-q01",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q1",
     "source": "WS01 · DSE Paper 1 題型 Q1 [HKCEE 2009 Paper 1 Q3]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$x^{2}y+3xy^{2}$,",
       "en": "$x^{2}y+3xy^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$x^{2}y+3xy^{2}+2x+6y$.",
       "en": "$x^{2}y+3xy^{2}+2x+6y$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 抽公因式",
         "en": "Part (a): take out the common factor"
        },
        "math": "x^{2}y+3xy^{2}=xy(x+3y)",
        "zh": "兩個單項的公因式是 $xy$（每個字母取最低次）。這一步的答案就是 (b) 的鎖匙。",
        "en": "The common factor is $xy$ (take the lowest power of each letter). This answer is the key to part (b).",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 搬 (a) 的答案，再配出同一個括號",
         "en": "Part (b): reuse (a) and create the same bracket"
        },
        "math": "x^{2}y+3xy^{2}+2x+6y=xy(x+3y)+2x+6y=xy(x+3y)+2(x+3y)",
        "zh": "把 (a) 的結果直接搬過來；餘下的 $+2x+6y$ 抽 $2$ 得 $2(x+3y)$，與 (a) 的括號一致。",
        "en": "Copy the result of (a); the remaining $+2x+6y$ becomes $2(x+3y)$, matching the bracket from (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走共同括號",
         "en": "Take out the common bracket"
        },
        "math": "=(x+3y)(xy+2)",
        "zh": "抽走 $(x+3y)$，剩下 $xy+2$。",
        "en": "Factor out $(x+3y)$; what remains is $xy+2$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 逐項抽公因式就停手",
        "labelEn": "(b) stopping at separate common factors",
        "zh": "把六項各自抽完就當完成；題目要的是「一個乘積」，必須抽到出現共同括號為止。",
        "en": "Factoring each term separately is not enough: the answer must be a single product, so keep going until one bracket appears twice."
       },
       {
        "label": "(a) 抽 $x^{2}y$",
        "labelEn": "(a) taking out $x^{2}y$",
        "zh": "公因式是 $xy$ 而不是 $x^{2}y$；抽錯會令括號內出現分數。",
        "en": "The common factor is $xy$, not $x^{2}y$; taking out too much leaves fractions inside the bracket."
       }
      ],
      "tip": {
       "zh": "卷一的 (b) 幾乎一定「藏著」與 (a) 相同的括號；(a) 做對，(b) 就是送分。",
       "en": "In Paper 1, part (b) almost always hides the same bracket as (a): get (a) right and (b) is nearly free."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q02",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q2",
     "source": "WS01 · DSE Paper 1 題型 Q2 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$2m^{2}n-4mn^{2}$,",
       "en": "$2m^{2}n-4mn^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$2m^{2}n-4mn^{2}-m+2n$.",
       "en": "$2m^{2}n-4mn^{2}-m+2n$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 抽公因式",
         "en": "Part (a): take out the common factor"
        },
        "math": "2m^{2}n-4mn^{2}=2mn(m-2n)",
        "zh": "係數取 H.C.F.（$2$），字母取最低次（$mn$），所以公因式是 $2mn$。",
        "en": "Take the H.C.F. of the coefficients ($2$) and the lowest powers of the letters ($mn$), giving $2mn$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 用 (a) 的結果",
         "en": "Part (b): use the result of (a)"
        },
        "math": "2m^{2}n-4mn^{2}-m+2n=2mn(m-2n)-m+2n=2mn(m-2n)-(m-2n)",
        "zh": "後兩項 $-m+2n=-(m-2n)$：負號要連 $-1$ 一起抽，括號才對得上 (a)。",
        "en": "The last two terms give $-(m-2n)$: take out $-1$ as well so the bracket matches part (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(m-2n)$",
         "en": "Take out $(m-2n)$"
        },
        "math": "=(m-2n)(2mn-1)",
        "zh": "抽走 $(m-2n)$，剩下 $2mn-1$（那個 $-1$ 一定要寫，不可以消失）。",
        "en": "Factor out $(m-2n)$; what remains is $2mn-1$ (the $-1$ must be written down).",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "後兩項抽 $+1$",
        "labelEn": "Taking out $+1$ from the last two terms",
        "zh": "$-m+2n=-(m-2n)$，不是 $+(m-2n)$；符號錯就會得到 $(m-2n)(2mn+1)$。",
        "en": "$-m+2n=-(m-2n)$, not $+(m-2n)$; the wrong sign gives $(m-2n)(2mn+1)$."
       },
       {
        "label": "忘記寫 $-1$",
        "labelEn": "Dropping the $-1$",
        "zh": "抽走括號後該位置是 $-1$，漏寫就等於少了一個因式。",
        "en": "After factoring out the bracket the leftover is $-1$; dropping it loses a factor."
       }
      ],
      "tip": {
       "zh": "後兩項「倒轉次序」（$-m+2n$）就抽 $-1$：$-(m-2n)$，這是卷一最常見的一步。",
       "en": "When the last pair comes in reversed order ($-m+2n$), take out $-1$: $-(m-2n)$ — the most common move in Paper 1."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q03",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q3",
     "source": "WS01 · DSE Paper 1 題型 Q3 [HKCEE 2006 Paper 1 Q3]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$2b-ab$,",
       "en": "$2b-ab$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$4-a^{2}$,",
       "en": "$4-a^{2}$,",
       "marks": 1
      },
      {
       "label": "(c)",
       "text": "$4-a^{2}+2b-ab$.",
       "en": "$4-a^{2}+2b-ab$.",
       "marks": 1
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a)(b) 兩部各自抽公因式／用平方差",
         "en": "Parts (a) and (b): factor each simple expression"
        },
        "math": "2b-ab=b(2-a)\\quad\\text{；}\\quad 4-a^{2}=(2+a)(2-a)",
        "zh": "(a) 兩項都有 $b$；(b) 是平方差 $2^{2}-a^{2}$。兩部的答案都是 (c) 的材料。",
        "en": "(a) Both terms contain $b$; (b) is the difference of two squares $2^{2}-a^{2}$. Both answers feed into part (c).",
        "marking": "(1A)(1A)"
       },
       {
        "title": {
         "zh": "(c) 先分組，再用 (a)(b) 的答案",
         "en": "Part (c): group, then substitute (a) and (b)"
        },
        "math": "4-a^{2}+2b-ab=(2+a)(2-a)+b(2-a)",
        "zh": "$4-a^{2}$ 用 (b) 的結果；$+2b-ab$ 用 (a) 的結果 $b(2-a)$（官方 marking：(c) 直接給 1A，分組那一步不另給分）。",
        "en": "Use (b)'s result for $4-a^{2}$ and (a)'s result $b(2-a)$ for $+2b-ab$."
       },
       {
        "title": {
         "zh": "抽走 $(2-a)$",
         "en": "Take out $(2-a)$"
        },
        "math": "=(2-a)(2+a+b)",
        "zh": "兩項都有 $(2-a)$，抽走後剩下 $(2+a)$ 與 $b$。",
        "en": "Both terms contain $(2-a)$; what remains is $(2+a)$ and $b$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(c) 由頭重做",
        "labelEn": "(c) starting from scratch",
        "zh": "(c) 的最快做法是搬 (a)(b) 的答案；重新展開會又慢又容易錯。",
        "en": "The quick way is to reuse (a) and (b); expanding again is slow and error-prone."
       },
       {
        "label": "(a) 寫成 $b(a-2)$",
        "labelEn": "(a) written as $b(a-2)$",
        "zh": "$2b-ab=b(2-a)$：括號內次序不要倒轉，否則 (c) 就配不上。",
        "en": "$2b-ab=b(2-a)$: keep the order inside the bracket or part (c) will not match."
       }
      ],
      "tip": {
       "zh": "三部曲的題目：先做 (a)(b)，把兩個答案寫在旁邊，(c) 就會自己浮出來。",
       "en": "In a three-part question, do (a) and (b) first and jot the answers down — part (c) then falls into place."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q04",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q4",
     "source": "WS01 · DSE Paper 1 題型 Q4 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$4mn-3n$,",
       "en": "$4mn-3n$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$16m^{2}-9$,",
       "en": "$16m^{2}-9$,",
       "marks": 1
      },
      {
       "label": "(c)",
       "text": "$16m^{2}-9-4mn+3n$.",
       "en": "$16m^{2}-9-4mn+3n$.",
       "marks": 1
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a)(b) 各自分解",
         "en": "Parts (a) and (b)"
        },
        "math": "4mn-3n=n(4m-3)\\quad\\text{；}\\quad 16m^{2}-9=(4m+3)(4m-3)",
        "zh": "(a) 抽 $n$；(b) 平方差 $16m^{2}-9=(4m)^{2}-3^{2}$。",
        "en": "(a) Take out $n$; (b) the difference of two squares $16m^{2}-9=(4m)^{2}-3^{2}$.",
        "marking": "(1A)(1A)"
       },
       {
        "title": {
         "zh": "(c) 分組並代入",
         "en": "Part (c): group and substitute"
        },
        "math": "16m^{2}-9-4mn+3n=(16m^{2}-9)-(4mn-3n)=(4m+3)(4m-3)-n(4m-3)",
        "zh": "把 (c) 分成兩組：前面用 (b)，後面用 (a)（注意後面要整體加負號再抽 $n$，官方 marking 這一步不另給分）。",
        "en": "Split (c) into two groups: (b) for the front, (a) for the back (note the minus in front of the second group)."
       },
       {
        "title": {
         "zh": "抽走 $(4m-3)$",
         "en": "Take out $(4m-3)$"
        },
        "math": "=(4m-3)(4m+3-n)",
        "zh": "抽走 $(4m-3)$，剩下 $(4m+3)$ 與 $-n$。",
        "en": "Factor out $(4m-3)$; what remains is $(4m+3)$ and $-n$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(c) 負號只加在第一項",
        "labelEn": "(c) applying the minus to only one term",
        "zh": "$-(4mn-3n)=-4mn+3n$：加括號後兩項都要變號。",
        "en": "$-(4mn-3n)=-4mn+3n$: after inserting the bracket both signs flip."
       },
       {
        "label": "(b) 忘記平方差要寫兩次",
        "labelEn": "(b) forgetting the bracket is a difference of squares",
        "zh": "$16m^{2}-9=(4m+3)(4m-3)$，兩個括號都要寫，(c) 才會配得上。",
        "en": "$16m^{2}-9=(4m+3)(4m-3)$ — both brackets are needed for part (c) to work."
       }
      ],
      "tip": {
       "zh": "(c) 第一步永遠是「加括號」：把 $_ - (_)$ 寫出來，之後就是抽公因式。",
       "en": "Part (c) always starts by inserting brackets: write it as $-(\\;)$ and then factor."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q05",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q5",
     "source": "WS01 · DSE Paper 1 題型 Q5 [HKCEE 2007 Paper 1 Q3]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$r^{2}+12r+36$,",
       "en": "$r^{2}+12r+36$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$r^{2}+12r+36-s^{2}$.",
       "en": "$r^{2}+12r+36-s^{2}$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 完全平方",
         "en": "Part (a): perfect square"
        },
        "math": "r^{2}+12r+36=(r+6)^{2}",
        "zh": "$r^{2}+12r+36=r^{2}+2(r)(6)+6^{2}$，符合 $a^{2}+2ab+b^{2}$。",
        "en": "$r^{2}+12r+36=r^{2}+2(r)(6)+6^{2}$, matching $a^{2}+2ab+b^{2}$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 用 (a) 造成平方差",
         "en": "Part (b): use (a) to create a difference of two squares"
        },
        "math": "r^{2}+12r+36-s^{2}=(r+6)^{2}-s^{2}",
        "zh": "把 (a) 的結果 $ (r+6)^{2}$ 搬過來，整條變成 $a^{2}-b^{2}$（$a=r+6$、$b=s$）。",
        "en": "Substitute the result of (a): the expression becomes $a^{2}-b^{2}$ with $a=r+6$, $b=s$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "套平方差",
         "en": "Apply the difference of two squares"
        },
        "math": "=(r+6+s)(r+6-s)",
        "zh": "$(a+b)(a-b)$：$a=r+6$ 要整條加括號。",
        "en": "$(a+b)(a-b)$ — keep $a=r+6$ in its bracket.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 由頭十字相乘",
        "labelEn": "(b) redoing the cross-method",
        "zh": "(b) 只要用 (a) 的結果就能變成平方差；重新分解會浪費時間，而且通常做不出來（有兩個字母）。",
        "en": "Part (b) only needs (a)'s result to become a difference of squares; starting again wastes time and usually fails."
       },
       {
        "label": "平方差的 $b$ 忘了括號",
        "labelEn": "Forgetting the bracket in the identity",
        "zh": "$(r+6+s)(r+6-s)$：$a$ 是整條 $(r+6)$，不能寫成 $r+6+s$ 後又拆散。",
        "en": "$(r+6+s)(r+6-s)$: $a$ is the whole bracket $(r+6)$, so keep it together."
       }
      ],
      "tip": {
       "zh": "見到「完全平方 $-$ 平方」的形狀：先 (a) 再平方差，兩步就完。",
       "en": "When you see 'perfect square $-$ square', do (a) then the difference of two squares — two moves."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q06",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q6",
     "source": "WS01 · DSE Paper 1 題型 Q6 [HKCEE 2010 Paper 1 Q3]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$p^{2}+14pq+49q^{2}$,",
       "en": "$p^{2}+14pq+49q^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$4r^{2}-p^{2}-14pq-49q^{2}$.",
       "en": "$4r^{2}-p^{2}-14pq-49q^{2}$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 完全平方",
         "en": "Part (a): perfect square"
        },
        "math": "p^{2}+14pq+49q^{2}=(p+7q)^{2}",
        "zh": "$p^{2}+2(p)(7q)+(7q)^{2}$ ✓",
        "en": "$p^{2}+2(p)(7q)+(7q)^{2}$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 先抽負號，造成平方差",
         "en": "Part (b): take out the minus to create a difference of squares"
        },
        "math": "4r^{2}-p^{2}-14pq-49q^{2}=4r^{2}-(p^{2}+14pq+49q^{2})=(2r)^{2}-(p+7q)^{2}",
        "zh": "後面三項整體加括號並變號，再用 (a) 的結果：$-p^{2}-14pq-49q^{2}=-(p+7q)^{2}$。",
        "en": "Bracket the last three terms with a minus and use (a): $-p^{2}-14pq-49q^{2}=-(p+7q)^{2}$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "套平方差",
         "en": "Apply the difference of two squares"
        },
        "math": "=(2r+p+7q)(2r-p-7q)",
        "zh": "$a=2r$、$b=p+7q$；拆括號時只有「減的那個」變號：$2r-(p+7q)=2r-p-7q$。",
        "en": "With $a=2r$, $b=p+7q$: only the subtracted bracket flips, $2r-(p+7q)=2r-p-7q$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "負號只加在第一項",
        "labelEn": "Applying the minus to one term only",
        "zh": "$-p^{2}-14pq-49q^{2}=-(p^{2}+14pq+49q^{2})$：三項全部變號。",
        "en": "$-p^{2}-14pq-49q^{2}=-(p^{2}+14pq+49q^{2})$: all three signs flip."
       },
       {
        "label": "(b) 把 $4r^{2}$ 也抽進負號",
        "labelEn": "(b) putting $4r^{2}$ inside the minus",
        "zh": "只有「後三項」要變號，$4r^{2}$ 留在外面，否則做不出平方差。",
        "en": "Only the last three terms flip sign; $4r^{2}$ stays outside, otherwise no difference of squares appears."
       }
      ],
      "tip": {
       "zh": "$-X-Y-Z$ 這類尾巴：整組抽 $-1$ 變成 $-(X+Y+Z)$，再用 (a)。",
       "en": "For a tail like $-X-Y-Z$, factor out $-1$ to get $-(X+Y+Z)$ and then use (a)."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q07",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q7",
     "source": "WS01 · DSE Paper 1 題型 Q7 [HKDSE 2013 Paper 1 Q3]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$9x^{2}-4y^{2}$,",
       "en": "$9x^{2}-4y^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$9x^{2}-4y^{2}+9x+6y$.",
       "en": "$9x^{2}-4y^{2}+9x+6y$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 平方差",
         "en": "Part (a): difference of two squares"
        },
        "math": "9x^{2}-4y^{2}=(3x+2y)(3x-2y)",
        "zh": "$(3x)^{2}-(2y)^{2}$ ✓",
        "en": "$(3x)^{2}-(2y)^{2}$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 用 (a)，後兩項抽 $3$",
         "en": "Part (b): use (a) and factor $3$ from the last two terms"
        },
        "math": "9x^{2}-4y^{2}+9x+6y=(3x+2y)(3x-2y)+3(3x+2y)",
        "zh": "$+9x+6y=+3(3x+2y)$：正是 (a) 其中一個括號。",
        "en": "$+9x+6y=+3(3x+2y)$, which is one of (a)'s brackets.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(3x+2y)$",
         "en": "Take out $(3x+2y)$"
        },
        "math": "=(3x+2y)(3x-2y+3)",
        "zh": "抽走 $(3x+2y)$，剩下 $(3x-2y)$ 與 $+3$。",
        "en": "Factor out $(3x+2y)$; what remains is $(3x-2y)$ and $+3$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "抽走 $(3x-2y)$",
        "labelEn": "Taking out $(3x-2y)$",
        "zh": "$+9x+6y=3(3x+2y)$，所以抽走的是 $(3x+2y)$；抽錯括號就對不上。",
        "en": "$+9x+6y=3(3x+2y)$, so $(3x+2y)$ is the one to factor out."
       },
       {
        "label": "$+3$ 寫成 $-3$",
        "labelEn": "$+3$ written as $-3$",
        "zh": "$+9x+6y$ 是加，所以最後的常數項是 $+3$。",
        "en": "$+9x+6y$ is positive, so the final constant is $+3$."
       }
      ],
      "tip": {
       "zh": "(a) 給兩個括號，(b) 一定選其中一個：把餘下兩項抽到能產生它。",
       "en": "Part (a) gives two brackets; part (b) uses one of them — factor the remaining pair to produce it."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q08",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q8",
     "source": "WS01 · DSE Paper 1 題型 Q8 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$25r^{2}-16s^{2}$,",
       "en": "$25r^{2}-16s^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$25r^{2}-16s^{2}-20r+16s$.",
       "en": "$25r^{2}-16s^{2}-20r+16s$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 平方差",
         "en": "Part (a): difference of two squares"
        },
        "math": "25r^{2}-16s^{2}=(5r+4s)(5r-4s)",
        "zh": "$(5r)^{2}-(4s)^{2}$ ✓",
        "en": "$(5r)^{2}-(4s)^{2}$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後兩項抽 $-4$",
         "en": "Part (b): take out $-4$ from the last two terms"
        },
        "math": "25r^{2}-16s^{2}-20r+16s=(5r+4s)(5r-4s)-4(5r-4s)",
        "zh": "$-20r+16s=-4(5r-4s)$：抽 $-4$ 才對上 (a) 的 $(5r-4s)$。",
        "en": "$-20r+16s=-4(5r-4s)$: taking out $-4$ matches $(5r-4s)$ from (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(5r-4s)$",
         "en": "Take out $(5r-4s)$"
        },
        "math": "=(5r-4s)(5r+4s-4)",
        "zh": "抽走 $(5r-4s)$，剩下 $(5r+4s)$ 與 $-4$。",
        "en": "Factor out $(5r-4s)$; what remains is $(5r+4s)$ and $-4$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "抽 $+4$ 而不是 $-4$",
        "labelEn": "Taking out $+4$ instead of $-4$",
        "zh": "$-20r+16s=-4(5r-4s)$；抽 $+4$ 會得到 $-(5r+4s)$，對不上 (a)。",
        "en": "$-20r+16s=-4(5r-4s)$; taking out $+4$ gives $-(5r+4s)$, which does not match (a)."
       },
       {
        "label": "$-4$ 漏寫",
        "labelEn": "Dropping the $-4$",
        "zh": "抽走共同括號後剩下的 $-4$ 要寫在第二個括號內。",
        "en": "The leftover $-4$ must appear in the second bracket."
       }
      ],
      "tip": {
       "zh": "(b) 的後兩項符號一正一負時，通常要抽「負公因式」；試 $-1$、$-2$、$-4$…看哪個能對上 (a)。",
       "en": "When the last pair has mixed signs, try a negative common factor ($-1$, $-2$, $-4$…) until it matches (a)."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": []
  },
  {
   "id": "ws01c-2",
   "title": {
    "zh": "第 2 節 · 製造共同括號（Q9–Q16）",
    "en": "Set 2 · Creating the shared bracket (Q9–Q16)"
   },
   "cards": [
    {
     "id": "ws01c-c2",
     "topic": "ws01c",
     "title": {
      "zh": "(b) 的後兩項：抽公因式去「製造」共同括號",
      "en": "The last pair in (b): factor it to create the shared bracket"
     },
     "body": {
      "zh": "(b) 的尾巴（兩項或三項）一定可以抽成 (a) 那個括號的倍數，常見三種：\n① 直接抽正數：$+9a+18b=+9(a+2b)$；\n② 倒轉次序 → 抽負號：$-m+2n=-(m-2n)$、$-20r+16s=-4(5r-4s)$；\n③ 高次題先抽最低次：$a^{4}+a^{3}-12a^{2}=a^{2}(a^{2}+a-12)$。\n三項題的例子：{{math:0}}\n再代入 (a) 的答案，最後抽走共同括號：{{math:1}}\n只要抽到與 (a) 相同的括號，最後一步就是「抽走它」。",
      "en": "The tail of (b) can always be written as a multiple of (a)'s bracket. Three common cases:\n(1) factor a positive number: $+9a+18b=+9(a+2b)$;\n(2) reversed order → factor out a minus: $-m+2n=-(m-2n)$, $-20r+16s=-4(5r-4s)$;\n(3) higher degree → factor out the lowest power first: $a^{4}+a^{3}-12a^{2}=a^{2}(a^{2}+a-12)$.\nExample with three parts: {{math:0}}\nNow substitute (a)'s answer and take the shared bracket out: {{math:1}}\nOnce the bracket matches (a), the last step is simply to take it out."
     },
     "math": [
      "9m-6n-6m^{2}+13mn-6n^{2}=(9m-6n)-(6m^{2}-13mn+6n^{2})",
      "=3(3m-2n)-(3m-2n)(2m-3n)=(3m-2n)(3-2m+3n)"
     ],
     "vocab": [
      {
       "en": "reversed order",
       "zh": "次序倒轉"
      },
      {
       "en": "method mark",
       "zh": "方法分 (1M)"
      }
     ],
     "warn": {
      "zh": "抽走共同括號之後，剩下的部分（例如 $3-2m+3n$、$xy+2$）要完整寫出，漏寫會扣分。",
      "en": "After taking the bracket out, write the remaining part completely (e.g. $3-2m+3n$, $xy+2$) — omitting it loses marks."
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws01c-q09",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q9",
     "source": "WS01 · DSE Paper 1 題型 Q9 [HKDSE 2012 Paper 1 Q3]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$a^{2}-8ab+16b^{2}$,",
       "en": "$a^{2}-8ab+16b^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$a^{2}-8ab+16b^{2}+5a-20b$.",
       "en": "$a^{2}-8ab+16b^{2}+5a-20b$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 完全平方",
         "en": "Part (a): perfect square"
        },
        "math": "a^{2}-8ab+16b^{2}=(a-4b)^{2}",
        "zh": "$a^{2}-2(a)(4b)+(4b)^{2}$ ✓（中間項是減，所以括號內是減）。",
        "en": "$a^{2}-2(a)(4b)+(4b)^{2}$ ✓ — the middle minus makes the bracket minus.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後兩項抽 $5$",
         "en": "Part (b): take out $5$ from the last two terms"
        },
        "math": "a^{2}-8ab+16b^{2}+5a-20b=(a-4b)^{2}+5(a-4b)",
        "zh": "$+5a-20b=+5(a-4b)$，正是 (a) 的括號。",
        "en": "$+5a-20b=+5(a-4b)$, exactly (a)'s bracket.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(a-4b)$",
         "en": "Take out $(a-4b)$"
        },
        "math": "=(a-4b)(a-4b+5)",
        "zh": "兩項都有 $(a-4b)$；抽走後剩下 $(a-4b)$ 與 $+5$。",
        "en": "Both terms contain $(a-4b)$; what remains is $(a-4b)$ and $+5$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(a) 中間項符號錯",
        "labelEn": "(a) middle-term sign error",
        "zh": "$a^{2}-8ab+16b^{2}=(a-4b)^{2}$，不是 $(a+4b)^{2}$（那會是 $+8ab$）。",
        "en": "$a^{2}-8ab+16b^{2}=(a-4b)^{2}$, not $(a+4b)^{2}$ (which gives $+8ab$)."
       },
       {
        "label": "(b) 抽走括號後漏了那個 $(a-4b)$",
        "labelEn": "(b) losing the repeated bracket",
        "zh": "答案是 $(a-4b)(a-4b+5)$：$(a-4b)$ 出現兩次，不可以只寫一次。",
        "en": "The answer is $(a-4b)(a-4b+5)$: the bracket appears twice and must be written twice."
       }
      ],
      "tip": {
       "zh": "(a) 是完全平方時，(b) 通常就是「同一條括號」再乘一個數字。",
       "en": "When (a) is a perfect square, (b) is usually that same bracket multiplied by a number."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q10",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q10",
     "source": "WS01 · DSE Paper 1 題型 Q10 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$4x^{2}+12xy+9y^{2}$,",
       "en": "$4x^{2}+12xy+9y^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$4x^{2}+12xy+9y^{2}-8x-12y$.",
       "en": "$4x^{2}+12xy+9y^{2}-8x-12y$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 完全平方",
         "en": "Part (a): perfect square"
        },
        "math": "4x^{2}+12xy+9y^{2}=(2x+3y)^{2}",
        "zh": "$(2x)^{2}+2(2x)(3y)+(3y)^{2}$ ✓",
        "en": "$(2x)^{2}+2(2x)(3y)+(3y)^{2}$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後兩項抽 $-4$",
         "en": "Part (b): take out $-4$ from the last two terms"
        },
        "math": "4x^{2}+12xy+9y^{2}-8x-12y=(2x+3y)^{2}-4(2x+3y)",
        "zh": "$-8x-12y=-4(2x+3y)$：抽 $-4$ 就對上 (a)。",
        "en": "$-8x-12y=-4(2x+3y)$: taking out $-4$ matches (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(2x+3y)$",
         "en": "Take out $(2x+3y)$"
        },
        "math": "=(2x+3y)(2x+3y-4)",
        "zh": "抽走 $(2x+3y)$，剩下 $(2x+3y)$ 與 $-4$。",
        "en": "Factor out $(2x+3y)$; what remains is $(2x+3y)$ and $-4$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 抽 $+4$",
        "labelEn": "(b) taking out $+4$",
        "zh": "$-8x-12y=-4(2x+3y)$；抽 $+4$ 會得到 $-(2x+3y)$，對不上。",
        "en": "$-8x-12y=-4(2x+3y)$; taking out $+4$ gives $-(2x+3y)$, which does not match."
       },
       {
        "label": "(a) 交叉項當成 $6xy$",
        "labelEn": "(a) taking the middle term as $6xy$",
        "zh": "$12xy=2(2x)(3y)$：交叉項是 $2ab$ 的形式，要乘 2。",
        "en": "$12xy=2(2x)(3y)$: the middle term has the form $2ab$ — don't forget the 2."
       }
      ],
      "tip": {
       "zh": "完全平方的三個數：首平方、末平方、中間是「$2\times$ 首 $\times$ 末」。",
       "en": "Perfect square: first squared, last squared, middle is $2\\times$ first $\\times$ last."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q11",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q11",
     "source": "WS01 · DSE Paper 1 題型 Q11 [HKDSE 2014 Paper 1 Q2]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$6+5a+a^{2}$,",
       "en": "$6+5a+a^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$6+5a+a^{2}+3b^{2}+ab^{2}$.",
       "en": "$6+5a+a^{2}+3b^{2}+ab^{2}$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 十字相乘（寫成 $a^{2}+5a+6$ 較易看）",
         "en": "Part (a): cross-method (write it as $a^{2}+5a+6$)"
        },
        "math": "6+5a+a^{2}=a^{2}+5a+6=(2+a)(3+a)",
        "zh": "習慣上把 $a$ 的次數由高至低排好：$a^{2}+5a+6$，再十字相乘。",
        "en": "Rearrange in descending powers: $a^{2}+5a+6$, then use the cross-method.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後兩項抽 $b^{2}$",
         "en": "Part (b): take out $b^{2}$ from the last two terms"
        },
        "math": "6+5a+a^{2}+3b^{2}+ab^{2}=(2+a)(3+a)+b^{2}(3+a)",
        "zh": "$+3b^{2}+ab^{2}=+b^{2}(3+a)$：正是 (a) 的其中一個括號。",
        "en": "$+3b^{2}+ab^{2}=+b^{2}(3+a)$, one of (a)'s brackets.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(3+a)$",
         "en": "Take out $(3+a)$"
        },
        "math": "=(3+a)(2+a+b^{2})",
        "zh": "抽走 $(3+a)$，剩下 $(2+a)$ 與 $b^{2}$。",
        "en": "Factor out $(3+a)$; what remains is $(2+a)$ and $b^{2}$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(a) 次序寫成 $(a+2)(a+3)$ 就當不同",
        "labelEn": "(a) thinking $(a+2)(a+3)$ is a different answer",
        "zh": "$(2+a)(3+a)$ 與 $(a+2)(a+3)$ 是同一個數；但 (b) 要對上的是官方寫法 $(3+a)$。",
        "en": "$(2+a)(3+a)$ and $(a+2)(a+3)$ are the same product, but part (b) must match the bracket you used in (a)."
       },
       {
        "label": "(b) 漏寫 $(2+a)$",
        "labelEn": "(b) dropping $(2+a)$",
        "zh": "抽走 $(3+a)$ 之後，$(2+a)$ 與 $b^{2}$ 都要寫進同一個括號。",
        "en": "After factoring out $(3+a)$, both $(2+a)$ and $b^{2}$ belong in the same bracket."
       }
      ],
      "tip": {
       "zh": "(b) 多出一個字母（$b$）時，先抽它的次方，就會看到 (a) 的括號。",
       "en": "When (b) brings in a new letter ($b$), factor out its power and (a)'s bracket appears."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q12",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q12",
     "source": "WS01 · DSE Paper 1 題型 Q12 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$2m^{2}-m-3$,",
       "en": "$2m^{2}-m-3$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$2mn^{2}+2n^{2}+2m^{2}-m-3$.",
       "en": "$2mn^{2}+2n^{2}+2m^{2}-m-3$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 十字相乘",
         "en": "Part (a): cross-method"
        },
        "math": "2m^{2}-m-3=(2m-3)(m+1)",
        "zh": "交叉相乘 $(2m)(1)+(-3)(m)=2m-3m=-m$ ✓",
        "en": "Cross products $(2m)(1)+(-3)(m)=2m-3m=-m$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 把 $2m^{2}-m-3$ 換成 (a)，其餘抽 $2n^{2}$",
         "en": "Part (b): replace $2m^{2}-m-3$ by (a) and factor $2n^{2}$"
        },
        "math": "2mn^{2}+2n^{2}+2m^{2}-m-3=2n^{2}(m+1)+(2m-3)(m+1)",
        "zh": "前面兩項 $2mn^{2}+2n^{2}=2n^{2}(m+1)$；後面三項就是 (a)。",
        "en": "The first two terms give $2n^{2}(m+1)$; the last three terms are exactly (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(m+1)$",
         "en": "Take out $(m+1)$"
        },
        "math": "=(m+1)(2n^{2}+2m-3)",
        "zh": "兩項都有 $(m+1)$，抽走後剩下 $2n^{2}$ 與 $(2m-3)$。",
        "en": "Both terms contain $(m+1)$; what remains is $2n^{2}$ and $(2m-3)$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 找不到要用 (a)",
        "labelEn": "(b) missing the link to (a)",
        "zh": "(b) 的三項 $+2m^{2}-m-3$ 就是 (a) 的原式，換成 $(2m-3)(m+1)$ 才做得下去。",
        "en": "The last three terms of (b) are exactly (a); replace them with $(2m-3)(m+1)$ to continue."
       },
       {
        "label": "把 $(2m-3)$ 也抽走",
        "labelEn": "Trying to factor out $(2m-3)$ too",
        "zh": "只有 $(m+1)$ 是兩項共同的括號，$(2m-3)$ 只在一項出現。",
        "en": "Only $(m+1)$ is common to both terms; $(2m-3)$ appears just once."
       }
      ],
      "tip": {
       "zh": "(b) 部「分散」時，先看哪幾項可以併回 (a) 的原式，這是最快的入手點。",
       "en": "When (b) looks scattered, find the terms that recombine into (a)'s expression — that is the entry point."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q13",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q13",
     "source": "WS01 · DSE Paper 1 題型 Q13 [HKDSE 2017 Paper 1 Q3, 2021 Paper 1 Q3]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$a^{2}+3ab+2b^{2}$,",
       "en": "$a^{2}+3ab+2b^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$a^{2}+3ab+2b^{2}+9a+18b$.",
       "en": "$a^{2}+3ab+2b^{2}+9a+18b$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 十字相乘",
         "en": "Part (a): cross-method"
        },
        "math": "a^{2}+3ab+2b^{2}=(a+b)(a+2b)",
        "zh": "交叉相乘 $(a)(2b)+(b)(a)=3ab$ ✓",
        "en": "Cross products $(a)(2b)+(b)(a)=3ab$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後兩項抽 $9$",
         "en": "Part (b): take out $9$ from the last two terms"
        },
        "math": "a^{2}+3ab+2b^{2}+9a+18b=(a+b)(a+2b)+9(a+2b)",
        "zh": "$+9a+18b=+9(a+2b)$，正是 (a) 的括號。",
        "en": "$+9a+18b=+9(a+2b)$, exactly (a)'s bracket.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(a+2b)$",
         "en": "Take out $(a+2b)$"
        },
        "math": "=(a+2b)(a+b+9)",
        "zh": "抽走 $(a+2b)$，剩下 $(a+b)$ 與 $9$。",
        "en": "Factor out $(a+2b)$; what remains is $(a+b)$ and $9$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "抽走 $(a+b)$",
        "labelEn": "Taking out $(a+b)$",
        "zh": "$+9a+18b=9(a+2b)$，所以共同括號是 $(a+2b)$。",
        "en": "$+9a+18b=9(a+2b)$, so the shared bracket is $(a+2b)$."
       },
       {
        "label": "(b) 把 $9$ 留在括號外不寫",
        "labelEn": "(b) leaving the $9$ out",
        "zh": "完成後應為 $(a+2b)(a+b+9)$：$9$ 是第二個括號的一項。",
        "en": "The answer is $(a+2b)(a+b+9)$: the $9$ is a term of the second bracket."
       }
      ],
      "tip": {
       "zh": "這一題是 2017 與 2021 兩年的卷一真題：套路完全一樣。",
       "en": "This question appeared in both 2017 and 2021: the routine is identical."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q14",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q14",
     "source": "WS01 · DSE Paper 1 題型 Q14 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$6m^{2}-13mn+6n^{2}$,",
       "en": "$6m^{2}-13mn+6n^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$9m-6n-6m^{2}+13mn-6n^{2}$.",
       "en": "$9m-6n-6m^{2}+13mn-6n^{2}$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 十字相乘",
         "en": "Part (a): cross-method"
        },
        "math": "6m^{2}-13mn+6n^{2}=(3m-2n)(2m-3n)",
        "zh": "交叉相乘 $(3m)(-3n)+(-2n)(2m)=-9mn-4mn=-13mn$ ✓",
        "en": "Cross products $(3m)(-3n)+(-2n)(2m)=-9mn-4mn=-13mn$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 整組抽負號，再用 (a)",
         "en": "Part (b): take out the minus, then use (a)"
        },
        "math": "9m-6n-6m^{2}+13mn-6n^{2}=(9m-6n)-(6m^{2}-13mn+6n^{2})=3(3m-2n)-(3m-2n)(2m-3n)",
        "zh": "後三項整組抽負號後就是 (a)；$9m-6n=3(3m-2n)$ 又與 (a) 的 $(3m-2n)$ 相同。",
        "en": "Taking a minus out of the last three terms gives (a); and $9m-6n=3(3m-2n)$ matches (a)'s bracket.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 抽走共同括號，中括號內逐項分配負號",
         "en": "Step 3 · Factor the common bracket out and distribute the minus inside the square brackets"
        },
        "math": "=(3m-2n)[3-(2m-3n)]\n=(3m-2n)(3-2m+3n)",
        "zh": "抽走 $(3m-2n)$ 之後，餘下部分先用中括號整組包住：$[3-(2m-3n)]$。減號必須逐項分配：$-(+2m)=-2m$、$-(-3n)=+3n$，化簡得 $(3m-2n)(3-2m+3n)$。這一格最忌心算跳步 —— 直接寫就會變成 $3-2m-3n$（第二項漏了變號），一分就飛走。",
        "en": "After factoring out $(3m-2n)$, keep the remainder inside square brackets: $[3-(2m-3n)]$. Distribute the minus to every term: $-(+2m)=-2m$ and $-(-3n)=+3n$, giving $(3m-2n)(3-2m+3n)$. Never do this step in your head: the classic slip is $3-2m-3n$, which loses the last mark.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "負號忘記分配",
        "labelEn": "Forgetting to distribute the minus",
        "zh": "$-(6m^{2}-13mn+6n^{2})=-6m^{2}+13mn-6n^{2}$：三項都要變號。",
        "en": "$-(6m^{2}-13mn+6n^{2})=-6m^{2}+13mn-6n^{2}$: all three signs flip."
       },
       {
        "label": "最後的 $-2m+3n$ 寫成 $2m-3n$",
        "labelEn": "Sign error in the last bracket",
        "zh": "抽走 $(3m-2n)$ 之後剩下的那項是 $-(2m-3n)$，要保留負號。",
        "en": "After factoring out $(3m-2n)$ what remains is $-(2m-3n)$; keep the minus."
       }
      ],
      "tip": {
       "zh": "(b) 的首兩項若「順序倒轉」（$9m-6n$），先抽一個數，再看能否與 (a) 的括號對上。",
       "en": "If (b) starts with a reversed pair ($9m-6n$), factor it and check whether it matches (a)'s bracket."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q15",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q15",
     "source": "WS01 · DSE Paper 1 題型 Q15 [HKDSE 2020 Paper 1 Q2]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$a^{2}+a-12$,",
       "en": "$a^{2}+a-12$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$a^{4}+a^{3}-12a^{2}$.",
       "en": "$a^{4}+a^{3}-12a^{2}$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 十字相乘",
         "en": "Part (a): cross-method"
        },
        "math": "a^{2}+a-12=(a+4)(a-3)",
        "zh": "交叉相乘 $(a)(-3)+(4)(a)=-3a+4a=a$ ✓",
        "en": "Cross products $(a)(-3)+(4)(a)=-3a+4a=a$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 高次題：先抽 $a^{2}$",
         "en": "Part (b): factor out $a^{2}$ first"
        },
        "math": "a^{4}+a^{3}-12a^{2}=a^{2}(a^{2}+a-12)",
        "zh": "三項最低次都是 $a^{2}$，抽走它之後括號內就是 (a) 的原式。",
        "en": "Every term has at least $a^{2}$; taking it out leaves exactly (a)'s expression.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "代入 (a) 的答案",
         "en": "Substitute (a)'s answer"
        },
        "math": "=a^{2}(a+4)(a-3)",
        "zh": "括號內用 (a) 的結果：$a^{2}(a+4)(a-3)$，三個因式相乘。",
        "en": "Replace the bracket with (a)'s result: $a^{2}(a+4)(a-3)$ — three factors.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 只抽 $a$",
        "labelEn": "(b) taking out only $a$",
        "zh": "抽 $a^{2}$ 才會令括號內變回 (a) 的原式；抽 $a$ 會剩下 $a^{2}+a-12$ 以外的東西。",
        "en": "Taking out $a^{2}$ reproduces (a); taking out $a$ leaves a different bracket."
       },
       {
        "label": "(b) 抽完就停手",
        "labelEn": "(b) stopping after factoring",
        "zh": "抽 $a^{2}$ 只是第一步，括號內仍要分解成 $(a+4)(a-3)$（題目要求 completely）。",
        "en": "Factoring $a^{2}$ is only step one; the bracket must still become $(a+4)(a-3)$."
       }
      ],
      "tip": {
       "zh": "高次題（$a^{4}$、$a^{3}$）的固定做法：先抽最低次，讓括號內變回 (a)。",
       "en": "Higher-degree questions ($a^{4}$, $a^{3}$): factor out the lowest power so the bracket becomes (a)."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q16",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q16",
     "source": "WS01 · DSE Paper 1 題型 Q16 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$2a^{2}+a-15$,",
       "en": "$2a^{2}+a-15$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$2a^{4}+a^{3}-15a^{2}$.",
       "en": "$2a^{4}+a^{3}-15a^{2}$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 十字相乘",
         "en": "Part (a): cross-method"
        },
        "math": "2a^{2}+a-15=(2a-5)(a+3)",
        "zh": "交叉相乘 $(2a)(3)+(-5)(a)=6a-5a=a$ ✓",
        "en": "Cross products $(2a)(3)+(-5)(a)=6a-5a=a$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 先抽 $a^{2}$",
         "en": "Part (b): factor out $a^{2}$"
        },
        "math": "2a^{4}+a^{3}-15a^{2}=a^{2}(2a^{2}+a-15)",
        "zh": "三項最低次是 $a^{2}$；抽走後括號內就是 (a)。",
        "en": "Every term has at least $a^{2}$; the bracket then becomes (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "代入 (a) 的答案",
         "en": "Substitute (a)'s answer"
        },
        "math": "=a^{2}(2a-5)(a+3)",
        "zh": "答案要寫成三個因式相乘：$a^{2}(2a-5)(a+3)$。",
        "en": "The answer is a product of three factors: $a^{2}(2a-5)(a+3)$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 抽 $a$",
        "labelEn": "(b) taking out $a$",
        "zh": "抽 $a^{2}$ 才能還原 (a)；抽 $a$ 括號內會變成 $2a^{3}+a^{2}-15a$，仍要再抽。",
        "en": "Only $a^{2}$ restores (a); taking out $a$ leaves $2a^{3}+a^{2}-15a$, needing another step."
       },
       {
        "label": "答案漏掉 $a^{2}$",
        "labelEn": "Dropping the $a^{2}$",
        "zh": "抽走的 $a^{2}$ 是其中一個因式，漏寫就等於少了一個因子。",
        "en": "The $a^{2}$ you factored out is a factor of the answer — never drop it."
       }
      ],
      "tip": {
       "zh": "抽公因式 → 括號內用 (a) → 寫成乘積，這三步對所有高次題都合用。",
       "en": "Factor out, use (a) inside the bracket, write the product — this routine covers every higher-degree question."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": []
  },
  {
   "id": "ws01c-3",
   "title": {
    "zh": "第 3 節 · 高次與六項題（Q17–Q24）",
    "en": "Set 3 · Higher degree and six-term questions (Q17–Q24)"
   },
   "cards": [
    {
     "id": "ws01c-c3",
     "topic": "ws01c",
     "title": {
      "zh": "(a) 是鎖匙：(b) 收成「(a) × 另一個括號」",
      "en": "(a) is the key: (b) collapses into (a) × another bracket"
     },
     "body": {
      "zh": "卷一 4 分題的模式固定：**(a) 先抽公因式，(b) 的三項剛好就是 (a) 的負數或倍數。**\n例：$x^{3}+x^{2}y+5x^{2}=x^{2}(x+y+5)$，而 (b) 的尾巴 $-x-y-5=-(x+y+5)$：{{math:0}}\n抽出共同括號之後，餘下的通常是 $x^{2}-1$、$x^{2}-9$、$x^{2}-16$ —— 全部可以再用平方差：{{math:1}}\n所以「completely」的意思是：抽完括號之後，仍要檢查餘下那塊能否再分解。",
      "en": "The 4-mark pattern never changes: **(a) factors out, and (b)'s remaining terms are exactly a multiple of (a).**\nExample: $x^{3}+x^{2}y+5x^{2}=x^{2}(x+y+5)$ while (b)'s tail $-x-y-5=-(x+y+5)$: {{math:0}}\nAfter the shared bracket is taken out, what remains is usually $x^{2}-1$, $x^{2}-9$ or $x^{2}-16$ — all of which split further: {{math:1}}\nSo 'completely' means: after factoring the bracket, check whether the remainder can still be factorized."
     },
     "math": [
      "x^{3}+x^{2}y+5x^{2}-x-y-5=x^{2}(x+y+5)-(x+y+5)",
      "=(x^{2}-1)(x+y+5)=(x-1)(x+1)(x+y+5)"
     ],
     "vocab": [
      {
       "en": "the result of (a)",
       "zh": "(a) 的結果"
      },
      {
       "en": "completely",
       "zh": "徹底（分到不能再分）"
      }
     ],
     "warn": {
      "zh": "少了最後一步（$x^{2}-1$ 不再分解）是卷一的常見失分位；官方 marking 把那一分寫得很清楚。",
      "en": "Missing the last step (leaving $x^{2}-1$ unfactorised) is a common loss of marks; the official marking spells it out."
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws01c-q17",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1B-Q17",
     "source": "WS01 · DSE Paper 1 題型 Q17 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$6b^{2}-5b-6$,",
       "en": "$6b^{2}-5b-6$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$6b^{2}+5b^{3}-6b^{4}$.",
       "en": "$6b^{2}+5b^{3}-6b^{4}$.",
       "marks": 2
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 十字相乘",
         "en": "Part (a): cross-method"
        },
        "math": "6b^{2}-5b-6=(3b+2)(2b-3)",
        "zh": "交叉相乘 $(3b)(-3)+(2)(2b)=-9b+4b=-5b$ ✓",
        "en": "Cross products $(3b)(-3)+(2)(2b)=-9b+4b=-5b$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 先抽 $-b^{2}$（負號＋最低次）",
         "en": "Part (b): take out $-b^{2}$ (minus and lowest power)"
        },
        "math": "6b^{2}+5b^{3}-6b^{4}=-b^{2}(6b^{2}-5b-6)",
        "zh": "最高次是 $-6b^{4}$（負），所以抽 $-b^{2}$；這樣括號內就變回 (a) 的原式。",
        "en": "The highest-degree term is $-6b^{4}$ (negative), so take out $-b^{2}$; the bracket becomes exactly (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "代入 (a)",
         "en": "Substitute (a)"
        },
        "math": "=-b^{2}(3b+2)(2b-3)",
        "zh": "括號內用 (a) 的答案，最後寫成三個因式相乘。",
        "en": "Replace the bracket with (a)'s answer — three factors in the final product.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 抽 $b^{2}$",
        "labelEn": "(b) taking out $b^{2}$",
        "zh": "抽 $b^{2}$ 會得到 $b^{2}(6-5b-6b^{2})$，符號全部相反，之後無法直接代入 (a)。",
        "en": "Taking out $b^{2}$ gives $b^{2}(6-5b-6b^{2})$, whose signs are all reversed — (a) cannot be substituted."
       },
       {
        "label": "(b) 抽完就停手",
        "labelEn": "(b) stopping after factoring",
        "zh": "抽 $-b^{2}$ 只是第一步，括號內仍要用 (a) 分解到 $(3b+2)(2b-3)$。",
        "en": "Factoring $-b^{2}$ is only the first step; the bracket still has to become $(3b+2)(2b-3)$."
       }
      ],
      "tip": {
       "zh": "高次項而首項係數是負的：抽 $-x^{2}$ 連負號一起走，括號內就會變回 (a)。",
       "en": "When the highest-degree coefficient is negative, take out $-x^{2}$ with the minus so the bracket becomes (a)."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q18",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q18",
     "source": "WS01 · DSE Paper 1 題型 Q18 [HKDSE 2015 Paper 1 Q4]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$x^{3}+x^{2}y+5x^{2}$,",
       "en": "$x^{3}+x^{2}y+5x^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$x^{3}+x^{2}y+5x^{2}-x-y-5$.",
       "en": "$x^{3}+x^{2}y+5x^{2}-x-y-5$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 抽 $x^{2}$",
         "en": "Part (a): take out $x^{2}$"
        },
        "math": "x^{3}+x^{2}y+5x^{2}=x^{2}(x+y+5)",
        "zh": "三項最低次都是 $x^{2}$，抽走後括號內是 $(x+y+5)$。",
        "en": "Each term has at least $x^{2}$; the bracket becomes $(x+y+5)$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後三項＝(a) 括號的負數",
         "en": "Part (b): the last three terms are minus (a)'s bracket"
        },
        "math": "x^{3}+x^{2}y+5x^{2}-x-y-5=x^{2}(x+y+5)-(x+y+5)",
        "zh": "$-x-y-5=-(x+y+5)$：正是 (a) 括號的負數，可以直接抽走。",
        "en": "$-x-y-5=-(x+y+5)$: exactly minus (a)'s bracket, so it can be factored out straight away.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(x+y+5)$，再分解 $x^{2}-1$",
         "en": "Take out $(x+y+5)$, then factorize $x^{2}-1$"
        },
        "math": "=(x^{2}-1)(x+y+5)=(x-1)(x+1)(x+y+5)",
        "zh": "抽走之後餘下 $x^{2}-1$，仍可用平方差分解 —— 題目要求 completely，一定要做這一步。",
        "en": "What remains is $x^{2}-1$, which still factorizes by the difference of two squares — required for 'completely'.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "忘記再分解 $x^{2}-1$",
        "labelEn": "Forgetting to factorize $x^{2}-1$",
        "zh": "卷一的「completely」是要分到最後一刻：$x^{2}-1=(x-1)(x+1)$，少寫就失一分。",
        "en": "'Completely' means factor to the very end: $x^{2}-1=(x-1)(x+1)$ — omitting it loses a mark."
       },
       {
        "label": "負號只加在一項",
        "labelEn": "Applying the minus to one term only",
        "zh": "$-x-y-5=-(x+y+5)$：三項都要變號，否則對不上 (a)。",
        "en": "$-x-y-5=-(x+y+5)$: all three signs flip, otherwise it will not match (a)."
       }
      ],
      "tip": {
       "zh": "六項題（3+3）的標準結局：抽出 (a) 的括號 → 餘下 $x^{2}-1$、$x^{2}-9$、$x^{2}-16$… → 再用平方差。",
       "en": "The standard ending for a six-term question: factor out (a)'s bracket, leaving $x^{2}-1$, $x^{2}-9$, $x^{2}-16$… then use the difference of two squares."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q19",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q19",
     "source": "WS01 · DSE Paper 1 題型 Q19 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$a^{3}+3a^{2}b-4a^{2}$,",
       "en": "$a^{3}+3a^{2}b-4a^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$a^{3}+3a^{2}b-4a^{2}-a-3b+4$.",
       "en": "$a^{3}+3a^{2}b-4a^{2}-a-3b+4$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 抽 $a^{2}$",
         "en": "Part (a): take out $a^{2}$"
        },
        "math": "a^{3}+3a^{2}b-4a^{2}=a^{2}(a+3b-4)",
        "zh": "三項最低次是 $a^{2}$；括號內 $(a+3b-4)$ 就是 (b) 的鎖匙。",
        "en": "Every term has at least $a^{2}$; the bracket $(a+3b-4)$ is the key to part (b).",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後三項＝負數",
         "en": "Part (b): the last three terms are the negative"
        },
        "math": "a^{3}+3a^{2}b-4a^{2}-a-3b+4=a^{2}(a+3b-4)-(a+3b-4)",
        "zh": "$-a-3b+4=-(a+3b-4)$ ✓",
        "en": "$-a-3b+4=-(a+3b-4)$ ✓",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走，再用平方差",
         "en": "Take out, then difference of squares"
        },
        "math": "=(a^{2}-1)(a+3b-4)=(a-1)(a+1)(a+3b-4)",
        "zh": "$a^{2}-1=(a-1)(a+1)$，最後三個因式。",
        "en": "$a^{2}-1=(a-1)(a+1)$ — three factors in the answer.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "漏寫 $(a+3b-4)$ 的第二個括號",
        "labelEn": "Forgetting the repeated bracket",
        "zh": "答案是 $(a-1)(a+1)(a+3b-4)$：$(a+3b-4)$ 只出現一次，但不可以漏。",
        "en": "The answer is $(a-1)(a+1)(a+3b-4)$: the bracket $(a+3b-4)$ appears once and must not be dropped."
       },
       {
        "label": "$a^{2}-1$ 不分解",
        "labelEn": "Leaving $a^{2}-1$ as it is",
        "zh": "題目要求 completely，$a^{2}-1$ 必須再分。",
        "en": "The question says 'completely', so $a^{2}-1$ must be factorized further."
       }
      ],
      "tip": {
       "zh": "抽 $x^{2}$ 之後餘下的通常是 $x^{2}-1$：一定是 $(x-1)(x+1)$。",
       "en": "After factoring $x^{2}$ the remainder is usually $x^{2}-1$, which is always $(x-1)(x+1)$."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q20",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q20",
     "source": "WS01 · DSE Paper 1 題型 Q20 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$x^{3}-x^{2}y+2x^{2}$,",
       "en": "$x^{3}-x^{2}y+2x^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$x^{3}-x^{2}y+2x^{2}-9x+9y-18$.",
       "en": "$x^{3}-x^{2}y+2x^{2}-9x+9y-18$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 抽 $x^{2}$",
         "en": "Part (a): take out $x^{2}$"
        },
        "math": "x^{3}-x^{2}y+2x^{2}=x^{2}(x-y+2)",
        "zh": "三項最低次是 $x^{2}$。",
        "en": "Every term has at least $x^{2}$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後三項抽 $-9$",
         "en": "Part (b): take out $-9$ from the last three terms"
        },
        "math": "x^{3}-x^{2}y+2x^{2}-9x+9y-18=x^{2}(x-y+2)-9(x-y+2)",
        "zh": "$-9x+9y-18=-9(x-y+2)$：與 (a) 的括號完全一致。",
        "en": "$-9x+9y-18=-9(x-y+2)$, matching (a)'s bracket exactly.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走，再用平方差",
         "en": "Take out, then difference of squares"
        },
        "math": "=(x^{2}-9)(x-y+2)=(x-3)(x+3)(x-y+2)",
        "zh": "$x^{2}-9=(x-3)(x+3)$。",
        "en": "$x^{2}-9=(x-3)(x+3)$.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "後三項抽 $+9$",
        "labelEn": "Taking out $+9$ from the last three terms",
        "zh": "$-9x+9y-18=-9(x-y+2)$；抽 $+9$ 會得到 $-(x-y+2)$，多了一個負號。",
        "en": "$-9x+9y-18=-9(x-y+2)$; taking out $+9$ gives $-(x-y+2)$, an extra minus."
       },
       {
        "label": "$x^{2}-9$ 不分解",
        "labelEn": "$x^{2}-9$ left unfactorised",
        "zh": "$x^{2}-9$ 是平方差，必須分成 $(x-3)(x+3)$。",
        "en": "$x^{2}-9$ is a difference of two squares and must become $(x-3)(x+3)$."
       }
      ],
      "tip": {
       "zh": "抽公因式時「負數一起抽」：$-9$ 比 $+9$ 更容易令括號對上 (a)。",
       "en": "Take the negative with the factor: $-9$ makes the bracket match (a), $+9$ does not."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q21",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q21",
     "source": "WS01 · DSE Paper 1 題型 Q21 [HKDSE 2018 Paper 1 Q5]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$m^{3}+3m^{2}n$,",
       "en": "$m^{3}+3m^{2}n$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$m^{3}+3m^{2}n-mn^{2}-3n^{3}$.",
       "en": "$m^{3}+3m^{2}n-mn^{2}-3n^{3}$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 抽 $m^{2}$",
         "en": "Part (a): take out $m^{2}$"
        },
        "math": "m^{3}+3m^{2}n=m^{2}(m+3n)",
        "zh": "兩項最低次是 $m^{2}$。",
        "en": "Both terms have at least $m^{2}$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後兩項抽 $-n^{2}$",
         "en": "Part (b): take out $-n^{2}$ from the last two terms"
        },
        "math": "m^{3}+3m^{2}n-mn^{2}-3n^{3}=m^{2}(m+3n)-n^{2}(m+3n)",
        "zh": "$-mn^{2}-3n^{3}=-n^{2}(m+3n)$：與 (a) 相同。",
        "en": "$-mn^{2}-3n^{3}=-n^{2}(m+3n)$, the same bracket as (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走，再用平方差",
         "en": "Take out, then difference of squares"
        },
        "math": "=(m+3n)(m^{2}-n^{2})=(m+3n)(m-n)(m+n)",
        "zh": "$m^{2}-n^{2}=(m-n)(m+n)$。",
        "en": "$m^{2}-n^{2}=(m-n)(m+n)$.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "後兩項抽 $+n^{2}$",
        "labelEn": "Taking out $+n^{2}$",
        "zh": "$-mn^{2}-3n^{3}=-n^{2}(m+3n)$；抽 $+n^{2}$ 括號內會變成 $-(m+3n)$。",
        "en": "$-mn^{2}-3n^{3}=-n^{2}(m+3n)$; taking out $+n^{2}$ leaves $-(m+3n)$."
       },
       {
        "label": "$m^{2}-n^{2}$ 不分解",
        "labelEn": "$m^{2}-n^{2}$ left unfactorised",
        "zh": "$m^{2}-n^{2}=(m-n)(m+n)$，一定要分到最後。",
        "en": "$m^{2}-n^{2}=(m-n)(m+n)$ — factor to the end."
       }
      ],
      "tip": {
       "zh": "六項／四項題的收尾都一樣：抽走共同括號之後，餘下的多半是平方差。",
       "en": "Four- and six-term questions end the same way: after factoring out the shared bracket, what remains is usually a difference of two squares."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q22",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q22",
     "source": "WS01 · DSE Paper 1 題型 Q22 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$4x^{3}-20x^{2}y$,",
       "en": "$4x^{3}-20x^{2}y$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$4x^{3}-20x^{2}y-xy^{2}+5y^{3}$.",
       "en": "$4x^{3}-20x^{2}y-xy^{2}+5y^{3}$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 抽 $4x^{2}$",
         "en": "Part (a): take out $4x^{2}$"
        },
        "math": "4x^{3}-20x^{2}y=4x^{2}(x-5y)",
        "zh": "係數取 H.C.F. $4$、字母取 $x^{2}$。",
        "en": "Take the H.C.F. $4$ of the coefficients and $x^{2}$ for the letters.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後兩項抽 $-y^{2}$",
         "en": "Part (b): take out $-y^{2}$ from the last two terms"
        },
        "math": "4x^{3}-20x^{2}y-xy^{2}+5y^{3}=4x^{2}(x-5y)-y^{2}(x-5y)",
        "zh": "$-xy^{2}+5y^{3}=-y^{2}(x-5y)$ ✓",
        "en": "$-xy^{2}+5y^{3}=-y^{2}(x-5y)$ ✓",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走，再用平方差",
         "en": "Take out, then difference of squares"
        },
        "math": "=(x-5y)(4x^{2}-y^{2})=(x-5y)(2x-y)(2x+y)",
        "zh": "$4x^{2}-y^{2}=(2x)^{2}-y^{2}=(2x-y)(2x+y)$。",
        "en": "$4x^{2}-y^{2}=(2x)^{2}-y^{2}=(2x-y)(2x+y)$.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "$4x^{2}-y^{2}$ 不分解",
        "labelEn": "$4x^{2}-y^{2}$ left unfactorised",
        "zh": "它是平方差：$(2x-y)(2x+y)$；只寫 $(x-5y)(4x^{2}-y^{2})$ 會失一分。",
        "en": "It is a difference of two squares: $(2x-y)(2x+y)$; stopping earlier loses a mark."
       },
       {
        "label": "後兩項抽 $-y$",
        "labelEn": "Taking out $-y$ instead of $-y^{2}$",
        "zh": "抽 $-y$ 會留下 $y(x-5y)$，括號次序雖然對，但會多一個 $y$ 在外面，不如抽 $-y^{2}$ 乾淨。",
        "en": "Taking out $-y$ leaves an extra $y$ outside; $-y^{2}$ is the cleaner choice."
       }
      ],
      "tip": {
       "zh": "係數有 H.C.F.（4）時，先抽數字再抽字母，最後一步才用平方差。",
       "en": "When the coefficients share an H.C.F. (4), factor numbers first, letters second, and save the difference of squares for last."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q23",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q23",
     "source": "WS01 · DSE Paper 1 題型 Q23 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$8rs^{2}-4s^{3}$,",
       "en": "$8rs^{2}-4s^{3}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$18r^{3}-9r^{2}s-8rs^{2}+4s^{3}$.",
       "en": "$18r^{3}-9r^{2}s-8rs^{2}+4s^{3}$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 抽 $4s^{2}$",
         "en": "Part (a): take out $4s^{2}$"
        },
        "math": "8rs^{2}-4s^{3}=4s^{2}(2r-s)",
        "zh": "兩項的公因式是 $4s^{2}$。",
        "en": "The common factor is $4s^{2}$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 前面兩項抽 $9r^{2}$",
         "en": "Part (b): take out $9r^{2}$ from the first two terms"
        },
        "math": "18r^{3}-9r^{2}s-8rs^{2}+4s^{3}=9r^{2}(2r-s)-4s^{2}(2r-s)",
        "zh": "$18r^{3}-9r^{2}s=9r^{2}(2r-s)$，與 (a) 的括號相同。",
        "en": "$18r^{3}-9r^{2}s=9r^{2}(2r-s)$, matching (a)'s bracket.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走，再用平方差",
         "en": "Take out, then difference of squares"
        },
        "math": "=(2r-s)(9r^{2}-4s^{2})=(2r-s)(3r-2s)(3r+2s)",
        "zh": "$9r^{2}-4s^{2}=(3r)^{2}-(2s)^{2}$。",
        "en": "$9r^{2}-4s^{2}=(3r)^{2}-(2s)^{2}$.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "選錯共同括號",
        "labelEn": "Choosing the wrong shared bracket",
        "zh": "(a) 的括號是 $(2r-s)$（不是 $(4s^{2}...)$）：$(b)$ 兩組都要抽到它。",
        "en": "(a)'s bracket is $(2r-s)$; both pairs in (b) must produce it."
       },
       {
        "label": "$9r^{2}-4s^{2}$ 不分解",
        "labelEn": "$9r^{2}-4s^{2}$ left unfactorised",
        "zh": "係數 $9$ 與 $4$ 都是平方數，所以仍可分成 $(3r-2s)(3r+2s)$。",
        "en": "Both $9$ and $4$ are squares, so it still splits into $(3r-2s)(3r+2s)$."
       }
      ],
      "tip": {
       "zh": "(b) 的兩組各自抽公因式時，目標只有一個：令兩個括號變成一樣。",
       "en": "When factoring both pairs in (b), aim at one thing only: make the two brackets identical."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q24",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q24",
     "source": "WS01 · DSE Paper 1 題型 Q24 [HKDSE 2016 Paper 1 Q4]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$3m-12n$,",
       "en": "$3m-12n$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$m^{2}+mn-20n^{2}$,",
       "en": "$m^{2}+mn-20n^{2}$,",
       "marks": 1
      },
      {
       "label": "(c)",
       "text": "$m^{2}+mn-20n^{2}-3m+12n$.",
       "en": "$m^{2}+mn-20n^{2}-3m+12n$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a)(b) 各自分解",
         "en": "Parts (a) and (b)"
        },
        "math": "3m-12n=3(m-4n)\\quad\\text{；}\\quad m^{2}+mn-20n^{2}=(m+5n)(m-4n)",
        "zh": "(a) 抽 $3$；(b) 十字相乘：$(m)(-4n)+(5n)(m)=-4mn+5mn=mn$ ✓ 兩部都有 $(m-4n)$。",
        "en": "(a) factor $3$; (b) cross-method: $(m)(-4n)+(5n)(m)=mn$ ✓ Both contain $(m-4n)$.",
        "marking": "(1A)(1A)"
       },
       {
        "title": {
         "zh": "(c) 分組並代入",
         "en": "Part (c): group and substitute"
        },
        "math": "m^{2}+mn-20n^{2}-3m+12n=(m+5n)(m-4n)-3(m-4n)",
        "zh": "後面 $-3m+12n=-3(m-4n)$，與 (b) 的括號一致。",
        "en": "The tail $-3m+12n=-3(m-4n)$ matches (b)'s bracket.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(m-4n)$",
         "en": "Take out $(m-4n)$"
        },
        "math": "=(m-4n)(m+5n-3)",
        "zh": "抽走後剩下 $(m+5n)$ 與 $-3$。",
        "en": "What remains after factoring is $(m+5n)$ and $-3$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(c) 忘記用 (b) 的結果",
        "labelEn": "(c) not using (b)",
        "zh": "(c) 的三項 $m^{2}+mn-20n^{2}$ 就是 (b)，換成 $(m+5n)(m-4n)$ 才做得下去。",
        "en": "The first three terms of (c) are exactly (b); replace them with $(m+5n)(m-4n)$ to continue."
       },
       {
        "label": "抽走錯的括號",
        "labelEn": "Factoring out the wrong bracket",
        "zh": "$-3m+12n=-3(m-4n)$，所以共同括號是 $(m-4n)$，不是 $(m+5n)$。",
        "en": "$-3m+12n=-3(m-4n)$, so the shared bracket is $(m-4n)$, not $(m+5n)$."
       }
      ],
      "tip": {
       "zh": "三部曲的 (c)：一半用 (a) 或 (b) 的括號，另一半是它們的倍數 —— 找出來就通了。",
       "en": "In part (c) of a three-part question, one half supplies the bracket and the other half is a multiple of it."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": []
  },
  {
   "id": "ws01c-4",
   "title": {
    "zh": "第 4 節 · 三部曲與平方差（Q25–Q32）",
    "en": "Set 4 · Three-part and difference of squares (Q25–Q32)"
   },
   "cards": [
    {
     "id": "ws01c-c4",
     "topic": "ws01c",
     "title": {
      "zh": "三部曲 (a)(b)(c) 與「平方 − 平方」",
      "en": "Three-part (a)(b)(c) questions and 'square $-$ square'"
     },
     "body": {
      "zh": "**(a)(b)(c) 型**：(a) 與 (b) 各自簡單，兩者都藏著「同一條括號」，(c) 把兩塊拼起來再抽走那條括號：\n$m^{2}+mn-20n^{2}-3m+12n=(m+5n)(m-4n)-3(m-4n)$ → $(m-4n)(m+5n-3)$。\n**(平方 − 平方) 型**：(a) 做完全平方，(b) 把後面三項整組抽負號，就變成 $a^{2}-b^{2}$：{{math:0}}\n最後要檢查每個括號能否再抽公因式（例如 $(10x+5y-5)=5(2x+y-1)$）：{{math:1}}",
      "en": "**(a)(b)(c) type**: (a) and (b) are simple and both hide the same bracket; (c) joins the two pieces and factors that bracket out:\n$m^{2}+mn-20n^{2}-3m+12n=(m+5n)(m-4n)-3(m-4n)$ → $(m-4n)(m+5n-3)$.\n**(square $-$ square) type**: (a) makes a perfect square, (b) takes a minus out of the last three terms, giving $a^{2}-b^{2}$: {{math:0}}\nFinally check every bracket for a remaining common factor (e.g. $(10x+5y-5)=5(2x+y-1)$): {{math:1}}"
     },
     "math": [
      "81c^{2}-18c+1=(9c-1)^{2}",
      "=(10x+5y-5)(2x+5y+5)=5(2x+y-1)(2x+5y+5)"
     ],
     "vocab": [
      {
       "en": "three-part question",
       "zh": "三部曲題目"
      },
      {
       "en": "take out the minus",
       "zh": "整組抽負號"
      }
     ],
     "warn": {
      "zh": "三部曲的 (c) 是由 (a)(b) 拼出來的：先圈起 (a)(b) 答案中相同的那條括號，再決定 (c) 要抽什麼。",
      "en": "Part (c) is assembled from (a) and (b): circle the identical bracket first, then decide what (c) factors out."
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws01c-q25",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q25",
     "source": "WS01 · DSE Paper 1 題型 Q25 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$6x-18y$,",
       "en": "$6x-18y$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$x^{2}-5xy+6y^{2}$,",
       "en": "$x^{2}-5xy+6y^{2}$,",
       "marks": 1
      },
      {
       "label": "(c)",
       "text": "$x^{2}-5xy+6y^{2}-6x+18y$.",
       "en": "$x^{2}-5xy+6y^{2}-6x+18y$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a)(b) 各自分解",
         "en": "Parts (a) and (b)"
        },
        "math": "6x-18y=6(x-3y)\\quad\\text{；}\\quad x^{2}-5xy+6y^{2}=(x-2y)(x-3y)",
        "zh": "(b) 十字相乘：$(x)(-3y)+(-2y)(x)=-3xy-2xy=-5xy$ ✓",
        "en": "(b) cross-method: $(x)(-3y)+(-2y)(x)=-3xy-2xy=-5xy$ ✓",
        "marking": "(1A)(1A)"
       },
       {
        "title": {
         "zh": "(c) 代入並抽走",
         "en": "Part (c): substitute and factor"
        },
        "math": "x^{2}-5xy+6y^{2}-6x+18y=(x-2y)(x-3y)-6(x-3y)",
        "zh": "$-6x+18y=-6(x-3y)$，與 (b) 其中一個括號相同。",
        "en": "$-6x+18y=-6(x-3y)$, matching one of (b)'s brackets.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "寫出答案",
         "en": "Write the answer"
        },
        "math": "=(x-3y)(x-2y-6)",
        "zh": "抽走 $(x-3y)$，剩下 $(x-2y)$ 與 $-6$。",
        "en": "Factor out $(x-3y)$; what remains is $(x-2y)$ and $-6$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(c) 抽走 $(x-2y)$",
        "labelEn": "(c) factoring out $(x-2y)$",
        "zh": "$-6x+18y=-6(x-3y)$，所以共同括號是 $(x-3y)$。",
        "en": "$-6x+18y=-6(x-3y)$, so the shared bracket is $(x-3y)$."
       },
       {
        "label": "(a) 抽 $6$ 之後次序倒轉",
        "labelEn": "(a) reversing the order",
        "zh": "$6x-18y=6(x-3y)$：次序要與 (b)(c) 一致，方便之後配對。",
        "en": "$6x-18y=6(x-3y)$: keep the order consistent with (b) and (c)."
       }
      ],
      "tip": {
       "zh": "(a)(b) 做完先圈起「相同的括號」，那個就是 (c) 要抽走的東西。",
       "en": "After (a) and (b), circle the identical bracket — that is what part (c) factors out."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q26",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q26",
     "source": "WS01 · DSE Paper 1 題型 Q26 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$4a-10b$,",
       "en": "$4a-10b$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$2a^{2}-3ab-5b^{2}$,",
       "en": "$2a^{2}-3ab-5b^{2}$,",
       "marks": 1
      },
      {
       "label": "(c)",
       "text": "$4a-10b-2a^{2}+3ab+5b^{2}$.",
       "en": "$4a-10b-2a^{2}+3ab+5b^{2}$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a)(b) 各自分解",
         "en": "Parts (a) and (b)"
        },
        "math": "4a-10b=2(2a-5b)\\quad\\text{；}\\quad 2a^{2}-3ab-5b^{2}=(2a-5b)(a+b)",
        "zh": "(b) 十字相乘：$(2a)(b)+(-5b)(a)=2ab-5ab=-3ab$ ✓ 兩部都有 $(2a-5b)$。",
        "en": "(b) cross-method: $(2a)(b)+(-5b)(a)=-3ab$ ✓ Both contain $(2a-5b)$.",
        "marking": "(1A)(1A)"
       },
       {
        "title": {
         "zh": "(c) 整組抽負號，再代入",
         "en": "Part (c): take out the minus, then substitute"
        },
        "math": "4a-10b-2a^{2}+3ab+5b^{2}=2(2a-5b)-(2a-5b)(a+b)",
        "zh": "$-(2a^{2}-3ab-5b^{2})$：後三項全體變號，(b) 的答案直接可用。",
        "en": "$-(2a^{2}-3ab-5b^{2})$: the last three terms flip sign, so (b)'s answer can be used directly.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(2a-5b)$",
         "en": "Take out $(2a-5b)$"
        },
        "math": "=(2a-5b)(2-a-b)",
        "zh": "抽走後剩下 $2$ 與 $-(a+b)$，即 $2-a-b$。",
        "en": "What remains is $2$ and $-(a+b)$, i.e. $2-a-b$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "負號忘記分配",
        "labelEn": "Forgetting to distribute the minus",
        "zh": "$-(2a^{2}-3ab-5b^{2})=-2a^{2}+3ab+5b^{2}$：三項都要變號。",
        "en": "$-(2a^{2}-3ab-5b^{2})=-2a^{2}+3ab+5b^{2}$: all three signs flip."
       },
       {
        "label": "最後的 $-a-b$ 寫成 $+a+b$",
        "labelEn": "Sign error at the end",
        "zh": "抽走 $(2a-5b)$ 之後剩下的那項是 $-(a+b)$，要保留負號：$2-a-b$。",
        "en": "The term left over is $-(a+b)$; keep the minus: $2-a-b$."
       }
      ],
      "tip": {
       "zh": "(c) 的次數倒轉（先兩次、後三次）時，通常要「整組抽負號」再代入。",
       "en": "When (c) lists the lower-degree pair first, take a minus out of the whole group and then substitute."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q27",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q27",
     "source": "WS01 · DSE Paper 1 題型 Q27 [HKDSE 2019 Paper 1 Q4]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$4m^{2}-1$,",
       "en": "$4m^{2}-1$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$2m^{2}n+11mn-6n$,",
       "en": "$2m^{2}n+11mn-6n$,",
       "marks": 1
      },
      {
       "label": "(c)",
       "text": "$4m^{2}-1-2m^{2}n-11mn+6n$.",
       "en": "$4m^{2}-1-2m^{2}n-11mn+6n$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a)(b) 各自分解",
         "en": "Parts (a) and (b)"
        },
        "math": "4m^{2}-1=(2m+1)(2m-1)\\quad\\text{；}\\quad 2m^{2}n+11mn-6n=n(2m-1)(m+6)",
        "zh": "(b) 先抽 $n$，括號內 $2m^{2}+11m-6=(2m-1)(m+6)$（交叉相乘 $-m+12m=11m$ ✓）。",
        "en": "(b) factor $n$ first; inside, $2m^{2}+11m-6=(2m-1)(m+6)$ (cross products $-m+12m=11m$ ✓).",
        "marking": "(1A)(1A)"
       },
       {
        "title": {
         "zh": "(c) 整組抽負號，再代入",
         "en": "Part (c): take out the minus, then substitute"
        },
        "math": "4m^{2}-1-2m^{2}n-11mn+6n=(2m+1)(2m-1)-n(2m-1)(m+6)",
        "zh": "$-(2m^{2}n+11mn-6n)$ 用 (b) 的答案；(a) 與 (b) 都藏著 $(2m-1)$。",
        "en": "Use (b)'s answer for $-(2m^{2}n+11mn-6n)$; both (a) and (b) contain $(2m-1)$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 抽走 $(2m-1)$，再把括號內的乘積展開",
         "en": "Step 3 · Factor out $(2m-1)$, then expand the product inside the bracket"
        },
        "math": "=(2m-1)[(2m+1)-n(m+6)]\n=(2m-1)(2m+1-mn-6n)\n=(2m-1)(2m-mn-6n+1)",
        "zh": "抽走共同括號 $(2m-1)$ 之後，中括號內留下 $[(2m+1)-n(m+6)]$。把 $-n$ 乘進去：$-n(m)=-mn$、$-n(+6)=-6n$（兩個都要變號），得 $2m+1-mn-6n$；最後按字母整理成 $2m-mn-6n+1$。答案內不可以留著未展開的括號乘積 —— 官方 marking 的最後一分就是這一步。",
        "en": "After factoring out $(2m-1)$, the square bracket holds $[(2m+1)-n(m+6)]$. Multiply $-n$ in: $-n(m)=-mn$ and $-n(6)=-6n$ (both terms change sign), giving $2m+1-mn-6n$, then tidy it as $2m-mn-6n+1$. Never leave an unexpanded product inside a factor — the final mark depends on it.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(c) 只抽 $(2m-1)$ 卻沒有展開 $-n(m+6)$",
        "labelEn": "(c) leaving $-n(m+6)$ unexpanded",
        "zh": "答案的第二個括號要化簡成 $2m-mn-6n+1$，不可留有未展開的乘積。",
        "en": "The second bracket must be simplified to $2m-mn-6n+1$; no products may be left unexpanded."
       },
       {
        "label": "(b) 抽 $n$ 之後只寫 $(2m^{2}+11m-6)$",
        "labelEn": "(b) stopping at $(2m^{2}+11m-6)$",
        "zh": "括號內仍要十字相乘成 $(2m-1)(m+6)$，否則 (c) 用不到。",
        "en": "The bracket must still factorize to $(2m-1)(m+6)$, otherwise (c) cannot use it."
       }
      ],
      "tip": {
       "zh": "三部曲抽走共同括號之後，括號內若有「$-n(…)$」這種乘積，要展開化簡才完成。",
       "en": "After factoring the shared bracket out, any product such as $-n(\\ldots)$ left inside must be expanded and simplified."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q28",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q28",
     "source": "WS01 · DSE Paper 1 題型 Q28 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$9r^{2}-16$,",
       "en": "$9r^{2}-16$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$3r^{2}s-11rs-20s$,",
       "en": "$3r^{2}s-11rs-20s$,",
       "marks": 1
      },
      {
       "label": "(c)",
       "text": "$9r^{2}-16-3r^{2}s+11rs+20s$.",
       "en": "$9r^{2}-16-3r^{2}s+11rs+20s$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a)(b) 各自分解",
         "en": "Parts (a) and (b)"
        },
        "math": "9r^{2}-16=(3r+4)(3r-4)\\quad\\text{；}\\quad 3r^{2}s-11rs-20s=s(3r+4)(r-5)",
        "zh": "(b) 抽 $s$，括號內 $3r^{2}-11r-20=(3r+4)(r-5)$（交叉相乘 $-15r+4r=-11r$ ✓）。",
        "en": "(b) factor $s$; inside, $3r^{2}-11r-20=(3r+4)(r-5)$ (cross products $-15r+4r=-11r$ ✓).",
        "marking": "(1A)(1A)"
       },
       {
        "title": {
         "zh": "(c) 整組抽負號，再代入",
         "en": "Part (c): take out the minus, then substitute"
        },
        "math": "9r^{2}-16-3r^{2}s+11rs+20s=(3r+4)(3r-4)-s(3r+4)(r-5)",
        "zh": "兩部都藏著 $(3r+4)$。",
        "en": "Both parts contain the bracket $(3r+4)$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(3r+4)$",
         "en": "Take out $(3r+4)$"
        },
        "math": "=(3r+4)(3r-4-s(r-5))=(3r+4)(3r-rs+5s-4)",
        "zh": "展開 $-s(r-5)=-rs+5s$，再合併同類項。",
        "en": "Expand $-s(r-5)=-rs+5s$ and collect like terms.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(c) 未展開 $-s(r-5)$",
        "labelEn": "(c) not expanding $-s(r-5)$",
        "zh": "第二個括號要化簡成 $3r-rs+5s-4$。",
        "en": "The second bracket must simplify to $3r-rs+5s-4$."
       },
       {
        "label": "(b) 漏寫 $s$",
        "labelEn": "(b) dropping the $s$",
        "zh": "$s$ 是 (b) 抽出的因式，答案要寫 $s(3r+4)(r-5)$。",
        "en": "The $s$ factored out must stay: $s(3r+4)(r-5)$."
       }
      ],
      "tip": {
       "zh": "(b) 抽出的字母（$s$）不可漏；抽走共同括號後，括號內再化簡。",
       "en": "Never drop the letter factored out in (b); after taking the shared bracket out, simplify inside."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q29",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q29",
     "source": "WS01 · DSE Paper 1 題型 Q29 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$36-25y^{2}$,",
       "en": "$36-25y^{2}$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$10xy^{2}+17xy+6x$,",
       "en": "$10xy^{2}+17xy+6x$,",
       "marks": 1
      },
      {
       "label": "(c)",
       "text": "$36-25y^{2}-10xy^{2}-17xy-6x$.",
       "en": "$36-25y^{2}-10xy^{2}-17xy-6x$.",
       "marks": 2
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a)(b) 各自分解",
         "en": "Parts (a) and (b)"
        },
        "math": "36-25y^{2}=(6+5y)(6-5y)\\quad\\text{；}\\quad 10xy^{2}+17xy+6x=x(5y+6)(2y+1)",
        "zh": "(b) 抽 $x$，括號內 $10y^{2}+17y+6=(5y+6)(2y+1)$（交叉相乘 $5y+12y=17y$ ✓）。",
        "en": "(b) factor $x$; inside, $10y^{2}+17y+6=(5y+6)(2y+1)$ (cross products $5y+12y=17y$ ✓).",
        "marking": "(1A)(1A)"
       },
       {
        "title": {
         "zh": "(c) 整組抽負號，再代入",
         "en": "Part (c): take out the minus, then substitute"
        },
        "math": "36-25y^{2}-10xy^{2}-17xy-6x=(6+5y)(6-5y)-x(5y+6)(2y+1)",
        "zh": "留意 $(6+5y)$ 與 $(5y+6)$ 是同一個括號（加法交換律）。",
        "en": "Note that $(6+5y)$ and $(5y+6)$ are the same bracket (addition is commutative).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "抽走 $(6+5y)$",
         "en": "Take out $(6+5y)$"
        },
        "math": "=(6+5y)(6-5y-x(2y+1))=(6+5y)(6-5y-2xy-x)",
        "zh": "展開 $-x(2y+1)=-2xy-x$。",
        "en": "Expand $-x(2y+1)=-2xy-x$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "認不出 $(6+5y)=(5y+6)$",
        "labelEn": "Not seeing that $(6+5y)=(5y+6)$",
        "zh": "加法可以交換，兩個寫法是同一個括號，所以 (c) 可以直接抽走它。",
        "en": "Addition is commutative, so both writings are the same bracket and (c) can factor it out."
       },
       {
        "label": "(c) 未展開 $-x(2y+1)$",
        "labelEn": "(c) not expanding $-x(2y+1)$",
        "zh": "第二個括號要寫成 $6-5y-2xy-x$。",
        "en": "The second bracket must read $6-5y-2xy-x$."
       }
      ],
      "tip": {
       "zh": "遇到 $(a+b)$ 與 $(b+a)$ 時，記住它們相等；這是很多學生看不出的「已經配對」。",
       "en": "Remember $(a+b)=(b+a)$: many students miss that the brackets already match."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q30",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q30",
     "source": "WS01 · DSE Paper 1 題型 Q30 [HKDSE 2022 Paper 1 Q4]",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$81c^{2}-18c+1$,",
       "en": "$81c^{2}-18c+1$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$(10c-d)^{2}-81c^{2}+18c-1$.",
       "en": "$(10c-d)^{2}-81c^{2}+18c-1$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 完全平方",
         "en": "Part (a): perfect square"
        },
        "math": "81c^{2}-18c+1=(9c-1)^{2}",
        "zh": "$(9c)^{2}-2(9c)(1)+1^{2}$ ✓",
        "en": "$(9c)^{2}-2(9c)(1)+1^{2}$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 後三項抽負號，用 (a)",
         "en": "Part (b): take the minus out of the last three terms and use (a)"
        },
        "math": "(10c-d)^{2}-81c^{2}+18c-1=(10c-d)^{2}-(81c^{2}-18c+1)=(10c-d)^{2}-(9c-1)^{2}",
        "zh": "整條變成 $a^{2}-b^{2}$（$a=10c-d$、$b=9c-1$）。",
        "en": "The whole expression becomes $a^{2}-b^{2}$ with $a=10c-d$ and $b=9c-1$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "套平方差並化簡",
         "en": "Apply the difference of two squares and simplify"
        },
        "math": "=(10c-d+9c-1)(10c-d-(9c-1))=(19c-d-1)(c-d+1)",
        "zh": "$10c-d-(9c-1)=10c-d-9c+1=c-d+1$：負號要分配給兩項。",
        "en": "$10c-d-(9c-1)=10c-d-9c+1=c-d+1$: distribute the minus to both terms.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "拆括號時漏掉 $+1$",
        "labelEn": "Losing the $+1$ when removing brackets",
        "zh": "$-(9c-1)=-9c+1$：括號前面是減號，兩項都要變號。",
        "en": "$-(9c-1)=-9c+1$: with a minus in front, both terms change sign."
       },
       {
        "label": "(b) 由頭展開",
        "labelEn": "(b) expanding everything",
        "zh": "把 $(10c-d)^{2}$ 展開再重做非常費時；用 (a) 造成平方差兩步就完。",
        "en": "Expanding $(10c-d)^{2}$ wastes time; using (a) to form a difference of squares takes two moves."
       }
      ],
      "tip": {
       "zh": "卷一最後一兩年的「平方 − 平方」題：先 (a) 做完全平方，再整條套平方差。",
       "en": "For the recent 'square $-$ square' questions: do the perfect square in (a), then apply the identity to the whole expression."
      },
      "alt": [
       {
        "name": {
         "zh": "另解：常數項與符號保底檢查法",
         "en": "Alternative: check the constant term to confirm the signs"
        },
        "zh": "不用重做，只看「純 $d$ 與常數」的部分就可以確認符號：原式的 $-81c^{2}+18c-1$ 與 $(10c-d)^{2}$ 中的 $-d$ 部分，對應 $(-d)^{2}-1=d^{2}-1$；而答案 $(19c-d-1)(c-d+1)$ 中，把 $c$ 視為 $0$ 得 $(-d-1)(-d+1)=d^{2}-1$ ✓ 完全相符，證明正負號全部都對。這是卷一最後檢查答案最快的方法。",
        "en": "No need to redo the question: check only the terms in $d$ and the constant. The question contributes $(-d)^{2}-1=d^{2}-1$; in the answer $(19c-d-1)(c-d+1)$, putting $c=0$ gives $(-d-1)(-d+1)=d^{2}-1$ ✓ — identical, so every sign is right. The quickest final check in Paper 1."
       },
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q31",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q31",
     "source": "WS01 · DSE Paper 1 題型 Q31 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$9r^{2}+12r+4$,",
       "en": "$9r^{2}+12r+4$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$(4r-5s)^{2}-9r^{2}-12r-4$.",
       "en": "$(4r-5s)^{2}-9r^{2}-12r-4$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 完全平方",
         "en": "Part (a): perfect square"
        },
        "math": "9r^{2}+12r+4=(3r+2)^{2}",
        "zh": "$(3r)^{2}+2(3r)(2)+2^{2}$ ✓",
        "en": "$(3r)^{2}+2(3r)(2)+2^{2}$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 造成平方差",
         "en": "Part (b): create a difference of two squares"
        },
        "math": "(4r-5s)^{2}-9r^{2}-12r-4=(4r-5s)^{2}-(3r+2)^{2}",
        "zh": "後面三項整組抽負號之後就是 (a)。",
        "en": "Taking a minus out of the last three terms gives exactly (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "套平方差並化簡",
         "en": "Apply the identity and simplify"
        },
        "math": "=(4r-5s+3r+2)(4r-5s-(3r+2))=(7r-5s+2)(r-5s-2)",
        "zh": "$4r-5s-(3r+2)=r-5s-2$。",
        "en": "$4r-5s-(3r+2)=r-5s-2$.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "拆括號符號錯",
        "labelEn": "Sign error when removing brackets",
        "zh": "$-(3r+2)=-3r-2$；漏了 $-2$ 就會得到 $(r-5s+2)$。",
        "en": "$-(3r+2)=-3r-2$; missing the $-2$ gives $(r-5s+2)$."
       },
       {
        "label": "(a) 交叉項忘記乘 2",
        "labelEn": "(a) forgetting the factor 2",
        "zh": "$12r=2(3r)(2)$：完全平方的中間項是 $2ab$。",
        "en": "$12r=2(3r)(2)$: the middle term of a perfect square is $2ab$."
       }
      ],
      "tip": {
       "zh": "平方差題拆括號時，先寫出 $a+b$ 與 $a-b$（連括號），最後才拆。",
       "en": "For a difference of two squares, write $a+b$ and $a-b$ (with brackets) first, then remove them."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-ws01c-q32",
     "type": "long",
     "topic": "ws01c",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1B-Q32",
     "source": "WS01 · DSE Paper 1 題型 Q32 （同型練習）",
     "stem": {
      "en": "Factorize",
      "zh": "因式分解"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$16x^{2}-40x+25$,",
       "en": "$16x^{2}-40x+25$,",
       "marks": 1
      },
      {
       "label": "(b)",
       "text": "$(6x+5y)^{2}-16x^{2}+40x-25$.",
       "en": "$(6x+5y)^{2}-16x^{2}+40x-25$.",
       "marks": 3
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "(a) 完全平方",
         "en": "Part (a): perfect square"
        },
        "math": "16x^{2}-40x+25=(4x-5)^{2}",
        "zh": "$(4x)^{2}-2(4x)(5)+5^{2}$ ✓",
        "en": "$(4x)^{2}-2(4x)(5)+5^{2}$ ✓",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "(b) 造成平方差並套用",
         "en": "Part (b): create a difference of two squares and apply it"
        },
        "math": "(6x+5y)^{2}-16x^{2}+40x-25=(6x+5y)^{2}-(4x-5)^{2}",
        "zh": "後面三項抽負號後就是 (a)。",
        "en": "Taking the minus out of the last three terms gives (a).",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "拆括號、化簡、再抽公因式",
         "en": "Remove brackets, simplify, then factor again"
        },
        "math": "=(6x+5y+4x-5)(6x+5y-(4x-5))=(10x+5y-5)(2x+5y+5)=5(2x+y-1)(2x+5y+5)",
        "zh": "最後一步是官方 marking 的關鍵：$(10x+5y-5)$ 三項還有公因式 $5$，抽走才是 completely。",
        "en": "The final move is the key to the official marking: $(10x+5y-5)$ still has a common factor $5$; take it out for 'completely'.",
        "marking": "(1M)(1A)"
       }
      ],
      "traps": [
       {
        "label": "最後沒有抽 $5$",
        "labelEn": "Not taking out the final $5$",
        "zh": "$(10x+5y-5)=5(2x+y-1)$：這一分是官方 marking 的一部分，很容易漏。",
        "en": "$(10x+5y-5)=5(2x+y-1)$: this mark is part of the official marking and is easily missed."
       },
       {
        "label": "拆括號符號錯",
        "labelEn": "Sign error when removing brackets",
        "zh": "$-(4x-5)=-4x+5$，所以第二個括號是 $6x+5y-4x+5=2x+5y+5$。",
        "en": "$-(4x-5)=-4x+5$, so the second bracket is $6x+5y-4x+5=2x+5y+5$."
       }
      ],
      "tip": {
       "zh": "做完平方差，記得檢查每個括號能否再抽公因式 —— 「completely」包括這一層。",
       "en": "After the difference of two squares, check every bracket for a remaining common factor — 'completely' includes this."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算法：展開對回原式（做完自己檢查）",
         "en": "Check: expand and compare with the question"
        },
        "zh": "把答案展開，逐項對回原式：① (a)(b) 抽出的括號有沒有在 (c)／(b) 出現？② 最高次項係數對不對？③ 中間項（$mn$／$xy$ 那類）符號對不對？④ 常數項對不對？核對這四點，就算老師未改你都知自己對唔對。",
        "en": "Expand your answer and compare term by term: (1) does the bracket found in (a) or (b) reappear? (2) is the leading coefficient right? (3) is the sign of the middle term ($mn$, $xy$, …) right? (4) is the constant term right? Check these four and you will know whether you are correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": []
  }
 ],
 "stats": {
  "mc": 0,
  "long": 32,
  "cards": 4,
  "pages": 0
 }
};
