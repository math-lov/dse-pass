// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS01B = {
 "id": "ws01b",
 "stage": 1,
 "unit": 4,
 "subtopic": "factorization",
 "source": "EPH DSE Pass · Worksheet 1 · Section 1C (DSE Paper 2 MC)",
 "name": {
  "zh": "WS01b · 卷二 MC 27 題",
  "en": "WS01b · 27 MC (Paper 2 style)"
 },
 "intro": {
  "zh": "這組多項選擇題練習辨認結構、整理負號與核對答案。可以用符號或代值排除選項，但最後仍要檢查整式是否等值，以及是否已分解完成。",
  "en": "These multiple-choice questions practise recognising structure, handling minus signs and checking answers. Signs and numerical substitution can help eliminate options, but verify equivalence and complete factorisation."
 },
 "cmdHints": [
  {
   "en": "Group the terms",
   "zh": "分組：四項／六項先分成兩組或三組"
  },
  {
   "en": "Use the cross-method",
   "zh": "十字相乘（二次三項式）"
  },
  {
   "en": "By observing the signs",
   "zh": "看符號：先找線索或排除選項，再核對整式"
  },
  {
   "en": "Take out the common factor",
   "zh": "抽公因式（先抽後拆）"
  },
  {
   "en": "difference of two squares",
   "zh": "平方差：$a^{2}-b^{2}=(a+b)(a-b)$"
  }
 ],
 "lessons": [
  {
   "id": "ws01b-1",
   "title": {
    "zh": "卷二 27 題（應試速度）",
    "en": "Paper 2 · 27 MC (exam speed)"
   },
   "cards": [
    {
     "id": "ws01b-c1",
     "topic": "ws01b",
     "title": {
      "zh": "觀察符號，再驗證線索",
      "en": "Use signs as clues, then verify"
     },
     "body": {
      "zh": "尾兩項出現 $m-n$，可以提示我們試找這個因式；但仍要檢查其餘部分。\n本例前三項也可寫成 $(m-n)(4m-3n)$，所以整式才有共同因式 $(m-n)$。{{math:0}}\n最後展開檢查每一項，而非只看尾巴。{{math:1}}",
      "en": "The last pair $m-n$ suggests trying this factor, but the rest of the expression must be checked too.\nHere the first three terms also factor as $(m-n)(4m-3n)$, so the whole expression shares $(m-n)$.{{math:0}}\nExpand and check every term, not just the tail.{{math:1}}"
     },
     "math": [
      "4m^{2}-7mn+3n^{2}+m-n\n=\\hl{(m-n)}(4m-3n)+\\hl{(m-n)}\n=\\hl{(m-n)}(4m-3n+1)",
      "(m-n)(4m-3n+1)\n=4m^{2}-7mn+3n^{2}+m-n"
     ],
     "vocab": [
      {
       "en": "sign",
       "zh": "符號"
      },
      {
       "en": "eliminate the options",
       "zh": "刪去選項"
      }
     ],
     "warn": {
      "zh": "某一部分有 $(m-n)$，不代表整式一定有這個因式。提出之前，每組都要含有它。",
      "en": "A factor of one part need not be a factor of the whole expression. Every group must contain it before it can be taken out."
     },
     "goal": {
      "zh": "用符號提出候選，不把線索當成證明。",
      "en": "Use signs to suggest a factor, not to prove one."
     },
     "recall": {
      "prompt": {
       "zh": "只因末尾是 $+x-y$，就能證明整式有因式 $(x-y)$ 嗎？",
       "en": "Does a tail of $+x-y$ alone prove that the whole expression has factor $(x-y)$?"
      },
      "options": [
       {
        "zh": "可以",
        "en": "Yes"
       },
       {
        "zh": "不可以，還要檢查其餘部分",
        "en": "No — check the remaining part too"
       }
      ],
      "answer": 1,
      "explanation": {
       "zh": "尾巴只提供線索；其餘部分亦要是 $(x-y)$ 的倍數，才可以把它提出。",
       "en": "The tail is only a clue. The remaining part must also be a multiple of $(x-y)$."
      }
     }
    },
    {
     "id": "ws01b-c2",
     "topic": "ws01b",
     "title": {
      "zh": "項數多，也是一組一組處理",
      "en": "More terms: work one group at a time"
     },
     "body": {
      "zh": "四項可以分成兩對，分別提出公因式。{{math:0}}\n若兩個括號剛好相差負號，先把負號整理好。{{math:1}}\n六項可試三組、每組兩項，或兩組、每組三項。分法不只一種，目標都是留下共同因式。",
      "en": "Four terms can be grouped into two pairs, each with its own common factor.{{math:0}}\nIf the brackets have opposite signs, deal with the minus first.{{math:1}}\nFor six terms, try three pairs or two groups of three. Different groupings can work; the goal is a common factor."
     },
     "math": [
      "2xy-xz+4y^{2}-2yz\n=x\\hl{(2y-z)}+2y\\hl{(2y-z)}\n=\\hl{(2y-z)}(x+2y)",
      "xy-xz-y+z=x\\hl{(y-z)}-\\hl{(y-z)}\n=\\hl{(y-z)}(x-1)"
     ],
     "vocab": [
      {
       "en": "grouping",
       "zh": "併項分組"
      },
      {
       "en": "common bracket",
       "zh": "共同括號"
      }
     ],
     "warn": {
      "zh": "提出負因式時，整組每一項都要除以它。例如 $-3y^{2}-2yz=-y(3y+2z)$。",
      "en": "When taking out a negative factor, divide every term in that group by it. For example, $-3y^{2}-2yz=-y(3y+2z)$."
     },
     "goal": {
      "zh": "選擇能產生共同括號的分組。",
      "en": "Choose groups that produce a shared bracket."
     },
     "recall": {
      "prompt": {
       "zh": "分組後，$pr-qr-ps+qs$ 等於甚麼？",
       "en": "After grouping, what is $pr-qr-ps+qs$?"
      },
      "options": [
       {
        "math": "(p-q)(r-s)"
       },
       {
        "math": "(p+q)(r-s)"
       },
       {
        "math": "(p-q)(r+s)"
       }
      ],
      "answer": 0,
      "explanation": {
       "zh": "$pr-qr=r(p-q)$，$-ps+qs=-s(p-q)$，所以餘下 $r-s$。",
       "en": "$pr-qr=r(p-q)$ and $-ps+qs=-s(p-q)$, leaving $r-s$."
      }
     }
    }
   ],
   "long": [],
   "pages": [
    [
     {
      "id": "eph-ws01b-m01",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1C-Q1",
      "source": "WS01 · DSE Paper 2 MC Q1 · [HKCEE 2006 Paper 2 Q4]",
      "stem": {
       "en": "Factorize $ac-bc-ad+bd$.",
       "zh": "因式分解 $ac-bc-ad+bd$。"
      },
      "options": {
       "A": "$(a + b)(c - d)$",
       "B": "$(a + b)(d - c)$",
       "C": "$(a - b)(c - d)$",
       "D": "$(a - b)(d - c)$"
      },
      "answer": "C",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：四項，先分組",
          "en": "Step 1 · Four terms: group them"
         },
         "math": "ac-bc-ad+bd=(ac-bc)-(ad-bd)",
         "zh": "四項又沒有全部共同的公因式 → 用分組。把 $ac$、$bc$ 放一組（有公因式 $c$），$ad$、$bd$ 放一組（有公因式 $d$）。",
         "en": "Four terms and no factor common to all of them, so group. Put $ac$ and $bc$ together (common factor $c$), and $ad$, $bd$ together (common factor $d$)."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各自抽公因式",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=c(a-b)-d(a-b)",
         "zh": "第一組抽 $c$ 得 $c(a-b)$；第二組抽 $d$ 得 $d(a-b)$。兩組的括號都是 $(a-b)$ —— 這就是分組成功的訊號。",
         "en": "The first pair gives $c(a-b)$; the second gives $d(a-b)$. Both brackets are $(a-b)$ — the sign that the grouping worked."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走相同括號",
          "en": "Step 3 · Take out the common bracket"
         },
         "math": "=(a-b)(c-d)",
         "zh": "把 $(a-b)$ 當作一個整體抽走，剩下 $c-d$ 放進另一個括號。",
         "en": "Treat $(a-b)$ as one object and take it out; what is left, $c-d$, goes into the other bracket."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$b c$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $b c$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$a c$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $a c$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$a c$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $a c$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "分組三件事：分對組 → 各自抽公因式 → 兩個括號要一模一樣。",
        "en": "Grouping in three moves: split into pairs, factor each pair, and the two brackets must match exactly."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m02",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 1,
      "code": "WS1C-Q2",
      "source": "WS01 · DSE Paper 2 MC Q2 · [HKCEE 2006 Paper 2 Q4]",
      "stem": {
       "en": "Factorize $pr+ps-qs-qr$.",
       "zh": "因式分解 $pr+ps-qs-qr$。"
      },
      "options": {
       "A": "$(r + s)(p - q)$",
       "B": "$(r + s)(q - p)$",
       "C": "$(r - s)(p - q)$",
       "D": "$(r - s)(q - p)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：四項，先分組",
          "en": "Step 1 · Four terms: group them"
         },
         "math": "pr+ps-qs-qr=(pr+ps)-(qs+qr)",
         "zh": "四項沒有全部共同的公因式 → 分組。$pr$、$ps$ 一組抽 $p$；$qs$、$qr$ 一組抽 $q$。",
         "en": "No factor common to all four terms, so group: $pr$, $ps$ share $p$, and $qs$, $qr$ share $q$."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各自抽公因式",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=p(r+s)-q(s+r)",
         "zh": "$s+r$ 與 $r+s$ 是同一個數（加法交換律），所以兩個括號其實一樣。",
         "en": "$s+r$ and $r+s$ are the same number (addition is commutative), so the two brackets are in fact identical."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走相同括號",
          "en": "Step 3 · Take out the common bracket"
         },
         "math": "=(r+s)(p-q)",
         "zh": "抽走 $(r+s)$，剩下 $p-q$。",
         "en": "Take out $(r+s)$; what is left is $p-q$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$p r$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $p r$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$p s$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $p s$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$p r$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $p r$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "後兩項抽出來的括號次序倒轉不要緊（$s+r=r+s$），但符號要對。",
        "en": "It is fine if the second bracket comes out in a different order ($s+r=r+s$), but the signs must be right."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m03",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q3",
      "source": "WS01 · DSE Paper 2 MC Q3 · [HKCEE 2010 Paper 2 Q4]",
      "stem": {
       "en": "Factorize $2xy-xz+4y^{2}-2yz$.",
       "zh": "因式分解 $2xy-xz+4y^{2}-2yz$。"
      },
      "options": {
       "A": "$(x - 2y)(2y - z)$",
       "B": "$(x + 2y)(2y + z)$",
       "C": "$(x - 2y)(2y + z)$",
       "D": "$(x + 2y)(2y - z)$"
      },
      "answer": "D",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：四項，留意共同括號",
          "en": "Step 1 · Four terms: look for a common bracket"
         },
         "math": "2xy-xz+4y^{2}-2yz",
         "zh": "先按原次序分成兩對：前兩項可提出 $x$，後兩項可提出 $2y$。檢查是否留下同一個括號。",
         "en": "Use two pairs in the given order: the first shares $x$ and the second shares $2y$. Check whether the same bracket remains."
        },
        {
         "title": {
          "zh": "第 2 步 · 分組後各自抽公因式",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=x(2y-z)+2y(2y-z)",
         "zh": "照位置分組：$2xy-xz=x(2y-z)$，$4y^{2}-2yz=2y(2y-z)$。兩組都是 $(2y-z)$ ✓",
         "en": "Group as written: $2xy-xz=x(2y-z)$ and $4y^{2}-2yz=2y(2y-z)$. Both brackets are $(2y-z)$ ✓"
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走相同括號",
          "en": "Step 3 · Take out the common bracket"
         },
         "math": "=(x+2y)(2y-z)",
         "zh": "抽走 $(2y-z)$，剩下 $x+2y$。",
         "en": "Take out $(2y-z)$; what is left is $x+2y$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$y^{2}$ 項的係數是 $-4$；原式同一項的係數是 $4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $y^{2}$ is $-4$; the original coefficient is $4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$x z$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $x z$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$x z$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $x z$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "四項題先問自己「哪兩項有同一個括號」，答案通常就在那個括號裡。",
        "en": "With four terms, ask which two terms share a bracket — the answer usually sits in that bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01b-m04",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q4",
      "source": "WS01 · DSE Paper 2 MC Q4 · [HKCEE 2010 Paper 2 Q4]",
      "stem": {
       "en": "Factorize $pq-2pr-p^{2}+2qr$.",
       "zh": "因式分解 $pq-2pr-p^{2}+2qr$。"
      },
      "options": {
       "A": "$(p - q)(p + 2r)$",
       "B": "$(q - p)(p + 2r)$",
       "C": "$(p - q)(q - 2r)$",
       "D": "$(q - p)(q - 2r)$"
      },
      "answer": "B",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：四項，先調位再分組",
          "en": "Step 1 · Four terms: rearrange, then group"
         },
         "math": "pq-2pr-p^{2}+2qr=pq+2qr-p^{2}-2pr",
         "zh": "把 $+2qr$ 調到前面，讓 $pq+2qr$ 與 $-p^{2}-2pr$ 各自分組。這是一種可行分法，其他等值分組也可以。",
         "en": "Move $+2qr$ forward and group $pq+2qr$ with $-p^{2}-2pr$. This is one valid grouping; other equivalent groupings can also work."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各自抽公因式",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=q(p+2r)-p(p+2r)",
         "zh": "第一組抽 $q$、第二組抽 $p$，兩組都出現 $(p+2r)$。",
         "en": "Take out $q$ from the first pair and $p$ from the second: both give $(p+2r)$."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走相同括號",
          "en": "Step 3 · Take out the common bracket"
         },
         "math": "=(q-p)(p+2r)",
         "zh": "抽走 $(p+2r)$，剩下 $q-p$（次序是 $q$ 減 $p$，因為第二組前面是負號）。",
         "en": "Take out $(p+2r)$; what is left is $q-p$ — the minus in front of the second pair makes the order $q$ minus $p$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$p^{2}$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $p^{2}$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$p^{2}$ 項的係數是 $0$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $p^{2}$ is $0$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$p^{2}$ 項的係數是 $0$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $p^{2}$ is $0$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "分組失敗就調位：把「有共同括號」的兩項拉在一起，這是四項題的常規動作。",
        "en": "If the grouping fails, rearrange: pull together the two terms that share a bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m05",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q5",
      "source": "WS01 · DSE Paper 2 MC Q5 · [HKCEE 2010 Paper 2 Q4]",
      "stem": {
       "en": "Factorize $6xy-2yz+4xz-3y^{2}$.",
       "zh": "因式分解 $6xy-2yz+4xz-3y^{2}$。"
      },
      "options": {
       "A": "$(2x - y)(3y - 2z)$",
       "B": "$(2x - y)(3y + 2z)$",
       "C": "$(2x + y)(3y - 2z)$",
       "D": "$(2x + y)(3y + 2z)$"
      },
      "answer": "B",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：四項，先調位",
          "en": "Step 1 · Four terms: rearrange first"
         },
         "math": "6xy-2yz+4xz-3y^{2}=6xy+4xz-3y^{2}-2yz",
         "zh": "把 $+4xz$ 調上第二個位置：$6xy+4xz=2x(3y+2z)$。",
         "en": "Move $+4xz$ into second place: $6xy+4xz=2x(3y+2z)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩組各自抽公因式",
          "en": "Step 2 · Factor each pair"
         },
         "math": "=2x(3y+2z)-y(3y+2z)",
         "zh": "$-3y^{2}-2yz=-y(3y+2z)$：抽 $-y$ 會令括號內兩項同時變號，剛好與第一組相同。",
         "en": "$-3y^{2}-2yz=-y(3y+2z)$: taking out $-y$ flips both signs inside, matching the first bracket exactly."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走相同括號",
          "en": "Step 3 · Take out the common bracket"
         },
         "math": "=(2x-y)(3y+2z)",
         "zh": "抽走 $(3y+2z)$，剩下 $2x-y$。",
         "en": "Take out $(3y+2z)$; what is left is $2x-y$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$x z$ 項的係數是 $-4$；原式同一項的係數是 $4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $x z$ is $-4$; the original coefficient is $4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$x z$ 項的係數是 $-4$；原式同一項的係數是 $4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $x z$ is $-4$; the original coefficient is $4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$y^{2}$ 項的係數是 $3$；原式同一項的係數是 $-3$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $y^{2}$ is $3$; the original coefficient is $-3$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "一組抽負公因式（$-y$）可以令兩個括號一致；不要怕負號。",
        "en": "Taking out a negative common factor ($-y$) can make the two brackets match — do not fear the minus."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m06",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q6",
      "source": "WS01 · DSE Paper 2 MC Q6 · [HKDSE 2013 Paper 2 Q3]",
      "stem": {
       "en": "Factorize $pr-qr-ps+qs+pt-qt$.",
       "zh": "因式分解 $pr-qr-ps+qs+pt-qt$。"
      },
      "options": {
       "A": "$(p - q)(r - s + t)$",
       "B": "$(p - q)(r + s - t)$",
       "C": "$(p + q)(r - s + t)$",
       "D": "$(p + q)(r + s - t)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：六項，試抽共同括號",
          "en": "Step 1 · Six terms: look for a shared bracket"
         },
         "math": "pr-qr-ps+qs+pt-qt\n=r(p-q)-s(p-q)+t(p-q)",
         "zh": "第一、二項抽 $r$、第三、四項抽 $-s$、第五、六項抽 $t$ —— 三個括號都是 $(p-q)$。",
         "en": "$r$ from the first pair, $-s$ from the second, $t$ from the third — all three brackets are $(p-q)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽走 $(p-q)$",
          "en": "Step 2 · Take out $(p-q)$"
         },
         "math": "=(p-q)(r-s+t)",
         "zh": "把 $(p-q)$ 抽走，剩下的 $r$、$-s$、$+t$ 全部放進同一個括號。",
         "en": "Take $(p-q)$ out and collect what remains ($r$, $-s$, $+t$) in one bracket."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$p s$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $p s$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$q r$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $q r$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$p s$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $p s$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "項數多過四項照樣分組：三組、四組都可以，只要最後出現同一個括號。",
        "en": "More than four terms still works: group into threes or fours as long as one bracket appears everywhere."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01b-m07",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q7",
      "source": "WS01 · DSE Paper 2 MC Q7 · [HKDSE 2013 Paper 2 Q3]",
      "stem": {
       "en": "Factorize $-bx+ax+ay-by-az+bz$.",
       "zh": "因式分解 $-bx+ax+ay-by-az+bz$。"
      },
      "options": {
       "A": "$(a + b)(x - y + z)$",
       "B": "$(a + b)(x + y - z)$",
       "C": "$(a - b)(x - y + z)$",
       "D": "$(a - b)(x + y - z)$"
      },
      "answer": "D",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：六項，先排好次序",
          "en": "Step 1 · Six terms: order them first"
         },
         "math": "-bx+ax+ay-by-az+bz=ax+ay-az-bx-by+bz",
         "zh": "含 $a$ 的三項放前面、含 $b$ 的三項放後面：$a(x+y-z)-b(x+y-z)$。",
         "en": "Put the three $a$-terms first and the three $b$-terms after: $a(x+y-z)-b(x+y-z)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩邊各自抽公因式",
          "en": "Step 2 · Factor both halves"
         },
         "math": "=a(x+y-z)-b(x+y-z)",
         "zh": "抽 $a$ 時 $+ax+ay-az=a(x+y-z)$；抽 $-b$ 時 $-bx-by+bz=-b(x+y-z)$（三項同時變號）。",
         "en": "Taking out $a$: $+ax+ay-az=a(x+y-z)$. Taking out $-b$: $-bx-by+bz=-b(x+y-z)$ (all three signs flip)."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走相同括號",
          "en": "Step 3 · Take out the common bracket"
         },
         "math": "=(a-b)(x+y-z)",
         "zh": "抽走 $(x+y-z)$，剩下 $a-b$。",
         "en": "Take out $(x+y-z)$; what is left is $a-b$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$a y$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $a y$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$b x$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $b x$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$a y$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $a y$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "首項是負號（$-bx$）時，把它連同 $b$ 一起抽成 $-b(\\;)$，很多時兩個括號就會一模一樣。",
        "en": "When the first term is negative ($-bx$), take it out as $-b(\\;)$ together with $b$ — the two brackets often then match."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m08",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q8",
      "source": "WS01 · DSE Paper 2 MC Q8 · [HKDSE 2020 Paper 2 Q4]",
      "stem": {
       "en": "Factorize $(4x-3y)(2x+7y)-x(12x-9y)$.",
       "zh": "因式分解 $(4x-3y)(2x+7y)-x(12x-9y)$。"
      },
      "options": {
       "A": "$(4x - 3y)(-x + 7y)$",
       "B": "$(4x - 3y)(5x + 7y)$",
       "C": "$(4x + 3y)(-x - 7y)$",
       "D": "$(4x + 3y)(5x - 7y)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：先製造共同括號",
          "en": "Step 1 · Make a common bracket appear"
         },
         "math": "(4x-3y)(2x+7y)-x(12x-9y)",
         "zh": "看似要展開重做，其實不用：$12x-9y=3(4x-3y)$，所以 $-x(12x-9y)=-3x(4x-3y)$，與前面那項共用 $(4x-3y)$。",
         "en": "No need to expand: $12x-9y=3(4x-3y)$, so $-x(12x-9y)=-3x(4x-3y)$, which shares the bracket $(4x-3y)$ with the first term."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽走共同括號",
          "en": "Step 2 · Take out the common bracket"
         },
         "math": "=(4x-3y)(2x+7y)-3x(4x-3y)",
         "zh": "兩項合併後是同一個括號乘以 $(2x+7y-3x)$。",
         "en": "Both terms are the same bracket multiplied by $(2x+7y-3x)$."
        },
        {
         "title": {
          "zh": "第 3 步 · 化簡括號內",
          "en": "Step 3 · Simplify inside the bracket"
         },
         "math": "=(4x-3y)(-x+7y)",
         "zh": "$2x-3x=-x$，所以係數是 $-x+7y$。",
         "en": "$2x-3x=-x$, so the bracket becomes $-x+7y$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$x^{2}$ 項的係數是 $20$；原式同一項的係數是 $-4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $x^{2}$ is $20$; the original coefficient is $-4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$x y$ 項的係數是 $-31$；原式同一項的係數是 $31$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $x y$ is $-31$; the original coefficient is $31$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$x^{2}$ 項的係數是 $20$；原式同一項的係數是 $-4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $x^{2}$ is $20$; the original coefficient is $-4$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "看到 $(12x-9y)$ 就問一句：它是不是某個括號的倍數？$12x-9y=3(4x-3y)$ —— 這是卷二的常見陷阱。",
        "en": "When you see $(12x-9y)$, ask whether it is a multiple of another bracket: $12x-9y=3(4x-3y)$. A classic Paper 2 trap."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m09",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q9",
      "source": "WS01 · DSE Paper 2 MC Q9 · [HKDSE 2020 Paper 2 Q4]",
      "stem": {
       "en": "Factorize $(7u-4v)(5u-6v)-3u(10u-12v)$.",
       "zh": "因式分解 $(7u-4v)(5u-6v)-3u(10u-12v)$。"
      },
      "options": {
       "A": "$(5u + 6v)(u + 4v)$",
       "B": "$(5u + 6v)(13u + 4v)$",
       "C": "$(5u - 6v)(u - 4v)$",
       "D": "$(5u - 6v)(13u - 4v)$"
      },
      "answer": "C",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：先製造共同括號",
          "en": "Step 1 · Make a common bracket appear"
         },
         "math": "(7u-4v)(5u-6v)-3u(10u-12v)",
         "zh": "$10u-12v=2(5u-6v)$，所以 $3u(10u-12v)=6u(5u-6v)$，與前面共用 $(5u-6v)$。",
         "en": "$10u-12v=2(5u-6v)$, so $3u(10u-12v)=6u(5u-6v)$, sharing the bracket $(5u-6v)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽走共同括號",
          "en": "Step 2 · Take out the common bracket"
         },
         "math": "=(5u-6v)(7u-4v-6u)",
         "zh": "第一個括號 $(7u-4v)$ 減去 $6u$。",
         "en": "From the first bracket $(7u-4v)$ subtract $6u$."
        },
        {
         "title": {
          "zh": "第 3 步 · 化簡括號內",
          "en": "Step 3 · Simplify inside"
         },
         "math": "=(5u-6v)(u-4v)",
         "zh": "$7u-6u=u$，所以係數是 $u-4v$。",
         "en": "$7u-6u=u$, so the bracket is $u-4v$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$u v$ 項的係數是 $26$；原式同一項的係數是 $-26$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $u v$ is $26$; the original coefficient is $-26$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$u^{2}$ 項的係數是 $65$；原式同一項的係數是 $5$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $u^{2}$ is $65$; the original coefficient is $5$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$u^{2}$ 項的係數是 $65$；原式同一項的係數是 $5$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $u^{2}$ is $65$; the original coefficient is $5$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "減號在括號前面，抽出公因式後，整個餘下括號仍要被減去。展開核對每一項的符號。",
        "en": "A minus before a group still applies to the whole remainder after factoring. Expand to check the sign of every term."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01b-m10",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q10",
      "source": "WS01 · DSE Paper 2 MC Q10 · [HKDSE 2016 Paper 2 Q3]",
      "stem": {
       "en": "Factorize $36-(3x-2y)^{2}$.",
       "zh": "因式分解 $36-(3x-2y)^{2}$。"
      },
      "options": {
       "A": "$(6 - 3x - 2y)(6 + 3x + 2y)$",
       "B": "$(6 - 3x - 2y)(6 + 3x - 2y)$",
       "C": "$(6 - 3x + 2y)(6 + 3x + 2y)$",
       "D": "$(6 - 3x + 2y)(6 + 3x - 2y)$"
      },
      "answer": "D",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：平方差",
          "en": "Step 1 · Recognise the difference of two squares"
         },
         "math": "36-(3x-2y)^{2}=6^{2}-(3x-2y)^{2}",
         "zh": "$36=6^{2}$，整條就是 $a^{2}-b^{2}$ 的形態（$a=6$，$b=3x-2y$）。",
         "en": "$36=6^{2}$, so the whole expression has the form $a^{2}-b^{2}$ with $a=6$, $b=3x-2y$."
        },
        {
         "title": {
          "zh": "第 2 步 · 套公式：$a^{2}-b^{2}=(a+b)(a-b)$",
          "en": "Step 2 · Apply $a^{2}-b^{2}=(a+b)(a-b)$"
         },
         "math": "=(6-(3x-2y))(6+(3x-2y))",
         "zh": "$b$ 是整條 $(3x-2y)$，所以要加括號：$6-b$ 與 $6+b$。",
         "en": "$b$ is the whole bracket $(3x-2y)$, so keep it in brackets: $6-b$ and $6+b$."
        },
        {
         "title": {
          "zh": "第 3 步 · 拆括號（小心負號）",
          "en": "Step 3 · Remove the brackets (watch the minus)"
         },
         "math": "=(6-3x+2y)(6+3x-2y)",
         "zh": "$6-(3x-2y)=6-3x+2y$：括號前面是減號，$2y$ 要變號。",
         "en": "$6-(3x-2y)=6-3x+2y$: the minus in front flips the sign of $2y$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$x y$ 項的係數是 $-12$；原式同一項的係數是 $12$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $x y$ is $-12$; the original coefficient is $12$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$x y$ 項的係數是 $0$；原式同一項的係數是 $12$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $x y$ is $0$; the original coefficient is $12$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$x y$ 項的係數是 $0$；原式同一項的係數是 $12$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $x y$ is $0$; the original coefficient is $12$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "平方差題：先把兩邊都寫成「某個整體」的平方（$36=6^{2}$），再套公式；括號千萬不要拆散。",
        "en": "Difference of two squares: first write both parts as squares of a single object ($36=6^{2}$), then apply the identity — never split the bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m11",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q11",
      "source": "WS01 · DSE Paper 2 MC Q11 · [HKDSE 2016 Paper 2 Q3]",
      "stem": {
       "en": "Factorize $49-(4r-3s)^{2}$.",
       "zh": "因式分解 $49-(4r-3s)^{2}$。"
      },
      "options": {
       "A": "$(7 - 4r - 3s)(7 + 4r - 3s)$",
       "B": "$(7 - 4r - 3s)(7 + 4r + 3s)$",
       "C": "$(7 - 4r + 3s)(7 + 4r - 3s)$",
       "D": "$(7 - 4r + 3s)(7 + 4r + 3s)$"
      },
      "answer": "C",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：平方差",
          "en": "Step 1 · Recognise the difference of two squares"
         },
         "math": "49-(4r-3s)^{2}=7^{2}-(4r-3s)^{2}",
         "zh": "$49=7^{2}$，$a=7$、$b=4r-3s$。",
         "en": "$49=7^{2}$, with $a=7$ and $b=4r-3s$."
        },
        {
         "title": {
          "zh": "第 2 步 · 套公式",
          "en": "Step 2 · Apply the identity"
         },
         "math": "=(7-(4r-3s))(7+(4r-3s))",
         "zh": "$(a+b)(a-b)$，$b$ 保留括號。",
         "en": "$(a+b)(a-b)$, keeping $b$ in its bracket."
        },
        {
         "title": {
          "zh": "第 3 步 · 拆括號",
          "en": "Step 3 · Remove the brackets"
         },
         "math": "=(7-4r+3s)(7+4r-3s)",
         "zh": "$7-(4r-3s)=7-4r+3s$（$-3s$ 變 $+3s$）；第二個括號直接去掉：$7+4r-3s$。",
         "en": "$7-(4r-3s)=7-4r+3s$ (the $-3s$ becomes $+3s$); the second bracket just opens: $7+4r-3s$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$r s$ 項的係數是 $0$；原式同一項的係數是 $24$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $r s$ is $0$; the original coefficient is $24$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$r s$ 項的係數是 $-24$；原式同一項的係數是 $24$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $r s$ is $-24$; the original coefficient is $24$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$r s$ 項的係數是 $0$；原式同一項的係數是 $24$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $r s$ is $0$; the original coefficient is $24$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "把 $49$ 寫成 $7^{2}$，再用平方差。拆開減法括號時，括號內每一項都要變號。",
        "en": "Write $49=7^{2}$ before using the difference of squares. Subtracting a bracket changes every sign inside it."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m12",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q12",
      "source": "WS01 · DSE Paper 2 MC Q12 · [HKDSE 2012 Paper 2 Q2]",
      "stem": {
       "en": "Factorize $(3p+q)^{2}-(3p-q)^{2}$.",
       "zh": "因式分解 $(3p+q)^{2}-(3p-q)^{2}$。"
      },
      "options": {
       "A": "$0$",
       "B": "$2q^{2}$",
       "C": "$6pq$",
       "D": "$12pq$"
      },
      "answer": "D",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：平方差（也可展開）",
          "en": "Step 1 · Spot the difference of two squares"
         },
         "math": "(3p+q)^{2}-(3p-q)^{2}",
         "zh": "$a=3p+q$、$b=3p-q$：這是 $a^{2}-b^{2}$，可用平方差公式。",
         "en": "With $a=3p+q$ and $b=3p-q$ this is $a^{2}-b^{2}$, so the identity is quickest."
        },
        {
         "title": {
          "zh": "第 2 步 · 用 $a^{2}-b^{2}=(a+b)(a-b)$",
          "en": "Step 2 · Use $a^{2}-b^{2}=(a+b)(a-b)$"
         },
         "math": "=((3p+q)+(3p-q))((3p+q)-(3p-q))",
         "zh": "先寫成兩個括號相乘，才化簡。",
         "en": "Write it as a product of two brackets first, then simplify."
        },
        {
         "title": {
          "zh": "第 3 步 · 化簡",
          "en": "Step 3 · Simplify"
         },
         "math": "=(6p)(2q)=12pq",
         "zh": "$3p+q+3p-q=6p$；$3p+q-3p+q=2q$。乘起來是 $12pq$。",
         "en": "$3p+q+3p-q=6p$ and $3p+q-3p+q=2q$; multiplying gives $12pq$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$p q$ 項的係數是 $0$；原式同一項的係數是 $12$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $p q$ is $0$; the original coefficient is $12$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$p q$ 項的係數是 $0$；原式同一項的係數是 $12$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $p q$ is $0$; the original coefficient is $12$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$p q$ 項的係數是 $6$；原式同一項的係數是 $12$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $p q$ is $6$; the original coefficient is $12$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "兩個平方相減，用平方差比展開快很多，而且不易錯符號。",
        "en": "For a difference of two squares the identity beats expanding — faster and fewer sign slips."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01b-m13",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q13",
      "source": "WS01 · DSE Paper 2 MC Q13 · [HKDSE 2012 Paper 2 Q2]（選項 A 由 OCR 缺字重建，請覆核）",
      "stem": {
       "en": "Factorize $(2a-5b)^{2}-(2a+5b)^{2}$.",
       "zh": "因式分解 $(2a-5b)^{2}-(2a+5b)^{2}$。"
      },
      "options": {
       "A": "$-10ab$",
       "B": "$-20ab$",
       "C": "$-40ab$",
       "D": "$-50b^{2}$"
      },
      "answer": "C",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：平方差",
          "en": "Step 1 · Spot the difference of two squares"
         },
         "math": "(2a-5b)^{2}-(2a+5b)^{2}",
         "zh": "把 $U=2a-5b$、$V=2a+5b$ 各當成一整塊，套用 $U^{2}-V^{2}=(U+V)(U-V)$。",
         "en": "Treat $U=2a-5b$ and $V=2a+5b$ as whole expressions and use $U^{2}-V^{2}=(U+V)(U-V)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 先化簡兩個括號",
          "en": "Step 2 · Simplify the two brackets first"
         },
         "math": "=((2a-5b)+(2a+5b))((2a-5b)-(2a+5b))",
         "zh": "第一個括號相加、第二個相減。",
         "en": "Add in the first bracket, subtract in the second."
        },
        {
         "title": {
          "zh": "第 3 步 · 化簡",
          "en": "Step 3 · Simplify"
         },
         "math": "=(4a)(-10b)=-40ab",
         "zh": "$2a-5b+2a+5b=4a$；$2a-5b-2a-5b=-10b$。$4a\\times(-10b)=-40ab$。",
         "en": "$2a-5b+2a+5b=4a$ and $2a-5b-2a-5b=-10b$, so $4a\\times(-10b)=-40ab$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$a b$ 項的係數是 $-10$；原式同一項的係數是 $-40$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $a b$ is $-10$; the original coefficient is $-40$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$a b$ 項的係數是 $-20$；原式同一項的係數是 $-40$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $a b$ is $-20$; the original coefficient is $-40$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$a b$ 項的係數是 $0$；原式同一項的係數是 $-40$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $a b$ is $0$; the original coefficient is $-40$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "先用公式化簡括號，最後才乘係數 —— 這樣就不會漏乘。",
        "en": "Simplify the brackets with the identity first, multiply the coefficients last — nothing gets missed."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m14",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q14",
      "source": "WS01 · DSE Paper 2 MC Q14 · [HKDSE 2017 Paper 2 Q1]",
      "stem": {
       "en": "Factorize $x^{2}+xy-2y^{2}+x-y$.",
       "zh": "因式分解 $x^{2}+xy-2y^{2}+x-y$。"
      },
      "options": {
       "A": "$(x - y)(x - 2y + 1)$",
       "B": "$(x - y)(x + 2y + 1)$",
       "C": "$(x + y)(x - 2y - 1)$",
       "D": "$(x + y)(x + 2y - 1)$"
      },
      "answer": "B",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：前三項是二次三項式，先十字相乘",
          "en": "Step 1 · The first three terms are a quadratic: use the cross-method"
         },
         "math": "x^{2}+xy-2y^{2}+x-y",
         "zh": "把 $x^{2}+xy-2y^{2}$ 分解：交叉相乘 $(x)(2y)+(-y)(x)=2xy-xy=xy$ ✓",
         "en": "Factorize $x^{2}+xy-2y^{2}$: the cross products give $(x)(2y)+(-y)(x)=2xy-xy=xy$ ✓"
        },
        {
         "title": {
          "zh": "第 2 步 · 留意最後兩項 $+x-y$",
          "en": "Step 2 · Look at the last two terms $+x-y$"
         },
         "math": "=(x-y)(x+2y)+(x-y)",
         "zh": "$+x-y=+(x-y)$：就是 $(x-y)$ 這個括號本身。",
         "en": "$+x-y=+(x-y)$, which is exactly the bracket $(x-y)$."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走 $(x-y)$",
          "en": "Step 3 · Take out $(x-y)$"
         },
         "math": "=(x-y)(x+2y+1)",
         "zh": "抽走 $(x-y)$，剩下 $(x+2y)$ 與 $+1$。",
         "en": "Take out $(x-y)$; what remains is $(x+2y)$ and $+1$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$x y$ 項的係數是 $-3$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $x y$ is $-3$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$x y$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $x y$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$x y$ 項的係數是 $3$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $x y$ is $3$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "這個五項式可分成「三項＋兩項」：先分解二次部分，再檢查餘下兩項是否含相同因式。",
        "en": "Group these five terms as a trinomial and a pair. Factor the quadratic part, then check whether the pair shares one of its factors."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m15",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q15",
      "source": "WS01 · DSE Paper 2 MC Q15 · [HKDSE 2017 Paper 2 Q1]",
      "stem": {
       "en": "Factorize $x^{2}-3xy-10y^{2}+3x-15y$.",
       "zh": "因式分解 $x^{2}-3xy-10y^{2}+3x-15y$。"
      },
      "options": {
       "A": "$(x - 5y)(x + 2y + 3)$",
       "B": "$(x - 5y)(x + 2y - 3)$",
       "C": "$(x + 5y)(x - 2y + 3)$",
       "D": "$(x + 5y)(x - 2y - 3)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 前三項：十字相乘",
          "en": "Step 1 · First three terms: cross-method"
         },
         "math": "x^{2}-3xy-10y^{2}+3x-15y",
         "zh": "交叉相乘 $(x)(2y)+(-5y)(x)=2xy-5xy=-3xy$ ✓ 與題目的 $-3xy$ 相符。",
         "en": "The cross products $(x)(2y)+(-5y)(x)=2xy-5xy=-3xy$ ✓ matching the given $-3xy$."
        },
        {
         "title": {
          "zh": "第 2 步 · 後兩項：抽出同一個括號",
          "en": "Step 2 · Last two terms: factor out the same bracket"
         },
         "math": "=(x-5y)(x+2y)+3(x-5y)",
         "zh": "$+3x-15y=+3(x-5y)$：正是前面那個括號的 $3$ 倍。",
         "en": "$+3x-15y=+3(x-5y)$, exactly three times the bracket found above."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走 $(x-5y)$",
          "en": "Step 3 · Take out $(x-5y)$"
         },
         "math": "=(x-5y)(x+2y+3)",
         "zh": "抽走 $(x-5y)$，剩下 $(x+2y)$ 與 $+3$。",
         "en": "Take out $(x-5y)$; what remains is $(x+2y)$ and $+3$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$x$ 項的係數是 $-3$；原式同一項的係數是 $3$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $x$ is $-3$; the original coefficient is $3$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$x y$ 項的係數是 $3$；原式同一項的係數是 $-3$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $x y$ is $3$; the original coefficient is $-3$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$x y$ 項的係數是 $3$；原式同一項的係數是 $-3$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $x y$ is $3$; the original coefficient is $-3$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "這個五項式可分成「三項＋兩項」：先分解二次部分，再檢查餘下兩項是否含相同因式。",
        "en": "Group these five terms as a trinomial and a pair. Factor the quadratic part, then check whether the pair shares one of its factors."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01b-m16",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q16",
      "source": "WS01 · DSE Paper 2 MC Q16 · [HKDSE 2017 Paper 2 Q1]",
      "stem": {
       "en": "Factorize $5a^{2}-8ab+3b^{2}+b-a$.",
       "zh": "因式分解 $5a^{2}-8ab+3b^{2}+b-a$。"
      },
      "options": {
       "A": "$(a - b)(5a - 3b - 1)$",
       "B": "$(a - b)(5a + 3b - 1)$",
       "C": "$(a + b)(5a - 3b + 1)$",
       "D": "$(a + b)(5a + 3b - 1)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 前三項：十字相乘",
          "en": "Step 1 · First three terms: cross-method"
         },
         "math": "5a^{2}-8ab+3b^{2}+b-a",
         "zh": "交叉相乘 $(a)(-3b)+(-b)(5a)=-3ab-5ab=-8ab$ ✓",
         "en": "The cross products $(a)(-3b)+(-b)(5a)=-3ab-5ab=-8ab$ ✓"
        },
        {
         "title": {
          "zh": "第 2 步 · 後兩項：$b-a=-(a-b)$",
          "en": "Step 2 · Last two terms: $b-a=-(a-b)$"
         },
         "math": "=(a-b)(5a-3b)-(a-b)",
         "zh": "$+b-a=-(a-b)$：抽 $-1$ 出來，括號就與前面相同。",
         "en": "$+b-a=-(a-b)$: taking out $-1$ makes this bracket identical to the first."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走 $(a-b)$",
          "en": "Step 3 · Take out $(a-b)$"
         },
         "math": "=(a-b)(5a-3b-1)",
         "zh": "抽走 $(a-b)$，剩下 $(5a-3b)$ 與 $-1$。",
         "en": "Take out $(a-b)$; what remains is $(5a-3b)$ and $-1$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$a b$ 項的係數是 $-2$；原式同一項的係數是 $-8$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $a b$ is $-2$; the original coefficient is $-8$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$a b$ 項的係數是 $2$；原式同一項的係數是 $-8$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $a b$ is $2$; the original coefficient is $-8$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$a b$ 項的係數是 $8$；原式同一項的係數是 $-8$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $a b$ is $8$; the original coefficient is $-8$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "「$-a+b$」這類倒轉的兩項，一律寫成 $-(a-b)$，之後就對得上。",
        "en": "When two terms such as $-a+b$ appear reversed, write them as $-(a-b)$ and the brackets will match."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m17",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q17",
      "source": "WS01 · DSE Paper 2 MC Q17 · [HKDSE Sample Paper 2 Q3]",
      "stem": {
       "en": "Factorize $x^{2}-y^{2}+4y-4$.",
       "zh": "因式分解 $x^{2}-y^{2}+4y-4$。"
      },
      "options": {
       "A": "$(x - y - 2)(x + y - 2)$",
       "B": "$(x - y - 2)(x + y + 2)$",
       "C": "$(x - y + 2)(x + y - 2)$",
       "D": "$(x - y + 2)(x - y - 2)$"
      },
      "answer": "C",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：先製造平方差",
          "en": "Step 1 · Create a difference of two squares"
         },
         "math": "x^{2}-y^{2}+4y-4=x^{2}-(y^{2}-4y+4)",
         "zh": "把後三項一齊加括號並在前面加負號：$-y^{2}+4y-4=-(y^{2}-4y+4)$。",
         "en": "Bracket the last three terms with a minus in front: $-y^{2}+4y-4=-(y^{2}-4y+4)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 括號內是完全平方",
          "en": "Step 2 · The bracket is a perfect square"
         },
         "math": "=x^{2}-(y-2)^{2}",
         "zh": "$y^{2}-4y+4=(y)^{2}-2(y)(2)+2^{2}=(y-2)^{2}$。",
         "en": "$y^{2}-4y+4=(y)^{2}-2(y)(2)+2^{2}=(y-2)^{2}$."
        },
        {
         "title": {
          "zh": "第 3 步 · 平方差",
          "en": "Step 3 · Difference of two squares"
         },
         "math": "=(x-(y-2))(x+(y-2))=(x-y+2)(x+y-2)",
         "zh": "$a=x$、$b=y-2$；拆括號時只有「減那個」變號：$x-y+2$。",
         "en": "With $a=x$ and $b=y-2$: only the subtracted bracket flips sign, giving $x-y+2$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$x$ 項的係數是 $-4$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $x$ is $-4$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$y$ 項的係數是 $-4$；原式同一項的係數是 $4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $y$ is $-4$; the original coefficient is $4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$x y$ 項的係數是 $-2$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $x y$ is $-2$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "$x^{2}-(\\;)^{2}$ 的關鍵是「先製造平方」：後三項抽成 $-(y-2)^{2}$。",
        "en": "For $x^{2}-(\\;)^{2}$, first create the square: the last three terms become $-(y-2)^{2}$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m18",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q18",
      "source": "WS01 · DSE Paper 2 MC Q18 · [HKDSE Sample Paper 2 Q3]",
      "stem": {
       "en": "Factorize $m^{2}-9n^{2}-6n-1$.",
       "zh": "因式分解 $m^{2}-9n^{2}-6n-1$。"
      },
      "options": {
       "A": "$(m + 3n + 1)(m - 3n - 1)$",
       "B": "$(m - 3n + 1)(m + 3n - 1)$",
       "C": "$(m + 3n + 1)(m - 3n + 1)$",
       "D": "$(m - 3n + 1)(m - 3n - 1)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：先製造平方差",
          "en": "Step 1 · Create a difference of two squares"
         },
         "math": "m^{2}-9n^{2}-6n-1=m^{2}-(9n^{2}+6n+1)",
         "zh": "把最後三項一齊加括號並在前面加負號。",
         "en": "Bracket the final three terms with a minus in front."
        },
        {
         "title": {
          "zh": "第 2 步 · 括號內是完全平方",
          "en": "Step 2 · The bracket is a perfect square"
         },
         "math": "=m^{2}-(3n+1)^{2}",
         "zh": "$9n^{2}+6n+1=(3n)^{2}+2(3n)(1)+1^{2}=(3n+1)^{2}$。",
         "en": "$9n^{2}+6n+1=(3n)^{2}+2(3n)(1)+1^{2}=(3n+1)^{2}$."
        },
        {
         "title": {
          "zh": "第 3 步 · 平方差",
          "en": "Step 3 · Difference of two squares"
         },
         "math": "=(m+(3n+1))(m-(3n+1))\n=(m+3n+1)(m-3n-1)",
         "zh": "$a=m$、$b=3n+1$；$m-(3n+1)=m-3n-1$（負號要整條分配）。",
         "en": "With $a=m$ and $b=3n+1$: $m-(3n+1)=m-3n-1$ — the minus applies to the whole bracket."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$n$ 項的係數是 $6$；原式同一項的係數是 $-6$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $n$ is $6$; the original coefficient is $-6$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$m$ 項的係數是 $2$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $m$ is $2$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$m n$ 項的係數是 $-6$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $m n$ is $-6$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "「$\\square-\\triangle$」型的四項題：三項抽成一個平方，再用平方差；括號內的符號只變一次。",
        "en": "For four-term questions of the shape $\\square-\\triangle$: make three terms into a square, then use the difference of two squares — the signs flip only once."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01b-m19",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q19",
      "source": "WS01 · DSE Paper 2 MC Q19 · [HKDSE Sample Paper 2 Q3]",
      "stem": {
       "en": "Factorize $16-4a^{2}+20ab-25b^{2}$.",
       "zh": "因式分解 $16-4a^{2}+20ab-25b^{2}$。"
      },
      "options": {
       "A": "$(4 - 2a + 5b)(4 - 2a - 5b)$",
       "B": "$(4 - 2a + 5b)(4 + 2a - 5b)$",
       "C": "$(4 - 2a - 5b)(4 + 2a + 5b)$",
       "D": "$(4 - 2a - 5b)(4 + 2a - 5b)$"
      },
      "answer": "B",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認題：先製造平方差",
          "en": "Step 1 · Create a difference of two squares"
         },
         "math": "16-4a^{2}+20ab-25b^{2}\n=4^{2}-(4a^{2}-20ab+25b^{2})",
         "zh": "$-4a^{2}+20ab-25b^{2}=-(4a^{2}-20ab+25b^{2})$：三項同時變號。",
         "en": "$-4a^{2}+20ab-25b^{2}=-(4a^{2}-20ab+25b^{2})$ — all three signs flip."
        },
        {
         "title": {
          "zh": "第 2 步 · 括號內是完全平方",
          "en": "Step 2 · The bracket is a perfect square"
         },
         "math": "=4^{2}-(2a-5b)^{2}",
         "zh": "$4a^{2}-20ab+25b^{2}=(2a)^{2}-2(2a)(5b)+(5b)^{2}=(2a-5b)^{2}$。",
         "en": "$4a^{2}-20ab+25b^{2}=(2a)^{2}-2(2a)(5b)+(5b)^{2}=(2a-5b)^{2}$."
        },
        {
         "title": {
          "zh": "第 3 步 · 平方差",
          "en": "Step 3 · Difference of two squares"
         },
         "math": "=(4-(2a-5b))(4+(2a-5b))\n=(4-2a+5b)(4+2a-5b)",
         "zh": "$4-(2a-5b)=4-2a+5b$：$-5b$ 變 $+5b$。",
         "en": "$4-(2a-5b)=4-2a+5b$: the $-5b$ becomes $+5b$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$a^{2}$ 項的係數是 $4$；原式同一項的係數是 $-4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $a^{2}$ is $4$; the original coefficient is $-4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$a b$ 項的係數是 $-20$；原式同一項的係數是 $20$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $a b$ is $-20$; the original coefficient is $20$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$a b$ 項的係數是 $0$；原式同一項的係數是 $20$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $a b$ is $0$; the original coefficient is $20$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "平方差前必先確認「括號內是完全平方」：交叉項 $20ab=2(2a)(5b)$。",
        "en": "Before using the difference of two squares, confirm the bracket is a perfect square: $20ab=2(2a)(5b)$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m20",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q20",
      "source": "WS01 · DSE Paper 2 MC Q20 · [HKDSE Practice Paper 2 Q3]",
      "stem": {
       "en": "Factorize $x^{2}-y^{2}-x+y$.",
       "zh": "因式分解 $x^{2}-y^{2}-x+y$。"
      },
      "options": {
       "A": "$(x - y)(x + y - 1)$",
       "B": "$(x - y)(x - y - 1)$",
       "C": "$(x + y)(x + y - 1)$",
       "D": "$(x + y)(x - y + 1)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 平方差",
          "en": "Step 1 · Difference of two squares"
         },
         "math": "x^{2}-y^{2}-x+y=(x-y)(x+y)-(x-y)",
         "zh": "$x^{2}-y^{2}=(x-y)(x+y)$；而 $-x+y=-(x-y)$。",
         "en": "$x^{2}-y^{2}=(x-y)(x+y)$ and $-x+y=-(x-y)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽走 $(x-y)$",
          "en": "Step 2 · Take out $(x-y)$"
         },
         "math": "=(x-y)(x+y-1)",
         "zh": "抽走之後剩下 $(x+y)$ 與 $-1$。",
         "en": "What remains after taking it out is $(x+y)$ and $-1$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$x y$ 項的係數是 $-2$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $x y$ is $-2$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$x y$ 項的係數是 $2$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $x y$ is $2$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$x$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $x$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "見到 $x^{2}-y^{2}$ 先平方差，剩下的項再抽同一個括號 —— 卷二很多題都是這兩步。",
        "en": "When you see $x^{2}-y^{2}$, do the difference of two squares first and then factor the same bracket out of what is left."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m21",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q21",
      "source": "WS01 · DSE Paper 2 MC Q21 · [HKDSE 2014 Paper 2 Q2]",
      "stem": {
       "en": "Factorize $u^{2}-v^{2}-3u-3v$.",
       "zh": "因式分解 $u^{2}-v^{2}-3u-3v$。"
      },
      "options": {
       "A": "$(u + v)(u - v - 3)$",
       "B": "$(u + v)(u + v - 3)$",
       "C": "$(u - v)(u - v + 3)$",
       "D": "$(u - v)(u + v - 3)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 平方差",
          "en": "Step 1 · Difference of two squares"
         },
         "math": "u^{2}-v^{2}-3u-3v=(u+v)(u-v)-3(u+v)",
         "zh": "$-(3u+3v)=-3(u+v)$：負號連 $-3$ 一起抽出。",
         "en": "$-(3u+3v)=-3(u+v)$: the minus goes out together with $-3$."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽走 $(u+v)$",
          "en": "Step 2 · Take out $(u+v)$"
         },
         "math": "=(u+v)(u-v-3)",
         "zh": "抽走 $(u+v)$，剩下 $(u-v)$ 與 $-3$。",
         "en": "Take out $(u+v)$; what remains is $(u-v)$ and $-3$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$u v$ 項的係數是 $2$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $u v$ is $2$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$u v$ 項的係數是 $-2$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $u v$ is $-2$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$v$ 項的係數是 $3$；原式同一項的係數是 $-3$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $v$ is $3$; the original coefficient is $-3$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "負號在整組前面（$-3u-3v$）就抽一個負公因式：$-3(u+v)$，這樣兩項才對得上。",
        "en": "When a minus covers a whole pair ($-3u-3v$), factor out a negative: $-3(u+v)$ — then both terms match."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01b-m22",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q22",
      "source": "WS01 · DSE Paper 2 MC Q22 · [HKDSE 2014 Paper 2 Q2]",
      "stem": {
       "en": "Factorize $4p^{2}-q^{2}+8p-4q$.",
       "zh": "因式分解 $4p^{2}-q^{2}+8p-4q$。"
      },
      "options": {
       "A": "$(2p + q)(2p - q - 4)$",
       "B": "$(2p + q)(2p - q + 4)$",
       "C": "$(2p - q)(2p + q + 4)$",
       "D": "$(2p - q)(2p + q - 4)$"
      },
      "answer": "C",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 平方差",
          "en": "Step 1 · Difference of two squares"
         },
         "math": "4p^{2}-q^{2}+8p-4q=(2p-q)(2p+q)+4(2p-q)",
         "zh": "$4p^{2}-q^{2}=(2p-q)(2p+q)$；而 $+8p-4q=+4(2p-q)$。",
         "en": "$4p^{2}-q^{2}=(2p-q)(2p+q)$ and $+8p-4q=+4(2p-q)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽走 $(2p-q)$",
          "en": "Step 2 · Take out $(2p-q)$"
         },
         "math": "=(2p-q)(2p+q+4)",
         "zh": "抽走 $(2p-q)$，剩下 $(2p+q)$ 與 $+4$。",
         "en": "Take out $(2p-q)$; what remains is $(2p+q)$ and $+4$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$p$ 項的係數是 $-8$；原式同一項的係數是 $8$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $p$ is $-8$; the original coefficient is $8$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$q$ 項的係數是 $4$；原式同一項的係數是 $-4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $q$ is $4$; the original coefficient is $-4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$p$ 項的係數是 $-8$；原式同一項的係數是 $8$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $p$ is $-8$; the original coefficient is $8$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "$+8p-4q$ 這種兩項，先抽 $4$ 看看能不能變成前面那個括號。",
        "en": "For a pair such as $+8p-4q$, take out $4$ and check whether it becomes the earlier bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m23",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q23",
      "source": "WS01 · DSE Paper 2 MC Q23 · [HKDSE 2014 Paper 2 Q2]",
      "stem": {
       "en": "Factorize $9m^{2}-4n^{2}-6m-4n$.",
       "zh": "因式分解 $9m^{2}-4n^{2}-6m-4n$。"
      },
      "options": {
       "A": "$(3m - 2n)(3m + 2n - 2)$",
       "B": "$(3m + 2n)(3m - 2n + 2)$",
       "C": "$(3m - 2n)(3m + 2n + 2)$",
       "D": "$(3m + 2n)(3m - 2n - 2)$"
      },
      "answer": "D",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 平方差",
          "en": "Step 1 · Difference of two squares"
         },
         "math": "9m^{2}-4n^{2}-6m-4n\n=(3m+2n)(3m-2n)-2(3m+2n)",
         "zh": "$9m^{2}-4n^{2}=(3m+2n)(3m-2n)$；$-(6m+4n)=-2(3m+2n)$。",
         "en": "$9m^{2}-4n^{2}=(3m+2n)(3m-2n)$ and $-(6m+4n)=-2(3m+2n)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽走 $(3m+2n)$",
          "en": "Step 2 · Take out $(3m+2n)$"
         },
         "math": "=(3m+2n)(3m-2n-2)",
         "zh": "抽走 $(3m+2n)$，剩下 $(3m-2n)$ 與 $-2$。",
         "en": "Take out $(3m+2n)$; what remains is $(3m-2n)$ and $-2$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$n$ 項的係數是 $4$；原式同一項的係數是 $-4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $n$ is $4$; the original coefficient is $-4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$m$ 項的係數是 $6$；原式同一項的係數是 $-6$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $m$ is $6$; the original coefficient is $-6$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$m$ 項的係數是 $6$；原式同一項的係數是 $-6$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $m$ is $6$; the original coefficient is $-6$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "先平方差、後抽公因式：$-(6m+4n)$ 抽 $-2$ 就可以對上 $(3m+2n)$。",
        "en": "Difference of two squares first, then factor: taking $-2$ out of $-(6m+4n)$ matches $(3m+2n)$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m24",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q24",
      "source": "WS01 · DSE Paper 2 MC Q24 · [HKDSE 2022 Paper 2 Q1]",
      "stem": {
       "en": "Factorize $a^{2}+a-b^{2}-b$.",
       "zh": "因式分解 $a^{2}+a-b^{2}-b$。"
      },
      "options": {
       "A": "$(a + b)(a - b + 1)$",
       "B": "$(a + b)(a - b - 1)$",
       "C": "$(a - b)(a + b + 1)$",
       "D": "$(a - b)(a + b - 1)$"
      },
      "answer": "C",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 調位再平方差",
          "en": "Step 1 · Rearrange and use the difference of two squares"
         },
         "math": "a^{2}+a-b^{2}-b=a^{2}-b^{2}+a-b",
         "zh": "把 $a^{2}$ 與 $-b^{2}$ 拉在一起：$a^{2}-b^{2}=(a-b)(a+b)$。",
         "en": "Pull $a^{2}$ and $-b^{2}$ together: $a^{2}-b^{2}=(a-b)(a+b)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 剩下兩項抽公因式",
          "en": "Step 2 · Factor what is left"
         },
         "math": "=(a-b)(a+b)+(a-b)",
         "zh": "$+a-b=+(a-b)$，正是前面那個括號。",
         "en": "$+a-b=+(a-b)$, exactly the bracket above."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走 $(a-b)$",
          "en": "Step 3 · Take out $(a-b)$"
         },
         "math": "=(a-b)(a+b+1)",
         "zh": "抽走 $(a-b)$，剩下 $(a+b)$ 與 $+1$。",
         "en": "Take out $(a-b)$; what remains is $(a+b)$ and $+1$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$b$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $b$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "B",
         "zh": "選項 B 展開後，$a$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $a$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$a$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $a$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "四項題先「調位」：把能配成平方差的兩項放在一起，通常就通了。",
        "en": "For four terms, rearrange first: put the two terms that form a difference of two squares together."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws01b-m25",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 2,
      "code": "WS1C-Q25",
      "source": "WS01 · DSE Paper 2 MC Q25 · [HKDSE 2022 Paper 2 Q1]",
      "stem": {
       "en": "Factorize $m^{2}+n-m-n^{2}$.",
       "zh": "因式分解 $m^{2}+n-m-n^{2}$。"
      },
      "options": {
       "A": "$(m - n)(m + n + 1)$",
       "B": "$(m - n)(m + n - 1)$",
       "C": "$(m + n)(m - n + 1)$",
       "D": "$(m + n)(m - n - 1)$"
      },
      "answer": "B",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 調位再平方差",
          "en": "Step 1 · Rearrange and use the difference of two squares"
         },
         "math": "m^{2}+n-m-n^{2}=m^{2}-n^{2}-m+n",
         "zh": "$m^{2}-n^{2}=(m-n)(m+n)$。",
         "en": "$m^{2}-n^{2}=(m-n)(m+n)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 剩下兩項抽負公因式",
          "en": "Step 2 · Factor the remaining pair"
         },
         "math": "=(m-n)(m+n)-(m-n)",
         "zh": "$-m+n=-(m-n)$：抽 $-1$ 出來才對得上。",
         "en": "$-m+n=-(m-n)$: taking out $-1$ makes it match."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走 $(m-n)$",
          "en": "Step 3 · Take out $(m-n)$"
         },
         "math": "=(m-n)(m+n-1)",
         "zh": "抽走 $(m-n)$，剩下 $(m+n)$ 與 $-1$。",
         "en": "Take out $(m-n)$; what remains is $(m+n)$ and $-1$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$m$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $m$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$m$ 項的係數是 $1$；原式同一項的係數是 $-1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $m$ is $1$; the original coefficient is $-1$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$n$ 項的係數是 $-1$；原式同一項的係數是 $1$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $n$ is $-1$; the original coefficient is $1$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "「$-m+n$」寫成 $-(m-n)$：一個負號，就令兩項對得上。",
        "en": "Write $-m+n$ as $-(m-n)$ — one minus sign makes the two terms match."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m26",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q26",
      "source": "WS01 · DSE Paper 2 MC Q26 · [HKDSE 2018 Paper 2 Q3]",
      "stem": {
       "en": "Factorize $h^{2}-4h-k^{2}+4k$.",
       "zh": "因式分解 $h^{2}-4h-k^{2}+4k$。"
      },
      "options": {
       "A": "$(h - k)(h + k - 4)$",
       "B": "$(h - k)(h + k + 4)$",
       "C": "$(h + k)(h - k - 4)$",
       "D": "$(h + k)(h - k + 4)$"
      },
      "answer": "A",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 調位再平方差",
          "en": "Step 1 · Rearrange and use the difference of two squares"
         },
         "math": "h^{2}-4h-k^{2}+4k=h^{2}-k^{2}-4h+4k",
         "zh": "$h^{2}-k^{2}=(h-k)(h+k)$；$-4h+4k=-4(h-k)$。",
         "en": "$h^{2}-k^{2}=(h-k)(h+k)$ and $-4h+4k=-4(h-k)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩項出現同一個括號",
          "en": "Step 2 · The same bracket appears twice"
         },
         "math": "=(h-k)(h+k)-4(h-k)",
         "zh": "兩項都有 $(h-k)$。",
         "en": "Both terms contain $(h-k)$."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走 $(h-k)$",
          "en": "Step 3 · Take out $(h-k)$"
         },
         "math": "=(h-k)(h+k-4)",
         "zh": "抽走 $(h-k)$，剩下 $(h+k)$ 與 $-4$。",
         "en": "Take out $(h-k)$; what remains is $(h+k)$ and $-4$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "選項 B 展開後，$h$ 項的係數是 $4$；原式同一項的係數是 $-4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option B, the coefficient of $h$ is $4$; the original coefficient is $-4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$k$ 項的係數是 $-4$；原式同一項的係數是 $4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $k$ is $-4$; the original coefficient is $4$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$h$ 項的係數是 $4$；原式同一項的係數是 $-4$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $h$ is $4$; the original coefficient is $-4$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "負號包住兩項（$-4h+4k$）→ 抽 $-4$，令它變成前面那個括號。",
        "en": "When a minus covers a pair ($-4h+4k$), take out $-4$ so that it becomes the earlier bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     },
     {
      "id": "eph-ws01b-m27",
      "type": "mc",
      "topic": "ws01b",
      "unit": 4,
      "subtopic": "factorization",
      "difficulty": 3,
      "code": "WS1C-Q27",
      "source": "WS01 · DSE Paper 2 MC Q27 · [HKDSE 2018 Paper 2 Q3]",
      "stem": {
       "en": "Factorize $m^{2}-2m-9n^{2}-6n$.",
       "zh": "因式分解 $m^{2}-2m-9n^{2}-6n$。"
      },
      "options": {
       "A": "$(m - 3n)(m - 3n + 2)$",
       "B": "$(m + 3n)(m - 3n - 2)$",
       "C": "$(m + 3n)(m - 3n + 2)$",
       "D": "$(m + 3n)(m + 3n - 2)$"
      },
      "answer": "B",
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 調位再平方差",
          "en": "Step 1 · Rearrange and use the difference of two squares"
         },
         "math": "m^{2}-2m-9n^{2}-6n=m^{2}-9n^{2}-2m-6n",
         "zh": "$m^{2}-9n^{2}=(m+3n)(m-3n)$；$-(2m+6n)=-2(m+3n)$。",
         "en": "$m^{2}-9n^{2}=(m+3n)(m-3n)$ and $-(2m+6n)=-2(m+3n)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩項出現同一個括號",
          "en": "Step 2 · The same bracket appears twice"
         },
         "math": "=(m+3n)(m-3n)-2(m+3n)",
         "zh": "兩項都有 $(m+3n)$。",
         "en": "Both terms contain $(m+3n)$."
        },
        {
         "title": {
          "zh": "第 3 步 · 抽走 $(m+3n)$",
          "en": "Step 3 · Take out $(m+3n)$"
         },
         "math": "=(m+3n)(m-3n-2)",
         "zh": "抽走 $(m+3n)$，剩下 $(m-3n)$ 與 $-2$。",
         "en": "Take out $(m+3n)$; what remains is $(m-3n)$ and $-2$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "選項 A 展開後，$m n$ 項的係數是 $-6$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option A, the coefficient of $m n$ is $-6$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "C",
         "zh": "選項 C 展開後，$m$ 項的係數是 $2$；原式同一項的係數是 $-2$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option C, the coefficient of $m$ is $2$; the original coefficient is $-2$. Recheck this coefficient when grouping or removing brackets."
        },
        {
         "opt": "D",
         "zh": "選項 D 展開後，$m n$ 項的係數是 $6$；原式同一項的係數是 $0$。回到分組或拆括號那一步，核對這個係數。",
         "en": "In the expansion of option D, the coefficient of $m n$ is $6$; the original coefficient is $0$. Recheck this coefficient when grouping or removing brackets."
        }
       ],
       "tip": {
        "zh": "先調位成 $(m^{2}-9n^{2})-(2m+6n)$，再抽 $-2$，最後抽 $(m+3n)$。",
        "en": "Rearrange to $(m^{2}-9n^{2})-(2m+6n)$, take out $-2$, then factor $(m+3n)$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：展開比對，代值可排錯",
          "en": "Check: expand to verify; substitution can reject errors"
         },
         "zh": "將因式逐項相乘，收集同類項後，核對原式中每一項的係數。代一組數得到不同值，可以排除選項；得到相同值只代表通過這一次檢查，並不能證明恆等。",
         "en": "Multiply the factors, collect like terms and compare every coefficient with the original. A numerical mismatch rejects an option. A match passes only that one numerical check and does not prove an identity."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能解釋這題用了哪個方法，並寫出關鍵一步嗎？",
        "en": "With the solution hidden, can you explain which method this question uses and write its key step?"
       }
      },
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 27,
  "long": 0,
  "cards": 2,
  "pages": 9
 }
};
