// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_WS02 = {
 "id": "ws02",
 "stage": 1,
 "unit": 5,
 "subtopic": "simultaneous-linear-equations",
 "source": "EPH DSE Pass · Worksheet 2",
 "name": {
  "zh": "二元一次方程",
  "en": "Linear equations in two unknowns"
 },
 "intro": {
  "zh": "由代入法與消元法開始，逐步把價格、數量改變、百分比及路程條件寫成方程。",
  "en": "Start with substitution and elimination, then model prices, changes in quantities, percentages and journeys."
 },
 "cmdHints": [
  {
   "en": "solve simultaneous equations",
   "zh": "解聯立方程：同一組數要同時滿足兩條式"
  },
  {
   "en": "by the method of substitution",
   "zh": "用代入法：先把一個未知數獨立，再代入整個式子"
  },
  {
   "en": "by the method of elimination",
   "zh": "用消元法：整式同乘，對齊係數後相加或相減"
  },
  {
   "en": "the original number",
   "zh": "原有數量：改變前的數目，要與轉移後分開"
  },
  {
   "en": "80% more than",
   "zh": "比基準多八成：等於基準的 $1.8$ 倍"
  },
  {
   "en": "how long",
   "zh": "求所需時間：最後寫明是哪段路程及時間單位"
  }
 ],
 "lessons": [
  {
   "id": "ws02-1",
   "title": {
    "zh": "代入與消元",
    "en": "Substitution and elimination"
   },
   "cards": [
    {
     "id": "ws02-c1",
     "topic": "ws02",
     "title": {
      "zh": "聯立方程：同一組數滿足兩條式",
      "en": "Simultaneous equations: one pair, two conditions"
     },
     "goal": {
      "zh": "知道答案是一組有次序的數值。",
      "en": "Recognise a solution as a pair of values for the named unknowns."
     },
     "body": {
      "zh": "解聯立方程，就是找出一組 $x$、$y$，令兩條方程同時成立。\n例如以下兩個條件：{{math:0}}\n試代 $x=3$、$y=2$，兩條都成立。{{math:1}}",
      "en": "The two unknowns must satisfy both equations at the same time.\nConsider these two conditions:{{math:0}}\nSubstituting $x=3$ and $y=2$ makes both equations true.{{math:1}}"
     },
     "math": [
      "x+y=5\nx-y=1",
      "3+2=5\n3-2=1"
     ],
     "warn": {
      "zh": "只代回其中一條不夠；其他數值也可能滿足那一條。$x$ 與 $y$ 的次序不能隨意交換。",
      "en": "Checking just one equation is insufficient: other pairs may satisfy it. Keep the values of $x$ and $y$ distinct."
     },
     "recall": {
      "prompt": {
       "zh": "哪組數同時滿足 $x+y=5$ 及 $x-y=1$？",
       "en": "Which pair satisfies both $x+y=5$ and $x-y=1$?"
      },
      "options": [
       {
        "math": "x=2,\\ y=3"
       },
       {
        "math": "x=3,\\ y=2"
       },
       {
        "math": "x=4,\\ y=1"
       }
      ],
      "answer": 1,
      "explanation": {
       "zh": "$3+2=5$ 而且 $3-2=1$，兩個條件都成立。",
       "en": "Both $3+2=5$ and $3-2=1$ hold."
      }
     },
     "vocab": [
      {
       "en": "simultaneous equations",
       "zh": "聯立方程"
      },
      {
       "en": "solution",
       "zh": "同時滿足條件的解"
      }
     ]
    },
    {
     "id": "ws02-c2",
     "topic": "ws02",
     "title": {
      "zh": "代入法：用整個式子取代字母",
      "en": "Substitution: replace an unknown with a whole expression"
     },
     "goal": {
      "zh": "把兩個未知數變成一個。",
      "en": "Reduce the problem to one unknown."
     },
     "body": {
      "zh": "若已經有一個字母獨立，可以直接代入。\n這裡先把 $y$ 寫成 $3x$：{{math:0}}\n另一條方程中的 $y$，整個改寫為 $3x$。{{math:1}}\n求得 $x$ 後，代回 $y=3x$ 求另一個數。{{math:2}}",
      "en": "If an unknown is already isolated, substitute directly.\nHere $y$ is written as $3x$:{{math:0}}\nReplace $y$ in the other equation with the whole expression $3x$.{{math:1}}\nThen put the value of $x$ back into $y=3x$.{{math:2}}"
     },
     "math": [
      "y=3x\nx+y=12",
      "x+3x=12\n4x=12\nx=3",
      "y=3(3)=9"
     ],
     "warn": {
      "zh": "代入的是字母代表的整個式子。若前面還有係數，例如 $2y$，便要寫 $2(3x)$。",
      "en": "Replace the unknown with its whole expression. A coefficient stays: $2y$ becomes $2(3x)$."
     },
     "recall": {
      "prompt": {
       "zh": "已知 $y=4x$，$x+2y$ 代入後是哪個式子？",
       "en": "If $y=4x$, what does $x+2y$ become?"
      },
      "options": [
       {
        "math": "x+4x"
       },
       {
        "math": "x+2(4x)"
       },
       {
        "math": "4x+2x"
       }
      ],
      "answer": 1,
      "explanation": {
       "zh": "$2y=2(4x)$，所以是 $x+2(4x)=9x$。",
       "en": "Since $2y=2(4x)$, the expression is $x+2(4x)=9x$."
      }
     },
     "vocab": [
      {
       "en": "substitution",
       "zh": "代入法"
      },
      {
       "en": "replace",
       "zh": "用等值的式子取代"
      }
     ]
    },
    {
     "id": "ws02-c3",
     "topic": "ws02",
     "title": {
      "zh": "先轉換主項，再代入",
      "en": "Change the subject before substituting"
     },
     "goal": {
      "zh": "選較容易獨立的未知數，保留括號。",
      "en": "Choose an easy unknown to isolate and keep brackets."
     },
     "body": {
      "zh": "沒有字母獨立時，先找係數為 $1$ 或 $-1$ 的未知數。\n由 $x-y=1$ 得到：{{math:0}}\n把整個 $y+1$ 代入另一條方程的 $x$，乘 $2$ 時兩項都受影響。{{math:1}}\n再代回，找出 $x$。{{math:2}}",
      "en": "When no unknown is isolated, look for a coefficient of $1$ or $-1$.\nFrom $x-y=1$:{{math:0}}\nSubstitute the whole $y+1$ for $x$. Multiplying by $2$ affects both terms.{{math:1}}\nSubstitute back to find $x$.{{math:2}}"
     },
     "math": [
      "x-y=1\nx=y+1",
      "2(y+1)+3y=12\n5y+2=12\ny=2",
      "x=2+1=3"
     ],
     "warn": {
      "zh": "把 $x$ 換成 $y+1$ 時，$2x$ 是 $2(y+1)$，不是 $2y+1$。",
      "en": "When $x=y+1$, the term $2x$ becomes $2(y+1)$, not $2y+1$."
     },
     "recall": {
      "prompt": {
       "zh": "由 $x-y=1$，哪個以 $x$ 為主項的式子正確？",
       "en": "Which expression for $x$ follows from $x-y=1$?"
      },
      "options": [
       {
        "math": "x=1-y"
       },
       {
        "math": "x=y-1"
       },
       {
        "math": "x=y+1"
       }
      ],
      "answer": 2,
      "explanation": {
       "zh": "兩邊同加 $y$，得 $x=1+y=y+1$。",
       "en": "Adding $y$ to both sides gives $x=1+y=y+1$."
      }
     },
     "vocab": [
      {
       "en": "subject",
       "zh": "主項：獨立在等號一邊的字母"
      },
      {
       "en": "brackets",
       "zh": "括號"
      }
     ]
    },
    {
     "id": "ws02-c4",
     "topic": "ws02",
     "title": {
      "zh": "消元法：係數對齊，再加或減",
      "en": "Elimination: match coefficients, then add or subtract"
     },
     "goal": {
      "zh": "用相反或相同係數消去一個未知數。",
      "en": "Eliminate one unknown using opposite or equal coefficients."
     },
     "body": {
      "zh": "相反係數可以相加消去。\n兩條方程的 $y$ 係數是 $-1$ 與 $+1$：{{math:0}}\n兩式相加，$y$ 項抵消。{{math:1}}\n係數不同時，先把整條方程乘一個數。例如：{{math:2}}",
      "en": "Opposite coefficients cancel by addition.\nThe coefficients of $y$ here are $-1$ and $+1$:{{math:0}}\nAdd the equations to cancel $y$.{{math:1}}\nIf coefficients do not match, first scale an entire equation. For example:{{math:2}}"
     },
     "math": [
      "3x-y=-6\n2x+y=1",
      "5x=-5\nx=-1\ny=3",
      "3x-y=-6\n6x-2y=-12"
     ],
     "warn": {
      "zh": "同號且相同的係數可用相減；減號作用於整條方程，包括等號右邊。放大方程時，每項都要乘。",
      "en": "Equal coefficients cancel by subtraction. Subtract every term, including the right-hand side. Scaling applies to every term too."
     },
     "recall": {
      "prompt": {
       "zh": "$(2x-y)-(x-y)$ 等於甚麼？",
       "en": "What is $(2x-y)-(x-y)$?"
      },
      "options": [
       {
        "math": "x-2y"
       },
       {
        "math": "x"
       },
       {
        "math": "3x"
       }
      ],
      "answer": 1,
      "explanation": {
       "zh": "先拆括號：$2x-y-x+y=x$，兩個 $y$ 項抵消。",
       "en": "Remove the brackets: $2x-y-x+y=x$. The $y$ terms cancel."
      }
     },
     "vocab": [
      {
       "en": "elimination",
       "zh": "消元法"
      },
      {
       "en": "coefficient",
       "zh": "係數"
      }
     ]
    }
   ],
   "long": [
    {
     "id": "eph-ws02-a01",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A01",
     "source": "WS02 A · Basic Skills Q1",
     "stem": {
      "zh": "用代入法解聯立方程 $\\begin{cases}y=4 x\\\\x + 3 y=26\\end{cases}$。",
      "en": "Solve $\\begin{cases}y=4 x\\\\x + 3 y=26\\end{cases}$ by the method of substitution."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "y=4 x\nx + 3 y=26",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "y=4 x",
        "zh": "這條方程中，$y$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $y$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "13 x=26\nx=2",
        "zh": "用整個 $4 x$ 取代另一條方程的每個 $y$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $y$ in the other equation with the whole expression $4 x$. Simplify and solve the equation in one unknown."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "y=4 (2)=8",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=2,\\quad y=8",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=2,\\ y=8$ 代回兩條原方程，左右分別得到 $8=8\\quad 26=26$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=2,\\ y=8$ into both original equations: $8=8\\quad 26=26$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=2,\\quad y=8",
        "x=3,\\quad y=8",
        "x=2,\\quad y=9",
        "x=3,\\quad y=9"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-a02",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A02",
     "source": "WS02 A · Basic Skills Q2",
     "stem": {
      "zh": "用代入法解聯立方程 $\\begin{cases}5 y=x\\\\- 2 x + 7 y=6\\end{cases}$。",
      "en": "Solve $\\begin{cases}5 y=x\\\\- 2 x + 7 y=6\\end{cases}$ by the method of substitution."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "5 y=x\n- 2 x + 7 y=6",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=5 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 3 y=6\ny=-2",
        "zh": "用整個 $5 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $5 y$. Simplify and solve the equation in one unknown."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=5 (-2)=-10",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=-10,\\quad y=-2",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=-10,\\ y=-2$ 代回兩條原方程，左右分別得到 $-10=-10\\quad 6=6$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=-10,\\ y=-2$ into both original equations: $-10=-10\\quad 6=6$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=-9,\\quad y=-2",
        "x=-10,\\quad y=-1",
        "x=-9,\\quad y=-1",
        "x=-10,\\quad y=-2"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-a03",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A03",
     "source": "WS02 A · Basic Skills Q3",
     "stem": {
      "zh": "用代入法解聯立方程 $\\begin{cases}x + y=3\\\\4 x + 3 y - 17=0\\end{cases}$。",
      "en": "Solve $\\begin{cases}x + y=3\\\\4 x + 3 y - 17=0\\end{cases}$ by the method of substitution."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=3\n4 x + 3 y - 17=0",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=3 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- y=5\ny=-5",
        "zh": "用整個 $3 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $3 - y$. Simplify and solve the equation in one unknown."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=3 - (-5)=8",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=8,\\quad y=-5",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=8,\\ y=-5$ 代回兩條原方程，左右分別得到 $3=3\\quad 0=0$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=8,\\ y=-5$ into both original equations: $3=3\\quad 0=0$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=8,\\quad y=-4",
        "x=9,\\quad y=-4",
        "x=8,\\quad y=-5",
        "x=9,\\quad y=-5"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-a04",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A04",
     "source": "WS02 A · Basic Skills Q4",
     "stem": {
      "zh": "用代入法解聯立方程 $\\begin{cases}x - 6 y + 9=0\\\\5 x + 2 y + 13=0\\end{cases}$。",
      "en": "Solve $\\begin{cases}x - 6 y + 9=0\\\\5 x + 2 y + 13=0\\end{cases}$ by the method of substitution."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x - 6 y + 9=0\n5 x + 2 y + 13=0",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=6 y - 9",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "32 y=32\ny=1",
        "zh": "用整個 $6 y - 9$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $6 y - 9$. Simplify and solve the equation in one unknown."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=6 (1) - 9=-3",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=-3,\\quad y=1",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=-3,\\ y=1$ 代回兩條原方程，左右分別得到 $0=0\\quad 0=0$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=-3,\\ y=1$ into both original equations: $0=0\\quad 0=0$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=-2,\\quad y=2",
        "x=-3,\\quad y=1",
        "x=-2,\\quad y=1",
        "x=-3,\\quad y=2"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-keysubtract",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-K2a",
     "source": "WS02 A · Key Point 2 Subtraction",
     "stem": {
      "zh": "用消元法解聯立方程 $3x-y=-6$、$2x-y=1$。",
      "en": "Solve $3x-y=-6$ and $2x-y=1$ by the method of elimination."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "3 x - y=-6\n2 x - y=1",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "3 x - y=-6\n2 x - y=1\nx=-7",
        "zh": "將第一條整式乘 $1$，第二條整式乘 $1$，再第一條減第二條，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $1$ and the second by $1$, then subtract the second from the first to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=-7",
        "zh": "等號兩邊同除以 $1$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $1$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "- y - 21=-6\ny=-15",
        "zh": "把 $x=-7$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=-7$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=-7,\\quad y=-15",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=-7,\\ y=-15$ 代回兩條原方程，左右分別得到 $-6=-6\\quad 1=1$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=-7,\\ y=-15$ into both original equations: $-6=-6\\quad 1=1$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=-7,\\quad y=-15",
        "x=-6,\\quad y=-15",
        "x=-7,\\quad y=-14",
        "x=-6,\\quad y=-14"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-keyscale",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-K2b",
     "source": "WS02 A · Key Point 2 Example",
     "stem": {
      "zh": "用消元法解聯立方程 $3x-y=-6$、$5x+2y=1$。",
      "en": "Solve $3x-y=-6$ and $5x+2y=1$ by the method of elimination."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "3 x - y=-6\n5 x + 2 y=1",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "6 x - 2 y=-12\n5 x + 2 y=1\n11 x=-11",
        "zh": "將第一條整式乘 $2$，第二條整式乘 $1$，再相加，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $2$ and the second by $1$, then add the equations to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=-1",
        "zh": "等號兩邊同除以 $11$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $11$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "- y - 3=-6\ny=3",
        "zh": "把 $x=-1$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=-1$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=-1,\\quad y=3",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=-1,\\ y=3$ 代回兩條原方程，左右分別得到 $-6=-6\\quad 1=1$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=-1,\\ y=3$ into both original equations: $-6=-6\\quad 1=1$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=0,\\quad y=3",
        "x=-1,\\quad y=4",
        "x=0,\\quad y=4",
        "x=-1,\\quad y=3"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-a05",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A05",
     "source": "WS02 A · Basic Skills Q5",
     "stem": {
      "zh": "用消元法解聯立方程 $\\begin{cases}2 x + y=8\\\\3 x - y=2\\end{cases}$。",
      "en": "Solve $\\begin{cases}2 x + y=8\\\\3 x - y=2\\end{cases}$ by the method of elimination."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "2 x + y=8\n3 x - y=2",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "2 x + y=8\n3 x - y=2\n5 x=10",
        "zh": "將第一條整式乘 $1$，第二條整式乘 $1$，再相加，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $1$ and the second by $1$, then add the equations to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=2",
        "zh": "等號兩邊同除以 $5$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $5$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "y + 4=8\ny=4",
        "zh": "把 $x=2$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=2$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=2,\\quad y=4",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=2,\\ y=4$ 代回兩條原方程，左右分別得到 $8=8\\quad 2=2$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=2,\\ y=4$ into both original equations: $8=8\\quad 2=2$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=2,\\quad y=4",
        "x=3,\\quad y=4",
        "x=2,\\quad y=5",
        "x=3,\\quad y=5"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-a06",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A06",
     "source": "WS02 A · Basic Skills Q6",
     "stem": {
      "zh": "用消元法解聯立方程 $\\begin{cases}x - 3 y=4\\\\x - 5 y=10\\end{cases}$。",
      "en": "Solve $\\begin{cases}x - 3 y=4\\\\x - 5 y=10\\end{cases}$ by the method of elimination."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x - 3 y=4\nx - 5 y=10",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "5 x - 15 y=20\n3 x - 15 y=30\n2 x=-10",
        "zh": "將第一條整式乘 $5$，第二條整式乘 $3$，再第一條減第二條，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $5$ and the second by $3$, then subtract the second from the first to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=-5",
        "zh": "等號兩邊同除以 $2$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $2$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "- 3 y - 5=4\ny=-3",
        "zh": "把 $x=-5$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=-5$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=-5,\\quad y=-3",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=-5,\\ y=-3$ 代回兩條原方程，左右分別得到 $4=4\\quad 10=10$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=-5,\\ y=-3$ into both original equations: $4=4\\quad 10=10$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=-4,\\quad y=-3",
        "x=-5,\\quad y=-2",
        "x=-4,\\quad y=-2",
        "x=-5,\\quad y=-3"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-a07",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A07",
     "source": "WS02 A · Basic Skills Q7",
     "stem": {
      "zh": "用消元法解聯立方程 $\\begin{cases}5 x + 2 y=0\\\\7 x + 4 y=6\\end{cases}$。",
      "en": "Solve $\\begin{cases}5 x + 2 y=0\\\\7 x + 4 y=6\\end{cases}$ by the method of elimination."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "5 x + 2 y=0\n7 x + 4 y=6",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "10 x + 4 y=0\n7 x + 4 y=6\n3 x=-6",
        "zh": "將第一條整式乘 $2$，第二條整式乘 $1$，再第一條減第二條，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $2$ and the second by $1$, then subtract the second from the first to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=-2",
        "zh": "等號兩邊同除以 $3$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $3$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "2 y - 10=0\ny=5",
        "zh": "把 $x=-2$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=-2$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=-2,\\quad y=5",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=-2,\\ y=5$ 代回兩條原方程，左右分別得到 $0=0\\quad 6=6$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=-2,\\ y=5$ into both original equations: $0=0\\quad 6=6$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=-2,\\quad y=6",
        "x=-1,\\quad y=6",
        "x=-2,\\quad y=5",
        "x=-1,\\quad y=5"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-a08",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A08",
     "source": "WS02 A · Basic Skills Q8",
     "stem": {
      "zh": "用消元法解聯立方程 $\\begin{cases}- 3 x - 2 y=3\\\\6 x + 5 y=-12\\end{cases}$。",
      "en": "Solve $\\begin{cases}- 3 x - 2 y=3\\\\6 x + 5 y=-12\\end{cases}$ by the method of elimination."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "- 3 x - 2 y=3\n6 x + 5 y=-12",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "- 15 x - 10 y=15\n12 x + 10 y=-24\n- 3 x=-9",
        "zh": "將第一條整式乘 $5$，第二條整式乘 $2$，再相加，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $5$ and the second by $2$, then add the equations to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=3",
        "zh": "等號兩邊同除以 $-3$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $-3$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "- 2 y - 9=3\ny=-6",
        "zh": "把 $x=3$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=3$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=3,\\quad y=-6",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=3,\\ y=-6$ 代回兩條原方程，左右分別得到 $3=3\\quad -12=-12$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=3,\\ y=-6$ into both original equations: $3=3\\quad -12=-12$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=4,\\quad y=-5",
        "x=3,\\quad y=-6",
        "x=4,\\quad y=-6",
        "x=3,\\quad y=-5"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-keysub",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-K1",
     "source": "WS02 A · Key Point 1 Example",
     "stem": {
      "zh": "用代入法解聯立方程 $m+n=3m+10n=7$。",
      "en": "Solve $m+n=3m+10n=7$ by the method of substitution."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "m + n=7\n3 m + 10 n=7",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "m=7 - n",
        "zh": "這條方程中，$m$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $m$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "7 n=-14\nn=-2",
        "zh": "用整個 $7 - n$ 取代另一條方程的每個 $m$，化簡並清去分母後，只剩一個未知數，再解出它。",
        "en": "Replace every $m$ in the other equation with the whole expression $7 - n$. Simplify, clear any denominators on both sides, and solve the equation in one unknown."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "m=7 - (-2)=9",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "m=9,\\quad n=-2",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $m=9,\\ n=-2$ 代回兩條原方程，左右分別得到 $7=7\\quad 7=7$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $m=9,\\ n=-2$ into both original equations: $7=7\\quad 7=7$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "m=10,\\quad n=-1",
        "m=9,\\quad n=-2",
        "m=10,\\quad n=-2",
        "m=9,\\quad n=-1"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-a09",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A09",
     "source": "WS02 A · Basic Skills Q9",
     "stem": {
      "zh": "用代數方法解聯立方程 $\\begin{cases}2 x - 3=y\\\\y=3 x + 1\\end{cases}$。",
      "en": "Solve $\\begin{cases}2 x - 3=y\\\\y=3 x + 1\\end{cases}$ by an algebraic method."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "2 x - 3=y\ny=3 x + 1",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "y=2 x - 3",
        "zh": "這條方程中，$y$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $y$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- x=4\nx=-4",
        "zh": "用整個 $2 x - 3$ 取代另一條方程的每個 $y$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $y$ in the other equation with the whole expression $2 x - 3$. Simplify and solve the equation in one unknown."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "y=2 (-4) - 3=-11",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=-4,\\quad y=-11",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=-4,\\ y=-11$ 代回兩條原方程，左右分別得到 $-11=-11\\quad -11=-11$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=-4,\\ y=-11$ into both original equations: $-11=-11\\quad -11=-11$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "x=-4,\\quad y=-11",
        "x=-3,\\quad y=-11",
        "x=-4,\\quad y=-10",
        "x=-3,\\quad y=-10"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-a10",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A10",
     "source": "WS02 A · Basic Skills Q10",
     "stem": {
      "zh": "用代數方法解聯立方程 $\\begin{cases}m - 2 n=20\\\\9 m + 2 n=20\\end{cases}$。",
      "en": "Solve $\\begin{cases}m - 2 n=20\\\\9 m + 2 n=20\\end{cases}$ by an algebraic method."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "m - 2 n=20\n9 m + 2 n=20",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "m - 2 n=20\n9 m + 2 n=20\n10 m=40",
        "zh": "將第一條整式乘 $1$，第二條整式乘 $1$，再相加，消去 $n$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $1$ and the second by $1$, then add the equations to eliminate $n$. Scale both sides; subtraction applies to the entire equation."
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "m=4",
        "zh": "等號兩邊同除以 $10$，得到 $m$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $10$ to find $m$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "4 - 2 n=20\nn=-8",
        "zh": "把 $m=4$ 代回原來第一條方程，求出 $n$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $m=4$ into the original first equation to find $n$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "m=4,\\quad n=-8",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $m=4,\\ n=-8$ 代回兩條原方程，左右分別得到 $20=20\\quad 20=20$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $m=4,\\ n=-8$ into both original equations: $20=20\\quad 20=20$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "m=5,\\quad n=-8",
        "m=4,\\quad n=-7",
        "m=5,\\quad n=-7",
        "m=4,\\quad n=-8"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-a11",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A11",
     "source": "WS02 A · Basic Skills Q11",
     "stem": {
      "zh": "用代數方法解聯立方程 $\\begin{cases}- p + 4 q=14\\\\- 3 p + 5 q=14\\end{cases}$。",
      "en": "Solve $\\begin{cases}- p + 4 q=14\\\\- 3 p + 5 q=14\\end{cases}$ by an algebraic method."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "- p + 4 q=14\n- 3 p + 5 q=14",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "p=4 q - 14",
        "zh": "這條方程中，$p$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $p$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 7 q=-28\nq=4",
        "zh": "用整個 $4 q - 14$ 取代另一條方程的每個 $p$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $p$ in the other equation with the whole expression $4 q - 14$. Simplify and solve the equation in one unknown."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "p=4 (4) - 14=2",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "p=2,\\quad q=4",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $p=2,\\ q=4$ 代回兩條原方程，左右分別得到 $14=14\\quad 14=14$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $p=2,\\ q=4$ into both original equations: $14=14\\quad 14=14$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "p=2,\\quad q=5",
        "p=3,\\quad q=5",
        "p=2,\\quad q=4",
        "p=3,\\quad q=4"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-a12",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 1,
     "code": "WS2-A12",
     "source": "WS02 A · Basic Skills Q12",
     "stem": {
      "zh": "用代數方法解聯立方程 $\\begin{cases}8 a + 3 b=35\\\\2 a + 6 b=35\\end{cases}$。",
      "en": "Solve $\\begin{cases}8 a + 3 b=35\\\\2 a + 6 b=35\\end{cases}$ by an algebraic method."
     },
     "review": null,
     "marks": 0,
     "kind": "short",
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "8 a + 3 b=35\n2 a + 6 b=35",
        "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "16 a + 6 b=70\n2 a + 6 b=35\n14 a=35",
        "zh": "將第一條整式乘 $2$，第二條整式乘 $1$，再第一條減第二條，消去 $b$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $2$ and the second by $1$, then subtract the second from the first to eliminate $b$. Scale both sides; subtraction applies to the entire equation."
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "a=\\dfrac{5}{2}",
        "zh": "等號兩邊同除以 $14$，得到 $a$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $14$ to find $a$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "3 b + 20=35\nb=5",
        "zh": "把 $a=\\dfrac{5}{2}$ 代回原來第一條方程，求出 $b$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $a=\\dfrac{5}{2}$ into the original first equation to find $b$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "a=\\dfrac{5}{2},\\quad b=5",
        "zh": "這一組數值同時滿足原來兩條方程，兩個未知數都要列出。",
        "en": "This pair satisfies both original equations. State both unknowns."
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "本題要找兩個未知數；只寫其中一個值，仍未完成題目。",
        "en": "This question asks for both unknowns; giving one value is incomplete."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $a=\\dfrac{5}{2},\\ b=5$ 代回兩條原方程，左右分別得到 $35=35\\quad 35=35$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $a=\\dfrac{5}{2},\\ b=5$ into both original equations: $35=35\\quad 35=35$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "a=\\dfrac{7}{2},\\quad b=6",
        "a=\\dfrac{5}{2},\\quad b=5",
        "a=\\dfrac{7}{2},\\quad b=5",
        "a=\\dfrac{5}{2},\\quad b=6"
       ],
       "answer": "B"
      }
     ]
    }
   ],
   "pages": [
    [
     {
      "id": "eph-ws02-w01",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-W01",
      "source": "WS02 · 基礎熱身",
      "stem": {
       "zh": "已知 $y=4x$。當 $x=2$ 時，$y$ 是多少？",
       "en": "Given $y=4x$, find $y$ when $x=2$."
      },
      "review": null,
      "options": {
       "A": "$2$",
       "B": "$4$",
       "C": "$6$",
       "D": "$8$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "只做這一步",
          "en": "One operation at a time"
         },
         "math": "y=4(2)=8",
         "zh": "把 $x$ 的值代入 $4x$，即 $4$ 乘 $2$；不是把 $x$ 直接抄成 $y$。",
         "en": "Substitute into $4x$: multiply $4$ by $2$. Do not copy the value of $x$ as $y$."
        },
        {
         "title": {
          "zh": "核對符號與題目要求",
          "en": "Check the signs and the request"
         },
         "math": "",
         "zh": "字母前面的係數也要一起計算。",
         "en": "Include the coefficient multiplying the unknown."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這是 $x$ 的值；題目要的是 $y=4x$，還要乘 $4$。",
         "en": "This is the value of $x$. The question asks for $y=4x$, so multiply by $4$."
        },
        {
         "opt": "B",
         "zh": "這是係數 $4$；仍要乘已知的 $x=2$。",
         "en": "This is the coefficient $4$. Multiply it by the given $x=2$."
        },
        {
         "opt": "C",
         "zh": "$4x$ 表示 $4\\times x$，不是 $4+x$；$4\\times2=8$。",
         "en": "$4x$ means $4\\times x$, not $4+x$; $4\\times2=8$."
        }
       ],
       "tip": {
        "zh": "字母前面的係數也要一起計算。",
        "en": "Include the coefficient multiplying the unknown."
       },
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-w02",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-W02",
      "source": "WS02 · 基礎熱身",
      "stem": {
       "zh": "把 $x-y=1$ 寫成以 $x$ 為主項的式子。",
       "en": "Make $x$ the subject of $x-y=1$."
      },
      "review": null,
      "options": {
       "A": "$x=y+1$",
       "B": "$x=1-y$",
       "C": "$x=y-1$",
       "D": "$x=-1-y$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "只做這一步",
          "en": "One operation at a time"
         },
         "math": "x-y=1\nx=1+y",
         "zh": "等號兩邊同加 $y$，左邊的 $-y$ 才會消去；右邊要加上 $y$。",
         "en": "Add $y$ to both sides. This cancels $-y$ on the left and adds $y$ on the right."
        },
        {
         "title": {
          "zh": "核對符號與題目要求",
          "en": "Check the signs and the request"
         },
         "math": "",
         "zh": "移項其實是等號兩邊做同一個運算。",
         "en": "Rearranging means applying the same operation to both sides."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "要消去左邊的 $-y$，等號兩邊同加 $y$，所以右邊是 $1+y$。",
         "en": "Cancel $-y$ by adding $y$ to both sides, making the right-hand side $1+y$."
        },
        {
         "opt": "C",
         "zh": "原式右邊是 $+1$；兩邊同加 $y$ 後得到 $x=y+1$，常數不會變成 $-1$。",
         "en": "The original constant is $+1$. Adding $y$ to both sides gives $x=y+1$; the constant does not become $-1$."
        },
        {
         "opt": "D",
         "zh": "保留右邊的 $+1$，並在兩邊同加 $y$，得到 $x=1+y$。",
         "en": "Keep the right-hand $+1$ and add $y$ to both sides to get $x=1+y$."
        }
       ],
       "tip": {
        "zh": "移項其實是等號兩邊做同一個運算。",
        "en": "Rearranging means applying the same operation to both sides."
       },
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-w03",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-W03",
      "source": "WS02 · 基礎熱身",
      "stem": {
       "zh": "化簡 $(2x-y)-(x-y)$。",
       "en": "Simplify $(2x-y)-(x-y)$."
      },
      "review": null,
      "options": {
       "A": "$x$",
       "B": "$3x$",
       "C": "$-x$",
       "D": "$x-2y$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "只做這一步",
          "en": "One operation at a time"
         },
         "math": "(2x-y)-(x-y)=2x-y-x+y=x",
         "zh": "第二個括號前面的減號同時作用於 $x$ 和 $-y$，所以得到 $-x+y$。",
         "en": "The minus before the second bracket applies to both $x$ and $-y$, giving $-x+y$."
        },
        {
         "title": {
          "zh": "核對符號與題目要求",
          "en": "Check the signs and the request"
         },
         "math": "",
         "zh": "相減的是整個括號；兩個 $y$ 項在這裡抵消。",
         "en": "Subtract the whole bracket. The two $y$ terms cancel here."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "第二個括號被減去，$2x-x=x$，不是 $2x+x$。",
         "en": "The second bracket is subtracted: $2x-x=x$, not $2x+x$."
        },
        {
         "opt": "C",
         "zh": "$2x-x=(2-1)x=x$，$x$ 項的係數是正的 $1$。",
         "en": "$2x-x=(2-1)x=x$; the coefficient of $x$ is positive $1$."
        },
        {
         "opt": "D",
         "zh": "$-(x-y)=-x+y$，所以兩個 $y$ 項抵消，不會得到 $-2y$。",
         "en": "$-(x-y)=-x+y$, so the two $y$ terms cancel rather than giving $-2y$."
        }
       ],
       "tip": {
        "zh": "相減的是整個括號；兩個 $y$ 項在這裡抵消。",
        "en": "Subtract the whole bracket. The two $y$ terms cancel here."
       },
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-w04",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-W04",
      "source": "WS02 · 基礎熱身",
      "stem": {
       "zh": "將方程 $2x-y=3$ 的兩邊同乘 $2$，得到哪一條？",
       "en": "Multiply both sides of $2x-y=3$ by $2$. Which equation results?"
      },
      "review": null,
      "options": {
       "A": "$4x-y=6$",
       "B": "$4x-2y=6$",
       "C": "$4x-2y=3$",
       "D": "$2x-2y=6$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "只做這一步",
          "en": "One operation at a time"
         },
         "math": "2(2x-y)=2(3)\n4x-2y=6",
         "zh": "左邊每一項都乘 $2$，右邊的 $3$ 也乘 $2$。不能只乘其中一項。",
         "en": "Multiply every term on the left by $2$ and multiply the right-hand $3$ by $2$ as well."
        },
        {
         "title": {
          "zh": "核對符號與題目要求",
          "en": "Check the signs and the request"
         },
         "math": "",
         "zh": "整條方程同乘一數，等式仍成立。",
         "en": "Scaling both sides preserves the equation."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "左邊的 $-y$ 也要乘 $2$，成為 $-2y$。",
         "en": "Multiply the left-hand $-y$ by $2$ as well, giving $-2y$."
        },
        {
         "opt": "C",
         "zh": "等號右邊也要乘 $2$：$3\\times2=6$。",
         "en": "Scale the right-hand side too: $3\\times2=6$."
        },
        {
         "opt": "D",
         "zh": "左邊的 $2x$ 也要乘 $2$，成為 $4x$。",
         "en": "Scale the term $2x$ too, giving $4x$."
        }
       ],
       "tip": {
        "zh": "整條方程同乘一數，等式仍成立。",
        "en": "Scaling both sides preserves the equation."
       },
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-cex01",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-CEX1",
      "source": "WS02 C · Example 1",
      "stem": {
       "zh": "若 $8x-9y=30=4x+3y$，求 $y$。",
       "en": "If $8x-9y=30=4x+3y$, then $y$ ="
      },
      "review": null,
      "options": {
       "A": "$-3$",
       "B": "$-2$",
       "C": "$2$",
       "D": "$6$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "8 x - 9 y=30\n4 x + 3 y=30",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "8 x - 9 y=30\n8 x + 6 y=60\n- 15 y=-30",
         "zh": "將第一條整式乘 $1$，第二條整式乘 $2$，再第一條減第二條，消去 $x$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $1$ and the second by $2$, then subtract the second from the first to eliminate $x$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "y=2",
         "zh": "等號兩邊同除以 $-15$，得到 $y$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $-15$ to find $y$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "8 x - 18=30\nx=6",
         "zh": "把 $y=2$ 代回原來第一條方程，求出 $x$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $y=2$ into the original first equation to find $x$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "y=2",
         "zh": "所求為 $y=2$，再對照選項。",
         "en": "The requested value is $y=2$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-3$；將兩條方程聯立求解後，題目所求是 $y=2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-3$, but solving both equations gives the requested value $y=2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $-2$；將兩條方程聯立求解後，題目所求是 $y=2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-2$, but solving both equations gives the requested value $y=2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $6$；將兩條方程聯立求解後，題目所求是 $y=2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $6$, but solving both equations gives the requested value $y=2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=6,\\ y=2$ 代回兩條原方程，左右分別得到 $30=30\\quad 30=30$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=6,\\ y=2$ into both original equations: $30=30\\quad 30=30$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-cpr01",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-CP1",
      "source": "WS02 C · Practice 1",
      "stem": {
       "zh": "若 $4m-3n=7=2m-5n$，求 $n$。",
       "en": "If $4m-3n=7=2m-5n$, then $n$ ="
      },
      "review": null,
      "options": {
       "A": "$-6$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$6$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "4 m - 3 n=7\n2 m - 5 n=7",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "4 m - 3 n=7\n4 m - 10 n=14\n7 n=-7",
         "zh": "將第一條整式乘 $1$，第二條整式乘 $2$，再第一條減第二條，消去 $m$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $1$ and the second by $2$, then subtract the second from the first to eliminate $m$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "n=-1",
         "zh": "等號兩邊同除以 $7$，得到 $n$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $7$ to find $n$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "4 m + 3=7\nm=1",
         "zh": "把 $n=-1$ 代回原來第一條方程，求出 $m$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $n=-1$ into the original first equation to find $m$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "n=-1",
         "zh": "所求為 $n=-1$，再對照選項。",
         "en": "The requested value is $n=-1$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-6$；將兩條方程聯立求解後，題目所求是 $n=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-6$, but solving both equations gives the requested value $n=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $1$；將兩條方程聯立求解後，題目所求是 $n=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $1$, but solving both equations gives the requested value $n=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $6$；將兩條方程聯立求解後，題目所求是 $n=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $6$, but solving both equations gives the requested value $n=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $m=1,\\ n=-1$ 代回兩條原方程，左右分別得到 $7=7\\quad 7=7$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $m=1,\\ n=-1$ into both original equations: $7=7\\quad 7=7$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-m01",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C01",
      "source": "WS02 C · Paper 2 Q1",
      "stem": {
       "zh": "若 $x + 2y = 7 and 3x + 4y = 11$，求 $x$。",
       "en": "If $x + 2y = 7 and 3x + 4y = 11$, then $x$ ="
      },
      "review": null,
      "options": {
       "A": "$-5$",
       "B": "$-3$",
       "C": "$3$",
       "D": "$5$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "x + 2 y=7\n3 x + 4 y=11",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "x=7 - 2 y",
         "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "- 2 y=-10\ny=5",
         "zh": "用整個 $7 - 2 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $x$ in the other equation with the whole expression $7 - 2 y$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "x=7 - 2 (5)=-3",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "x=-3",
         "zh": "所求為 $x=-3$，再對照選項。",
         "en": "The requested value is $x=-3$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-5$；將兩條方程聯立求解後，題目所求是 $x=-3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-5$, but solving both equations gives the requested value $x=-3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $3$；將兩條方程聯立求解後，題目所求是 $x=-3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $3$, but solving both equations gives the requested value $x=-3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $5$；將兩條方程聯立求解後，題目所求是 $x=-3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $5$, but solving both equations gives the requested value $x=-3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=-3,\\ y=5$ 代回兩條原方程，左右分別得到 $7=7\\quad 11=11$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=-3,\\ y=5$ into both original equations: $7=7\\quad 11=11$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m02",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C02",
      "source": "WS02 C · Paper 2 Q2",
      "stem": {
       "zh": "若 $a - 4b = 2 and 5a + 2b = -12$，求 $a$。",
       "en": "If $a - 4b = 2 and 5a + 2b = -12$, then $a$ ="
      },
      "review": null,
      "options": {
       "A": "$-2$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$2$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "a - 4 b=2\n5 a + 2 b=-12",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "a=4 b + 2",
         "zh": "這條方程中，$a$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $a$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "22 b=-22\nb=-1",
         "zh": "用整個 $4 b + 2$ 取代另一條方程的每個 $a$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $a$ in the other equation with the whole expression $4 b + 2$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "a=4 (-1) + 2=-2",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "a=-2",
         "zh": "所求為 $a=-2$，再對照選項。",
         "en": "The requested value is $a=-2$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "這個選項是 $-1$；將兩條方程聯立求解後，題目所求是 $a=-2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-1$, but solving both equations gives the requested value $a=-2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $1$；將兩條方程聯立求解後，題目所求是 $a=-2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $1$, but solving both equations gives the requested value $a=-2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $2$；將兩條方程聯立求解後，題目所求是 $a=-2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $2$, but solving both equations gives the requested value $a=-2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $a=-2,\\ b=-1$ 代回兩條原方程，左右分別得到 $2=2\\quad -12=-12$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $a=-2,\\ b=-1$ into both original equations: $2=2\\quad -12=-12$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m03",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C03",
      "source": "WS02 C · Paper 2 Q3",
      "stem": {
       "zh": "若 $3p - q = 13 and 9p + 2q = 4$，求 $q$。",
       "en": "If $3p - q = 13 and 9p + 2q = 4$, then $q$ ="
      },
      "review": null,
      "options": {
       "A": "$-7$",
       "B": "$-2$",
       "C": "$2$",
       "D": "$7$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "3 p - q=13\n9 p + 2 q=4",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "q=3 p - 13",
         "zh": "這條方程中，$q$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $q$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "15 p=30\np=2",
         "zh": "用整個 $3 p - 13$ 取代另一條方程的每個 $q$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $q$ in the other equation with the whole expression $3 p - 13$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "q=3 (2) - 13=-7",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "q=-7",
         "zh": "所求為 $q=-7$，再對照選項。",
         "en": "The requested value is $q=-7$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "這個選項是 $-2$；將兩條方程聯立求解後，題目所求是 $q=-7$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-2$, but solving both equations gives the requested value $q=-7$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $2$；將兩條方程聯立求解後，題目所求是 $q=-7$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $2$, but solving both equations gives the requested value $q=-7$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $7$；將兩條方程聯立求解後，題目所求是 $q=-7$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $7$, but solving both equations gives the requested value $q=-7$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $p=2,\\ q=-7$ 代回兩條原方程，左右分別得到 $13=13\\quad 4=4$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $p=2,\\ q=-7$ into both original equations: $13=13\\quad 4=4$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-m04",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C04",
      "source": "WS02 C · Paper 2 Q4",
      "stem": {
       "zh": "若 $x + 3y + 14 = 3x - y = 11$，求 $y$。",
       "en": "If $x + 3y + 14 = 3x - y = 11$, then $y$ ="
      },
      "review": null,
      "options": {
       "A": "$-8$",
       "B": "$-2$",
       "C": "$1$",
       "D": "$3$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "x + 3 y + 14=11\n3 x - y=11",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "x=- 3 y - 3",
         "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "- 10 y=20\ny=-2",
         "zh": "用整個 $- 3 y - 3$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $x$ in the other equation with the whole expression $- 3 y - 3$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "x=- 3 (-2) - 3=3",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "y=-2",
         "zh": "所求為 $y=-2$，再對照選項。",
         "en": "The requested value is $y=-2$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-8$；將兩條方程聯立求解後，題目所求是 $y=-2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-8$, but solving both equations gives the requested value $y=-2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $1$；將兩條方程聯立求解後，題目所求是 $y=-2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $1$, but solving both equations gives the requested value $y=-2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $3$；將兩條方程聯立求解後，題目所求是 $y=-2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $3$, but solving both equations gives the requested value $y=-2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=3,\\ y=-2$ 代回兩條原方程，左右分別得到 $11=11\\quad 11=11$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=3,\\ y=-2$ into both original equations: $11=11\\quad 11=11$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m05",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C05",
      "source": "WS02 C · Paper 2 Q5",
      "stem": {
       "zh": "若 $p + 2q + 11 = 3p - q = 13$，求 $p$。",
       "en": "If $p + 2q + 11 = 3p - q = 13$, then $p$ ="
      },
      "review": null,
      "options": {
       "A": "$-7$",
       "B": "$-1$",
       "C": "$4$",
       "D": "$6$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "p + 2 q + 11=13\n3 p - q=13",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "p=2 - 2 q",
         "zh": "這條方程中，$p$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $p$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "- 7 q=7\nq=-1",
         "zh": "用整個 $2 - 2 q$ 取代另一條方程的每個 $p$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $p$ in the other equation with the whole expression $2 - 2 q$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "p=2 - 2 (-1)=4",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "p=4",
         "zh": "所求為 $p=4$，再對照選項。",
         "en": "The requested value is $p=4$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-7$；將兩條方程聯立求解後，題目所求是 $p=4$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-7$, but solving both equations gives the requested value $p=4$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $-1$；將兩條方程聯立求解後，題目所求是 $p=4$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-1$, but solving both equations gives the requested value $p=4$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $6$；將兩條方程聯立求解後，題目所求是 $p=4$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $6$, but solving both equations gives the requested value $p=4$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $p=4,\\ q=-1$ 代回兩條原方程，左右分別得到 $13=13\\quad 13=13$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $p=4,\\ q=-1$ into both original equations: $13=13\\quad 13=13$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m06",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C06",
      "source": "WS02 C · Paper 2 Q6",
      "stem": {
       "zh": "若 $4r - s - 10 = r + 4s = 9$，求 $r$。",
       "en": "If $4r - s - 10 = r + 4s = 9$, then $r$ ="
      },
      "review": null,
      "options": {
       "A": "$-11$",
       "B": "$-6$",
       "C": "$1$",
       "D": "$5$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "4 r - s - 10=9\nr + 4 s=9",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "s=4 r - 19",
         "zh": "這條方程中，$s$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $s$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "17 r=85\nr=5",
         "zh": "用整個 $4 r - 19$ 取代另一條方程的每個 $s$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $s$ in the other equation with the whole expression $4 r - 19$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "s=4 (5) - 19=1",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "r=5",
         "zh": "所求為 $r=5$，再對照選項。",
         "en": "The requested value is $r=5$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-11$；將兩條方程聯立求解後，題目所求是 $r=5$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-11$, but solving both equations gives the requested value $r=5$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $-6$；將兩條方程聯立求解後，題目所求是 $r=5$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-6$, but solving both equations gives the requested value $r=5$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $1$；將兩條方程聯立求解後，題目所求是 $r=5$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $1$, but solving both equations gives the requested value $r=5$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $r=5,\\ s=1$ 代回兩條原方程，左右分別得到 $9=9\\quad 9=9$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $r=5,\\ s=1$ into both original equations: $9=9\\quad 9=9$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "D",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-m07",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C07",
      "source": "WS02 C · Paper 2 Q7",
      "stem": {
       "zh": "若 $3a + b = 5a + 3b = 8$，求 $b$。",
       "en": "If $3a + b = 5a + 3b = 8$, then $b$ ="
      },
      "review": null,
      "options": {
       "A": "$-11$",
       "B": "$-4$",
       "C": "$4$",
       "D": "$11$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "3 a + b=8\n5 a + 3 b=8",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "b=8 - 3 a",
         "zh": "這條方程中，$b$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $b$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "- 4 a=-16\na=4",
         "zh": "用整個 $8 - 3 a$ 取代另一條方程的每個 $b$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $b$ in the other equation with the whole expression $8 - 3 a$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "b=8 - 3 (4)=-4",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "b=-4",
         "zh": "所求為 $b=-4$，再對照選項。",
         "en": "The requested value is $b=-4$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-11$；將兩條方程聯立求解後，題目所求是 $b=-4$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-11$, but solving both equations gives the requested value $b=-4$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $4$；將兩條方程聯立求解後，題目所求是 $b=-4$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $4$, but solving both equations gives the requested value $b=-4$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $11$；將兩條方程聯立求解後，題目所求是 $b=-4$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $11$, but solving both equations gives the requested value $b=-4$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $a=4,\\ b=-4$ 代回兩條原方程，左右分別得到 $8=8\\quad 8=8$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $a=4,\\ b=-4$ into both original equations: $8=8\\quad 8=8$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m08",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C08",
      "source": "WS02 C · Paper 2 Q8",
      "stem": {
       "zh": "若 $4p - q = 9p + 4q = 5$，求 $q$。",
       "en": "If $4p - q = 9p + 4q = 5$, then $q$ ="
      },
      "review": null,
      "options": {
       "A": "$-5$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$5$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "4 p - q=5\n9 p + 4 q=5",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "q=4 p - 5",
         "zh": "這條方程中，$q$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $q$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "25 p=25\np=1",
         "zh": "用整個 $4 p - 5$ 取代另一條方程的每個 $q$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $q$ in the other equation with the whole expression $4 p - 5$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "q=4 (1) - 5=-1",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "q=-1",
         "zh": "所求為 $q=-1$，再對照選項。",
         "en": "The requested value is $q=-1$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-5$；將兩條方程聯立求解後，題目所求是 $q=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-5$, but solving both equations gives the requested value $q=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $1$；將兩條方程聯立求解後，題目所求是 $q=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $1$, but solving both equations gives the requested value $q=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $5$；將兩條方程聯立求解後，題目所求是 $q=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $5$, but solving both equations gives the requested value $q=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $p=1,\\ q=-1$ 代回兩條原方程，左右分別得到 $5=5\\quad 5=5$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $p=1,\\ q=-1$ into both original equations: $5=5\\quad 5=5$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m09",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C09",
      "source": "WS02 C · Paper 2 Q9",
      "stem": {
       "zh": "若 $x + 5y = 3x + 2y = 13$，求 $x$。",
       "en": "If $x + 5y = 3x + 2y = 13$, then $x$ ="
      },
      "review": null,
      "options": {
       "A": "$-3$",
       "B": "$-2$",
       "C": "$2$",
       "D": "$3$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "x + 5 y=13\n3 x + 2 y=13",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "x=13 - 5 y",
         "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "- 13 y=-26\ny=2",
         "zh": "用整個 $13 - 5 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $x$ in the other equation with the whole expression $13 - 5 y$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "x=13 - 5 (2)=3",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "x=3",
         "zh": "所求為 $x=3$，再對照選項。",
         "en": "The requested value is $x=3$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-3$；將兩條方程聯立求解後，題目所求是 $x=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-3$, but solving both equations gives the requested value $x=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $-2$；將兩條方程聯立求解後，題目所求是 $x=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-2$, but solving both equations gives the requested value $x=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $2$；將兩條方程聯立求解後，題目所求是 $x=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $2$, but solving both equations gives the requested value $x=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=3,\\ y=2$ 代回兩條原方程，左右分別得到 $13=13\\quad 13=13$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=3,\\ y=2$ into both original equations: $13=13\\quad 13=13$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "D",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-m10",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C10",
      "source": "WS02 C · Paper 2 Q10",
      "stem": {
       "zh": "若 $12x - 11y = 39 = 4x + 5y$，求 $y$。",
       "en": "If $12x - 11y = 39 = 4x + 5y$, then $y$ ="
      },
      "review": null,
      "options": {
       "A": "$-6$",
       "B": "$-3$",
       "C": "$3$",
       "D": "$6$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "12 x - 11 y=39\n4 x + 5 y=39",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "12 x - 11 y=39\n12 x + 15 y=117\n- 26 y=-78",
         "zh": "將第一條整式乘 $1$，第二條整式乘 $3$，再第一條減第二條，消去 $x$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $1$ and the second by $3$, then subtract the second from the first to eliminate $x$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "y=3",
         "zh": "等號兩邊同除以 $-26$，得到 $y$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $-26$ to find $y$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "12 x - 33=39\nx=6",
         "zh": "把 $y=3$ 代回原來第一條方程，求出 $x$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $y=3$ into the original first equation to find $x$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "y=3",
         "zh": "所求為 $y=3$，再對照選項。",
         "en": "The requested value is $y=3$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-6$；將兩條方程聯立求解後，題目所求是 $y=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-6$, but solving both equations gives the requested value $y=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $-3$；將兩條方程聯立求解後，題目所求是 $y=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-3$, but solving both equations gives the requested value $y=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $6$；將兩條方程聯立求解後，題目所求是 $y=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $6$, but solving both equations gives the requested value $y=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=6,\\ y=3$ 代回兩條原方程，左右分別得到 $39=39\\quad 39=39$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=6,\\ y=3$ into both original equations: $39=39\\quad 39=39$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m11",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C11",
      "source": "WS02 C · Paper 2 Q11",
      "stem": {
       "zh": "若 $9m + 10n = 8 = 3m - 2n$，求 $m$。",
       "en": "If $9m + 10n = 8 = 3m - 2n$, then $m$ ="
      },
      "review": null,
      "options": {
       "A": "$-4$",
       "B": "$-1$",
       "C": "$2$",
       "D": "$4$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "9 m + 10 n=8\n3 m - 2 n=8",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "9 m + 10 n=8\n15 m - 10 n=40\n24 m=48",
         "zh": "將第一條整式乘 $1$，第二條整式乘 $5$，再相加，消去 $n$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $1$ and the second by $5$, then add the equations to eliminate $n$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "m=2",
         "zh": "等號兩邊同除以 $24$，得到 $m$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $24$ to find $m$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "10 n + 18=8\nn=-1",
         "zh": "把 $m=2$ 代回原來第一條方程，求出 $n$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $m=2$ into the original first equation to find $n$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "m=2",
         "zh": "所求為 $m=2$，再對照選項。",
         "en": "The requested value is $m=2$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-4$；將兩條方程聯立求解後，題目所求是 $m=2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-4$, but solving both equations gives the requested value $m=2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $-1$；將兩條方程聯立求解後，題目所求是 $m=2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-1$, but solving both equations gives the requested value $m=2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $4$；將兩條方程聯立求解後，題目所求是 $m=2$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $4$, but solving both equations gives the requested value $m=2$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $m=2,\\ n=-1$ 代回兩條原方程，左右分別得到 $8=8\\quad 8=8$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $m=2,\\ n=-1$ into both original equations: $8=8\\quad 8=8$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m12",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C12",
      "source": "WS02 C · Paper 2 Q12",
      "stem": {
       "zh": "若 $5a + 6b = 27 = 17a - 12b$，求 $a$。",
       "en": "If $5a + 6b = 27 = 17a - 12b$, then $a$ ="
      },
      "review": null,
      "options": {
       "A": "$-3$",
       "B": "$2$",
       "C": "$3$",
       "D": "$7$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "5 a + 6 b=27\n17 a - 12 b=27",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "10 a + 12 b=54\n17 a - 12 b=27\n27 a=81",
         "zh": "將第一條整式乘 $2$，第二條整式乘 $1$，再相加，消去 $b$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $2$ and the second by $1$, then add the equations to eliminate $b$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "a=3",
         "zh": "等號兩邊同除以 $27$，得到 $a$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $27$ to find $a$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "6 b + 15=27\nb=2",
         "zh": "把 $a=3$ 代回原來第一條方程，求出 $b$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $a=3$ into the original first equation to find $b$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "a=3",
         "zh": "所求為 $a=3$，再對照選項。",
         "en": "The requested value is $a=3$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-3$；將兩條方程聯立求解後，題目所求是 $a=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-3$, but solving both equations gives the requested value $a=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $2$；將兩條方程聯立求解後，題目所求是 $a=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $2$, but solving both equations gives the requested value $a=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $7$；將兩條方程聯立求解後，題目所求是 $a=3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $7$, but solving both equations gives the requested value $a=3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $a=3,\\ b=2$ 代回兩條原方程，左右分別得到 $27=27\\quad 27=27$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $a=3,\\ b=2$ into both original equations: $27=27\\quad 27=27$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-m13",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C13",
      "source": "WS02 C · Paper 2 Q13",
      "stem": {
       "zh": "若 $x + 1 = y - 3 = 5x + y - 38$，求 $y$。",
       "en": "If $x + 1 = y - 3 = 5x + y - 38$, then $y$ ="
      },
      "review": null,
      "options": {
       "A": "$7$",
       "B": "$9$",
       "C": "$11$",
       "D": "$13$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "x + 1=y - 3\ny - 3=5 x + y - 38",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "x=y - 4",
         "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "- 5 y=-55\ny=11",
         "zh": "用整個 $y - 4$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $x$ in the other equation with the whole expression $y - 4$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "x=(11) - 4=7",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "y=11",
         "zh": "所求為 $y=11$，再對照選項。",
         "en": "The requested value is $y=11$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $7$；將兩條方程聯立求解後，題目所求是 $y=11$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $7$, but solving both equations gives the requested value $y=11$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $9$；將兩條方程聯立求解後，題目所求是 $y=11$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $9$, but solving both equations gives the requested value $y=11$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $13$；將兩條方程聯立求解後，題目所求是 $y=11$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $13$, but solving both equations gives the requested value $y=11$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=7,\\ y=11$ 代回兩條原方程，左右分別得到 $8=8\\quad 8=8$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=7,\\ y=11$ into both original equations: $8=8\\quad 8=8$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m14",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C14",
      "source": "WS02 C · Paper 2 Q14",
      "stem": {
       "zh": "若 $a - 4 = b - 10 = a - 5b + 11$，求 $a$。",
       "en": "If $a - 4 = b - 10 = a - 5b + 11$, then $a$ ="
      },
      "review": null,
      "options": {
       "A": "$-3$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$3$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "a - 4=b - 10\nb - 10=a - 5 b + 11",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "a=b - 6",
         "zh": "這條方程中，$a$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $a$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "5 b=15\nb=3",
         "zh": "用整個 $b - 6$ 取代另一條方程的每個 $a$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $a$ in the other equation with the whole expression $b - 6$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "a=(3) - 6=-3",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "a=-3",
         "zh": "所求為 $a=-3$，再對照選項。",
         "en": "The requested value is $a=-3$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "這個選項是 $-1$；將兩條方程聯立求解後，題目所求是 $a=-3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-1$, but solving both equations gives the requested value $a=-3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $1$；將兩條方程聯立求解後，題目所求是 $a=-3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $1$, but solving both equations gives the requested value $a=-3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $3$；將兩條方程聯立求解後，題目所求是 $a=-3$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $3$, but solving both equations gives the requested value $a=-3$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $a=-3,\\ b=3$ 代回兩條原方程，左右分別得到 $-7=-7\\quad -7=-7$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $a=-3,\\ b=3$ into both original equations: $-7=-7\\quad -7=-7$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m15",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-C15",
      "source": "WS02 C · Paper 2 Q15",
      "stem": {
       "zh": "若 $13 - 2p = q + 9 = 3q - 2p - 5$，求 $p$。",
       "en": "If $13 - 2p = q + 9 = 3q - 2p - 5$, then $p$ ="
      },
      "review": null,
      "options": {
       "A": "$-8$",
       "B": "$-6$",
       "C": "$-1$",
       "D": "$6$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "13 - 2 p=q + 9\nq + 9=- 2 p + 3 q - 5",
         "zh": "這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Both equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 把一個未知數獨立",
          "en": "Step 2 · Make one unknown the subject"
         },
         "math": "q=4 - 2 p",
         "zh": "這條方程中，$q$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
         "en": "The coefficient of $q$ is $1$ or $-1$, so isolate it before substituting."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入整個式子",
          "en": "Step 3 · Substitute the whole expression"
         },
         "math": "6 p=-6\np=-1",
         "zh": "用整個 $4 - 2 p$ 取代另一條方程的每個 $q$，化簡後只剩一個未知數，再解出它。",
         "en": "Replace every $q$ in the other equation with the whole expression $4 - 2 p$. Simplify and solve the equation in one unknown."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回求另一個未知數",
          "en": "Step 4 · Substitute back"
         },
         "math": "q=4 - 2 (-1)=6",
         "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
         "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "p=-1",
         "zh": "所求為 $p=-1$，再對照選項。",
         "en": "The requested value is $p=-1$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $-8$；將兩條方程聯立求解後，題目所求是 $p=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-8$, but solving both equations gives the requested value $p=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $-6$；將兩條方程聯立求解後，題目所求是 $p=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $-6$, but solving both equations gives the requested value $p=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $6$；將兩條方程聯立求解後，題目所求是 $p=-1$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $6$, but solving both equations gives the requested value $p=-1$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $p=-1,\\ q=6$ 代回兩條原方程，左右分別得到 $15=15\\quad 15=15$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $p=-1,\\ q=6$ into both original equations: $15=15\\quad 15=15$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ]
   ]
  },
  {
   "id": "ws02-2",
   "title": {
    "zh": "由文字建立方程",
    "en": "Modelling word problems"
   },
   "cards": [
    {
     "id": "ws02-c5",
     "topic": "ws02",
     "title": {
      "zh": "應用題：先分清數量與單價",
      "en": "Word problems: distinguish quantity from unit price"
     },
     "goal": {
      "zh": "為兩個未知量下定義，再把條件寫成方程。",
      "en": "Define two quantities before translating the conditions."
     },
     "body": {
      "zh": "先寫清 $x$、$y$ 代表甚麼，連同單位。\n例如 $x$ 是梨的單價，$y$ 是芒果的單價：{{math:0}}\n另一組購買條件提供第二條方程。{{math:1}}\n解出後，讀清楚要的是一個物品的單價、總數，還是兩者的差。",
      "en": "Define $x$ and $y$, including their units.\nFor example, let $x$ be the price of a pear and $y$ the price of a mango:{{math:0}}\nA second purchase gives a second equation.{{math:1}}\nAfter solving, check whether the request is a unit price, a total or a difference."
     },
     "math": [
      "2x+3y=33",
      "4x+7y=73"
     ],
     "warn": {
      "zh": "「兩個梨」不代表 $x=2$。若 $x$ 是單價，兩個梨的總價才是 $2x$。",
      "en": "“Two pears” does not mean $x=2$. If $x$ is a unit price, two pears cost $2x$."
     },
     "recall": {
      "prompt": {
       "zh": "每枝筆 $x$ 元、每本簿 $y$ 元。三枝筆與五本簿共售 $40$ 元，應列哪條？",
       "en": "Pens cost $x$ dollars and notebooks $y$ dollars each. Three pens and five notebooks cost 40 dollars. Which equation represents this?"
      },
      "options": [
       {
        "math": "3x+5y=40"
       },
       {
        "math": "5x+3y=40"
       },
       {
        "math": "x+y=40"
       }
      ],
      "answer": 0,
      "explanation": {
       "zh": "每類物品的數量乘單價，再相加：$3x+5y=40$。",
       "en": "Multiply each quantity by its unit price, then add: $3x+5y=40$."
      }
     },
     "vocab": [
      {
       "en": "unit price",
       "zh": "單價"
      },
      {
       "en": "total cost",
       "zh": "總價"
      }
     ]
    },
    {
     "id": "ws02-c6",
     "topic": "ws02",
     "title": {
      "zh": "轉移物品：一邊減，另一邊加",
      "en": "Transfers: subtract from one person, add to the other"
     },
     "goal": {
      "zh": "把原有人數／物品與改變後的數量分開。",
      "en": "Separate original quantities from quantities after a change."
     },
     "body": {
      "zh": "設 $x$、$y$ 為 Alan、Benny 原有的郵票數量。\n「Alan 是 Benny 的 $3$ 倍」描述原來的情況。{{math:0}}\nAlan 給 Benny $12$ 枚後，兩人的數量相同。{{math:1}}\n物品只在二人之間轉移，總數保持不變。{{math:2}}",
      "en": "Let $x$ and $y$ be the original numbers of stamps held by Alan and Benny.\n“Alan has three times as many” describes the original situation.{{math:0}}\nAfter Alan gives Benny $12$ stamps, the two numbers are equal.{{math:1}}\nA transfer between the two people leaves the total unchanged.{{math:2}}"
     },
     "math": [
      "x=3y",
      "x-12=y+12",
      "(x-12)+(y+12)=x+y"
     ],
     "warn": {
      "zh": "二人轉移物品時，接收的一方要增加；若只是某人離開課室，則不會自動令另一類人數增加。",
      "en": "In a transfer, the receiver gains the items. Someone leaving a room does not automatically increase the other group."
     },
     "recall": {
      "prompt": {
       "zh": "甲有 $x$ 枚、乙有 $y$ 枚；甲給乙 $5$ 枚後數量相同。哪條正確？",
       "en": "A has $x$ items and B has $y$. A gives B $5$ items and their numbers become equal. Which equation is correct?"
      },
      "options": [
       {
        "math": "x-5=y-5"
       },
       {
        "math": "x+5=y-5"
       },
       {
        "math": "x-5=y+5"
       }
      ],
      "answer": 2,
      "explanation": {
       "zh": "甲失去 $5$ 枚，乙得到 $5$ 枚，所以是 $x-5=y+5$。",
       "en": "A loses $5$ and B gains $5$, so $x-5=y+5$."
      }
     },
     "vocab": [
      {
       "en": "original",
       "zh": "改變前的數量"
      },
      {
       "en": "transfer",
       "zh": "轉移物品"
      }
     ]
    },
    {
     "id": "ws02-c7",
     "topic": "ws02",
     "title": {
      "zh": "百分比與比：先找比較基準",
      "en": "Percentages and ratios: identify the reference"
     },
     "goal": {
      "zh": "把「多／少百分之幾」寫成倍數。",
      "en": "Translate a percentage comparison into a multiplier."
     },
     "body": {
      "zh": "「男會員 $x$ 比女會員 $y$ 多 $20\\%$」，以 $y$ 為基準。{{math:0}}\n「雜誌 $x$ 比漫畫 $y$ 少 $25\\%$」，留下基準的 $75\\%$。{{math:1}}\n若兩個數的比為 $8:7$，亦可用等值方程表達。{{math:2}}",
      "en": "If male membership $x$ is $20\\%$ more than female membership $y$, the reference is $y$.{{math:0}}\nIf magazines $x$ are $25\\%$ fewer than comic books $y$, take $75\\%$ of the reference.{{math:1}}\nA ratio of $8:7$ can also be written as an equivalent equation.{{math:2}}"
     },
     "math": [
      "x=y+0.2y=1.2y",
      "x=y-0.25y=0.75y",
      "x:y=8:7\n7x=8y"
     ],
     "warn": {
      "zh": "男比女多 $20\\%$，不代表女比男少 $20\\%$，因為比較的基準已改變。",
      "en": "If men outnumber women by $20\\%$, women are not $20\\%$ fewer than men: the reference has changed."
     },
     "recall": {
      "prompt": {
       "zh": "若 $x$ 比 $y$ 多 $80\\%$，$x$ 等於多少？",
       "en": "If $x$ is $80\\%$ more than $y$, what is $x$?"
      },
      "options": [
       {
        "math": "0.8y"
       },
       {
        "math": "1.8y"
       },
       {
        "math": "y+80"
       }
      ],
      "answer": 1,
      "explanation": {
       "zh": "$x=y+0.8y=1.8y$，原有的 $100\\%$ 不能漏去。",
       "en": "$x=y+0.8y=1.8y$. Include the original $100\\%$."
      }
     },
     "vocab": [
      {
       "en": "more than",
       "zh": "比基準多"
      },
      {
       "en": "ratio",
       "zh": "比"
      }
     ]
    },
    {
     "id": "ws02-c8",
     "topic": "ws02",
     "title": {
      "zh": "路程題：統一時間單位再列式",
      "en": "Distance problems: use consistent time units"
     },
     "goal": {
      "zh": "用路程等於速率乘時間建立兩條方程。",
      "en": "Use distance equals speed times time to form two equations."
     },
     "body": {
      "zh": "若設 $x$、$y$ 為兩段所需的分鐘，時速要先換成每分鐘速率。{{math:0}}\n全程 $85$ 分鐘、$104$ 公里，提供兩個不同條件。{{math:1}}\n解出後，按題目的最後一句選擇所求的一段時間，單位仍是分鐘。",
      "en": "If $x$ and $y$ are the minutes for the two legs, convert hourly speeds to speeds per minute.{{math:0}}\nA total of $85$ minutes and $104$ kilometres gives two different conditions.{{math:1}}\nAfter solving, give the time for the requested leg, in minutes."
     },
     "math": [
      "66/60=1.1\n84/60=1.4",
      "x+y=85\n1.1x+1.4y=104"
     ],
     "warn": {
      "zh": "分鐘不能直接乘每小時速率來求公里數。也可把時間設為小時，但所有條件都要使用相同單位。",
      "en": "Minutes cannot directly multiply a speed in kilometres per hour to give kilometres. You may use hours instead, but keep all conditions consistent."
     },
     "recall": {
      "prompt": {
       "zh": "平均時速 $60$ 公里，行駛 $30$ 分鐘，共走多少公里？",
       "en": "At $60$ kilometres per hour, how far is travelled in $30$ minutes?"
      },
      "options": [
       {
        "math": "1800"
       },
       {
        "math": "30"
       },
       {
        "math": "2"
       }
      ],
      "answer": 1,
      "explanation": {
       "zh": "$60\\times(30/60)=30$ 公里；先把 $30$ 分鐘寫成半小時。",
       "en": "$60\\times(30/60)=30$ kilometres. Convert $30$ minutes to half an hour."
      }
     },
     "vocab": [
      {
       "en": "average speed",
       "zh": "平均速率"
      },
      {
       "en": "distance",
       "zh": "路程"
      }
     ]
    }
   ],
   "long": [
    {
     "id": "eph-ws02-bex01",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-BEX1",
     "source": "WS02 B · Example 1",
     "stem": {
      "zh": "Henry 的朱古力數量是 Winka 的 $2$ 倍。若 Henry 給 Winka $6$ 條，Winka 的數量便是 Henry 的 $5$ 倍。求二人共有多少條朱古力。",
      "en": "The number of chocolate bars owned by Henry is 2 times that owned by Winka. If Henry gives 6 of his chocolate bars to Winka, then the number of chocolate bars owned by Winka is 5 times that owned by Henry. Find the total number of chocolate bars owned by Henry and Winka."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=2 y\n5 x - 30=y + 6",
        "zh": "設 $x$ 為Henry 原有朱古力數量，$y$ 為Winka 原有朱古力數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be Henry’s original number of bars and $y$ be Winka’s original number of bars.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=2 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "9 y=36\ny=4",
        "zh": "用整個 $2 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $2 y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=2 (4)=8",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x + y=12",
        "zh": "最後要求 $x + y$，答案是 $12$ 條。",
        "en": "The final request is $x + y$, giving $12$ bars.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=8,\\ y=4$ 代回兩條原方程，左右分別得到 $8=8\\quad 10=10$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=8,\\ y=4$ into both original equations: $8=8\\quad 10=10$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "24",
        "12",
        "13",
        "11"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-bpr01",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-BP1",
     "source": "WS02 B · Practice 1",
     "stem": {
      "zh": "男孩的鎖匙扣數量是女孩的 $3$ 倍。若男孩給女孩 $10$ 個，男孩的數量便是女孩的一半。求二人共有多少個鎖匙扣。",
      "en": "The number of keychains owned by a boy is 3 times that owned by a girl. If the boy gives 10 of his keychains to the girl, then the number of keychains owned by the boy is half that owned by the girl. Find the total number of keychains owned by the boy and the girl."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=3 y\nx - 10=\\dfrac{y}{2} + 5",
        "zh": "設 $x$ 為男孩原有鎖匙扣數量，$y$ 為女孩原有鎖匙扣數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the boy’s original number of keychains and $y$ be the girl’s original number of keychains.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=3 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "5 y=30\ny=6",
        "zh": "用整個 $3 y$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $2$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $3 y$. After simplifying, multiply both sides by $2$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=3 (6)=18",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x + y=24",
        "zh": "最後要求 $x + y$，答案是 $24$ 個。",
        "en": "The final request is $x + y$, giving $24$ keychains.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=18,\\ y=6$ 代回兩條原方程，左右分別得到 $18=18\\quad 8=8$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=18,\\ y=6$ into both original equations: $18=18\\quad 8=8$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "24",
        "25",
        "23",
        "48"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-bex02",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-BEX2",
     "source": "WS02 B · Example 2",
     "stem": {
      "zh": "巴士上男乘客比女乘客多 $80\\%$。若 $56$ 名男乘客下車，女乘客便比男乘客多 $80\\%$。求女乘客人數。",
      "en": "On a bus, the number of male passengers is 80% more than the number of female passengers. If 56 male passengers get off the bus, then the number of female passengers is 80% more than the number of male passengers. Find the number of female passengers on the bus."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "y=\\dfrac{9 x}{5}\nx=\\dfrac{9 y}{5} - \\dfrac{504}{5}",
        "zh": "設 $x$ 為女乘客人數，$y$ 為原有男乘客人數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of female passengers and $y$ be the original number of male passengers.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "y=\\dfrac{9 x}{5}",
        "zh": "這條方程中，$y$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $y$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 56 x=-2520\nx=45",
        "zh": "用整個 $\\dfrac{9 x}{5}$ 取代另一條方程的每個 $y$，化簡後，等號兩邊同乘 $25$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $y$ in the other equation with the whole expression $\\dfrac{9 x}{5}$. After simplifying, multiply both sides by $25$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "y=\\dfrac{9 (45)}{5}=81",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=45",
        "zh": "最後要求 $x$，答案是 $45$ 人。",
        "en": "The final request is $x$, giving $45$ female passengers.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=45,\\ y=81$ 代回兩條原方程，左右分別得到 $81=81\\quad 45=45$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=45,\\ y=81$ into both original equations: $81=81\\quad 45=45$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "46",
        "44",
        "90",
        "45"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-bpr02",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-BP2",
     "source": "WS02 B · Practice 2",
     "stem": {
      "zh": "音樂廳內女觀眾比男觀眾多 $40\\%$。若再有 $480$ 名男觀眾進入，男觀眾便比女觀眾多 $40\\%$。求女觀眾人數。",
      "en": "In a concert hall, the number of female audiences is 40% more than the number of male audiences. If 480 more male audiences enter the hall, then the number of male audiences is 40% more than the number of female audiences. Find the number of female audiences in the hall."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=\\dfrac{7 y}{5}\ny + 480=\\dfrac{7 x}{5}",
        "zh": "設 $x$ 為女觀眾人數，$y$ 為原有男觀眾人數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of female audience members and $y$ be the original number of male audience members.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=\\dfrac{7 y}{5}",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 24 y=-12000\ny=500",
        "zh": "用整個 $\\dfrac{7 y}{5}$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $25$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $\\dfrac{7 y}{5}$. After simplifying, multiply both sides by $25$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=\\dfrac{7 (500)}{5}=700",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=700",
        "zh": "最後要求 $x$，答案是 $700$ 人。",
        "en": "The final request is $x$, giving $700$ female audience members.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=700,\\ y=500$ 代回兩條原方程，左右分別得到 $700=700\\quad 980=980$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=700,\\ y=500$ into both original equations: $700=700\\quad 980=980$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "699",
        "1400",
        "700",
        "701"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-b01",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B01",
     "source": "WS02 B · Paper 1 Q1",
     "stem": {
      "zh": "兩數 $x$、$y$ 的和是 $240$，且 $y$ 是 $x$ 的 $4$ 倍。求 $x$。",
      "en": "Let x and y be two numbers. The sum of x and y is 240 while the product of 4 and x is y. Find x."
     },
     "review": null,
     "marks": 3,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=240\ny=4 x",
        "zh": "設 $x$ 為x，$y$ 為y。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the first number and $y$ be the second number.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=240 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "5 y=960\ny=192",
        "zh": "用整個 $240 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $240 - y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=240 - (192)=48",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=48",
        "zh": "題目所求為 $x$，所以答案是 $48$ 數值。",
        "en": "The requested quantity is $x$, so the answer is $48$ number.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=48,\\ y=192$ 代回兩條原方程，左右分別得到 $240=240\\quad 192=192$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=48,\\ y=192$ into both original equations: $240=240\\quad 192=192$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "48",
        "49",
        "47",
        "96"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-b02",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B02",
     "source": "WS02 B · Paper 1 Q2",
     "stem": {
      "zh": "兩數 $x$、$y$ 的差是 $52$，且 $x$ 是 $y$ 的 $5$ 倍。求 $y$。",
      "en": "Let x and y be two numbers. The difference of x and y is 52 while x is 5 times y. Find y."
     },
     "review": null,
     "marks": 3,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x - y=52\nx=5 y",
        "zh": "設 $x$ 為x，$y$ 為y。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the first number and $y$ be the second number.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=y + 52",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 4 y=-52\ny=13",
        "zh": "用整個 $y + 52$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $y + 52$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=(13) + 52=65",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "y=13",
        "zh": "題目所求為 $y$，所以答案是 $13$ 數值。",
        "en": "The requested quantity is $y$, so the answer is $13$ number.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=65,\\ y=13$ 代回兩條原方程，左右分別得到 $52=52\\quad 65=65$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=65,\\ y=13$ into both original equations: $52=52\\quad 65=65$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "14",
        "12",
        "26",
        "13"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-b03",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B03",
     "source": "WS02 B · Paper 1 Q3",
     "stem": {
      "zh": "兩數 $x$、$y$ 的和是 $73$。若 $x$ 比 $y$ 的 $3$ 倍大 $1$，求 $y$。",
      "en": "The sum of two numbers x and y is 73. If x is greater than 3 times y by 1, find y."
     },
     "review": null,
     "marks": 3,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=73\nx=3 y + 1",
        "zh": "設 $x$ 為x，$y$ 為y。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the first number and $y$ be the second number.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=73 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 4 y=-72\ny=18",
        "zh": "用整個 $73 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $73 - y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=73 - (18)=55",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "y=18",
        "zh": "題目所求為 $y$，所以答案是 $18$ 數值。",
        "en": "The requested quantity is $y$, so the answer is $18$ number.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=55,\\ y=18$ 代回兩條原方程，左右分別得到 $73=73\\quad 55=55$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=55,\\ y=18$ into both original equations: $73=73\\quad 55=55$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "17",
        "36",
        "18",
        "19"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-b04",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B04",
     "source": "WS02 B · Paper 1 Q4",
     "stem": {
      "zh": "兩個梨與三個芒果共售 $33$ 元；四個梨與七個芒果共售 $73$ 元。求一個芒果的售價。",
      "en": "The price of 2 pears and 3 mangoes is \\$33 while the price of 4 pears and 7 mangoes is \\$73. Find the price of a mango."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "2 x + 3 y=33\n4 x + 7 y=73",
        "zh": "設 $x$ 為梨的單價，$y$ 為芒果的單價。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the price of a pear and $y$ be the price of a mango.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "4 x + 6 y=66\n4 x + 7 y=73\n- y=-7",
        "zh": "將第一條整式乘 $2$，第二條整式乘 $1$，再第一條減第二條，消去 $x$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $2$ and the second by $1$, then subtract the second from the first to eliminate $x$. Scale both sides; subtraction applies to the entire equation.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "y=7",
        "zh": "等號兩邊同除以 $-1$，得到 $y$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $-1$ to find $y$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "2 x + 21=33\nx=6",
        "zh": "把 $y=7$ 代回原來第一條方程，求出 $x$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $y=7$ into the original first equation to find $x$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "y=7",
        "zh": "題目所求為 $y$，所以答案是 $7$ 元。",
        "en": "The requested quantity is $y$, so the answer is $7$ dollars.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=6,\\ y=7$ 代回兩條原方程，左右分別得到 $33=33\\quad 73=73$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=6,\\ y=7$ into both original equations: $33=33\\quad 73=73$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "14",
        "7",
        "8",
        "6"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-b05",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B05",
     "source": "WS02 B · Paper 1 Q5",
     "stem": {
      "zh": "三個橙與五個蘋果共售 $37$ 元；七個橙與四個蘋果共售 $48$ 元。求一個橙的售價。",
      "en": "The price of 3 oranges and 5 apples is \\$37 while the price of 7 oranges and 4 apples is \\$48. Find the price of an orange."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "3 x + 5 y=37\n7 x + 4 y=48",
        "zh": "設 $x$ 為橙的單價，$y$ 為蘋果的單價。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the price of an orange and $y$ be the price of an apple.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "12 x + 20 y=148\n35 x + 20 y=240\n- 23 x=-92",
        "zh": "將第一條整式乘 $4$，第二條整式乘 $5$，再第一條減第二條，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $4$ and the second by $5$, then subtract the second from the first to eliminate $y$. Scale both sides; subtraction applies to the entire equation.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=4",
        "zh": "等號兩邊同除以 $-23$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $-23$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "5 y + 12=37\ny=5",
        "zh": "把 $x=4$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=4$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=4",
        "zh": "題目所求為 $x$，所以答案是 $4$ 元。",
        "en": "The requested quantity is $x$, so the answer is $4$ dollars.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=4,\\ y=5$ 代回兩條原方程，左右分別得到 $37=37\\quad 48=48$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=4,\\ y=5$ into both original equations: $37=37\\quad 48=48$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "4",
        "5",
        "3",
        "8"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-b06",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B06",
     "source": "WS02 B · Paper 1 Q6",
     "stem": {
      "zh": "鉛筆及擦膠的單價分別為 $3$ 元及 $4$ 元。買了共 $12$ 件，總價 $43$ 元。求鉛筆數量。",
      "en": "The prices of a pencil and a rubber are \\$3 and \\$4 respectively. A sum of \\$43 is spent buying some  pencils and rubbers. If the total number of pencils and rubbers bought is 12, find the number of  pencils bought."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "3 x + 4 y=43\nx + y=12",
        "zh": "設 $x$ 為鉛筆數量，$y$ 為擦膠數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of pencils and $y$ be the number of rubbers.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=12 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "y=7\ny=7",
        "zh": "用整個 $12 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $12 - y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=12 - (7)=5",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=5",
        "zh": "題目所求為 $x$，所以答案是 $5$ 枝。",
        "en": "The requested quantity is $x$, so the answer is $5$ pencils.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=5,\\ y=7$ 代回兩條原方程，左右分別得到 $43=43\\quad 12=12$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=5,\\ y=7$ into both original equations: $43=43\\quad 12=12$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "6",
        "4",
        "10",
        "5"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-b07",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B07",
     "source": "WS02 B · Paper 1 Q7",
     "stem": {
      "zh": "Gary 花 $99$ 元買了共 $35$ 枚郵票，面值分別為 $2.2$ 元及 $3.3$ 元。求 $2.2$ 元郵票的數量。",
      "en": "Gary buys some \\$2.2 stamps and \\$3.3 stamps for \\$99. If the total number of stamps bought is 35, how many \\$2.2 stamps does Gary buy?"
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "\\dfrac{11 x}{5} + \\dfrac{33 y}{10}=99\nx + y=35",
        "zh": "設 $x$ 為2.2 元郵票數量，$y$ 為3.3 元郵票數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of 2.2-dollar stamps and $y$ be the number of 3.3-dollar stamps.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=35 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "11 y=220\ny=20",
        "zh": "用整個 $35 - y$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $10$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $35 - y$. After simplifying, multiply both sides by $10$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=35 - (20)=15",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=15",
        "zh": "題目所求為 $x$，所以答案是 $15$ 枚。",
        "en": "The requested quantity is $x$, so the answer is $15$ stamps.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=15,\\ y=20$ 代回兩條原方程，左右分別得到 $99=99\\quad 35=35$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=15,\\ y=20$ into both original equations: $99=99\\quad 35=35$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "14",
        "30",
        "15",
        "16"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-b08",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B08",
     "source": "WS02 B · Paper 1 Q8",
     "stem": {
      "zh": "一盒蜜桃茶的價錢等於三瓶咖啡的價錢。三盒蜜桃茶與兩瓶咖啡共售 $154$ 元。求一瓶咖啡的價錢。",
      "en": "The cost of a carton of peach tea is the same as the cost of 3 bottles of coffee. The total cost of \n 3 cartons of peach tea and 2 bottles of coffee is \\$154. Find the cost of a bottle of coffee."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=3 y\n3 x + 2 y=154",
        "zh": "設 $x$ 為蜜桃茶單價，$y$ 為咖啡單價。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the price of a carton of peach tea and $y$ be the price of a bottle of coffee.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=3 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "11 y=154\ny=14",
        "zh": "用整個 $3 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $3 y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=3 (14)=42",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "y=14",
        "zh": "題目所求為 $y$，所以答案是 $14$ 元。",
        "en": "The requested quantity is $y$, so the answer is $14$ dollars.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=42,\\ y=14$ 代回兩條原方程，左右分別得到 $42=42\\quad 154=154$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=42,\\ y=14$ into both original equations: $42=42\\quad 154=154$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "28",
        "14",
        "15",
        "13"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-b09",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B09",
     "source": "WS02 B · Paper 1 Q9",
     "stem": {
      "zh": "Amy 與 Billy 共有 $84$ 本書。若 Amy 多買 $12$ 本，她的書本數量便是 Billy 的 $3$ 倍。求 Billy 的書本數量。",
      "en": "The total number of books owned by Amy and Billy is 84. If Amy buys 12 books from a book  store, the number of books owned by her will be 3 times that owned by Billy. Find the number of  books owned by Billy."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=84\nx + 12=3 y",
        "zh": "設 $x$ 為Amy 原有書本數量，$y$ 為Billy 的書本數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be Amy’s original number of books and $y$ be Billy’s number of books.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=84 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 4 y=-96\ny=24",
        "zh": "用整個 $84 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $84 - y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=84 - (24)=60",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "y=24",
        "zh": "題目所求為 $y$，所以答案是 $24$ 本。",
        "en": "The requested quantity is $y$, so the answer is $24$ books.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=60,\\ y=24$ 代回兩條原方程，左右分別得到 $84=84\\quad 72=72$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=60,\\ y=24$ into both original equations: $84=84\\quad 72=72$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "24",
        "25",
        "23",
        "48"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-b10",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B10",
     "source": "WS02 B · Paper 1 Q10",
     "stem": {
      "zh": "籃球聯賽中，每勝一場得 $2$ 分，賽和得 $1$ 分，落敗得 $0$ 分。冠軍共打 $42$ 場，得 $75$ 分，而且沒有落敗。求賽和場數。",
      "en": "In a basketball league, each team gains 2 points for a win, 1 point for a draw and 0 point for a loss.  The champion of the league plays 42 games and gains a total of 75 points. Given that the champion  does not lose any games, find the number of games that the champion draws."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=42\n2 x + y=75",
        "zh": "設 $x$ 為勝出場數，$y$ 為賽和場數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of wins and $y$ be the number of draws.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=42 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- y=-9\ny=9",
        "zh": "用整個 $42 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $42 - y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=42 - (9)=33",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "y=9",
        "zh": "題目所求為 $y$，所以答案是 $9$ 場。",
        "en": "The requested quantity is $y$, so the answer is $9$ draws.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=33,\\ y=9$ 代回兩條原方程，左右分別得到 $42=42\\quad 75=75$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=33,\\ y=9$ into both original equations: $42=42\\quad 75=75$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "10",
        "8",
        "18",
        "9"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-b11",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B11",
     "source": "WS02 B · Paper 1 Q11",
     "stem": {
      "zh": "遊戲中，每勝一場加 $500$ 分，賽和加 $200$ 分，落敗扣 $300$ 分。Alice 原有 $1300$ 分；完成 $20$ 場且沒有賽和後有 $4900$ 分。求勝出場數。",
      "en": "In a game, a player gains 500 points for a win, gains 200 points for a draw and loses 300 points for  a loss. Alice originally scores 1300 points. After playing 20 matches without any draws, she scores  4900 points. Find the number of matches that Alice wins."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=20\n500 x - 300 y=3600",
        "zh": "設 $x$ 為勝出場數，$y$ 為落敗場數。方程的分數是淨增加 $4900-1300=3600$，不是最後分數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of wins and $y$ be the number of losses.Use the score increase $4900-1300=3600$, not the final score, in the equation.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=20 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 800 y=-6400\ny=8",
        "zh": "用整個 $20 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $20 - y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=20 - (8)=12",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=12",
        "zh": "題目所求為 $x$，所以答案是 $12$ 場。",
        "en": "The requested quantity is $x$, so the answer is $12$ wins.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=12,\\ y=8$ 代回兩條原方程，左右分別得到 $20=20\\quad 3600=3600$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=12,\\ y=8$ into both original equations: $20=20\\quad 3600=3600$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "11",
        "24",
        "12",
        "13"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-b12",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B12",
     "source": "WS02 B · Paper 1 Q12",
     "stem": {
      "zh": "酒店只有雙床房及單床房，日租分別為 $1100$ 元及 $950$ 元。某天訂出的雙床房是單床房的 $3$ 倍，總租金為 $46750$ 元。求訂出的房間總數。",
      "en": "There are only two kinds of rooms provided by a hotel: double bed rooms and single bed rooms. The prices per day of a double bed room and a single bed room are \\$1100 and \\$950 respectively. On a certain day, the number of double bed rooms booked is 3 times the number of single bed rooms booked and the sum of money for the rooms booked is \\$46 750. Find the total number of rooms booked that day."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=3 y\n1100 x + 950 y=46750",
        "zh": "設 $x$ 為雙床房數量，$y$ 為單床房數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of double bed rooms and $y$ be the number of single bed rooms.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=3 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "4250 y=46750\ny=11",
        "zh": "用整個 $3 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $3 y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=3 (11)=33",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x + y=44",
        "zh": "題目所求為 $x + y$，所以答案是 $44$ 間。",
        "en": "The requested quantity is $x + y$, so the answer is $44$ rooms.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=33,\\ y=11$ 代回兩條原方程，左右分別得到 $33=33\\quad 46750=46750$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=33,\\ y=11$ into both original equations: $33=33\\quad 46750=46750$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "88",
        "44",
        "45",
        "43"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-b13",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B13",
     "source": "WS02 B · Paper 1 Q13",
     "stem": {
      "zh": "列車頭等及二等車票分別售 $109$ 元及 $68$ 元。某班車售出的二等票是頭等票的 $7$ 倍，總票價為 $22815$ 元。求售出的車票總數。",
      "en": "There are only two kinds of tickets for an express rail train: first class tickets and second class tickets. The prices per ride of a first class ticket and a second class ticket are \\$109 and \\$68 respectively. On a certain ride, the number of second class tickets sold is 7 times the number of first class tickets sold and the sum of money for the tickets sold is \\$22 815. Find the total number of tickets sold on that ride."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "y=7 x\n109 x + 68 y=22815",
        "zh": "設 $x$ 為頭等車票數量，$y$ 為二等車票數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of first class tickets and $y$ be the number of second class tickets.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "y=7 x",
        "zh": "這條方程中，$y$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $y$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "585 x=22815\nx=39",
        "zh": "用整個 $7 x$ 取代另一條方程的每個 $y$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $y$ in the other equation with the whole expression $7 x$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "y=7 (39)=273",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x + y=312",
        "zh": "題目所求為 $x + y$，所以答案是 $312$ 張。",
        "en": "The requested quantity is $x + y$, so the answer is $312$ tickets.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=39,\\ y=273$ 代回兩條原方程，左右分別得到 $273=273\\quad 22815=22815$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=39,\\ y=273$ into both original equations: $273=273\\quad 22815=22815$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "312",
        "313",
        "311",
        "624"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-b14",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B14",
     "source": "WS02 B · Paper 1 Q14",
     "stem": {
      "zh": "課室內男生人數是女生的 $2$ 倍。若 $10$ 名男生及 $2$ 名女生離開，男女生人數便相同。求原有學生總人數。",
      "en": "In a classroom, the number of boys is 2 times that of girls. If 10 boys and 2 girls leave the classroom,  then the number of boys and the number of girls will be the same. Find the original total number  of boys and girls in the classroom."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=2 y\nx - 10=y - 2",
        "zh": "設 $x$ 為原有男生人數，$y$ 為原有女生人數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the original number of boys and $y$ be the original number of girls.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=2 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "y=8\ny=8",
        "zh": "用整個 $2 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $2 y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=2 (8)=16",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x + y=24",
        "zh": "題目所求為 $x + y$，所以答案是 $24$ 人。",
        "en": "The requested quantity is $x + y$, so the answer is $24$ students.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=16,\\ y=8$ 代回兩條原方程，左右分別得到 $16=16\\quad 6=6$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=16,\\ y=8$ into both original equations: $16=16\\quad 6=6$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "25",
        "23",
        "48",
        "24"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-b15",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B15",
     "source": "WS02 B · Paper 1 Q15",
     "stem": {
      "zh": "Alan 的郵票數量是 Benny 的 $3$ 倍。若 Alan 給 Benny $12$ 枚郵票，二人的數量便相同。求二人共有多少枚郵票。",
      "en": "The number of stamps owned by Alan is 3 times that owned by Benny. If Alan gives 12 of his  stamps to Benny, they will have the same number of stamps. Find the total number of stamps  owned by Alan and Benny."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=3 y\nx - 12=y + 12",
        "zh": "設 $x$ 為Alan 原有郵票數量，$y$ 為Benny 原有郵票數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be Alan’s original number of stamps and $y$ be Benny’s original number of stamps.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=3 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "2 y=24\ny=12",
        "zh": "用整個 $3 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $3 y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=3 (12)=36",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x + y=48",
        "zh": "題目所求為 $x + y$，所以答案是 $48$ 枚。",
        "en": "The requested quantity is $x + y$, so the answer is $48$ stamps.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=36,\\ y=12$ 代回兩條原方程，左右分別得到 $36=36\\quad 24=24$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=36,\\ y=12$ into both original equations: $36=36\\quad 24=24$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "47",
        "96",
        "48",
        "49"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-b16",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B16",
     "source": "WS02 B · Paper 1 Q16",
     "stem": {
      "zh": "女孩的糖果數量是男孩的 $2$ 倍。若女孩給男孩 $30$ 粒糖果，男孩便有女孩的 $3$ 倍。求二人共有多少粒糖果。",
      "en": "The number of candies owned by a girl is 2 times that owned by a boy. If the girl gives 30 of her candies to the boy, then the number of candies owned by the boy is 3 times that owned by the girl.  Find the total number of candies owned by the girl and the boy."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=2 y\ny + 30=3 x - 90",
        "zh": "設 $x$ 為女孩原有糖果數量，$y$ 為男孩原有糖果數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the girl’s original number of candies and $y$ be the boy’s original number of candies.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=2 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 5 y=-120\ny=24",
        "zh": "用整個 $2 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $2 y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=2 (24)=48",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x + y=72",
        "zh": "題目所求為 $x + y$，所以答案是 $72$ 粒。",
        "en": "The requested quantity is $x + y$, so the answer is $72$ candies.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=48,\\ y=24$ 代回兩條原方程，左右分別得到 $48=48\\quad 54=54$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=48,\\ y=24$ into both original equations: $48=48\\quad 54=54$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "144",
        "72",
        "73",
        "71"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-b17",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B17",
     "source": "WS02 B · Paper 1 Q17",
     "stem": {
      "zh": "Kevin 的小說數量是 Jessie 的 $4$ 倍。若 Kevin 給 Jessie $10$ 本小說，Kevin 便有 Jessie 的 $2$ 倍。求二人共有多少本小說。",
      "en": "The number of fiction books owned by Kevin is 4 times that owned by Jessie. If Kevin gives 10 of  his fiction books to Jessie, then the number of fiction books owned by Kevin is 2 times that owned  by Jessie. Find the total number of fiction books owned by Kevin and Jessie."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=4 y\nx - 10=2 y + 20",
        "zh": "設 $x$ 為Kevin 原有小說數量，$y$ 為Jessie 原有小說數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be Kevin’s original number of books and $y$ be Jessie’s original number of books.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=4 y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "2 y=30\ny=15",
        "zh": "用整個 $4 y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $4 y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=4 (15)=60",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x + y=75",
        "zh": "題目所求為 $x + y$，所以答案是 $75$ 本。",
        "en": "The requested quantity is $x + y$, so the answer is $75$ books.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=60,\\ y=15$ 代回兩條原方程，左右分別得到 $60=60\\quad 50=50$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=60,\\ y=15$ into both original equations: $60=60\\quad 50=50$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "75",
        "76",
        "74",
        "150"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-b18",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B18",
     "source": "WS02 B · Paper 1 Q18",
     "stem": {
      "zh": "派對中男女的人數比為 $8:7$。若 $6$ 名男士及 $4$ 名女士離開，人數比變為 $10:9$。求原有男士人數。",
      "en": "In a party, the ratio of the number of men to the number of women is 8 : 7. If 6 men and 4 women  leave the party, then the ratio of the number of men to the number of women is 10 : 9. Find the  original number of men in the party."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "7 x=8 y\n9 x - 54=10 y - 40",
        "zh": "設 $x$ 為原有男士人數，$y$ 為原有女士人數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the original number of men and $y$ be the original number of women.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "35 x=40 y\n36 x - 216=40 y - 160\n- x=-56",
        "zh": "將第一條整式乘 $5$，第二條整式乘 $4$，再第一條減第二條，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $5$ and the second by $4$, then subtract the second from the first to eliminate $y$. Scale both sides; subtraction applies to the entire equation.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=56",
        "zh": "等號兩邊同除以 $-1$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $-1$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "392=8 y\ny=49",
        "zh": "把 $x=56$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=56$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=56",
        "zh": "題目所求為 $x$，所以答案是 $56$ 人。",
        "en": "The requested quantity is $x$, so the answer is $56$ men.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=56,\\ y=49$ 代回兩條原方程，左右分別得到 $392=392\\quad 450=450$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=56,\\ y=49$ into both original equations: $392=392\\quad 450=450$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "57",
        "55",
        "112",
        "56"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-b19",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B19",
     "source": "WS02 B · Paper 1 Q19",
     "stem": {
      "zh": "Anthony 與 Heidi 的貼紙數量比為 $5:3$。若 Anthony 給 Heidi $21$ 張貼紙，數量比變為 $7:9$。求 Anthony 原有貼紙數量。",
      "en": "The ratio of the number of stickers owned by Anthony to the number of stickers owned by Heidi is  5 : 3. If Anthony gives 21 of his own stickers to Heidi, then the ratio of the number of stickers  owned by Anthony to the number of stickers owned by Heidi is 7 : 9. Find the original number  of stickers owned by Anthony."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "3 x=5 y\n9 x - 189=7 y + 147",
        "zh": "設 $x$ 為Anthony 原有貼紙數量，$y$ 為Heidi 原有貼紙數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be Anthony’s original number of stickers and $y$ be Heidi’s original number of stickers.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 對齊係數，再消元",
         "en": "Step 2 · Match coefficients and eliminate"
        },
        "math": "21 x=35 y\n45 x - 945=35 y + 735\n- 24 x=-1680",
        "zh": "將第一條整式乘 $7$，第二條整式乘 $5$，再第一條減第二條，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
        "en": "Multiply the whole first equation by $7$ and the second by $5$, then subtract the second from the first to eliminate $y$. Scale both sides; subtraction applies to the entire equation.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 解一元一次方程",
         "en": "Step 3 · Solve the remaining equation"
        },
        "math": "x=70",
        "zh": "等號兩邊同除以 $-24$，得到 $x$ 的值；負係數也要連同符號一起處理。",
        "en": "Divide both sides by $-24$ to find $x$. Include the sign when dividing by a negative coefficient."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回另一個未知數",
         "en": "Step 4 · Find the other unknown"
        },
        "math": "210=5 y\ny=42",
        "zh": "把 $x=70$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
        "en": "Substitute $x=70$ into the original first equation to find $y$. Keep the two unknowns distinct."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=70",
        "zh": "題目所求為 $x$，所以答案是 $70$ 張。",
        "en": "The requested quantity is $x$, so the answer is $70$ stickers.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=70,\\ y=42$ 代回兩條原方程，左右分別得到 $210=210\\quad 441=441$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=70,\\ y=42$ into both original equations: $210=210\\quad 441=441$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "69",
        "140",
        "70",
        "71"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-b20",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B20",
     "source": "WS02 B · Paper 1 Q20",
     "stem": {
      "zh": "開放日有 $84$ 名助手，平均分成 $4$ 組；每組男助手比女助手多 $3$ 人。求全部女助手的人數。",
      "en": "There are 84 helpers in an open day. The helpers are divided into 4 groups, and each group has the  same number of helpers. In each group, there are 3 more male helpers than female helpers. Find  the number of female helpers in the open day."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=84\nx - y=12",
        "zh": "設 $x$ 為全部男助手人數，$y$ 為全部女助手人數。每組相差 $3$ 人，共 $4$ 組，因此總人數相差 $12$ 人。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the total number of male helpers and $y$ be the total number of female helpers.Four groups with a difference of $3$ per group give a total difference of $12$.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=84 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 2 y=-72\ny=36",
        "zh": "用整個 $84 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $84 - y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=84 - (36)=48",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "y=36",
        "zh": "題目所求為 $y$，所以答案是 $36$ 人。",
        "en": "The requested quantity is $y$, so the answer is $36$ female helpers.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=48,\\ y=36$ 代回兩條原方程，左右分別得到 $84=84\\quad 12=12$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=48,\\ y=36$ into both original equations: $84=84\\quad 12=12$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "72",
        "36",
        "37",
        "35"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-b21",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B21",
     "source": "WS02 B · Paper 1 Q21",
     "stem": {
      "zh": "珠寶展有 $140$ 名保安，平均分配到 $5$ 區；每區女保安比男保安少 $6$ 人。求全部男保安的人數。",
      "en": "There are 140 guards in an international jewellery exhibition consisting of 5 zones. Each zone has  the same number of guards. In each zone, there are 6 less female guards than male guards. Find the  number of male guards in the exhibition."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=140\nx - y=30",
        "zh": "設 $x$ 為全部男保安人數，$y$ 為全部女保安人數。每區相差 $6$ 人，共 $5$ 區，因此總人數相差 $30$ 人。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the total number of male guards and $y$ be the total number of female guards.Five zones with a difference of $6$ per zone give a total difference of $30$.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=140 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 2 y=-110\ny=55",
        "zh": "用整個 $140 - y$ 取代另一條方程的每個 $x$，化簡後只剩一個未知數，再解出它。",
        "en": "Replace every $x$ in the other equation with the whole expression $140 - y$. Simplify and solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=140 - (55)=85",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=85",
        "zh": "題目所求為 $x$，所以答案是 $85$ 人。",
        "en": "The requested quantity is $x$, so the answer is $85$ male guards.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=85,\\ y=55$ 代回兩條原方程，左右分別得到 $140=140\\quad 30=30$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=85,\\ y=55$ into both original equations: $140=140\\quad 30=30$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "85",
        "86",
        "84",
        "170"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-b22",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B22",
     "source": "WS02 B · Paper 1 Q22",
     "stem": {
      "zh": "健身中心有 $990$ 名會員，男會員比女會員多 $20\\%$。求男女會員人數之差。",
      "en": "In a fitness centre, there are 990 members and the number of male members is 20% more than the  number of female members. Find the difference of the numbers of male members and female  members."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=990\nx=\\dfrac{6 y}{5}",
        "zh": "設 $x$ 為男會員人數，$y$ 為女會員人數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of male members and $y$ be the number of female members.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=990 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 11 y=-4950\ny=450",
        "zh": "用整個 $990 - y$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $5$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $990 - y$. After simplifying, multiply both sides by $5$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=990 - (450)=540",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x - y=90",
        "zh": "題目所求為 $x - y$，所以答案是 $90$ 人。",
        "en": "The requested quantity is $x - y$, so the answer is $90$ members.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=540,\\ y=450$ 代回兩條原方程，左右分別得到 $990=990\\quad 540=540$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=540,\\ y=450$ into both original equations: $990=990\\quad 540=540$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "91",
        "89",
        "180",
        "90"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-b23",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B23",
     "source": "WS02 B · Paper 1 Q23",
     "stem": {
      "zh": "書架上有 $154$ 本雜誌及漫畫；雜誌數量比漫畫少 $25\\%$。求兩類書本數量之差。",
      "en": "There are 154 magazines and comic books on a bookshelf. The number of magazines is 25% less  than the number of comic books. Find the difference of the numbers of comic books and magazines."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x + y=154\nx=\\dfrac{3 y}{4}",
        "zh": "設 $x$ 為雜誌數量，$y$ 為漫畫數量。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of magazines and $y$ be the number of comic books.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=154 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 7 y=-616\ny=88",
        "zh": "用整個 $154 - y$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $4$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $154 - y$. After simplifying, multiply both sides by $4$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=154 - (88)=66",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "- x + y=22",
        "zh": "題目所求為 $- x + y$，所以答案是 $22$ 本。",
        "en": "The requested quantity is $- x + y$, so the answer is $22$ books.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=66,\\ y=88$ 代回兩條原方程，左右分別得到 $154=154\\quad 66=66$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=66,\\ y=88$ into both original equations: $154=154\\quad 66=66$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "21",
        "44",
        "22",
        "23"
       ],
       "answer": "C"
      }
     ]
    },
    {
     "id": "eph-ws02-b24",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B24",
     "source": "WS02 B · Paper 1 Q24",
     "stem": {
      "zh": "電車上男乘客比女乘客多 $50\\%$。若 $25$ 名男乘客下車，女乘客便比男乘客多 $50\\%$。求女乘客人數。",
      "en": "On a tram, the number of male passengers is 50% more than the number of female passengers. If  25 male passengers get off the tram, then the number of female passengers is 50% more than the  number of male passengers. Find the number of female passengers on the tram."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=\\dfrac{3 y}{2}\ny=\\dfrac{3 x}{2} - \\dfrac{75}{2}",
        "zh": "設 $x$ 為原有男乘客人數，$y$ 為女乘客人數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the original number of male passengers and $y$ be the number of female passengers.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=\\dfrac{3 y}{2}",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 5 y=-150\ny=30",
        "zh": "用整個 $\\dfrac{3 y}{2}$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $4$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $\\dfrac{3 y}{2}$. After simplifying, multiply both sides by $4$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=\\dfrac{3 (30)}{2}=45",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "y=30",
        "zh": "題目所求為 $y$，所以答案是 $30$ 人。",
        "en": "The requested quantity is $y$, so the answer is $30$ female passengers.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=45,\\ y=30$ 代回兩條原方程，左右分別得到 $45=45\\quad 30=30$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=45,\\ y=30$ into both original equations: $45=45\\quad 30=30$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "60",
        "30",
        "31",
        "29"
       ],
       "answer": "B"
      }
     ]
    },
    {
     "id": "eph-ws02-b25",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B25",
     "source": "WS02 B · Paper 1 Q25",
     "stem": {
      "zh": "禮堂內老師人數比學生多 $20\\%$。若再有 $22$ 名學生進入，學生便比老師多 $20\\%$。求老師人數。",
      "en": "In a school hall, the number of teachers is 20% more than the number of students. If 22 more students enter the hall, then the number of students is 20% more than the number of teachers. Find the number of teachers in the hall."
     },
     "review": null,
     "marks": 4,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 整理兩條方程",
         "en": "Step 1 · Write the two equations"
        },
        "math": "x=\\dfrac{6 y}{5}\ny + 22=\\dfrac{6 x}{5}",
        "zh": "設 $x$ 為老師人數，$y$ 為原有學生人數。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the number of teachers and $y$ be the original number of students.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 把一個未知數獨立",
         "en": "Step 2 · Make one unknown the subject"
        },
        "math": "x=\\dfrac{6 y}{5}",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 3 步 · 代入整個式子",
         "en": "Step 3 · Substitute the whole expression"
        },
        "math": "- 11 y=-550\ny=50",
        "zh": "用整個 $\\dfrac{6 y}{5}$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $25$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $\\dfrac{6 y}{5}$. After simplifying, multiply both sides by $25$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 代回求另一個未知數",
         "en": "Step 4 · Substitute back"
        },
        "math": "x=\\dfrac{6 (50)}{5}=60",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫回題目要求，並核對",
         "en": "Step 5 · State what was asked and check"
        },
        "math": "x=60",
        "zh": "題目所求為 $x$，所以答案是 $60$ 人。",
        "en": "The requested quantity is $x$, so the answer is $60$ teachers.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=60,\\ y=50$ 代回兩條原方程，左右分別得到 $60=60\\quad 72=72$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=60,\\ y=50$ into both original equations: $60=60\\quad 72=72$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "60",
        "61",
        "59",
        "120"
       ],
       "answer": "A"
      }
     ]
    },
    {
     "id": "eph-ws02-b26",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B26",
     "source": "WS02 B · Paper 1 Q26",
     "stem": {
      "zh": "Anson 由城市 X 駕車到 Y，平均時速 $66$ 公里；再由 Y 到 Z，平均時速 $84$ 公里。全程 $104$ 公里，共需 $85$ 分鐘。求 Y 到 Z 的行車時間。",
      "en": "Anson drives from city X to city Y at an average speed of 66 km/h and then he drives from city Y  to city Z at an average speed of 84 km/h. It is given that Anson drives 104 km in 85 minutes for the  whole journey. How long does Anson take to drive from city Y to city Z?"
     },
     "review": null,
     "marks": 5,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 先統一單位",
         "en": "Step 1 · Use consistent units"
        },
        "math": "\\frac{66}{60}=1.1\n\\frac{84}{60}=1.4",
        "zh": "時間設為分鐘，所以先把時速除以 $60$，改為每分鐘的路程；每段路程等於速率乘時間。",
        "en": "Time is in minutes, so divide each hourly speed by $60$ to get kilometres per minute. Distance equals speed times time for each leg.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 整理兩條方程",
         "en": "Step 2 · Write the two equations"
        },
        "math": "x + y=85\n\\dfrac{11 x}{10} + \\dfrac{7 y}{5}=104",
        "zh": "設 $x$ 為X 至 Y 所需分鐘，$y$ 為Y 至 Z 所需分鐘。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the minutes from X to Y and $y$ be the minutes from Y to Z.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 把一個未知數獨立",
         "en": "Step 3 · Make one unknown the subject"
        },
        "math": "x=85 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 4 步 · 代入整個式子",
         "en": "Step 4 · Substitute the whole expression"
        },
        "math": "3 y=105\ny=35",
        "zh": "用整個 $85 - y$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $10$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $85 - y$. After simplifying, multiply both sides by $10$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 5 步 · 代回求另一個未知數",
         "en": "Step 5 · Substitute back"
        },
        "math": "x=85 - (35)=50",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 6 步 · 寫回題目要求，並核對",
         "en": "Step 6 · State what was asked and check"
        },
        "math": "y=35",
        "zh": "題目所求為 $y$，所以答案是 $35$ 分鐘。",
        "en": "The requested quantity is $y$, so the answer is $35$ minutes.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=50,\\ y=35$ 代回兩條原方程，左右分別得到 $85=85\\quad 104=104$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=50,\\ y=35$ into both original equations: $85=85\\quad 104=104$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "36",
        "34",
        "70",
        "35"
       ],
       "answer": "D"
      }
     ]
    },
    {
     "id": "eph-ws02-b27",
     "type": "long",
     "topic": "ws02",
     "unit": 5,
     "subtopic": "simultaneous-linear-equations",
     "difficulty": 2,
     "code": "WS2-B27",
     "source": "WS02 B · Paper 1 Q27",
     "stem": {
      "zh": "遊艇由碼頭 A 駛到 B，平均時速 $96$ 公里；再由 B 到 C，平均時速 $78$ 公里。全程 $98$ 公里，共需 $65$ 分鐘。求 A 到 B 所需時間。",
      "en": "A yacht sails from pier A to pier B at an average speed of 96 km/h and then the yacht sails from  pier B to pier C at an average speed of 78 km/h. It is given that the yacht sails 98 km in 65 minutes  for the whole journey. How long does the yacht take to sail from pier A to pier B?  Name: ____________________ (    )    Class:                Date:"
     },
     "review": null,
     "marks": 5,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 先統一單位",
         "en": "Step 1 · Use consistent units"
        },
        "math": "\\frac{96}{60}=1.6\n\\frac{78}{60}=1.3",
        "zh": "時間設為分鐘，所以先把時速除以 $60$，改為每分鐘的路程；每段路程等於速率乘時間。",
        "en": "Time is in minutes, so divide each hourly speed by $60$ to get kilometres per minute. Distance equals speed times time for each leg.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 整理兩條方程",
         "en": "Step 2 · Write the two equations"
        },
        "math": "x + y=65\n\\dfrac{8 x}{5} + \\dfrac{13 y}{10}=98",
        "zh": "設 $x$ 為A 至 B 所需分鐘，$y$ 為B 至 C 所需分鐘。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
        "en": "Let $x$ be the minutes from A to B and $y$ be the minutes from B to C.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 把一個未知數獨立",
         "en": "Step 3 · Make one unknown the subject"
        },
        "math": "x=65 - y",
        "zh": "這條方程中，$x$ 的係數是 $1$ 或 $-1$，先把它寫成另一個未知數的式子。",
        "en": "The coefficient of $x$ is $1$ or $-1$, so isolate it before substituting."
       },
       {
        "title": {
         "zh": "第 4 步 · 代入整個式子",
         "en": "Step 4 · Substitute the whole expression"
        },
        "math": "- 3 y=-60\ny=20",
        "zh": "用整個 $65 - y$ 取代另一條方程的每個 $x$，化簡後，等號兩邊同乘 $10$ 清去分母，再解出餘下的未知數。",
        "en": "Replace every $x$ in the other equation with the whole expression $65 - y$. After simplifying, multiply both sides by $10$ to clear the denominators, then solve the equation in one unknown.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 5 步 · 代回求另一個未知數",
         "en": "Step 5 · Substitute back"
        },
        "math": "x=65 - (20)=45",
        "zh": "將剛求得的數值代回已整理的式子，求出另一個未知數。兩個值都要寫清楚。",
        "en": "Substitute the value into the rearranged expression to find the other unknown. State both values clearly."
       },
       {
        "title": {
         "zh": "第 6 步 · 寫回題目要求，並核對",
         "en": "Step 6 · State what was asked and check"
        },
        "math": "x=45",
        "zh": "題目所求為 $x$，所以答案是 $45$ 分鐘。",
        "en": "The requested quantity is $x$, so the answer is $45$ minutes.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代入或消元漏了符號",
        "labelEn": "Losing a sign when substituting or eliminating",
        "zh": "代入整個式子時保留括號；整條方程相減時，每一項及等號右邊都要處理。完成後代回兩式，不能只核對其中一條。",
        "en": "Keep brackets around a substituted expression. When subtracting equations, include every term and the right-hand side. Check both originals, not just one."
       },
       {
        "label": "未回應題目的最後一句",
        "labelEn": "Not answering the final request",
        "zh": "先分清 $x$、$y$ 各代表哪個量，再按最後一句選擇所求數值、總數或差，並補回單位。",
        "en": "Identify what $x$ and $y$ represent. Follow the final sentence to give the requested value, total or difference, with units."
       }
      ],
      "tip": {
       "zh": "兩個未知數，要同時滿足兩條方程；最後回到題目核對所求的量。",
       "en": "The same pair must satisfy both equations. Finish by checking the quantity requested."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "將整組 $x=45,\\ y=20$ 代回兩條原方程，左右分別得到 $65=65\\quad 98=98$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
        "en": "Substitute the complete pair $x=45,\\ y=20$ into both original equations: $65=65\\quad 98=98$. Both must hold. Then check which quantity the question asks for."
       }
      ],
      "reflect": {
       "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
       "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
      }
     },
     "answer": null,
     "verify": "checked",
     "checks": [
      {
       "part": "",
       "options": [
        "44",
        "90",
        "45",
        "46"
       ],
       "answer": "C"
      }
     ]
    }
   ],
   "pages": [
    [
     {
      "id": "eph-ws02-w05",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-W05",
      "source": "WS02 · 基礎熱身",
      "stem": {
       "zh": "鉛筆每枝 $3$ 元，擦膠每個 $4$ 元。買了 $x$ 枝鉛筆、$y$ 個擦膠，共付 $43$ 元。哪條方程表示總價？",
       "en": "Pencils cost 3 dollars each and rubbers cost 4 dollars each. Buying $x$ pencils and $y$ rubbers costs 43 dollars. Which equation represents the total cost?"
      },
      "review": null,
      "options": {
       "A": "$x+y=43$",
       "B": "$4x+3y=43$",
       "C": "$3x+4y=43$",
       "D": "$3x-4y=43$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "只做這一步",
          "en": "One operation at a time"
         },
         "math": "3x+4y=43",
         "zh": "鉛筆總價是 $3x$，擦膠總價是 $4y$。兩項相加，才是總支出 $43$ 元。",
         "en": "The pencils cost $3x$ and the rubbers cost $4y$. Add the two costs to obtain the total of 43 dollars."
        },
        {
         "title": {
          "zh": "核對符號與題目要求",
          "en": "Check the signs and the request"
         },
         "math": "",
         "zh": "先辨認數量與單價：單價乘數量，才是總價。",
         "en": "Distinguish quantity from unit price: price times quantity gives cost."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x+y$ 是物品總數；本題的 $43$ 是總價，需要把數量分別乘單價。",
         "en": "$x+y$ counts items, while 43 is the total cost. Multiply each quantity by its unit price."
        },
        {
         "opt": "B",
         "zh": "鉛筆的 $x$ 要乘單價 $3$；擦膠的 $y$ 要乘單價 $4$，不能交換。",
         "en": "Pencils $x$ multiply their price $3$; rubbers $y$ multiply their price $4$. Keep the labels matched."
        },
        {
         "opt": "D",
         "zh": "兩類物品的支出相加才是總價，不是相減。",
         "en": "Add the costs of the two kinds of items to get the total; do not subtract them."
        }
       ],
       "tip": {
        "zh": "先辨認數量與單價：單價乘數量，才是總價。",
        "en": "Distinguish quantity from unit price: price times quantity gives cost."
       },
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-w06",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 1,
      "code": "WS2-W06",
      "source": "WS02 · 基礎熱身",
      "stem": {
       "zh": "男生人數 $x$ 比女生人數 $y$ 多 $20\\%$。哪個關係正確？",
       "en": "The number of boys, $x$, is $20\\%$ more than the number of girls, $y$. Which relation is correct?"
      },
      "review": null,
      "options": {
       "A": "$x=0.2y$",
       "B": "$x=0.8y$",
       "C": "$x=y+20$",
       "D": "$x=1.2y$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "只做這一步",
          "en": "One operation at a time"
         },
         "math": "x=y+0.2y=1.2y",
         "zh": "以女生人數 $y$ 為基準。原有的 $100\\%$ 加上 $20\\%$，就是 $120\\%$，即 $1.2y$。",
         "en": "Use $y$ as the reference. The original $100\\%$ plus $20\\%$ is $120\\%$, or $1.2y$."
        },
        {
         "title": {
          "zh": "核對符號與題目要求",
          "en": "Check the signs and the request"
         },
         "math": "",
         "zh": "多百分之幾，要先指出以哪一個量為基準。",
         "en": "Identify the reference quantity before interpreting a percentage increase."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$0.2y$ 只表示多出的人數；男生總人數還包括原有的 $y$。",
         "en": "$0.2y$ is only the excess. The total number of boys also includes the original $y$."
        },
        {
         "opt": "B",
         "zh": "$0.8y$ 是比 $y$ 少 $20\\%$；題目是多 $20\\%$。",
         "en": "$0.8y$ is $20\\%$ less than $y$, but the question says $20\\%$ more."
        },
        {
         "opt": "C",
         "zh": "多 $20\\%$ 不是固定多 $20$ 人；多出的數量是 $0.2y$。",
         "en": "An increase of $20\\%$ is not a fixed 20 people. The increase is $0.2y$."
        }
       ],
       "tip": {
        "zh": "多百分之幾，要先指出以哪一個量為基準。",
        "en": "Identify the reference quantity before interpreting a percentage increase."
       },
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-cex02",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 2,
      "code": "WS2-CEX2",
      "source": "WS02 C · Example 2",
      "stem": {
       "zh": "三個蛋撻與四個冬甩共售 $156$ 元。五個蛋撻的價錢等於兩個冬甩。求一個蛋撻的價錢。",
       "en": "The price of 3 egg tarts and 4 doughnuts is \\$156. If the price of 5 egg tarts and the price of 2 doughnuts are the same, then the price of an egg tart is"
      },
      "review": null,
      "options": {
       "A": "$12$",
       "B": "$14$",
       "C": "$30$",
       "D": "$35$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "3 x + 4 y=156\n5 x=2 y",
         "zh": "設 $x$ 為一個蛋撻的價錢，$y$ 為一個冬甩的價錢，單位為元。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Let $x$ be the price of an egg tart and $y$ the price of a doughnut, in dollars.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "3 x + 4 y=156\n10 x=4 y\n13 x=156",
         "zh": "將第一條整式乘 $1$，第二條整式乘 $2$，再相加，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $1$ and the second by $2$, then add the equations to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "x=12",
         "zh": "等號兩邊同除以 $13$，得到 $x$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $13$ to find $x$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "4 y + 36=156\ny=30",
         "zh": "把 $x=12$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $x=12$ into the original first equation to find $y$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "x=12",
         "zh": "所求為 $x=12$，再對照選項。",
         "en": "The requested value is $x=12$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "這個選項是 $14$；將兩條方程聯立求解後，題目所求是 $x=12$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $14$, but solving both equations gives the requested value $x=12$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $30$；將兩條方程聯立求解後，題目所求是 $x=12$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $30$, but solving both equations gives the requested value $x=12$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $35$；將兩條方程聯立求解後，題目所求是 $x=12$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $35$, but solving both equations gives the requested value $x=12$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=12,\\ y=30$ 代回兩條原方程，左右分別得到 $156=156\\quad 60=60$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=12,\\ y=30$ into both original equations: $156=156\\quad 60=60$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-cpr02",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 2,
      "code": "WS2-CP2",
      "source": "WS02 C · Practice 2",
      "stem": {
       "zh": "五頂帽與四條領帶共售 $570$ 元。八頂帽的價錢等於五條領帶。求一頂帽的價錢。",
       "en": "The price of 5 hats and 4 ties is \\$570. If the price of 8 hats and the price of 5 ties are the same, then the price of a hat is"
      },
      "review": null,
      "options": {
       "A": "$47.5$",
       "B": "$50$",
       "C": "$76$",
       "D": "$80$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "5 x + 4 y=570\n8 x=5 y",
         "zh": "設 $x$ 為一頂帽的價錢，$y$ 為一條領帶的價錢，單位為元。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Let $x$ be the price of a hat and $y$ the price of a tie, in dollars.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "25 x + 20 y=2850\n32 x=20 y\n57 x=2850",
         "zh": "將第一條整式乘 $5$，第二條整式乘 $4$，再相加，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $5$ and the second by $4$, then add the equations to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "x=50",
         "zh": "等號兩邊同除以 $57$，得到 $x$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $57$ to find $x$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "4 y + 250=570\ny=80",
         "zh": "把 $x=50$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $x=50$ into the original first equation to find $y$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "x=50",
         "zh": "所求為 $x=50$，再對照選項。",
         "en": "The requested value is $x=50$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $47.5$；將兩條方程聯立求解後，題目所求是 $x=50$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $47.5$, but solving both equations gives the requested value $x=50$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $76$；將兩條方程聯立求解後，題目所求是 $x=50$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $76$, but solving both equations gives the requested value $x=50$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $80$；將兩條方程聯立求解後，題目所求是 $x=50$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $80$, but solving both equations gives the requested value $x=50$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=50,\\ y=80$ 代回兩條原方程，左右分別得到 $570=570\\quad 400=400$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=50,\\ y=80$ into both original equations: $570=570\\quad 400=400$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m16",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 2,
      "code": "WS2-C16",
      "source": "WS02 C · Paper 2 Q16",
      "stem": {
       "zh": "四枝螢光筆與五枝原子筆共售 $62$ 元。三枝螢光筆的價錢等於四枝原子筆。求一枝螢光筆的價錢。",
       "en": "The price of 4 highlighters and 5 pens is \\$62. If the price of 3 highlighters and the price of 4 pens are the same, then the price of a highlighter is"
      },
      "review": null,
      "options": {
       "A": "$6$",
       "B": "$8$",
       "C": "$9$",
       "D": "$12$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "4 x + 5 y=62\n3 x=4 y",
         "zh": "設 $x$ 為一枝螢光筆的價錢，$y$ 為一枝原子筆的價錢，單位都是元。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Let $x$ be the price of a highlighter and $y$ be the price of a pen, both in dollars.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "16 x + 20 y=248\n15 x=20 y\n31 x=248",
         "zh": "將第一條整式乘 $4$，第二條整式乘 $5$，再相加，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $4$ and the second by $5$, then add the equations to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "x=8",
         "zh": "等號兩邊同除以 $31$，得到 $x$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $31$ to find $x$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "5 y + 32=62\ny=6",
         "zh": "把 $x=8$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $x=8$ into the original first equation to find $y$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "x=8",
         "zh": "所求為 $x=8$，再對照選項。",
         "en": "The requested value is $x=8$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $6$；將兩條方程聯立求解後，題目所求是 $x=8$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $6$, but solving both equations gives the requested value $x=8$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $9$；將兩條方程聯立求解後，題目所求是 $x=8$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $9$, but solving both equations gives the requested value $x=8$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $12$；將兩條方程聯立求解後，題目所求是 $x=8$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $12$, but solving both equations gives the requested value $x=8$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=8,\\ y=6$ 代回兩條原方程，左右分別得到 $62=62\\quad 24=24$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=8,\\ y=6$ into both original equations: $62=62\\quad 24=24$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m17",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 2,
      "code": "WS2-C17",
      "source": "WS02 C · Paper 2 Q17",
      "stem": {
       "zh": "三個牛油果與兩個梨共售 $70$ 元。四個牛油果的價錢等於九個梨。求一個梨的價錢。",
       "en": "The price of 3 avocados and 2 pears is \\$70. If the price of 4 avocados and the price of 9 pears are the same, then the price of a pear is"
      },
      "review": null,
      "options": {
       "A": "$8$",
       "B": "$12$",
       "C": "$18$",
       "D": "$27$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "3 x + 2 y=70\n4 x=9 y",
         "zh": "設 $x$ 為一個牛油果的價錢，$y$ 為一個梨的價錢，單位都是元。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Let $x$ be the price of an avocado and $y$ be the price of a pear, both in dollars.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "12 x + 8 y=280\n12 x=27 y\n35 y=280",
         "zh": "將第一條整式乘 $4$，第二條整式乘 $3$，再第一條減第二條，消去 $x$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $4$ and the second by $3$, then subtract the second from the first to eliminate $x$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "y=8",
         "zh": "等號兩邊同除以 $35$，得到 $y$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $35$ to find $y$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "3 x + 16=70\nx=18",
         "zh": "把 $y=8$ 代回原來第一條方程，求出 $x$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $y=8$ into the original first equation to find $x$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "y=8",
         "zh": "所求為 $y=8$，再對照選項。",
         "en": "The requested value is $y=8$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "這個選項是 $12$；將兩條方程聯立求解後，題目所求是 $y=8$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $12$, but solving both equations gives the requested value $y=8$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $18$；將兩條方程聯立求解後，題目所求是 $y=8$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $18$, but solving both equations gives the requested value $y=8$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $27$；將兩條方程聯立求解後，題目所求是 $y=8$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $27$, but solving both equations gives the requested value $y=8$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=18,\\ y=8$ 代回兩條原方程，左右分別得到 $70=70\\quad 72=72$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=18,\\ y=8$ into both original equations: $70=70\\quad 72=72$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-ws02-m18",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 2,
      "code": "WS2-C18",
      "source": "WS02 C · Paper 2 Q18",
      "stem": {
       "zh": "五個漢堡包的價錢等於八份三文治。Ivan 花 $108$ 元買了兩個漢堡包與四份三文治。求一個漢堡包的價錢。",
       "en": "The price of 5 hamburgers and 8 sandwiches are the same. Ivan buys 2 hamburgers and 4 sandwiches for \\$108. Find the price of a hamburger."
      },
      "review": null,
      "options": {
       "A": "$12.5$",
       "B": "$15$",
       "C": "$20$",
       "D": "$24$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "5 x=8 y\n2 x + 4 y=108",
         "zh": "設 $x$ 為一個漢堡包的價錢，$y$ 為一份三文治的價錢，單位都是元。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Let $x$ be the price of a hamburger and $y$ be the price of a sandwich, both in dollars.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "5 x=8 y\n4 x + 8 y=216\n9 x=216",
         "zh": "將第一條整式乘 $1$，第二條整式乘 $2$，再相加，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $1$ and the second by $2$, then add the equations to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "x=24",
         "zh": "等號兩邊同除以 $9$，得到 $x$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $9$ to find $x$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "120=8 y\ny=15",
         "zh": "把 $x=24$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $x=24$ into the original first equation to find $y$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "x=24",
         "zh": "所求為 $x=24$，再對照選項。",
         "en": "The requested value is $x=24$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $12.5$；將兩條方程聯立求解後，題目所求是 $x=24$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $12.5$, but solving both equations gives the requested value $x=24$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $15$；將兩條方程聯立求解後，題目所求是 $x=24$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $15$, but solving both equations gives the requested value $x=24$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $20$；將兩條方程聯立求解後，題目所求是 $x=24$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $20$, but solving both equations gives the requested value $x=24$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=24,\\ y=15$ 代回兩條原方程，左右分別得到 $120=120\\quad 108=108$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=24,\\ y=15$ into both original equations: $120=120\\quad 108=108$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m19",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 2,
      "code": "WS2-C19",
      "source": "WS02 C · Paper 2 Q19",
      "stem": {
       "zh": "三個橙與七個蘋果共售 $53$ 元，四個橙與兩個蘋果共售 $34$ 元。求兩個橙與三個蘋果的價錢。",
       "en": "The price of 3 oranges and 7 apples is \\$53 while the price of 4 oranges and 2 apples is \\$34. Find the price of 2 oranges and 3 apples."
      },
      "review": null,
      "options": {
       "A": "$27$",
       "B": "$28$",
       "C": "$29$",
       "D": "$30$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "3 x + 7 y=53\n4 x + 2 y=34",
         "zh": "設 $x$ 為一個橙的價錢，$y$ 為一個蘋果的價錢，單位都是元。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Let $x$ be the price of an orange and $y$ be the price of an apple, both in dollars.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "6 x + 14 y=106\n28 x + 14 y=238\n- 22 x=-132",
         "zh": "將第一條整式乘 $2$，第二條整式乘 $7$，再第一條減第二條，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $2$ and the second by $7$, then subtract the second from the first to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "x=6",
         "zh": "等號兩邊同除以 $-22$，得到 $x$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $-22$ to find $x$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "7 y + 18=53\ny=5",
         "zh": "把 $x=6$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $x=6$ into the original first equation to find $y$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "2 x + 3 y=27",
         "zh": "所求為 $2 x + 3 y=27$，再對照選項。",
         "en": "The requested value is $2 x + 3 y=27$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "這個選項是 $28$；將兩條方程聯立求解後，題目所求是 $2 x + 3 y=27$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $28$, but solving both equations gives the requested value $2 x + 3 y=27$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "C",
         "zh": "這個選項是 $29$；將兩條方程聯立求解後，題目所求是 $2 x + 3 y=27$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $29$, but solving both equations gives the requested value $2 x + 3 y=27$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $30$；將兩條方程聯立求解後，題目所求是 $2 x + 3 y=27$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $30$, but solving both equations gives the requested value $2 x + 3 y=27$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=6,\\ y=5$ 代回兩條原方程，左右分別得到 $53=53\\quad 34=34$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=6,\\ y=5$ into both original equations: $53=53\\quad 34=34$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-ws02-m20",
      "type": "mc",
      "topic": "ws02",
      "unit": 5,
      "subtopic": "simultaneous-linear-equations",
      "difficulty": 2,
      "code": "WS2-C20",
      "source": "WS02 C · Paper 2 Q20",
      "stem": {
       "zh": "展覽中，兩名成人與三名小童共付 $105$ 元；五名成人與四名小童共付 $210$ 元。求兩名成人與一名小童的總入場費。",
       "en": "In an exhibition, the total fare of 2 adults and 3 children is \\$105 while the total fare of 5 adults and 4 children is \\$210. Find the total fare of 2 adults and 1 child."
      },
      "review": null,
      "options": {
       "A": "$60$",
       "B": "$70$",
       "C": "$75$",
       "D": "$90$"
      },
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 整理兩條方程",
          "en": "Step 1 · Write the two equations"
         },
         "math": "2 x + 3 y=105\n5 x + 4 y=210",
         "zh": "設 $x$ 為成人單人入場費，$y$ 為小童單人入場費，單位都是元。\n這兩條方程要由同一組數值同時滿足。先把它們分開，保留每個符號。",
         "en": "Let $x$ be the fare for an adult and $y$ be the fare for a child, both in dollars.\nBoth equations must hold for the same pair of values. Write them separately and keep every sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 對齊係數，再消元",
          "en": "Step 2 · Match coefficients and eliminate"
         },
         "math": "8 x + 12 y=420\n15 x + 12 y=630\n- 7 x=-210",
         "zh": "將第一條整式乘 $4$，第二條整式乘 $3$，再第一條減第二條，消去 $y$。等號左右都要乘；相減時，減號作用於整條方程。",
         "en": "Multiply the whole first equation by $4$ and the second by $3$, then subtract the second from the first to eliminate $y$. Scale both sides; subtraction applies to the entire equation."
        },
        {
         "title": {
          "zh": "第 3 步 · 解一元一次方程",
          "en": "Step 3 · Solve the remaining equation"
         },
         "math": "x=30",
         "zh": "等號兩邊同除以 $-7$，得到 $x$ 的值；負係數也要連同符號一起處理。",
         "en": "Divide both sides by $-7$ to find $x$. Include the sign when dividing by a negative coefficient."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回另一個未知數",
          "en": "Step 4 · Find the other unknown"
         },
         "math": "3 y + 60=105\ny=15",
         "zh": "把 $x=30$ 代回原來第一條方程，求出 $y$。不要把代入的值當作另一個未知數。",
         "en": "Substitute $x=30$ into the original first equation to find $y$. Keep the two unknowns distinct."
        },
        {
         "title": {
          "zh": "第 5 步 · 寫回題目要求，並核對",
          "en": "Step 5 · State what was asked and check"
         },
         "math": "2 x + y=75",
         "zh": "所求為 $2 x + y=75$，再對照選項。",
         "en": "The requested value is $2 x + y=75$. Match it to the options."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個選項是 $60$；將兩條方程聯立求解後，題目所求是 $2 x + y=75$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $60$, but solving both equations gives the requested value $2 x + y=75$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "B",
         "zh": "這個選項是 $70$；將兩條方程聯立求解後，題目所求是 $2 x + y=75$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $70$, but solving both equations gives the requested value $2 x + y=75$. Recheck scaling or subtraction, and the quantity in the final sentence."
        },
        {
         "opt": "D",
         "zh": "這個選項是 $90$；將兩條方程聯立求解後，題目所求是 $2 x + y=75$。核對消元時有沒有整條方程一起乘或減，並讀清楚最後要求的量。",
         "en": "This option gives $90$, but solving both equations gives the requested value $2 x + y=75$. Recheck scaling or subtraction, and the quantity in the final sentence."
        }
       ],
       "tip": {
        "zh": "連等式要先拆成兩條方程；應用題要先說清每個未知數代表甚麼。",
        "en": "Split a chain of equalities into two equations. In word problems, define each unknown before solving."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "將整組 $x=30,\\ y=15$ 代回兩條原方程，左右分別得到 $105=105\\quad 210=210$。兩條都相符，才完成核對；最後仍要讀清題目要求哪一個量。",
         "en": "Substitute the complete pair $x=30,\\ y=15$ into both original equations: $105=105\\quad 210=210$. Both must hold. Then check which quantity the question asks for."
        }
       ],
       "reflect": {
        "zh": "收起題解後，你能說明要先消去哪個未知數，並自己寫出關鍵一步嗎？",
        "en": "With the steps hidden, can you explain which unknown to eliminate first and write the key step yourself?"
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
  "mc": 30,
  "long": 46,
  "cards": 8,
  "pages": 10
 }
};
