// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS01 = {
 "id": "ws01",
 "stage": 1,
 "unit": 4,
 "subtopic": "factorization",
 "source": "EPH DSE Pass · Worksheet 1",
 "name": {
  "zh": "WS01a · 因式分解基本功",
  "en": "WS01a · Factorization — Basic Skills"
 },
 "intro": {
  "zh": "學習抽公因式、併項分組、平方差與完全平方，以及十字相乘。先看一個方法，再跟示範核對，最後自己做幾題；需要時可以隨時返回概念卡。",
  "en": "Learn common factors, grouping, square identities and the cross-method. Study a method, follow a worked example, then try a few questions. Return to the concepts whenever needed."
 },
 "cmdHints": [
  {
   "en": "Factorize completely",
   "zh": "徹底分解（要分到不能再分為止）"
  },
  {
   "en": "common factor",
   "zh": "公因式（各項共同擁有的因式，先抽走它）"
  },
  {
   "en": "difference of two squares",
   "zh": "平方差：$a^{2}-b^{2}=(a+b)(a-b)$"
  },
  {
   "en": "perfect square",
   "zh": "完全平方：$a^{2}+2ab+b^{2}=(a+b)^{2}$"
  },
  {
   "en": "Hence",
   "zh": "由此：展示如何使用上一部的結果"
  }
 ],
 "lessons": [
  {
   "id": "ws01-1",
   "title": {
    "zh": "四種方法，由淺入深",
    "en": "Four methods, easy to hard"
   },
   "cards": [
    {
     "id": "ws01-c1",
     "topic": "ws01",
     "title": {
      "zh": "抽公因式：每一項都要有",
      "en": "Common factors: shared by every term"
     },
     "body": {
      "zh": "因式分解，是把一個式子寫成幾個因式相乘。先找每一項都有的因式。\n$6r^{2}$ 與 $4rs$ 都有 $2r$；提出後，分別留下 $3r$ 與 $2s$。{{math:0}}\n把結果展開，檢查每一項能否回到原式。{{math:1}}",
      "en": "Factorisation rewrites an expression as a product. Start with a factor shared by every term.\nBoth $6r^{2}$ and $4rs$ contain $2r$. Taking it out leaves $3r$ and $2s$.{{math:0}}\nExpand the result and check that every term matches the original.{{math:1}}"
     },
     "math": [
      "6r^{2}+4rs=\\hl{2r}(3r+2s)",
      "2r(3r+2s)=6r^{2}+4rs"
     ],
     "vocab": [
      {
       "en": "factorization",
       "zh": "因式分解"
      },
      {
       "en": "factor",
       "zh": "因式"
      },
      {
       "en": "common factor",
       "zh": "公因式"
      },
      {
       "en": "expansion",
       "zh": "展開"
      }
     ],
     "warn": {
      "zh": "提出負公因式可以令括號較易處理，但不是唯一做法。例：$-r^{3}-r^{2}s=-r^{2}(r+s)$。每一項都必須除以同一個公因式。",
      "en": "A negative common factor can make the bracket easier to handle, but is not compulsory. For example, $-r^{3}-r^{2}s=-r^{2}(r+s)$. Divide every term by the same factor."
     },
     "goal": {
      "zh": "找出各項共同的數字與字母。",
      "en": "Find the numbers and letters shared by all terms."
     },
     "recall": {
      "prompt": {
       "zh": "先不看例子：$12x+18$ 的係數，最大公因數是多少？",
       "en": "Without looking back: what is the highest common factor of the coefficients in $12x+18$?"
      },
      "options": [
       {
        "math": "6"
       },
       {
        "math": "3"
       },
       {
        "math": "12"
       }
      ],
      "answer": 0,
      "explanation": {
       "zh": "答案是 $6$，因為 $12=6\\times2$、$18=6\\times3$。$3$ 亦能同時整除 $12$ 與 $18$，但不是最大的。",
       "en": "The answer is $6$: $12=6\\times2$ and $18=6\\times3$. Although $3$ is a common factor, it is not the highest."
      }
     }
    },
    {
     "id": "ws01-c2",
     "topic": "ws01",
     "title": {
      "zh": "併項分組：找相同的括號",
      "en": "Grouping: find a shared bracket"
     },
     "body": {
      "zh": "四項式可以先嘗試分成兩組；目標是讓每組提出公因式後，留下相同的括號。\n例：先把 $hk+1+h+k$ 調位，再分組。{{math:0}}\n第二組其實是 $1(k+1)$，所以提出 $(k+1)$ 後，仍要留下 $+1$。\n兩組相差負號時，可先提出 $-1$。{{math:1}}",
      "en": "For four terms, try two pairs. Aim to leave the same bracket after taking out a common factor from each pair.\nFirst rearrange $hk+1+h+k$, then group.{{math:0}}\nThe second group is $1(k+1)$, so taking out $(k+1)$ still leaves $+1$.\nIf the brackets have opposite signs, take out $-1$ first.{{math:1}}"
     },
     "math": [
      "hk+1+h+k=hk+h+k+1\n=h\\hl{(k+1)}+1\\hl{(k+1)}\n=\\hl{(k+1)}(h+1)",
      "ab-ac-b+c=a\\hl{(b-c)}-\\hl{(b-c)}\n=\\hl{(b-c)}(a-1)"
     ],
     "vocab": [
      {
       "en": "grouping",
       "zh": "併項分組"
      },
      {
       "en": "term",
       "zh": "項"
      }
     ],
     "warn": {
      "zh": "$a+h=h+a$，加法調位不改變值；但 $a-h=-(h-a)$，減法調位要處理負號。",
      "en": "Addition can be reordered: $a+h=h+a$. Subtraction needs a sign change: $a-h=-(h-a)$."
     },
     "goal": {
      "zh": "先分組，再把相同括號視作一個因式。",
      "en": "Group terms, then treat the shared bracket as one factor."
     },
     "recall": {
      "prompt": {
       "zh": "提出共同括號後，$x(y+1)+(y+1)$ 變成甚麼？",
       "en": "What does $x(y+1)+(y+1)$ become after taking out the shared bracket?"
      },
      "options": [
       {
        "math": "x(y+1)"
       },
       {
        "math": "(y+1)(x+1)"
       },
       {
        "math": "(y+1)(x+y)"
       }
      ],
      "answer": 1,
      "explanation": {
       "zh": "第二項是 $1(y+1)$，所以提出 $(y+1)$ 後留下 $x+1$。",
       "en": "The second term is $1(y+1)$, so taking out $(y+1)$ leaves $x+1$."
      }
     }
    },
    {
     "id": "ws01-c3",
     "topic": "ws01",
     "title": {
      "zh": "恆等式：先辨認形狀",
      "en": "Identities: recognise the pattern"
     },
     "body": {
      "zh": "兩項相減，而且每項都可寫成平方：用平方差。{{math:0}}\n三項相加：首尾是平方，中間項必須是 $2uv$，才是完全平方。{{math:1}}\n中間項是 $-2uv$ 時，括號內用減號。{{math:2}}\n先辨認整個形狀，再把題目的數或式子放入 $u$、$v$。",
      "en": "Two subtracted terms that are both squares: use the difference of two squares.{{math:0}}\nFor three terms, square terms at both ends are not enough: the middle term must be $2uv$.{{math:1}}\nWhen the middle term is $-2uv$, use a minus in the bracket.{{math:2}}\nRecognise the whole pattern, then substitute the given numbers or expressions for $u$ and $v$."
     },
     "math": [
      "u^{2}-v^{2}=\\hlg{(u+v)(u-v)}",
      "u^{2}+\\hlw{2uv}+v^{2}=\\hlg{(u+v)^{2}}",
      "u^{2}\\hlw{-2uv}+v^{2}=\\hlg{(u-v)^{2}}"
     ],
     "vocab": [
      {
       "en": "identity",
       "zh": "恆等式"
      },
      {
       "en": "difference of two squares",
       "zh": "平方差"
      },
      {
       "en": "perfect square",
       "zh": "完全平方"
      }
     ],
     "warn": {
      "zh": "$u^{2}+v^{2}$ 不能套用平方差；在本課的實係數範圍，一般不能分成兩個一次因式。完全平方則要核對中間項，不能只看首尾。",
      "en": "$u^{2}+v^{2}$ is not a difference of squares; over the real coefficients used here, it does not generally split into linear factors. For a perfect square, always check the middle term."
     },
     "goal": {
      "zh": "分清平方差與完全平方。",
      "en": "Distinguish a difference of squares from a perfect square."
     },
     "recall": {
      "prompt": {
       "zh": "$9x^{2}-16$ 符合哪一個分解？",
       "en": "Which factorisation matches $9x^{2}-16$?"
      },
      "options": [
       {
        "math": "(3x-4)^{2}"
       },
       {
        "math": "(9x-4)(x+4)"
       },
       {
        "math": "(3x+4)(3x-4)"
       }
      ],
      "answer": 2,
      "explanation": {
       "zh": "$9x^{2}=(3x)^{2}$、$16=4^{2}$，所以用 $(u+v)(u-v)$。",
       "en": "Since $9x^{2}=(3x)^{2}$ and $16=4^{2}$, use $(u+v)(u-v)$."
      }
     }
    },
    {
     "id": "ws01-c4",
     "topic": "ws01",
     "title": {
      "zh": "十字相乘：核對中間項",
      "en": "Cross-method: check the middle term"
     },
     "body": {
      "zh": "對二次三項式，先找兩個一次因式的候選。首項乘積與末項乘積都要對。\n係數是 $1$ 的例子：$(-2)(-3)=6$，而 $(-2)+(-3)=-5$。{{math:0}}\n係數不是 $1$ 時，要交叉相乘再相加。本例 $3x-10x=-7x$。{{math:1}}\n首尾對、中間也對，才可以寫成這兩個因式。",
      "en": "For a quadratic trinomial, choose two candidate linear factors. Their leading and constant products must match.\nWith leading coefficient $1$, $(-2)(-3)=6$ and $(-2)+(-3)=-5$.{{math:0}}\nWith a different leading coefficient, add the cross products. Here $3x-10x=-7x$.{{math:1}}\nAccept the factor pair only when both ends and the middle term match."
     },
     "math": [
      "x^{2}-5x+6=\\hlg{(x-2)(x-3)}",
      "6x^{2}-7x-5=\\hlg{(2x+1)(3x-5)}"
     ],
     "vocab": [
      {
       "en": "cross-method",
       "zh": "十字相乘法"
      },
      {
       "en": "trinomial",
       "zh": "三項式"
      },
      {
       "en": "coefficient",
       "zh": "係數"
      },
      {
       "en": "constant term",
       "zh": "常數項"
      }
     ],
     "warn": {
      "zh": "當首項係數為正：末項係數為負，兩個常數項異號；末項係數為正，兩個常數項同號。中間項再決定具體配對。",
      "en": "With a positive leading coefficient, a negative constant term requires constants of opposite signs; a positive constant term requires matching signs. Then check the middle term to choose the pairing."
     },
     "goal": {
      "zh": "首尾配對後，用交叉積的和驗證。",
      "en": "After matching the ends, verify the sum of the cross products."
     },
     "recall": {
      "prompt": {
       "zh": "哪組因式的交叉積相加是 $+5x$？",
       "en": "Which pair has cross products that add to $+5x$?"
      },
      "options": [
       {
        "math": "(2x+1)(x-3)"
       },
       {
        "math": "(2x-1)(x+3)"
       },
       {
        "math": "(2x-3)(x+1)"
       }
      ],
      "answer": 1,
      "explanation": {
       "zh": "$(2x)(3)+(-1)(x)=6x-x=5x$，末項亦是 $-3$。",
       "en": "$(2x)(3)+(-1)(x)=6x-x=5x$, and the constant product is $-3$."
      }
     },
     "crossExample": {
      "factors": [
       "2x",
       "+1",
       "3x",
       "-5"
      ],
      "products": [
       "(2x)(-5)=-10x",
       "(1)(3x)=3x"
      ],
      "sum": "-10x+3x=-7x"
     }
    }
   ],
   "long": [
    {
     "id": "eph-ws01-ex01",
     "type": "long",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1-EX1",
     "source": "WS01 DSE Paper 1 Typed Question · Example 1 · [HKDSE 2021 Paper 1 Q3]",
     "stem": {
      "text": "Factorize",
      "zh": "因式分解",
      "en": "Factorize"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$15x^{2}+xy-2y^{2}$,",
       "marks": 1,
       "zh": "$15x^{2}+xy-2y^{2}$,",
       "en": "$15x^{2}+xy-2y^{2}$,"
      },
      {
       "label": "(b)",
       "text": "$9x-3y-15x^{2}-xy+2y^{2}$.",
       "marks": 2,
       "zh": "$9x-3y-15x^{2}-xy+2y^{2}$.",
       "en": "$9x-3y-15x^{2}-xy+2y^{2}$."
      }
     ],
     "marks": 3,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 認清題目要什麼",
         "en": "Step 1 · Read the question"
        },
        "math": "",
        "zh": "(a) 是二次三項式，可用十字相乘。(b) 有五項；先找與 (a) 相同或相反的那三項，把它們當成一組。",
        "en": "Part (a) is a quadratic trinomial. In the five terms of (b), look for a group that matches (a), possibly with all signs reversed."
       },
       {
        "title": {
         "zh": "第 2 步 · (a) 十字相乘",
         "en": "Step 2 · Factorize (a)"
        },
        "math": "15x^{2}+xy-2y^{2}=\\hlg{(3x-y)(5x+2y)}",
        "zh": "首項 $15x^{2}$ 拆成 $3x\\cdot 5x$，末項 $-2y^{2}$ 拆成 $(-y)\\cdot(+2y)$。交叉相乘檢查中間項：$(3x)(+2y)+(-y)(5x)=6xy-5xy=xy$，與題目的 $+xy$ 相符，所以分解正確。",
        "marking": "(1A)",
        "highlight": [
         "(3x-y)(5x+2y)"
        ],
        "en": "Split the leading term $15x^{2}$ into $3x\\cdot 5x$ and the last term $-2y^{2}$ into $(-y)\\cdot(+2y)$. Cross-check the middle term: $(3x)(+2y)+(-y)(5x)=6xy-5xy=xy$, which matches the given $+xy$, so the factorization is correct. "
       },
       {
        "title": {
         "zh": "第 3 步 · (b) 先分組，加括號",
         "en": "Step 3 · Group the terms in (b)"
        },
        "math": "9x-3y-15x^{2}-xy+2y^{2}\n=(9x-3y)\\hlw{-}(\\hl{15x^{2}+xy-2y^{2}})",
        "zh": "後三項的符號與 (a) 相反。提出負號時，每一項都要變號，才會得到 $-(15x^{2}+xy-2y^{2})$。",
        "highlight": [
         "(9x-3y)-(15x^{2}+xy-2y^{2})"
        ],
        "en": "The last three terms have the opposite signs to (a). Taking out a minus changes every sign inside, giving $-(15x^{2}+xy-2y^{2})$."
       },
       {
        "title": {
         "zh": "第 4 步 · 用 (a) 的結果",
         "en": "Step 4 · Use the result of (a)"
        },
        "math": "=\\hl{3}\\hl{(3x-y)}-\\hl{(3x-y)}(5x+2y)",
        "zh": "$9x-3y=3(3x-y)$；另一組用 (a) 的結果。兩組現在都含有 $(3x-y)$。",
        "marking": "(1M: Use the result of (a).)",
        "highlight": [
         "3(3x-y)-(3x-y)(5x+2y)"
        ],
        "link": {
         "from": "(a)",
         "math": "15x^{2}+xy-2y^{2}=(3x-y)(5x+2y)"
        },
        "en": "$9x-3y=3(3x-y)$; replace the other group using (a). Both groups now contain $(3x-y)$."
       },
       {
        "title": {
         "zh": "第 5 步 · 抽出共同括號，再拆中括號",
         "en": "Step 5 · Factor out the common bracket, then remove the square brackets"
        },
        "math": "=\\hl{(3x-y)}[3\\hlw{-}(5x+2y)]\n=\\hlg{(3x-y)(3\\xf{-5x}\\xf{-2y})}",
        "zh": "提出 $(3x-y)$ 後，餘下 $3-(5x+2y)$。先保留括號，再逐項分配負號：$-5x-2y$。",
        "marking": "(1A)",
        "highlight": [
         "(3x-y)(3-5x-2y)"
        ],
        "en": "Taking out $(3x-y)$ leaves $3-(5x+2y)$. Keep the bracket before distributing the minus to get $-5x-2y$."
       }
      ],
      "traps": [
       {
        "label": "(b) 抽負號只改一項",
        "labelEn": "flipping only one sign when taking out the minus",
        "zh": "$-15x^{2}-xy+2y^{2}$ 抽負號是「每一項都變號」：要寫成 $-(15x^{2}+xy-2y^{2})$，括號內與 (a) 完全一樣，之後才套得上 (a) 的答案。只改第一項（例如寫成 $-(15x^{2}-xy+2y^{2})$）就套不上。",
        "en": "Taking the minus out of $-15x^{2}-xy+2y^{2}$ flips every term: it must become $-(15x^{2}+xy-2y^{2})$, exactly the expression from (a), so that (a)'s answer can be used. Flipping only the first term (say $-(15x^{2}-xy+2y^{2})$) breaks that match."
       },
       {
        "label": "中括號前的減號沒有逐項分配",
        "labelEn": "not distributing the minus in the square bracket",
        "zh": "$(3x-y)[3-(5x+2y)]$ 拆中括號時，減號要逐項分配：$-(+5x)=-5x$、$-(+2y)=-2y$，所以是 $3-5x-2y$。寫成 $3-5x+2y$ 展開後就不等於原式。",
        "en": "Removing the square bracket in $(3x-y)[3-(5x+2y)]$ needs the minus distributed term by term: $-(+5x)=-5x$ and $-(+2y)=-2y$, giving $3-5x-2y$. Writing $3-5x+2y$ no longer expands back to the original."
       },
       {
        "label": "(a) 交叉相乘符號配錯",
        "labelEn": "wrong sign pairing in the cross-method",
        "zh": "(a) 若寫成 $(3x+y)(5x-2y)$，展開的中間項是 $-xy$，與題目的 $+xy$ 不符 —— 十字相乘一定要做一次交叉相乘，驗中間項。",
        "en": "If (a) is written as $(3x+y)(5x-2y)$, the expansion has middle term $-xy$, not the $+xy$ in the question — always cross-multiply once to check the middle term."
       }
      ],
      "tip": {
       "zh": "先把與 (a) 相同的三項圈成一組，再整理餘下兩項，找出共同因式。",
       "en": "Group the three terms that match (a), then factor the remaining pair to find the common factor."
      },
      "alt": [
       {
        "name": {
         "zh": "展開驗算：逐項核對",
         "en": "Check by expanding term by term"
        },
        "zh": "把 $(3x-y)(3-5x-2y)$ 展開，得 $9x-3y-15x^{2}-xy+2y^{2}$。每一項都要與 (b) 相同，特別留意 $xy$ 與 $y^{2}$ 的符號。",
        "en": "Expand $(3x-y)(3-5x-2y)$ to obtain $9x-3y-15x^{2}-xy+2y^{2}$. Check every term against (b), especially the signs of $xy$ and $y^{2}$."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
       "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "(a)",
       "options": [
        "(3x+y)(5x+2y)",
        "(3x-y)(5x-2y)",
        "(3x-y)(5x+2y)",
        "(3x-2y)(5x+y)"
       ],
       "answer": "C"
      },
      {
       "part": "(b)",
       "options": [
        "(3x-y)(3-5x-2y)",
        "(3x-y)(3+5x+2y)",
        "(3x+y)(3-5x-2y)",
        "(3x-y)(3-5x+2y)"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws01-ex02",
     "type": "long",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1-EX2",
     "source": "WS01 DSE Paper 1 Typed Question · Example 2 · [HKDSE 2022 Paper 1 Q4]",
     "stem": {
      "text": "Factorize",
      "zh": "因式分解",
      "en": "Factorize"
     },
     "parts": [
      {
       "label": "(a)",
       "text": "$16c^{2}-8c+1$,",
       "marks": 1,
       "zh": "$16c^{2}-8c+1$,",
       "en": "$16c^{2}-8c+1$,"
      },
      {
       "label": "(b)",
       "text": "$(5c+d)^{2}-16c^{2}+8c-1$.",
       "marks": 3,
       "zh": "$(5c+d)^{2}-16c^{2}+8c-1$.",
       "en": "$(5c+d)^{2}-16c^{2}+8c-1$."
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 認清題目要什麼",
         "en": "Step 1 · Read the question"
        },
        "math": "",
        "zh": "(a) 可寫成完全平方。(b) 後三項恰好是 (a) 的相反數；先整組提出負號，再用平方差。",
        "en": "Part (a) is a perfect square. The last three terms in (b) are its negative: take out the minus, then use the difference of two squares."
       },
       {
        "title": {
         "zh": "第 2 步 · (a) 用完全平方",
         "en": "Step 2 · Factorize (a)"
        },
        "math": "\\hl{16c^{2}-8c+1}=(\\hl{4c})^{2}\\hlw{-2(4c)(1)}+(\\hl{1})^{2}\n=\\hlg{(4c-1)^{2}}",
        "zh": "首項 $16c^{2}=(4c)^{2}$、尾項 $1=1^{2}$、中間 $-8c=-2(4c)(1)$，完全符合 $a^{2}-2ab+b^{2}=(a-b)^{2}$，所以是 $(4c-1)^{2}$。",
        "marking": "(1A)",
        "highlight": [
         "(4c-1)^{2}"
        ],
        "en": "Leading term $16c^{2}=(4c)^{2}$, last term $1=1^{2}$, middle term $-8c=-2(4c)(1)$ — exactly $a^{2}-2ab+b^{2}=(a-b)^{2}$, so the answer is $(4c-1)^{2}$. "
       },
       {
        "title": {
         "zh": "第 3 步 · (b) 先把後三項包起來",
         "en": "Step 3 · Put brackets in (b)"
        },
        "math": "(5c+d)^{2}-16c^{2}+8c-1\n=(5c+d)^{2}\\hlw{-}(\\hl{16c^{2}-8c+1})",
        "zh": "後三項 $-16c^{2}+8c-1$ 提出負號加括號，變成 $-(16c^{2}-8c+1)$。注意括號內每一項都要變號：$-16c^{2}$ 變 $16c^{2}$、$+8c$ 變 $-8c$、$-1$ 變 $+1$。",
        "highlight": [
         "(5c+d)^{2}-(16c^{2}-8c+1)"
        ],
        "en": "Taking a minus sign out of the last three terms $-16c^{2}+8c-1$ gives $-(16c^{2}-8c+1)$. Every term inside changes sign: $-16c^{2}\\to16c^{2}$, $+8c\\to-8c$, $-1\\to+1$."
       },
       {
        "title": {
         "zh": "第 4 步 · 用 (a) 化成平方減平方",
         "en": "Step 4 · Use the result of (a)"
        },
        "math": "=\\hl{(5c+d)^{2}}-\\hl{(4c-1)^{2}}",
        "zh": "括號內正是 (a) 的式子，代入 (a) 的答案：$16c^{2}-8c+1=(4c-1)^{2}$。現在整題變成「平方減平方」，可以用平方差。這一步「用上一部結果」是 M 分。",
        "marking": "(1M: Use the result of (a).)",
        "highlight": [
         "(5c+d)^{2}-(4c-1)^{2}"
        ],
        "link": {
         "from": "(a)",
         "math": "16c^{2}-8c+1=(4c-1)^{2}"
        },
        "en": "The bracket is exactly the expression in (a), so substitute $16c^{2}-8c+1=(4c-1)^{2}$. The expression is now square minus square, ready for the difference of two squares. Using the previous part is the M mark."
       },
       {
        "title": {
         "zh": "第 5 步 · 用平方差恆等式",
         "en": "Step 5 · Difference of two squares"
        },
        "math": "=[(5c+d)+(4c-1)][(5c+d)\\hlw{-}(4c-1)]",
        "zh": "套用 $a^{2}-b^{2}=(a+b)(a-b)$，其中 $a=5c+d$、$b=4c-1$。這裡減號的括號最易錯：$(5c+d)-(4c-1)$ 不能漏掉括號，否則 $-(-1)$ 會變成 $-1$。這一步是 M 分。",
        "marking": "(1M)",
        "highlight": [
         "[(5c+d)+(4c-1)][(5c+d)-(4c-1)]"
        ],
        "en": "Apply $a^{2}-b^{2}=(a+b)(a-b)$ with $a=5c+d$ and $b=4c-1$. The bracket after the minus sign is the classic trap: $(5c+d)-(4c-1)$ must keep its brackets, otherwise $-(-1)$ becomes $-1$."
       },
       {
        "title": {
         "zh": "第 6 步 · 逐項分配負號後化簡",
         "en": "Step 6 · Distribute the minus to each term, then simplify"
        },
        "math": "=(5c+d+4c-1)(5c+d\\xf{-4c}\\xf{+1})\n=\\hlg{(9c+d-1)(c+d+1)}",
        "zh": "把兩個中括號拆開：第一個 $(5c+d)+(4c-1)$ 直接去括號；第二個 $(5c+d)-(4c-1)$ 前面的減號要逐項分配 —— $-(+4c)=-4c$、$-(-1)=+1$，所以是 $5c+d-4c+1$（不是 $5c+d-4c-1$）。合併同類項後得 $(9c+d-1)(c+d+1)$。",
        "marking": "(1A)",
        "highlight": [
         "(9c+d-1)(c+d+1)"
        ],
        "en": "Open both brackets: the first, $(5c+d)+(4c-1)$, can be written straight away; in the second, $(5c+d)-(4c-1)$, the minus must be distributed to each term — $-(+4c)=-4c$ and $-(-1)=+1$, giving $5c+d-4c+1$ (not $5c+d-4c-1$). Collecting terms gives $(9c+d-1)(c+d+1)$."
       }
      ],
      "traps": [
       {
        "label": "(b) 抽負號漏變號",
        "labelEn": "missing signs when taking out the minus",
        "zh": "$-16c^{2}+8c-1$ 抽負號是「三項一齊變號」：$-(16c^{2}-8c+1)$，這樣括號內正是 (a) 的式子。漏改任何一項（例如 $-(16c^{2}+8c-1)$）就套不上完全平方。",
        "en": "Taking the minus out of $-16c^{2}+8c-1$ flips all three terms: $-(16c^{2}-8c+1)$, which is exactly the expression from (a). Missing a sign (say $-(16c^{2}+8c-1)$) destroys the perfect square."
       },
       {
        "label": "減號後沒有整組包住",
        "labelEn": "the group after the minus is not kept whole",
        "zh": "$(5c+d)-(4c-1)$ 中，減號後是「整組 $4c-1$」。寫成 $(5c+d)-4c-1$ 其實只減了 $4c+1$，答案會變成 $(9c+d-1)(c+d-1)$，不是正解。",
        "en": "In $(5c+d)-(4c-1)$ the minus applies to the whole group $4c-1$. Writing $(5c+d)-4c-1$ subtracts $4c+1$ instead, giving $(9c+d-1)(c+d-1)$, which is not the answer."
       },
       {
        "label": "(a) 完全平方符號錯",
        "labelEn": "wrong sign in the perfect square",
        "zh": "(a) 寫成 $(4c+1)^{2}$：展開是 $16c^{2}+8c+1$，中間項 $+8c$，但題目是 $-8c$，所以必須是 $(4c-1)^{2}$。",
        "en": "(a) written as $(4c+1)^{2}$ expands to $16c^{2}+8c+1$ with middle term $+8c$, but the question has $-8c$ — it must be $(4c-1)^{2}$."
       }
      ],
      "tip": {
       "zh": "先把後三項合成一個平方，再把兩個平方的底式各自視作一整塊。",
       "en": "Make the last three terms into one square, then treat each base expression as a whole."
      },
      "alt": [
       {
        "name": {
         "zh": "展開驗算：核對全部係數",
         "en": "Check by expanding all terms"
        },
        "zh": "將兩個因式展開，再與 $(5c+d)^{2}-16c^{2}+8c-1$ 展開後的式子比較。每種項的係數都相同，才確認兩式恆等；只核對常數項並不足夠。",
        "en": "Expand both factors and compare with the expansion of $(5c+d)^{2}-16c^{2}+8c-1$. Every coefficient must match to establish the identity; checking only the constant term is insufficient."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
       "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "(a)",
       "options": [
        "(4c-1)^{2}",
        "(4c+1)^{2}",
        "(4c-1)(4c+1)",
        "(2c-1)^{2}"
       ],
       "answer": "A"
      },
      {
       "part": "(b)",
       "options": [
        "(9c+d+1)(c+d+1)",
        "(9c+d-1)(c+d+1)",
        "(9c-d-1)(c+d+1)",
        "(9c+d-1)(c-d+1)"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws01-s01",
     "type": "long",
     "kind": "short",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 1,
     "code": "WS1-S1",
     "source": "WS01 · Basic Skills Q7(b)",
     "stem": {
      "en": "Factorize $-4m^{2}+20mn-25n^{2}$ completely.",
      "zh": "因式分解 $-4m^{2}+20mn-25n^{2}$（要分得徹底）。"
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 三項、首項負數：先抽 $-1$",
         "en": "Step 1 · Negative leading term: take $-1$ out first"
        },
        "math": "\\hlw{-}4m^{2}+20mn-25n^{2}=\\hlw{-}(\\xf{4m^{2}}\\xf{-20mn}\\xf{+25n^{2}})",
        "zh": "先提出 $-1$，令括號內首項係數為正，較容易辨認完全平方。每一項都要變號。",
        "en": "Take out $-1$ so the leading coefficient inside is positive and the perfect square is easier to recognise. Change every sign.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 認出完全平方",
         "en": "Step 2 · Recognise the perfect square"
        },
        "math": "=-\\left[\\hl{(2m)^{2}}\\hlw{-2(2m)(5n)}+\\hl{(5n)^{2}}\\right]",
        "zh": "括號內：$4m^{2}=(2m)^{2}$、$25n^{2}=(5n)^{2}$，而中間項 $-20mn=-2(2m)(5n)$，完全符合 $a^{2}-2ab+b^{2}=(a-b)^{2}$。",
        "en": "Inside the bracket $4m^{2}=(2m)^{2}$, $25n^{2}=(5n)^{2}$ and the middle term $-20mn=-2(2m)(5n)$, which is exactly $a^{2}-2ab+b^{2}=(a-b)^{2}$."
       },
       {
        "title": {
         "zh": "第 3 步 · 寫成平方，記得保留負號",
         "en": "Step 3 · Write it as a square — keep the minus sign"
        },
        "math": "=\\hlg{-(2m-5n)^{2}}",
        "zh": "答案是 $-(2m-5n)^{2}$。外面的負號要保留；漏寫便會令展開後每一項的符號相反。",
        "en": "The answer is $-(2m-5n)^{2}$. Always copy the minus sign in front — drop it and expanding gives the wrong sign.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "抽了 $-1$ 就停手",
        "labelEn": "Stopping after taking out $-1$",
        "zh": "寫成 $-(4m^{2}-20mn+25n^{2})$ 就當完成。題目要求 completely，括號內仍要分解到 $(2m-5n)^{2}$。",
        "en": "Writing $-(4m^{2}-20mn+25n^{2})$ and stopping: the question says 'completely', so the bracket still has to become $(2m-5n)^{2}$."
       },
       {
        "label": "中間項符號錯",
        "labelEn": "Wrong sign in the middle term",
        "zh": "提出 $-1$ 後，括號內的中間項是 $-20mn$。因此內括號是 $(2m-5n)^{2}$；原式外面的負號也要保留。",
        "en": "After taking out $-1$, the middle term inside is $-20mn$. Thus the inner square is $(2m-5n)^{2}$, and the original leading minus must remain."
       }
      ],
      "tip": {
       "zh": "提出負號後，先查完全平方；若不符合，再試十字相乘。不是每個三項式都能用整數係數分解。",
       "en": "After taking out a minus, check for a perfect square, then try the cross-method if needed. Not every trinomial factors over integer coefficients."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：展開對回原式",
         "en": "Check: expand back to the original"
        },
        "zh": "展開檢查：$-(2m-5n)^{2}=-(4m^{2}-20mn+25n^{2})=-4m^{2}+20mn-25n^{2}$，與原式相同。負號在括號外，展開時先平方、再整組變號，可用來核對每個係數。",
        "en": "Expand to check: $-(2m-5n)^{2}=-(4m^{2}-20mn+25n^{2})=-4m^{2}+20mn-25n^{2}$, the original expression. With the minus outside, square first and then flip every sign — the quickest self-check for this type."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
       "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "(2m-5n)^{2}",
        "-(2m-5n)^{2}",
        "-(2m+5n)^{2}",
        "-(2m-5n)(2m+5n)"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws01-s02",
     "type": "long",
     "kind": "short",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1-S2",
     "source": "WS01 · Basic Skills Q9(a)",
     "stem": {
      "en": "Factorize $x^{2}+4xy+3y^{2}$.",
      "zh": "因式分解 $x^{2}+4xy+3y^{2}$."
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 十字相乘：拆首項與末項",
         "en": "Step 1 · Cross-method: split the first and last terms"
        },
        "math": "x^{2}+4xy+3y^{2}\\Rightarrow(x\\quad y)(x\\quad \\hl{3y})",
        "zh": "首項 $x^{2}$ 只能拆成 $x\\cdot x$；末項 $3y^{2}$ 拆成 $y\\cdot 3y$（因為兩個括號都要有 $y$，展開才會有 $y^{2}$ 項）。",
        "en": "The first term $x^{2}$ can only split as $x\\cdot x$; the last term $3y^{2}$ splits as $y\\cdot 3y$ — both brackets need a $y$, otherwise expanding never produces $y^{2}$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 交叉相乘驗中間項",
         "en": "Step 2 · Cross-check the middle term"
        },
        "math": "x\\cdot 3y+y\\cdot x=3xy+xy=\\hl{4xy}",
        "zh": "交叉相乘的兩個積相加要等於題目的中間項 $+4xy$。剛剛好，代表拆對了。用交叉積核對中間項，才能確認這個配對。",
        "en": "The two cross products must add up to the given middle term $+4xy$. They do, so the split is right. Checking the cross products confirms the pairing."
       },
       {
        "title": {
         "zh": "第 3 步 · 寫出答案",
         "en": "Step 3 · Write the answer"
        },
        "math": "x^{2}+4xy+3y^{2}=\\hlg{(x+y)(x+3y)}",
        "zh": "兩個常數部分都用加號，因為乘積要是 $+3y^{2}$，交叉積相加又要是 $+4xy$。這裡比較的是各項的係數，並非假設 $x$、$y$ 為正數。",
        "en": "Both constant parts take a plus: their product must be $+3y^{2}$ and their cross products must sum to $+4xy$. This concerns coefficients, not an assumption that $x$ and $y$ are positive.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "兩個括號都寫減號",
        "labelEn": "Both brackets negative",
        "zh": "寫成 $(x-y)(x-3y)$：那樣中間項是 $-4xy$，題目是 $+4xy$，所以兩個括號必須同號（都加）。",
        "en": "Writing $(x-y)(x-3y)$ gives $-4xy$ in the middle, but the question has $+4xy$ — so both brackets must have the same sign (both plus)."
       },
       {
        "label": "拆完不驗算",
        "labelEn": "Not checking the split",
        "zh": "拆完 $3y^{2}=y\\cdot 3y$ 就直接寫答案。中間項對不上就代表拆錯，務必做一次交叉相乘。",
        "en": "Writing the answer straight after splitting $3y^{2}=y\\cdot 3y$. If the middle term does not match, the split is wrong — always do the cross-check."
       },
       {
        "label": "漏掉一個 $y$",
        "labelEn": "Losing a $y$",
        "zh": "寫成 $(x+y)(x+3)$：第二個括號少了 $y$，展開後不會是原式。",
        "en": "Writing $(x+y)(x+3)$ loses a $y$ in the second bracket; expanding it will not give the original expression."
       }
      ],
      "tip": {
       "zh": "先看末項係數決定兩個常數項同號或異號，再核對中間項。這裡 $+3y^{2}$ 要同號，而 $+4xy$ 對應兩個加號。",
       "en": "Use the constant coefficient to decide whether the constant terms have matching or opposite signs, then check the middle. Here $+3y^{2}$ needs matching signs and $+4xy$ selects two plus signs."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代 $x=1$、$y=2$",
         "en": "Check: substitute $x=1$, $y=2$"
        },
        "zh": "代值驗算：取 $x=1$、$y=2$。原式 $=1+4(1)(2)+3(2)^{2}=1+8+12=21$；答案 $(x+y)(x+3y)=(1+2)(1+6)=21$，兩邊相同。拆到不肯定時，代一組小數字就可以立刻確認。 數值不相同可排除錯誤；一次代值相同不能證明恆等，仍應展開逐項核對。",
        "en": "Substitute values: take $x=1$, $y=2$. The original is $1+4(1)(2)+3(2)^{2}=1+8+12=21$; the answer gives $(x+y)(x+3y)=(1+2)(1+6)=21$ — the same. One small substitution confirms a doubtful split at once. A numerical mismatch disproves the identity, but one match is not a proof; expand to compare every term."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
       "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "(x-y)(x+3y)",
        "(x+y)(x-3y)",
        "(x+y)(x+3y)",
        "(x+3y)^{2}"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws01-s03",
     "type": "long",
     "kind": "short",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1-S3",
     "source": "WS01 · Basic Skills Q9(b)",
     "stem": {
      "en": "Factorize $6m^{2}-11mn-10n^{2}$.",
      "zh": "因式分解 $6m^{2}-11mn-10n^{2}$."
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 拆首項 $6m^{2}$",
         "en": "Step 1 · Split the leading term $6m^{2}$"
        },
        "math": "6m^{2}\\Rightarrow\\hl{2m\\cdot 3m}",
        "zh": "首項 $6m^{2}$ 有兩個拆法（$m\\cdot 6m$ 或 $2m\\cdot 3m$）。先試 $2m\\cdot 3m$，因為係數小、組合較少，容易篩。",
        "en": "The leading term $6m^{2}$ can split two ways ($m\\cdot 6m$ or $2m\\cdot 3m$). Try $2m\\cdot 3m$ first — the coefficients are smaller and there are fewer cases to test.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 末項負數 → 兩個符號相反，再交叉相乘",
         "en": "Step 2 · Negative last term means opposite signs, then cross-check"
        },
        "math": "2m\\cdot(\\hlw{+2n})+(\\hlw{-5n})\\cdot 3m=4mn-15mn=\\hl{-11mn}",
        "zh": "$-10n^{2}$ 拆成 $(-5n)\\cdot(+2n)$，因為末項是負數，兩個括號的符號一定相反。交叉相乘：$4mn-15mn=-11mn$，與題目的 $-11mn$ 相符。",
        "en": "Split $-10n^{2}$ as $(-5n)\\cdot(+2n)$: the last term is negative, so the two brackets must carry opposite signs. Cross-check: $4mn-15mn=-11mn$, matching the given $-11mn$."
       },
       {
        "title": {
         "zh": "第 3 步 · 寫出答案",
         "en": "Step 3 · Write the answer"
        },
        "math": "6m^{2}-11mn-10n^{2}=\\hlg{(2m-5n)(3m+2n)}",
        "zh": "因式次序可以交換，寫成 $(3m+2n)(2m-5n)$ 也相同。只把其中一個因式改成相反數，則整個乘積會變號。",
        "en": "The factors may be reordered: $(3m+2n)(2m-5n)$ is the same product. Negating only one factor changes the sign of the product.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "符號都寫成加",
        "labelEn": "Both brackets positive",
        "zh": "寫成 $(2m+5n)(3m+2n)$：末項會變成 $+10n^{2}$，但題目是 $-10n^{2}$，所以其中一個括號必須是減。",
        "en": "Writing $(2m+5n)(3m+2n)$ gives $+10n^{2}$ at the end, but the question has $-10n^{2}$ — one bracket must be negative."
       },
       {
        "label": "首項拆成 $m\\cdot 6m$ 硬做",
        "labelEn": "Forcing $m\\cdot 6m$",
        "zh": "若選 $m$ 與 $6m$，沒有整數常數配對能同時得到末項 $-10n^{2}$ 與中間項 $-11mn$。改試 $2m$ 與 $3m$。",
        "en": "With leading factors $m$ and $6m$, no integer pairing matches both $-10n^{2}$ and $-11mn$. Try $2m$ and $3m$ instead."
       }
      ],
      "tip": {
       "zh": "十字相乘三步：拆首項 → 看末項定符號（正同負異）→ 交叉相乘驗中間項。次序固定的話，卷一只花一兩分鐘。",
       "en": "Cross-method in three moves: split the first term, use the last term to fix the signs (same when positive, opposite when negative), then cross-check the middle term."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代 $m=1$、$n=1$",
         "en": "Check: substitute $m=1$, $n=1$"
        },
        "zh": "代值驗算：取 $m=1$、$n=1$。原式 $=6-11-10=-15$；答案 $(2m-5n)(3m+2n)=(2-5)(3+2)=(-3)(5)=-15$。係數較大的十字相乘最容易配錯符號，代一組小數字是最便宜的保險。 數值不相同可排除錯誤；一次代值相同不能證明恆等，仍應展開逐項核對。",
        "en": "Substitute values: $m=1$, $n=1$. The original is $6-11-10=-15$; the answer gives $(2m-5n)(3m+2n)=(2-5)(3+2)=(-3)(5)=-15$. Cross-method with larger coefficients is where sign pairs go wrong, so one substitution is the cheapest insurance. A numerical mismatch disproves the identity, but one match is not a proof; expand to compare every term."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
       "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "(2m+5n)(3m+2n)",
        "(2m-5n)(3m-2n)",
        "(2m-5n)(3m+2n)",
        "(2m+5n)(3m-2n)"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws01-s04",
     "type": "long",
     "kind": "short",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 2,
     "code": "WS1-S4",
     "source": "WS01 · Basic Skills Q10(a)",
     "stem": {
      "en": "Factorize $2m^{2}n+3mn-14n$ completely.",
      "zh": "因式分解 $2m^{2}n+3mn-14n$（要分得徹底）。"
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 三項都有 $n$：先抽公因式",
         "en": "Step 1 · Every term has $n$: take out the common factor"
        },
        "math": "2m^{2}n+3mn-14n=\\hl{n}(2m^{2}+3m-14)",
        "zh": "三項都含 $n$，先抽走它。抽走之後括號內只剩 $m$，變回「純數字係數」的十字相乘，處理起來容易得多。",
        "en": "All three terms contain $n$, so take it out first. Inside the bracket only $m$ is left, which turns the problem back into a cross-method with plain number coefficients.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 括號內十字相乘",
         "en": "Step 2 · Cross-method inside the bracket"
        },
        "math": "2m^{2}+3m-14=\\hl{(2m+7)(m-2)}",
        "zh": "$2m^{2}$ 拆 $2m\\cdot m$、$-14$ 拆 $(+7)\\cdot(-2)$；交叉相乘 $(2m)(-2)+(7)(m)=-4m+7m=3m$，與 $+3m$ 相符。",
        "en": "Split $2m^{2}$ as $2m\\cdot m$ and $-14$ as $(+7)\\cdot(-2)$; cross-checking gives $(2m)(-2)+(7)(m)=-4m+7m=3m$, matching $+3m$."
       },
       {
        "title": {
         "zh": "第 3 步 · 把 $n$ 乘回去",
         "en": "Step 3 · Put the $n$ back"
        },
        "math": "2m^{2}n+3mn-14n=\\hlg{n(2m+7)(m-2)}",
        "zh": "答案要保留外面的 $n$：$n(2m+7)(m-2)$。漏了 $n$ 就是漏了一個因式。",
        "en": "Keep the $n$ in the answer: $n(2m+7)(m-2)$. Dropping it means dropping a factor.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "忘記抽公因式 $n$",
        "labelEn": "Forgetting the common factor $n$",
        "zh": "直接對 $2m^{2}n+3mn-14n$ 做十字相乘：多一個字母，很容易配錯，而且答案一樣要抽 $n$。",
        "en": "Running the cross-method on $2m^{2}n+3mn-14n$ directly drags an extra letter into every trial case — and the final answer still needs the $n$."
       },
       {
        "label": "抽完就停手",
        "labelEn": "Stopping after factoring out",
        "zh": "只寫 $n(2m^{2}+3m-14)$：題目要求 completely，括號內要再分解成 $(2m+7)(m-2)$。",
        "en": "Writing only $n(2m^{2}+3m-14)$: the question says 'completely', so the bracket still has to become $(2m+7)(m-2)$."
       }
      ],
      "tip": {
       "zh": "先提出所有項共有的 $n$，再分解括號內的二次三項式。最後檢查 $n$ 有沒有保留。",
       "en": "Take out the shared $n$, factor the remaining trinomial, then check that $n$ is still present."
      },
      "alt": [
       {
        "name": {
         "zh": "代值排錯：用 $n=2$ 檢查有沒有漏因式",
         "en": "Numerical error check: use $n=2$ to spot a missing factor"
        },
        "zh": "取 $m=1$、$n=2$，原式為 $4+6-28=-18$；答案為 $2(9)(-1)=-18$。若漏了外面的 $n$，只會得到 $-9$。$n=1$ 無法測出這個錯誤；一次代值相同仍不能證明恆等，最後應展開逐項核對。",
        "en": "With $m=1$, $n=2$, the original is $4+6-28=-18$ and the answer is $2(9)(-1)=-18$. Dropping the outside $n$ gives only $-9$. Using $n=1$ would hide this error. A single numerical match is not a proof; finish by expanding term by term."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
       "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "n(2m-7)(m-2)",
        "n(2m+7)(m+2)",
        "(2m+7)(m-2)",
        "n(2m+7)(m-2)"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws01-s05",
     "type": "long",
     "kind": "short",
     "topic": "ws01",
     "unit": 4,
     "subtopic": "factorization",
     "difficulty": 3,
     "code": "WS1-S5",
     "source": "WS01 · Basic Skills Q10(b)",
     "stem": {
      "en": "Factorize $-4x^{2}+15xy-9y^{2}$ completely.",
      "zh": "因式分解 $-4x^{2}+15xy-9y^{2}$（要分得徹底）。"
     },
     "marks": 2,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 首項負數：整條抽 $-1$",
         "en": "Step 1 · Negative leading term: take $-1$ out"
        },
        "math": "\\hlw{-}4x^{2}+15xy-9y^{2}=\\hlw{-}(\\xf{4x^{2}}\\xf{-15xy}\\xf{+9y^{2}})",
        "zh": "抽 $-1$ 是「每一項都變號」：$-4x^{2}\\to 4x^{2}$、$+15xy\\to -15xy$、$-9y^{2}\\to +9y^{2}$。三個符號都要反，只改一項就錯。",
        "en": "Taking out $-1$ flips every sign: $-4x^{2}\\to 4x^{2}$, $+15xy\\to -15xy$ and $-9y^{2}\\to +9y^{2}$. All three change — changing only one is wrong.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 括號內十字相乘",
         "en": "Step 2 · Cross-method inside the bracket"
        },
        "math": "4x^{2}-15xy+9y^{2}=\\hl{(4x-3y)(x-3y)}",
        "zh": "$4x^{2}$ 拆 $4x\\cdot x$、$9y^{2}$ 拆 $(-3y)\\cdot(-3y)$；交叉相乘 $(4x)(-3y)+(-3y)(x)=-12xy-3xy=-15xy$，與 $-15xy$ 相符。",
        "en": "Split $4x^{2}$ as $4x\\cdot x$ and $9y^{2}$ as $(-3y)\\cdot(-3y)$; the cross products $(4x)(-3y)+(-3y)(x)=-12xy-3xy=-15xy$ match the given $-15xy$."
       },
       {
        "title": {
         "zh": "第 3 步 · 寫答案，負號要留住",
         "en": "Step 3 · Write the answer and keep the minus"
        },
        "math": "-4x^{2}+15xy-9y^{2}=\\hlg{-(4x-3y)(x-3y)}",
        "zh": "可以保留外面的負號，也可把它乘進一個因式，例如 $(3y-4x)(x-3y)$。不要既保留外面的負號，又把一個因式變號。",
        "en": "Keep the leading minus, or absorb it into one factor, for example $(3y-4x)(x-3y)$. Do not keep the outside minus and also negate one factor.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "只改第一項的符號",
        "labelEn": "Only the first sign flipped",
        "zh": "寫成 $-(4x^{2}+15xy-9y^{2})$：抽 $-1$ 是三個符號一齊反，漏改一項展開就會多出／少了項。",
        "en": "Writing $-(4x^{2}+15xy-9y^{2})$: taking out $-1$ flips all three, and missing one makes the expansion wrong."
       },
       {
        "label": "忘了把負號乘回去",
        "labelEn": "Losing the minus at the end",
        "zh": "寫成 $(4x-3y)(x-3y)$：展開是 $+4x^{2}-15xy+9y^{2}$，與原式相差一個負號。",
        "en": "Writing $(4x-3y)(x-3y)$ expands to $+4x^{2}-15xy+9y^{2}$ — the original expression is that with a minus sign in front."
       }
      ],
      "tip": {
       "zh": "先提出 $-1$，在括號內做十字相乘，最後保留外面的負號。用展開檢查三項的係數。",
       "en": "Take out $-1$, factor the inner trinomial, then keep the leading minus. Check all three coefficients by expansion."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：展開對回原式",
         "en": "Check: expand back to the original"
        },
        "zh": "展開驗算：$(4x-3y)(x-3y)=4x^{2}-12xy-3xy+9y^{2}=4x^{2}-15xy+9y^{2}$，加上外面的負號就是 $-4x^{2}+15xy-9y^{2}$，與原式相同。負號留到最後才整組變號，最不易出錯。",
        "en": "Expand to check: $(4x-3y)(x-3y)=4x^{2}-12xy-3xy+9y^{2}=4x^{2}-15xy+9y^{2}$; with the leading minus this is $-4x^{2}+15xy-9y^{2}$, the original expression. Keep the minus until the very end and flip the whole bracket once."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
       "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "-(4x+3y)(x-3y)",
        "-(4x-3y)(x+3y)",
        "(4x-3y)(x-3y)",
        "-(4x-3y)(x-3y)"
       ],
       "answer": "D"
      }
     ]
    }
   ],
   "pages": [
    [
     {
      "id": "eph-ws01-w01",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1-W01",
      "source": "WS01 Basic Skills Q1(a)",
      "stem": {
       "text": "因式分解 (Factorize) $6m+12n$。",
       "zh": "因式分解 (Factorize) $6m+12n$。",
       "en": "Factorize $6m+12n$."
      },
      "options": {
       "A": "$6(m+12n)$",
       "B": "$6(m+2n)$",
       "C": "$3(2m+4n)$",
       "D": "$6m(1+2n)$"
      },
      "review": null,
      "practiceGoal": {
       "zh": "本題選擇已分解完成的形式：提出公因式後，括號內亦要檢查。",
       "en": "Choose the fully factorised form: take out common factors and check inside every bracket."
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 找係數的公因式",
          "en": "Step 1 · Find the common factor"
         },
         "math": "6m+12n=\\hl{6}(m)+6(2n)",
         "zh": "係數 $6$ 和 $12$ 的最大公因數是 $6$，所以每一項都先抽走 $6$。字母方面，$m$ 只在第一項有，$n$ 只在第二項有，所以沒有共同的字母可以抽。",
         "en": "The HCF of the coefficients 6 and 12 is 6, so take 6 out of every term. As for the letters, $m$ appears only in the first term and $n$ only in the second, so there is no common letter to take out."
        },
        {
         "title": {
          "zh": "第 2 步 · 寫成因式相乘",
          "en": "Step 2 · Write as a product"
         },
         "math": "=\\hlg{6(m+2n)}",
         "zh": "$6m$ 抽走 $6$ 剩 $m$，$12n$ 抽走 $6$ 剩 $2n$，合起來是 $6(m+2n)$。答案是 B。展開檢查：$6(m+2n)=6m+12n$，回到原式。",
         "en": "$6m$ leaves $m$ and $12n$ leaves $2n$ after taking out 6, giving $6(m+2n)$. The answer is B. Check by expanding: $6(m+2n)=6m+12n$, back to the original."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$6(m+12n)$ 是第二項忘記除以 $6$：$12n\\div 6=2n$，不是 $12n$。抽公因式時每一項都要除。",
         "en": "$6(m+12n)$ forgets to divide the second term by 6: $12n\\div 6=2n$, not $12n$. Every term must be divided when a common factor is taken out."
        },
        {
         "opt": "C",
         "zh": "$3(2m+4n)$ 只抽了 $3$，括號內的 $2m+4n$ 還有公因式 $2$，未徹底分解（題目要求 factorize completely）。",
         "en": "$3(2m+4n)$ only takes out 3, but $2m+4n$ still has the common factor 2 — the question says factorize completely."
        },
        {
         "opt": "D",
         "zh": "$6m(1+2n)$ 抽了 $6m$，但第二項 $12n$ 根本沒有 $m$，所以 $m$ 不是公因式。展開會變成 $6m+12mn$。",
         "en": "$6m(1+2n)$ takes out $6m$, but the second term $12n$ contains no $m$ at all, so $m$ is not a common factor. Expanding gives $6m+12mn$."
        }
       ],
       "tip": {
        "zh": "先抽係數的最大公因數，再看字母是否各項都有。抽完把答案展開檢查，是最穩的習慣。",
        "en": "Take out the HCF of the coefficients first, then check which letters appear in every term. Expanding your answer to check is the safest habit."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-w02",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1-W02",
      "source": "WS01 Basic Skills Q1(b)",
      "stem": {
       "text": "因式分解 (Factorize) $-r^{3}-r^{2}s$。",
       "zh": "因式分解 (Factorize) $-r^{3}-r^{2}s$。",
       "en": "Factorize $-r^{3}-r^{2}s$."
      },
      "options": {
       "A": "$r^{2}(r+s)$",
       "B": "$-r^{2}(r-s)$",
       "C": "$-r^{2}(r+s)$",
       "D": "$-r(r^{2}+rs)$"
      },
      "review": null,
      "practiceGoal": {
       "zh": "本題選擇已分解完成的形式：提出公因式後，括號內亦要檢查。",
       "en": "Choose the fully factorised form: take out common factors and check inside every bracket."
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 負號也一起抽",
          "en": "Step 1 · Take out the minus sign too"
         },
         "math": "-r^{3}-r^{2}s=-r^{2}\\cdot r-r^{2}\\cdot s",
         "zh": "兩項都含 $r^{2}$。這裡提出 $-r^{2}$，因為 $(-r^{2})r=-r^{3}$，而 $(-r^{2})s=-r^{2}s$。",
         "en": "Both terms contain $r^{2}$. Take out $-r^{2}$ here: $(-r^{2})r=-r^{3}$ and $(-r^{2})s=-r^{2}s$."
        },
        {
         "title": {
          "zh": "第 2 步 · 寫成因式相乘",
          "en": "Step 2 · Write as a product"
         },
         "math": "=\\hlg{-r^{2}(r+s)}",
         "zh": "抽走 $-r^{2}$ 之後括號內是 $r+s$（兩項都變成正）。答案是 C。展開檢查：$-r^{2}(r+s)=-r^{3}-r^{2}s$，與原式相同。",
         "en": "After taking out $-r^{2}$ the bracket is $r+s$ (both terms become positive). The answer is C. Check: $-r^{2}(r+s)=-r^{3}-r^{2}s$, the same as the original."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$r^{2}(r+s)$ 漏了負號：原式兩項都是負，抽出來後外面的負號不可以消失。",
         "en": "$r^{2}(r+s)$ loses the minus sign: both original terms are negative, so the minus outside cannot disappear."
        },
        {
         "opt": "B",
         "zh": "$-r^{2}(r-s)$ 是抽負號時括號內沒有變號。展開會變成 $-r^{3}+r^{2}s$，第二項符號與原式不符。",
         "en": "$-r^{2}(r-s)$ does not change the signs inside when the minus is taken out; expanding gives $-r^{3}+r^{2}s$, whose second term has the wrong sign."
        },
        {
         "opt": "D",
         "zh": "$-r(r^{2}+rs)$ 只抽了 $-r$，括號內的 $r^{2}+rs$ 還有公因式 $r$，未徹底分解。",
         "en": "$-r(r^{2}+rs)$ only takes out $-r$, but $r^{2}+rs$ still has the common factor $r$, so it is not fully factorized."
        }
       ],
       "tip": {
        "zh": "本題兩項的係數都是負數，提出負公因式後，括號內兩項都變成正係數。混合符號的題目要逐項檢查。",
        "en": "Both coefficients are negative here. A negative common factor leaves positive coefficients inside; for mixed signs, check each term separately."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-w03",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1-W03",
      "source": "WS01 Basic Skills Q5(a)",
      "stem": {
       "text": "因式分解 (Factorize) $2m^{2}-32$。",
       "zh": "因式分解 (Factorize) $2m^{2}-32$。",
       "en": "Factorize $2m^{2}-32$."
      },
      "options": {
       "A": "$2(m+4)(m-4)$",
       "B": "$2(m^{2}-16)$",
       "C": "$2(m-4)^{2}$",
       "D": "$(2m+8)(m-4)$"
      },
      "review": null,
      "practiceGoal": {
       "zh": "本題選擇已分解完成的形式：提出公因式後，括號內亦要檢查。",
       "en": "Choose the fully factorised form: take out common factors and check inside every bracket."
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先抽公因式",
          "en": "Step 1 · Take out the common factor"
         },
         "math": "2m^{2}-32=\\hl{2}(\\hlw{m^{2}-16})",
         "zh": "兩項都有公因式 $2$，先抽走，括號內變成 $m^{2}-16$。抽完不要停，還要看括號內能不能再分。",
         "en": "Both terms have the common factor 2; take it out and the bracket becomes $m^{2}-16$. Do not stop there — always look at the bracket again."
        },
        {
         "title": {
          "zh": "第 2 步 · 括號內是平方差",
          "en": "Step 2 · Difference of two squares"
         },
         "math": "=\\hlg{2(m+4)(m-4)}",
         "zh": "$m^{2}-16=m^{2}-4^{2}$，是「平方減平方」，用 $a^{2}-b^{2}=(a+b)(a-b)$ 得 $(m+4)(m-4)$。答案是 A。",
         "en": "$m^{2}-16=m^{2}-4^{2}$ is a difference of two squares; by $a^{2}-b^{2}=(a+b)(a-b)$ it becomes $(m+4)(m-4)$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$2(m^{2}-16)$ 只抽了 $2$ 就停手，括號內的 $m^{2}-16$ 還可以再分——這是最常見的失分位（題目說 factorize completely）。",
         "en": "$2(m^{2}-16)$ stops after taking out 2, but $m^{2}-16$ can still be factorized — the most common loss of marks (the question says factorize completely)."
        },
        {
         "opt": "C",
         "zh": "$2(m-4)^{2}$ 是完全平方，展開是 $2(m^{2}-8m+16)$，會有中間項 $-8m$，原式並沒有。",
         "en": "$2(m-4)^{2}$ is a perfect square; expanding gives $2(m^{2}-8m+16)$ with a middle term $-8m$ that the original does not have."
        },
        {
         "opt": "D",
         "zh": "$(2m+8)(m-4)$ 展開雖然等於 $2m^{2}-32$，但第一個括號 $(2m+8)$ 仍有公因式 $2$ 未抽走，未算「徹底分解」（題目要求 factorize completely）。",
         "en": "$(2m+8)(m-4)$ does expand to $2m^{2}-32$, but the first bracket still has the common factor 2, so it is not factorized completely."
        }
       ],
       "tip": {
        "zh": "抽出公因式後，再檢查括號內能否用平方差或完全平方繼續分解。",
        "en": "After taking out a common factor, check whether the bracket can be factored further using a difference of squares or a perfect square."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開對回，順便刪選項",
          "en": "Check: expand back, and delete by inspection"
         },
         "zh": "展開驗算：$2(m+4)(m-4)=2(m^{2}-16)=2m^{2}-32$，對回原式。想快一點可以先看選項：B 的括號未分完、D 的第一個括號仍有公因式 $2$，凡未「分得徹底」的都可以先刪。",
         "en": "Expand to check: $2(m+4)(m-4)=2(m^{2}-16)=2m^{2}-32$, back to the original. For speed, scan the options first: B leaves the bracket unfactorised and D still has a common factor $2$ in the first bracket — anything not factorised completely can be deleted at once."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-w04",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1-W04",
      "source": "自擬 · 平方差（係數為平方數）",
      "stem": {
       "text": "因式分解 (Factorize) $9x^{2}-25y^{2}$。",
       "zh": "因式分解 (Factorize) $9x^{2}-25y^{2}$。",
       "en": "Factorize $9x^{2}-25y^{2}$."
      },
      "options": {
       "A": "$(3x-5y)^{2}$",
       "B": "$(9x+5y)(x-5y)$",
       "C": "$(3x+5y)(3x-5y)$",
       "D": "$(3x-25y)(3x+y)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 改寫成平方減平方 (Recognise Difference of Two Squares)",
          "en": "Step 1 · Difference of Squares"
         },
         "math": "9x^{2}-25y^{2}=\\hl{(3x)^{2}}-\\hl{(5y)^{2}}",
         "zh": "把兩項分別改寫為完全平方：$9x^{2}=(3x)^{2}$，$25y^{2}=(5y)^{2}$。確認形態符合平方差 (Difference of Two Squares) $a^{2}-b^{2}$。",
         "en": "Rewrite each term as a perfect square: $9x^{2}=(3x)^{2}$ and $25y^{2}=(5y)^{2}$. This has the form $a^{2}-b^{2}$ — the difference of two squares."
        },
        {
         "title": {
          "zh": "第 2 步 · 套用恆等式 (Apply Identity)",
          "en": "Step 2 · Factorize"
         },
         "math": "=\\hlg{(3x+5y)(3x-5y)}",
         "zh": "套用恆等式 $a^{2}-b^{2}=(a+b)(a-b)$，其中 $a=3x$ 及 $b=5y$。因此正確答案為 C。",
         "en": "Apply the identity $a^{2}-b^{2}=(a+b)(a-b)$ with $a=3x$ and $b=5y$, so the answer is C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(3x-5y)^{2}$ 為完全平方 (Perfect Square)，展開後會產生中間項 $-30xy$，與題目的兩項不符。",
         "en": "$(3x-5y)^{2}$ is a perfect square; expanding it produces a middle term $-30xy$, which the question does not have."
        },
        {
         "opt": "B",
         "zh": "$(9x+5y)(x-5y)$ 展開得 $9x^{2}-40xy-25y^{2}$，是因為沒有把首項係數 $9$ 取平方根。",
         "en": "$(9x+5y)(x-5y)$ expands to $9x^{2}-40xy-25y^{2}$ because the coefficient 9 was not square-rooted."
        },
        {
         "opt": "D",
         "zh": "$(3x-25y)(3x+y)$ 沒有把末項係數 $25$ 取平方根（$25$ 的平方根是 $5$，不是 $25$）。",
         "en": "$(3x-25y)(3x+y)$ does not square-root the last coefficient (the square root of 25 is 5, not 25)."
        }
       ],
       "tip": {
        "zh": "見到兩項而且中間是減號，先檢查兩項的係數是否完全平方數（例如 $1, 4, 9, 16, 25$）。",
        "en": "When there are two terms with a minus between them, first check whether the coefficients are perfect squares (1, 4, 9, 16, 25, ...)."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：平方差的「一加一減」形狀",
          "en": "Check: the one-plus-one-minus shape"
         },
         "zh": "快速檢查：平方差的兩個括號一定「一加一減」，其餘完全相同，所以答案必須長成 $(3x+5y)(3x-5y)$。A 是完全平方；B、D 展開後會多出 $xy$ 項（原式沒有中間項），三個都可以即時刪去。",
         "en": "Quick check: the two brackets of a difference of two squares are always “one plus, one minus” with everything else identical, so the answer must look like $(3x+5y)(3x-5y)$. A is a perfect square, and B and D gain an $xy$ term the original does not have — all three can be deleted on sight."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-w05",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-W05",
      "source": "自擬 · 平方差（括號減常數）",
      "stem": {
       "text": "因式分解 (Factorize) $(x+3)^{2}-16$。",
       "zh": "因式分解 (Factorize) $(x+3)^{2}-16$。",
       "en": "Factorize $(x+3)^{2}-16$."
      },
      "options": {
       "A": "$(x+7)(x-1)$",
       "B": "$(x-1)^{2}$",
       "C": "$(x+7)(x-7)$",
       "D": "$(x-13)(x+19)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 識別括號平方減數字平方",
          "en": "Step 1 · Spot the Pattern"
         },
         "math": "(x+3)^{2}-16=\\hl{(x+3)^{2}}-\\hl{4^{2}}",
         "zh": "整題是「一組式子的平方」減去「數字的平方」。這裡 $a=x+3$、$b=4$。不要急著把 $(x+3)^{2}$ 展開，直接套用平方差會快很多。",
         "en": "This is (a bracket)$^{2}$ minus (a number)$^{2}$, with $a=x+3$ and $b=4$. Do not expand $(x+3)^{2}$ — using the difference of squares directly is far faster."
        },
        {
         "title": {
          "zh": "第 2 步 · 套用平方差並合併同類項 (Simplify)",
          "en": "Step 2 · Apply Identity and Simplify"
         },
         "math": "=[(x+3)+4][(x+3)\\hlw{-}4]\n=\\hlg{(x+7)(x-1)}",
         "zh": "第一個括號相加得 $x+3+4=x+7$；第二個括號相減得 $x+3-4=x-1$。答案是 A。",
         "en": "Adding gives $x+3+4=x+7$ in the first bracket; subtracting gives $x+3-4=x-1$ in the second. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(x-1)^{2}$ 是漏掉了「加」的那一個括號 $(x+3+4)$。",
         "en": "$(x-1)^{2}$ drops the “plus” bracket $(x+3+4)$."
        },
        {
         "opt": "C",
         "zh": "$(x+7)(x-7)$ 是把第二個括號誤算成 $x-3-4$（忘記減號後的括號要整組包住再變號）。",
         "en": "$(x+7)(x-7)$ mis-computes the second bracket as $x-3-4$ — remember the bracket after a minus sign must be kept whole and every term changed."
        },
        {
         "opt": "D",
         "zh": "$(x-13)(x+19)$ 是展開時計錯，或隨意拼湊數字。",
         "en": "$(x-13)(x+19)$ comes from a calculating slip or from guessing numbers."
        }
       ],
       "tip": {
        "zh": "括號外的常數若是平方數（例如 $16=4^{2}$），就可以直接用 $[( )+b][( )-b]$ 迅速化簡。",
        "en": "If the constant outside the bracket is a perfect square (e.g. $16=4^{2}$), you can go straight to $[( )+b][( )-b]$."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q07",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1-Q07",
      "source": "WS01 Basic Skills Q5(b)",
      "stem": {
       "text": "因式分解 (Factorize) $(5c+d)^{2}-(3c-2)^{2}$。",
       "zh": "因式分解 (Factorize) $(5c+d)^{2}-(3c-2)^{2}$。",
       "en": "Factorize $(5c+d)^{2}-(3c-2)^{2}$."
      },
      "options": {
       "A": "$(8c+d-2)(2c+d+2)$",
       "B": "$(8c+d+2)(2c+d-2)$",
       "C": "$(2c+d-2)(8c+d-2)$",
       "D": "$(8c+d-2)^{2}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認出平方差",
          "en": "Step 1 · Recognise the pattern"
         },
         "math": "(5c+d)^{2}-(3c-2)^{2}",
         "zh": "整題是「平方減平方」：$(5c+d)^{2}$ 減 $(3c-2)^{2}$。直接用平方差恆等式，不要展開那兩個平方（展開會多走很多步）。",
         "en": "The whole expression is square minus square: $(5c+d)^{2}$ minus $(3c-2)^{2}$. Use the difference of two squares straight away — expanding those squares costs many extra steps."
        },
        {
         "title": {
          "zh": "第 2 步 · 代入 $a$ 與 $b$",
          "en": "Step 2 · Substitute"
         },
         "math": "=[(5c+d)+(3c-2)]\n\\times[(5c+d)\\hlw{-}(3c-2)]",
         "zh": "這裡 $a=5c+d$、$b=3c-2$。平方差的兩個括號是「一加一減」。減號那個一定要加括號，因為 $-(3c-2)$ 的 $-(-2)$ 會變成 $+2$。",
         "en": "Here $a=5c+d$ and $b=3c-2$. One bracket adds and one subtracts. The subtracting bracket must be bracketed, because $-(-2)$ becomes $+2$."
        },
        {
         "title": {
          "zh": "第 3 步 · 化簡",
          "en": "Step 3 · Simplify"
         },
         "math": "=\\hlg{(8c+d-2)(2c+d\\xf{+2})}",
         "zh": "第一個括號：$5c+d+3c-2=8c+d-2$；第二個括號：$5c+d-3c+2=2c+d+2$。答案是 A。",
         "en": "First bracket: $5c+d+3c-2=8c+d-2$; second bracket: $5c+d-3c+2=2c+d+2$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(8c+d+2)(2c+d-2)$ 源於減號後漏加小括號：計算 $(5c+d)-(3c-2)$ 時誤寫成 $5c+d-3c-2=2c+d-2$。切記減號後的整個因式要用小括號包住，再逐項變號。",
         "en": "$(8c+d+2)(2c+d-2)$ comes from dropping the brackets after the minus sign: $(5c+d)-(3c-2)$ is mis-evaluated as $5c+d-3c-2=2c+d-2$. Always bracket the whole factor after a minus sign and change every sign."
        },
        {
         "opt": "C",
         "zh": "$(2c+d-2)(8c+d-2)$ 兩個括號的 $c$ 係數與常數配錯，展開後不會等於原式。",
         "en": "$(2c+d-2)(8c+d-2)$ mismatches the $c$ coefficients and the constants; expanded it is not the original expression."
        },
        {
         "opt": "D",
         "zh": "這個選項把兩個不同的因式寫成同一個因式的平方。先保留 $U+V$ 與 $U-V$，再分別化簡。",
         "en": "This option replaces two different factors with one repeated factor. Keep $U+V$ and $U-V$ separate before simplifying."
        }
       ],
       "tip": {
        "zh": "平方差先寫成 $(U+V)(U-V)$。當 $U$、$V$ 本身含多項，化簡後的兩個括號未必只差一個符號。",
        "en": "Start with $(U+V)(U-V)$. If $U$ and $V$ contain several terms, the simplified brackets need not differ in only one sign."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q01",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q01",
      "source": "WS01 Basic Skills Q2(a)",
      "stem": {
       "text": "因式分解 (Factorize) $b^{2}(a-1)+(a-1)(a+3)$。",
       "zh": "因式分解 (Factorize) $b^{2}(a-1)+(a-1)(a+3)$。",
       "en": "Factorize $b^{2}(a-1)+(a-1)(a+3)$."
      },
      "options": {
       "A": "$(a-1)(b^{2}+a-3)$",
       "B": "$(a+1)(b^{2}+a+3)$",
       "C": "$(a-1)(b^{2}-a-3)$",
       "D": "$(a-1)(b^{2}+a+3)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 看見相同括號",
          "en": "Step 1 · Spot the common bracket"
         },
         "math": "b^{2}(a-1)+(a-1)(a+3)=\\hl{(a-1)}[b^{2}+(a+3)]",
         "zh": "兩項都有同一個括號 $(a-1)$，它本身就是公因式，直接抽走，剩下的部分加進另一個括號。",
         "en": "Both terms contain the same bracket $(a-1)$, so that bracket itself is the common factor: take it out and put what is left into another bracket."
        },
        {
         "title": {
          "zh": "第 2 步 · 整理括號",
          "en": "Step 2 · Tidy the bracket"
         },
         "math": "=\\hlg{(a-1)(b^{2}+a+3)}",
         "zh": "剩下的是 $b^{2}$ 與 $(a+3)$，加起來得 $b^{2}+a+3$。答案是 D。這題不用展開，看見相同括號就是「抽公因式」。",
         "en": "The remaining terms are $b^{2}$ and $(a+3)$, giving $b^{2}+a+3$. The answer is D. This expression can be factored directly without expanding the repeated bracket."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(a-1)(b^{2}+a-3)$ 是抄錯符號：題目第二個括號是 $(a+3)$，正號要保留。",
         "en": "$(a-1)(b^{2}+a-3)$ copies a sign wrongly: the second bracket in the question is $(a+3)$, so the plus must stay."
        },
        {
         "opt": "B",
         "zh": "$(a+1)(b^{2}+a+3)$ 把 $(a-1)$ 抄成 $(a+1)$，公因式抄錯整題就錯。",
         "en": "$(a+1)(b^{2}+a+3)$ misreads $(a-1)$ as $(a+1)$ — a wrong common factor makes the whole answer wrong."
        },
        {
         "opt": "C",
         "zh": "$(a-1)(b^{2}-a-3)$ 把第二個括號全部變號，但題目那部分是「加進去」，不需要變號。",
         "en": "$(a-1)(b^{2}-a-3)$ changes the sign of every term in the second bracket, but that part is being added, so no sign change is needed."
        }
       ],
       "tip": {
        "zh": "見到兩項有「一模一樣的括號」，直接把那括號當公因式抽走，不必先展開。",
        "en": "When two terms share an identical bracket, take that bracket out as the common factor instead of expanding."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q02",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q02",
      "source": "WS01 Basic Skills Q2(b)",
      "stem": {
       "text": "因式分解 (Factorize) $(x-2y)^{2}-(2y-x)$。",
       "zh": "因式分解 (Factorize) $(x-2y)^{2}-(2y-x)$。",
       "en": "Factorize $(x-2y)^{2}-(2y-x)$."
      },
      "options": {
       "A": "$(x-2y)(x-2y-1)$",
       "B": "$(x-2y)(x-2y+1)$",
       "C": "$(x-2y)^{2}(2y-x)$",
       "D": "$(x+2y)(x-2y+1)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 處理次序倒轉的括號",
          "en": "Step 1 · Handle the reversed bracket"
         },
         "math": "(x-2y)^{2}\\hlw{-}(\\hl{2y-x})=(x-2y)^{2}\\hlw{+}(\\xf{x}\\xf{-2y})",
         "zh": "關鍵：$2y-x=-(x-2y)$。所以「減去 $(2y-x)$」等於「加上 $(x-2y)$」。括號內次序倒轉要變號，要連同整組負號一起處理。",
         "en": "Key idea: $2y-x=-(x-2y)$. So “minus $(2y-x)$” is the same as “plus $(x-2y)$”. Reversing the order inside a bracket flips its sign — a favourite exam trap."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽共同括號",
          "en": "Step 2 · Take out the common bracket"
         },
         "math": "=\\hlg{(x-2y)(x-2y+1)}",
         "zh": "兩項都有 $(x-2y)$：第一項抽走後剩 $(x-2y)$，第二項抽走後剩 $1$，所以是 $(x-2y)(x-2y+1)$。答案是 B。",
         "en": "Both terms contain $(x-2y)$: taking it out leaves $(x-2y)$ from the first term and $1$ from the second, so the answer is $(x-2y)(x-2y+1)$ — that is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項把減去 $(2y-x)$ 當成減去 $(x-2y)$。展開後，一次項的符號會與原式不同。",
         "en": "This option treats subtracting $(2y-x)$ as subtracting $(x-2y)$. The linear terms then have the wrong signs."
        },
        {
         "opt": "C",
         "zh": "$(x-2y)^{2}(2y-x)$ 只是把兩項相乘，完全沒有做因式分解。",
         "en": "$(x-2y)^{2}(2y-x)$ just multiplies the two terms; no factorisation has been done at all."
        },
        {
         "opt": "D",
         "zh": "$(x+2y)(x-2y+1)$ 把第一個括號抄成 $(x+2y)$，與原式的 $(x-2y)$ 不符。",
         "en": "$(x+2y)(x-2y+1)$ copies the first bracket as $(x+2y)$, which does not match $(x-2y)$."
        }
       ],
       "tip": {
        "zh": "見到 $2y-x$ 與 $x-2y$ 這對「次序倒轉」的括號，記住 $2y-x=-(x-2y)$，變號後就能分組。",
        "en": "When you see $2y-x$ next to $x-2y$, remember $2y-x=-(x-2y)$; after flipping the sign you can group."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代 $x=1$、$y=2$",
          "en": "Check: substitute $x=1$, $y=2$"
         },
         "zh": "代值驗算：取 $x=1$、$y=2$。原式 $=(1-4)^{2}-(4-1)=9-3=6$；答案 $(x-2y)(x-2y+1)=(-3)(-2)=6$。其餘選項分別得 $12$、$27$、$-10$，全部不符 —— 次序倒轉的題目做完，代一組值是最後保險。 數值不相同可排除錯誤；一次代值相同不能證明恆等，仍應展開逐項核對。",
         "en": "Substitute values: $x=1$, $y=2$. The original is $(1-4)^{2}-(4-1)=9-3=6$; the answer gives $(x-2y)(x-2y+1)=(-3)(-2)=6$. The other options give $12$, $27$ and $-10$. After a reversed-order question, one substitution is the final safety net. A numerical mismatch disproves the identity, but one match is not a proof; expand to compare every term."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q03",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q03",
      "source": "WS01 Basic Skills Q3(a)",
      "stem": {
       "text": "因式分解 (Factorize) $cd-4d+3c-12$。",
       "zh": "因式分解 (Factorize) $cd-4d+3c-12$。",
       "en": "Factorize $cd-4d+3c-12$."
      },
      "options": {
       "A": "$(c-4)(d+3)$",
       "B": "$(c+4)(d-3)$",
       "C": "$(c-4)(d-3)$",
       "D": "$(c+3)(d-4)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 四項分兩組",
          "en": "Step 1 · Group into two pairs"
         },
         "math": "cd-4d+3c-12=d(c-4)+3\\hl{(c-4)}",
         "zh": "前兩項 $cd-4d$ 抽 $d$ 得 $d(c-4)$；後兩項 $3c-12$ 抽 $3$ 得 $3(c-4)$。分組的目標是讓兩個括號一模一樣。",
         "en": "From the first pair $cd-4d$ take out $d$ to get $d(c-4)$; from the last pair $3c-12$ take out 3 to get $3(c-4)$. The aim of grouping is to make the two brackets identical."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽共同括號",
          "en": "Step 2 · Take out the common bracket"
         },
         "math": "=\\hlg{(c-4)(d+3)}",
         "zh": "$(c-4)$ 是兩組的共同因式，抽走後剩下 $(d+3)$。答案是 A。展開檢查：$(c-4)(d+3)=cd+3c-4d-12$，與原式相同。",
         "en": "$(c-4)$ is common to both groups; taking it out leaves $(d+3)$. The answer is A. Check by expanding: $(c-4)(d+3)=cd+3c-4d-12$, the same as the original."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(c+4)(d-3)$ 兩組都錯：原式是 $-4d$ 與 $+3c$，符號應該是 $(c-4)$ 與 $+3$。",
         "en": "$(c+4)(d-3)$ gets both groups wrong: the question has $-4d$ and $+3c$, so the brackets must be $(c-4)$ and $+3$."
        },
        {
         "opt": "C",
         "zh": "第二組是 $+3(c-4)$，所以提出 $(c-4)$ 後留下 $+3$，不是 $-3$。",
         "en": "The second group is $+3(c-4)$, so taking out $(c-4)$ leaves $+3$, not $-3$."
        },
        {
         "opt": "D",
         "zh": "$(c+3)(d-4)$ 分組錯誤，展開得 $cd-4c+3d-12$，中間兩項與原式不符。",
         "en": "$(c+3)(d-4)$ is grouped wrongly; expanding gives $cd-4c+3d-12$, whose middle terms do not match."
        }
       ],
       "tip": {
        "zh": "分組後兩個括號必須一模一樣；不一樣就換一種分法，不要硬做。",
        "en": "After grouping, the two brackets must be identical. If they are not, try another grouping — do not force it."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q04",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q04",
      "source": "WS01 Basic Skills Q3(b)",
      "stem": {
       "text": "因式分解 (Factorize) $2km-kn-14m+7n$。",
       "zh": "因式分解 (Factorize) $2km-kn-14m+7n$。",
       "en": "Factorize $2km-kn-14m+7n$."
      },
      "options": {
       "A": "$(2m+n)(k-7)$",
       "B": "$(2m-n)(k+7)$",
       "C": "$(2m-n)(k-7)$",
       "D": "$(m-n)(2k-7)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 四項分兩組",
          "en": "Step 1 · Group into two pairs"
         },
         "math": "2km-kn-14m+7n=\\hl{k}(2m-n)\\hlw{-7}(2m-n)",
         "zh": "前兩項抽 $k$ 得 $k(2m-n)$；後兩項 $-14m+7n$ 是負號開頭，抽 $-7$ 得 $-7(2m-n)$（抽負號後括號內次序保持 $2m-n$）。",
         "en": "From the first pair take out $k$ to get $k(2m-n)$. The last pair $-14m+7n$ starts with a minus, so take out $-7$: $-7(2m-n)$ (keep the order $2m-n$ inside the bracket)."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽共同括號",
          "en": "Step 2 · Take out the common bracket"
         },
         "math": "=\\hlg{(2m-n)(k-7)}",
         "zh": "兩組都有 $(2m-n)$，抽走後剩 $(k-7)$。答案是 C。展開檢查：$(2m-n)(k-7)=2km-14m-kn+7n$，與原式相同。",
         "en": "Both groups contain $(2m-n)$; taking it out leaves $(k-7)$. The answer is C. Check: $(2m-n)(k-7)=2km-14m-kn+7n$, the same as the original."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(2m+n)(k-7)$ 的第一個括號符號錯：原式前兩項是 $2km-kn=k(2m-n)$，是減不是加。",
         "en": "$(2m+n)(k-7)$ has the wrong sign in the first bracket: the first two terms give $2km-kn=k(2m-n)$ — a minus, not a plus."
        },
        {
         "opt": "B",
         "zh": "$(2m-n)(k+7)$ 是後兩項抽 $+7$ 時沒有變號；$-14m+7n$ 抽 $+7$ 應得 $7(-2m+n)$，與第一組括號不同。",
         "en": "$(2m-n)(k+7)$ does not change the signs when taking out $+7$: $-14m+7n=7(-2m+n)$, which is not the same bracket as the first group."
        },
        {
         "opt": "D",
         "zh": "$(m-n)(2k-7)$ 公因式抽錯：第一組的公因式是 $k$ 不是 $2k$，而且 $(m-n)$ 並沒有出現在任何一組。",
         "en": "$(m-n)(2k-7)$ takes out the wrong common factors — the first group's is $k$, not $2k$, and $(m-n)$ never appears."
        }
       ],
       "tip": {
        "zh": "後兩項負號開頭時，抽負號出來，括號內次序跟著第一組寫（例如都寫成 $2m-n$），兩組就會一樣。",
        "en": "When the last two terms start with a minus, take the minus out and write the bracket in the same order as the first group (both as $2m-n$) so that the two match."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q05",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q05",
      "source": "WS01 Basic Skills Q4(a)",
      "stem": {
       "text": "因式分解 (Factorize) $h^{2}+ak+ah+hk$。",
       "zh": "因式分解 (Factorize) $h^{2}+ak+ah+hk$。",
       "en": "Factorize $h^{2}+ak+ah+hk$."
      },
      "options": {
       "A": "$(a+h)(h-k)$",
       "B": "$(a+h)(h+k)$",
       "C": "$(a-h)(h+k)$",
       "D": "$(a+k)(h+k)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先調位再分組",
          "en": "Step 1 · Rearrange then group"
         },
         "math": "h^{2}+ak+ah+hk=\\hl{h^{2}+ah}+\\hl{ak+hk}",
         "zh": "把項調位，讓可以分組的排在一起：$h^{2}+ah$（都有 $h$）與 $ak+hk$（都有 $k$）。四項題不要被原本次序困住。",
         "en": "Rearrange the terms so that pairs that can be grouped sit together: $h^{2}+ah$ (both contain $h$) and $ak+hk$ (both contain $k$). Do not let the original order trap you."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式再抽共同括號",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=h(h+a)+k(\\hl{a+h})=\\hlg{(a+h)(h+k)}",
         "zh": "$h^{2}+ah=h(h+a)$，$ak+hk=k(a+h)$。因 $h+a=a+h$，兩組括號相同，抽出來得 $(a+h)(h+k)$。答案是 B。",
         "en": "$h^{2}+ah=h(h+a)$ and $ak+hk=k(a+h)$. Since $h+a=a+h$, the two brackets are the same, so taking it out gives $(a+h)(h+k)$ — that is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(a+h)(h-k)$ 是第二組抽 $+k$ 時變號錯誤：$ak+hk=k(a+h)$，抽 $+k$ 括號內應是 $(a+h)$ 且外面是 $+k$。",
         "en": "$(a+h)(h-k)$ has a sign error when taking out $+k$: $ak+hk=k(a+h)$, so the bracket is $(a+h)$ with $+k$ outside."
        },
        {
         "opt": "C",
         "zh": "$(a-h)(h+k)$ 把 $a+h$ 抄成 $a-h$，公因式符號錯了整題就錯。",
         "en": "$(a-h)(h+k)$ copies $a+h$ as $a-h$ — a wrong sign in the common factor ruins the whole answer."
        },
        {
         "opt": "D",
         "zh": "$(a+k)(h+k)$ 展開會出現 $k^{2}$，原式並沒有 $k^{2}$ 這一項，所以不是正確分解。",
         "en": "$(a+k)(h+k)$ would expand to include a $k^{2}$ term, which the original expression does not have."
        }
       ],
       "tip": {
        "zh": "$h+a$ 與 $a+h$ 是同一個數。分組後括號「次序倒轉」不算失敗，直接當成相同公因式抽走。",
        "en": "$h+a$ and $a+h$ are the same expression. A “reversed order” bracket after grouping is not a failure — treat it as the common factor."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代 $h=2$、$a=3$、$k=5$",
          "en": "Check: substitute $h=2$, $a=3$, $k=5$"
         },
         "zh": "代值驗算：取 $h=2$、$a=3$、$k=5$。原式 $=4+15+6+10=35$；答案 $(a+h)(h+k)=5\\times7=35$。其餘選項分別得 $-15$、$7$、$56$，全部不符。四個字母的題目最易抄錯，代一組小數字一次過驗完。 數值不相同可排除錯誤；一次代值相同不能證明恆等，仍應展開逐項核對。",
         "en": "Substitute values: $h=2$, $a=3$, $k=5$. The original is $4+15+6+10=35$; the answer gives $(a+h)(h+k)=5\\times7=35$. The other options give $-15$, $7$ and $56$. Four-letter questions are the easiest place to mis-copy, so one substitution checks everything. A numerical mismatch disproves the identity, but one match is not a proof; expand to compare every term."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q06",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1-Q06",
      "source": "WS01 Basic Skills Q4(b)",
      "stem": {
       "text": "因式分解 (Factorize) $2x^{2}-4yz-xz+8xy$。",
       "zh": "因式分解 (Factorize) $2x^{2}-4yz-xz+8xy$。",
       "en": "Factorize $2x^{2}-4yz-xz+8xy$."
      },
      "options": {
       "A": "$(2x+z)(x+4y)$",
       "B": "$(2x-z)(x-4y)$",
       "C": "$(x-z)(2x+4y)$",
       "D": "$(2x-z)(x+4y)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 調位分組",
          "en": "Step 1 · Rearrange and group"
         },
         "math": "2x^{2}-4yz-xz+8xy=\\hl{2x^{2}-xz}+\\hl{8xy-4yz}",
         "zh": "先看哪兩項有共同字母：$2x^{2}$ 與 $-xz$ 都有 $x$；$8xy$ 與 $-4yz$ 都有 $4y$。把它們排在一起。",
         "en": "First look for pairs that share a letter: $2x^{2}$ and $-xz$ both contain $x$; $8xy$ and $-4yz$ both contain $4y$. Put those pairs together."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各自抽公因式",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=x(2x-z)+4y(\\hl{2x-z})=\\hlg{(2x-z)(x+4y)}",
         "zh": "$2x^{2}-xz=x(2x-z)$，$8xy-4yz=4y(2x-z)$。兩組括號相同，抽出來得 $(2x-z)(x+4y)$。答案是 D。展開檢查：$(2x-z)(x+4y)=2x^{2}+8xy-xz-4yz$，與原式相同。",
         "en": "$2x^{2}-xz=x(2x-z)$ and $8xy-4yz=4y(2x-z)$. The brackets match, so the answer is $(2x-z)(x+4y)$ — that is D. Check: $(2x-z)(x+4y)=2x^{2}+8xy-xz-4yz$, the same as the original."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(2x+z)(x+4y)$ 第一個括號符號錯：原式有 $-xz$，所以應是 $(2x-z)$。",
         "en": "$(2x+z)(x+4y)$ has the wrong sign in the first bracket: the question has $-xz$, so it must be $(2x-z)$."
        },
        {
         "opt": "B",
         "zh": "第二組是 $+4y(2x-z)$。提出 $(2x-z)$ 後，$+4y$ 的正號必須保留。",
         "en": "The second group is $+4y(2x-z)$. Keep the positive sign of $+4y$ after taking out $(2x-z)$."
        },
        {
         "opt": "C",
         "zh": "$(x-z)(2x+4y)$ 公因式抽錯：$2x^{2}-xz=x(2x-z)$，第一組的公因式是 $x$，括號內還有一個 $2$。",
         "en": "$(x-z)(2x+4y)$ takes out the wrong factors: $2x^{2}-xz=x(2x-z)$, so the common factor is $x$ and a 2 remains inside the bracket."
        }
       ],
       "tip": {
        "zh": "四項題先調位再分組。分組的原則是「兩組抽完後括號要一樣」，所以先試最有希望的一對。",
        "en": "For four terms, rearrange first and then group. The rule is “the brackets must match after grouping”, so try the most promising pair first."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "D",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q08",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q08",
      "source": "WS01 Basic Skills Q6(a)",
      "stem": {
       "text": "因式分解 (Factorize) $9a^{2}+6a+1$。",
       "zh": "因式分解 (Factorize) $9a^{2}+6a+1$。",
       "en": "Factorize $9a^{2}+6a+1$."
      },
      "options": {
       "A": "$(3a-1)^{2}$",
       "B": "$(9a+1)(a+1)$",
       "C": "$(3a+1)^{2}$",
       "D": "$3a(3a+2)+1$"
      },
      "review": null,
      "practiceGoal": {
       "zh": "本題選擇已分解完成的形式：提出公因式後，括號內亦要檢查。",
       "en": "Choose the fully factorised form: take out common factors and check inside every bracket."
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 檢查是否完全平方",
          "en": "Step 1 · Check the perfect-square pattern"
         },
         "math": "9a^{2}+6a+1=\\hl{(3a)^{2}}+2(3a)(1)+\\hl{1^{2}}",
         "zh": "首項 $9a^{2}=(3a)^{2}$、尾項 $1=1^{2}$、中間項 $6a=2(3a)(1)$，完全符合 $a^{2}+2ab+b^{2}$ 的樣子，所以是完全平方。",
         "en": "Leading term $9a^{2}=(3a)^{2}$, last term $1=1^{2}$, middle term $6a=2(3a)(1)$ — exactly the $a^{2}+2ab+b^{2}$ pattern, so it is a perfect square."
        },
        {
         "title": {
          "zh": "第 2 步 · 寫成平方",
          "en": "Step 2 · Write the square"
         },
         "math": "=\\hlg{(3a+1)^{2}}",
         "zh": "中間項是正號，所以用 $(a+b)^{2}$ 的形式：$(3a+1)^{2}$。答案是 C。展開檢查：$(3a+1)^{2}=9a^{2}+6a+1$。",
         "en": "The middle term is positive, so use the $(a+b)^{2}$ form: $(3a+1)^{2}$. The answer is C. Check: $(3a+1)^{2}=9a^{2}+6a+1$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(3a-1)^{2}$ 展開的中間項是 $-6a$，但題目是 $+6a$，所以要用加號的版本。",
         "en": "$(3a-1)^{2}$ expands with middle term $-6a$, but the question has $+6a$, so the plus version is needed."
        },
        {
         "opt": "B",
         "zh": "$(9a+1)(a+1)$ 展開得 $9a^{2}+10a+1$，中間項是 $10a$ 不是 $6a$，十字相乘的組合不對。",
         "en": "$(9a+1)(a+1)$ expands to $9a^{2}+10a+1$; the middle term is $10a$, not $6a$, so the cross-method combination is wrong."
        },
        {
         "opt": "D",
         "zh": "$3a(3a+2)+1$ 根本沒有完成因式分解（還有「$+1$」在外面），答案必須是純粹的因式相乘。",
         "en": "$3a(3a+2)+1$ is not fully factorized — there is still a “$+1$” outside; the answer must be a pure product of factors."
        }
       ],
       "tip": {
        "zh": "把首尾寫成平方，再計算兩個底式乘積的兩倍，核對是否等於中間項。",
        "en": "Write the first and last terms as squares. Twice the product of their bases must equal the middle term."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q09",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q09",
      "source": "WS01 Basic Skills Q6(b)",
      "stem": {
       "text": "因式分解 (Factorize) $-3a^{2}+12a-12$。",
       "zh": "因式分解 (Factorize) $-3a^{2}+12a-12$。",
       "en": "Factorize $-3a^{2}+12a-12$."
      },
      "options": {
       "A": "$3(a-2)^{2}$",
       "B": "$-3(a-2)^{2}$",
       "C": "$-3(a+2)^{2}$",
       "D": "$-3(a-2)(a+2)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 負號開頭，先抽 $-3$",
          "en": "Step 1 · Take out -3"
         },
         "math": "-3a^{2}+12a-12=-3(a^{2}-4a+4)",
         "zh": "三項係數的最大公因數是 $3$，而首項是負號，所以把 $-3$ 一次抽走。抽負號時括號內每一項都要變號：$-3a^{2}$ 變 $a^{2}$、$+12a$ 變 $-4a$、$-12$ 變 $+4$。",
         "en": "The HCF of the three coefficients is 3 and the leading term is negative, so factorize out $-3$ in a single step. Every term inside changes sign: $-3a^{2}\\to a^{2}$, $+12a\\to-4a$, $-12\\to+4$."
        },
        {
         "title": {
          "zh": "第 2 步 · 括號內是完全平方",
          "en": "Step 2 · Perfect square inside"
         },
         "math": "=\\hlg{-3(a-2)^{2}}",
         "zh": "$a^{2}-4a+4=(a-2)^{2}$。答案是 B。展開檢查：$-3(a-2)^{2}=-3(a^{2}-4a+4)=-3a^{2}+12a-12$。",
         "en": "$a^{2}-4a+4=(a-2)^{2}$. The answer is B. Check: $-3(a-2)^{2}=-3(a^{2}-4a+4)=-3a^{2}+12a-12$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$3(a-2)^{2}$ 展開後的 $a^{2}$ 項係數是 $+3$，原式是 $-3$。若保留 $(a-2)^{2}$ 這個因式，外面要乘 $-3$。",
         "en": "$3(a-2)^{2}$ loses the minus sign: the leading term is $-3a^{2}$, so the factor outside must be $-3$."
        },
        {
         "opt": "C",
         "zh": "$-3(a+2)^{2}$ 的中間項符號錯：$(a+2)^{2}=a^{2}+4a+4$，但括號內是 $a^{2}-4a+4$。",
         "en": "$-3(a+2)^{2}$ has the wrong sign in the middle: $(a+2)^{2}=a^{2}+4a+4$, but the bracket is $a^{2}-4a+4$."
        },
        {
         "opt": "D",
         "zh": "$-3(a-2)(a+2)$ 是把完全平方誤當平方差；平方差展開是 $a^{2}-4$，沒有中間項。",
         "en": "$-3(a-2)(a+2)$ mistakes a perfect square for a difference of squares; the latter expands to $a^{2}-4$ with no middle term."
        }
       ],
       "tip": {
        "zh": "見到所有係數都有公因式、而且首項是負號，先抽負的公因式出來，題目會立刻變簡單。",
        "en": "If every coefficient has a common factor and the first term is negative, take out the negative common factor and the question becomes much easier."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q10",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q10",
      "source": "WS01 Basic Skills Q7(a)",
      "stem": {
       "text": "因式分解 (Factorize) $x^{2}+8xy+16y^{2}$。",
       "zh": "因式分解 (Factorize) $x^{2}+8xy+16y^{2}$。",
       "en": "Factorize $x^{2}+8xy+16y^{2}$."
      },
      "options": {
       "A": "$(x-4y)^{2}$",
       "B": "$(x+8y)^{2}$",
       "C": "$(x+4y)(x-4y)$",
       "D": "$(x+4y)^{2}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 檢查是否完全平方",
          "en": "Step 1 · Check the perfect-square pattern"
         },
         "math": "x^{2}+8xy+16y^{2}=\\hl{x^{2}}+2(x)(4y)+\\hl{(4y)^{2}}",
         "zh": "$16y^{2}$ 可寫成 $(4y)^{2}$，而 $8xy=2(x)(4y)$，所以三項符合完全平方。這裡是辨認平方的底式，沒有假設 $y$ 的正負。",
         "en": "Write $16y^{2}$ as $(4y)^{2}$ and check $8xy=2(x)(4y)$. The perfect-square pattern holds without assuming a sign for $y$."
        },
        {
         "title": {
          "zh": "第 2 步 · 寫成平方",
          "en": "Step 2 · Write the square"
         },
         "math": "=\\hlg{(x+4y)^{2}}",
         "zh": "中間項是正號，用 $(a+b)^{2}$：$(x+4y)^{2}$。答案是 D。展開檢查：$(x+4y)^{2}=x^{2}+8xy+16y^{2}$。",
         "en": "The middle term is positive, so use $(a+b)^{2}$: $(x+4y)^{2}$. The answer is D. Check: $(x+4y)^{2}=x^{2}+8xy+16y^{2}$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(x-4y)^{2}$ 展開的中間項是 $-8xy$，題目是 $+8xy$，符號相反。",
         "en": "$(x-4y)^{2}$ expands with middle term $-8xy$, but the question has $+8xy$ — the sign is opposite."
        },
        {
         "opt": "B",
         "zh": "$(x+8y)^{2}$ 是把 $8xy$ 誤當成「$2 × x × 8y$」；正確應是「$2 × x × 4y$」，因為尾項是 $16y^{2}=(4y)^{2}$。",
         "en": "$(x+8y)^{2}$ misreads $8xy$ as “$2\\times x\\times 8y$”; it should be $2\\times x\\times 4y$ because the last term is $16y^{2}=(4y)^{2}$."
        },
        {
         "opt": "C",
         "zh": "$(x+4y)(x-4y)$ 是平方差，展開得 $x^{2}-16y^{2}$，沒有中間項 $8xy$。",
         "en": "$(x+4y)(x-4y)$ is a difference of squares, expanding to $x^{2}-16y^{2}$ with no $8xy$ term."
        }
       ],
       "tip": {
        "zh": "把 $16y^{2}$ 寫成 $(4y)^{2}$，再核對中間項 $2(x)(4y)$；字母也要保留。",
        "en": "Write $16y^{2}$ as $(4y)^{2}$, then check the middle term $2(x)(4y)$. Keep the letter as part of the base."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "D",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01-q11",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-Q11",
      "source": "WS01 Basic Skills Q8(a)",
      "stem": {
       "text": "因式分解 (Factorize) $x^{2}-4x-5$。",
       "zh": "因式分解 (Factorize) $x^{2}-4x-5$。",
       "en": "Factorize $x^{2}-4x-5$."
      },
      "options": {
       "A": "$(x-5)(x+1)$",
       "B": "$(x+5)(x-1)$",
       "C": "$(x-5)(x-1)$",
       "D": "$(x+5)(x+1)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 十字相乘",
          "en": "Step 1 · Cross-method"
         },
         "math": "x^{2}-4x-5=\\hl{(x-5)(x+1)}",
         "zh": "首項 $x^{2}=x × x$；末項 $-5$ 拆成 $(-5)(+1)$（一正一負）。交叉相加：$(-5)+(+1)=-4$，正好等於中間項係數 $-4$，所以這組正確。",
         "en": "Leading term $x^{2}=x\\times x$; the last term $-5$ splits into $(-5)(+1)$ — one negative, one positive. Now check by cross-multiplying and adding: $(-5)+(+1)=-4$, exactly the middle coefficient, so this combination is correct."
        },
        {
         "title": {
          "zh": "第 2 步 · 展開檢查",
          "en": "Step 2 · Check by expanding"
         },
         "math": "(x-5)(x+1)=x^{2}+x-5x-5=\\hlg{x^{2}-4x-5}",
         "zh": "展開後回到原式，答案是 A。做完十字相乘一定要展開檢查，這是免費的保險。",
         "en": "Expanding gives back the original expression, so the answer is A. Always check a cross-method result by expanding — it is free insurance."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(x+5)(x-1)$ 展開的中間項是 $+4x$（$+5x-x$），題目是 $-4x$，正負號對調了。",
         "en": "$(x+5)(x-1)$ expands with middle term $+4x$ ($+5x-x$), but the question has $-4x$ — the signs are swapped."
        },
        {
         "opt": "C",
         "zh": "$(x-5)(x-1)$ 展開的中間項是 $-6x$，與題目的 $-4x$ 不符；末項 $-5$ 要拆成一正一負才對。",
         "en": "$(x-5)(x-1)$ expands with middle term $-6x$, not $-4x$; the last term $-5$ needs one positive and one negative factor."
        },
        {
         "opt": "D",
         "zh": "$(x+5)(x+1)$ 展開的中間項是 $+6x$，末項 $-5$ 拆成兩個正數會得到 $+5$，與題目不符。",
         "en": "$(x+5)(x+1)$ expands with middle term $+6x$; two positive factors give $+5$ for the last term, which does not match."
        }
       ],
       "tip": {
        "zh": "末項係數為負，兩個常數項要異號；再用中間項的係數判斷哪個常數是負的。",
        "en": "A negative constant term requires constants of opposite signs. Use the middle coefficient to decide which constant is negative."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-w06",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1-W06",
      "source": "自擬 · 十字相乘（首項係數為質數）",
      "stem": {
       "text": "因式分解 (Factorize) $2x^{2}+7x+3$。",
       "zh": "因式分解 (Factorize) $2x^{2}+7x+3$。",
       "en": "Factorize $2x^{2}+7x+3$."
      },
      "options": {
       "A": "$(2x+3)(x+1)$",
       "B": "$(2x+1)(x+3)$",
       "C": "$(x+1)(2x+7)$",
       "D": "$(2x-1)(x-3)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 十字拆解首項與末項",
          "en": "Step 1 · Cross-method Setup"
         },
         "math": "2x^{2}+7x+3=\\hl{(2x+1)(x+3)}",
         "zh": "首項 $2x^{2}$ 只能拆成 $2x$ 與 $x$；末項 $3$ 是質數，只能拆成 $1$ 與 $3$。交叉相乘檢驗：$(2x)(3)+(1)(x)=6x+x=7x$，剛好吻合中間項。",
         "en": "The leading term $2x^{2}$ can only split into $2x$ and $x$; the last term 3 is prime, so it can only split into 1 and 3. Cross-checking: $(2x)(3)+(1)(x)=6x+x=7x$, which matches the middle term exactly."
        },
        {
         "title": {
          "zh": "第 2 步 · 寫出因式並展開驗算",
          "en": "Step 2 · Verify"
         },
         "math": "(2x+1)(x+3)=2x^{2}+6x+x+3\n=\\hlg{2x^{2}+7x+3}",
         "zh": "展開後完全符合原式，所以答案是 B。",
         "en": "Expanding gives back the original expression, so the answer is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(2x+3)(x+1)$ 交叉相乘得 $(2x)(1)+(3)(x)=5x$，不符合題目的 $+7x$。",
         "en": "$(2x+3)(x+1)$ gives $(2x)(1)+(3)(x)=5x$ when crossed, not the required $+7x$."
        },
        {
         "opt": "C",
         "zh": "$(x+1)(2x+7)$ 展開後末項常數是 $7$，與原式的 $3$ 不符。",
         "en": "$(x+1)(2x+7)$ has a constant term of 7 when expanded, not the 3 in the question."
        },
        {
         "opt": "D",
         "zh": "$(2x-1)(x-3)$ 展開後中間項是 $-7x$，正負號顛倒了。",
         "en": "$(2x-1)(x-3)$ has middle term $-7x$ when expanded — the signs are reversed."
        }
       ],
       "tip": {
        "zh": "先配對首項與末項，再交叉相乘驗中間項。這裡比較的是係數 $2$ 與常數 $3$ 的因數組合。",
        "en": "Pair the leading and constant factors, then check the cross products. Here the combinations come from coefficient $2$ and constant $3$."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws01-q12",
      "type": "mc",
      "topic": "ws01",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1-Q12",
      "source": "WS01 Basic Skills Q8(b)",
      "stem": {
       "text": "因式分解 (Factorize) $2a^{2}+5a-12$。",
       "zh": "因式分解 (Factorize) $2a^{2}+5a-12$。",
       "en": "Factorize $2a^{2}+5a-12$."
      },
      "options": {
       "A": "$(2a+3)(a-4)$",
       "B": "$(2a-3)(a-4)$",
       "C": "$(2a-3)(a+4)$",
       "D": "$(2a+3)(a+4)$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 十字相乘（首項係數不是 1）",
          "en": "Step 1 · Cross-method with a ≠ 1"
         },
         "math": "2a^{2}+5a-12=\\hl{(2a-3)(a+4)}",
         "zh": "首項 $2a^{2}$ 拆成 $2a × a$；末項 $-12$ 拆成 $(-3)(+4)$。交叉相乘：$(2a)(+4)+(-3)(a)=8a-3a=5a$，等於中間項，所以這組正確。",
         "en": "The leading term $2a^{2}$ splits into $2a\\times a$; the last term $-12$ splits into $(-3)(+4)$. Cross-multiply: $(2a)(+4)+(-3)(a)=8a-3a=5a$, which equals the middle term, so this combination is correct."
        },
        {
         "title": {
          "zh": "第 2 步 · 展開檢查",
          "en": "Step 2 · Check by expanding"
         },
         "math": "(2a-3)(a+4)=2a^{2}+8a-3a-12=\\hlg{2a^{2}+5a-12}",
         "zh": "展開後回到原式，答案是 C。首項係數不是 1 時，每個組合都要這樣核對一次。",
         "en": "Expanding gives back the original expression, so the answer is C. When the leading coefficient is not 1, every combination has to be checked this way."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(2a+3)(a-4)$ 展開的中間項是 $-5a$（$-8a+3a$），題目是 $+5a$，兩項的符號對調了。",
         "en": "$(2a+3)(a-4)$ expands with middle term $-5a$ ($-8a+3a$), but the question has $+5a$ — the signs are swapped."
        },
        {
         "opt": "B",
         "zh": "$(2a-3)(a-4)$ 展開的中間項是 $-11a$，末項會是 $+12$，與題目的 $-12$ 不符。",
         "en": "$(2a-3)(a-4)$ gives middle term $-11a$ and last term $+12$, which does not match $-12$."
        },
        {
         "opt": "D",
         "zh": "$(2a+3)(a+4)$ 展開的中間項是 $+11a$，末項是 $+12$，兩項都不符合題目。",
         "en": "$(2a+3)(a+4)$ gives middle term $+11a$ and last term $+12$; neither matches the question."
        }
       ],
       "tip": {
        "zh": "係數不是 1 時要多試幾個組合，方法固定：先拆首項，再拆末項，然後交叉相乘相加，看是否等於中間項。",
        "en": "When the leading coefficient is not 1, try several combinations. The method is fixed: split the first term, split the last term, cross-multiply and add, then compare with the middle term."
       },
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 18,
  "long": 7,
  "cards": 4,
  "pages": 6
 }
};
