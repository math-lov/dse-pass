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
  "zh": "這一課把卷一因式分解的功夫搬去卷二（MC）。卷二題目多、時間少，所以除了「識做」，還要「快」：先看符號刪去一半選項、認出題目其實是平方差、或者先製造出共同的括號。每題都是歷屆 HKCEE／HKDSE 卷二真題，做完你就會發現它們來來去去都是同幾條路。",
  "en": "This lesson moves the factorization skills of Paper 1 into Paper 2 (multiple choice). Paper 2 has many questions and little time, so you need speed as well as understanding: read the signs to delete half the options, spot a hidden difference of two squares, or create the common bracket first. Every question is a real HKCEE/HKDSE Paper 2 question — you will see the same few routes again and again."
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
   "zh": "看符號：某一項正／負，就知答案必是哪個選項"
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
      "zh": "卷二 MC 快速法：先看符號",
      "en": "Paper 2 shortcut: read the signs first"
     },
     "body": {
      "zh": "卷二（MC）不需要長題的完整步驟 —— 但也不需要由頭展開到尾。\n很多因式分解 MC，看「尾巴那一兩項」的符號就可以先刪去一半選項：尾巴 $+m-n$ 就是 $+(m-n)$，所以答案的兩個括號之中，一定有一個是 $(m-n)$ —— 其他選項即刻可以刪。\n例：$4m^{2}-7mn+3n^{2}+m-n$：{{math:0}}\n刪完之後仍要驗算一次（把答案展開，看能否完全回到原式）：{{math:1}}",
      "en": "Paper 2 is multiple choice: you do not need the full written solution — but you do not have to expand everything either. In many factorisation MC questions, the signs of the last two terms eliminate half the options at once: the tail $+m-n$ is just $+(m-n)$, so one of the two brackets must be $(m-n)$ — the other options can be deleted immediately.\nExample: $4m^{2}-7mn+3n^{2}+m-n$: {{math:0}}\nAfter deleting, still verify once by expanding the answer back to the original expression: {{math:1}}"
     },
     "math": [
      "4m^{2}-7mn+3n^{2}+m-n=(m-n)(4m-3n+1)",
      "(m-n)(4m-3n+1)=4m^{2}-7mn+3n^{2}+m-n"
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
      "zh": "快速法只用來「刪選項」，最後仍要看一眼交叉相乘的結果，確認中間項對得上。",
      "en": "Use the shortcut only to eliminate options; still check the cross products so that the middle term matches."
     }
    },
    {
     "id": "ws01b-c2",
     "topic": "ws01b",
     "title": {
      "zh": "四項／六項的固定套路",
      "en": "A fixed routine for four or six terms"
     },
     "body": {
      "zh": "卷二的四項題幾乎都是同一條路：分組 → 每組抽公因式 → 兩個括號要一樣。\n例：$2xy-xz+4y^{2}-2yz$，分組後兩組都是 $(2y-z)$：{{math:0}}\n如果分組後括號差一個負號，把 $-1$ 抽出來就一樣（例：{{math:1}}）；如果兩組完全配不上，就調位（把有共同括號的兩項拉在一起）再試。六項題同理：三項一組、抽三次，通常會出現同一個括號。",
      "en": "Almost every four-term question in Paper 2 follows one route: group → factor each pair → make the brackets identical.\nExample: $2xy-xz+4y^{2}-2yz$ — after grouping, both brackets are $(2y-z)$: {{math:0}}\nIf the brackets differ by a sign, take out $-1$ (example: {{math:1}}); if they do not match at all, rearrange the terms (pull together the two that share a bracket) and try again. Six terms work the same way: group into threes and the same bracket usually appears."
     },
     "math": [
      "2xy-xz+4y^{2}-2yz=x(2y-z)+2y(2y-z)\n=(x+2y)(2y-z)",
      "xy-xz-y+z\n=x(y-z)-(y-z)\n=(y-z)(x-1)"
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
      "zh": "分組後第二組記得「整組抽」：$-3y^{2}-2yz=-y(3y+2z)$，括號內兩項要同時變號。",
      "en": "Remember to factor the whole second pair: $-3y^{2}-2yz=-y(3y+2z)$ — both signs inside flip."
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
          "zh": "認題：四項，先分組",
          "en": "Four terms: group them"
         },
         "math": "ac-bc-ad+bd=(ac-bc)-(ad-bd)",
         "zh": "四項又沒有全部共同的公因式 → 用分組。把 $ac$、$bc$ 放一組（有公因式 $c$），$ad$、$bd$ 放一組（有公因式 $d$）。",
         "en": "Four terms and no factor common to all of them, so group. Put $ac$ and $bc$ together (common factor $c$), and $ad$, $bd$ together (common factor $d$)."
        },
        {
         "title": {
          "zh": "兩組各自抽公因式",
          "en": "Factor each pair"
         },
         "math": "=c(a-b)-d(a-b)",
         "zh": "第一組抽 $c$ 得 $c(a-b)$；第二組抽 $d$ 得 $d(a-b)$。兩組的括號都是 $(a-b)$ —— 這就是分組成功的訊號。",
         "en": "The first pair gives $c(a-b)$; the second gives $d(a-b)$. Both brackets are $(a-b)$ — the sign that the grouping worked."
        },
        {
         "title": {
          "zh": "抽走相同括號",
          "en": "Take out the common bracket"
         },
         "math": "=(a-b)(c-d)",
         "zh": "把 $(a-b)$ 當作一個整體抽走，剩下 $c-d$ 放進另一個括號。",
         "en": "Treat $(a-b)$ as one object and take it out; what is left, $c-d$, goes into the other bracket."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "符號：$(a+b)$ 對不上原式首兩項 $ac-bc$（那是 $c(a-b)$，不是 $c(a+b)$）。",
         "en": "Sign: $(a+b)$ cannot give $ac-bc$, which is $c(a-b)$, not $c(a+b)$."
        },
        {
         "opt": "B",
         "zh": "把兩組抽出來的公因式寫成 $(d-c)$：$(d-c)=-\\,(c-d)$，與 $(c-d)$ 差一個負號。",
         "en": "Writing $(d-c)$: note $(d-c)=-(c-d)$, so it differs from $(c-d)$ by a sign."
        },
        {
         "opt": "D",
         "zh": "同時抄錯兩個符號（$a+b$ 與 $d-c$）：展開後首項會變成 $+ac$ 而非 $ac-bc$。",
         "en": "Two sign slips together ($a+b$ and $d-c$): expanding gives $+ac$ where the question has $ac-bc$."
        }
       ],
       "tip": {
        "zh": "分組三件事：分對組 → 各自抽公因式 → 兩個括號要一模一樣。",
        "en": "Grouping in three moves: split into pairs, factor each pair, and the two brackets must match exactly."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $a=2$, $b=3$, $c=5$, $d=7$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $a=2$, $b=3$, $c=5$, $d=7$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：四項，先分組",
          "en": "Four terms: group them"
         },
         "math": "pr+ps-qs-qr=(pr+ps)-(qs+qr)",
         "zh": "四項沒有全部共同的公因式 → 分組。$pr$、$ps$ 一組抽 $p$；$qs$、$qr$ 一組抽 $q$。",
         "en": "No factor common to all four terms, so group: $pr$, $ps$ share $p$, and $qs$, $qr$ share $q$."
        },
        {
         "title": {
          "zh": "兩組各自抽公因式",
          "en": "Factor each pair"
         },
         "math": "=p(r+s)-q(s+r)",
         "zh": "$s+r$ 與 $r+s$ 是同一個數（加法交換律），所以兩個括號其實一樣。",
         "en": "$s+r$ and $r+s$ are the same number (addition is commutative), so the two brackets are in fact identical."
        },
        {
         "title": {
          "zh": "抽走相同括號",
          "en": "Take out the common bracket"
         },
         "math": "=(r+s)(p-q)",
         "zh": "抽走 $(r+s)$，剩下 $p-q$。",
         "en": "Take out $(r+s)$; what is left is $p-q$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(q-p)=-(p-q)$：與正確答案相差一個負號，展開後 $pr$ 的係數會變成 $-p$。",
         "en": "$(q-p)=-(p-q)$: it differs from the correct answer by a sign, giving $-p$ as the coefficient of $r$."
        },
        {
         "opt": "C",
         "zh": "第一組的公因式是 $p$ 而不是 $r$：$pr$ 與 $ps$ 都含 $p$。",
         "en": "The common factor of the first pair is $p$, not $r$: both $pr$ and $ps$ contain $p$."
        },
        {
         "opt": "D",
         "zh": "同時抄錯兩處（$r-s$ 與 $q-p$）：展開後 $ps$ 一項會變成 $-ps$。",
         "en": "Two slips at once ($r-s$ and $q-p$): expanding gives $-ps$ instead of $+ps$."
        }
       ],
       "tip": {
        "zh": "後兩項抽出來的括號次序倒轉不要緊（$s+r=r+s$），但符號要對。",
        "en": "It is fine if the second bracket comes out in a different order ($s+r=r+s$), but the signs must be right."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $p=2$, $q=3$, $r=5$, $s=7$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $p=2$, $q=3$, $r=5$, $s=7$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：四項，留意共同括號",
          "en": "Four terms: look for a common bracket"
         },
         "math": "2xy-xz+4y^{2}-2yz",
         "zh": "先把第一、三項（都有 $2y$）與第二、四項（都有 $z$）分開想：$2y(x+2y)$ 與 $z(x+2y)$。",
         "en": "Think of the first and third terms together (both have $2y$) and the second and fourth (both have $z$): $2y(x+2y)$ and $z(x+2y)$."
        },
        {
         "title": {
          "zh": "分組後各自抽公因式",
          "en": "Factor each pair"
         },
         "math": "=x(2y-z)+2y(2y-z)",
         "zh": "照位置分組：$2xy-xz=x(2y-z)$，$4y^{2}-2yz=2y(2y-z)$。兩組都是 $(2y-z)$ ✓",
         "en": "Group as written: $2xy-xz=x(2y-z)$ and $4y^{2}-2yz=2y(2y-z)$. Both brackets are $(2y-z)$ ✓"
        },
        {
         "title": {
          "zh": "抽走相同括號",
          "en": "Take out the common bracket"
         },
         "math": "=(x+2y)(2y-z)",
         "zh": "抽走 $(2y-z)$，剩下 $x+2y$。",
         "en": "Take out $(2y-z)$; what is left is $x+2y$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(x-2y)$ 與 $2y(2y-z)$ 配不成原式的 $+4y^{2}$：展開會變成 $-4y^{2}$。",
         "en": "$(x-2y)$ with $2y(2y-z)$ cannot give the $+4y^{2}$ of the question — it produces $-4y^{2}$."
        },
        {
         "opt": "B",
         "zh": "兩個括號都寫加號：分組時第二組是 $+4y^{2}-2yz$，抽 $2y$ 之後必然是 $(2y-z)$。",
         "en": "Both brackets positive: the second pair is $+4y^{2}-2yz$, so after taking out $2y$ it must be $(2y-z)$."
        },
        {
         "opt": "C",
         "zh": "$(x-2y)$ 這個符號配不出第一項 $+2xy$。",
         "en": "$(x-2y)$ cannot reproduce the first term $+2xy$."
        }
       ],
       "tip": {
        "zh": "四項題先問自己「哪兩項有同一個括號」，答案通常就在那個括號裡。",
        "en": "With four terms, ask which two terms share a bracket — the answer usually sits in that bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $x=2$, $y=3$, $z=5$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $x=2$, $y=3$, $z=5$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：四項，先調位再分組",
          "en": "Four terms: rearrange, then group"
         },
         "math": "pq-2pr-p^{2}+2qr=pq+2qr-p^{2}-2pr",
         "zh": "直接把首兩項一組會抽不出共同括號；把 $+2qr$ 調上前，令 $pq+2qr=q(p+2r)$ 與 $p^{2}+2pr=p(p+2r)$ 配成一對。",
         "en": "Grouping the first two as written leads nowhere; move $+2qr$ forward so that $pq+2qr=q(p+2r)$ pairs with $p^{2}+2pr=p(p+2r)$."
        },
        {
         "title": {
          "zh": "兩組各自抽公因式",
          "en": "Factor each pair"
         },
         "math": "=q(p+2r)-p(p+2r)",
         "zh": "第一組抽 $q$、第二組抽 $p$，兩組都出現 $(p+2r)$。",
         "en": "Take out $q$ from the first pair and $p$ from the second: both give $(p+2r)$."
        },
        {
         "title": {
          "zh": "抽走相同括號",
          "en": "Take out the common bracket"
         },
         "math": "=(q-p)(p+2r)",
         "zh": "抽走 $(p+2r)$，剩下 $q-p$（次序是 $q$ 減 $p$，因為第二組前面是負號）。",
         "en": "Take out $(p+2r)$; what is left is $q-p$ — the minus in front of the second pair makes the order $q$ minus $p$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(p-q)$ 的次序倒轉了：$-p(p+2r)$ 抽出來的是 $-p$，所以括號是 $(q-p)$。",
         "en": "The order in $(p-q)$ is reversed: $-p(p+2r)$ contributes $-p$, so the bracket is $(q-p)$."
        },
        {
         "opt": "C",
         "zh": "$(q-2r)$ 抽不出 $pq-2pr$（那組的公因式是 $p$，不是 $q$）。",
         "en": "$(q-2r)$ cannot produce $pq-2pr$ — the common factor of that pair is $p$, not $q$."
        },
        {
         "opt": "D",
         "zh": "兩處都錯（次序與 $2r$ 的符號）：展開後會得到 $-2qr$。",
         "en": "Both wrong (order and the sign of $2r$): expanding gives $-2qr$."
        }
       ],
       "tip": {
        "zh": "分組失敗就調位：把「有共同括號」的兩項拉在一起，這是四項題的常規動作。",
        "en": "If the grouping fails, rearrange: pull together the two terms that share a bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $p=2$, $q=3$, $r=5$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $p=2$, $q=3$, $r=5$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：四項，先調位",
          "en": "Four terms: rearrange first"
         },
         "math": "6xy-2yz+4xz-3y^{2}=6xy+4xz-3y^{2}-2yz",
         "zh": "把 $+4xz$ 調上第二個位置：$6xy+4xz=2x(3y+2z)$。",
         "en": "Move $+4xz$ into second place: $6xy+4xz=2x(3y+2z)$."
        },
        {
         "title": {
          "zh": "兩組各自抽公因式",
          "en": "Factor each pair"
         },
         "math": "=2x(3y+2z)-y(3y+2z)",
         "zh": "$-3y^{2}-2yz=-y(3y+2z)$：抽 $-y$ 會令括號內兩項同時變號，剛好與第一組相同。",
         "en": "$-3y^{2}-2yz=-y(3y+2z)$: taking out $-y$ flips both signs inside, matching the first bracket exactly."
        },
        {
         "title": {
          "zh": "抽走相同括號",
          "en": "Take out the common bracket"
         },
         "math": "=(2x-y)(3y+2z)",
         "zh": "抽走 $(3y+2z)$，剩下 $2x-y$。",
         "en": "Take out $(3y+2z)$; what is left is $2x-y$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(3y-2z)$ 與第一組 $2x(3y+2z)$ 不符：$z$ 項的符號相反。",
         "en": "$(3y-2z)$ does not match the first pair $2x(3y+2z)$: the sign of the $z$ term is opposite."
        },
        {
         "opt": "C",
         "zh": "$(2x+y)$ 會令 $6xy$ 變成 $-6xy$（因為 $-y\\cdot 3y=-3y^{2}$ 是對的，但 $+y$ 不對）。",
         "en": "$(2x+y)$ turns $6xy$ into $-6xy$: the $-y$ factor is right for $-3y^{2}$, but $+y$ is not."
        },
        {
         "opt": "D",
         "zh": "兩個括號的符號都錯：$+y$ 與 $+2z$ 展開後 $xy$ 一項會變成 $-6xy$。",
         "en": "Both brackets have the wrong sign: $+y$ with $+2z$ expands to $-6xy$."
        }
       ],
       "tip": {
        "zh": "一組抽負公因式（$-y$）可以令兩個括號一致；不要怕負號。",
        "en": "Taking out a negative common factor ($-y$) can make the two brackets match — do not fear the minus."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $x=2$, $y=3$, $z=5$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $x=2$, $y=3$, $z=5$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：六項，試抽共同括號",
          "en": "Six terms: look for a shared bracket"
         },
         "math": "pr-qr-ps+qs+pt-qt\n=r(p-q)-s(p-q)+t(p-q)",
         "zh": "第一、二項抽 $r$、第三、四項抽 $-s$、第五、六項抽 $t$ —— 三個括號都是 $(p-q)$。",
         "en": "$r$ from the first pair, $-s$ from the second, $t$ from the third — all three brackets are $(p-q)$."
        },
        {
         "title": {
          "zh": "檢查抽出的符號",
          "en": "Check the signs you took out"
         },
         "math": "=r(p-q)-s(p-q)+t(p-q)",
         "zh": "$-ps+qs=-s(p-q)$（抽 $-s$，括號內兩項都變號）；這一步是這題唯一易錯位。",
         "en": "$-ps+qs=-s(p-q)$ — taking out $-s$ flips both signs inside. This is the only tricky step."
        },
        {
         "title": {
          "zh": "抽走 $(p-q)$",
          "en": "Take out $(p-q)$"
         },
         "math": "=(p-q)(r-s+t)",
         "zh": "把 $(p-q)$ 抽走，剩下的 $r$、$-s$、$+t$ 全部放進同一個括號。",
         "en": "Take $(p-q)$ out and collect what remains ($r$, $-s$, $+t$) in one bracket."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-s$ 被寫成 $+s$：$-ps+qs$ 抽 $-s$ 才是 $(p-q)$。",
         "en": "$-s$ written as $+s$: $-ps+qs$ only gives $(p-q)$ if you take out $-s$."
        },
        {
         "opt": "C",
         "zh": "$(p+q)$ 對不上：三組括號分別是 $r(p-q)$、$-s(p-q)$、$t(p-q)$，全部是 $p-q$。",
         "en": "$(p+q)$ does not fit: the three brackets are $r(p-q)$, $-s(p-q)$ and $t(p-q)$ — all $p-q$."
        },
        {
         "opt": "D",
         "zh": "兩處符號都錯（$p+q$ 與 $+s$）：展開後 $qr$ 一項的符號會相反。",
         "en": "Both signs wrong ($p+q$ and $+s$): expanding gives the opposite sign for the $qr$ term."
        }
       ],
       "tip": {
        "zh": "項數多過四項照樣分組：三組、四組都可以，只要最後出現同一個括號。",
        "en": "More than four terms still works: group into threes or fours as long as one bracket appears everywhere."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $p=2$, $q=3$, $r=5$, $s=7$, $t=11$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $p=2$, $q=3$, $r=5$, $s=7$, $t=11$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：六項，先排好次序",
          "en": "Six terms: order them first"
         },
         "math": "-bx+ax+ay-by-az+bz=ax+ay-az-bx-by+bz",
         "zh": "含 $a$ 的三項放前面、含 $b$ 的三項放後面：$a(x+y-z)-b(x+y-z)$。",
         "en": "Put the three $a$-terms first and the three $b$-terms after: $a(x+y-z)-b(x+y-z)$."
        },
        {
         "title": {
          "zh": "兩邊各自抽公因式",
          "en": "Factor both halves"
         },
         "math": "=a(x+y-z)-b(x+y-z)",
         "zh": "抽 $a$ 時 $+ax+ay-az=a(x+y-z)$；抽 $-b$ 時 $-bx-by+bz=-b(x+y-z)$（三項同時變號）。",
         "en": "Taking out $a$: $+ax+ay-az=a(x+y-z)$. Taking out $-b$: $-bx-by+bz=-b(x+y-z)$ (all three signs flip)."
        },
        {
         "title": {
          "zh": "抽走相同括號",
          "en": "Take out the common bracket"
         },
         "math": "=(a-b)(x+y-z)",
         "zh": "抽走 $(x+y-z)$，剩下 $a-b$。",
         "en": "Take out $(x+y-z)$; what is left is $a-b$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(x-y+z)$ 的符號錯：原式是 $+ay$、$-az$，括號內應為 $x+y-z$。",
         "en": "The signs in $(x-y+z)$ are wrong: the question has $+ay$ and $-az$, so the bracket is $x+y-z$."
        },
        {
         "opt": "B",
         "zh": "$(a+b)$ 對不上：含 $b$ 的三項前面全部變號，抽出來是 $-b$。",
         "en": "$(a+b)$ does not fit: the three $b$-terms all flip sign, so $-b$ comes out."
        },
        {
         "opt": "C",
         "zh": "兩處都錯（$a-b$ 配 $x-y+z$）：展開後 $ay$ 會變成 $-ay$。",
         "en": "Both wrong ($a-b$ with $x-y+z$): expanding gives $-ay$ instead of $+ay$."
        }
       ],
       "tip": {
        "zh": "首項是負號（$-bx$）時，把它連同 $b$ 一起抽成 $-b(\\;)$，很多時兩個括號就會一模一樣。",
        "en": "When the first term is negative ($-bx$), take it out as $-b(\\;)$ together with $b$ — the two brackets often then match."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $a=2$, $b=3$, $x=5$, $y=7$, $z=11$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $a=2$, $b=3$, $x=5$, $y=7$, $z=11$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：先製造共同括號",
          "en": "Make a common bracket appear"
         },
         "math": "x(12x-9y)=3x(4x-3y)",
         "zh": "看似要展開重做，其實不用：$12x-9y=3(4x-3y)$，所以 $-x(12x-9y)=-3x(4x-3y)$，與前面那項共用 $(4x-3y)$。",
         "en": "No need to expand: $12x-9y=3(4x-3y)$, so $-x(12x-9y)=-3x(4x-3y)$, which shares the bracket $(4x-3y)$ with the first term."
        },
        {
         "title": {
          "zh": "抽走共同括號",
          "en": "Take out the common bracket"
         },
         "math": "=(4x-3y)(2x+7y)-3x(4x-3y)",
         "zh": "兩項合併後是同一個括號乘以 $(2x+7y-3x)$。",
         "en": "Both terms are the same bracket multiplied by $(2x+7y-3x)$."
        },
        {
         "title": {
          "zh": "化簡括號內",
          "en": "Simplify inside the bracket"
         },
         "math": "=(4x-3y)(-x+7y)",
         "zh": "$2x-3x=-x$，所以係數是 $-x+7y$。",
         "en": "$2x-3x=-x$, so the bracket becomes $-x+7y$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "括號內 $2x-3x$ 寫成 $5x$（應該相減，不是相加）。",
         "en": "Writing $2x-3x$ as $5x$: the terms subtract, they do not add."
        },
        {
         "opt": "C",
         "zh": "$(4x+3y)$ 不對：原式是 $4x-3y$，抽公因式不會改變它。",
         "en": "$(4x+3y)$ is wrong: the original bracket $4x-3y$ does not change when you factor."
        },
        {
         "opt": "D",
         "zh": "兩處都錯（$+3y$ 與 $5x$）：展開後 $xy$ 一項會變成 $-35xy$。",
         "en": "Both wrong ($+3y$ and $5x$): expanding gives $-35xy$ for the $xy$ term."
        }
       ],
       "tip": {
        "zh": "看到 $(12x-9y)$ 就問一句：它是不是某個括號的倍數？$12x-9y=3(4x-3y)$ —— 這是卷二的常見陷阱。",
        "en": "When you see $(12x-9y)$, ask whether it is a multiple of another bracket: $12x-9y=3(4x-3y)$. A classic Paper 2 trap."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $x=2$, $y=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $x=2$, $y=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：先製造共同括號",
          "en": "Make a common bracket appear"
         },
         "math": "3u(10u-12v)=6u(5u-6v)",
         "zh": "$10u-12v=2(5u-6v)$，所以 $3u(10u-12v)=6u(5u-6v)$，與前面共用 $(5u-6v)$。",
         "en": "$10u-12v=2(5u-6v)$, so $3u(10u-12v)=6u(5u-6v)$, sharing the bracket $(5u-6v)$."
        },
        {
         "title": {
          "zh": "抽走共同括號",
          "en": "Take out the common bracket"
         },
         "math": "=(5u-6v)(7u-4v-6u)",
         "zh": "第一個括號 $(7u-4v)$ 減去 $6u$。",
         "en": "From the first bracket $(7u-4v)$ subtract $6u$."
        },
        {
         "title": {
          "zh": "化簡括號內",
          "en": "Simplify inside"
         },
         "math": "=(5u-6v)(u-4v)",
         "zh": "$7u-6u=u$，所以係數是 $u-4v$。",
         "en": "$7u-6u=u$, so the bracket is $u-4v$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(5u+6v)$ 不對：原式的括號是 $5u-6v$。",
         "en": "$(5u+6v)$ is wrong: the original bracket is $5u-6v$."
        },
        {
         "opt": "B",
         "zh": "兩處都錯（$+6v$ 與 $13u$）：$7u-6u=u$，不是 $13u$。",
         "en": "Both wrong ($+6v$ and $13u$): $7u-6u=u$, not $13u$."
        },
        {
         "opt": "D",
         "zh": "$13u$ 是把 $7u+6u$ 相加：題目是「減去 $6u(5u-6v)$」，所以要相減。",
         "en": "$13u$ comes from adding $7u+6u$, but the question subtracts $6u(5u-6v)$, so the terms subtract."
        }
       ],
       "tip": {
        "zh": "減號在括號前面，抽公因式後「整條括號」都要減 —— 卷二最常考這個位。",
        "en": "With a minus in front, the whole bracket is subtracted — one of the most common Paper 2 traps."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $u=2$, $v=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $u=2$, $v=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：平方差",
          "en": "Recognise the difference of two squares"
         },
         "math": "36-(3x-2y)^{2}=6^{2}-(3x-2y)^{2}",
         "zh": "$36=6^{2}$，整條就是 $a^{2}-b^{2}$ 的形態（$a=6$，$b=3x-2y$）。",
         "en": "$36=6^{2}$, so the whole expression has the form $a^{2}-b^{2}$ with $a=6$, $b=3x-2y$."
        },
        {
         "title": {
          "zh": "套公式：$a^{2}-b^{2}=(a+b)(a-b)$",
          "en": "Apply $a^{2}-b^{2}=(a+b)(a-b)$"
         },
         "math": "=(6-(3x-2y))(6+(3x-2y))",
         "zh": "$b$ 是整條 $(3x-2y)$，所以要加括號：$6-b$ 與 $6+b$。",
         "en": "$b$ is the whole bracket $(3x-2y)$, so keep it in brackets: $6-b$ and $6+b$."
        },
        {
         "title": {
          "zh": "拆括號（小心負號）",
          "en": "Remove the brackets (watch the minus)"
         },
         "math": "=(6-3x+2y)(6+3x-2y)",
         "zh": "$6-(3x-2y)=6-3x+2y$：括號前面是減號，$2y$ 要變號。",
         "en": "$6-(3x-2y)=6-3x+2y$: the minus in front flips the sign of $2y$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-2y$ 沒有變號：$6-(3x-2y)$ 應該是 $6-3x+2y$。",
         "en": "$-2y$ was not flipped: $6-(3x-2y)$ is $6-3x+2y$."
        },
        {
         "opt": "B",
         "zh": "第二個括號寫成 $6+3x-2y$：$(a-b)$ 的 $b$ 本身就是 $3x-2y$，符號只變一次。",
         "en": "The second bracket is written $6+3x-2y$: in $(a-b)$ the $b$ is already $3x-2y$, so the signs change only once."
        },
        {
         "opt": "C",
         "zh": "兩個括號的 $2y$ 符號都錯：應為 $+2y$ 配 $-2y$。",
         "en": "The $2y$ signs are wrong in both brackets: they should be $+2y$ against $-2y$."
        }
       ],
       "tip": {
        "zh": "平方差題：先把兩邊都寫成「某個整體」的平方（$36=6^{2}$），再套公式；括號千萬不要拆散。",
        "en": "Difference of two squares: first write both parts as squares of a single object ($36=6^{2}$), then apply the identity — never split the bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "另解二：卷二 MC 專用數值代入法（Substitution）",
          "en": "Method 3: substitution strategy for MC"
         },
         "zh": "代 $x=1$、$y=1$：原式 $=36-(3-2)^{2}=35$；A 得 $11$、B 得 $7$、C 得 $55$、D 得 $35$ → 只有 D 相符。",
         "en": "Put $x=1$, $y=1$: the expression is $36-(3-2)^{2}=35$; A gives $11$, B gives $7$, C gives $55$ and D gives $35$ — only D matches."
        }
       ]
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
          "zh": "認題：平方差",
          "en": "Recognise the difference of two squares"
         },
         "math": "49-(4r-3s)^{2}=7^{2}-(4r-3s)^{2}",
         "zh": "$49=7^{2}$，$a=7$、$b=4r-3s$。",
         "en": "$49=7^{2}$, with $a=7$ and $b=4r-3s$."
        },
        {
         "title": {
          "zh": "套公式",
          "en": "Apply the identity"
         },
         "math": "=(7-(4r-3s))(7+(4r-3s))",
         "zh": "$(a+b)(a-b)$，$b$ 保留括號。",
         "en": "$(a+b)(a-b)$, keeping $b$ in its bracket."
        },
        {
         "title": {
          "zh": "拆括號",
          "en": "Remove the brackets"
         },
         "math": "=(7-4r+3s)(7+4r-3s)",
         "zh": "$7-(4r-3s)=7-4r+3s$（$-3s$ 變 $+3s$）；第二個括號直接去掉：$7+4r-3s$。",
         "en": "$7-(4r-3s)=7-4r+3s$ (the $-3s$ becomes $+3s$); the second bracket just opens: $7+4r-3s$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-3s$ 沒有變號（$7-4r-3s$ 應為 $7-4r+3s$）。",
         "en": "$-3s$ was not flipped ($7-4r-3s$ should be $7-4r+3s$)."
        },
        {
         "opt": "B",
         "zh": "第二個括號的 $-3s$ 加了括號卻沒有保持原樣：應為 $7+4r-3s$。",
         "en": "The second bracket should read $7+4r-3s$; the $-3s$ keeps its sign."
        },
        {
         "opt": "D",
         "zh": "兩處都錯：把兩個括號的 $3s$ 都寫成加號。",
         "en": "Both wrong: both brackets show $+3s$."
        }
       ],
       "tip": {
        "zh": "「$\\square-(\\;)^{2}$」永遠是平方差；拆括號時只變「減法那一個」的符號。",
        "en": "Anything of the form $\\square-(\\;)^{2}$ is a difference of two squares; only the subtracted bracket flips sign."
       },
       "alt": [
        {
         "name": {
          "zh": "另解二：卷二 MC 專用數值代入法（Substitution）",
          "en": "Method 3: substitution strategy for MC"
         },
         "zh": "代 $r=1$、$s=1$：原式 $=49-(4-3)^{2}=48$；A 得 $0$、B 得 $0$、C 得 $48$、D 得 $84$ → 只有 C 相符。",
         "en": "Put $r=1$, $s=1$: the expression is $49-(4-3)^{2}=48$; A gives $0$, B gives $0$, C gives $48$ and D gives $84$ — only C matches."
        }
       ]
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
          "zh": "認題：平方差（也可展開）",
          "en": "Spot the difference of two squares"
         },
         "math": "(3p+q)^{2}-(3p-q)^{2}",
         "zh": "$a=3p+q$、$b=3p-q$：這是 $a^{2}-b^{2}$，用公式最快。",
         "en": "With $a=3p+q$ and $b=3p-q$ this is $a^{2}-b^{2}$, so the identity is quickest."
        },
        {
         "title": {
          "zh": "用 $a^{2}-b^{2}=(a+b)(a-b)$",
          "en": "Use $a^{2}-b^{2}=(a+b)(a-b)$"
         },
         "math": "=((3p+q)+(3p-q))((3p+q)-(3p-q))",
         "zh": "先寫成兩個括號相乘，才化簡。",
         "en": "Write it as a product of two brackets first, then simplify."
        },
        {
         "title": {
          "zh": "化簡",
          "en": "Simplify"
         },
         "math": "=(6p)(2q)=12pq",
         "zh": "$3p+q+3p-q=6p$；$3p+q-3p+q=2q$。乘起來是 $12pq$。",
         "en": "$3p+q+3p-q=6p$ and $3p+q-3p+q=2q$; multiplying gives $12pq$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "以為兩個平方相減等於 $0$：只有在 $a=b$ 時才成立。",
         "en": "Thinking the squares cancel to $0$: that only happens when $a=b$."
        },
        {
         "opt": "B",
         "zh": "$2q^{2}$ 是把 $2q$ 再乘一次自己；正確是 $6p\\times 2q$。",
         "en": "$2q^{2}$ squares $2q$; the correct step is $6p\\times 2q$."
        },
        {
         "opt": "C",
         "zh": "$6pq$ 只取了 $(a+b)$ 那部分，漏了 $\\times 2q$。",
         "en": "$6pq$ keeps only part of $(a+b)$ and misses the $\\times 2q$."
        }
       ],
       "tip": {
        "zh": "兩個平方相減，用平方差比展開快很多，而且不易錯符號。",
        "en": "For a difference of two squares the identity beats expanding — faster and fewer sign slips."
       },
       "alt": [
        {
         "name": {
          "zh": "另解一：直接完全展開相消（最穩做法）",
          "en": "Method 2: direct expansion"
         },
         "zh": "直接展開兩組完全平方：$(9p^{2}+6pq+q^{2})-(9p^{2}-6pq+q^{2})$。減號後面要整組變號：$9p^{2}+6pq+q^{2}-9p^{2}+6pq-q^{2}$；$9p^{2}$ 與 $q^{2}$ 互相抵消，剩下 $6pq+6pq=12pq$。搞不清公式中括號的正負號時，這條路最穩。",
         "en": "Expand both squares directly: $(9p^{2}+6pq+q^{2})-(9p^{2}-6pq+q^{2})$. Everything after the minus changes sign: $9p^{2}+6pq+q^{2}-9p^{2}+6pq-q^{2}$. $9p^{2}$ and $q^{2}$ cancel, leaving $6pq+6pq=12pq$ — the safest route if the signs confuse you."
        },
        {
         "name": {
          "zh": "另解二：卷二 MC 專用數值代入法（Substitution）",
          "en": "Method 3: substitution strategy for MC"
         },
         "zh": "代 $p=1$、$q=2$：原式 $=(3+2)^{2}-(3-2)^{2}=25-1=24$；A 得 $0$、B 得 $8$、C 得 $12$、D 得 $12pq=24$ → 只有 D 相符。",
         "en": "Put $p=1$, $q=2$: the expression is $(3+2)^{2}-(3-2)^{2}=25-1=24$; A gives $0$, B gives $8$, C gives $12$ and D gives $12(1)(2)=24$ — only D matches."
        }
       ]
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
          "zh": "認題：平方差",
          "en": "Spot the difference of two squares"
         },
         "math": "(2a-5b)^{2}-(2a+5b)^{2}",
         "zh": "$a=2a-5b$、$b=2a+5b$，用 $a^{2}-b^{2}=(a+b)(a-b)$。",
         "en": "With $a=2a-5b$ and $b=2a+5b$, use $a^{2}-b^{2}=(a+b)(a-b)$."
        },
        {
         "title": {
          "zh": "先化簡兩個括號",
          "en": "Simplify the two brackets first"
         },
         "math": "=((2a-5b)+(2a+5b))((2a-5b)-(2a+5b))",
         "zh": "第一個括號相加、第二個相減。",
         "en": "Add in the first bracket, subtract in the second."
        },
        {
         "title": {
          "zh": "化簡",
          "en": "Simplify"
         },
         "math": "=(4a)(-10b)=-40ab",
         "zh": "$2a-5b+2a+5b=4a$；$2a-5b-2a-5b=-10b$。$4a\\times(-10b)=-40ab$。",
         "en": "$2a-5b+2a+5b=4a$ and $2a-5b-2a-5b=-10b$, so $4a\\times(-10b)=-40ab$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-10ab$ 是只取了第二個括號 $-10b$ 的部分：還要乘 $4a$。",
         "en": "$-10ab$ keeps only the $-10b$ from the second bracket; it still has to be multiplied by $4a$."
        },
        {
         "opt": "B",
         "zh": "$-20ab$ 是把 $a$ 的係數當成 $2a$（正確是 $4a$）：$2a-5b+2a+5b=4a$。",
         "en": "$-20ab$ uses $2a$ for the $a$-coefficient instead of $4a$: $2a-5b+2a+5b=4a$."
        },
        {
         "opt": "D",
         "zh": "$-50b^{2}$ 是展開時把 $(-5b)^{2}$ 與 $-(5b)^{2}$ 混在一起；平方差消去了 $b^{2}$ 項。",
         "en": "$-50b^{2}$ comes from mixing $(-5b)^{2}$ with $-(5b)^{2}$; the $b^{2}$ terms cancel in a difference of squares."
        }
       ],
       "tip": {
        "zh": "先用公式化簡括號，最後才乘係數 —— 這樣就不會漏乘。",
        "en": "Simplify the brackets with the identity first, multiply the coefficients last — nothing gets missed."
       },
       "alt": [
        {
         "name": {
          "zh": "另解一：直接完全展開相消（最穩做法）",
          "en": "Method 2: direct expansion"
         },
         "zh": "直接展開：$(4a^{2}-20ab+25b^{2})-(4a^{2}+20ab+25b^{2})$$=4a^{2}-20ab+25b^{2}-4a^{2}-20ab-25b^{2}=-40ab$。$a^{2}$ 與 $b^{2}$ 項全部抵消，只剩中間項。",
         "en": "Expand directly: $(4a^{2}-20ab+25b^{2})-(4a^{2}+20ab+25b^{2})$$=4a^{2}-20ab+25b^{2}-4a^{2}-20ab-25b^{2}=-40ab$. The $a^{2}$ and $b^{2}$ terms cancel and only the middle term survives."
        },
        {
         "name": {
          "zh": "另解二：卷二 MC 專用數值代入法（Substitution）",
          "en": "Method 3: substitution strategy for MC"
         },
         "zh": "代 $a=1$、$b=1$：原式 $=(2-5)^{2}-(2+5)^{2}=9-49=-40$；A 得 $-10$、B 得 $-20$、C 得 $-40ab=-40$、D 得 $-50$ → 只有 C 相符。",
         "en": "Put $a=1$, $b=1$: the expression is $(2-5)^{2}-(2+5)^{2}=9-49=-40$; A gives $-10$, B gives $-20$, C gives $-40ab=-40$ and D gives $-50$ — only C matches."
        }
       ]
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
          "zh": "認題：前三項是二次三項式，先十字相乘",
          "en": "The first three terms are a quadratic: use the cross-method"
         },
         "math": "x^{2}+xy-2y^{2}=(x-y)(x+2y)",
         "zh": "把 $x^{2}+xy-2y^{2}$ 分解：交叉相乘 $(x)(2y)+(-y)(x)=2xy-xy=xy$ ✓",
         "en": "Factorize $x^{2}+xy-2y^{2}$: the cross products give $(x)(2y)+(-y)(x)=2xy-xy=xy$ ✓"
        },
        {
         "title": {
          "zh": "留意最後兩項 $+x-y$",
          "en": "Look at the last two terms $+x-y$"
         },
         "math": "=(x-y)(x+2y)+(x-y)",
         "zh": "$+x-y=+(x-y)$：就是 $(x-y)$ 這個括號本身。",
         "en": "$+x-y=+(x-y)$, which is exactly the bracket $(x-y)$."
        },
        {
         "title": {
          "zh": "抽走 $(x-y)$",
          "en": "Take out $(x-y)$"
         },
         "math": "=(x-y)(x+2y+1)",
         "zh": "抽走 $(x-y)$，剩下 $(x+2y)$ 與 $+1$。",
         "en": "Take out $(x-y)$; what remains is $(x+2y)$ and $+1$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(x-2y)$ 對不上：$x^{2}+xy-2y^{2}=(x-y)(x+2y)$，中間項要 $+xy$。",
         "en": "$(x-2y)$ does not fit: $x^{2}+xy-2y^{2}=(x-y)(x+2y)$ needs $+xy$ in the middle."
        },
        {
         "opt": "C",
         "zh": "$(x+y)$ 會令首三項的中間項變成 $-xy$。",
         "en": "$(x+y)$ would make the middle term $-xy$."
        },
        {
         "opt": "D",
         "zh": "兩處都錯（$x+y$ 與 $+2y-1$）：最後抽出來的「$+1$」應該是加號。",
         "en": "Both wrong ($x+y$ and $+2y-1$): the $+1$ taken out must be positive."
        }
       ],
       "tip": {
        "zh": "四項題：前三項做十字相乘，剩下的那兩項通常正好是「同一個括號」或它的倍數。",
        "en": "For four terms: factorize the first three by the cross-method and the remaining two usually form that same bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $x=2$, $y=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $x=2$, $y=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "前三項：十字相乘",
          "en": "First three terms: cross-method"
         },
         "math": "x^{2}-3xy-10y^{2}=(x-5y)(x+2y)",
         "zh": "交叉相乘 $(x)(2y)+(-5y)(x)=2xy-5xy=-3xy$ ✓ 與題目的 $-3xy$ 相符。",
         "en": "The cross products $(x)(2y)+(-5y)(x)=2xy-5xy=-3xy$ ✓ matching the given $-3xy$."
        },
        {
         "title": {
          "zh": "後兩項：抽出同一個括號",
          "en": "Last two terms: factor out the same bracket"
         },
         "math": "=(x-5y)(x+2y)+3(x-5y)",
         "zh": "$+3x-15y=+3(x-5y)$：正是前面那個括號的 $3$ 倍。",
         "en": "$+3x-15y=+3(x-5y)$, exactly three times the bracket found above."
        },
        {
         "title": {
          "zh": "抽走 $(x-5y)$",
          "en": "Take out $(x-5y)$"
         },
         "math": "=(x-5y)(x+2y+3)",
         "zh": "抽走 $(x-5y)$，剩下 $(x+2y)$ 與 $+3$。",
         "en": "Take out $(x-5y)$; what remains is $(x+2y)$ and $+3$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-3$ 的符號錯：$+3x-15y=+3(x-5y)$，所以應為 $+3$。",
         "en": "The sign of $3$ is wrong: $+3x-15y=+3(x-5y)$, so it is $+3$."
        },
        {
         "opt": "C",
         "zh": "$(x+5y)(x-2y)$ 的中間項是 $+3xy$，與題目的 $-3xy$ 相反。",
         "en": "$(x+5y)(x-2y)$ gives $+3xy$ in the middle, the opposite of the given $-3xy$."
        },
        {
         "opt": "D",
         "zh": "兩處都錯（$+5y$ 與 $-3$）：展開後 $xy$ 一項會變成 $+3xy$。",
         "en": "Both wrong ($+5y$ and $-3$): expanding gives $+3xy$ for the $xy$ term."
        }
       ],
       "tip": {
        "zh": "四項題：前三項做十字相乘，後兩項通常就是那個括號的倍數。",
        "en": "Four terms: factorize the first three by the cross-method; the last two are usually a multiple of that bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $x=2$, $y=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $x=2$, $y=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "前三項：十字相乘",
          "en": "First three terms: cross-method"
         },
         "math": "5a^{2}-8ab+3b^{2}=(a-b)(5a-3b)",
         "zh": "交叉相乘 $(a)(-3b)+(-b)(5a)=-3ab-5ab=-8ab$ ✓",
         "en": "The cross products $(a)(-3b)+(-b)(5a)=-3ab-5ab=-8ab$ ✓"
        },
        {
         "title": {
          "zh": "後兩項：$b-a=-(a-b)$",
          "en": "Last two terms: $b-a=-(a-b)$"
         },
         "math": "=(a-b)(5a-3b)-(a-b)",
         "zh": "$+b-a=-(a-b)$：抽 $-1$ 出來，括號就與前面相同。",
         "en": "$+b-a=-(a-b)$: taking out $-1$ makes this bracket identical to the first."
        },
        {
         "title": {
          "zh": "抽走 $(a-b)$",
          "en": "Take out $(a-b)$"
         },
         "math": "=(a-b)(5a-3b-1)",
         "zh": "抽走 $(a-b)$，剩下 $(5a-3b)$ 與 $-1$。",
         "en": "Take out $(a-b)$; what remains is $(5a-3b)$ and $-1$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(5a+3b)$ 的交叉相乘是 $-2ab$，不是 $-8ab$。",
         "en": "$(5a+3b)$ gives $-2ab$ from the cross products, not $-8ab$."
        },
        {
         "opt": "C",
         "zh": "$(a+b)$ 對不上：題目的中間項是 $-8ab$，需要 $(a-b)$。",
         "en": "$(a+b)$ does not fit: the middle term $-8ab$ requires $(a-b)$."
        },
        {
         "opt": "D",
         "zh": "兩處都錯（$a+b$ 與 $-1$）：最後的 $b-a$ 應抽成 $-(a-b)$。",
         "en": "Both wrong ($a+b$ and $-1$): the final $b-a$ must be taken out as $-(a-b)$."
        }
       ],
       "tip": {
        "zh": "「$-a+b$」這類倒轉的兩項，一律寫成 $-(a-b)$，之後就對得上。",
        "en": "When two terms such as $-a+b$ appear reversed, write them as $-(a-b)$ and the brackets will match."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $a=2$, $b=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $a=2$, $b=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：先製造平方差",
          "en": "Create a difference of two squares"
         },
         "math": "x^{2}-y^{2}+4y-4=x^{2}-(y^{2}-4y+4)",
         "zh": "把後三項一齊加括號並在前面加負號：$-y^{2}+4y-4=-(y^{2}-4y+4)$。",
         "en": "Bracket the last three terms with a minus in front: $-y^{2}+4y-4=-(y^{2}-4y+4)$."
        },
        {
         "title": {
          "zh": "括號內是完全平方",
          "en": "The bracket is a perfect square"
         },
         "math": "=x^{2}-(y-2)^{2}",
         "zh": "$y^{2}-4y+4=(y)^{2}-2(y)(2)+2^{2}=(y-2)^{2}$。",
         "en": "$y^{2}-4y+4=(y)^{2}-2(y)(2)+2^{2}=(y-2)^{2}$."
        },
        {
         "title": {
          "zh": "平方差",
          "en": "Difference of two squares"
         },
         "math": "=(x-(y-2))(x+(y-2))=(x-y+2)(x+y-2)",
         "zh": "$a=x$、$b=y-2$；拆括號時只有「減那個」變號：$x-y+2$。",
         "en": "With $a=x$ and $b=y-2$: only the subtracted bracket flips sign, giving $x-y+2$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-2$ 的符號錯：$x-(y-2)=x-y+2$，所以第一個括號是 $+2$。",
         "en": "The sign of $2$ is wrong: $x-(y-2)=x-y+2$, so the first bracket has $+2$."
        },
        {
         "opt": "B",
         "zh": "兩處都錯（$-2$ 與 $+2$）：$x-(y-2)$ 只會變一次號。",
         "en": "Both signs wrong ($-2$ and $+2$): $x-(y-2)$ flips the sign only once."
        },
        {
         "opt": "D",
         "zh": "第二個括號寫成 $x-y-2$：$x+(y-2)=x+y-2$，中間是加號。",
         "en": "The second bracket reads $x-y-2$, but $x+(y-2)=x+y-2$ — the middle sign is plus."
        }
       ],
       "tip": {
        "zh": "$x^{2}-(\\;)^{2}$ 的關鍵是「先製造平方」：後三項抽成 $-(y-2)^{2}$。",
        "en": "For $x^{2}-(\\;)^{2}$, first create the square: the last three terms become $-(y-2)^{2}$."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $x=2$, $y=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $x=2$, $y=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：先製造平方差",
          "en": "Create a difference of two squares"
         },
         "math": "m^{2}-9n^{2}-6n-1=m^{2}-(9n^{2}+6n+1)",
         "zh": "把最後三項一齊加括號並在前面加負號。",
         "en": "Bracket the final three terms with a minus in front."
        },
        {
         "title": {
          "zh": "括號內是完全平方",
          "en": "The bracket is a perfect square"
         },
         "math": "=m^{2}-(3n+1)^{2}",
         "zh": "$9n^{2}+6n+1=(3n)^{2}+2(3n)(1)+1^{2}=(3n+1)^{2}$。",
         "en": "$9n^{2}+6n+1=(3n)^{2}+2(3n)(1)+1^{2}=(3n+1)^{2}$."
        },
        {
         "title": {
          "zh": "平方差",
          "en": "Difference of two squares"
         },
         "math": "=(m+(3n+1))(m-(3n+1))\n=(m+3n+1)(m-3n-1)",
         "zh": "$a=m$、$b=3n+1$；$m-(3n+1)=m-3n-1$（負號要整條分配）。",
         "en": "With $a=m$ and $b=3n+1$: $m-(3n+1)=m-3n-1$ — the minus applies to the whole bracket."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "兩個括號的常數項寫成 $+1$ 與 $-1$：應該相加的那邊是 $m+3n+1$。",
         "en": "The constants are written $+1$ and $-1$ in the wrong brackets: the added one is $m+3n+1$."
        },
        {
         "opt": "C",
         "zh": "兩個括號都寫 $m-3n+1$：展開後會出現 $+9n^{2}$ 而不是 $-9n^{2}$。",
         "en": "Both brackets read $m-3n+1$: expanding gives $+9n^{2}$, not $-9n^{2}$."
        },
        {
         "opt": "D",
         "zh": "完全平方的平方根是 $3n+1$（加號）：$m$ 與它相加、相減，不是兩邊都減。",
         "en": "The square root is $3n+1$ (plus sign): $m$ is added to it once and subtracted once, not subtracted twice."
        }
       ],
       "tip": {
        "zh": "「$\\square-\\triangle$」型的四項題：三項抽成一個平方，再用平方差；括號內的符號只變一次。",
        "en": "For four-term questions of the shape $\\square-\\triangle$: make three terms into a square, then use the difference of two squares — the signs flip only once."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $m=2$, $n=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $m=2$, $n=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "認題：先製造平方差",
          "en": "Create a difference of two squares"
         },
         "math": "16-4a^{2}+20ab-25b^{2}\n=4^{2}-(4a^{2}-20ab+25b^{2})",
         "zh": "$-4a^{2}+20ab-25b^{2}=-(4a^{2}-20ab+25b^{2})$：三項同時變號。",
         "en": "$-4a^{2}+20ab-25b^{2}=-(4a^{2}-20ab+25b^{2})$ — all three signs flip."
        },
        {
         "title": {
          "zh": "括號內是完全平方",
          "en": "The bracket is a perfect square"
         },
         "math": "=4^{2}-(2a-5b)^{2}",
         "zh": "$4a^{2}-20ab+25b^{2}=(2a)^{2}-2(2a)(5b)+(5b)^{2}=(2a-5b)^{2}$。",
         "en": "$4a^{2}-20ab+25b^{2}=(2a)^{2}-2(2a)(5b)+(5b)^{2}=(2a-5b)^{2}$."
        },
        {
         "title": {
          "zh": "平方差",
          "en": "Difference of two squares"
         },
         "math": "=(4-(2a-5b))(4+(2a-5b))\n=(4-2a+5b)(4+2a-5b)",
         "zh": "$4-(2a-5b)=4-2a+5b$：$-5b$ 變 $+5b$。",
         "en": "$4-(2a-5b)=4-2a+5b$: the $-5b$ becomes $+5b$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "第二個括號應為 $4+2a-5b$：減的那個括號才變號。",
         "en": "The second bracket should be $4+2a-5b$: only the subtracted bracket changes sign."
        },
        {
         "opt": "C",
         "zh": "兩個括號的常數項寫成 $4-2a-5b$ 與 $4+2a+5b$：$-5b$ 沒有變號。",
         "en": "The constants read $4-2a-5b$ and $4+2a+5b$: the $-5b$ was not flipped."
        },
        {
         "opt": "D",
         "zh": "兩個括號都寫 $4-2a-5b$：展開後不會是原式（少了 $+20ab$）。",
         "en": "Both brackets read $4-2a-5b$: expanding does not give the original (the $+20ab$ term is lost)."
        }
       ],
       "tip": {
        "zh": "平方差前必先確認「括號內是完全平方」：交叉項 $20ab=2(2a)(5b)$。",
        "en": "Before using the difference of two squares, confirm the bracket is a perfect square: $20ab=2(2a)(5b)$."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $a=2$, $b=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $a=2$, $b=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "平方差",
          "en": "Difference of two squares"
         },
         "math": "x^{2}-y^{2}-x+y=(x-y)(x+y)-(x-y)",
         "zh": "$x^{2}-y^{2}=(x-y)(x+y)$；而 $-x+y=-(x-y)$。",
         "en": "$x^{2}-y^{2}=(x-y)(x+y)$ and $-x+y=-(x-y)$."
        },
        {
         "title": {
          "zh": "兩項出現同一個括號",
          "en": "The same bracket appears twice"
         },
         "math": "=(x-y)(x+y)-(x-y)",
         "zh": "兩項都有 $(x-y)$ —— 第二項其實是 $(x-y)$ 的 $1$ 倍。",
         "en": "Both terms contain $(x-y)$ — the second is simply $1$ times $(x-y)$."
        },
        {
         "title": {
          "zh": "抽走 $(x-y)$",
          "en": "Take out $(x-y)$"
         },
         "math": "=(x-y)(x+y-1)",
         "zh": "抽走之後剩下 $(x+y)$ 與 $-1$。",
         "en": "What remains after taking it out is $(x+y)$ and $-1$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(x-y)(x-y-1)$ 的第二個括號重複了 $x-y$：應該一個是 $x+y$、一個是 $x-y$。",
         "en": "$(x-y)(x-y-1)$ repeats $x-y$ in both brackets; one should be $x+y$."
        },
        {
         "opt": "C",
         "zh": "$(x+y)(x+y-1)$ 完全沒有 $x-y$：展開後會多出 $xy$ 項。",
         "en": "$(x+y)(x+y-1)$ has no $x-y$; expanding produces extra $xy$ terms."
        },
        {
         "opt": "D",
         "zh": "$(x+y)(x-y+1)$：$-x+y$ 應為 $-(x-y)$，所以最後是 $-1$ 而不是 $+1$。",
         "en": "$(x+y)(x-y+1)$: since $-x+y=-(x-y)$ the last term is $-1$, not $+1$."
        }
       ],
       "tip": {
        "zh": "見到 $x^{2}-y^{2}$ 先平方差，剩下的項再抽同一個括號 —— 卷二很多題都是這兩步。",
        "en": "When you see $x^{2}-y^{2}$, do the difference of two squares first and then factor the same bracket out of what is left."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $x=2$, $y=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $x=2$, $y=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "平方差",
          "en": "Difference of two squares"
         },
         "math": "u^{2}-v^{2}-3u-3v=(u+v)(u-v)-3(u+v)",
         "zh": "$-(3u+3v)=-3(u+v)$：負號連 $-3$ 一起抽出。",
         "en": "$-(3u+3v)=-3(u+v)$: the minus goes out together with $-3$."
        },
        {
         "title": {
          "zh": "兩項出現同一個括號",
          "en": "The same bracket appears twice"
         },
         "math": "=(u+v)(u-v)-3(u+v)",
         "zh": "兩項都是 $(u+v)$ 的倍數。",
         "en": "Both terms are multiples of $(u+v)$."
        },
        {
         "title": {
          "zh": "抽走 $(u+v)$",
          "en": "Take out $(u+v)$"
         },
         "math": "=(u+v)(u-v-3)",
         "zh": "抽走 $(u+v)$，剩下 $(u-v)$ 與 $-3$。",
         "en": "Take out $(u+v)$; what remains is $(u-v)$ and $-3$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$(u+v-3)$ 的第二個括號重複 $u+v$：平方差已提供 $(u-v)$。",
         "en": "$(u+v-3)$ repeats $u+v$; the difference of two squares already gives $(u-v)$."
        },
        {
         "opt": "C",
         "zh": "$(u-v)(u-v+3)$：$-3$ 應該是減，不是加（$-3u-3v=-3(u+v)$）。",
         "en": "$(u-v)(u-v+3)$: the term is $-3$, not $+3$, since $-3u-3v=-3(u+v)$."
        },
        {
         "opt": "D",
         "zh": "$(u-v)(u+v-3)$：平方差給 $(u+v)$、抽出來的是 $(u-v)$，次序倒轉了。",
         "en": "$(u-v)(u+v-3)$ swaps the two brackets: the square difference gives $(u+v)$ and the factored part is $(u-v)$."
        }
       ],
       "tip": {
        "zh": "負號在整組前面（$-3u-3v$）就抽一個負公因式：$-3(u+v)$，這樣兩項才對得上。",
        "en": "When a minus covers a whole pair ($-3u-3v$), factor out a negative: $-3(u+v)$ — then both terms match."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $u=2$, $v=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $u=2$, $v=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "平方差",
          "en": "Difference of two squares"
         },
         "math": "4p^{2}-q^{2}+8p-4q=(2p-q)(2p+q)+4(2p-q)",
         "zh": "$4p^{2}-q^{2}=(2p-q)(2p+q)$；而 $+8p-4q=+4(2p-q)$。",
         "en": "$4p^{2}-q^{2}=(2p-q)(2p+q)$ and $+8p-4q=+4(2p-q)$."
        },
        {
         "title": {
          "zh": "兩項出現同一個括號",
          "en": "The same bracket appears twice"
         },
         "math": "=(2p-q)(2p+q)+4(2p-q)",
         "zh": "兩項都有 $(2p-q)$。",
         "en": "Both terms contain $(2p-q)$."
        },
        {
         "title": {
          "zh": "抽走 $(2p-q)$",
          "en": "Take out $(2p-q)$"
         },
         "math": "=(2p-q)(2p+q+4)",
         "zh": "抽走 $(2p-q)$，剩下 $(2p+q)$ 與 $+4$。",
         "en": "Take out $(2p-q)$; what remains is $(2p+q)$ and $+4$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$+4$ 的符號錯：$+8p-4q=+4(2p-q)$，所以是 $+4$。",
         "en": "The sign of $4$ is wrong: $+8p-4q=+4(2p-q)$, so it is $+4$."
        },
        {
         "opt": "B",
         "zh": "$(2p+q)$ 與 $-4$ 配不上：抽出來的是 $(2p-q)$，剩下 $(2p+q)+4$。",
         "en": "$(2p+q)$ with $-4$ does not fit: $(2p-q)$ is factored out, leaving $(2p+q)+4$."
        },
        {
         "opt": "D",
         "zh": "$-4$ 的符號錯：最後一項是加 $4$。",
         "en": "The sign of $4$ is wrong: the last term is $+4$."
        }
       ],
       "tip": {
        "zh": "$+8p-4q$ 這種兩項，先抽 $4$ 看看能不能變成前面那個括號。",
        "en": "For a pair such as $+8p-4q$, take out $4$ and check whether it becomes the earlier bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $p=2$, $q=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $p=2$, $q=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "平方差",
          "en": "Difference of two squares"
         },
         "math": "9m^{2}-4n^{2}-6m-4n\n=(3m+2n)(3m-2n)-2(3m+2n)",
         "zh": "$9m^{2}-4n^{2}=(3m+2n)(3m-2n)$；$-(6m+4n)=-2(3m+2n)$。",
         "en": "$9m^{2}-4n^{2}=(3m+2n)(3m-2n)$ and $-(6m+4n)=-2(3m+2n)$."
        },
        {
         "title": {
          "zh": "兩項出現同一個括號",
          "en": "The same bracket appears twice"
         },
         "math": "=(3m+2n)(3m-2n)-2(3m+2n)",
         "zh": "兩項都有 $(3m+2n)$。",
         "en": "Both terms contain $(3m+2n)$."
        },
        {
         "title": {
          "zh": "抽走 $(3m+2n)$",
          "en": "Take out $(3m+2n)$"
         },
         "math": "=(3m+2n)(3m-2n-2)",
         "zh": "抽走 $(3m+2n)$，剩下 $(3m-2n)$ 與 $-2$。",
         "en": "Take out $(3m+2n)$; what remains is $(3m-2n)$ and $-2$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(3m-2n)$ 抽不出來：兩項的共同括號是 $(3m+2n)$。",
         "en": "$(3m-2n)$ cannot be factored out: the shared bracket is $(3m+2n)$."
        },
        {
         "opt": "B",
         "zh": "$+2$ 的符號錯：$-(6m+4n)=-2(3m+2n)$，所以是 $-2$。",
         "en": "The sign of $2$ is wrong: $-(6m+4n)=-2(3m+2n)$, so it is $-2$."
        },
        {
         "opt": "C",
         "zh": "兩處都錯（括號次序與 $+2$）：展開後 $mn$ 項會是 $+4mn$。",
         "en": "Both wrong (the bracket order and $+2$): expanding gives $+4mn$."
        }
       ],
       "tip": {
        "zh": "先平方差、後抽公因式：$-(6m+4n)$ 抽 $-2$ 就可以對上 $(3m+2n)$。",
        "en": "Difference of two squares first, then factor: taking $-2$ out of $-(6m+4n)$ matches $(3m+2n)$."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $m=2$, $n=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $m=2$, $n=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "調位再平方差",
          "en": "Rearrange and use the difference of two squares"
         },
         "math": "a^{2}+a-b^{2}-b=a^{2}-b^{2}+a-b",
         "zh": "把 $a^{2}$ 與 $-b^{2}$ 拉在一起：$a^{2}-b^{2}=(a-b)(a+b)$。",
         "en": "Pull $a^{2}$ and $-b^{2}$ together: $a^{2}-b^{2}=(a-b)(a+b)$."
        },
        {
         "title": {
          "zh": "剩下兩項抽公因式",
          "en": "Factor what is left"
         },
         "math": "=(a-b)(a+b)+(a-b)",
         "zh": "$+a-b=+(a-b)$，正是前面那個括號。",
         "en": "$+a-b=+(a-b)$, exactly the bracket above."
        },
        {
         "title": {
          "zh": "抽走 $(a-b)$",
          "en": "Take out $(a-b)$"
         },
         "math": "=(a-b)(a+b+1)",
         "zh": "抽走 $(a-b)$，剩下 $(a+b)$ 與 $+1$。",
         "en": "Take out $(a-b)$; what remains is $(a+b)$ and $+1$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(a+b)(a-b+1)$ 展開是 $a^{2}-b^{2}+a+b$：最後一項是 $+b$，但題目要 $-b$（因為 $+a-b=+(a-b)$）。",
         "en": "$(a+b)(a-b+1)$ expands to $a^{2}-b^{2}+a+b$, but the question needs $-b$ (since $+a-b=+(a-b)$)."
        },
        {
         "opt": "B",
         "zh": "兩個符號都錯：展開會得到 $a^{2}-b^{2}-a-b$，與原式相差兩個符號。",
         "en": "Both signs wrong: expanding gives $a^{2}-b^{2}-a-b$, which differs from the question in two signs."
        },
        {
         "opt": "D",
         "zh": "$-1$ 的符號錯：$+a-b=+(a-b)$，所以常數項是 $+1$。",
         "en": "The sign of $1$ is wrong: $+a-b=+(a-b)$, so the constant term is $+1$."
        }
       ],
       "tip": {
        "zh": "四項題先「調位」：把能配成平方差的兩項放在一起，通常就通了。",
        "en": "For four terms, rearrange first: put the two terms that form a difference of two squares together."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $a=2$, $b=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $a=2$, $b=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "調位再平方差",
          "en": "Rearrange and use the difference of two squares"
         },
         "math": "m^{2}+n-m-n^{2}=m^{2}-n^{2}-m+n",
         "zh": "$m^{2}-n^{2}=(m-n)(m+n)$。",
         "en": "$m^{2}-n^{2}=(m-n)(m+n)$."
        },
        {
         "title": {
          "zh": "剩下兩項抽負公因式",
          "en": "Factor the remaining pair"
         },
         "math": "=(m-n)(m+n)-(m-n)",
         "zh": "$-m+n=-(m-n)$：抽 $-1$ 出來才對得上。",
         "en": "$-m+n=-(m-n)$: taking out $-1$ makes it match."
        },
        {
         "title": {
          "zh": "抽走 $(m-n)$",
          "en": "Take out $(m-n)$"
         },
         "math": "=(m-n)(m+n-1)",
         "zh": "抽走 $(m-n)$，剩下 $(m+n)$ 與 $-1$。",
         "en": "Take out $(m-n)$; what remains is $(m+n)$ and $-1$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$+1$ 的符號錯：$-m+n=-(m-n)$，所以是 $-1$。",
         "en": "The sign of $1$ is wrong: $-m+n=-(m-n)$, so it is $-1$."
        },
        {
         "opt": "C",
         "zh": "$(m+n)$ 抽不出來：兩項都是 $(m-n)$ 的倍數。",
         "en": "$(m+n)$ cannot be factored out: both terms are multiples of $(m-n)$."
        },
        {
         "opt": "D",
         "zh": "$(m+n)(m-n-1)$ 只是把兩個括號對調了次序，展開後常數項符號會相反。",
         "en": "$(m+n)(m-n-1)$ merely swaps the brackets, which flips the sign of the constant term."
        }
       ],
       "tip": {
        "zh": "「$-m+n$」寫成 $-(m-n)$：一個負號，就令兩項對得上。",
        "en": "Write $-m+n$ as $-(m-n)$ — one minus sign makes the two terms match."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $m=2$, $n=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $m=2$, $n=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "調位再平方差",
          "en": "Rearrange and use the difference of two squares"
         },
         "math": "h^{2}-4h-k^{2}+4k=h^{2}-k^{2}-4h+4k",
         "zh": "$h^{2}-k^{2}=(h-k)(h+k)$；$-4h+4k=-4(h-k)$。",
         "en": "$h^{2}-k^{2}=(h-k)(h+k)$ and $-4h+4k=-4(h-k)$."
        },
        {
         "title": {
          "zh": "兩項出現同一個括號",
          "en": "The same bracket appears twice"
         },
         "math": "=(h-k)(h+k)-4(h-k)",
         "zh": "兩項都有 $(h-k)$。",
         "en": "Both terms contain $(h-k)$."
        },
        {
         "title": {
          "zh": "抽走 $(h-k)$",
          "en": "Take out $(h-k)$"
         },
         "math": "=(h-k)(h+k-4)",
         "zh": "抽走 $(h-k)$，剩下 $(h+k)$ 與 $-4$。",
         "en": "Take out $(h-k)$; what remains is $(h+k)$ and $-4$."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$+4$ 的符號錯：$-4h+4k=-4(h-k)$，所以是 $-4$。",
         "en": "The sign of $4$ is wrong: $-4h+4k=-4(h-k)$, so it is $-4$."
        },
        {
         "opt": "C",
         "zh": "$(h+k)$ 抽不出來：共同括號是 $(h-k)$。",
         "en": "$(h+k)$ cannot be factored out: the shared bracket is $(h-k)$."
        },
        {
         "opt": "D",
         "zh": "$(h+k)(h-k+4)$：$-4$ 的符號錯，而且兩個括號對調了。",
         "en": "$(h+k)(h-k+4)$: the sign of $4$ is wrong and the brackets are swapped."
        }
       ],
       "tip": {
        "zh": "負號包住兩項（$-4h+4k$）→ 抽 $-4$，令它變成前面那個括號。",
        "en": "When a minus covers a pair ($-4h+4k$), take out $-4$ so that it becomes the earlier bracket."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $h=2$, $k=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $h=2$, $k=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
          "zh": "調位再平方差",
          "en": "Rearrange and use the difference of two squares"
         },
         "math": "m^{2}-2m-9n^{2}-6n=m^{2}-9n^{2}-2m-6n",
         "zh": "$m^{2}-9n^{2}=(m+3n)(m-3n)$；$-(2m+6n)=-2(m+3n)$。",
         "en": "$m^{2}-9n^{2}=(m+3n)(m-3n)$ and $-(2m+6n)=-2(m+3n)$."
        },
        {
         "title": {
          "zh": "兩項出現同一個括號",
          "en": "The same bracket appears twice"
         },
         "math": "=(m+3n)(m-3n)-2(m+3n)",
         "zh": "兩項都有 $(m+3n)$。",
         "en": "Both terms contain $(m+3n)$."
        },
        {
         "title": {
          "zh": "抽走 $(m+3n)$",
          "en": "Take out $(m+3n)$"
         },
         "math": "=(m+3n)(m-3n-2)",
         "zh": "抽走 $(m+3n)$，剩下 $(m-3n)$ 與 $-2$。",
         "en": "Take out $(m+3n)$; what remains is $(m-3n)$ and $-2$."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$(m-3n)$ 抽不出來：$-2m-6n=-2(m+3n)$，共同括號是 $(m+3n)$。",
         "en": "$(m-3n)$ cannot be factored out: $-2m-6n=-2(m+3n)$, so the shared bracket is $(m+3n)$."
        },
        {
         "opt": "C",
         "zh": "$+2$ 的符號錯：$-2m-6n=-2(m+3n)$，所以是 $-2$。",
         "en": "The sign of $2$ is wrong: $-2m-6n=-2(m+3n)$, so it is $-2$."
        },
        {
         "opt": "D",
         "zh": "兩個括號都寫 $m+3n$：平方差提供的是 $(m-3n)$，不是兩個都加。",
         "en": "Both brackets read $m+3n$, but the difference of two squares gives $(m-3n)$ for one of them."
        }
       ],
       "tip": {
        "zh": "先調位成 $(m^{2}-9n^{2})-(2m+6n)$，再抽 $-2$，最後抽 $(m+3n)$。",
        "en": "Rearrange to $(m^{2}-9n^{2})-(2m+6n)$, take out $-2$, then factor $(m+3n)$."
       },
       "alt": [
        {
         "name": {
          "zh": "卷二保底：數值代入法（Substitution）",
          "en": "Paper 2 safety net: substitution"
         },
         "zh": "卷二救急法：隨意代小的數入題目中的字母（例如 $m=2$, $n=3$；避開 $0$ 與 $1$，因為它們會令很多選項同時變成 $0$ 或相同值，分不出真假），用計算機算出題目的值；再把同一組數逐個代入四個選項，只有一個會得到相同的數值 —— 那就是答案。完全不懂分組都可以用，最適合用來核對或救急。",
         "en": "Paper 2 rescue plan: put small numbers into the letters (for example $m=2$, $n=3$; avoid $0$ and $1$ because they make several options equal and useless), evaluate the question on your calculator, then substitute the same numbers into the four options — only one gives the same value, and that is the answer. It works even when you cannot see the grouping."
        }
       ]
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
