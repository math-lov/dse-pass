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
      "zh": "學會替兩條方程編號 (1)、(2)，並知道答案是一組同時滿足兩式的數值。",
      "en": "Number equations (1) and (2), and recognise a solution as one pair satisfying both."
     },
     "body": {
      "zh": "解聯立方程，就是找出一組 $(x, y)$，令兩條方程同時成立。動手前先幫它們編號 $(1)$、$(2)$，後面說話才不會亂：{{math:0}}\n把 $x=3$、$y=2$ 代入兩條式，左右兩邊都剛好相等，所以這組數才是真正的解。{{math:1}}",
      "en": "Solving simultaneous equations means finding one pair $(x, y)$ that makes both equations true at once. Number them $(1)$ and $(2)$ first so every step stays clear:{{math:0}}\nSubstituting $x=3$ and $y=2$ makes both equations balance, so this pair is the solution.{{math:1}}"
     },
     "math": [
      "\\begin{cases} x+y=5 \\quad \\cdots (1) \\\\ x-y=1 \\quad \\cdots (2) \\end{cases}",
      "\\hl{3}+\\hl{2}=5 \\quad (\\checkmark) \n\\hl{3}-\\hl{2}=1 \\quad (\\checkmark) \n\\therefore \\hlg{x=3,\\ y=2}"
     ],
     "warn": {
      "zh": "只代回其中一條不夠：例如 $x=4,\\ y=1$ 滿足 $(1)$，卻令 $(2)$ 變成 $4-1=3\\neq 1$。另外，$x$ 與 $y$ 的次序不能隨意互換。",
      "en": "Checking one equation is not enough: $x=4,\\ y=1$ satisfies $(1)$ but gives $4-1=3\\neq 1$ in $(2)$. Also never swap the values of $x$ and $y$."
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
       "zh": "$3+2=5$ 而且 $3-2=1$，兩條方程同時成立；$x=2, y=3$ 會令 $x-y=-1$。",
       "en": "Both $3+2=5$ and $3-2=1$ hold; $x=2, y=3$ would give $x-y=-1$."
      }
     },
     "vocab": [
      {
       "en": "simultaneous equations",
       "zh": "聯立方程"
      },
      {
       "en": "solution",
       "zh": "同時滿足兩式的解"
      }
     ]
    },
    {
     "id": "ws02-c2",
     "topic": "ws02",
     "title": {
      "zh": "代入法：整塊打包取代字母",
      "en": "Substitution: replace an unknown with a whole block"
     },
     "goal": {
      "zh": "把兩個未知數變成一個，並緊記代入時套上括號。",
      "en": "Reduce two unknowns to one, always wrapping the substituted block in brackets."
     },
     "body": {
      "zh": "當其中一條方程已經把一個字母單獨放在等號一邊（例如 $y=3x$），就可以直接「整塊打包」代入另一條式：{{math:0}}\n把 $(2)$ 裡面的 $y$ 換成整個 $3x$（若前面有係數就一定加括號），式子立刻只剩一個未知數 $x$，一步步展開求解：{{math:1}}\n求出 $x=3$ 後，代回較短的 $(1)$ 算出 $y$，最後兩個未知數一併寫清楚。{{math:2}}",
      "en": "When one unknown already stands alone on one side (such as $y=3x$), pack its expression as one block and substitute it into the other equation:{{math:0}}\nReplace $y$ in $(2)$ with the whole block $3x$ (keeping brackets if there is a coefficient), then solve step by step:{{math:1}}\nPut $x=3$ back into the shorter equation $(1)$ to find $y$, and state both answers clearly.{{math:2}}"
     },
     "math": [
      "y=\\hl{3x} \\quad \\cdots (1)\nx+2y=21 \\quad \\cdots (2)",
      "x+2(\\hl{3x})=21\nx+6x=21\n7x=21\n\\hlg{x=3}",
      "y=3(\\hl{3})=\\hlg{9}"
     ],
     "warn": {
      "zh": "代入時一定要保留原來的係數並套括號：$2y$ 代入 $y=3x$ 後是 $2(3x)=6x$，不要漏乘前面的 $2$。",
      "en": "Keep the coefficient and use brackets: substituting $y=3x$ into $2y$ gives $2(3x)=6x$; never drop the $2$."
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
       "zh": "$2y=2(4x)$，所以整個式子變成 $x+2(4x)=x+8x=9x$。",
       "en": "Since $2y=2(4x)$, the expression becomes $x+2(4x)=x+8x=9x$."
      }
     },
     "vocab": [
      {
       "en": "substitution",
       "zh": "代入法"
      },
      {
       "en": "replace",
       "zh": "整塊取代"
      }
     ]
    },
    {
     "id": "ws02-c3",
     "topic": "ws02",
     "title": {
      "zh": "先轉換主項，再套括號代入",
      "en": "Make one unknown the subject, then substitute with brackets"
     },
     "goal": {
      "zh": "專挑係數為 1 或 -1 的未知數轉換主項，展開時每項都乘清楚。",
      "en": "Pick an unknown with coefficient 1 or -1 to isolate, and expand every term inside brackets."
     },
     "body": {
      "zh": "如果兩條式都沒有獨立的字母，先掃一眼找係數是 $1$ 或 $-1$ 的那一項，移項變號做成主項，避免出現分數：{{math:0}}\n把整個 $y+1$ 套上括號代入另一條方程，展開時外面那個 $2$ 要乘進括號內的每一項（不要漏乘 $+1$）：{{math:1}}\n求出 $y=2$ 後，代回剛剛做好的 $(3)$，馬上得出 $x$。{{math:2}}",
      "en": "If no unknown is isolated yet, look for a coefficient of $1$ or $-1$ and transpose it cleanly so you avoid fractions:{{math:0}}\nWrap the whole block $y+1$ in brackets when substituting, and multiply every term inside by $2$:{{math:1}}\nSubstitute $y=2$ back into $(3)$ to get $x$ directly.{{math:2}}"
     },
     "math": [
      "x-y=1 \\quad \\cdots (1)\nx=\\hl{y+1} \\quad \\cdots (3)",
      "2(\\hl{y+1})+3y=12\n\\hlw{2y+2}+3y=12\n5y=10\n\\hlg{y=2}",
      "x=\\hl{2}+1=\\hlg{3}"
     ],
     "warn": {
      "zh": "把 $x$ 換成 $y+1$ 時，$2x$ 必須寫成 $2(y+1)=2y+2$，切勿漏括號寫成 $2y+1$；前面若是減號（例如 $-3(y-2)$），拆括號時每項都要變號。",
      "en": "When $x=y+1$, $2x$ becomes $2(y+1)=2y+2$, never $2y+1$. If there is a minus sign outside, flip every sign inside when expanding."
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
       "zh": "把 $-y$ 移去右邊要變號成 $+y$，得 $x=1+y=y+1$。",
       "en": "Moving $-y$ to the right flips its sign to $+y$, giving $x=1+y=y+1$."
      }
     },
     "vocab": [
      {
       "en": "subject",
       "zh": "主項：單獨留在等號一邊的字母"
      },
      {
       "en": "brackets",
       "zh": "括號（保護整塊式子）"
      }
     ]
    },
    {
     "id": "ws02-c4",
     "topic": "ws02",
     "title": {
      "zh": "消元法：係數對齊，同號相減、異號相加",
      "en": "Elimination: match coefficients, then add or subtract"
     },
     "goal": {
      "zh": "用直式對齊看清哪一欄會抵消，整式放大與相減時不漏右邊常數。",
      "en": "Align like terms vertically to see which unknown cancels, scaling or subtracting every term."
     },
     "body": {
      "zh": "先把兩條方程的 $x$ 項、$y$ 項與常數對齊。看見同一字母的係數大小相同時，記住口訣：異號相加、同號相減。例如 $y$ 的係數是 $-1$ 與 $+1$（異號），兩式相加就會直接抵消：{{math:0}}\n相加後只剩一元一次方程，解出 $x$ 再代回原式求 $y$：{{math:1}}\n如果係數本來不相等，先選最小公倍數把整條方程同乘一數——左邊每一項和等號右邊都要一起乘：{{math:2}}",
      "en": "Line up the $x$-terms, $y$-terms and constants first. Once one unknown has matching magnitudes, remember: opposite signs add, same signs subtract. Here the $y$-coefficients are $-1$ and $+1$ (opposite signs), so adding cancels $y$:{{math:0}}\nSolve the one-unknown equation for $x$, then substitute back to find $y$:{{math:1}}\nWhen coefficients do not match yet, multiply an entire equation—every term on both sides—to align them:{{math:2}}"
     },
     "math": [
      "3x-\\xc{y}=-6 \\quad \\cdots (1)\n2x+\\xc{y}=1 \\quad \\cdots (2)",
      "5x=-5\n\\hlg{x=-1},\\quad \\hlg{y=3}",
      "(3x-y=-6) \\times \\hlw{2}\n\\Rightarrow 6x-2y=\\hlw{-12}"
     ],
     "align": {
      "caption": {
       "zh": "直式對齊示範：異號相加，直接消去 $y$",
       "en": "Vertical alignment: opposite signs add to eliminate $y$"
      },
      "rows": [
       {
        "tag": "(1)",
        "cols": [
         "3x",
         "-\\xc{y}",
         "=",
         "-6"
        ]
       },
       {
        "op": "+",
        "tag": "(2)",
        "cols": [
         "2x",
         "+\\xc{y}",
         "=",
         "1"
        ]
       }
      ],
      "result": {
       "tag": "",
       "cols": [
        "\\hlg{5x}",
        "",
        "=",
        "\\hlg{-5}"
       ]
      }
     },
     "warn": {
      "zh": "同號相減時，減號作用於整條方程，特別留意減去負數要變加（例如 $-(-5)=+5$）；整式同乘時，等號右邊的常數最常被漏乘。",
      "en": "When subtracting equations, apply the minus sign to every term (watch $-(-5)=+5$). When scaling an equation, never forget to multiply the constant on the right."
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
       "zh": "先拆括號變號：$2x-y-x+y=x$，兩個 $y$ 項剛好抵消。",
       "en": "Flip signs when opening the second bracket: $2x-y-x+y=x$. The $y$ terms cancel."
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
      "concepts": [
       "ws02-c1",
       "ws02-c2"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 編號兩條方程",
         "en": "Step 1 · Number both equations"
        },
        "math": "y=4x \\quad \\cdots (1)\nx+3y=26 \\quad \\cdots (2)",
        "zh": "先替兩條方程加上編號 $(1)$、$(2)$，後面說明「把 $(1)$ 代入 $(2)$」就清清楚楚。",
        "en": "Label the two equations $(1)$ and $(2)$ first so every substitution step is easy to track."
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $x$",
         "en": "Step 2 · Substitute the whole block and solve for $x$"
        },
        "math": "x+3(\\hl{4x})=26\nx+12x=26\n13x=26\n\\hlg{x=2}",
        "zh": "把 (1) 的 $y=4x$ 加上括號代入 (2)，展開並合併同類項，解出 $x=2$。",
        "en": "Substitute $y=4x$ from (1) into (2) with brackets. Expand, then collect like terms to get $x=2$.",
        "think": {
         "prompt": {
          "zh": "把 $(1)$ 的 $y=4x$ 代入 $(2)$ 的 $x+3y=26$，式子會變成甚麼？",
          "en": "Substituting $y=4x$ from $(1)$ into $x+3y=26$, what do we get?"
         },
         "options": [
          {
           "math": "x+3(4x)=26"
          },
          {
           "math": "x+4x=26",
           "hint": {
            "zh": "$y$ 前面原本有係數 $3$，代入時要保留係數並加括號：$3(4x)$！",
            "en": "Keep the coefficient $3$ in front of $y$: $3y = 3(4x)$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $y$",
         "en": "Step 3 · Substitute back into (1) for $y$"
        },
        "math": "y=4(\\hl{2})\n\\hlg{y=8}",
        "zh": "把剛算出的 $x=2$ 代回 (1)，直接算出 $y=8$。",
        "en": "Put $x=2$ back into (1) to find $y=8$."
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出完整一組解",
         "en": "Step 4 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=2,\\quad y=8}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=2$ 及 $y=8$。",
        "en": "State both unknowns clearly together: $x=2$ and $y=8$."
       }
      ],
      "traps": [
       {
        "label": "代入 $3y$ 時漏乘係數 $3$",
        "labelEn": "Dropping the coefficient $3$ in $3y$",
        "zh": "看到 $3y$ 代入 $y=4x$，必須套括號寫成 $3(4x)=12x$，不是 $4x$。",
        "en": "Substituting $y=4x$ into $3y$ gives $3(4x)=12x$, never $4x$."
       },
       {
        "label": "只算出 $x=2$，忘了代回求 $y$",
        "labelEn": "Stopping at $x=2$ without finding $y$",
        "zh": "解聯立方程要給出完整一對數值：$x=2$ 及 $y=8$。",
        "en": "Always state both unknowns: $x=2$ and $y=8$."
       }
      ],
      "tip": {
       "zh": "其中一條式已經把字母單獨放一邊時，直接「整塊套括號代入」最快最穩。",
       "en": "When one unknown is already isolated, wrap its expression in brackets and substitute directly."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=2,\\ y=8$ 代回原來的兩條方程：$(1)$ 得 $-4(2)+8=0$，$(2)$ 得 $2+3(8)=26$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=2,\\ y=8$ into both originals: $(1)$ gives $-4(2)+8=0$ and $(2)$ gives $2+3(8)=26$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用消元法：將 $(1)$ 改寫成 $4x-y=0$，乘 $3$ 得 $12x-3y=0$，與 $(2)$ $x+3y=26$ 相加得 $13x=26 \\Rightarrow x=2$。",
        "en": "By elimination: rewrite $(1)$ as $4x-y=0$, multiply by $3$ to get $12x-3y=0$, then add $(2)$ to get $13x=26 \\Rightarrow x=2$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能自己寫出「$x+3(4x)=26 \\Rightarrow x+12x=26$」並求出 $x$ 與 $y$ 嗎？",
       "en": "With the steps hidden, can you write $x+3(4x)=26 \\Rightarrow x+12x=26$ and finish both unknowns?"
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
      "concepts": [
       "ws02-c2"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 編號兩條方程",
         "en": "Step 1 · Number both equations"
        },
        "math": "5y=x \\quad \\cdots (1)\n-2x+7y=6 \\quad \\cdots (2)",
        "zh": "先替兩條方程加上編號 $(1)$、$(2)$，後面說明「把 $(1)$ 代入 $(2)$」就清清楚楚。",
        "en": "Label the two equations $(1)$ and $(2)$ first so every substitution step is easy to track."
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "-2(\\hl{5y})+7y=6\n-10y+7y=6\n-3y=6\ny=\\frac{6}{\\hlw{-3}}\n\\hlg{y=-2}",
        "zh": "把 (1) 的 $x=5y$ 加上括號代入 (2)，展開並合併同類項，解出 $y=-2$。",
        "en": "Substitute $x=5y$ from (1) into (2) with brackets. Expand, then collect like terms to get $y=-2$.",
        "think": {
         "prompt": {
          "zh": "把 $(1)$ 的 $x=5y$ 代入 $(2)$ 的 $-2x+7y=6$，$-2x$ 會變成甚麼？",
          "en": "Substituting $x=5y$ into $-2x+7y=6$, what does $-2x$ become?"
         },
         "options": [
          {
           "math": "-2(5y)=-10y"
          },
          {
           "math": "-2+5y",
           "hint": {
            "zh": "$-2x$ 是 $-2$ 乘以 $x$，代入 $x=5y$ 應寫 $-2(5y)=-10y$！",
            "en": "$-2x$ means $-2$ times $x$, so it becomes $-2(5y)=-10y$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=5(\\hl{-2})\n\\hlg{x=-10}",
        "zh": "把剛算出的 $y=-2$ 代回 (1)，直接算出 $x=-10$。",
        "en": "Put $y=-2$ back into (1) to find $x=-10$."
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出完整一組解",
         "en": "Step 4 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=-10,\\quad y=-2}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=-10$ 及 $y=-2$。",
        "en": "State both unknowns clearly together: $x=-10$ and $y=-2$."
       }
      ],
      "traps": [
       {
        "label": "除以負數 $-3$ 時漏掉負號",
        "labelEn": "Losing the minus sign when dividing by $-3$",
        "zh": "$-3y=6$ 兩邊同除 $-3$，正除以負得負數：$y=-2$。",
        "en": "Dividing $6$ by $-3$ gives a negative answer: $y=-2$."
       },
       {
        "label": "代入負數 $y=-2$ 求 $x$ 時寫錯符號",
        "labelEn": "Sign error when substituting $y=-2$",
        "zh": "$x=5(-2)=-10$，記得加括號看清正負號。",
        "en": "$x=5(-2)=-10$; brackets keep the minus sign clear."
       }
      ],
      "tip": {
       "zh": "$5y=x$ 與 $x=5y$ 完全等價；解到 $-3y=6$ 時留意最後要除以「整個 $-3$」。",
       "en": "$5y=x$ already isolates $x$; when solving $-3y=6$, divide by the full negative coefficient $-3$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=-10,\\ y=-2$ 代回原來的兩條方程：$(1)$ 得 $-(-10)+5(-2)=0$，$(2)$ 得 $-2(-10)+7(-2)=6$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=-10,\\ y=-2$ into both originals: $(1)$ gives $-(-10)+5(-2)=0$ and $(2)$ gives $-2(-10)+7(-2)=6$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用消元法：由 $(1)$ 得 $x-5y=0$，乘 $2$ 得 $2x-10y=0$，與 $(2)$ $-2x+7y=6$ 相加得 $-3y=6 \\Rightarrow y=-2$。",
        "en": "By elimination: rewrite $(1)$ as $x-5y=0$, multiply by $2$ to get $2x-10y=0$, and add $(2)$ to get $-3y=6 \\Rightarrow y=-2$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能留意負號並由 $-3y=6$ 準確算出 $y=-2,\\ x=-10$ 嗎？",
       "en": "With the steps hidden, can you handle every negative sign cleanly to reach $y=-2,\\ x=-10$?"
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
      "concepts": [
       "ws02-c3"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 編號兩條方程",
         "en": "Step 1 · Number both equations"
        },
        "math": "x+y=3 \\quad \\cdots (1)\n4x+3y-17=0 \\quad \\cdots (2)",
        "zh": "先替兩條方程加上編號 $(1)$、$(2)$，後面說明「把 $(1)$ 代入 $(2)$」就清清楚楚。",
        "en": "Label the two equations $(1)$ and $(2)$ first so every substitution step is easy to track."
       },
       {
        "title": {
         "zh": "第 2 步 · 轉換主項，孤立 $x$",
         "en": "Step 2 · Make $x$ the subject"
        },
        "math": "x+y=3 \\quad \\cdots (1)\nx=\\hl{-y+3} \\quad \\cdots (3)",
        "zh": "在 (1) 中，$x$ 的係數是 $1$，移項即可把 $x$ 孤立在左邊，完全不會出現分數。",
        "en": "In (1), the coefficient of $x$ is $1$, so transposing isolates $x$ cleanly with no fractions.",
        "think": {
         "prompt": {
          "zh": "在 $(1)$ $x+y=3$ 和 $(2)$ $4x+3y-17=0$ 之中，從哪一條轉換主項最不會出現分數？",
          "en": "Between $(1)$ $x+y=3$ and $(2)$ $4x+3y-17=0$, which equation isolates an unknown with no fractions?"
         },
         "options": [
          {
           "zh": "從 $(1)$ 移項，得 $x=3-y$（或 $y=3-x$）",
           "en": "Rearrange $(1)$ to get $x=3-y$ (or $y=3-x$)"
          },
          {
           "zh": "從 $(2)$ 移項求 $x$",
           "en": "Rearrange $(2)$ for $x$",
           "hint": {
            "zh": "$(2)$ 裡 $x$ 和 $y$ 的係數是 $4$ 和 $3$，移項會除以 $4$ 或 $3$ 出現分數；先挑係數為 $1$ 的 $(1)$！",
            "en": "$(2)$ has coefficients $4$ and $3$ (causing fractions); always pick the equation with coefficient $1$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 整塊代入並展開求 $y$",
         "en": "Step 3 · Substitute the whole block and solve for $y$"
        },
        "math": "4(\\hl{-y+3})+3y=17\n-4y+12+3y=17\n-y=17-12\n-y=5\ny=\\frac{5}{\\hlw{-1}}\n\\hlg{y=-5}",
        "zh": "把 (3) 的 $x=-y+3$ 加上括號代入 (2)，展開並合併同類項，解出 $y=-5$。",
        "en": "Substitute $x=-y+3$ from (3) into (2) with brackets. Expand, then collect like terms to get $y=-5$."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回 (3) 求 $x$",
         "en": "Step 4 · Substitute back into (3) for $x$"
        },
        "math": "x=-(\\hl{-5})+3\nx=5+3\n\\hlg{x=8}",
        "zh": "把剛算出的 $y=-5$ 代回 (3)，直接算出 $x=8$。",
        "en": "Put $y=-5$ back into (3) to find $x=8$."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完整一組解",
         "en": "Step 5 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=8,\\quad y=-5}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=8$ 及 $y=-5$。",
        "en": "State both unknowns clearly together: $x=8$ and $y=-5$."
       }
      ],
      "traps": [
       {
        "label": "展開 $4(3-y)$ 時漏乘 $-y$（錯寫成 $12-y$）",
        "labelEn": "Forgetting to multiply $-y$ by $4$",
        "zh": "$4$ 要乘進括號兩項：$4(3-y)=12-4y$，不是 $12-y$。",
        "en": "Distribute $4$ to both terms: $4(3-y)=12-4y$, not $12-y$."
       },
       {
        "label": "整理 $-y=5$ 時漏寫負號",
        "labelEn": "Dropping the minus sign in $-y=5$",
        "zh": "$-y=5$ 兩邊同乘 $-1$，得到 $y=-5$；代回 $x=3-(-5)=3+5=8$！",
        "en": "$-y=5$ gives $y=-5$, and back-substituting gives $x=3-(-5)=8$!"
       }
      ],
      "tip": {
       "zh": "代入負數時更要加括號：$x=3-(-5)=3+5=8$，負負得正一眼看清。",
       "en": "Wrap negative numbers in brackets when back-substituting: $x=3-(-5)=3+5=8$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=8,\\ y=-5$ 代回原來的兩條方程：$(1)$ 得 $8+(-5)=3$，$(2)$ 得 $4(8)+3(-5)=17$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=8,\\ y=-5$ into both originals: $(1)$ gives $8+(-5)=3$ and $(2)$ gives $4(8)+3(-5)=17$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可先把 $(2)$ 寫成 $4x+3y=17$，再用消元法：$(1)\\times 3$ 得 $3x+3y=9$，用 $(2)-(3)$ 直出 $x=8$。",
        "en": "By elimination: write $(2)$ as $4x+3y=17$, scale $(1)\\times 3$ to $3x+3y=9$, then $(2)-(3)$ gives $x=8$ directly."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能自己展開 $4(3-y)+3y=17$ 並算出 $x=3-(-5)=8$ 嗎？",
       "en": "With the steps hidden, can you expand $4(3-y)+3y=17$ and handle $3-(-5)=8$?"
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
      "concepts": [
       "ws02-c3"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 編號兩條方程",
         "en": "Step 1 · Number both equations"
        },
        "math": "x-6y+9=0 \\quad \\cdots (1)\n5x+2y+13=0 \\quad \\cdots (2)",
        "zh": "先替兩條方程加上編號 $(1)$、$(2)$，後面說明「把 $(1)$ 代入 $(2)$」就清清楚楚。",
        "en": "Label the two equations $(1)$ and $(2)$ first so every substitution step is easy to track."
       },
       {
        "title": {
         "zh": "第 2 步 · 轉換主項，孤立 $x$",
         "en": "Step 2 · Make $x$ the subject"
        },
        "math": "x-6y=-9 \\quad \\cdots (1)\nx=\\hl{6y-9} \\quad \\cdots (3)",
        "zh": "在 (1) 中，$x$ 的係數是 $1$，移項即可把 $x$ 孤立在左邊，完全不會出現分數。",
        "en": "In (1), the coefficient of $x$ is $1$, so transposing isolates $x$ cleanly with no fractions.",
        "think": {
         "prompt": {
          "zh": "由 $(1)$ $x-6y+9=0$ 把 $x$ 變成主項時，移過等號的兩項符號各變甚麼？",
          "en": "When making $x$ the subject of $x-6y+9=0$, how do the signs of $-6y$ and $+9$ change?"
         },
         "options": [
          {
           "math": "x=6y-9"
          },
          {
           "math": "x=6y+9",
           "hint": {
            "zh": "$+9$ 也要移去右邊，跨過等號要從 $+9$ 變成 $-9$！",
            "en": "$+9$ also crosses the equals sign, flipping to $-9$!"
           }
          },
          {
           "math": "x=-6y-9",
           "hint": {
            "zh": "$-6y$ 跨過等號去右邊要變正號 $+6y$！",
            "en": "$-6y$ flips to $+6y$ when moved to the right!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 整塊代入並展開求 $y$",
         "en": "Step 3 · Substitute the whole block and solve for $y$"
        },
        "math": "5(\\hl{6y-9})+2y=-13\n30y-45+2y=-13\n32y=-13+45\n32y=32\n\\hlg{y=1}",
        "zh": "把 (3) 的 $x=6y-9$ 加上括號代入 (2)，展開並合併同類項，解出 $y=1$。",
        "en": "Substitute $x=6y-9$ from (3) into (2) with brackets. Expand, then collect like terms to get $y=1$."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回 (3) 求 $x$",
         "en": "Step 4 · Substitute back into (3) for $x$"
        },
        "math": "x=6(\\hl{1})-9\nx=6-9\n\\hlg{x=-3}",
        "zh": "把剛算出的 $y=1$ 代回 (3)，直接算出 $x=-3$。",
        "en": "Put $y=1$ back into (3) to find $x=-3$."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完整一組解",
         "en": "Step 5 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=-3,\\quad y=1}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=-3$ 及 $y=1$。",
        "en": "State both unknowns clearly together: $x=-3$ and $y=1$."
       }
      ],
      "traps": [
       {
        "label": "移項時漏把 $+9$ 變 $-9$",
        "labelEn": "Forgetting to flip $+9$ to $-9$",
        "zh": "由 $x-6y+9=0$ 移走 $-6y$ 與 $+9$，兩項都要變號：$x=6y-9$。",
        "en": "Both $-6y$ and $+9$ cross the equals sign, giving $x=6y-9$."
       },
       {
        "label": "展開 $5(6y-9)$ 時漏乘 $-9$",
        "labelEn": "Forgetting to multiply $-9$ by $5$",
        "zh": "$5(6y-9)=30y-45$，不可錯寫成 $30y-9$。",
        "en": "$5(6y-9)=30y-45$, not $30y-9$."
       }
      ],
      "tip": {
       "zh": "常數項都在左邊（$=0$）的方程，移項做成主項時每搬一項就立刻變號，再把常數移去右邊才不容易亂。",
       "en": "When an equation equals $0$, flip each term's sign as you move it across so constants stay clean."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=-3,\\ y=1$ 代回原來的兩條方程：$(1)$ 得 $(-3)-6(1)=-9$，$(2)$ 得 $5(-3)+2(1)=-13$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=-3,\\ y=1$ into both originals: $(1)$ gives $(-3)-6(1)=-9$ and $(2)$ gives $5(-3)+2(1)=-13$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用消元法：將兩式寫成 $x-6y=-9$ 與 $5x+2y=-13$，把 $(2)\\times 3$ 得 $15x+6y=-39$，相加消 $y$ 得 $16x=-48 \\Rightarrow x=-3$。",
        "en": "By elimination: write $x-6y=-9$ and $5x+2y=-13$; multiply $(2)$ by $3$ to get $15x+6y=-39$, then add to get $16x=-48 \\Rightarrow x=-3$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能不漏符號地由 $x-6y+9=0$ 寫出 $x=6y-9$ 並求得 $(-3,\\ 1)$ 嗎？",
       "en": "With the steps hidden, can you isolate $x=6y-9$ and solve cleanly to $(-3,\\ 1)$?"
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
      "concepts": [
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "3x-y=-6 \\quad \\cdots (1)\n2x-y=1 \\quad \\cdots (2)",
        "zh": "先把 $x$ 項、$y$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $x$-terms, $y$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 直式相減消去 $y$，求出 $x$",
         "en": "Step 2 · Subtract vertically to eliminate $y$ and find $x$"
        },
        "math": "(1) - (2):\n\\hlg{x=-7}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $y$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(1)",
           "cols": [
            "3x",
            "-\\xc{y}",
            "=",
            "-6"
           ]
          },
          {
           "op": "-",
           "tag": "(2)",
           "cols": [
            "2x",
            "-\\xc{y}",
            "=",
            "1"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{x}",
           "",
           "=",
           "\\hlg{-7}"
          ]
         }
        },
        "zh": "計算 $(1) - (2)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=-7$。",
        "en": "Compute $(1) - (2)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=-7$.",
        "think": {
         "prompt": {
          "zh": "兩條式都是 $-y$（同號），所以用 $(1)-(2)$ 相減。那右邊 $(-6)-(1)$ 等於多少？",
          "en": "Both equations have $-y$ (same sign), so we compute $(1)-(2)$. What is $(-6)-(1)$ on the right?"
         },
         "options": [
          {
           "math": "-7"
          },
          {
           "math": "-5",
           "hint": {
            "zh": "負 $6$ 再減 $1$ 是往更負的方向走，等於 $-7$，不是 $-5$！",
            "en": "$-6$ minus $1$ moves further negative to $-7$, not $-5$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (2) 求 $y$",
         "en": "Step 3 · Substitute into (2) to find $y$"
        },
        "math": "2(\\hl{-7})-y=1\n-14-y=1\n-y=15\n\\hlg{y=-15}",
        "zh": "把 $x=-7$ 代回原方程 (2)，移項化簡得出 $y=-15$。",
        "en": "Substitute $x=-7$ into original equation (2) and solve to get $y=-15$."
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出完整一組解",
         "en": "Step 4 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=-7,\\quad y=-15}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=-7$ 及 $y=-15$。",
        "en": "State both unknowns clearly together: $x=-7$ and $y=-15$."
       }
      ],
      "traps": [
       {
        "label": "看到兩個 $-y$ 誤以為要相加",
        "labelEn": "Adding two $-y$ terms instead of subtracting",
        "zh": "$-y$ 與 $-y$ 都是負號（同號），相加會得 $-2y$；必須「相減」才能得 $-y-(-y)=0$！",
        "en": "Both are $-y$ (same sign), so you must subtract: $-y-(-y)=0$!"
       },
       {
        "label": "算出 $-y=15$ 後忘記把負號移去右邊",
        "labelEn": "Stopping at $-y=15$ instead of $y=-15$",
        "zh": "$-y=15$ 兩邊同乘 $-1$，答案是 $y=-15$。",
        "en": "Multiply $-y=15$ by $-1$ to get $y=-15$."
       }
      ],
      "tip": {
       "zh": "「兩條都是負號」也是同號！記住：同號（全正或全負）相減、異號（一正一負）相加。",
       "en": "Two minus signs are also “same signs”—so subtract them to cancel!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=-7,\\ y=-15$ 代回原來的兩條方程：$(1)$ 得 $3(-7)-(-15)=-6$，$(2)$ 得 $2(-7)-(-15)=1$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=-7,\\ y=-15$ into both originals: $(1)$ gives $3(-7)-(-15)=-6$ and $(2)$ gives $2(-7)-(-15)=1$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用代入法：由 $(2)$ 得 $y=2x-1$，代入 $(1)$ 得 $3x-(2x-1)=-6 \\Rightarrow x+1=-6 \\Rightarrow x=-7$。",
        "en": "By substitution: from $(2)$, $y=2x-1$; into $(1)$ gives $3x-(2x-1)=-6 \\Rightarrow x=-7$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能寫出直式相減並小心負數得出 $x=-7,\\ y=-15$ 嗎？",
       "en": "With the steps hidden, can you align $(1)-(2)$ and handle the negative arithmetic cleanly?"
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
      "concepts": [
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "3x-y=-6 \\quad \\cdots (1)\n5x+2y=1 \\quad \\cdots (2)",
        "zh": "先把 $x$ 項、$y$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $x$-terms, $y$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
         "en": "Step 2 · Scale equations to match $y$"
        },
        "math": "(1)\\times \\hlw{2}:\n6x-2y=\\hlw{-12} \\quad \\cdots (3)",
        "zh": "要消去 $y$，先把$(1)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $y$, multiply all of $(1)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!",
        "think": {
         "prompt": {
          "zh": "把 $(1)$ $3x-y=-6$ 乘以 $2$ 變成 $6x-2y=-12$，這時 $(3)$ 的 $-2y$ 與 $(2)$ 的 $+2y$ 要相加還是相減？",
          "en": "Scaling $(1)\\times 2$ gives $6x-2y=-12$. Should we add or subtract with $(2)$ $5x+2y=1$?"
         },
         "options": [
          {
           "zh": "相加：$(3)+(2)$（$-2y$ 與 $+2y$ 異號抵消）",
           "en": "Add $(3)+(2)$ ($-2y$ and $+2y$ cancel)"
          },
          {
           "zh": "相減：$(3)-(2)$",
           "en": "Subtract $(3)-(2)$",
           "hint": {
            "zh": "$-2y-(+2y)=-4y$ 消不走；一負一正（異號）要相加！",
            "en": "$-2y-(+2y)=-4y$ does not cancel; opposite signs cancel by adding!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相加消去 $y$，求出 $x$",
         "en": "Step 3 · Add vertically to eliminate $y$ and find $x$"
        },
        "math": "(3) + (2):\n11x=-11\n\\hlg{x=-1}",
        "align": {
         "caption": {
          "zh": "直式對齊（異號相加，消去 $y$）",
          "en": "Column-aligned elimination (opposite signs add to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(3)",
           "cols": [
            "6x",
            "-\\xc{2y}",
            "=",
            "-12"
           ]
          },
          {
           "op": "+",
           "tag": "(2)",
           "cols": [
            "5x",
            "+\\xc{2y}",
            "=",
            "1"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{11x}",
           "",
           "=",
           "\\hlg{-11}"
          ]
         }
        },
        "zh": "計算 $(3) + (2)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=-1$。",
        "en": "Compute $(3) + (2)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=-1$."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回 (1) 求 $y$",
         "en": "Step 4 · Substitute into (1) to find $y$"
        },
        "math": "3(\\hl{-1})-y=-6\n-3-y=-6\n-y=-3\n\\hlg{y=3}",
        "zh": "把 $x=-1$ 代回原方程 (1)，移項化簡得出 $y=3$。",
        "en": "Substitute $x=-1$ into original equation (1) and solve to get $y=3$."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完整一組解",
         "en": "Step 5 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=-1,\\quad y=3}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=-1$ 及 $y=3$。",
        "en": "State both unknowns clearly together: $x=-1$ and $y=3$."
       }
      ],
      "traps": [
       {
        "label": "把 $(1)$ 乘 $2$ 時漏乘右邊的 $-6$",
        "labelEn": "Forgetting to multiply $-6$ by $2$",
        "zh": "$(1)\\times 2$ 每項都要乘：$6x-2y=-12$，不可保留 $-6$。",
        "en": "Multiply every term by $2$: $6x-2y=-12$, not $-6$."
       },
       {
        "label": "右邊算錯 $-12+1$",
        "labelEn": "Miscalculating $-12+1$",
        "zh": "$-12+1=-11$，除以 $11$ 得 $x=-1$。",
        "en": "$-12+1=-11$, so $11x=-11 \\Rightarrow x=-1$."
       }
      ],
      "tip": {
       "zh": "放大方程配對異號（$-2y$ 配 $+2y$）後做加法，比做減法更不容易出符號錯誤！",
       "en": "Scaling to create opposite signs ($-2y$ and $+2y$) lets you add, avoiding subtraction sign errors!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=-1,\\ y=3$ 代回原來的兩條方程：$(1)$ 得 $3(-1)-(3)=-6$，$(2)$ 得 $5(-1)+2(3)=1$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=-1,\\ y=3$ into both originals: $(1)$ gives $3(-1)-(3)=-6$ and $(2)$ gives $5(-1)+2(3)=1$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用代入法：由 $(1)$ 得 $y=3x+6$，代入 $(2)$ 得 $5x+2(3x+6)=1 \\Rightarrow 11x=-11 \\Rightarrow x=-1$。",
        "en": "By substitution: from $(1)$, $y=3x+6$; into $(2)$ gives $5x+2(3x+6)=1 \\Rightarrow 11x=-11 \\Rightarrow x=-1$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能完整寫出 $(1)\\times 2$、直式相加消去 $y$，再代回求 $y=3$ 嗎？",
       "en": "With the steps hidden, can you scale $(1)\\times 2$, add vertically, and back-substitute for $y=3$?"
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
      "concepts": [
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "2x+y=8 \\quad \\cdots (1)\n3x-y=2 \\quad \\cdots (2)",
        "zh": "先把 $x$ 項、$y$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $x$-terms, $y$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 直式相加消去 $y$，求出 $x$",
         "en": "Step 2 · Add vertically to eliminate $y$ and find $x$"
        },
        "math": "(1) + (2):\n5x=10\n\\hlg{x=2}",
        "align": {
         "caption": {
          "zh": "直式對齊（異號相加，消去 $y$）",
          "en": "Column-aligned elimination (opposite signs add to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(1)",
           "cols": [
            "2x",
            "+\\xc{y}",
            "=",
            "8"
           ]
          },
          {
           "op": "+",
           "tag": "(2)",
           "cols": [
            "3x",
            "-\\xc{y}",
            "=",
            "2"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{5x}",
           "",
           "=",
           "\\hlg{10}"
          ]
         }
        },
        "zh": "計算 $(1) + (2)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=2$。",
        "en": "Compute $(1) + (2)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=2$.",
        "think": {
         "prompt": {
          "zh": "看 $y$ 的係數：$(1)$ 是 $+y$、$(2)$ 是 $-y$（一正一負）。把兩條式相加還是相減可以消去 $y$？",
          "en": "Look at $y$: $+y$ in $(1)$ and $-y$ in $(2)$ (opposite signs). Add or subtract to eliminate $y$?"
         },
         "options": [
          {
           "zh": "相加：$(1)+(2)$（異號相加剛好抵消）",
           "en": "Add: $(1)+(2)$ (opposite signs cancel)"
          },
          {
           "zh": "相減：$(1)-(2)$",
           "en": "Subtract: $(1)-(2)$",
           "hint": {
            "zh": "試試看：$+y-(-y)=+2y$，反而消不走！一正一負（異號）要「相加」。",
            "en": "Check: $+y-(-y)=+2y$, which does not cancel! Opposite signs cancel by adding."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $y$",
         "en": "Step 3 · Substitute into (1) to find $y$"
        },
        "math": "2(\\hl{2})+y=8\n4+y=8\n\\hlg{y=4}",
        "zh": "把 $x=2$ 代回原方程 (1)，移項化簡得出 $y=4$。",
        "en": "Substitute $x=2$ into original equation (1) and solve to get $y=4$."
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出完整一組解",
         "en": "Step 4 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=2,\\quad y=4}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=2$ 及 $y=4$。",
        "en": "State both unknowns clearly together: $x=2$ and $y=4$."
       }
      ],
      "traps": [
       {
        "label": "看到同為 $1y$ 就誤用相減",
        "labelEn": "Subtracting instead of adding opposite signs",
        "zh": "$+y$ 與 $-y$ 係數異號，必須「相加」才會得 $+y+(-y)=0$。",
        "en": "$+y$ and $-y$ have opposite signs, so you must add to get $0$."
       },
       {
        "label": "右邊忘了跟著相加（留了 $8$ 或 $2$）",
        "labelEn": "Forgetting to add the right-hand sides",
        "zh": "左邊相加得 $5x$，右邊也要相加：$8+2=10$。",
        "en": "Add the right-hand sides too: $8+2=10$."
       }
      ],
      "tip": {
       "zh": "消元法第一口訣：「異號相加、同號相減」——看見 $+y$ 配 $-y$，直接直式相加秒解！",
       "en": "Rule 1 of elimination: opposite signs add, same signs subtract."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=2,\\ y=4$ 代回原來的兩條方程：$(1)$ 得 $2(2)+4=8$，$(2)$ 得 $3(2)-(4)=2$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=2,\\ y=4$ into both originals: $(1)$ gives $2(2)+4=8$ and $(2)$ gives $3(2)-(4)=2$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用代入法：由 $(1)$ 得 $y=8-2x$，代入 $(2)$ 得 $3x-(8-2x)=2 \\Rightarrow 5x=10 \\Rightarrow x=2$。",
        "en": "By substitution: from $(1)$, $y=8-2x$; into $(2)$ gives $3x-(8-2x)=2 \\Rightarrow 5x=10 \\Rightarrow x=2$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能說出為何這題用「相加」而不是「相減」消去 $y$ 嗎？",
       "en": "With the steps hidden, can you explain why we add rather than subtract to cancel $y$?"
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
      "concepts": [
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "x-3y=4 \\quad \\cdots (1)\nx-5y=10 \\quad \\cdots (2)",
        "zh": "先把 $x$ 項、$y$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $x$-terms, $y$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 直式相減消去 $x$，求出 $y$",
         "en": "Step 2 · Subtract vertically to eliminate $x$ and find $y$"
        },
        "math": "(1) - (2):\n2y=-6\n\\hlg{y=-3}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $x$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
         },
         "rows": [
          {
           "tag": "(1)",
           "cols": [
            "\\xc{x}",
            "-3y",
            "=",
            "4"
           ]
          },
          {
           "op": "-",
           "tag": "(2)",
           "cols": [
            "\\xc{x}",
            "-5y",
            "=",
            "10"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "",
           "\\hlg{2y}",
           "=",
           "\\hlg{-6}"
          ]
         }
        },
        "zh": "計算 $(1) - (2)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $y=-3$。",
        "en": "Compute $(1) - (2)$: the $x$-terms cancel, leaving an equation in $y$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $y=-3$.",
        "think": {
         "prompt": {
          "zh": "兩條式都有 $+x$（同號），所以用 $(1)-(2)$ 消去 $x$。那 $y$ 這一欄 $(-3y)-(-5y)$ 等於多少？",
          "en": "Both equations have $+x$ (same sign), so we compute $(1)-(2)$. What is $(-3y)-(-5y)$?"
         },
         "options": [
          {
           "math": "+2y"
          },
          {
           "math": "-8y",
           "hint": {
            "zh": "減去負數會變加！$-3y-(-5y)=-3y+5y=+2y$！",
            "en": "Subtracting a negative turns into addition: $-3y-(-5y)=-3y+5y=+2y$!"
           }
          },
          {
           "math": "-2y",
           "hint": {
            "zh": "$-3+5=+2$（正數較大），不是 $-2$。",
            "en": "$-3+5=+2$ (positive is larger), not $-2$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute into (1) to find $x$"
        },
        "math": "x-3(\\hl{-3})=4\nx+9=4\n\\hlg{x=-5}",
        "zh": "把 $y=-3$ 代回原方程 (1)，移項化簡得出 $x=-5$。",
        "en": "Substitute $y=-3$ into original equation (1) and solve to get $x=-5$."
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出完整一組解",
         "en": "Step 4 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=-5,\\quad y=-3}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=-5$ 及 $y=-3$。",
        "en": "State both unknowns clearly together: $x=-5$ and $y=-3$."
       }
      ],
      "traps": [
       {
        "label": "相減時算錯 $(-3y)-(-5y)$",
        "labelEn": "Sign error in $(-3y)-(-5y)$",
        "zh": "這是全章最易錯位置：減去 $-5y$ 等於加上 $+5y$，所以 $-3y+5y=+2y$。",
        "en": "Subtracting $-5y$ equals adding $+5y$, so $-3y+5y=+2y$."
       },
       {
        "label": "代回 $y=-3$ 時算錯 $-3(-3)$",
        "labelEn": "Sign error in $-3(-3)$",
        "zh": "負負得正：$-3(-3)=+9$，得 $x+9=4 \\Rightarrow x=4-9=-5$。",
        "en": "Negative times negative is positive: $-3(-3)=+9$, giving $x=4-9=-5$."
       }
      ],
      "tip": {
       "zh": "相減遇負數時，先在草稿寫出「$-3y-(-5y)=-3y+5y$」，多寫半秒就不會扣分！",
       "en": "When subtracting negatives, write $-3y-(-5y)=-3y+5y$ explicitly so signs never slip."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=-5,\\ y=-3$ 代回原來的兩條方程：$(1)$ 得 $(-5)-3(-3)=4$，$(2)$ 得 $(-5)-5(-3)=10$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=-5,\\ y=-3$ into both originals: $(1)$ gives $(-5)-3(-3)=4$ and $(2)$ gives $(-5)-5(-3)=10$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用代入法：由 $(1)$ 得 $x=3y+4$，代入 $(2)$ 得 $(3y+4)-5y=10 \\Rightarrow -2y=6 \\Rightarrow y=-3$。",
        "en": "By substitution: $x=3y+4$ from $(1)$ into $(2)$ gives $3y+4-5y=10 \\Rightarrow -2y=6 \\Rightarrow y=-3$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能自己算對 $(-3y)-(-5y)=+2y$ 及 $x-3(-3)=4$ 嗎？",
       "en": "With the steps hidden, can you handle both $(-3y)-(-5y)=+2y$ and $x-3(-3)=4$?"
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
      "concepts": [
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "5x+2y=0 \\quad \\cdots (1)\n7x+4y=6 \\quad \\cdots (2)",
        "zh": "先把 $x$ 項、$y$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $x$-terms, $y$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
         "en": "Step 2 · Scale equations to match $y$"
        },
        "math": "(1)\\times \\hlw{2}:\n10x+4y=\\hlw{0} \\quad \\cdots (3)",
        "zh": "要消去 $y$，先把$(1)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $y$, multiply all of $(1)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!",
        "think": {
         "prompt": {
          "zh": "觀察 $x$（$5$ 與 $7$）和 $y$（$2$ 與 $4$），放大哪一條方程只需乘一次就能對齊係數？",
          "en": "Comparing $x$ ($5, 7$) and $y$ ($2, 4$), which single multiplication aligns a pair of coefficients?"
         },
         "options": [
          {
           "zh": "把 $(1)$ 乘以 $2$，讓 $2y$ 變成 $4y$ 對齊 $(2)$",
           "en": "Multiply $(1)$ by $2$ so $2y$ matches $4y$ in $(2)$"
          },
          {
           "zh": "把 $(1)$ 乘 $7$、$(2)$ 乘 $5$ 對齊 $x$",
           "en": "Multiply $(1)$ by $7$ and $(2)$ by $5$ to align $x$",
           "hint": {
            "zh": "雖然可行，但兩條式都要乘且數字變大；$4$ 是 $2$ 的倍數，只乘 $(1)\\times 2$ 快一倍！",
            "en": "That scales both equations with bigger numbers; since $4$ is a multiple of $2$, $(1)\\times 2$ is much faster!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相減消去 $y$，求出 $x$",
         "en": "Step 3 · Subtract vertically to eliminate $y$ and find $x$"
        },
        "math": "(3) - (2):\n3x=-6\n\\hlg{x=-2}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $y$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(3)",
           "cols": [
            "10x",
            "+\\xc{4y}",
            "=",
            "0"
           ]
          },
          {
           "op": "-",
           "tag": "(2)",
           "cols": [
            "7x",
            "+\\xc{4y}",
            "=",
            "6"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{3x}",
           "",
           "=",
           "\\hlg{-6}"
          ]
         }
        },
        "zh": "計算 $(3) - (2)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=-2$。",
        "en": "Compute $(3) - (2)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=-2$."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回 (1) 求 $y$",
         "en": "Step 4 · Substitute into (1) to find $y$"
        },
        "math": "5(\\hl{-2})+2y=0\n-10+2y=0\n2y=10\n\\hlg{y=5}",
        "zh": "把 $x=-2$ 代回原方程 (1)，移項化簡得出 $y=5$。",
        "en": "Substitute $x=-2$ into original equation (1) and solve to get $y=5$."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完整一組解",
         "en": "Step 5 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=-2,\\quad y=5}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=-2$ 及 $y=5$。",
        "en": "State both unknowns clearly together: $x=-2$ and $y=5$."
       }
      ],
      "traps": [
       {
        "label": "相減時右邊把 $0-6$ 錯寫成 $+6$",
        "labelEn": "Writing $0-6$ as $+6$ instead of $-6$",
        "zh": "是 $(3)-(2)$，右邊必須按同一方向減：$0-6=-6$！",
        "en": "Follow the same order on the right side: $0-6=-6$, not $+6$!"
       },
       {
        "label": "代回 $x=-2$ 時漏了負號",
        "labelEn": "Dropping the minus sign when substituting $x=-2$",
        "zh": "$5(-2)+2y=0 \\Rightarrow -10+2y=0 \\Rightarrow 2y=10 \\Rightarrow y=5$。",
        "en": "$5(-2)+2y=0 \\Rightarrow -10+2y=0 \\Rightarrow 2y=10 \\Rightarrow y=5$."
       }
      ],
      "tip": {
       "zh": "動手消元前先找「倍數關係」：$4$ 是 $2$ 的 $2$ 倍，只放大一條式就能省下一半計算！",
       "en": "Always scan for a multiple first: since $4=2\\times 2$, you only need to scale equation $(1)$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=-2,\\ y=5$ 代回原來的兩條方程：$(1)$ 得 $5(-2)+2(5)=0$，$(2)$ 得 $7(-2)+4(5)=6$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=-2,\\ y=5$ into both originals: $(1)$ gives $5(-2)+2(5)=0$ and $(2)$ gives $7(-2)+4(5)=6$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用 $(2)-(3)$ 避免負數：$(7x+4y)-(10x+4y)=6-0 \\Rightarrow -3x=6 \\Rightarrow x=-2$，結果相同。",
        "en": "Subtracting $(2)-(3)$ gives $-3x=6 \\Rightarrow x=-2$, arriving at the exact same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能先放大 $(1)\\times 2$，再注意 $0-6=-6$ 算出 $(-2,\\ 5)$ 嗎？",
       "en": "With the steps hidden, can you scale $(1)\\times 2$ and watch $0-6=-6$ to get $(-2,\\ 5)$?"
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
      "concepts": [
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "-3x-2y=3 \\quad \\cdots (1)\n6x+5y=-12 \\quad \\cdots (2)",
        "zh": "先把 $x$ 項、$y$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $x$-terms, $y$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
         "en": "Step 2 · Scale equations to match $x$"
        },
        "math": "(1)\\times \\hlw{2}:\n-6x-4y=\\hlw{6} \\quad \\cdots (3)",
        "zh": "要消去 $x$，先把$(1)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $x$, multiply all of $(1)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!",
        "think": {
         "prompt": {
          "zh": "把 $(1)$ $-3x-2y=3$ 整條乘以 $2$ 得 $-6x-4y=6$ 後，與 $(2)$ $6x+5y=-12$ 要相加還是相減消去 $x$？",
          "en": "After scaling $(1)\\times 2$ to $-6x-4y=6$, should we add or subtract $(2)$ $6x+5y=-12$ to eliminate $x$?"
         },
         "options": [
          {
           "zh": "相加：$(3)+(2)$（$-6x$ 與 $+6x$ 異號相加直接抵消）",
           "en": "Add $(3)+(2)$ ($-6x$ and $+6x$ have opposite signs)"
          },
          {
           "zh": "相減：$(3)-(2)$",
           "en": "Subtract $(3)-(2)$",
           "hint": {
            "zh": "$-6x-(+6x)=-12x$，消不走 $x$！異號（一負一正）要相加。",
            "en": "$-6x-(+6x)=-12x$ does not cancel! Opposite signs cancel by adding."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相加消去 $x$，求出 $y$",
         "en": "Step 3 · Add vertically to eliminate $x$ and find $y$"
        },
        "math": "(3) + (2):\n\\hlg{y=-6}",
        "align": {
         "caption": {
          "zh": "直式對齊（異號相加，消去 $x$）",
          "en": "Column-aligned elimination (opposite signs add to cancel $x$)"
         },
         "rows": [
          {
           "tag": "(3)",
           "cols": [
            "\\xc{-6x}",
            "-4y",
            "=",
            "6"
           ]
          },
          {
           "op": "+",
           "tag": "(2)",
           "cols": [
            "\\xc{6x}",
            "+5y",
            "=",
            "-12"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "",
           "\\hlg{y}",
           "=",
           "\\hlg{-6}"
          ]
         }
        },
        "zh": "計算 $(3) + (2)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。解得 $y=-6$。",
        "en": "Compute $(3) + (2)$: the $x$-terms cancel, leaving an equation in $y$ alone. Solving gives $y=-6$."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回 (2) 求 $x$",
         "en": "Step 4 · Substitute into (2) to find $x$"
        },
        "math": "6x+5(\\hl{-6})=-12\n6x-30=-12\n6x=18\n\\hlg{x=3}",
        "zh": "把 $y=-6$ 代回原方程 (2)，移項化簡得出 $x=3$。",
        "en": "Substitute $y=-6$ into original equation (2) and solve to get $x=3$."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完整一組解",
         "en": "Step 5 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=3,\\quad y=-6}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=3$ 及 $y=-6$。",
        "en": "State both unknowns clearly together: $x=3$ and $y=-6$."
       }
      ],
      "traps": [
       {
        "label": "放大 $(1)$ 時漏把右邊 $3$ 乘以 $2$",
        "labelEn": "Forgetting to multiply $3$ by $2$",
        "zh": "$(1)\\times 2$ 必須連右邊一起乘：$-6x-4y=6$。",
        "en": "Multiplying $(1)$ by $2$ gives $-6x-4y=6$."
       },
       {
        "label": "相加右邊算錯 $6+(-12)$",
        "labelEn": "Miscalculating $6+(-12)$",
        "zh": "$6+(-12)=6-12=-6$，所以直接得出 $y=-6$。",
        "en": "$6+(-12)=-6$, giving $y=-6$ directly."
       }
      ],
      "tip": {
       "zh": "放大後剛好得到 $-6x$ 配 $+6x$，相加不但直接消去 $x$，而且 $-4y+5y=+y$ 連除都不用除！",
       "en": "Scaling $(1)\\times 2$ matches $-6x$ with $+6x$ and gives $-4y+5y=y$ directly—no division needed!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=3,\\ y=-6$ 代回原來的兩條方程：$(1)$ 得 $-3(3)-2(-6)=3$，$(2)$ 得 $6(3)+5(-6)=-12$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=3,\\ y=-6$ into both originals: $(1)$ gives $-3(3)-2(-6)=3$ and $(2)$ gives $6(3)+5(-6)=-12$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可消去 $y$：$(1)\\times 5$ 得 $-15x-10y=15$，$(2)\\times 2$ 得 $12x+10y=-24$，相加得 $-3x=-9 \\Rightarrow x=3$。",
        "en": "Eliminating $y$: $(1)\\times 5$ gives $-15x-10y=15$ and $(2)\\times 2$ gives $12x+10y=-24$; adding gives $-3x=-9 \\Rightarrow x=3$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能看出為何先放大 $(1)\\times 2$ 並做加法最省力嗎？",
       "en": "With the steps hidden, can you see why scaling $(1)\\times 2$ and adding is the cleanest path?"
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
      "concepts": [
       "ws02-c1",
       "ws02-c3"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 拆開連等式，編號兩條方程",
         "en": "Step 1 · Split the chain equality and number both equations"
        },
        "math": "m+n=3m+10n=7\n\\Rightarrow m+n=7 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 3m+10n=7 \\quad \\cdots (2)",
        "zh": "先把連等式拆成兩條各自等於常數的方程 $(1)$ 與 $(2)$，結構立刻清晰。",
        "en": "Split the chain equality into two equations each equal to the constant, labeled $(1)$ and $(2)$.",
        "think": {
         "prompt": {
          "zh": "連等式 $m+n=3m+10n=7$ 應該拆成哪兩條最乾淨的方程？",
          "en": "How should we split the chain equality $m+n=3m+10n=7$ into two clean equations?"
         },
         "options": [
          {
           "zh": "各自等於常數 $7$：$m+n=7$ 及 $3m+10n=7$",
           "en": "Set each algebraic part equal to $7$: $m+n=7$ and $3m+10n=7$"
          },
          {
           "zh": "只寫 $m+n=3m+10n$",
           "en": "Write only $m+n=3m+10n$",
           "hint": {
            "zh": "兩個未知數需要「兩條」方程！把每段分別等於常數 $7$，式子最簡短。",
            "en": "Two unknowns need two equations! Equating each expression to $7$ gives the cleanest pair."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 轉換主項，孤立 $m$",
         "en": "Step 2 · Make $m$ the subject"
        },
        "math": "m+n=7 \\quad \\cdots (1)\nm=\\hl{-n+7} \\quad \\cdots (3)",
        "zh": "在 (1) 中，$m$ 的係數是 $1$，移項即可把 $m$ 孤立在左邊，完全不會出現分數。",
        "en": "In (1), the coefficient of $m$ is $1$, so transposing isolates $m$ cleanly with no fractions."
       },
       {
        "title": {
         "zh": "第 3 步 · 整塊代入並展開求 $n$",
         "en": "Step 3 · Substitute the whole block and solve for $n$"
        },
        "math": "3(\\hl{-n+7})+10n=7\n-3n+21+10n=7\n7n=7-21\n7n=-14\n\\hlg{n=-2}",
        "zh": "把 (3) 的 $m=-n+7$ 加上括號代入 (2)，展開並合併同類項，解出 $n=-2$。",
        "en": "Substitute $m=-n+7$ from (3) into (2) with brackets. Expand, then collect like terms to get $n=-2$."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回 (3) 求 $m$",
         "en": "Step 4 · Substitute back into (3) for $m$"
        },
        "math": "m=-(\\hl{-2})+7\nm=2+7\n\\hlg{m=9}",
        "zh": "把剛算出的 $n=-2$ 代回 (3)，直接算出 $m=9$。",
        "en": "Put $n=-2$ back into (3) to find $m=9$."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完整一組解",
         "en": "Step 5 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{m=9,\\quad n=-2}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$m=9$ 及 $n=-2$。",
        "en": "State both unknowns clearly together: $m=9$ and $n=-2$."
       }
      ],
      "traps": [
       {
        "label": "不會拆連等式 $A=B=C$",
        "labelEn": "Not knowing how to split $A=B=C$",
        "zh": "連等式代表三邊彼此相等，最省力是把含未知數的兩段各自等於純數字 $7$。",
        "en": "Split $A=B=C$ by equating each expression with unknowns to the constant $7$."
       },
       {
        "label": "展開 $3(7-n)$ 時漏乘 $-n$",
        "labelEn": "Forgetting to multiply $-n$ by $3$",
        "zh": "$3(7-n)=21-3n$，再加 $10n$ 得 $21+7n=7 \\Rightarrow 7n=-14 \\Rightarrow n=-2$。",
        "en": "$3(7-n)+10n=21+7n=7 \\Rightarrow 7n=-14 \\Rightarrow n=-2$."
       }
      ],
      "tip": {
       "zh": "遇見連等式 $A=B=7$，永遠拆成 $A=7$ 和 $B=7$；兩個數式都對齊純數字，步驟最短！",
       "en": "Always split $A=B=k$ into $A=k$ and $B=k$—equating to the constant keeps equations short."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $m=9,\\ n=-2$ 代回原來的兩條方程：$(1)$ 得 $9+(-2)=7$，$(2)$ 得 $3(9)+10(-2)=7$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $m=9,\\ n=-2$ into both originals: $(1)$ gives $9+(-2)=7$ and $(2)$ gives $3(9)+10(-2)=7$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用消元法：將 $(1)\\times 3$ 得 $3m+3n=21$，用 $(2)-(3)$ 得 $7n=-14 \\Rightarrow n=-2$。",
        "en": "By elimination: $(1)\\times 3$ gives $3m+3n=21$; then $(2)-(3)$ gives $7n=-14 \\Rightarrow n=-2$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能先把連等式拆開，再把 $m=7-n$ 套括號代入求 $(9,\\ -2)$ 嗎？",
       "en": "With the steps hidden, can you split the chain equality and solve via $m=7-n$?"
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
      "concepts": [
       "ws02-c2"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 編號兩條方程",
         "en": "Step 1 · Number both equations"
        },
        "math": "2x-3=y \\quad \\cdots (1)\ny=3x+1 \\quad \\cdots (2)",
        "zh": "先替兩條方程加上編號 $(1)$、$(2)$，後面說明「把 $(1)$ 代入 $(2)$」就清清楚楚。",
        "en": "Label the two equations $(1)$ and $(2)$ first so every substitution step is easy to track."
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $x$",
         "en": "Step 2 · Substitute the whole block and solve for $x$"
        },
        "math": "2x-3=\\hl{3x+1}\n-3-1=3x-2x\n-4=x\n\\hlg{x=-4}",
        "zh": "把 $(1)$ 與 $(2)$ 中兩個等於 $y$ 的式子直接畫上等號，移項把 $x$ 聚在右邊、常數聚在左邊，解得 $x=-4$。",
        "en": "Equate both expressions for $y$ directly, move $x$-terms to the right and constants to the left, giving $x=-4$.",
        "think": {
         "prompt": {
          "zh": "兩條式都直接寫出 $y$ 等於一條式子，最直接的一步是甚麼？",
          "en": "Both equations express $y$ directly—what is the cleanest immediate step?"
         },
         "options": [
          {
           "zh": "把兩個等於 $y$ 的式子直接畫上等號：$2x-3=3x+1$",
           "en": "Set both expressions for $y$ equal: $2x-3=3x+1$"
          },
          {
           "zh": "把兩條式全部乘 $3$ 消去 $x$",
           "en": "Multiply both equations to eliminate $x$",
           "hint": {
            "zh": "既然兩條式都等於同一個 $y$，直接讓兩邊相等（代入法）一步就只剩 $x$！",
            "en": "Since both equal $y$, equating them directly leaves only $x$ in one move!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $y$",
         "en": "Step 3 · Substitute back into (1) for $y$"
        },
        "math": "y=2(\\hl{-4})-3\ny=-8-3\n\\hlg{y=-11}",
        "zh": "把剛算出的 $x=-4$ 代回 (1)，直接算出 $y=-11$。",
        "en": "Put $x=-4$ back into (1) to find $y=-11$."
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出完整一組解",
         "en": "Step 4 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{x=-4,\\quad y=-11}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$x=-4$ 及 $y=-11$。",
        "en": "State both unknowns clearly together: $x=-4$ and $y=-11$."
       }
      ],
      "traps": [
       {
        "label": "移項時把 $2x-3=3x+1$ 算成 $x=-2$",
        "labelEn": "Sign slip when solving $2x-3=3x+1$",
        "zh": "把 $2x$ 移右、$+1$ 移左：$-3-1=3x-2x \\Rightarrow -4=x$。",
        "en": "Move $2x$ right and $+1$ left: $-3-1=3x-2x \\Rightarrow x=-4$."
       },
       {
        "label": "代回負數 $x=-4$ 時算錯 $3(-4)+1$",
        "labelEn": "Arithmetic error in $3(-4)+1$",
        "zh": "$3(-4)+1=-12+1=-11$，不是 $-13$。",
        "en": "$3(-4)+1=-12+1=-11$, not $-13$."
       }
      ],
      "tip": {
       "zh": "兩條式同時以 $y$ 為主項時，直接令兩個右邊相等即可（這也是求兩條直線交點的基本招式！）。",
       "en": "When both equations have $y$ as subject, simply equate their expressions—the same trick finds line intersections!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=-4,\\ y=-11$ 代回原來的兩條方程：$(1)$ 得 $2(-4)-(-11)=3$，$(2)$ 得 $-3(-4)+(-11)=1$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=-4,\\ y=-11$ into both originals: $(1)$ gives $2(-4)-(-11)=3$ and $(2)$ gives $-3(-4)+(-11)=1$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用消元法：寫成 $2x-y=3$ 與 $3x-y=-1$，用 $(2)-(1)$ 得 $x=-4$。",
        "en": "By elimination: rewrite as $2x-y=3$ and $3x-y=-1$; then $(2)-(1)$ gives $x=-4$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能由 $2x-3=3x+1$ 準確移項並算出 $x=-4,\\ y=-11$ 嗎？",
       "en": "With the steps hidden, can you solve $2x-3=3x+1$ and find $y=-11$?"
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
      "concepts": [
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "m-2n=20 \\quad \\cdots (1)\n9m+2n=20 \\quad \\cdots (2)",
        "zh": "先把 $m$ 項、$n$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $m$-terms, $n$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 直式相加消去 $n$，求出 $m$",
         "en": "Step 2 · Add vertically to eliminate $n$ and find $m$"
        },
        "math": "(1) + (2):\n10m=40\n\\hlg{m=4}",
        "align": {
         "caption": {
          "zh": "直式對齊（異號相加，消去 $n$）",
          "en": "Column-aligned elimination (opposite signs add to cancel $n$)"
         },
         "rows": [
          {
           "tag": "(1)",
           "cols": [
            "m",
            "-\\xc{2n}",
            "=",
            "20"
           ]
          },
          {
           "op": "+",
           "tag": "(2)",
           "cols": [
            "9m",
            "+\\xc{2n}",
            "=",
            "20"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{10m}",
           "",
           "=",
           "\\hlg{40}"
          ]
         }
        },
        "zh": "計算 $(1) + (2)$：$n$ 項剛好抵消，只剩 $m$ 的一元一次方程。解得 $m=4$。",
        "en": "Compute $(1) + (2)$: the $n$-terms cancel, leaving an equation in $m$ alone. Solving gives $m=4$.",
        "think": {
         "prompt": {
          "zh": "觀察 $-2n$ 與 $+2n$，選用哪種方法可以一步消去 $n$？",
          "en": "Looking at $-2n$ and $+2n$, which move eliminates $n$ immediately?"
         },
         "options": [
          {
           "zh": "消元法：直接把 $(1)+(2)$ 相加",
           "en": "Elimination: add $(1)+(2)$ directly"
          },
          {
           "zh": "代入法：先從 $(2)$ 改寫主項",
           "en": "Substitution: isolate a variable from $(2)$",
           "hint": {
            "zh": "$-2n$ 與 $+2n$ 已經是相反係數，直接相加連放大都省了！",
            "en": "$-2n$ and $+2n$ are already opposites—adding eliminates $n$ with zero scaling!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $n$",
         "en": "Step 3 · Substitute into (1) to find $n$"
        },
        "math": "\\hl{4}-2n=20\n-2n=16\nn=\\frac{16}{\\hlw{-2}}\n\\hlg{n=-8}",
        "zh": "把 $m=4$ 代回原方程 (1)，移項化簡得出 $n=-8$。",
        "en": "Substitute $m=4$ into original equation (1) and solve to get $n=-8$."
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出完整一組解",
         "en": "Step 4 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{m=4,\\quad n=-8}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$m=4$ 及 $n=-8$。",
        "en": "State both unknowns clearly together: $m=4$ and $n=-8$."
       }
      ],
      "traps": [
       {
        "label": "代回求 $n$ 時漏了 $-2n$ 前面的負號",
        "labelEn": "Dropping the minus sign on $-2n$",
        "zh": "$4-2n=20 \\Rightarrow -2n=16 \\Rightarrow n=\\frac{16}{-2}=-8$，不是 $+8$。",
        "en": "$4-2n=20 \\Rightarrow -2n=16 \\Rightarrow n=-8$, not $+8$."
       },
       {
        "label": "兩式右邊都是 $20$，相加誤以為是 $20$",
        "labelEn": "Leaving the RHS as $20$ instead of $40$",
        "zh": "$(1)+(2)$ 右邊也要相加：$20+20=40$，故 $10m=40 \\Rightarrow m=4$。",
        "en": "Add both right-hand sides too: $20+20=40$, giving $10m=40 \\Rightarrow m=4$."
       }
      ],
      "tip": {
       "zh": "題目只說「by an algebraic method」（自由選法）時，先掃一眼有沒有相反／相同係數——有就直接消元！",
       "en": "When the method is open, scan for opposite or equal coefficients first—if present, eliminate immediately!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $m=4,\\ n=-8$ 代回原來的兩條方程：$(1)$ 得 $4-2(-8)=20$，$(2)$ 得 $9(4)+2(-8)=20$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $m=4,\\ n=-8$ into both originals: $(1)$ gives $4-2(-8)=20$ and $(2)$ gives $9(4)+2(-8)=20$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用代入法：由 $(1)$ 得 $m=2n+20$，代入 $(2)$ 得 $9(2n+20)+2n=20 \\Rightarrow 20n=-160 \\Rightarrow n=-8$。",
        "en": "By substitution: $m=2n+20$ into $(2)$ gives $9(2n+20)+2n=20 \\Rightarrow 20n=-160 \\Rightarrow n=-8$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能先相加求出 $m=4$，再小心負係數 $-2n=16$ 算出 $n=-8$ 嗎？",
       "en": "With the steps hidden, can you add to get $m=4$ and solve $-2n=16$ carefully?"
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
      "concepts": [
       "ws02-c3",
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "-p+4q=14 \\quad \\cdots (1)\n-3p+5q=14 \\quad \\cdots (2)",
        "zh": "先把 $p$ 項、$q$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $p$-terms, $q$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $p$ 的係數",
         "en": "Step 2 · Scale equations to match $p$"
        },
        "math": "(1)\\times \\hlw{3}:\n-3p+12q=\\hlw{42} \\quad \\cdots (3)",
        "zh": "要消去 $p$，先把$(1)$ 整條同乘 $3$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $p$, multiply all of $(1)$ by $3$ to get (3). Remember to multiply the constant on the right-hand side too!",
        "think": {
         "prompt": {
          "zh": "想把 $(1)$ 的 $-p$ 放大成跟 $(2)$ 一樣的 $-3p$，再相減消去 $p$，$(1)$ 應乘以多少？",
          "en": "To match $-p$ in $(1)$ with $-3p$ in $(2)$, what should we multiply $(1)$ by?"
         },
         "options": [
          {
           "zh": "乘以 $3$，得 $-3p+12q=42$，再做 $(3)-(2)$",
           "en": "Multiply by $3$ to get $-3p+12q=42$, then compute $(3)-(2)$"
          },
          {
           "zh": "乘以 $4$",
           "en": "Multiply by $4$",
           "hint": {
            "zh": "要讓 $-p$ 變成 $-3p$，倍數是 $3$，不是 $4$。",
            "en": "To turn $-p$ into $-3p$, multiply by $3$, not $4$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相減消去 $p$，求出 $q$",
         "en": "Step 3 · Subtract vertically to eliminate $p$ and find $q$"
        },
        "math": "(3) - (2):\n7q=28\n\\hlg{q=4}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $p$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $p$)"
         },
         "rows": [
          {
           "tag": "(3)",
           "cols": [
            "\\xc{-3p}",
            "+12q",
            "=",
            "42"
           ]
          },
          {
           "op": "-",
           "tag": "(2)",
           "cols": [
            "\\xc{-3p}",
            "+5q",
            "=",
            "14"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "",
           "\\hlg{7q}",
           "=",
           "\\hlg{28}"
          ]
         }
        },
        "zh": "計算 $(3) - (2)$：$p$ 項剛好抵消，只剩 $q$ 的一元一次方程。解得 $q=4$。",
        "en": "Compute $(3) - (2)$: the $p$-terms cancel, leaving an equation in $q$ alone. Solving gives $q=4$."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回 (1) 求 $p$",
         "en": "Step 4 · Substitute into (1) to find $p$"
        },
        "math": "-p+4(\\hl{4})=14\n-p+16=14\n-p=-2\n\\hlg{p=2}",
        "zh": "把 $q=4$ 代回原方程 (1)，移項化簡得出 $p=2$。",
        "en": "Substitute $q=4$ into original equation (1) and solve to get $p=2$."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完整一組解",
         "en": "Step 5 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{p=2,\\quad q=4}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$p=2$ 及 $q=4$。",
        "en": "State both unknowns clearly together: $p=2$ and $q=4$."
       }
      ],
      "traps": [
       {
        "label": "看到兩條式右邊都是 $14$，相減以為右邊得 $0$（忘了 $(1)$ 已乘了 $3$ 變成 $42$）",
        "labelEn": "Forgetting $(1)$ was scaled to $42$",
        "zh": "$(1)\\times 3$ 右邊是 $14\\times 3=42$，所以 $(3)-(2)$ 右邊是 $42-14=28$。",
        "en": "Scaling $(1)\\times 3$ turns $14$ into $42$, so $(3)-(2)$ gives $42-14=28$."
       },
       {
        "label": "求 $-p=-2$ 時忘了寫成 $p=2$",
        "labelEn": "Leaving the answer as $-p=-2$",
        "zh": "$-p+16=14 \\Rightarrow -p=-2 \\Rightarrow p=2$。",
        "en": "$-p=-2$ simplifies to $p=2$."
       }
      ],
      "tip": {
       "zh": "負係數 $-p$ 與 $-3p$ 都是負號（同號），所以放大對齊後用「相減」就會抵消：$-3p-(-3p)=0$。",
       "en": "$-3p$ and $-3p$ share the same sign, so subtracting cancels them: $-3p-(-3p)=0$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $p=2,\\ q=4$ 代回原來的兩條方程：$(1)$ 得 $-(2)+4(4)=14$，$(2)$ 得 $-3(2)+5(4)=14$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $p=2,\\ q=4$ into both originals: $(1)$ gives $-(2)+4(4)=14$ and $(2)$ gives $-3(2)+5(4)=14$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可用代入法：由 $(1)$ 移項得 $p=4q-14$，代入 $(2)$ 得 $-3(4q-14)+5q=14 \\Rightarrow -7q=-28 \\Rightarrow q=4$。",
        "en": "By substitution: from $(1)$, $p=4q-14$; into $(2)$ gives $-3(4q-14)+5q=14 \\Rightarrow -7q=-28 \\Rightarrow q=4$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能獨立完成 $(1)\\times 3-(2)$ 並算出 $p=2,\\ q=4$ 嗎？",
       "en": "With the steps hidden, can you perform $(1)\\times 3-(2)$ and finish both unknowns?"
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
      "concepts": [
       "ws02-c4"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 對齊並編號兩條方程",
         "en": "Step 1 · Align and number both equations"
        },
        "math": "8a+3b=35 \\quad \\cdots (1)\n2a+6b=35 \\quad \\cdots (2)",
        "zh": "先把 $a$ 項、$b$ 項與常數對齊並編號 $(1)$、$(2)$，方便觀察哪一個未知數最容易消去。",
        "en": "Line up the $a$-terms, $b$-terms and constants as $(1)$ and $(2)$ so matching coefficients stand out."
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $b$ 的係數",
         "en": "Step 2 · Scale equations to match $b$"
        },
        "math": "(1)\\times \\hlw{2}:\n16a+6b=\\hlw{70} \\quad \\cdots (3)",
        "zh": "要消去 $b$，先把$(1)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $b$, multiply all of $(1)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!",
        "think": {
         "prompt": {
          "zh": "看 $b$ 的係數（$3b$ 與 $6b$）及 $a$ 的係數（$8a$ 與 $2a$），怎樣做只需乘 $2$ 就能對齊？",
          "en": "Looking at $3b, 6b$ and $8a, 2a$, which single step multiplies by $2$ to match coefficients?"
         },
         "options": [
          {
           "zh": "把 $(1)$ 乘 $2$，讓 $3b$ 變成 $6b$，再做 $(3)-(2)$ 消去 $b$",
           "en": "Multiply $(1)$ by $2$ so $3b$ becomes $6b$, then subtract $(3)-(2)$"
          },
          {
           "zh": "把 $(1)$ 乘 $6$、$(2)$ 乘 $3$",
           "en": "Multiply $(1)$ by $6$ and $(2)$ by $3$",
           "hint": {
            "zh": "$6$ 已經是 $3$ 的 $2$ 倍，只需要把 $(1)$ 乘 $2$ 就對齊了，不必兩條都放大！",
            "en": "Since $6$ is already twice $3$, scaling only $(1)$ by $2$ is much simpler!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相減消去 $b$，求出 $a$",
         "en": "Step 3 · Subtract vertically to eliminate $b$ and find $a$"
        },
        "math": "(3) - (2):\n14a=35\n\\hlg{a=\\frac{5}{2}}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $b$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $b$)"
         },
         "rows": [
          {
           "tag": "(3)",
           "cols": [
            "16a",
            "+\\xc{6b}",
            "=",
            "70"
           ]
          },
          {
           "op": "-",
           "tag": "(2)",
           "cols": [
            "2a",
            "+\\xc{6b}",
            "=",
            "35"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{14a}",
           "",
           "=",
           "\\hlg{35}"
          ]
         }
        },
        "zh": "計算 $(3) - (2)$：$b$ 項剛好抵消，只剩 $a$ 的一元一次方程。解得 $a=\\frac{5}{2}$。",
        "en": "Compute $(3) - (2)$: the $b$-terms cancel, leaving an equation in $a$ alone. Solving gives $a=\\frac{5}{2}$."
       },
       {
        "title": {
         "zh": "第 4 步 · 代回 (2) 求 $b$",
         "en": "Step 4 · Substitute into (2) to find $b$"
        },
        "math": "2(\\hl{\\frac{5}{2}})+6b=35\n5+6b=35\n6b=30\n\\hlg{b=5}",
        "zh": "把 $a=\\frac{5}{2}$ 代回原方程 (2)，移項化簡得出 $b=5$。",
        "en": "Substitute $a=\\frac{5}{2}$ into original equation (2) and solve to get $b=5$."
       },
       {
        "title": {
         "zh": "第 5 步 · 寫出完整一組解",
         "en": "Step 5 · State the complete solution pair"
        },
        "math": "\\therefore \\hlg{a=\\frac{5}{2},\\quad b=5}",
        "zh": "最後把兩個未知數的值清楚並列寫出：$a=\\frac{5}{2}$ 及 $b=5$。",
        "en": "State both unknowns clearly together: $a=\\frac{5}{2}$ and $b=5$."
       }
      ],
      "traps": [
       {
        "label": "看到 $14a=35$ 除不盡就以為自己算錯了",
        "labelEn": "Panicking when $35\\div 14$ is a fraction",
        "zh": "聯立方程的解也可以是分數！分子分母同除以 $7$ 得 $a=\\frac{35}{14}=\\frac{5}{2}$。",
        "en": "Solutions can be fractions! Divide numerator and denominator by $7$: $a=\\frac{35}{14}=\\frac{5}{2}$."
       },
       {
        "label": "代回分數 $a=\\frac{5}{2}$ 時忘記約分",
        "labelEn": "Not simplifying $2(\\frac{5}{2})$ cleanly",
        "zh": "代回 $(2)$ $2a+6b=35$ 最輕鬆：$2(\\frac{5}{2})=5$，立刻消去分母！",
        "en": "Substitute into $(2)$: $2(\\frac{5}{2})=5$ cancels the denominator immediately!"
       }
      ],
      "tip": {
       "zh": "求得的分數如 $a=\\frac{5}{2}$，代回原式時專挑係數是分母倍數的那條（這裡是 $2a$），分母立刻消失！",
       "en": "When back-substituting a fraction like $\\frac{5}{2}$, pick the equation with an even coefficient ($2a$) so the denominator cancels!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $a=\\frac{5}{2},\\ b=5$ 代回原來的兩條方程：$(1)$ 得 $8(\\frac{5}{2})+3(5)=35$，$(2)$ 得 $2(\\frac{5}{2})+6(5)=35$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $a=\\frac{5}{2},\\ b=5$ into both originals: $(1)$ gives $8(\\frac{5}{2})+3(5)=35$ and $(2)$ gives $2(\\frac{5}{2})+6(5)=35$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "也可把 $(2)\\times 4$ 得 $8a+24b=140$，用 $(3)-(1)$ 消去 $a$ 先得 $21b=105 \\Rightarrow b=5$（全程先出整數，最後代回 $a=\\frac{5}{2}$！）。",
        "en": "Alternative: multiply $(2)\\times 4$ to get $8a+24b=140$, subtract $(1)$ to get $21b=105 \\Rightarrow b=5$ first, then $a=\\frac{5}{2}$!"
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能順利把 $\\frac{35}{14}$ 約成 $\\frac{5}{2}$，再代回 $(2)$ 消分母求出 $b=5$ 嗎？",
       "en": "With the steps hidden, can you reduce $\\frac{35}{14}$ to $\\frac{5}{2}$ and substitute into $(2)$ to get $b=5$?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c2"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把已知數值套括號代入",
          "en": "Step 1 · Substitute the known value with brackets"
         },
         "math": "y=4x\ny=4(\\hl{2})",
         "zh": "$4x$ 表示 $4$ 乘以 $x$。把 $x=2$ 放進括號裡取代 $x$，養成代入必加括號的好習慣。",
         "en": "$4x$ means $4$ times $x$. Replace $x$ with $(2)$ in brackets—a great habit for all substitutions."
        },
        {
         "title": {
          "zh": "第 2 步 · 計算乘積得出答案",
          "en": "Step 2 · Multiply to get the answer"
         },
         "math": "\\hlg{y=8}",
         "zh": "$4\\times 2=8$，所以 $y=8$，對應選項 D。",
         "en": "$4\\times 2=8$, so $y=8$, which is option D."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$2$ 是題目已給出的 $x$ 值，不是要找的 $y$ 值。",
         "en": "$2$ is the given value of $x$, not $y$.",
         "nudge": {
          "zh": "這是 $x$ 的值，記得還要乘以 $4$ 才能算出 $y$。",
          "en": "That is the value of $x$—remember to multiply by $4$ to get $y$."
         }
        },
        {
         "opt": "B",
         "zh": "$4$ 只是係數，忘了把它乘以 $x=2$。",
         "en": "$4$ is just the coefficient; remember to multiply it by $x=2$.",
         "nudge": {
          "zh": "$4$ 只是係數，要把 $x=2$ 代入相乘。",
          "en": "$4$ is only the coefficient; substitute $x=2$ and multiply."
         }
        },
        {
         "opt": "C",
         "zh": "$4+2=6$ 是把乘法誤算成加法；代數中 $4x$ 表示 $4\\times x$。",
         "en": "$4+2=6$ adds instead of multiplying; in algebra $4x$ means $4\\times x$.",
         "nudge": {
          "zh": "再看清楚：$4x$ 是「相乘」還是「相加」？",
          "en": "Check carefully: does $4x$ mean multiplication or addition?"
         }
        }
       ],
       "tip": {
        "zh": "代數式 $4x$ 代表 $4\\times x$，代入數字時加上括號 $4(2)$ 就不會誤做成加法。",
        "en": "In algebra $4x$ means $4\\times x$; writing $4(2)$ prevents adding by mistake."
       },
       "alt": [
        {
         "name": {
          "zh": "反算核對",
          "en": "Reverse check"
         },
         "zh": "把 $y=8$ 代回 $y=4x$，看看 $8\\div 4$ 是否等於原本的 $x=2$：相符，確定正確。",
         "en": "Check backwards: $8\\div 4=2$, matching the given $x=2$."
        }
       ],
       "reflect": {
        "zh": "如果換成 $y=5x$ 且 $x=-2$，代入加括號會得到多少？",
        "en": "If $y=5x$ and $x=-2$, what do you get by substituting with brackets?"
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
       "concepts": [
        "ws02-c3"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 找出要移走的項",
          "en": "Step 1 · Spot the term to move away from $x$"
         },
         "math": "x\\hlw{-y}=1",
         "zh": "要把 $x$ 變成主項（單獨留在左邊），必須把旁邊的 $-y$ 移去等號右邊。",
         "en": "To make $x$ the subject (alone on the left), move $-y$ across to the right-hand side."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩邊同加 $y$（跨過等號要變號）",
          "en": "Step 2 · Add $y$ to both sides (flip the sign)"
         },
         "math": "x=1\\xf{+y}\n\\hlg{x=y+1}",
         "zh": "兩邊同加 $y$（等同把 $-y$ 移去右邊變成 $+y$），得到 $x=1+y=y+1$，對應選項 A。",
         "en": "Adding $y$ to both sides moves $-y$ across as $+y$, giving $x=1+y=y+1$ (option A)."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "把 $-y$ 移過等號右邊時忘了變號成 $+y$。",
         "en": "Moving $-y$ across the equals sign must flip its sign to $+y$.",
         "nudge": {
          "zh": "留意符號：$-y$ 跨過等號去右邊時，減號會變成甚麼？",
          "en": "Watch the sign: what happens to $-y$ when it crosses the equals sign?"
         }
        },
        {
         "opt": "C",
         "zh": "右邊原本是 $+1$，並沒有跨過等號，所以 $+1$ 不應該變成 $-1$。",
         "en": "$+1$ stayed on the right-hand side, so it should remain $+1$, not $-1$.",
         "nudge": {
          "zh": "右邊原本的 $+1$ 沒有移動，它的正負號需要改變嗎？",
          "en": "Did the $+1$ on the right move sides? Should its sign change?"
         }
        },
        {
         "opt": "D",
         "zh": "兩項符號都顛倒了；只有跨過等號的 $-y$ 才需要變號。",
         "en": "Both signs were reversed; only $-y$ crossed the equals sign.",
         "nudge": {
          "zh": "試把 $y=2$ 代進原式 $x-2=1$（得 $x=3$），再看哪個選項代入 $y=2$ 也是 $3$！",
          "en": "Test $y=2$ in $x-2=1$ (so $x=3$) and check which option gives $3$!"
         }
        }
       ],
       "tip": {
        "zh": "轉換主項口訣：「過橋變號，留低不變」——沒跨過等號的項保留原來正負號。",
        "en": "Only terms that cross the equals sign flip their sign; terms that stay keep theirs."
       },
       "alt": [
        {
         "name": {
          "zh": "代特值快速驗算",
          "en": "Quick numerical test"
         },
         "zh": "試設 $y=2$，原式 $x-2=1$ 告訴我們 $x=3$。把 $y=2$ 代入四個選項，只有選項 A 得 $2+1=3$！",
         "en": "Test $y=2$: $x-2=1$ gives $x=3$. Only option A gives $2+1=3$!"
        }
       ],
       "reflect": {
        "zh": "如果原式是 $x+y=5$，把 $x$ 變成主項會得到甚麼？",
        "en": "If the equation were $x+y=5$, what would $x$ equal as the subject?"
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
       "concepts": [
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆括號（減號分配給括號內每一項）",
          "en": "Step 1 · Expand brackets (distribute the minus sign)"
         },
         "math": "(2x-y)\\hlw{-}(x-y)\n=2x-y\\xf{-x}\\xf{+y}",
         "zh": "第二個括號前面有減號，拆括號時裡面的 $+x$ 變 $-x$，$-y$ 負負得正變成 $+y$！",
         "en": "The minus sign before $(x-y)$ flips every term inside: $+x$ becomes $-x$ and $-y$ becomes $+y$!"
        },
        {
         "title": {
          "zh": "第 2 步 · 合併同類項，抵消 $y$",
          "en": "Step 2 · Collect like terms and cancel $y$"
         },
         "math": "=(2x-x)+(\\xc{-y}+\\xc{y})\n=\\hlg{x}",
         "zh": "$2x-x=x$，而 $-y+y=0$ 剛好抵消，最後只剩 $x$，對應選項 A。",
         "en": "$2x-x=x$ and $-y+y=0$ cancel completely, leaving $x$ (option A)."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "把 $2x-x$ 誤算成 $2x+x=3x$；減號也要作用在 $x$ 上。",
         "en": "Added $2x+x=3x$ instead of subtracting $2x-x$.",
         "nudge": {
          "zh": "檢查 $x$ 項：是 $2x$ 減 $x$，還是 $2x$ 加 $x$？",
          "en": "Check the $x$-terms: is it $2x-x$ or $2x+x$?"
         }
        },
        {
         "opt": "C",
         "zh": "$2x-x=+x$，大減小是正數，不是 $-x$。",
         "en": "$2x-x=+x$, not $-x$.",
         "nudge": {
          "zh": "$2x$ 減去 $1x$ 應該是正的還是負的？",
          "en": "Should $2x-1x$ be positive or negative?"
         }
        },
        {
         "opt": "D",
         "zh": "這是最常見的失分位：拆開 $-(x-y)$ 時漏了把 $-y$ 負負得正變成 $+y$，所以錯算出 $-y-y=-2y$！",
         "en": "Classic sign trap: forgot that $-(-y)=+y$, getting $-y-y=-2y$ instead of $0$!",
         "nudge": {
          "zh": "留意第二個括號裡的 $-y$：前面再加一個減號，負負得正會變成甚麼？",
          "en": "Look closely at $-(-y)$: what does subtracting a negative become?"
         }
        }
       ],
       "tip": {
        "zh": "這題正是消元法「兩式相減」的核心基本功：括號前有減號，括號內每一項都要變號。",
        "en": "This is the key skill behind subtracting equations in elimination: a leading minus flips every sign inside."
       },
       "alt": [
        {
         "name": {
          "zh": "代數值驗證",
          "en": "Check with numbers"
         },
         "zh": "試代 $x=5,\\ y=1$：原式 $=(10-1)-(5-1)=9-4=5$，正好等於 $x$（選項 A），而選項 D 的 $x-2y=3\\neq 5$。",
         "en": "Try $x=5,\\ y=1$: $(10-1)-(5-1)=5=x$ (option A), whereas option D gives $3\\neq 5$."
        }
       ],
       "reflect": {
        "zh": "做消元法相減時，如果第二條式有 $-3y$，相減會變成加 $3y$ 還是減 $3y$？",
        "en": "When subtracting an equation containing $-3y$, does it become $+3y$ or $-3y$?"
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
       "concepts": [
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 方程左右每一項同乘 $2$",
          "en": "Step 1 · Multiply every term on both sides by $2$"
         },
         "math": "\\hlw{2}(2x-y)=\\hlw{2}(3)\n2(2x)-2(y)=2(3)",
         "zh": "要保持等式成立，天平左右兩邊的「每一項」都要乘 $2$：包括 $2x$、$-y$ 以及右邊的常數 $3$。",
         "en": "To keep an equation balanced, multiply every single term on both sides by $2$: $2x$, $-y$, and $3$."
        },
        {
         "title": {
          "zh": "第 2 步 · 算出各項乘積",
          "en": "Step 2 · Simplify each product"
         },
         "math": "\\hlg{4x-2y=6}",
         "zh": "$2(2x)=4x$、$-2(y)=-2y$、$2(3)=6$，合起來是 $4x-2y=6$，對應選項 B。",
         "en": "$2(2x)=4x$, $-2(y)=-2y$, and $2(3)=6$, giving $4x-2y=6$ (option B)."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "漏了把中間的 $-y$ 乘以 $2$（寫成了 $-y$ 而非 $-2y$）。",
         "en": "Forgot to multiply the middle term $-y$ by $2$.",
         "nudge": {
          "zh": "檢查左邊第二項：$-y$ 有沒有跟著乘以 $2$？",
          "en": "Check the second term on the left: was $-y$ multiplied by $2$?"
         }
        },
        {
         "opt": "C",
         "zh": "最常犯的錯：左邊乘了 $2$，卻漏乘等號右邊的常數 $3$！",
         "en": "Most common slip: multiplied the left side by $2$ but forgot the $3$ on the right!",
         "nudge": {
          "zh": "檢查等號右邊的常數 $3$：天平右邊也要乘以 $2$ 嗎？",
          "en": "Check the right-hand side $3$: does it also need to be multiplied by $2$?"
         }
        },
        {
         "opt": "D",
         "zh": "漏了把第一項 $2x$ 乘以 $2$（應變成 $4x$）。",
         "en": "Forgot to multiply the first term $2x$ by $2$.",
         "nudge": {
          "zh": "檢查第一項：$2x$ 乘以 $2$ 應該是多少？",
          "en": "Check the first term: what is $2x$ multiplied by $2$?"
         }
        }
       ],
       "tip": {
        "zh": "消元法放大方程時，用手逐項點數「第 1 項、第 2 項、右邊常數」，三項都乘完才寫下一步。",
        "en": "When scaling an equation, check off all three parts: first term, second term, and right-hand constant."
       },
       "alt": [
        {
         "name": {
          "zh": "代入一組解驗算",
          "en": "Test with a solution pair"
         },
         "zh": "原式 $2x-y=3$ 有一組解 $x=2,\\ y=1$。代回四個選項，只有選項 B 成立：$4(2)-2(1)=6$！",
         "en": "$x=2,\\ y=1$ satisfies $2x-y=3$. Only option B holds: $4(2)-2(1)=6$!"
        }
       ],
       "reflect": {
        "zh": "把 $3x-y=-6$ 整條乘以 $2$，等號右邊會變成多少？",
        "en": "If you multiply $3x-y=-6$ by $2$, what does the right-hand side become?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "8x-9y=30=4x+3y\n\\Rightarrow 8x-9y=30 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 4x+3y=30 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $x$、$y$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $x$, $y$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
          "en": "Step 2 · Scale equations to match $x$"
         },
         "math": "(2)\\times \\hlw{2}:\n8x+6y=\\hlw{60} \\quad \\cdots (3)",
         "zh": "要消去 $x$，先把$(2)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $x$, multiply all of $(2)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $x$，求出 $y$",
          "en": "Step 3 · Subtract vertically to eliminate $x$ and find $y$"
         },
         "math": "(3) - (1):\n15y=30\n\\hlg{y=2}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $x$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "\\xc{8x}",
             "+6y",
             "=",
             "60"
            ]
           },
           {
            "op": "-",
            "tag": "(1)",
            "cols": [
             "\\xc{8x}",
             "-9y",
             "=",
             "30"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{15y}",
            "=",
            "\\hlg{30}"
           ]
          }
         },
         "zh": "計算 $(3) - (1)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $y=2$。",
         "en": "Compute $(3) - (1)$: the $x$-terms cancel, leaving an equation in $y$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $y=2$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{y=2}",
         "zh": "題目所求為 $y=2$，對應選項 C。",
         "en": "The requested value is $y=2$, which matches option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-3$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $y=2$。",
         "en": "Getting $-3$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $y=2$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "B",
         "zh": "數字對了但正負號顛倒了！正確答案是 $y=2$，請檢查移項變號、兩式相減或除以負係數的那一步。",
         "en": "Right magnitude but opposite sign! The answer is $y=2$—recheck transposing, subtracting equations, or dividing by a negative.",
         "nudge": {
          "zh": "數字非常接近，先重點檢查「移項變號」和「除以負數」的正負號有沒有弄反！",
          "en": "Your magnitude is spot on—double-check the plus/minus sign when transposing or dividing by a negative!"
         }
        },
        {
         "opt": "D",
         "zh": "$6$ 是另一個未知數 $x$ 的值！你其實解對了聯立方程，只是答了 $x$ 而不是題目要求的 $y=2$。",
         "en": "$6$ is the value of the other unknown $x$! Your solving worked, but the question asks for $y=2$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $y$ 還是 $x$。",
          "en": "You actually found the other unknown! Check whether the question asks for $y$ or $x$."
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $x$ 一次直出 $y$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $x$ directly for $y$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=6,\\ y=2$ 代回原方程：$(1)$ 得 $8(6)-9(2)=30$，$(2)$ 得 $4(6)+3(2)=30$；最後確認所求量為 $2$（選項 C）。",
         "en": "Put $x=6,\\ y=2$ into both equations: $(1)$ gives $8(6)-9(2)=30$ and $(2)$ gives $4(6)+3(2)=30$, confirming $2$ (option C)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $8x-9y=30$ 與 $4x+3y=30$，再按計數機聯立方程程式依次輸入兩組係數 $(8,\\ -9,\\ 30)$ 及 $(4,\\ 3,\\ 30)$，即可直接核對 $x=6,\\ y=2$！",
         "en": "Arrange both equations into standard form $8x-9y=30$ and $4x+3y=30$, then enter $(8,\\ -9,\\ 30)$ and $(4,\\ 3,\\ 30)$ into your simultaneous-equations program to verify $x=6,\\ y=2$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $x$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $x$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "4m-3n=7=2m-5n\n\\Rightarrow 4m-3n=7 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 2m-5n=7 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $m$、$n$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $m$, $n$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $m$ 的係數",
          "en": "Step 2 · Scale equations to match $m$"
         },
         "math": "(2)\\times \\hlw{2}:\n4m-10n=\\hlw{14} \\quad \\cdots (3)",
         "zh": "要消去 $m$，先把$(2)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $m$, multiply all of $(2)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $m$，求出 $n$",
          "en": "Step 3 · Subtract vertically to eliminate $m$ and find $n$"
         },
         "math": "(1) - (3):\n7n=-7\n\\hlg{n=-1}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $m$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $m$)"
          },
          "rows": [
           {
            "tag": "(1)",
            "cols": [
             "\\xc{4m}",
             "-3n",
             "=",
             "7"
            ]
           },
           {
            "op": "-",
            "tag": "(3)",
            "cols": [
             "\\xc{4m}",
             "-10n",
             "=",
             "14"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{7n}",
            "=",
            "\\hlg{-7}"
           ]
          }
         },
         "zh": "計算 $(1) - (3)$：$m$ 項剛好抵消，只剩 $n$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $n=-1$。",
         "en": "Compute $(1) - (3)$: the $m$-terms cancel, leaving an equation in $n$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $n=-1$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{n=-1}",
         "zh": "題目所求為 $n=-1$，對應選項 B。",
         "en": "The requested value is $n=-1$, which matches option B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-6$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $n=-1$。",
         "en": "Getting $-6$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $n=-1$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "C",
         "zh": "$1$ 是另一個未知數 $m$ 的值！你其實解對了聯立方程，只是答了 $m$ 而不是題目要求的 $n=-1$。",
         "en": "$1$ is the value of the other unknown $m$! Your solving worked, but the question asks for $n=-1$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $n$ 還是 $m$。",
          "en": "You actually found the other unknown! Check whether the question asks for $n$ or $m$."
         }
        },
        {
         "opt": "D",
         "zh": "得出 $6$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $n=-1$。",
         "en": "Getting $6$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $n=-1$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $m$ 一次直出 $n$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $m$ directly for $n$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $m=1,\\ n=-1$ 代回原方程：$(1)$ 得 $4(1)-3(-1)=7$，$(2)$ 得 $2(1)-5(-1)=7$；最後確認所求量為 $-1$（選項 B）。",
         "en": "Put $m=1,\\ n=-1$ into both equations: $(1)$ gives $4(1)-3(-1)=7$ and $(2)$ gives $2(1)-5(-1)=7$, confirming $-1$ (option B)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $4m-3n=7$ 與 $2m-5n=7$，再按計數機聯立方程程式依次輸入兩組係數 $(4,\\ -3,\\ 7)$ 及 $(2,\\ -5,\\ 7)$，即可直接核對 $m=1,\\ n=-1$！",
         "en": "Arrange both equations into standard form $4m-3n=7$ and $2m-5n=7$, then enter $(4,\\ -3,\\ 7)$ and $(2,\\ -5,\\ 7)$ into your simultaneous-equations program to verify $m=1,\\ n=-1$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $m$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $m$ directly?"
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
       "zh": "若 $x + 2y = 7$ 及 $3x + 4y = 11$，求 $x$。",
       "en": "If $x + 2y = 7$$$$$ and $$$$$3x + 4y = 11$, then $x$ ="
      },
      "review": null,
      "options": {
       "A": "$-5$",
       "B": "$-3$",
       "C": "$3$",
       "D": "$5$"
      },
      "solution": {
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "x + 2y = 7\n\\Rightarrow x+2y=7 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 3x+4y=11 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $x$、$y$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $x$, $y$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
          "en": "Step 2 · Scale equations to match $y$"
         },
         "math": "(1)\\times \\hlw{2}:\n2x+4y=\\hlw{14} \\quad \\cdots (3)",
         "zh": "要消去 $y$，先把$(1)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $y$, multiply all of $(1)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $y$，求出 $x$",
          "en": "Step 3 · Subtract vertically to eliminate $y$ and find $x$"
         },
         "math": "(2) - (3):\n\\hlg{x=-3}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $y$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
          },
          "rows": [
           {
            "tag": "(2)",
            "cols": [
             "3x",
             "+\\xc{4y}",
             "=",
             "11"
            ]
           },
           {
            "op": "-",
            "tag": "(3)",
            "cols": [
             "2x",
             "+\\xc{4y}",
             "=",
             "14"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{x}",
            "",
            "=",
            "\\hlg{-3}"
           ]
          }
         },
         "zh": "計算 $(2) - (3)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=-3$。",
         "en": "Compute $(2) - (3)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=-3$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{x=-3}",
         "zh": "題目所求為 $x=-3$，對應選項 B。",
         "en": "The requested value is $x=-3$, which matches option B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個值剛好是 $-y=-5$：同時把未知數看錯了，而且正負號顛倒；正確答案為 $x=-3$。",
         "en": "This equals $-y=-5$—both the wrong unknown and the opposite sign; the target is $x=-3$.",
         "nudge": {
          "zh": "先確認自己消去的是不是不需要的未知數，再核對每一步的正負號。",
          "en": "First confirm you eliminated the unwanted unknown, then recheck every plus/minus sign."
         }
        },
        {
         "opt": "C",
         "zh": "數字對了但正負號顛倒了！正確答案是 $x=-3$，請檢查移項變號、兩式相減或除以負係數的那一步。",
         "en": "Right magnitude but opposite sign! The answer is $x=-3$—recheck transposing, subtracting equations, or dividing by a negative.",
         "nudge": {
          "zh": "數字非常接近，先重點檢查「移項變號」和「除以負數」的正負號有沒有弄反！",
          "en": "Your magnitude is spot on—double-check the plus/minus sign when transposing or dividing by a negative!"
         }
        },
        {
         "opt": "D",
         "zh": "$5$ 是另一個未知數 $y$ 的值！你其實解對了聯立方程，只是答了 $y$ 而不是題目要求的 $x=-3$。",
         "en": "$5$ is the value of the other unknown $y$! Your solving worked, but the question asks for $x=-3$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $x$ 還是 $y$。",
          "en": "You actually found the other unknown! Check whether the question asks for $x$ or $y$."
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $y$ 一次直出 $x$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $y$ directly for $x$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=-3,\\ y=5$ 代回原方程：$(1)$ 得 $(-3)+2(5)=7$，$(2)$ 得 $3(-3)+4(5)=11$；最後確認所求量為 $-3$（選項 B）。",
         "en": "Put $x=-3,\\ y=5$ into both equations: $(1)$ gives $(-3)+2(5)=7$ and $(2)$ gives $3(-3)+4(5)=11$, confirming $-3$ (option B)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $x+2y=7$ 與 $3x+4y=11$，再按計數機聯立方程程式依次輸入兩組係數 $(1,\\ 2,\\ 7)$ 及 $(3,\\ 4,\\ 11)$，即可直接核對 $x=-3,\\ y=5$！",
         "en": "Arrange both equations into standard form $x+2y=7$ and $3x+4y=11$, then enter $(1,\\ 2,\\ 7)$ and $(3,\\ 4,\\ 11)$ into your simultaneous-equations program to verify $x=-3,\\ y=5$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $y$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $y$ directly?"
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
       "zh": "若 $a - 4b = 2$ 及 $5a + 2b = -12$，求 $a$。",
       "en": "If $a - 4b = 2$$$$$ and $$$$$5a + 2b = -12$, then $a$ ="
      },
      "review": null,
      "options": {
       "A": "$-2$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$2$"
      },
      "solution": {
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "a - 4b = 2\n\\Rightarrow a-4b=2 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 5a+2b=-12 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $a$、$b$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $a$, $b$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $b$ 的係數",
          "en": "Step 2 · Scale equations to match $b$"
         },
         "math": "(2)\\times \\hlw{2}:\n10a+4b=\\hlw{-24} \\quad \\cdots (3)",
         "zh": "要消去 $b$，先把$(2)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $b$, multiply all of $(2)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $b$，求出 $a$",
          "en": "Step 3 · Add vertically to eliminate $b$ and find $a$"
         },
         "math": "(1) + (3):\n11a=-22\n\\hlg{a=-2}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $b$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $b$)"
          },
          "rows": [
           {
            "tag": "(1)",
            "cols": [
             "a",
             "-\\xc{4b}",
             "=",
             "2"
            ]
           },
           {
            "op": "+",
            "tag": "(3)",
            "cols": [
             "10a",
             "+\\xc{4b}",
             "=",
             "-24"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{11a}",
            "",
            "=",
            "\\hlg{-22}"
           ]
          }
         },
         "zh": "計算 $(1) + (3)$：$b$ 項剛好抵消，只剩 $a$ 的一元一次方程。解得 $a=-2$。",
         "en": "Compute $(1) + (3)$: the $b$-terms cancel, leaving an equation in $a$ alone. Solving gives $a=-2$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{a=-2}",
         "zh": "題目所求為 $a=-2$，對應選項 A。",
         "en": "The requested value is $a=-2$, which matches option A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-1$ 是另一個未知數 $b$ 的值！你其實解對了聯立方程，只是答了 $b$ 而不是題目要求的 $a=-2$。",
         "en": "$-1$ is the value of the other unknown $b$! Your solving worked, but the question asks for $a=-2$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $a$ 還是 $b$。",
          "en": "You actually found the other unknown! Check whether the question asks for $a$ or $b$."
         }
        },
        {
         "opt": "C",
         "zh": "這個值剛好是 $-b=1$：同時把未知數看錯了，而且正負號顛倒；正確答案為 $a=-2$。",
         "en": "This equals $-b=1$—both the wrong unknown and the opposite sign; the target is $a=-2$.",
         "nudge": {
          "zh": "先確認自己消去的是不是不需要的未知數，再核對每一步的正負號。",
          "en": "First confirm you eliminated the unwanted unknown, then recheck every plus/minus sign."
         }
        },
        {
         "opt": "D",
         "zh": "數字對了但正負號顛倒了！正確答案是 $a=-2$，請檢查移項變號、兩式相減或除以負係數的那一步。",
         "en": "Right magnitude but opposite sign! The answer is $a=-2$—recheck transposing, subtracting equations, or dividing by a negative.",
         "nudge": {
          "zh": "數字非常接近，先重點檢查「移項變號」和「除以負數」的正負號有沒有弄反！",
          "en": "Your magnitude is spot on—double-check the plus/minus sign when transposing or dividing by a negative!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $b$ 一次直出 $a$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $b$ directly for $a$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $a=-2,\\ b=-1$ 代回原方程：$(1)$ 得 $(-2)-4(-1)=2$，$(2)$ 得 $5(-2)+2(-1)=-12$；最後確認所求量為 $-2$（選項 A）。",
         "en": "Put $a=-2,\\ b=-1$ into both equations: $(1)$ gives $(-2)-4(-1)=2$ and $(2)$ gives $5(-2)+2(-1)=-12$, confirming $-2$ (option A)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $a-4b=2$ 與 $5a+2b=-12$，再按計數機聯立方程程式依次輸入兩組係數 $(1,\\ -4,\\ 2)$ 及 $(5,\\ 2,\\ -12)$，即可直接核對 $a=-2,\\ b=-1$！",
         "en": "Arrange both equations into standard form $a-4b=2$ and $5a+2b=-12$, then enter $(1,\\ -4,\\ 2)$ and $(5,\\ 2,\\ -12)$ into your simultaneous-equations program to verify $a=-2,\\ b=-1$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $b$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $b$ directly?"
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
       "zh": "若 $3p - q = 13$ 及 $9p + 2q = 4$，求 $q$。",
       "en": "If $3p - q = 13$$$$$ and $$$$$9p + 2q = 4$, then $q$ ="
      },
      "review": null,
      "options": {
       "A": "$-7$",
       "B": "$-2$",
       "C": "$2$",
       "D": "$7$"
      },
      "solution": {
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "3p - q = 13\n\\Rightarrow 3p-q=13 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 9p+2q=4 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $p$、$q$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $p$, $q$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $p$ 的係數",
          "en": "Step 2 · Scale equations to match $p$"
         },
         "math": "(1)\\times \\hlw{3}:\n9p-3q=\\hlw{39} \\quad \\cdots (3)",
         "zh": "要消去 $p$，先把$(1)$ 整條同乘 $3$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $p$, multiply all of $(1)$ by $3$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $p$，求出 $q$",
          "en": "Step 3 · Subtract vertically to eliminate $p$ and find $q$"
         },
         "math": "(2) - (3):\n5q=-35\n\\hlg{q=-7}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $p$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $p$)"
          },
          "rows": [
           {
            "tag": "(2)",
            "cols": [
             "\\xc{9p}",
             "+2q",
             "=",
             "4"
            ]
           },
           {
            "op": "-",
            "tag": "(3)",
            "cols": [
             "\\xc{9p}",
             "-3q",
             "=",
             "39"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{5q}",
            "=",
            "\\hlg{-35}"
           ]
          }
         },
         "zh": "計算 $(2) - (3)$：$p$ 項剛好抵消，只剩 $q$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $q=-7$。",
         "en": "Compute $(2) - (3)$: the $p$-terms cancel, leaving an equation in $q$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $q=-7$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{q=-7}",
         "zh": "題目所求為 $q=-7$，對應選項 A。",
         "en": "The requested value is $q=-7$, which matches option A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "這個值剛好是 $-p=-2$：同時把未知數看錯了，而且正負號顛倒；正確答案為 $q=-7$。",
         "en": "This equals $-p=-2$—both the wrong unknown and the opposite sign; the target is $q=-7$.",
         "nudge": {
          "zh": "先確認自己消去的是不是不需要的未知數，再核對每一步的正負號。",
          "en": "First confirm you eliminated the unwanted unknown, then recheck every plus/minus sign."
         }
        },
        {
         "opt": "C",
         "zh": "$2$ 是另一個未知數 $p$ 的值！你其實解對了聯立方程，只是答了 $p$ 而不是題目要求的 $q=-7$。",
         "en": "$2$ is the value of the other unknown $p$! Your solving worked, but the question asks for $q=-7$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $q$ 還是 $p$。",
          "en": "You actually found the other unknown! Check whether the question asks for $q$ or $p$."
         }
        },
        {
         "opt": "D",
         "zh": "數字對了但正負號顛倒了！正確答案是 $q=-7$，請檢查移項變號、兩式相減或除以負係數的那一步。",
         "en": "Right magnitude but opposite sign! The answer is $q=-7$—recheck transposing, subtracting equations, or dividing by a negative.",
         "nudge": {
          "zh": "數字非常接近，先重點檢查「移項變號」和「除以負數」的正負號有沒有弄反！",
          "en": "Your magnitude is spot on—double-check the plus/minus sign when transposing or dividing by a negative!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $p$ 一次直出 $q$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $p$ directly for $q$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $p=2,\\ q=-7$ 代回原方程：$(1)$ 得 $3(2)-(-7)=13$，$(2)$ 得 $9(2)+2(-7)=4$；最後確認所求量為 $-7$（選項 A）。",
         "en": "Put $p=2,\\ q=-7$ into both equations: $(1)$ gives $3(2)-(-7)=13$ and $(2)$ gives $9(2)+2(-7)=4$, confirming $-7$ (option A)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $3p-q=13$ 與 $9p+2q=4$，再按計數機聯立方程程式依次輸入兩組係數 $(3,\\ -1,\\ 13)$ 及 $(9,\\ 2,\\ 4)$，即可直接核對 $p=2,\\ q=-7$！",
         "en": "Arrange both equations into standard form $3p-q=13$ and $9p+2q=4$, then enter $(3,\\ -1,\\ 13)$ and $(9,\\ 2,\\ 4)$ into your simultaneous-equations program to verify $p=2,\\ q=-7$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $p$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $p$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "x + 3y + 14 = 3x - y = 11\n\\Rightarrow x+3y=-3 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 3x-y=11 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $x$、$y$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $x$, $y$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
          "en": "Step 2 · Scale equations to match $x$"
         },
         "math": "(1)\\times \\hlw{3}:\n3x+9y=\\hlw{-9} \\quad \\cdots (3)",
         "zh": "要消去 $x$，先把$(1)$ 整條同乘 $3$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $x$, multiply all of $(1)$ by $3$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $x$，求出 $y$",
          "en": "Step 3 · Subtract vertically to eliminate $x$ and find $y$"
         },
         "math": "(3) - (2):\n10y=-20\n\\hlg{y=-2}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $x$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "\\xc{3x}",
             "+9y",
             "=",
             "-9"
            ]
           },
           {
            "op": "-",
            "tag": "(2)",
            "cols": [
             "\\xc{3x}",
             "-y",
             "=",
             "11"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{10y}",
            "=",
            "\\hlg{-20}"
           ]
          }
         },
         "zh": "計算 $(3) - (2)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $y=-2$。",
         "en": "Compute $(3) - (2)$: the $x$-terms cancel, leaving an equation in $y$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $y=-2$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{y=-2}",
         "zh": "題目所求為 $y=-2$，對應選項 B。",
         "en": "The requested value is $y=-2$, which matches option B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-8$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $y=-2$。",
         "en": "Getting $-8$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $y=-2$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "C",
         "zh": "得出 $1$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $y=-2$。",
         "en": "Getting $1$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $y=-2$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "D",
         "zh": "$3$ 是另一個未知數 $x$ 的值！你其實解對了聯立方程，只是答了 $x$ 而不是題目要求的 $y=-2$。",
         "en": "$3$ is the value of the other unknown $x$! Your solving worked, but the question asks for $y=-2$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $y$ 還是 $x$。",
          "en": "You actually found the other unknown! Check whether the question asks for $y$ or $x$."
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $x$ 一次直出 $y$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $x$ directly for $y$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=3,\\ y=-2$ 代回原方程：$(1)$ 得 $3+3(-2)=-3$，$(2)$ 得 $3(3)-(-2)=11$；最後確認所求量為 $-2$（選項 B）。",
         "en": "Put $x=3,\\ y=-2$ into both equations: $(1)$ gives $3+3(-2)=-3$ and $(2)$ gives $3(3)-(-2)=11$, confirming $-2$ (option B)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $x+3y=-3$ 與 $3x-y=11$，再按計數機聯立方程程式依次輸入兩組係數 $(1,\\ 3,\\ -3)$ 及 $(3,\\ -1,\\ 11)$，即可直接核對 $x=3,\\ y=-2$！",
         "en": "Arrange both equations into standard form $x+3y=-3$ and $3x-y=11$, then enter $(1,\\ 3,\\ -3)$ and $(3,\\ -1,\\ 11)$ into your simultaneous-equations program to verify $x=3,\\ y=-2$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $x$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $x$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "p + 2q + 11 = 3p - q = 13\n\\Rightarrow p+2q=2 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 3p-q=13 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $p$、$q$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $p$, $q$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $q$ 的係數",
          "en": "Step 2 · Scale equations to match $q$"
         },
         "math": "(2)\\times \\hlw{2}:\n6p-2q=\\hlw{26} \\quad \\cdots (3)",
         "zh": "要消去 $q$，先把$(2)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $q$, multiply all of $(2)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $q$，求出 $p$",
          "en": "Step 3 · Add vertically to eliminate $q$ and find $p$"
         },
         "math": "(1) + (3):\n7p=28\n\\hlg{p=4}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $q$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $q$)"
          },
          "rows": [
           {
            "tag": "(1)",
            "cols": [
             "p",
             "+\\xc{2q}",
             "=",
             "2"
            ]
           },
           {
            "op": "+",
            "tag": "(3)",
            "cols": [
             "6p",
             "-\\xc{2q}",
             "=",
             "26"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{7p}",
            "",
            "=",
            "\\hlg{28}"
           ]
          }
         },
         "zh": "計算 $(1) + (3)$：$q$ 項剛好抵消，只剩 $p$ 的一元一次方程。解得 $p=4$。",
         "en": "Compute $(1) + (3)$: the $q$-terms cancel, leaving an equation in $p$ alone. Solving gives $p=4$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{p=4}",
         "zh": "題目所求為 $p=4$，對應選項 C。",
         "en": "The requested value is $p=4$, which matches option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-7$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $p=4$。",
         "en": "Getting $-7$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $p=4$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "B",
         "zh": "$-1$ 是另一個未知數 $q$ 的值！你其實解對了聯立方程，只是答了 $q$ 而不是題目要求的 $p=4$。",
         "en": "$-1$ is the value of the other unknown $q$! Your solving worked, but the question asks for $p=4$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $p$ 還是 $q$。",
          "en": "You actually found the other unknown! Check whether the question asks for $p$ or $q$."
         }
        },
        {
         "opt": "D",
         "zh": "得出 $6$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $p=4$。",
         "en": "Getting $6$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $p=4$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $q$ 一次直出 $p$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $q$ directly for $p$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $p=4,\\ q=-1$ 代回原方程：$(1)$ 得 $4+2(-1)=2$，$(2)$ 得 $3(4)-(-1)=13$；最後確認所求量為 $4$（選項 C）。",
         "en": "Put $p=4,\\ q=-1$ into both equations: $(1)$ gives $4+2(-1)=2$ and $(2)$ gives $3(4)-(-1)=13$, confirming $4$ (option C)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $p+2q=2$ 與 $3p-q=13$，再按計數機聯立方程程式依次輸入兩組係數 $(1,\\ 2,\\ 2)$ 及 $(3,\\ -1,\\ 13)$，即可直接核對 $p=4,\\ q=-1$！",
         "en": "Arrange both equations into standard form $p+2q=2$ and $3p-q=13$, then enter $(1,\\ 2,\\ 2)$ and $(3,\\ -1,\\ 13)$ into your simultaneous-equations program to verify $p=4,\\ q=-1$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $q$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $q$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "4r - s - 10 = r + 4s = 9\n\\Rightarrow 4r-s=19 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} r+4s=9 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $r$、$s$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $r$, $s$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $s$ 的係數",
          "en": "Step 2 · Scale equations to match $s$"
         },
         "math": "(1)\\times \\hlw{4}:\n16r-4s=\\hlw{76} \\quad \\cdots (3)",
         "zh": "要消去 $s$，先把$(1)$ 整條同乘 $4$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $s$, multiply all of $(1)$ by $4$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $s$，求出 $r$",
          "en": "Step 3 · Add vertically to eliminate $s$ and find $r$"
         },
         "math": "(3) + (2):\n17r=85\n\\hlg{r=5}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $s$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $s$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "16r",
             "-\\xc{4s}",
             "=",
             "76"
            ]
           },
           {
            "op": "+",
            "tag": "(2)",
            "cols": [
             "r",
             "+\\xc{4s}",
             "=",
             "9"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{17r}",
            "",
            "=",
            "\\hlg{85}"
           ]
          }
         },
         "zh": "計算 $(3) + (2)$：$s$ 項剛好抵消，只剩 $r$ 的一元一次方程。解得 $r=5$。",
         "en": "Compute $(3) + (2)$: the $s$-terms cancel, leaving an equation in $r$ alone. Solving gives $r=5$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{r=5}",
         "zh": "題目所求為 $r=5$，對應選項 D。",
         "en": "The requested value is $r=5$, which matches option D."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-11$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $r=5$。",
         "en": "Getting $-11$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $r=5$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "B",
         "zh": "得出 $-6$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $r=5$。",
         "en": "Getting $-6$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $r=5$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "C",
         "zh": "$1$ 是另一個未知數 $s$ 的值！你其實解對了聯立方程，只是答了 $s$ 而不是題目要求的 $r=5$。",
         "en": "$1$ is the value of the other unknown $s$! Your solving worked, but the question asks for $r=5$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $r$ 還是 $s$。",
          "en": "You actually found the other unknown! Check whether the question asks for $r$ or $s$."
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $s$ 一次直出 $r$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $s$ directly for $r$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $r=5,\\ s=1$ 代回原方程：$(1)$ 得 $4(5)-(1)=19$，$(2)$ 得 $5+4(1)=9$；最後確認所求量為 $5$（選項 D）。",
         "en": "Put $r=5,\\ s=1$ into both equations: $(1)$ gives $4(5)-(1)=19$ and $(2)$ gives $5+4(1)=9$, confirming $5$ (option D)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $4r-s=19$ 與 $r+4s=9$，再按計數機聯立方程程式依次輸入兩組係數 $(4,\\ -1,\\ 19)$ 及 $(1,\\ 4,\\ 9)$，即可直接核對 $r=5,\\ s=1$！",
         "en": "Arrange both equations into standard form $4r-s=19$ and $r+4s=9$, then enter $(4,\\ -1,\\ 19)$ and $(1,\\ 4,\\ 9)$ into your simultaneous-equations program to verify $r=5,\\ s=1$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $s$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $s$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "3a + b = 5a + 3b = 8\n\\Rightarrow 3a+b=8 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 5a+3b=8 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $a$、$b$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $a$, $b$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $a$ 的係數",
          "en": "Step 2 · Scale equations to match $a$"
         },
         "math": "(1)\\times \\hlw{5}:\n15a+5b=\\hlw{40} \\quad \\cdots (3)\n(2)\\times \\hlw{3}:\n15a+9b=\\hlw{24} \\quad \\cdots (4)",
         "zh": "要消去 $a$，先把$(1)$ 整條同乘 $5$ 得 (3)、$(2)$ 整條同乘 $3$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $a$, multiply all of $(1)$ by $5$ to get (3) and multiply all of $(2)$ by $3$ to get (4). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $a$，求出 $b$",
          "en": "Step 3 · Subtract vertically to eliminate $a$ and find $b$"
         },
         "math": "(4) - (3):\n4b=-16\n\\hlg{b=-4}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $a$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $a$)"
          },
          "rows": [
           {
            "tag": "(4)",
            "cols": [
             "\\xc{15a}",
             "+9b",
             "=",
             "24"
            ]
           },
           {
            "op": "-",
            "tag": "(3)",
            "cols": [
             "\\xc{15a}",
             "+5b",
             "=",
             "40"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{4b}",
            "=",
            "\\hlg{-16}"
           ]
          }
         },
         "zh": "計算 $(4) - (3)$：$a$ 項剛好抵消，只剩 $b$ 的一元一次方程。解得 $b=-4$。",
         "en": "Compute $(4) - (3)$: the $a$-terms cancel, leaving an equation in $b$ alone. Solving gives $b=-4$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{b=-4}",
         "zh": "題目所求為 $b=-4$，對應選項 B。",
         "en": "The requested value is $b=-4$, which matches option B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-11$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $b=-4$。",
         "en": "Getting $-11$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $b=-4$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "C",
         "zh": "$4$ 是另一個未知數 $a$ 的值！你其實解對了聯立方程，只是答了 $a$ 而不是題目要求的 $b=-4$。",
         "en": "$4$ is the value of the other unknown $a$! Your solving worked, but the question asks for $b=-4$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $b$ 還是 $a$。",
          "en": "You actually found the other unknown! Check whether the question asks for $b$ or $a$."
         }
        },
        {
         "opt": "D",
         "zh": "得出 $11$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $b=-4$。",
         "en": "Getting $11$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $b=-4$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $a$ 一次直出 $b$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $a$ directly for $b$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $a=4,\\ b=-4$ 代回原方程：$(1)$ 得 $3(4)+(-4)=8$，$(2)$ 得 $5(4)+3(-4)=8$；最後確認所求量為 $-4$（選項 B）。",
         "en": "Put $a=4,\\ b=-4$ into both equations: $(1)$ gives $3(4)+(-4)=8$ and $(2)$ gives $5(4)+3(-4)=8$, confirming $-4$ (option B)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $3a+b=8$ 與 $5a+3b=8$，再按計數機聯立方程程式依次輸入兩組係數 $(3,\\ 1,\\ 8)$ 及 $(5,\\ 3,\\ 8)$，即可直接核對 $a=4,\\ b=-4$！",
         "en": "Arrange both equations into standard form $3a+b=8$ and $5a+3b=8$, then enter $(3,\\ 1,\\ 8)$ and $(5,\\ 3,\\ 8)$ into your simultaneous-equations program to verify $a=4,\\ b=-4$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $a$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $a$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "4p - q = 9p + 4q = 5\n\\Rightarrow 4p-q=5 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 9p+4q=5 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $p$、$q$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $p$, $q$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $p$ 的係數",
          "en": "Step 2 · Scale equations to match $p$"
         },
         "math": "(1)\\times \\hlw{9}:\n36p-9q=\\hlw{45} \\quad \\cdots (3)\n(2)\\times \\hlw{4}:\n36p+16q=\\hlw{20} \\quad \\cdots (4)",
         "zh": "要消去 $p$，先把$(1)$ 整條同乘 $9$ 得 (3)、$(2)$ 整條同乘 $4$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $p$, multiply all of $(1)$ by $9$ to get (3) and multiply all of $(2)$ by $4$ to get (4). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $p$，求出 $q$",
          "en": "Step 3 · Subtract vertically to eliminate $p$ and find $q$"
         },
         "math": "(4) - (3):\n25q=-25\n\\hlg{q=-1}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $p$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $p$)"
          },
          "rows": [
           {
            "tag": "(4)",
            "cols": [
             "\\xc{36p}",
             "+16q",
             "=",
             "20"
            ]
           },
           {
            "op": "-",
            "tag": "(3)",
            "cols": [
             "\\xc{36p}",
             "-9q",
             "=",
             "45"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{25q}",
            "=",
            "\\hlg{-25}"
           ]
          }
         },
         "zh": "計算 $(4) - (3)$：$p$ 項剛好抵消，只剩 $q$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $q=-1$。",
         "en": "Compute $(4) - (3)$: the $p$-terms cancel, leaving an equation in $q$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $q=-1$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{q=-1}",
         "zh": "題目所求為 $q=-1$，對應選項 B。",
         "en": "The requested value is $q=-1$, which matches option B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-5$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $q=-1$。",
         "en": "Getting $-5$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $q=-1$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "C",
         "zh": "$1$ 是另一個未知數 $p$ 的值！你其實解對了聯立方程，只是答了 $p$ 而不是題目要求的 $q=-1$。",
         "en": "$1$ is the value of the other unknown $p$! Your solving worked, but the question asks for $q=-1$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $q$ 還是 $p$。",
          "en": "You actually found the other unknown! Check whether the question asks for $q$ or $p$."
         }
        },
        {
         "opt": "D",
         "zh": "得出 $5$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $q=-1$。",
         "en": "Getting $5$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $q=-1$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $p$ 一次直出 $q$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $p$ directly for $q$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $p=1,\\ q=-1$ 代回原方程：$(1)$ 得 $4(1)-(-1)=5$，$(2)$ 得 $9(1)+4(-1)=5$；最後確認所求量為 $-1$（選項 B）。",
         "en": "Put $p=1,\\ q=-1$ into both equations: $(1)$ gives $4(1)-(-1)=5$ and $(2)$ gives $9(1)+4(-1)=5$, confirming $-1$ (option B)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $4p-q=5$ 與 $9p+4q=5$，再按計數機聯立方程程式依次輸入兩組係數 $(4,\\ -1,\\ 5)$ 及 $(9,\\ 4,\\ 5)$，即可直接核對 $p=1,\\ q=-1$！",
         "en": "Arrange both equations into standard form $4p-q=5$ and $9p+4q=5$, then enter $(4,\\ -1,\\ 5)$ and $(9,\\ 4,\\ 5)$ into your simultaneous-equations program to verify $p=1,\\ q=-1$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $p$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $p$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "x + 5y = 3x + 2y = 13\n\\Rightarrow x+5y=13 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 3x+2y=13 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $x$、$y$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $x$, $y$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
          "en": "Step 2 · Scale equations to match $y$"
         },
         "math": "(1)\\times \\hlw{2}:\n2x+10y=\\hlw{26} \\quad \\cdots (3)\n(2)\\times \\hlw{5}:\n15x+10y=\\hlw{65} \\quad \\cdots (4)",
         "zh": "要消去 $y$，先把$(1)$ 整條同乘 $2$ 得 (3)、$(2)$ 整條同乘 $5$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $y$, multiply all of $(1)$ by $2$ to get (3) and multiply all of $(2)$ by $5$ to get (4). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $y$，求出 $x$",
          "en": "Step 3 · Subtract vertically to eliminate $y$ and find $x$"
         },
         "math": "(4) - (3):\n13x=39\n\\hlg{x=3}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $y$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
          },
          "rows": [
           {
            "tag": "(4)",
            "cols": [
             "15x",
             "+\\xc{10y}",
             "=",
             "65"
            ]
           },
           {
            "op": "-",
            "tag": "(3)",
            "cols": [
             "2x",
             "+\\xc{10y}",
             "=",
             "26"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{13x}",
            "",
            "=",
            "\\hlg{39}"
           ]
          }
         },
         "zh": "計算 $(4) - (3)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=3$。",
         "en": "Compute $(4) - (3)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=3$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{x=3}",
         "zh": "題目所求為 $x=3$，對應選項 D。",
         "en": "The requested value is $x=3$, which matches option D."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "數字對了但正負號顛倒了！正確答案是 $x=3$，請檢查移項變號、兩式相減或除以負係數的那一步。",
         "en": "Right magnitude but opposite sign! The answer is $x=3$—recheck transposing, subtracting equations, or dividing by a negative.",
         "nudge": {
          "zh": "數字非常接近，先重點檢查「移項變號」和「除以負數」的正負號有沒有弄反！",
          "en": "Your magnitude is spot on—double-check the plus/minus sign when transposing or dividing by a negative!"
         }
        },
        {
         "opt": "B",
         "zh": "這個值剛好是 $-y=-2$：同時把未知數看錯了，而且正負號顛倒；正確答案為 $x=3$。",
         "en": "This equals $-y=-2$—both the wrong unknown and the opposite sign; the target is $x=3$.",
         "nudge": {
          "zh": "先確認自己消去的是不是不需要的未知數，再核對每一步的正負號。",
          "en": "First confirm you eliminated the unwanted unknown, then recheck every plus/minus sign."
         }
        },
        {
         "opt": "C",
         "zh": "$2$ 是另一個未知數 $y$ 的值！你其實解對了聯立方程，只是答了 $y$ 而不是題目要求的 $x=3$。",
         "en": "$2$ is the value of the other unknown $y$! Your solving worked, but the question asks for $x=3$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $x$ 還是 $y$。",
          "en": "You actually found the other unknown! Check whether the question asks for $x$ or $y$."
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $y$ 一次直出 $x$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $y$ directly for $x$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=3,\\ y=2$ 代回原方程：$(1)$ 得 $3+5(2)=13$，$(2)$ 得 $3(3)+2(2)=13$；最後確認所求量為 $3$（選項 D）。",
         "en": "Put $x=3,\\ y=2$ into both equations: $(1)$ gives $3+5(2)=13$ and $(2)$ gives $3(3)+2(2)=13$, confirming $3$ (option D)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $x+5y=13$ 與 $3x+2y=13$，再按計數機聯立方程程式依次輸入兩組係數 $(1,\\ 5,\\ 13)$ 及 $(3,\\ 2,\\ 13)$，即可直接核對 $x=3,\\ y=2$！",
         "en": "Arrange both equations into standard form $x+5y=13$ and $3x+2y=13$, then enter $(1,\\ 5,\\ 13)$ and $(3,\\ 2,\\ 13)$ into your simultaneous-equations program to verify $x=3,\\ y=2$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $y$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $y$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "12x - 11y = 39 = 4x + 5y\n\\Rightarrow 12x-11y=39 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 4x+5y=39 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $x$、$y$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $x$, $y$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
          "en": "Step 2 · Scale equations to match $x$"
         },
         "math": "(2)\\times \\hlw{3}:\n12x+15y=\\hlw{117} \\quad \\cdots (3)",
         "zh": "要消去 $x$，先把$(2)$ 整條同乘 $3$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $x$, multiply all of $(2)$ by $3$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $x$，求出 $y$",
          "en": "Step 3 · Subtract vertically to eliminate $x$ and find $y$"
         },
         "math": "(3) - (1):\n26y=78\n\\hlg{y=3}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $x$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "\\xc{12x}",
             "+15y",
             "=",
             "117"
            ]
           },
           {
            "op": "-",
            "tag": "(1)",
            "cols": [
             "\\xc{12x}",
             "-11y",
             "=",
             "39"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{26y}",
            "=",
            "\\hlg{78}"
           ]
          }
         },
         "zh": "計算 $(3) - (1)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $y=3$。",
         "en": "Compute $(3) - (1)$: the $x$-terms cancel, leaving an equation in $y$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $y=3$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{y=3}",
         "zh": "題目所求為 $y=3$，對應選項 C。",
         "en": "The requested value is $y=3$, which matches option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "這個值剛好是 $-x=-6$：同時把未知數看錯了，而且正負號顛倒；正確答案為 $y=3$。",
         "en": "This equals $-x=-6$—both the wrong unknown and the opposite sign; the target is $y=3$.",
         "nudge": {
          "zh": "先確認自己消去的是不是不需要的未知數，再核對每一步的正負號。",
          "en": "First confirm you eliminated the unwanted unknown, then recheck every plus/minus sign."
         }
        },
        {
         "opt": "B",
         "zh": "數字對了但正負號顛倒了！正確答案是 $y=3$，請檢查移項變號、兩式相減或除以負係數的那一步。",
         "en": "Right magnitude but opposite sign! The answer is $y=3$—recheck transposing, subtracting equations, or dividing by a negative.",
         "nudge": {
          "zh": "數字非常接近，先重點檢查「移項變號」和「除以負數」的正負號有沒有弄反！",
          "en": "Your magnitude is spot on—double-check the plus/minus sign when transposing or dividing by a negative!"
         }
        },
        {
         "opt": "D",
         "zh": "$6$ 是另一個未知數 $x$ 的值！你其實解對了聯立方程，只是答了 $x$ 而不是題目要求的 $y=3$。",
         "en": "$6$ is the value of the other unknown $x$! Your solving worked, but the question asks for $y=3$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $y$ 還是 $x$。",
          "en": "You actually found the other unknown! Check whether the question asks for $y$ or $x$."
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $x$ 一次直出 $y$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $x$ directly for $y$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=6,\\ y=3$ 代回原方程：$(1)$ 得 $12(6)-11(3)=39$，$(2)$ 得 $4(6)+5(3)=39$；最後確認所求量為 $3$（選項 C）。",
         "en": "Put $x=6,\\ y=3$ into both equations: $(1)$ gives $12(6)-11(3)=39$ and $(2)$ gives $4(6)+5(3)=39$, confirming $3$ (option C)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $12x-11y=39$ 與 $4x+5y=39$，再按計數機聯立方程程式依次輸入兩組係數 $(12,\\ -11,\\ 39)$ 及 $(4,\\ 5,\\ 39)$，即可直接核對 $x=6,\\ y=3$！",
         "en": "Arrange both equations into standard form $12x-11y=39$ and $4x+5y=39$, then enter $(12,\\ -11,\\ 39)$ and $(4,\\ 5,\\ 39)$ into your simultaneous-equations program to verify $x=6,\\ y=3$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $x$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $x$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "9m + 10n = 8 = 3m - 2n\n\\Rightarrow 9m+10n=8 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 3m-2n=8 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $m$、$n$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $m$, $n$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $n$ 的係數",
          "en": "Step 2 · Scale equations to match $n$"
         },
         "math": "(2)\\times \\hlw{5}:\n15m-10n=\\hlw{40} \\quad \\cdots (3)",
         "zh": "要消去 $n$，先把$(2)$ 整條同乘 $5$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $n$, multiply all of $(2)$ by $5$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $n$，求出 $m$",
          "en": "Step 3 · Add vertically to eliminate $n$ and find $m$"
         },
         "math": "(1) + (3):\n24m=48\n\\hlg{m=2}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $n$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $n$)"
          },
          "rows": [
           {
            "tag": "(1)",
            "cols": [
             "9m",
             "+\\xc{10n}",
             "=",
             "8"
            ]
           },
           {
            "op": "+",
            "tag": "(3)",
            "cols": [
             "15m",
             "-\\xc{10n}",
             "=",
             "40"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{24m}",
            "",
            "=",
            "\\hlg{48}"
           ]
          }
         },
         "zh": "計算 $(1) + (3)$：$n$ 項剛好抵消，只剩 $m$ 的一元一次方程。解得 $m=2$。",
         "en": "Compute $(1) + (3)$: the $n$-terms cancel, leaving an equation in $m$ alone. Solving gives $m=2$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{m=2}",
         "zh": "題目所求為 $m=2$，對應選項 C。",
         "en": "The requested value is $m=2$, which matches option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-4$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $m=2$。",
         "en": "Getting $-4$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $m=2$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "B",
         "zh": "$-1$ 是另一個未知數 $n$ 的值！你其實解對了聯立方程，只是答了 $n$ 而不是題目要求的 $m=2$。",
         "en": "$-1$ is the value of the other unknown $n$! Your solving worked, but the question asks for $m=2$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $m$ 還是 $n$。",
          "en": "You actually found the other unknown! Check whether the question asks for $m$ or $n$."
         }
        },
        {
         "opt": "D",
         "zh": "得出 $4$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $m=2$。",
         "en": "Getting $4$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $m=2$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $n$ 一次直出 $m$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $n$ directly for $m$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $m=2,\\ n=-1$ 代回原方程：$(1)$ 得 $9(2)+10(-1)=8$，$(2)$ 得 $3(2)-2(-1)=8$；最後確認所求量為 $2$（選項 C）。",
         "en": "Put $m=2,\\ n=-1$ into both equations: $(1)$ gives $9(2)+10(-1)=8$ and $(2)$ gives $3(2)-2(-1)=8$, confirming $2$ (option C)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $9m+10n=8$ 與 $3m-2n=8$，再按計數機聯立方程程式依次輸入兩組係數 $(9,\\ 10,\\ 8)$ 及 $(3,\\ -2,\\ 8)$，即可直接核對 $m=2,\\ n=-1$！",
         "en": "Arrange both equations into standard form $9m+10n=8$ and $3m-2n=8$, then enter $(9,\\ 10,\\ 8)$ and $(3,\\ -2,\\ 8)$ into your simultaneous-equations program to verify $m=2,\\ n=-1$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $n$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $n$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "5a + 6b = 27 = 17a - 12b\n\\Rightarrow 5a+6b=27 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} 17a-12b=27 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $a$、$b$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $a$, $b$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $b$ 的係數",
          "en": "Step 2 · Scale equations to match $b$"
         },
         "math": "(1)\\times \\hlw{2}:\n10a+12b=\\hlw{54} \\quad \\cdots (3)",
         "zh": "要消去 $b$，先把$(1)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $b$, multiply all of $(1)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $b$，求出 $a$",
          "en": "Step 3 · Add vertically to eliminate $b$ and find $a$"
         },
         "math": "(3) + (2):\n27a=81\n\\hlg{a=3}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $b$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $b$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "10a",
             "+\\xc{12b}",
             "=",
             "54"
            ]
           },
           {
            "op": "+",
            "tag": "(2)",
            "cols": [
             "17a",
             "-\\xc{12b}",
             "=",
             "27"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{27a}",
            "",
            "=",
            "\\hlg{81}"
           ]
          }
         },
         "zh": "計算 $(3) + (2)$：$b$ 項剛好抵消，只剩 $a$ 的一元一次方程。解得 $a=3$。",
         "en": "Compute $(3) + (2)$: the $b$-terms cancel, leaving an equation in $a$ alone. Solving gives $a=3$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{a=3}",
         "zh": "題目所求為 $a=3$，對應選項 C。",
         "en": "The requested value is $a=3$, which matches option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "數字對了但正負號顛倒了！正確答案是 $a=3$，請檢查移項變號、兩式相減或除以負係數的那一步。",
         "en": "Right magnitude but opposite sign! The answer is $a=3$—recheck transposing, subtracting equations, or dividing by a negative.",
         "nudge": {
          "zh": "數字非常接近，先重點檢查「移項變號」和「除以負數」的正負號有沒有弄反！",
          "en": "Your magnitude is spot on—double-check the plus/minus sign when transposing or dividing by a negative!"
         }
        },
        {
         "opt": "B",
         "zh": "$2$ 是另一個未知數 $b$ 的值！你其實解對了聯立方程，只是答了 $b$ 而不是題目要求的 $a=3$。",
         "en": "$2$ is the value of the other unknown $b$! Your solving worked, but the question asks for $a=3$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $a$ 還是 $b$。",
          "en": "You actually found the other unknown! Check whether the question asks for $a$ or $b$."
         }
        },
        {
         "opt": "D",
         "zh": "得出 $7$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $a=3$。",
         "en": "Getting $7$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $a=3$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $b$ 一次直出 $a$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $b$ directly for $a$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $a=3,\\ b=2$ 代回原方程：$(1)$ 得 $5(3)+6(2)=27$，$(2)$ 得 $17(3)-12(2)=27$；最後確認所求量為 $3$（選項 C）。",
         "en": "Put $a=3,\\ b=2$ into both equations: $(1)$ gives $5(3)+6(2)=27$ and $(2)$ gives $17(3)-12(2)=27$, confirming $3$ (option C)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $5a+6b=27$ 與 $17a-12b=27$，再按計數機聯立方程程式依次輸入兩組係數 $(5,\\ 6,\\ 27)$ 及 $(17,\\ -12,\\ 27)$，即可直接核對 $a=3,\\ b=2$！",
         "en": "Arrange both equations into standard form $5a+6b=27$ and $17a-12b=27$, then enter $(5,\\ 6,\\ 27)$ and $(17,\\ -12,\\ 27)$ into your simultaneous-equations program to verify $a=3,\\ b=2$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $b$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $b$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "x + 1 = y - 3 = 5x + y - 38\n\\Rightarrow x-y=-4 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} -x=-7 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $x$、$y$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $x$, $y$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 直式相加消去 $x$，求出 $y$",
          "en": "Step 2 · Add vertically to eliminate $x$ and find $y$"
         },
         "math": "(1) + (2):\n-y=-11\n\\hlg{y=11}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $x$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $x$)"
          },
          "rows": [
           {
            "tag": "(1)",
            "cols": [
             "\\xc{x}",
             "-y",
             "=",
             "-4"
            ]
           },
           {
            "op": "+",
            "tag": "(2)",
            "cols": [
             "\\xc{-x}",
             "",
             "=",
             "-7"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{-y}",
            "=",
            "\\hlg{-11}"
           ]
          }
         },
         "zh": "計算 $(1) + (2)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。解得 $y=11$。",
         "en": "Compute $(1) + (2)$: the $x$-terms cancel, leaving an equation in $y$ alone. Solving gives $y=11$."
        },
        {
         "title": {
          "zh": "第 3 步 · 核對所求量並配對選項",
          "en": "Step 3 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{y=11}",
         "zh": "題目所求為 $y=11$，對應選項 C。",
         "en": "The requested value is $y=11$, which matches option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$7$ 是另一個未知數 $x$ 的值！你其實解對了聯立方程，只是答了 $x$ 而不是題目要求的 $y=11$。",
         "en": "$7$ is the value of the other unknown $x$! Your solving worked, but the question asks for $y=11$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $y$ 還是 $x$。",
          "en": "You actually found the other unknown! Check whether the question asks for $y$ or $x$."
         }
        },
        {
         "opt": "B",
         "zh": "得出 $9$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $y=11$。",
         "en": "Getting $9$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $y=11$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "D",
         "zh": "得出 $13$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $y=11$。",
         "en": "Getting $13$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $y=11$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $x$ 一次直出 $y$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $x$ directly for $y$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=7,\\ y=11$ 代回原方程：$(1)$ 得 $7-(11)=-4$，$(2)$ 得 $-(7)=-7$；最後確認所求量為 $11$（選項 C）。",
         "en": "Put $x=7,\\ y=11$ into both equations: $(1)$ gives $7-(11)=-4$ and $(2)$ gives $-(7)=-7$, confirming $11$ (option C)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $x-y=-4$ 與 $-x=-7$，再按計數機聯立方程程式依次輸入兩組係數 $(1,\\ -1,\\ -4)$ 及 $(-1,\\ 0,\\ -7)$，即可直接核對 $x=7,\\ y=11$！",
         "en": "Arrange both equations into standard form $x-y=-4$ and $-x=-7$, then enter $(1,\\ -1,\\ -4)$ and $(-1,\\ 0,\\ -7)$ into your simultaneous-equations program to verify $x=7,\\ y=11$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $x$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $x$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "a - 4 = b - 10 = a - 5b + 11\n\\Rightarrow a-b=-6 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} -a+6b=21 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $a$、$b$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $a$, $b$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $b$ 的係數",
          "en": "Step 2 · Scale equations to match $b$"
         },
         "math": "(1)\\times \\hlw{6}:\n6a-6b=\\hlw{-36} \\quad \\cdots (3)",
         "zh": "要消去 $b$，先把$(1)$ 整條同乘 $6$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $b$, multiply all of $(1)$ by $6$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $b$，求出 $a$",
          "en": "Step 3 · Add vertically to eliminate $b$ and find $a$"
         },
         "math": "(3) + (2):\n5a=-15\n\\hlg{a=-3}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $b$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $b$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "6a",
             "-\\xc{6b}",
             "=",
             "-36"
            ]
           },
           {
            "op": "+",
            "tag": "(2)",
            "cols": [
             "-a",
             "+\\xc{6b}",
             "=",
             "21"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{5a}",
            "",
            "=",
            "\\hlg{-15}"
           ]
          }
         },
         "zh": "計算 $(3) + (2)$：$b$ 項剛好抵消，只剩 $a$ 的一元一次方程。解得 $a=-3$。",
         "en": "Compute $(3) + (2)$: the $b$-terms cancel, leaving an equation in $a$ alone. Solving gives $a=-3$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{a=-3}",
         "zh": "題目所求為 $a=-3$，對應選項 A。",
         "en": "The requested value is $a=-3$, which matches option A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "得出 $-1$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $a=-3$。",
         "en": "Getting $-1$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $a=-3$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "C",
         "zh": "得出 $1$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $a=-3$。",
         "en": "Getting $1$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $a=-3$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "D",
         "zh": "$3$ 是另一個未知數 $b$ 的值！你其實解對了聯立方程，只是答了 $b$ 而不是題目要求的 $a=-3$。",
         "en": "$3$ is the value of the other unknown $b$! Your solving worked, but the question asks for $a=-3$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $a$ 還是 $b$。",
          "en": "You actually found the other unknown! Check whether the question asks for $a$ or $b$."
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $b$ 一次直出 $a$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $b$ directly for $a$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $a=-3,\\ b=3$ 代回原方程：$(1)$ 得 $(-3)-(3)=-6$，$(2)$ 得 $-(-3)+6(3)=21$；最後確認所求量為 $-3$（選項 A）。",
         "en": "Put $a=-3,\\ b=3$ into both equations: $(1)$ gives $(-3)-(3)=-6$ and $(2)$ gives $-(-3)+6(3)=21$, confirming $-3$ (option A)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $a-b=-6$ 與 $-a+6b=21$，再按計數機聯立方程程式依次輸入兩組係數 $(1,\\ -1,\\ -6)$ 及 $(-1,\\ 6,\\ 21)$，即可直接核對 $a=-3,\\ b=3$！",
         "en": "Arrange both equations into standard form $a-b=-6$ and $-a+6b=21$, then enter $(1,\\ -1,\\ -6)$ and $(-1,\\ 6,\\ 21)$ into your simultaneous-equations program to verify $a=-3,\\ b=3$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $b$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $b$ directly?"
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
       "concepts": [
        "ws02-c1",
        "ws02-c4"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 拆開連等式，整理成標準形式",
          "en": "Step 1 · Split the chain equality into standard form"
         },
         "math": "13 - 2p = q + 9 = 3q - 2p - 5\n\\Rightarrow -2p-q=-4 \\quad \\cdots (1)\n\\phantom{\\Rightarrow} p-q=-7 \\quad \\cdots (2)",
         "zh": "把連等式拆成兩條方程，並將 $p$、$q$ 移去左邊、常數移去右邊，整理成對齊的 $(1)$ 與 $(2)$。",
         "en": "Split the chain equality into two equations and collect $p$, $q$ on the left and constants on the right as $(1)$ and $(2)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 直式相減消去 $q$，求出 $p$",
          "en": "Step 2 · Subtract vertically to eliminate $q$ and find $p$"
         },
         "math": "(2) - (1):\n3p=-3\n\\hlg{p=-1}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $q$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $q$)"
          },
          "rows": [
           {
            "tag": "(2)",
            "cols": [
             "p",
             "-\\xc{q}",
             "=",
             "-7"
            ]
           },
           {
            "op": "-",
            "tag": "(1)",
            "cols": [
             "-2p",
             "-\\xc{q}",
             "=",
             "-4"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{3p}",
            "",
            "=",
            "\\hlg{-3}"
           ]
          }
         },
         "zh": "計算 $(2) - (1)$：$q$ 項剛好抵消，只剩 $p$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $p=-1$。",
         "en": "Compute $(2) - (1)$: the $q$-terms cancel, leaving an equation in $p$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $p=-1$."
        },
        {
         "title": {
          "zh": "第 3 步 · 核對所求量並配對選項",
          "en": "Step 3 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{p=-1}",
         "zh": "題目所求為 $p=-1$，對應選項 C。",
         "en": "The requested value is $p=-1$, which matches option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "得出 $-8$ 通常是因為消元放大時漏乘常數項，或兩式相減時出現符號偏差；按直式對齊核對後正確答案是 $p=-1$。",
         "en": "Getting $-8$ usually comes from forgetting to scale the constant or a subtraction sign slip; column-aligned elimination gives $p=-1$.",
         "nudge": {
          "zh": "檢查一下：放大方程時等號右邊有一起乘嗎？兩式相減時有沒有遇到「減負數」忘了變加？",
          "en": "Check whether you scaled the right-hand constant and handled every minus sign when subtracting!"
         }
        },
        {
         "opt": "B",
         "zh": "這個值剛好是 $-q=-6$：同時把未知數看錯了，而且正負號顛倒；正確答案為 $p=-1$。",
         "en": "This equals $-q=-6$—both the wrong unknown and the opposite sign; the target is $p=-1$.",
         "nudge": {
          "zh": "先確認自己消去的是不是不需要的未知數，再核對每一步的正負號。",
          "en": "First confirm you eliminated the unwanted unknown, then recheck every plus/minus sign."
         }
        },
        {
         "opt": "D",
         "zh": "$6$ 是另一個未知數 $q$ 的值！你其實解對了聯立方程，只是答了 $q$ 而不是題目要求的 $p=-1$。",
         "en": "$6$ is the value of the other unknown $q$! Your solving worked, but the question asks for $p=-1$.",
         "nudge": {
          "zh": "你其實已經算到另一個未知數了！再看清楚題目最後要求的是 $p$ 還是 $q$。",
          "en": "You actually found the other unknown! Check whether the question asks for $p$ or $q$."
         }
        }
       ],
       "tip": {
        "zh": "卷二連等式固定套路：先拆成兩條標準方程，再瞄準消去 $q$ 一次直出 $p$，最省時間！",
        "en": "Paper 2 chain-equality routine: split into two standard equations, then eliminate $q$ directly for $p$!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $p=-1,\\ q=6$ 代回原方程：$(1)$ 得 $-2(-1)-(6)=-4$，$(2)$ 得 $(-1)-(6)=-7$；最後確認所求量為 $-1$（選項 C）。",
         "en": "Put $p=-1,\\ q=6$ into both equations: $(1)$ gives $-2(-1)-(6)=-4$ and $(2)$ gives $(-1)-(6)=-7$, confirming $-1$ (option C)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $-2p-q=-4$ 與 $p-q=-7$，再按計數機聯立方程程式依次輸入兩組係數 $(-2,\\ -1,\\ -4)$ 及 $(1,\\ -1,\\ -7)$，即可直接核對 $p=-1,\\ q=6$！",
         "en": "Arrange both equations into standard form $-2p-q=-4$ and $p-q=-7$, then enter $(-2,\\ -1,\\ -4)$ and $(1,\\ -1,\\ -7)$ into your simultaneous-equations program to verify $p=-1,\\ q=6$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能先把連等式整理成標準式，再決定乘哪個數來直接消去 $q$ 嗎？",
        "en": "With the steps hidden, can you split the chain equality and choose the multiplier to cancel $q$ directly?"
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
      "zh": "逐句把英文購物／計分條件翻譯成兩條方程，解完再對回問題最後一句。",
      "en": "Translate each English pricing or scoring clue into an equation, then match the final question."
     },
     "body": {
      "zh": "讀應用題分三步：① 設 $x$、$y$ 並寫明單位（究竟代表「單價」還是「數量」）；② 把兩句條件各自翻譯成一條方程；③ 解完後重讀最後一句，看題目問 $x$、$y$、總和還是差。\n例如設 $x$ 元為梨的單價、$y$ 元為芒果的單價，第一組購買條件給出 $(1)$：{{math:0}}\n第二組購買條件給出 $(2)$，兩條聯立即可求解：{{math:1}}",
      "en": "Tackle word problems in three steps: (1) define $x$ and $y$ with units (price or quantity?); (2) translate each sentence into one equation; (3) re-read the final question to see whether it asks for $x$, $y$, a total or a difference.\nLet \\$x and \\$y be the prices of a pear and a mango. The first purchase gives $(1)$:{{math:0}}\nThe second purchase gives $(2)$, forming a pair you can solve:{{math:1}}"
     },
     "math": [
      "2\\hl{x}+3\\hl{y}=33 \\quad \\cdots (1)",
      "4\\hl{x}+7\\hl{y}=73 \\quad \\cdots (2)"
     ],
     "translate": {
      "caption": {
       "zh": "逐句翻譯示範：單價 × 數量 ＝ 總價",
       "en": "Sentence-to-equation map: unit price × quantity = total cost"
      },
      "rows": [
       {
        "clue": {
         "en": "Price of 2 pears and 3 mangoes is \\$33",
         "zh": "2 個梨與 3 個芒果共 33 元"
        },
        "math": "2x+3y=33"
       },
       {
        "clue": {
         "en": "Price of 4 pears and 7 mangoes is \\$73",
         "zh": "4 個梨與 7 個芒果共 73 元"
        },
        "math": "4x+7y=73"
       },
       {
        "clue": {
         "en": "Price of 3 highlighters = price of 4 pens",
         "zh": "3 枝螢光筆與 4 枝原子筆同價"
        },
        "math": "3x=4y"
       }
      ]
     },
     "warn": {
      "zh": "「兩個梨」不代表 $x=2$。若 $x$ 是每個梨的單價，兩個梨的總價是 $2x$；相反，若題目已給單價 $3$ 元而未知數量，則總價才是 $3x$。",
      "en": "“Two pears” does not mean $x=2$. If $x$ is the unit price, two pears cost $2x$. If the unit price is given as \\$3 and $x$ is the quantity, the cost is $3x$."
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
      "zh": "分清「原有數量」與「變動後數量」，轉移時必有一減一加。",
      "en": "Separate original amounts from updated amounts; a transfer subtracts from one and adds to the other."
     },
     "body": {
      "zh": "凡是出現「原本…後來給了／離開了…」的題目，一律設 $x$、$y$ 為改變前（原有）的數量。\n「Alan 是 Benny 的 $3$ 倍」描述原來的情況：{{math:0}}\nAlan 給 Benny $12$ 枚後，Alan 少了 $12$ 枚、同時 Benny 多了 $12$ 枚，兩者相等：{{math:1}}\n留意：物品只在二人之間轉移，總數 $(x-12)+(y+12)$ 仍然等於 $x+y$。{{math:2}}",
      "en": "Whenever a problem compares before and after, always define $x$ and $y$ as the original quantities.\n“Alan has three times as many as Benny” describes the original state:{{math:0}}\nAfter Alan gives Benny $12$ stamps, Alan loses $12$ while Benny gains $12$, making them equal:{{math:1}}\nNotice that transferring between two people keeps the total unchanged:{{math:2}}"
     },
     "math": [
      "x=3y \\quad \\cdots (1)",
      "x\\hlw{-12}=y\\hlw{+12} \\quad \\cdots (2)",
      "(x-12)+(y+12)=x+y"
     ],
     "translate": {
      "caption": {
       "zh": "變動情境對照：看清誰減少、誰增加",
       "en": "Change-of-quantity map: track who loses and who gains"
      },
      "rows": [
       {
        "clue": {
         "en": "Alan gives 12 stamps to Benny → same",
         "zh": "Alan 給 Benny 12 枚後相同（兩人互相轉移）"
        },
        "math": "x\\hlw{-12}=y\\hlw{+12}"
       },
       {
        "clue": {
         "en": "Amy buys 12 new books → same",
         "zh": "Amy 從書店新買 12 本後相同（只加 Amy 一方）"
        },
        "math": "x\\hlw{+12}=y"
       },
       {
        "clue": {
         "en": "10 boys and 2 girls leave → same",
         "zh": "10 名男生與 2 名女生離開後相同（各自減去）"
        },
        "math": "x-10=y-2"
       }
      ]
     },
     "warn": {
      "zh": "二人轉移物品時，接收的一方一定會加（漏寫 $+12$ 會令答案差一半）；若只是從外買入或離開課室，則只有相關一方增減。",
      "en": "In a transfer between two people, the receiver gains the items (forgetting $+12$ halves the difference). Buying from outside or leaving a room only changes the person involved."
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
       "zh": "甲失去 $5$ 枚變成 $x-5$，乙得到 $5$ 枚變成 $y+5$，所以是 $x-5=y+5$。",
       "en": "A loses $5$ to become $x-5$ and B gains $5$ to become $y+5$, so $x-5=y+5$."
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
      "zh": "認出「than / 比」後面那個量就是基準，把百分數與比準確寫成方程。",
      "en": "Spot the reference quantity after “than”, and turn percentages or ratios into clean equations."
     },
     "body": {
      "zh": "英文寫「$x$ is $20\\%$ more than $y$」時，緊跟在 than 後面的 $y$ 就是基準 $100\\%$，所以 $x$ 等於 $y$ 的 $(1+20\\%)=1.2$ 倍：{{math:0}}\n若是「$25\\%$ fewer / less than $y$」，則是留下 $(1-25\\%)=0.75$ 倍：{{math:1}}\n遇到比 $x:y=8:7$，交叉相乘立即得到沒有分數的整數方程：{{math:2}}",
      "en": "In “$x$ is $20\\%$ more than $y$”, the quantity right after “than” ($y$) is the $100\\%$ reference, so $x$ is $(1+20\\%)=1.2$ times $y$:{{math:0}}\nFor “$25\\%$ fewer/less than $y$”, keep $(1-25\\%)=0.75$ of $y$:{{math:1}}\nFor a ratio $x:y=8:7$, cross-multiplying turns it into a clean integer equation:{{math:2}}"
     },
     "math": [
      "x=(1+20\\%)y=\\hl{1.2y}",
      "x=(1-25\\%)y=\\hl{0.75y}",
      "\\frac{x}{y}=\\frac{8}{7} \\Rightarrow \\hl{7x=8y}"
     ],
     "translate": {
      "caption": {
       "zh": "百分比與比常用句式速查",
       "en": "Quick translation guide for percentages and ratios"
      },
      "rows": [
       {
        "clue": {
         "en": "x is 80% more than y",
         "zh": "x 比 y 多 80%（以 y 為基準）"
        },
        "math": "x=\\hl{1.8y}"
       },
       {
        "clue": {
         "en": "x is 25% less than y",
         "zh": "x 比 y 少 25%（以 y 為基準）"
        },
        "math": "x=\\hl{0.75y}"
       },
       {
        "clue": {
         "en": "ratio of x to y is 8 : 7",
         "zh": "x 與 y 之比是 8 : 7（內項積＝外項積）"
        },
        "math": "7x=8y"
       }
      ]
     },
     "warn": {
      "zh": "不要把「多 $80\\%$」寫成 $0.8y$（漏了原有的 $100\\%$）或 $y+80$（把百分數當成實數）。另外，$x$ 比 $y$ 多 $20\\%$，不等於 $y$ 比 $x$ 少 $20\\%$。",
      "en": "Never write “$80\\%$ more” as $0.8y$ (missing the original $100\\%$) or $y+80$. Also “$x$ is $20\\%$ more than $y$” does not mean “$y$ is $20\\%$ less than $x$”."
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
       "zh": "比基準多（乘 $1+r\\%$）"
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
      "zh": "先把分鐘與小時統一，再用「總時間」與「總路程」列出兩條方程。",
      "en": "Unify minutes and hours first, then write one time equation and one distance equation."
     },
     "body": {
      "zh": "DSE 路程題最常見的陷阱是速率用 $\\text{km/h}$，時間卻給分鐘！只要先統一單位，公式就只剩一條：路程＝速率 × 時間。\n若設 $x$、$y$ 為兩段所用的分鐘，就把每段時速除以 $60$ 換成分鐘速率（或把分鐘寫成 $\\frac{x}{60}$ 小時）：{{math:0}}\n接著用「總時間」列 $(1)$、用「總路程」列 $(2)$，再消去小數／分母求解：{{math:1}}",
      "en": "The classic trap in journey problems is mixing $\\text{km/h}$ with minutes. Once units match, you only need one formula: distance = speed × time.\nIf $x$ and $y$ are the minutes for the two legs, divide each hourly speed by $60$ (or write time as $\\frac{x}{60}$ hours):{{math:0}}\nThen form $(1)$ from total time and $(2)$ from total distance, and clear decimals/fractions to solve:{{math:1}}"
     },
     "math": [
      "\\frac{66}{\\hlw{60}}=1.1,\\quad \\frac{84}{\\hlw{60}}=1.4",
      "x+y=85 \\quad \\cdots (1)\n1.1x+1.4y=104 \\quad \\cdots (2)"
     ],
     "translate": {
      "caption": {
       "zh": "路程題兩條固定方程：時間 ＋ 路程",
       "en": "The two standard journey equations: time + distance"
      },
      "rows": [
       {
        "clue": {
         "en": "Total time is 85 minutes",
         "zh": "全程共花 85 分鐘"
        },
        "math": "x+y=85"
       },
       {
        "clue": {
         "en": "66 km/h for x min + 84 km/h for y min = 104 km",
         "zh": "兩段路程相加等於 104 公里（先除以 60 轉小時）"
        },
        "math": "66\\cdot\\frac{x}{\\hlw{60}}+84\\cdot\\frac{y}{\\hlw{60}}=104"
       }
      ]
     },
     "warn": {
      "zh": "千萬不要直接用「$66x+84y=104$」把每小時速率乘以分鐘！一定要先除以 $60$ 統一單位；解出答案後再核對題目問的是哪一段。",
      "en": "Never write $66x+84y=104$ by multiplying km/h directly by minutes. Always divide by $60$ first, and check which leg the final question asks for."
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
       "zh": "先把 $30$ 分鐘換成 $\\frac{30}{60}=0.5$ 小時，路程 $=60\\times 0.5=30$ 公里。",
       "en": "Convert $30$ minutes to $\\frac{30}{60}=0.5$ hours, so distance $=60\\times 0.5=30$ km."
      }
     },
     "vocab": [
      {
       "en": "average speed",
       "zh": "平均速率"
      },
      {
       "en": "distance",
       "zh": "路程（速率 × 時間）"
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
      "concepts": [
       "ws02-c2",
       "ws02-c6"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=2y \\quad \\cdots (1)\n5(x-6)=y+6 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "Henry is $2$ times Winka",
            "zh": "Henry 原有數量是 Winka 的 $2$ 倍"
           },
           "math": "x=\\hl{2y}"
          },
          {
           "clue": {
            "en": "Henry gives $6$ to Winka → Winka is $5$ times Henry",
            "zh": "Henry 變 $x-6$、Winka 變 $y+6$；Winka 是 Henry 的 $5$ 倍"
           },
           "math": "y+6=5(\\hlw{x-6})"
          }
         ]
        },
        "zh": "設 Henry 原有 $x$ 條朱古力，Winka 原有 $y$ 條朱古力。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of chocolate bars owned by Henry and Winka respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "Henry 給 Winka $6$ 條後，「Winka 是 Henry 的 $5$ 倍」，哪條方程正確？",
          "en": "After Henry gives $6$ bars to Winka, Winka has $5$ times Henry. Which equation is right?"
         },
         "options": [
          {
           "math": "y+6=5(x-6)"
          },
          {
           "math": "5(y+6)=x-6",
           "hint": {
            "zh": "現在較多的是 Winka（$y+6$），所以要把較少的 Henry（$x-6$）乘以 $5$。",
            "en": "Winka ($y+6$) now has more, so multiply Henry's $(x-6)$ by $5$."
           }
          },
          {
           "math": "y+6=5x-6",
           "hint": {
            "zh": "記得加括號！$5$ 要乘整個 $(x-6)$，即 $5x-30$。",
            "en": "Use brackets! $5$ multiplies the whole $(x-6)$, giving $5x-30$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "y+6=5(\\hl{2y}-6)\ny+6=\\hlw{10y-30}\n6+30=10y-y\n36=9y\n\\hlg{y=4}",
        "zh": "把 $(1)$ 的 $x=2y$ 代入 $(2)$，將 $5$ 乘進括號內兩項得 $10y-30$，移項解得 $9y=36 \\Rightarrow y=4$。",
        "en": "Substitute $x=2y$ into $(2)$, expand $5(2y-6)=10y-30$, then transpose to get $9y=36 \\Rightarrow y=4$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=2(\\hl{4})\n\\hlg{x=8}",
        "zh": "把剛算出的 $y=4$ 代回 (1)，直接算出 $x=8$。",
        "en": "Put $y=4$ back into (1) to find $x=8$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求二人共有朱古力總數（$x+y$））",
         "en": "Step 4 · Answer the final question (Find the total number of chocolate bars ($x+y$))"
        },
        "math": "x+y=8+4=12\n\\therefore \\hlg{x+y=12}",
        "zh": "核對題目最後一句要求的是「求二人共有朱古力總數（$x+y$）」，因此最終答案是 $12$ 條。",
        "en": "Check the final sentence (Find the total number of chocolate bars ($x+y$)): the required answer is $12$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "展開 $5(2y-6)$ 時漏乘 $-6$",
        "labelEn": "Forgetting to multiply $-6$ by $5$",
        "zh": "$5(2y-6)=10y-30$，不可寫成 $10y-6$。",
        "en": "$5(2y-6)=10y-30$, never $10y-6$."
       },
       {
        "label": "只答了 $y=4$ 或 $x=8$，忘了求總數",
        "labelEn": "Forgetting to add $x+y=12$",
        "zh": "題目最後問「total number」，須寫出 $x+y=8+4=12$。",
        "en": "Finish by finding the total: $x+y=8+4=12$."
       }
      ],
      "tip": {
       "zh": "轉移題三問自己：① 誰減誰加？② 倍數乘在較少那一方嗎？③ 加括號了嗎？",
       "en": "Three checks for transfer problems: who loses/gains, multiply the smaller side, and keep brackets."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=8,\\ y=4$ 代回原來的兩條方程：$(1)$ 得 $8-2(4)=0$，$(2)$ 得 $5(8)-(4)=36$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=8,\\ y=4$ into both originals: $(1)$ gives $8-2(4)=0$ and $(2)$ gives $5(8)-(4)=36$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=8,\\ y=4$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=8,\\ y=4$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能獨立列出 $y+6=5(x-6)$ 並完整解出總數 $12$ 嗎？",
       "en": "With the steps hidden, can you write $y+6=5(x-6)$ and solve for the total $12$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c6"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=3y \\quad \\cdots (1)\nx-10=\\frac{y+10}{2} \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "boy is $3$ times girl",
            "zh": "男孩原有數量是女孩的 $3$ 倍"
           },
           "math": "x=\\hl{3y}"
          },
          {
           "clue": {
            "en": "boy gives $10$ to girl → boy is half of girl",
            "zh": "男孩變 $x-10$、女孩變 $y+10$；男孩是女孩的一半"
           },
           "math": "x-10=\\frac{y+10}{2}"
          }
         ]
        },
        "zh": "設男孩原有 $x$ 個鎖匙扣，女孩原有 $y$ 個鎖匙扣。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of keychains owned by the boy and the girl respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "2(x-10)=y+10\n2(\\hl{3y}-10)=y+10\n\\hlw{6y-20}=y+10\n6y-y=10+20\n5y=30\n\\hlg{y=6}",
        "zh": "先把 $(2)$ 兩邊同乘 $2$ 清去分母得 $2(x-10)=y+10$，再代入 $x=3y$ 展開並移項，解得 $y=6$。",
        "en": "Multiply $(2)$ by $2$ to clear the fraction ($2(x-10)=y+10$), substitute $x=3y$, expand and solve to get $y=6$.",
        "marking": "(1M)",
        "think": {
         "prompt": {
          "zh": "看見分數方程 $x-10=\\frac{y+10}{2}$，怎樣立刻消去分母 $2$？",
          "en": "How do we clear the denominator $2$ in $x-10=\\frac{y+10}{2}$ right away?"
         },
         "options": [
          {
           "zh": "兩邊同乘 $2$，得 $2(x-10)=y+10$",
           "en": "Multiply both sides by $2$ to get $2(x-10)=y+10$"
          },
          {
           "zh": "只把左邊乘 $2$，寫成 $2x-10=y+10$",
           "en": "Multiply only $x$ by $2$: $2x-10=y+10$",
           "hint": {
            "zh": "左邊整個 $(x-10)$ 都要乘 $2$，包括 $-10$，變成 $2x-20$！",
            "en": "Every term on the left must be multiplied by $2$: $2(x-10)=2x-20$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=3(\\hl{6})\n\\hlg{x=18}",
        "zh": "把剛算出的 $y=6$ 代回 (1)，直接算出 $x=18$。",
        "en": "Put $y=6$ back into (1) to find $x=18$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求二人共有鎖匙扣總數（$x+y$））",
         "en": "Step 4 · Answer the final question (Find the total number of keychains ($x+y$))"
        },
        "math": "x+y=18+6=24\n\\therefore \\hlg{x+y=24}",
        "zh": "核對題目最後一句要求的是「求二人共有鎖匙扣總數（$x+y$）」，因此最終答案是 $24$ 個。",
        "en": "Check the final sentence (Find the total number of keychains ($x+y$)): the required answer is $24$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "清去分母 $2$ 時漏乘 $-10$",
        "labelEn": "Forgetting to multiply $-10$ by $2$",
        "zh": "「男孩是女孩一半」即 $2(x-10)=y+10 \\Rightarrow 2x-20=y+10$，切勿寫成 $2x-10$。",
        "en": "Multiplying $x-10$ by $2$ gives $2x-20=y+10$, not $2x-10$."
       },
       {
        "label": "忘了把 $x=18$ 與 $y=6$ 相加求總數",
        "labelEn": "Forgetting to sum $x+y=24$",
        "zh": "最後一步要加起來：$x+y=18+6=24$。",
        "en": "Finish by summing both: $x+y=18+6=24$."
       }
      ],
      "tip": {
       "zh": "「A 是 B 的一半」直接寫成「$2A=B$」就能零分數開局，省掉處理分母的煩惱！",
       "en": "“A is half of B” is identical to $2A=B$—writing it that way avoids fractions from the start!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=18,\\ y=6$ 代回原來的兩條方程：$(1)$ 得 $18-3(6)=0$，$(2)$ 得 $2(18)-(6)=30$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=18,\\ y=6$ into both originals: $(1)$ gives $18-3(6)=0$ and $(2)$ gives $2(18)-(6)=30$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=18,\\ y=6$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=18,\\ y=6$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能把「男孩是女孩的一半」直接寫成 $2(x-10)=y+10$ 再解出總數嗎？",
       "en": "With the steps hidden, can you write $2(x-10)=y+10$ and solve for the total?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c7"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "y=1.8x \\quad \\cdots (1)\nx=1.8(y-56) \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "male is $80\\%$ more than female",
            "zh": "原有：男比女多 $80\\%$（以女 $x$ 為基準）"
           },
           "math": "y=\\hl{1.8x}"
          },
          {
           "clue": {
            "en": "$56$ males get off → female is $80\\%$ more than male",
            "zh": "56 名男下車後，女比男多 $80\\%$（基準換成剩餘男數 $y-56$）"
           },
           "math": "x=1.8(\\hlw{y-56})"
          }
         ]
        },
        "zh": "設巴士上原有女乘客 $x$ 人，男乘客 $y$ 人。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of female and male passengers on the bus respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "「男乘客（$y$）比女乘客（$x$）多 $80\\%$」應寫成哪條方程？",
          "en": "“Male ($y$) is $80\\%$ more than female ($x$)” gives which equation?"
         },
         "options": [
          {
           "math": "y=1.8x"
          },
          {
           "math": "y=0.8x",
           "hint": {
            "zh": "「多 $80\\%$」要在原本的 $100\\%$ 上加 $80\\%$，等於 $180\\%$ 即 $1.8x$！",
            "en": "“$80\\%$ more” adds $80\\%$ to $100\\%$, giving $180\\%$ ($1.8x$)!"
           }
          },
          {
           "math": "x=1.8y",
           "hint": {
            "zh": "男比女多，所以男 $y$ 較大，是 $y=1.8x$。",
            "en": "Males outnumber females, so $y=1.8x$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $x$",
         "en": "Step 2 · Substitute the whole block and solve for $x$"
        },
        "math": "x=1.8(\\hl{1.8x}-56)\nx=\\hlw{3.24x-100.8}\n100.8=3.24x-x\n2.24x=100.8\n\\hlg{x=45}",
        "zh": "把 $(1)$ 的 $y=1.8x$ 代入 $(2)$，將 $1.8$ 乘進括號兩項得 $3.24x-100.8$，移項合併得 $2.24x=100.8 \\Rightarrow x=45$。",
        "en": "Substitute $y=1.8x$ into $(2)$, expand $1.8(1.8x-56)=3.24x-100.8$, then collect like terms to get $2.24x=100.8 \\Rightarrow x=45$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 回應題目最後一句（求巴士上女乘客人數（$x$））",
         "en": "Step 3 · Answer the final question (Find the number of female passengers ($x$))"
        },
        "math": "\\therefore \\hlg{x=45}",
        "zh": "核對題目最後一句要求的是「求巴士上女乘客人數（$x$）」，因此最終答案是 $45$ 人。",
        "en": "Check the final sentence (Find the number of female passengers ($x$)): the required answer is $45$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把「多 $80\\%$」誤寫成 $0.8$ 倍",
        "labelEn": "Using $0.8$ instead of $1.8$",
        "zh": "$80\\%$ more than 必須寫成 $1+0.8=1.8$ 倍。",
        "en": "“$80\\%$ more than” is $1+0.8=1.8$, never $0.8$."
       },
       {
        "label": "展開 $x=1.8(1.8x-56)$ 時忘記保留括號",
        "labelEn": "Forgetting brackets when substituting $y=1.8x$",
        "zh": "$1.8\\times 1.8=3.24$ 及 $1.8\\times 56=100.8$，故 $x=3.24x-100.8 \\Rightarrow 2.24x=100.8$。",
        "en": "$1.8(1.8x-56)=3.24x-100.8$, giving $2.24x=100.8$ and $x=45$."
       }
      ],
      "tip": {
       "zh": "這道例題是 DSE 經典雙百分比題型：兩次「more than」的基準剛好對調，套括號一次代入即直出答案。",
       "en": "Classic swapped-reference DSE example: substitute $(1)$ straight into $(2)$ with brackets to find $x$ directly."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=45,\\ y=81$ 代回原來的兩條方程：$(1)$ 得 $-1.8(45)+81=0$，$(2)$ 得 $45-1.8(81)=-100.8$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=45,\\ y=81$ into both originals: $(1)$ gives $-1.8(45)+81=0$ and $(2)$ gives $45-1.8(81)=-100.8$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=45,\\ y=81$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=45,\\ y=81$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能獨立展開 $x=1.8(1.8x-56)$ 並算出女乘客 $x=45$ 嗎？",
       "en": "With the steps hidden, can you expand $x=1.8(1.8x-56)$ and solve for $x=45$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c7"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=1.4y \\quad \\cdots (1)\ny+480=1.4x \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "female is $40\\%$ more than male",
            "zh": "原有：女比男多 $40\\%$（基準為男 $y$）"
           },
           "math": "x=\\hl{1.4y}"
          },
          {
           "clue": {
            "en": "$480$ more males enter → male is $40\\%$ more than female",
            "zh": "加 $480$ 名男後，男比女多 $40\\%$（基準為女 $x$）"
           },
           "math": "y\\hlw{+480}=1.4x"
          }
         ]
        },
        "zh": "設音樂廳內原有女觀眾 $x$ 人，男觀眾 $y$ 人。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of female and male audiences respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "「$480$ 名男觀眾進入後，男觀眾比女觀眾多 $40\\%$」，應列哪條方程？",
          "en": "After $480$ male audiences enter, males are $40\\%$ more than females. Which equation is right?"
         },
         "options": [
          {
           "math": "y+480=1.4x"
          },
          {
           "math": "x+480=1.4y",
           "hint": {
            "zh": "新進入的是男觀眾（$y$），而且之後是男比女多，所以左邊是 $y+480$！",
            "en": "The $480$ new people are male ($y$), and males now outnumber females, so $y+480=1.4x$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "y+480=1.4(\\hl{1.4y})\ny+480=\\hlw{1.96y}\n480=1.96y-y\n0.96y=480\n\\hlg{y=500}",
        "zh": "把 $(1)$ 的 $x=1.4y$ 代入 $(2)$，算出 $1.4\\times 1.4=1.96$，移項合併得 $0.96y=480 \\Rightarrow y=500$。",
        "en": "Substitute $x=1.4y$ into $(2)$, compute $1.4(1.4y)=1.96y$, then collect like terms to get $0.96y=480 \\Rightarrow y=500$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=1.4(\\hl{500})\n\\hlg{x=700}",
        "zh": "把剛算出的 $y=500$ 代回 (1)，直接算出 $x=700$。",
        "en": "Put $y=500$ back into (1) to find $x=700$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求音樂廳內女觀眾人數（$x$））",
         "en": "Step 4 · Answer the final question (Find the number of female audiences ($x$))"
        },
        "math": "\\therefore \\hlg{x=700}",
        "zh": "核對題目最後一句要求的是「求音樂廳內女觀眾人數（$x$）」，因此最終答案是 $700$ 人。",
        "en": "Check the final sentence (Find the number of female audiences ($x$)): the required answer is $700$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "求出男觀眾 $y=500$ 後忘了代回求女觀眾 $x$",
        "labelEn": "Stopping at $y=500$ instead of finding $x=700$",
        "zh": "題目最後問女觀眾人數，必須再計 $x=1.4(500)=700$。",
        "en": "Remember the final question asks for female audiences: $x=1.4(500)=700$."
       },
       {
        "label": "把 $1.4\\times 1.4$ 錯算成 $2.8$",
        "labelEn": "Computing $1.4\\times 1.4$ as $2.8$",
        "zh": "$1.4\\times 1.4=1.96$（不是加起來的 $2.8$），所以 $1.96y-y=0.96y=480$。",
        "en": "$1.4\\times 1.4=1.96$ (not $2.8$), giving $0.96y=480$ and $y=500$."
       }
      ],
      "tip": {
       "zh": "跟例題 2 完全同結構：把 $x=1.4y$ 代入 $y+480=1.4x$，注意 $1.4\\times 1.4=1.96$，最後代回求女觀眾 $x$。",
       "en": "Same structure as Example 2: substitute $x=1.4y$, compute $1.4\\times 1.4=1.96$, and substitute back for $x$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=700,\\ y=500$ 代回原來的兩條方程：$(1)$ 得 $700-1.4(500)=0$，$(2)$ 得 $-1.4(700)+500=-480$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=700,\\ y=500$ into both originals: $(1)$ gives $700-1.4(500)=0$ and $(2)$ gives $-1.4(700)+500=-480$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=700,\\ y=500$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=700,\\ y=500$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能獨立寫出兩條方程並完成 $0.96y=480 \\Rightarrow x=700$ 嗎？",
       "en": "With the steps hidden, can you form both equations and solve through to $x=700$?"
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
      "concepts": [
       "ws02-c1",
       "ws02-c2"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=240 \\quad \\cdots (1)\ny=4x \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "The sum of $x$ and $y$ is $240$",
            "zh": "$x$ 與 $y$ 的和是 $240$"
           },
           "math": "x+y=240"
          },
          {
           "clue": {
            "en": "the product of $4$ and $x$ is $y$",
            "zh": "$4$ 與 $x$ 的積是 $y$（即 $y$ 是 $x$ 的 $4$ 倍）"
           },
           "math": "y=\\hl{4x}"
          }
         ]
        },
        "zh": "題目已給出兩個數為 $x$ 和 $y$。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "The two numbers are already named $x$ and $y$. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $x$",
         "en": "Step 2 · Substitute the whole block and solve for $x$"
        },
        "math": "x+(\\hl{4x})=240\n5x=240\n\\hlg{x=48}",
        "zh": "把 (2) 的 $y=4x$ 加上括號代入 (1)，展開並合併同類項，解出 $x=48$。",
        "en": "Substitute $y=4x$ from (2) into (1) with brackets. Expand, then collect like terms to get $x=48$.",
        "marking": "(1M)",
        "think": {
         "prompt": {
          "zh": "這兩條式中，哪一個代入方向最直接、不會出現分數？",
          "en": "Which substitution is the most direct and avoids fractions?"
         },
         "options": [
          {
           "zh": "直接把 $(2)$ 的 $y=4x$ 代入 $(1)$",
           "en": "Substitute $y=4x$ from $(2)$ directly into $(1)$"
          },
          {
           "zh": "把 $(1)$ 改寫成 $x=240-y$ 再代入 $(2)$",
           "en": "Rewrite $(1)$ as $x=240-y$ first",
           "hint": {
            "zh": "雖然可行，但 $(2)$ 已經把 $y$ 單獨寫出來了，直接代入 $(1)$ 只需一步就能求出 $x$！",
            "en": "That works too, but $(2)$ already isolates $y$—substituting it into $(1)$ finds $x$ directly!"
           }
          }
         ],
         "answer": 0,
         "confirm": {
          "zh": "✓ 沒錯！$(2)$ 已經孤立了 $y$，直接代入 $(1)$ 就只剩題目要找的 $x$。",
          "en": "✓ Right! $(2)$ already isolates $y$, so substituting into $(1)$ leaves only $x$."
         }
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 回應題目最後一句（求 $x$）",
         "en": "Step 3 · Answer the final question (Find $x$)"
        },
        "math": "\\therefore \\hlg{x=48}",
        "zh": "核對題目最後一句要求的是「求 $x$」，因此最終答案是 $48$。",
        "en": "Check the final sentence (Find $x$): the required answer is $48$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "誤把「積」當成「加」",
        "labelEn": "Reading “product” as addition",
        "zh": "「the product of $4$ and $x$」指相乘 $4x$，不是 $4+x$。",
        "en": "“The product of $4$ and $x$” means $4x$, not $4+x$."
       },
       {
        "label": "答了 $y=192$ 而非 $x$",
        "labelEn": "Reporting $y=192$ instead of $x$",
        "zh": "題目最後要求 $x$（較小的數 $48$），不是 $y=192$。",
        "en": "The question asks for $x=48$, not $y=192$."
       }
      ],
      "tip": {
       "zh": "看見其中一條方程已經孤立了一個未知數（例如 $y=4x$），直接代入另一條最省步驟。",
       "en": "When one equation already isolates an unknown (like $y=4x$), substitute it directly to save steps."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=48,\\ y=192$ 代回原來的兩條方程：$(1)$ 得 $48+192=240$，$(2)$ 得 $-4(48)+192=0$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=48,\\ y=192$ into both originals: $(1)$ gives $48+192=240$ and $(2)$ gives $-4(48)+192=0$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=48,\\ y=192$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=48,\\ y=192$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能不重排 $(1)$，直接用 $(2)$ 代入算出 $x$ 嗎？",
       "en": "With the steps hidden, can you substitute $(2)$ straight into $(1)$ to find $x$?"
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
      "concepts": [
       "ws02-c1",
       "ws02-c2"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x-y=52 \\quad \\cdots (1)\nx=5y \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "The difference of $x$ and $y$ is $52$",
            "zh": "$x$ 與 $y$ 之差是 $52$（大減小）"
           },
           "math": "x-y=52"
          },
          {
           "clue": {
            "en": "$x$ is $5$ times $y$",
            "zh": "$x$ 是 $y$ 的 $5$ 倍"
           },
           "math": "x=\\hl{5y}"
          }
         ]
        },
        "zh": "題目已給出兩個數為 $x$ 和 $y$；因 $x$ 是 $y$ 的 $5$ 倍，所以 $x>y$，差為 $x-y$。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "The numbers are $x$ and $y$. Since $x$ is $5$ times $y$, $x>y$, so their difference is $x-y$. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A)",
        "think": {
         "prompt": {
          "zh": "既然 $x$ 是 $y$ 的 $5$ 倍且差為正數 $52$，「兩數之差」應寫成哪條？",
          "en": "Since $x$ is $5$ times $y$ and the difference is $52$, how should we write the difference?"
         },
         "options": [
          {
           "math": "x-y=52"
          },
          {
           "math": "y-x=52",
           "hint": {
            "zh": "$x$ 較大，大減小才會得到正數 $52$。",
            "en": "$x$ is larger, so big minus small gives positive $52$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "(\\hl{5y})-y=52\n4y=52\n\\hlg{y=13}",
        "zh": "把 (2) 的 $x=5y$ 加上括號代入 (1)，展開並合併同類項，解出 $y=13$。",
        "en": "Substitute $x=5y$ from (2) into (1) with brackets. Expand, then collect like terms to get $y=13$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 回應題目最後一句（求 $y$）",
         "en": "Step 3 · Answer the final question (Find $y$)"
        },
        "math": "\\therefore \\hlg{y=13}",
        "zh": "核對題目最後一句要求的是「求 $y$」，因此最終答案是 $13$。",
        "en": "Check the final sentence (Find $y$): the required answer is $13$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把 $x-y$ 寫反成 $y-x=52$",
        "labelEn": "Writing $y-x=52$ backwards",
        "zh": "由 $x=5y$ 可知 $x$ 較大，所以差要寫 $x-y=52$。",
        "en": "Since $x=5y$, $x$ is larger, so the difference is $x-y=52$."
       },
       {
        "label": "代入後誤算 $5y-y=5$",
        "labelEn": "Simplifying $5y-y$ incorrectly",
        "zh": "$5y-y$ 即 $5y-1y=4y$，切勿忘記 $y$ 的係數是 $1$。",
        "en": "$5y-y$ means $5y-1y=4y$; remember the hidden coefficient $1$."
       }
      ],
      "tip": {
       "zh": "題目說「difference」時，先從倍數關係判斷誰大誰小，再用「大減小」。",
       "en": "For “difference”, check which unknown is larger from the multiple, then write larger minus smaller."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=65,\\ y=13$ 代回原來的兩條方程：$(1)$ 得 $65-(13)=52$，$(2)$ 得 $65-5(13)=0$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=65,\\ y=13$ into both originals: $(1)$ gives $65-(13)=52$ and $(2)$ gives $65-5(13)=0$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=65,\\ y=13$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=65,\\ y=13$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能說出為何這裡寫 $x-y=52$ 而不是 $y-x=52$ 嗎？",
       "en": "With the steps hidden, can you explain why we write $x-y=52$ instead of $y-x=52$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c3"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=73 \\quad \\cdots (1)\nx=3y+1 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "The sum of two numbers $x$ and $y$ is $73$",
            "zh": "$x$ 與 $y$ 的和是 $73$"
           },
           "math": "x+y=73"
          },
          {
           "clue": {
            "en": "$x$ is greater than $3$ times $y$ by $1$",
            "zh": "$x$ 比 $y$ 的 $3$ 倍大 $1$"
           },
           "math": "x=\\hl{3y+1}"
          }
         ]
        },
        "zh": "題目已給出兩個數為 $x$ 和 $y$。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "The two numbers are already named $x$ and $y$. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A)",
        "think": {
         "prompt": {
          "zh": "「$x$ is greater than $3$ times $y$ by $1$」翻譯成方程是哪條？",
          "en": "How do we translate “$x$ is greater than $3$ times $y$ by $1$”?"
         },
         "options": [
          {
           "math": "x=3y+1"
          },
          {
           "math": "x+1=3y",
           "hint": {
            "zh": "$x$ 已經比較大，所以是較小的 $3y$ 加上 $1$ 才追上 $x$。",
            "en": "$x$ is the larger quantity, so add $1$ to $3y$ to match $x$."
           }
          },
          {
           "math": "x=3(y+1)",
           "hint": {
            "zh": "是「$3$ 倍的 $y$」再多 $1$，不是「$y+1$ 的 $3$ 倍」。",
            "en": "It is “$3$ times $y$” plus $1$, not $3$ times $(y+1)$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "(\\hl{3y+1})+y=73\n3y+1+y=73\n4y=73-1\n4y=72\n\\hlg{y=18}",
        "zh": "把 (2) 的 $x=3y+1$ 加上括號代入 (1)，展開並合併同類項，解出 $y=18$。",
        "en": "Substitute $x=3y+1$ from (2) into (1) with brackets. Expand, then collect like terms to get $y=18$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 回應題目最後一句（求 $y$）",
         "en": "Step 3 · Answer the final question (Find $y$)"
        },
        "math": "\\therefore \\hlg{y=18}",
        "zh": "核對題目最後一句要求的是「求 $y$」，因此最終答案是 $18$。",
        "en": "Check the final sentence (Find $y$): the required answer is $18$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把「$x$ 比 $3y$ 大 $1$」寫成 $x+1=3y$",
        "labelEn": "Writing $x+1=3y$ instead of $x=3y+1$",
        "zh": "$x$ 較大，等式應寫成「大＝小＋差」，即 $x=3y+1$。",
        "en": "$x$ is larger, so write larger = smaller + excess: $x=3y+1$."
       },
       {
        "label": "移項時沒把 $+1$ 變 $-1$",
        "labelEn": "Forgetting to flip $+1$ to $-1$",
        "zh": "$4y+1=73$ 移項應得 $4y=73-1=72$，不是 $74$。",
        "en": "Moving $+1$ across gives $4y=73-1=72$, not $74$."
       }
      ],
      "tip": {
       "zh": "「$A$ is greater than $B$ by $k$」一律記住固定句式：$A=B+k$（大的等於小的加差）。",
       "en": "Always translate “$A$ is greater than $B$ by $k$” as $A=B+k$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=55,\\ y=18$ 代回原來的兩條方程：$(1)$ 得 $55+18=73$，$(2)$ 得 $55-3(18)=1$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=55,\\ y=18$ into both originals: $(1)$ gives $55+18=73$ and $(2)$ gives $55-3(18)=1$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=55,\\ y=18$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=55,\\ y=18$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能準確把「greater than 3 times y by 1」寫成方程並算出 $y$ 嗎？",
       "en": "With the steps hidden, can you write the equation for “greater than 3 times y by 1” and solve for $y$?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "2x+3y=33 \\quad \\cdots (1)\n4x+7y=73 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "price of $2$ pears and $3$ mangoes is \\$33",
            "zh": "2 個梨 ＋ 3 個芒果 ＝ 33 元"
           },
           "math": "2x+3y=33"
          },
          {
           "clue": {
            "en": "price of $4$ pears and $7$ mangoes is \\$73",
            "zh": "4 個梨 ＋ 7 個芒果 ＝ 73 元"
           },
           "math": "4x+7y=73"
          }
         ]
        },
        "zh": "設一個梨的售價為 $x$ 元，一個芒果的售價為 $y$ 元。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ dollars be the price of a pear and $y$ dollars be the price of a mango. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
         "en": "Step 2 · Scale equations to match $x$"
        },
        "math": "(1)\\times \\hlw{2}:\n4x+6y=\\hlw{66} \\quad \\cdots (3)",
        "zh": "要消去 $x$，先把$(1)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $x$, multiply all of $(1)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!",
        "think": {
         "prompt": {
          "zh": "題目問芒果售價 $y$，想直接消去 $x$（$2x$ 與 $4x$），最快做法是甚麼？",
          "en": "To find $y$ directly by eliminating $x$ ($2x$ and $4x$), what is the quickest move?"
         },
         "options": [
          {
           "zh": "把 $(1)$ 整條乘以 $2$，讓 $2x$ 變成 $4x$ 再相減",
           "en": "Multiply $(1)$ by $2$ so $2x$ matches $4x$, then subtract"
          },
          {
           "zh": "把 $(1)$ 乘 $7$、$(2)$ 乘 $3$ 消去 $y$",
           "en": "Multiply $(1)$ by $7$ and $(2)$ by $3$ to eliminate $y$",
           "hint": {
            "zh": "那樣數字會變大，而且先求到的是 $x$（梨），還要多代回一次才求到 $y$！",
            "en": "That creates bigger numbers and finds $x$ first, adding an extra step to get $y$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相減消去 $x$，求出 $y$",
         "en": "Step 3 · Subtract vertically to eliminate $x$ and find $y$"
        },
        "math": "(3) - (2):\n-y=-7\n\\hlg{y=7}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $x$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
         },
         "rows": [
          {
           "tag": "(3)",
           "cols": [
            "\\xc{4x}",
            "+6y",
            "=",
            "66"
           ]
          },
          {
           "op": "-",
           "tag": "(2)",
           "cols": [
            "\\xc{4x}",
            "+7y",
            "=",
            "73"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "",
           "\\hlg{-y}",
           "=",
           "\\hlg{-7}"
          ]
         }
        },
        "zh": "計算 $(3) - (2)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。解得 $y=7$。",
        "en": "Compute $(3) - (2)$: the $x$-terms cancel, leaving an equation in $y$ alone. Solving gives $y=7$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求一個芒果的售價（$y$））",
         "en": "Step 4 · Answer the final question (Find the price of a mango ($y$))"
        },
        "math": "\\therefore \\hlg{y=7}",
        "zh": "核對題目最後一句要求的是「求一個芒果的售價（$y$）」，因此最終答案是 $7$ 元。",
        "en": "Check the final sentence (Find the price of a mango ($y$)): the required answer is \\$7.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "放大 $(1)$ 時漏乘等號右邊的 $33$",
        "labelEn": "Forgetting to multiply $33$ by $2$",
        "zh": "整條方程 $(1)\\times 2$ 必須連右邊一併乘：$2\\times 33=66$，不可保留 $33$。",
        "en": "Multiplying $(1)$ by $2$ must scale the right side too: $2\\times 33=66$."
       },
       {
        "label": "答了梨的價錢 $6$ 元 而非芒果",
        "labelEn": "Giving the price of a pear (\\$6) instead of a mango",
        "zh": "題目最後問的是「a mango」，對應 $y=7$，即 $7$ 元。",
        "en": "The question asks for a mango, which is $y=7$ (\\$7)."
       }
      ],
      "tip": {
       "zh": "當題目只問其中一個未知數（如 $y$）時，優先消去另一個未知數（$x$），一次就能直達答案。",
       "en": "When asked for only one unknown ($y$), eliminate the other ($x$) first to reach the answer directly."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=6,\\ y=7$ 代回原來的兩條方程：$(1)$ 得 $2(6)+3(7)=33$，$(2)$ 得 $4(6)+7(7)=73$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=6,\\ y=7$ into both originals: $(1)$ gives $2(6)+3(7)=33$ and $(2)$ gives $4(6)+7(7)=73$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=6,\\ y=7$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能先決定消去哪個字母，再用直式對齊算出芒果價錢嗎？",
       "en": "With the steps hidden, can you choose which unknown to eliminate and align the subtraction yourself?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "3x+5y=37 \\quad \\cdots (1)\n7x+4y=48 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "price of $3$ oranges and $5$ apples is \\$37",
            "zh": "3 個橙 ＋ 5 個蘋果 ＝ 37 元"
           },
           "math": "3x+5y=37"
          },
          {
           "clue": {
            "en": "price of $7$ oranges and $4$ apples is \\$48",
            "zh": "7 個橙 ＋ 4 個蘋果 ＝ 48 元"
           },
           "math": "7x+4y=48"
          }
         ]
        },
        "zh": "設一個橙的售價為 $x$ 元，一個蘋果的售價為 $y$ 元。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ dollars be the price of an orange and $y$ dollars be the price of an apple. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
         "en": "Step 2 · Scale equations to match $y$"
        },
        "math": "(1)\\times \\hlw{4}:\n12x+20y=\\hlw{148} \\quad \\cdots (3)\n(2)\\times \\hlw{5}:\n35x+20y=\\hlw{240} \\quad \\cdots (4)",
        "zh": "要消去 $y$，先把$(1)$ 整條同乘 $4$ 得 (3)、$(2)$ 整條同乘 $5$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $y$, multiply all of $(1)$ by $4$ to get (3) and multiply all of $(2)$ by $5$ to get (4). Remember to multiply the constant on the right-hand side too!",
        "think": {
         "prompt": {
          "zh": "題目問橙的價錢 $x$，要消去 $y$（係數 $5$ 與 $4$），應該怎樣放大兩條方程？",
          "en": "To find $x$ by eliminating $y$ (coefficients $5$ and $4$), how should we scale both equations?"
         },
         "options": [
          {
           "zh": "$(1)\\times 4$ 及 $(2)\\times 5$，把 $y$ 都對齊成 $20y$",
           "en": "$(1)\\times 4$ and $(2)\\times 5$ to match both at $20y$"
          },
          {
           "zh": "$(1)\\times 5$ 及 $(2)\\times 4$",
           "en": "$(1)\\times 5$ and $(2)\\times 4$",
           "hint": {
            "zh": "那樣 $y$ 會變成 $25y$ 和 $16y$，係數反而沒有對齊！應交叉乘對方的係數。",
            "en": "That gives $25y$ and $16y$, which still do not match! Multiply by each other's coefficient."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相減消去 $y$，求出 $x$",
         "en": "Step 3 · Subtract vertically to eliminate $y$ and find $x$"
        },
        "math": "(4) - (3):\n23x=92\n\\hlg{x=4}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $y$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(4)",
           "cols": [
            "35x",
            "+\\xc{20y}",
            "=",
            "240"
           ]
          },
          {
           "op": "-",
           "tag": "(3)",
           "cols": [
            "12x",
            "+\\xc{20y}",
            "=",
            "148"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{23x}",
           "",
           "=",
           "\\hlg{92}"
          ]
         }
        },
        "zh": "計算 $(4) - (3)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=4$。",
        "en": "Compute $(4) - (3)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=4$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求一個橙的售價（$x$））",
         "en": "Step 4 · Answer the final question (Find the price of an orange ($x$))"
        },
        "math": "\\therefore \\hlg{x=4}",
        "zh": "核對題目最後一句要求的是「求一個橙的售價（$x$）」，因此最終答案是 $4$ 元。",
        "en": "Check the final sentence (Find the price of an orange ($x$)): the required answer is \\$4.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "兩條式放大時乘反了係數",
        "labelEn": "Multiplying by the wrong coefficient",
        "zh": "要令 $5y$ 和 $4y$ 變成共同的 $20y$，需把含 $5y$ 的乘 $4$、含 $4y$ 的乘 $5$。",
        "en": "To align $5y$ and $4y$ at $20y$, multiply the $5y$ equation by $4$ and the $4y$ equation by $5$."
       },
       {
        "label": "只乘了左邊、漏乘右邊金額",
        "labelEn": "Forgetting to multiply the dollar amounts on the right",
        "zh": "$37\\times 4=148$ 及 $48\\times 5=240$ 都要一併放大。",
        "en": "Both right-hand totals must be scaled: $37\\times 4=148$ and $48\\times 5=240$."
       }
      ],
      "tip": {
       "zh": "用較大的 $x$ 係數那條去減較小的（$(4)-(3)$），可以避免出現負係數，減少符號出錯。",
       "en": "Subtract the smaller $x$-coefficient row from the larger ($(4)-(3)$) to keep positive numbers and avoid sign slips."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=4,\\ y=5$ 代回原來的兩條方程：$(1)$ 得 $3(4)+5(5)=37$，$(2)$ 得 $7(4)+4(5)=48$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=4,\\ y=5$ into both originals: $(1)$ gives $3(4)+5(5)=37$ and $(2)$ gives $7(4)+4(5)=48$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=4,\\ y=5$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能把兩條式的 $y$ 係數對齊成 $20y$ 並完成直式相減嗎？",
       "en": "With the steps hidden, can you align both $y$-terms to $20y$ and complete the vertical subtraction?"
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
      "concepts": [
       "ws02-c3",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "3x+4y=43 \\quad \\cdots (1)\nx+y=12 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "total number of pencils and rubbers is $12$",
            "zh": "總數量：鉛筆 ＋ 擦膠 ＝ 12 件"
           },
           "math": "x+y=12"
          },
          {
           "clue": {
            "en": "prices are \\$3 and \\$4, total spent is \\$43",
            "zh": "總價：3 元/枝 × $x$ ＋ 4 元/塊 × $y$ ＝ 43 元"
           },
           "math": "3x+4y=43"
          }
         ]
        },
        "zh": "設買了 $x$ 枝鉛筆及 $y$ 塊擦膠。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the numbers of pencils and rubbers bought respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "這題已給單價（$3$ 元與 $4$ 元），所以 $x$ 和 $y$ 應該設為甚麼？",
          "en": "Since unit prices (\\$3 and \\$4) are given, what should $x$ and $y$ represent?"
         },
         "options": [
          {
           "zh": "鉛筆和擦膠的「數量」",
           "en": "The quantities of pencils and rubbers"
          },
          {
           "zh": "鉛筆和擦膠的「單價」",
           "en": "The unit prices of pencils and rubbers",
           "hint": {
            "zh": "單價已經在題目給出了（3 元和 4 元），未知的是買了多少件！",
            "en": "The unit prices are already given (\\$3 and \\$4); the unknowns are the numbers bought!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
         "en": "Step 2 · Scale equations to match $y$"
        },
        "math": "(2)\\times \\hlw{4}:\n4x+4y=\\hlw{48} \\quad \\cdots (3)",
        "zh": "要消去 $y$，先把$(2)$ 整條同乘 $4$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $y$, multiply all of $(2)$ by $4$ to get (3). Remember to multiply the constant on the right-hand side too!"
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相減消去 $y$，求出 $x$",
         "en": "Step 3 · Subtract vertically to eliminate $y$ and find $x$"
        },
        "math": "(3) - (1):\n\\hlg{x=5}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $y$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(3)",
           "cols": [
            "4x",
            "+\\xc{4y}",
            "=",
            "48"
           ]
          },
          {
           "op": "-",
           "tag": "(1)",
           "cols": [
            "3x",
            "+\\xc{4y}",
            "=",
            "43"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{x}",
           "",
           "=",
           "\\hlg{5}"
          ]
         }
        },
        "zh": "計算 $(3) - (1)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=5$。",
        "en": "Compute $(3) - (1)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=5$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求鉛筆的數量（$x$））",
         "en": "Step 4 · Answer the final question (Find the number of pencils bought ($x$))"
        },
        "math": "\\therefore \\hlg{x=5}",
        "zh": "核對題目最後一句要求的是「求鉛筆的數量（$x$）」，因此最終答案是 $5$ 枝。",
        "en": "Check the final sentence (Find the number of pencils bought ($x$)): the required answer is $5$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把數量方程 $x+y=12$ 與總價方程混在一起",
        "labelEn": "Mixing quantity and cost into one equation",
        "zh": "一件歸一件：一條式寫「總件數」$x+y=12$，另一條寫「總金額」$3x+4y=43$。",
        "en": "Separate the two units: one equation for total count ($x+y=12$) and one for total cost ($3x+4y=43$)."
       },
       {
        "label": "把 $3$ 和 $4$ 配錯給 $x$、$y$",
        "labelEn": "Swapping the unit prices $3$ and $4$",
        "zh": "「respectively」表示按次序對應：鉛筆 $x$ 配 $3$ 元，擦膠 $y$ 配 $4$ 元。",
        "en": "“Respectively” matches in order: pencils ($x$) cost \\$3 and rubbers ($y$) cost \\$4."
       }
      ],
      "tip": {
       "zh": "「總件數 ＋ 總金額」題型最容易做：把「件數式」乘以另一個物品的單價，立刻消元直出答案。",
       "en": "For count + cost problems, multiply the count equation by the unwanted item's price to eliminate it in one shot."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=5,\\ y=7$ 代回原來的兩條方程：$(1)$ 得 $3(5)+4(7)=43$，$(2)$ 得 $5+7=12$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=5,\\ y=7$ into both originals: $(1)$ gives $3(5)+4(7)=43$ and $(2)$ gives $5+7=12$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=5,\\ y=7$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能寫出「總件數」與「總金額」兩條方程，再消去 $y$ 嗎？",
       "en": "With the steps hidden, can you write the count and cost equations and eliminate $y$?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "2.2x+3.3y=99 \\quad \\cdots (1)\nx+y=35 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "total number of stamps is $35$",
            "zh": "總枚數為 $35$"
           },
           "math": "x+y=35"
          },
          {
           "clue": {
            "en": "\\$2.2 stamps and \\$3.3 stamps for \\$99",
            "zh": "總金額為 $99$ 元"
           },
           "math": "2.2x+3.3y=99"
          }
         ]
        },
        "zh": "設 Gary 買了 $x$ 枚 $2.2$ 元郵票及 $y$ 枚 $3.3$ 元郵票。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the numbers of \\$2.2 stamps and \\$3.3 stamps bought respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 化整簡化 $(1)$（先清小數再約 $11$）",
         "en": "Step 2 · Clear decimals and simplify $(1)$"
        },
        "math": "2.2x+3.3y=99\n22x+33y=990\n\\hl{2x+3y=90} \\quad \\cdots (3)",
        "zh": "把 $(1)$ 兩邊同乘 $10$ 清去小數點，再同除以 $11$，立刻變成超簡單的整數方程 $(3)$！",
        "en": "Multiply $(1)$ by $10$ to clear decimals, then divide by $11$ to get the clean integer equation $(3)$!",
        "think": {
         "prompt": {
          "zh": "$2.2x+3.3y=99$ 含有小數，先做哪一步可以令算式一下子變超簡單？",
          "en": "$2.2x+3.3y=99$ has decimals—what quick simplification makes the numbers tiny?"
         },
         "options": [
          {
           "zh": "兩邊同乘 $10$ 再除以 $11$，化成 $2x+3y=90$",
           "en": "Multiply by $10$ then divide by $11$ to get $2x+3y=90$"
          },
          {
           "zh": "直接保留小數把 $x+y=35$ 乘以 $3.3$",
           "en": "Keep decimals and multiply $x+y=35$ by $3.3$",
           "hint": {
            "zh": "保留小數也可算出，但先化整成 $2x+3y=90$ 幾乎不會算錯小數點！",
            "en": "Decimals still work, but clearing to $2x+3y=90$ prevents decimal slips!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 對齊 $y$ 係數並直式相減求 $x$",
         "en": "Step 3 · Align $y$ and subtract vertically to find $x$"
        },
        "math": "(2)\\times 3:\\ 3x+3y=105 \\quad \\cdots (4)\n(4)-(3):\n\\hlg{x=15}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $y$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(2)\\times 3",
           "cols": [
            "3x",
            "+\\xc{3y}",
            "=",
            "105"
           ]
          },
          {
           "op": "-",
           "tag": "(3)",
           "cols": [
            "2x",
            "+\\xc{3y}",
            "=",
            "90"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{x}",
           "",
           "=",
           "\\hlg{15}"
          ]
         }
        },
        "zh": "把 $(2)$ 整條乘 $3$ 得 $3x+3y=105$，再減去 $(3)$ 消去 $y$，一步直出 $x=15$！",
        "en": "Multiply $(2)$ by $3$ to get $3x+3y=105$, then subtract $(3)$ to cancel $y$ and find $x=15$ directly!",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求 $2.2$ 元郵票的數量（$x$））",
         "en": "Step 4 · Answer the final question (Find the number of \\$2.2 stamps ($x$))"
        },
        "math": "\\therefore \\hlg{x=15}",
        "zh": "核對題目最後一句要求的是「求 $2.2$ 元郵票的數量（$x$）」，因此最終答案是 $15$ 枚。",
        "en": "Check the final sentence (Find the number of \\$2.2 stamps ($x$)): the required answer is $15$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "小數點移位漏乘右邊的 $99$",
        "labelEn": "Forgetting to scale $99$ when clearing decimals",
        "zh": "$2.2x+3.3y=99$ 同乘 $10$ 時，右邊也要變成 $990$，不可維持 $99$。",
        "en": "Multiplying $2.2x+3.3y=99$ by $10$ changes the right side to $990$, not $99$."
       },
       {
        "label": "誤把 $y=20$ 當作 $2.2$ 元郵票數量",
        "labelEn": "Giving $y=20$ instead of $x=15$",
        "zh": "記得回看假設：$x$ 才是 $2.2$ 元郵票，$y$ 是 $3.3$ 元郵票。",
        "en": "Check your definition: $x=15$ is the \\$2.2 stamps, whereas $y=20$ is the \\$3.3 stamps."
       }
      ],
      "tip": {
       "zh": "方程出現小數（如 $2.2,\\ 3.3$）時，先同乘 $10$ 清去小數點，再看看兩邊能否同除一個整數約簡，計算立即輕鬆一半。",
       "en": "Clear decimals first (multiply by $10$) and divide out common factors ($11$) to make solving effortless."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=15,\\ y=20$ 代回原來的兩條方程：$(1)$ 得 $2.2(15)+3.3(20)=99$，$(2)$ 得 $15+20=35$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=15,\\ y=20$ into both originals: $(1)$ gives $2.2(15)+3.3(20)=99$ and $(2)$ gives $15+20=35$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=15,\\ y=20$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能先把 $2.2x+3.3y=99$ 化成整數方程，再算出 $x$ 嗎？",
       "en": "With the steps hidden, can you turn $2.2x+3.3y=99$ into $2x+3y=90$ and solve for $x$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=3y \\quad \\cdots (1)\n3x+2y=154 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "cost of a carton of peach tea = cost of $3$ bottles of coffee",
            "zh": "1 盒蜜桃茶 ＝ 3 瓶咖啡的價錢"
           },
           "math": "x=\\hl{3y}"
          },
          {
           "clue": {
            "en": "total cost of $3$ cartons and $2$ bottles is \\$154",
            "zh": "3 盒蜜桃茶 ＋ 2 瓶咖啡 ＝ 154 元"
           },
           "math": "3x+2y=154"
          }
         ]
        },
        "zh": "設一盒蜜桃茶的價錢為 $x$ 元，一瓶咖啡的價錢為 $y$ 元。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ dollars be the cost of a carton of peach tea and $y$ dollars be the cost of a bottle of coffee. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "3(\\hl{3y})+2y=154\n9y+2y=154\n11y=154\n\\hlg{y=14}",
        "zh": "把 (1) 的 $x=3y$ 加上括號代入 (2)，展開並合併同類項，解出 $y=14$。",
        "en": "Substitute $x=3y$ from (1) into (2) with brackets. Expand, then collect like terms to get $y=14$.",
        "marking": "(1M)",
        "think": {
         "prompt": {
          "zh": "把 $x=3y$ 代入 $3x+2y=154$ 時，$3x$ 會變成甚麼？",
          "en": "When substituting $x=3y$ into $3x+2y=154$, what does $3x$ become?"
         },
         "options": [
          {
           "math": "3(3y)=9y"
          },
          {
           "math": "3y",
           "hint": {
            "zh": "原本 $x$ 前面已有係數 $3$，代入時要保留括號寫 $3(3y)=9y$！",
            "en": "Keep the coefficient $3$ in front: $3x = 3(3y) = 9y$!"
           }
          },
          {
           "math": "6y",
           "hint": {
            "zh": "$3$ 乘以 $3$ 是 $9$，不是 $3+3=6$。",
            "en": "$3\\times 3 = 9$, not $3+3=6$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 回應題目最後一句（求一瓶咖啡的價錢（$y$））",
         "en": "Step 3 · Answer the final question (Find the cost of a bottle of coffee ($y$))"
        },
        "math": "\\therefore \\hlg{y=14}",
        "zh": "核對題目最後一句要求的是「求一瓶咖啡的價錢（$y$）」，因此最終答案是 $14$ 元。",
        "en": "Check the final sentence (Find the cost of a bottle of coffee ($y$)): the required answer is \\$14.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把「1 盒茶＝3 瓶咖啡」寫反成 $3x=y$",
        "labelEn": "Reversing the relation to $3x=y$",
        "zh": "1 盒蜜桃茶（$x$）較貴，等於 3 瓶咖啡（$3y$），所以是 $x=3y$。",
        "en": "One carton ($x$) costs as much as $3$ bottles ($3y$), so $x=3y$."
       },
       {
        "label": "代入 $3x$ 時漏乘前面的 $3$",
        "labelEn": "Dropping the coefficient $3$ in $3x$",
        "zh": "$3x=3(3y)=9y$，加上 $2y$ 是 $11y=154$，不是 $5y=154$。",
        "en": "$3x=3(3y)=9y$, giving $9y+2y=11y=154$, not $5y=154$."
       }
      ],
      "tip": {
       "zh": "像「1 盒等於 3 瓶」已直接孤立了一個未知數，用代入法加括號 $3(3y)$ 最快最穩。",
       "en": "A direct ratio like $x=3y$ is ready for substitution—just wrap it in brackets: $3(3y)$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=42,\\ y=14$ 代回原來的兩條方程：$(1)$ 得 $42-3(14)=0$，$(2)$ 得 $3(42)+2(14)=154$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=42,\\ y=14$ into both originals: $(1)$ gives $42-3(14)=0$ and $(2)$ gives $3(42)+2(14)=154$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=42,\\ y=14$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=42,\\ y=14$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能寫出 $x=3y$ 並留意 $3x=3(3y)$ 求出 $y$ 嗎？",
       "en": "With the steps hidden, can you substitute $x=3y$ into $3x+2y=154$ without dropping the $3$?"
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
      "concepts": [
       "ws02-c3",
       "ws02-c6"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=84 \\quad \\cdots (1)\nx+12=3y \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "total number of books owned by Amy and Billy is $84$",
            "zh": "二人原有書本總數是 $84$"
           },
           "math": "x+y=84"
          },
          {
           "clue": {
            "en": "Amy buys $12$ books → $3$ times Billy's",
            "zh": "Amy 從書店買入 $12$ 本（Billy 不變），變成 Billy 的 $3$ 倍"
           },
           "math": "x\\hlw{+12}=3y"
          }
         ]
        },
        "zh": "設 Amy 原有 $x$ 本書，Billy 原有 $y$ 本書。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of books owned by Amy and Billy respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "Amy 從書店新買 $12$ 本書，Billy 的書本數量有沒有改變？",
          "en": "Amy buys $12$ books from a book store—does Billy's number of books change?"
         },
         "options": [
          {
           "zh": "沒有改變，所以寫 $x+12=3y$",
           "en": "No change for Billy, so $x+12=3y$"
          },
          {
           "zh": "Billy 會少 $12$ 本，寫 $x+12=3(y-12)$",
           "en": "Billy loses $12$, so $x+12=3(y-12)$",
           "hint": {
            "zh": "書是從「書店」買回來，不是 Billy 給她的！只有 Amy 增加 $12$ 本。",
            "en": "The books come from a book store, not from Billy—only Amy gains $12$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 轉換主項，孤立 $x$",
         "en": "Step 2 · Make $x$ the subject"
        },
        "math": "x-3y=-12 \\quad \\cdots (2)\nx=\\hl{3y-12} \\quad \\cdots (3)",
        "zh": "在 (2) 中，$x$ 的係數是 $1$，移項即可把 $x$ 孤立在左邊，完全不會出現分數。",
        "en": "In (2), the coefficient of $x$ is $1$, so transposing isolates $x$ cleanly with no fractions."
       },
       {
        "title": {
         "zh": "第 3 步 · 整塊代入並展開求 $y$",
         "en": "Step 3 · Substitute the whole block and solve for $y$"
        },
        "math": "(\\hl{3y-12})+y=84\n3y-12+y=84\n4y=84+12\n4y=96\n\\hlg{y=24}",
        "zh": "把 (3) 的 $x=3y-12$ 加上括號代入 (1)，展開並合併同類項，解出 $y=24$。",
        "en": "Substitute $x=3y-12$ from (3) into (1) with brackets. Expand, then collect like terms to get $y=24$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求 Billy 的書本數量（$y$））",
         "en": "Step 4 · Answer the final question (Find the number of books owned by Billy ($y$))"
        },
        "math": "\\therefore \\hlg{y=24}",
        "zh": "核對題目最後一句要求的是「求 Billy 的書本數量（$y$）」，因此最終答案是 $24$ 本。",
        "en": "Check the final sentence (Find the number of books owned by Billy ($y$)): the required answer is $24$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "誤當成二人轉移而寫了 $y-12$",
        "labelEn": "Treating a store purchase as a transfer from Billy",
        "zh": "看清來源：Amy 是從書店買書，Billy 數量不變，故第二式是 $x+12=3y$。",
        "en": "Amy buys from a store, so Billy's count stays $y$: $x+12=3y$."
       },
       {
        "label": "移項得到 $x=3y+12$ 而非 $3y-12$",
        "labelEn": "Forgetting to flip $+12$ when isolating $x$",
        "zh": "由 $x+12=3y$ 移走 $+12$ 要變減，得 $x=3y-12$。",
        "en": "Moving $+12$ to the right flips its sign: $x=3y-12$."
       }
      ],
      "tip": {
       "zh": "看清物品來源：「從外買入／離開」只改一方；「甲給乙」才是雙方一減一加。",
       "en": "Check where items come from: external buying changes one person; a transfer changes both."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=60,\\ y=24$ 代回原來的兩條方程：$(1)$ 得 $60+24=84$，$(2)$ 得 $60-3(24)=-12$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=60,\\ y=24$ into both originals: $(1)$ gives $60+24=84$ and $(2)$ gives $60-3(24)=-12$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=60,\\ y=24$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=60,\\ y=24$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能分辨「從書店買入」與「互相轉移」的列式差別嗎？",
       "en": "With the steps hidden, can you tell the difference between buying from outside and transferring between people?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=42 \\quad \\cdots (1)\n2x+y=75 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "plays $42$ games, does not lose any",
            "zh": "共打 $42$ 場（全為勝或和）"
           },
           "math": "x+y=42"
          },
          {
           "clue": {
            "en": "$2$ points for a win, $1$ for a draw, total $75$ points",
            "zh": "總分：勝場 × 2 ＋ 和場 × 1 ＝ 75 分"
           },
           "math": "2x+y=75"
          }
         ]
        },
        "zh": "設冠軍勝出 $x$ 場、賽和 $y$ 場（因沒有落敗，落敗場數為 $0$）。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the numbers of games won and drawn respectively (0 losses). Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
         "en": "Step 2 · Scale equations to match $x$"
        },
        "math": "(1)\\times \\hlw{2}:\n2x+2y=\\hlw{84} \\quad \\cdots (3)",
        "zh": "要消去 $x$，先把$(1)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
        "en": "To eliminate $x$, multiply all of $(1)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!",
        "think": {
         "prompt": {
          "zh": "兩條式是 $x+y=42$ 與 $2x+y=75$，題目問賽和場數 $y$。怎樣一步直出 $y$？",
          "en": "We have $x+y=42$ and $2x+y=75$, and want $y$. How can we get $y$ in one elimination?"
         },
         "options": [
          {
           "zh": "把 $(1)\\times 2$ 變成 $2x+2y=84$，再減 $(2)$ 消去 $x$",
           "en": "Multiply $(1)$ by $2$ to get $2x+2y=84$, then subtract $(2)$ to eliminate $x$"
          },
          {
           "zh": "直接 $(2)-(1)$ 消去 $y$",
           "en": "Directly do $(2)-(1)$ to eliminate $y$",
           "hint": {
            "zh": "直接 $(2)-(1)$ 也超快（先出 $x=33$，再用 $42-33=9$ 得 $y$），不過消 $x$ 可以直出 $y=9$，兩種都很好！",
            "en": "Doing $(2)-(1)$ is also very quick ($x=33$, then $y=42-33=9$), while eliminating $x$ finds $y=9$ directly!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 直式相減消去 $x$，求出 $y$",
         "en": "Step 3 · Subtract vertically to eliminate $x$ and find $y$"
        },
        "math": "(3) - (2):\n\\hlg{y=9}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $x$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
         },
         "rows": [
          {
           "tag": "(3)",
           "cols": [
            "\\xc{2x}",
            "+2y",
            "=",
            "84"
           ]
          },
          {
           "op": "-",
           "tag": "(2)",
           "cols": [
            "\\xc{2x}",
            "+y",
            "=",
            "75"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "",
           "\\hlg{y}",
           "=",
           "\\hlg{9}"
          ]
         }
        },
        "zh": "計算 $(3) - (2)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。解得 $y=9$。",
        "en": "Compute $(3) - (2)$: the $x$-terms cancel, leaving an equation in $y$ alone. Solving gives $y=9$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求賽和場數（$y$））",
         "en": "Step 4 · Answer the final question (Find the number of games drawn ($y$))"
        },
        "math": "\\therefore \\hlg{y=9}",
        "zh": "核對題目最後一句要求的是「求賽和場數（$y$）」，因此最終答案是 $9$ 場。",
        "en": "Check the final sentence (Find the number of games drawn ($y$)): the required answer is $9$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "求出勝出場數 $x=33$ 就停了，忘了答賽和 $y$",
        "labelEn": "Stopping at wins $x=33$ instead of draws $y$",
        "zh": "最後一句問「draws」（賽和），記得答 $y=9$ 場。",
        "en": "The question asks for draws, so state $y=9$."
       },
       {
        "label": "誤把「沒有落敗」當成第 3 個未知數",
        "labelEn": "Adding a third unknown for losses",
        "zh": "「does not lose any games」代表落敗＝$0$ 場，全部 $42$ 場只是勝加和。",
        "en": "“Does not lose any games” means $0$ losses, so $x+y=42$."
       }
      ],
      "tip": {
       "zh": "賽制題先讀「沒有落敗／沒有賽和」這類句子，它把三個結果立刻簡化成兩個未知數。",
       "en": "Spot phrases like “no losses” or “no draws” first—they reduce three outcomes to two unknowns."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=33,\\ y=9$ 代回原來的兩條方程：$(1)$ 得 $33+9=42$，$(2)$ 得 $2(33)+9=75$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=33,\\ y=9$ into both originals: $(1)$ gives $33+9=42$ and $(2)$ gives $2(33)+9=75$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=33,\\ y=9$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能說出「勝場 $x$」和「和場 $y$」分別對應哪兩條方程嗎？",
       "en": "With the steps hidden, can you set up the total-games and total-points equations yourself?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=20 \\quad \\cdots (1)\n1300+500x-300y=4900 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "playing $20$ matches without any draws",
            "zh": "共玩 $20$ 場（全為勝或敗）"
           },
           "math": "x+y=20"
          },
          {
           "clue": {
            "en": "originally $1300$ → ends at $4900$ (+$500$ win, $-300$ loss)",
            "zh": "原有 $1300$ 分，淨增 $4900-1300=3600$ 分（落敗要扣分！）"
           },
           "math": "1300+500x\\hlw{-300y}=4900"
          }
         ]
        },
        "zh": "設 Alice 勝出 $x$ 場、落敗 $y$ 場（沒有賽和）。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the numbers of matches Alice wins and loses respectively (no draws). Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "Alice 原有 $1300$ 分，玩完變 $4900$ 分，每敗一場扣 $300$ 分。得分方程哪一條正確？",
          "en": "Alice starts with $1300$ points, finishes at $4900$, gaining $500$ per win and losing $300$ per loss. Which equation is right?"
         },
         "options": [
          {
           "math": "1300+500x-300y=4900"
          },
          {
           "math": "500x-300y=4900",
           "hint": {
            "zh": "別忘了 Alice 一開始已經有 $1300$ 底分！淨賺的分數是 $4900-1300=3600$。",
            "en": "Don't forget her starting $1300$ points! Her net gain is $4900-1300=3600$."
           }
          },
          {
           "math": "1300+500x+300y=4900",
           "hint": {
            "zh": "落敗是「loses 300 points」（扣分），所以 $300y$ 前面是減號。",
            "en": "A loss subtracts $300$ points, so the sign before $300y$ must be minus."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 先減去底分 $1300$，再同除 $100$ 簡化",
         "en": "Step 2 · Subtract starting points and divide by $100$"
        },
        "math": "500x-300y=4900-1300\n500x-300y=3600\n\\hl{5x-3y=36} \\quad \\cdots (3)",
        "zh": "把原有 $1300$ 分移去右邊得淨增 $3600$ 分，再把整條式同除以 $100$，化簡成 $(3)$ $5x-3y=36$。",
        "en": "Subtract the starting $1300$ points to get net gain $3600$, then divide through by $100$ to get $(3)$ $5x-3y=36$."
       },
       {
        "title": {
         "zh": "第 3 步 · 對齊 $y$ 並直式相加消元求 $x$",
         "en": "Step 3 · Align $y$ and add vertically to find $x$"
        },
        "math": "(1)\\times 3:\\ 3x+3y=60 \\quad \\cdots (4)\n(4)+(3):\n8x=96\n\\hlg{x=12}",
        "align": {
         "caption": {
          "zh": "直式對齊（異號相加，消去 $y$）",
          "en": "Column-aligned elimination (opposite signs add to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(1)\\times 3",
           "cols": [
            "3x",
            "+\\xc{3y}",
            "=",
            "60"
           ]
          },
          {
           "op": "+",
           "tag": "(3)",
           "cols": [
            "5x",
            "-\\xc{3y}",
            "=",
            "36"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{8x}",
           "",
           "=",
           "\\hlg{96}"
          ]
         }
        },
        "zh": "把 $(1)$ 乘 $3$ 得 $+3y$，與 $(3)$ 的 $-3y$ 異號相加直接抵消 $y$，解得 $8x=96 \\Rightarrow x=12$。",
        "en": "Multiply $(1)$ by $3$ to get $+3y$, then add $(3)$ to cancel $-3y$ and solve $8x=96 \\Rightarrow x=12$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求勝出場數（$x$））",
         "en": "Step 4 · Answer the final question (Find the number of matches Alice wins ($x$))"
        },
        "math": "\\therefore \\hlg{x=12}",
        "zh": "核對題目最後一句要求的是「求勝出場數（$x$）」，因此最終答案是 $12$ 場。",
        "en": "Check the final sentence (Find the number of matches Alice wins ($x$)): the required answer is $12$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "漏減原本已有的 $1300$ 底分",
        "labelEn": "Forgetting the initial $1300$ points",
        "zh": "最終分數 $4900$ 包含原有的 $1300$ 分，所以 $20$ 場淨得 $4900-1300=3600$ 分。",
        "en": "The final $4900$ includes the starting $1300$, so the net gain is $3600$."
       },
       {
        "label": "把落敗扣分誤寫成加號 $+300y$",
        "labelEn": "Writing $+300y$ instead of $-300y$",
        "zh": "「loses 300 points」代表減去 $300y$；之後把整條除以 $100$ 得 $5x-3y=36$。",
        "en": "“Loses 300 points” means $-300y$; dividing by $100$ simplifies it to $5x-3y=36$."
       }
      ],
      "tip": {
       "zh": "遇到「原有底分」＋「扣分」的計分題，先算淨變化 $4900-1300=3600$，再同除以 $100$ 縮小數字。",
       "en": "Subtract the starting score first ($4900-1300=3600$), then divide by $100$ to shrink the numbers."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=12,\\ y=8$ 代回原來的兩條方程：$(1)$ 得 $12+8=20$，$(2)$ 得 $5(12)-3(8)=36$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=12,\\ y=8$ into both originals: $(1)$ gives $12+8=20$ and $(2)$ gives $5(12)-3(8)=36$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=12,\\ y=8$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能寫出含底分與扣分的方程，並同除 $100$ 後相加消元嗎？",
       "en": "With the steps hidden, can you include both the starting score and minus sign, simplify by $100$, and eliminate $y$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=3y \\quad \\cdots (1)\n1100x+950y=46750 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "double bed rooms = $3$ times single bed rooms",
            "zh": "雙床房數量是單床房的 $3$ 倍"
           },
           "math": "x=\\hl{3y}"
          },
          {
           "clue": {
            "en": "\\$1100 double + \\$950 single = \\$46\\,750",
            "zh": "雙床房總租 ＋ 單床房總租 ＝ 46750 元"
           },
           "math": "1100x+950y=46750"
          }
         ]
        },
        "zh": "設訂出 $x$ 間雙床房及 $y$ 間單床房。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the numbers of double bed rooms and single bed rooms booked respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "1100(\\hl{3y})+950y=46750\n3300y+950y=46750\n4250y=46750\n\\hlg{y=11}",
        "zh": "把 (1) 的 $x=3y$ 加上括號代入 (2)，展開並合併同類項，解出 $y=11$。",
        "en": "Substitute $x=3y$ from (1) into (2) with brackets. Expand, then collect like terms to get $y=11$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=3(\\hl{11})\n\\hlg{x=33}",
        "zh": "把剛算出的 $y=11$ 代回 (1)，直接算出 $x=33$。",
        "en": "Put $y=11$ back into (1) to find $x=33$.",
        "think": {
         "prompt": {
          "zh": "求得 $y=11$（單床房）後，題目最後要求甚麼？",
          "en": "After finding $y=11$ (single bed rooms), what does the question ask for?"
         },
         "options": [
          {
           "zh": "兩類房間的「總數」$x+y$",
           "en": "The total number of rooms booked, $x+y$"
          },
          {
           "zh": "單床房數量 $y$ 已經是答案",
           "en": "$y$ is already the final answer",
           "hint": {
            "zh": "重讀最後一句：「Find the total number of rooms booked」，要算出 $x$ 再加起來！",
            "en": "Re-read the last sentence: “total number of rooms booked”—we must find $x+y$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求訂出的房間總數（$x+y$））",
         "en": "Step 4 · Answer the final question (Find the total number of rooms booked ($x+y$))"
        },
        "math": "x+y=33+11=44\n\\therefore \\hlg{x+y=44}",
        "zh": "核對題目最後一句要求的是「求訂出的房間總數（$x+y$）」，因此最終答案是 $44$ 間。",
        "en": "Check the final sentence (Find the total number of rooms booked ($x+y$)): the required answer is $44$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "求出 $y=11$ 或 $x=33$ 就停止，忘了求總數 $x+y$",
        "labelEn": "Stopping at $y=11$ or $x=33$ without adding",
        "zh": "題目問「total number of rooms booked」，最後必須加上 $x+y=33+11=44$。",
        "en": "The question asks for the total, so finish with $x+y=33+11=44$."
       },
       {
        "label": "代入 $1100x$ 時寫錯成 $1100+3y$",
        "labelEn": "Substituting $3y$ with addition instead of multiplication",
        "zh": "$1100x=1100(3y)=3300y$，加上 $950y$ 是 $4250y$。",
        "en": "$1100x=1100(3y)=3300y$, so $3300y+950y=4250y$."
       }
      ],
      "tip": {
       "zh": "算出單一未知數後，養成圈出題目最後一句的習慣：看到「total」就要把 $x+y$ 寫出來。",
       "en": "Always re-read the final question: when you see “total”, finish by adding $x+y$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=33,\\ y=11$ 代回原來的兩條方程：$(1)$ 得 $33-3(11)=0$，$(2)$ 得 $22(33)+19(11)=935$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=33,\\ y=11$ into both originals: $(1)$ gives $33-3(11)=0$ and $(2)$ gives $22(33)+19(11)=935$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=33,\\ y=11$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=33,\\ y=11$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能由 $x=3y$ 代入租金方程，並記得最後加總 $x+y$ 嗎？",
       "en": "With the steps hidden, can you substitute $x=3y$ and remember to find $x+y$ at the end?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "y=7x \\quad \\cdots (1)\n109x+68y=22815 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "second class tickets = $7$ times first class tickets",
            "zh": "二等票數量是頭等票的 $7$ 倍（留意是 $y=7x$！）"
           },
           "math": "y=\\hl{7x}"
          },
          {
           "clue": {
            "en": "\\$109 first class + \\$68 second class = \\$22\\,815",
            "zh": "頭等總票價 ＋ 二等總票價 ＝ 22815 元"
           },
           "math": "109x+68y=22815"
          }
         ]
        },
        "zh": "設售出 $x$ 張頭等票及 $y$ 張二等票。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the numbers of first class tickets and second class tickets sold respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "「二等票（$y$）是頭等票（$x$）的 $7$ 倍」，應寫成哪條方程？",
          "en": "“Second class ($y$) is $7$ times first class ($x$)”—which equation is correct?"
         },
         "options": [
          {
           "math": "y=7x"
          },
          {
           "math": "x=7y",
           "hint": {
            "zh": "小心！這題是二等票 $y$ 較多，所以 $y$ 等於 $7$ 乘以 $x$。",
            "en": "Careful! Second class ($y$) is the larger number here, so $y=7x$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $x$",
         "en": "Step 2 · Substitute the whole block and solve for $x$"
        },
        "math": "109x+68(\\hl{7x})=22815\n109x+476x=22815\n585x=22815\n\\hlg{x=39}",
        "zh": "把 (1) 的 $y=7x$ 加上括號代入 (2)，展開並合併同類項，解出 $x=39$。",
        "en": "Substitute $y=7x$ from (1) into (2) with brackets. Expand, then collect like terms to get $x=39$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $y$",
         "en": "Step 3 · Substitute back into (1) for $y$"
        },
        "math": "y=7(\\hl{39})\n\\hlg{y=273}",
        "zh": "把剛算出的 $x=39$ 代回 (1)，直接算出 $y=273$。",
        "en": "Put $x=39$ back into (1) to find $y=273$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求售出的車票總數（$x+y$））",
         "en": "Step 4 · Answer the final question (Find the total number of tickets sold ($x+y$))"
        },
        "math": "x+y=39+273=312\n\\therefore \\hlg{x+y=312}",
        "zh": "核對題目最後一句要求的是「求售出的車票總數（$x+y$）」，因此最終答案是 $312$ 張。",
        "en": "Check the final sentence (Find the total number of tickets sold ($x+y$)): the required answer is $312$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把倍數方向寫反成 $x=7y$",
        "labelEn": "Writing $x=7y$ instead of $y=7x$",
        "zh": "二等票比頭等票多 $7$ 倍，故 $y=7x$；寫反會令 $x$ 除不盡。",
        "en": "Second class ($y$) is $7$ times first class ($x$), so $y=7x$; reversing gives a non-integer."
       },
       {
        "label": "求出 $x=39$ 就忘了加 $y=273$",
        "labelEn": "Stopping at $x=39$ instead of computing $x+y$",
        "zh": "題目問車票總數，還需要 $x+y=39+273=312$（或直接計 $8x=8\\times 39=312$）。",
        "en": "The question asks for total tickets: $x+y=39+273=312$ (or $8x=312$)."
       }
      ],
      "tip": {
       "zh": "當 $y=7x$ 時，總數 $x+y=x+7x=8x$，算出 $x=39$ 後乘 $8$ 就能順手核對總數！",
       "en": "Since $y=7x$, the total is $x+y=8x=8(39)=312$—a great quick check!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=39,\\ y=273$ 代回原來的兩條方程：$(1)$ 得 $-7(39)+273=0$，$(2)$ 得 $109(39)+68(273)=22815$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=39,\\ y=273$ into both originals: $(1)$ gives $-7(39)+273=0$ and $(2)$ gives $109(39)+68(273)=22815$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=39,\\ y=273$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=39,\\ y=273$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能寫對 $y=7x$ 並計算 $109x+68(7x)$ 求總票數嗎？",
       "en": "With the steps hidden, can you write $y=7x$ correctly and compute the total tickets?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c6"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=2y \\quad \\cdots (1)\nx-10=y-2 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "number of boys is $2$ times that of girls",
            "zh": "原有男生是女生的 $2$ 倍"
           },
           "math": "x=\\hl{2y}"
          },
          {
           "clue": {
            "en": "$10$ boys and $2$ girls leave → same",
            "zh": "男生減 $10$、女生減 $2$ 後人數相同"
           },
           "math": "x\\hlw{-10}=y\\hlw{-2}"
          }
         ]
        },
        "zh": "設課室原有 $x$ 名男生及 $y$ 名女生。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of boys and girls in the classroom respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "「$10$ 名男生及 $2$ 名女生離開後人數相同」怎樣列式？",
          "en": "How do we write “if $10$ boys and $2$ girls leave, the numbers are the same”?"
         },
         "options": [
          {
           "math": "x-10=y-2"
          },
          {
           "math": "x-10=y+2",
           "hint": {
            "zh": "女生也是「離開（leave）」課室，所以兩邊都要減去離開的人數。",
            "en": "Girls also leave the classroom, so subtract from both sides."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "(\\hl{2y})-10=y-2\n2y-y=-2+10\n\\hlg{y=8}",
        "zh": "把 $(1)$ 的 $x=2y$ 直接代入 $(2)$，再把 $y$ 移去左邊、$-10$ 移去右邊變 $+10$，解得 $y=8$。",
        "en": "Substitute $x=2y$ from $(1)$ straight into $(2)$, move $y$ left and $-10$ right as $+10$, giving $y=8$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=2(\\hl{8})\n\\hlg{x=16}",
        "zh": "把剛算出的 $y=8$ 代回 (1)，直接算出 $x=16$。",
        "en": "Put $y=8$ back into (1) to find $x=16$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求原有學生總人數（$x+y$））",
         "en": "Step 4 · Answer the final question (Find the original total number of boys and girls ($x+y$))"
        },
        "math": "x+y=16+8=24\n\\therefore \\hlg{x+y=24}",
        "zh": "核對題目最後一句要求的是「求原有學生總人數（$x+y$）」，因此最終答案是 $24$ 人。",
        "en": "Check the final sentence (Find the original total number of boys and girls ($x+y$)): the required answer is $24$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "誤當成轉移而把女生寫成 $y+2$",
        "labelEn": "Writing $y+2$ instead of $y-2$",
        "zh": "男生和女生都是離開課室，各自減少：$x-10=y-2$。",
        "en": "Both boys and girls leave, so subtract on both sides: $x-10=y-2$."
       },
       {
        "label": "移項時把 $-10$ 錯移成 $-2-10$",
        "labelEn": "Forgetting to flip $-10$ to $+10$",
        "zh": "$2y-10=y-2$ 移項得 $2y-y=-2+10=8$。",
        "en": "Transposing $-10$ gives $2y-y=-2+10=8$."
       }
      ],
      "tip": {
       "zh": "移項時把未知數聚在左邊、常數聚在右邊，跨過等號的每一項都要變號。",
       "en": "Gather unknowns on the left and constants on the right, flipping the sign of every term that crosses $=$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=16,\\ y=8$ 代回原來的兩條方程：$(1)$ 得 $16-2(8)=0$，$(2)$ 得 $16-(8)=8$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=16,\\ y=8$ into both originals: $(1)$ gives $16-2(8)=0$ and $(2)$ gives $16-(8)=8$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=16,\\ y=8$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=16,\\ y=8$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能自己寫出 $2y-10=y-2$ 的移項過程並求原有總人數嗎？",
       "en": "With the steps hidden, can you solve $2y-10=y-2$ step by step and find the original total?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c6"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=3y \\quad \\cdots (1)\nx-12=y+12 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "Alan is $3$ times Benny",
            "zh": "Alan 原有數量是 Benny 的 $3$ 倍"
           },
           "math": "x=\\hl{3y}"
          },
          {
           "clue": {
            "en": "Alan gives $12$ stamps to Benny → same",
            "zh": "Alan 少 $12$、Benny 多 $12$ 後數量相同"
           },
           "math": "x\\hlw{-12}=y\\hlw{+12}"
          }
         ]
        },
        "zh": "設 Alan 原有 $x$ 枚郵票，Benny 原有 $y$ 枚郵票。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of stamps owned by Alan and Benny respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "Alan 把 $12$ 枚郵票給 Benny 後兩人相同，右邊 Benny 應寫成甚麼？",
          "en": "When Alan gives $12$ stamps to Benny so they have the same number, what happens to Benny?"
         },
         "options": [
          {
           "math": "x-12=y+12"
          },
          {
           "math": "x-12=y",
           "hint": {
            "zh": "郵票沒有消失！Alan 減少 $12$ 枚的同時，Benny 會收到這 $12$ 枚，所以是 $y+12$。",
            "en": "The stamps don't vanish—Benny receives those $12$ stamps, giving $y+12$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "(\\hl{3y})-12=y+12\n3y-y=12+12\n2y=24\n\\hlg{y=12}",
        "zh": "把 $(1)$ 的 $x=3y$ 直接代入 $(2)$，移項將 $y$ 聚在左邊、$-12$ 移去右邊變 $+12$，得 $2y=24 \\Rightarrow y=12$。",
        "en": "Substitute $x=3y$ into $(2)$, collect $y$ on the left and move $-12$ across as $+12$, giving $2y=24 \\Rightarrow y=12$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=3(\\hl{12})\n\\hlg{x=36}",
        "zh": "把剛算出的 $y=12$ 代回 (1)，直接算出 $x=36$。",
        "en": "Put $y=12$ back into (1) to find $x=36$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求二人原有郵票總數（$x+y$））",
         "en": "Step 4 · Answer the final question (Find the total number of stamps owned by Alan and Benny ($x+y$))"
        },
        "math": "x+y=36+12=48\n\\therefore \\hlg{x+y=48}",
        "zh": "核對題目最後一句要求的是「求二人原有郵票總數（$x+y$）」，因此最終答案是 $48$ 枚。",
        "en": "Check the final sentence (Find the total number of stamps owned by Alan and Benny ($x+y$)): the required answer is $48$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "漏了 Benny 也要加 $12$（寫成 $x-12=y$）",
        "labelEn": "Forgetting $+12$ for Benny",
        "zh": "二人互相轉移是一減一加：Alan 變 $x-12$、Benny 變 $y+12$。",
        "en": "A transfer changes both sides: Alan becomes $x-12$ and Benny becomes $y+12$."
       },
       {
        "label": "答了 $y=12$ 或 $x=36$，忘了求總數 $x+y$",
        "labelEn": "Forgetting to find the total $x+y$",
        "zh": "題目最後問二人共有多少枚，須加上 $x+y=36+12=48$。",
        "en": "Finish by adding both: $x+y=36+12=48$."
       }
      ],
      "tip": {
       "zh": "凡見「A gives $k$ to B」，立刻在腦中畫雙箭咀：$A-k$ 對應 $B+k$，永不漏掉加號。",
       "en": "Whenever “A gives $k$ to B” appears, always pair $A-k$ with $B+k$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=36,\\ y=12$ 代回原來的兩條方程：$(1)$ 得 $36-3(12)=0$，$(2)$ 得 $36-(12)=24$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=36,\\ y=12$ into both originals: $(1)$ gives $36-3(12)=0$ and $(2)$ gives $36-(12)=24$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=36,\\ y=12$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=36,\\ y=12$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能解釋為何 $x-12=y+12$ 移項後會變成 $2y=24$ 嗎？",
       "en": "With the steps hidden, can you show how $3y-12=y+12$ becomes $2y=24$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c6"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=2y \\quad \\cdots (1)\ny+30=3(x-30) \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "girl is $2$ times boy",
            "zh": "女孩原有數量是男孩的 $2$ 倍"
           },
           "math": "x=\\hl{2y}"
          },
          {
           "clue": {
            "en": "girl gives $30$ to boy → boy is $3$ times girl",
            "zh": "女孩變 $x-30$、男孩變 $y+30$；此時男孩是女孩的 $3$ 倍"
           },
           "math": "y+30=3(\\hlw{x-30})"
          }
         ]
        },
        "zh": "設女孩原有 $x$ 粒糖果，男孩原有 $y$ 粒糖果。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of candies owned by the girl and the boy respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "女孩給男孩 $30$ 粒後，「男孩是女孩的 $3$ 倍」，$3$ 要乘在誰的括號外？",
          "en": "After the girl gives $30$ candies, the boy has $3$ times the girl. Which side gets multiplied by $3$?"
         },
         "options": [
          {
           "math": "y+30=3(x-30)"
          },
          {
           "math": "3(y+30)=x-30",
           "hint": {
            "zh": "轉移後「男孩較多」，所以要拿較少的女孩（$x-30$）乘以 $3$ 才等於男孩（$y+30$）。",
            "en": "Now the boy has more, so multiply the girl's new count $(x-30)$ by $3$ to equal the boy's $(y+30)$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "y+30=3(\\hl{2y}-30)\ny+30=\\hlw{6y-90}\n30+90=6y-y\n120=5y\n\\hlg{y=24}",
        "zh": "把 $(1)$ 的 $x=2y$ 代入 $(2)$，將外面的 $3$ 乘進括號兩項得 $6y-90$，再移項解得 $y=24$。",
        "en": "Substitute $x=2y$ into $(2)$, multiply $3$ into both terms to get $6y-90$, then transpose to find $y=24$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=2(\\hl{24})\n\\hlg{x=48}",
        "zh": "把剛算出的 $y=24$ 代回 (1)，直接算出 $x=48$。",
        "en": "Put $y=24$ back into (1) to find $x=48$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求二人共有糖果總數（$x+y$））",
         "en": "Step 4 · Answer the final question (Find the total number of candies ($x+y$))"
        },
        "math": "x+y=48+24=72\n\\therefore \\hlg{x+y=72}",
        "zh": "核對題目最後一句要求的是「求二人共有糖果總數（$x+y$）」，因此最終答案是 $72$ 粒。",
        "en": "Check the final sentence (Find the total number of candies ($x+y$)): the required answer is $72$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把 $3$ 乘錯在男孩一邊",
        "labelEn": "Multiplying the boy's side by $3$",
        "zh": "男孩是女孩的 $3$ 倍 → 男孩（新）$=$ $3\\times$ 女孩（新），即 $y+30=3(x-30)$。",
        "en": "Boy (new) $= 3 \\times$ Girl (new), so $y+30=3(x-30)$."
       },
       {
        "label": "展開 $3(2y-30)$ 時漏乘 $-30$",
        "labelEn": "Forgetting to multiply $-30$ by $3$",
        "zh": "括號外面的 $3$ 要乘進兩項：$3(2y-30)=6y-90$，不是 $6y-30$。",
        "en": "Multiply both terms inside: $3(2y-30)=6y-90$, not $6y-30$."
       }
      ],
      "tip": {
       "zh": "「轉移＋倍數」兩步拆開寫：先寫新數量 $(x-30)$ 與 $(y+30)$，再判斷把 $3$ 乘在較少那一方的括號外。",
       "en": "For transfer + multiple problems, write both updated amounts in brackets first, then multiply the smaller side by $3$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=48,\\ y=24$ 代回原來的兩條方程：$(1)$ 得 $48-2(24)=0$，$(2)$ 得 $-3(48)+24=-120$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=48,\\ y=24$ into both originals: $(1)$ gives $48-2(24)=0$ and $(2)$ gives $-3(48)+24=-120$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=48,\\ y=24$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=48,\\ y=24$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能完整寫出 $y+30=3(2y-30)$ 展開與移項的每一行嗎？",
       "en": "With the steps hidden, can you expand and solve $y+30=3(2y-30)$ without skipping a line?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c6"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=4y \\quad \\cdots (1)\nx-10=2(y+10) \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "Kevin is $4$ times Jessie",
            "zh": "Kevin 原有數量是 Jessie 的 $4$ 倍"
           },
           "math": "x=\\hl{4y}"
          },
          {
           "clue": {
            "en": "Kevin gives $10$ to Jessie → Kevin is $2$ times Jessie",
            "zh": "Kevin 變 $x-10$、Jessie 變 $y+10$；Kevin 仍是 Jessie 的 $2$ 倍"
           },
           "math": "x-10=2(\\hlw{y+10})"
          }
         ]
        },
        "zh": "設 Kevin 原有 $x$ 本小說，Jessie 原有 $y$ 本小說。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of fiction books owned by Kevin and Jessie respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "Kevin 給 Jessie $10$ 本後，Kevin 仍是 Jessie 的 $2$ 倍，哪條方程正確？",
          "en": "After Kevin gives $10$ books to Jessie, Kevin still has $2$ times Jessie. Which equation is right?"
         },
         "options": [
          {
           "math": "x-10=2(y+10)"
          },
          {
           "math": "x-10=2y+10",
           "hint": {
            "zh": "Jessie 新數量是整個 $(y+10)$，倍數 $2$ 必須乘在括號外：$2(y+10)=2y+20$！",
            "en": "Jessie's new count is the whole $(y+10)$, so $2$ multiplies both terms: $2(y+10)$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "(\\hl{4y})-10=2(y+10)\n4y-10=\\hlw{2y+20}\n4y-2y=20+10\n2y=30\n\\hlg{y=15}",
        "zh": "把 $(1)$ 的 $x=4y$ 代入 $(2)$，右邊展開 $2(y+10)=2y+20$，移項合併得 $2y=30 \\Rightarrow y=15$。",
        "en": "Substitute $x=4y$ into $(2)$, expand $2(y+10)=2y+20$, and collect like terms to get $2y=30 \\Rightarrow y=15$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=4(\\hl{15})\n\\hlg{x=60}",
        "zh": "把剛算出的 $y=15$ 代回 (1)，直接算出 $x=60$。",
        "en": "Put $y=15$ back into (1) to find $x=60$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求二人共有小說總數（$x+y$））",
         "en": "Step 4 · Answer the final question (Find the total number of fiction books ($x+y$))"
        },
        "math": "x+y=60+15=75\n\\therefore \\hlg{x+y=75}",
        "zh": "核對題目最後一句要求的是「求二人共有小說總數（$x+y$）」，因此最終答案是 $75$ 本。",
        "en": "Check the final sentence (Find the total number of fiction books ($x+y$)): the required answer is $75$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "漏括號寫成 $2y+10$ 而非 $2(y+10)$",
        "labelEn": "Omitting brackets around $y+10$",
        "zh": "給出 $10$ 本後 Jessie 有 $(y+10)$ 本，它的 $2$ 倍是 $2(y+10)=2y+20$。",
        "en": "Jessie's new total is $(y+10)$, so twice it is $2(y+10)=2y+20$."
       },
       {
        "label": "算完 $y=15$ 後漏求總數 $x+y$",
        "labelEn": "Forgetting the final total $x+y$",
        "zh": "記得代回得 $x=60$，最後寫出總數 $x+y=75$。",
        "en": "Find $x=60$ and finish with the total $x+y=75$."
       }
      ],
      "tip": {
       "zh": "每次把「新數量」放進倍數關係時，先給新數量戴上括號 $(y+10)$，就絕不會漏乘常數。",
       "en": "Always put updated amounts inside brackets like $(y+10)$ before applying any multiplier."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=60,\\ y=15$ 代回原來的兩條方程：$(1)$ 得 $60-4(15)=0$，$(2)$ 得 $60-2(15)=30$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=60,\\ y=15$ into both originals: $(1)$ gives $60-4(15)=0$ and $(2)$ gives $60-2(15)=30$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=60,\\ y=15$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=60,\\ y=15$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能獨立展開 $4y-10=2(y+10)$ 並算出二人總數嗎？",
       "en": "With the steps hidden, can you expand $4y-10=2(y+10)$ and find the total yourself?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c7"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩組比例轉成方程",
         "en": "Step 1 · Define unknowns and convert both ratios"
        },
        "math": "\\frac{x}{y}=\\frac{8}{7} \\Rightarrow 7x=8y \\quad \\cdots (1)\n\\frac{x-6}{y-4}=\\frac{10}{9} \\Rightarrow 9(x-6)=10(y-4) \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "ratio of men to women is $8 : 7$",
            "zh": "原有人數比 $x:y=8:7$，交叉相乘消分母"
           },
           "math": "7x=8y"
          },
          {
           "clue": {
            "en": "$6$ men and $4$ women leave → ratio $10 : 9$",
            "zh": "各自減去離開人數後，$(x-6):(y-4)=10:9$"
           },
           "math": "9(x-6)=10(y-4)"
          }
         ]
        },
        "zh": "設派對原有 $x$ 名男士及 $y$ 名女士。先把兩組比例寫成分數形式，再交叉相乘去掉分母，列出 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of men and women in the party respectively. Write both ratios as fractions first, then cross-multiply to get $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "比例 $\\frac{x-6}{y-4}=\\frac{10}{9}$ 交叉相乘後，會變成哪條整數方程？",
          "en": "Cross-multiplying $\\frac{x-6}{y-4}=\\frac{10}{9}$ gives which integer equation?"
         },
         "options": [
          {
           "math": "9(x-6)=10(y-4)"
          },
          {
           "math": "10(x-6)=9(y-4)",
           "hint": {
            "zh": "交叉相乘是「左上×右下 ＝ 右上×左下」：$(x-6)$ 要乘對角的 $9$，不是 $10$！",
            "en": "Cross-multiply diagonally: $(x-6)$ multiplies $9$, while $(y-4)$ multiplies $10$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 展開括號，整理成標準形式",
         "en": "Step 2 · Expand brackets into standard form"
        },
        "math": "7x-8y=0 \\quad \\cdots (3)\n9x-10y=14 \\quad \\cdots (4)",
        "zh": "把 $(1)$ 移項得 $(3)$；展開 $(2)$ 的括號並把未知數移去左邊、常數移去右邊得 $(4)$。",
        "en": "Rearrange $(1)$ to $(3)$, and expand $(2)$ to collect unknowns on the left and constants on the right as $(4)$."
       },
       {
        "title": {
         "zh": "第 3 步 · 對齊 $y$ 係數並直式相減求 $x$",
         "en": "Step 3 · Match $y$ and subtract vertically for $x$"
        },
        "math": "(3)\\times 5:\\ 35x-40y=0\n(4)\\times 4:\\ 36x-40y=56\n\\hlg{x=56}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $y$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(4)\\times 4",
           "cols": [
            "36x",
            "-\\xc{40y}",
            "=",
            "56"
           ]
          },
          {
           "op": "-",
           "tag": "(3)\\times 5",
           "cols": [
            "35x",
            "-\\xc{40y}",
            "=",
            "0"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{x}",
           "",
           "=",
           "\\hlg{56}"
          ]
         }
        },
        "zh": "把 $(3)$ 同乘 $5$、$(4)$ 同乘 $4$ 對齊 $y$ 的係數，再用直式相減消去 $y$，解得 $x=56$。",
        "en": "Scale $(3)\\times 5$ and $(4)\\times 4$ to align $y$, then subtract vertically to find $x=56$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 寫回題目要求（求原有男士人數（$x$））",
         "en": "Step 4 · Answer the final question (Find the original number of men ($x$))"
        },
        "math": "\\therefore \\hlg{x=56}",
        "zh": "題目所求正是 $x$，所以答案為 $56$ 人。",
        "en": "The question asks for $x$, so the answer is $56$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "交叉相乘時上下配錯（寫成 $8x=7y$）",
        "labelEn": "Multiplying across instead of diagonally ($8x=7y$)",
        "zh": "把比寫成分數 $\\frac{x}{y}=\\frac{8}{7}$ 再打交叉相乘，永遠是 $7x=8y$。",
        "en": "Write the ratio as fractions $\\frac{x}{y}=\\frac{8}{7}$ first, then cross-multiply to get $7x=8y$."
       },
       {
        "label": "展開 $9(x-6)=10(y-4)$ 時移項出錯",
        "labelEn": "Sign error when rearranging $9x-54=10y-40$",
        "zh": "$-54$ 移去右邊變 $+54$，得 $9x-10y=-40+54=14$。",
        "en": "Moving $-54$ to the right gives $9x-10y=-40+54=14$."
       }
      ],
      "tip": {
       "zh": "遇到比例題一律先寫成分數 $\\frac{x}{y}=\\frac{8}{7}$，再「打交叉」相乘化成整數方程，最不容易寫反。",
       "en": "Always write ratios as fractions first, then cross-multiply so you never swap the coefficients."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=56,\\ y=49$ 代回原來的兩條方程：$(1)$ 得 $7(56)-8(49)=0$，$(2)$ 得 $9(56)-10(49)=14$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=56,\\ y=49$ into both originals: $(1)$ gives $7(56)-8(49)=0$ and $(2)$ gives $9(56)-10(49)=14$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=56,\\ y=49$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能先把兩條比例化成 $7x-8y=0$ 與 $9x-10y=14$，再用直式消元嗎？",
       "en": "With the steps hidden, can you convert both ratios into standard equations and eliminate $y$?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c6",
       "ws02-c7"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩組比例轉成方程",
         "en": "Step 1 · Define unknowns and convert both ratios"
        },
        "math": "\\frac{x}{y}=\\frac{5}{3} \\Rightarrow 3x=5y \\quad \\cdots (1)\n\\frac{x-21}{y+21}=\\frac{7}{9} \\Rightarrow 9(x-21)=7(y+21) \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "ratio of Anthony to Heidi is $5 : 3$",
            "zh": "原有貼紙比 $x:y=5:3$，交叉相乘"
           },
           "math": "3x=5y"
          },
          {
           "clue": {
            "en": "Anthony gives $21$ to Heidi → ratio $7 : 9$",
            "zh": "一減一加後 $(x-21):(y+21)=7:9$"
           },
           "math": "9(x-21)=7(y+21)"
          }
         ]
        },
        "zh": "設 Anthony 原有 $x$ 張貼紙，Heidi 原有 $y$ 張貼紙。先把兩組比例寫成分數形式，再交叉相乘去掉分母，列出 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of stickers owned by Anthony and Heidi respectively. Write both ratios as fractions first, then cross-multiply to get $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "Anthony 給 Heidi $21$ 張後，新比例的分子分母應該怎樣寫？",
          "en": "After Anthony gives $21$ stickers to Heidi, how do we write the new ratio?"
         },
         "options": [
          {
           "math": "\\frac{x-21}{y+21}=\\frac{7}{9}"
          },
          {
           "math": "\\frac{x-21}{y-21}=\\frac{7}{9}",
           "hint": {
            "zh": "是 Anthony 給 Heidi（互相轉移），Heidi 收到 $21$ 張應是 $y+21$！",
            "en": "Anthony transfers them to Heidi, so Heidi gains $21$: $y+21$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 展開括號，整理成標準形式",
         "en": "Step 2 · Expand brackets into standard form"
        },
        "math": "3x-5y=0 \\quad \\cdots (3)\n9x-7y=336 \\quad \\cdots (4)",
        "zh": "把 $(1)$ 移項得 $(3)$；展開 $(2)$ 的括號並把未知數移去左邊、常數移去右邊得 $(4)$。",
        "en": "Rearrange $(1)$ to $(3)$, and expand $(2)$ to collect unknowns on the left and constants on the right as $(4)$."
       },
       {
        "title": {
         "zh": "第 3 步 · 對齊 $y$ 係數並直式相減求 $x$",
         "en": "Step 3 · Match $y$ and subtract vertically for $x$"
        },
        "math": "(3)\\times 7:\\ 21x-35y=0\n(4)\\times 5:\\ 45x-35y=1680\n24x=1680\n\\hlg{x=70}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $y$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(4)\\times 5",
           "cols": [
            "45x",
            "-\\xc{35y}",
            "=",
            "1680"
           ]
          },
          {
           "op": "-",
           "tag": "(3)\\times 7",
           "cols": [
            "21x",
            "-\\xc{35y}",
            "=",
            "0"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{24x}",
           "",
           "=",
           "\\hlg{1680}"
          ]
         }
        },
        "zh": "把 $(3)$ 同乘 $7$、$(4)$ 同乘 $5$ 對齊 $y$ 的係數，再用直式相減消去 $y$，解得 $x=70$。",
        "en": "Scale $(3)\\times 7$ and $(4)\\times 5$ to align $y$, then subtract vertically to find $x=70$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 寫回題目要求（求 Anthony 原有貼紙數量（$x$））",
         "en": "Step 4 · Answer the final question (Find the original number of stickers owned by Anthony ($x$))"
        },
        "math": "\\therefore \\hlg{x=70}",
        "zh": "題目所求正是 $x$，所以答案為 $70$ 張。",
        "en": "The question asks for $x$, so the answer is $70$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "轉移時把 Heidi 誤寫成 $y-21$",
        "labelEn": "Writing $y-21$ instead of $y+21$",
        "zh": "Anthony 給出 $21$ 張（$x-21$），Heidi 收到 $21$ 張（$y+21$）。",
        "en": "Anthony loses $21$ ($x-21$) while Heidi gains $21$ ($y+21$)."
       },
       {
        "label": "展開 $9(x-21)=7(y+21)$ 時算錯 $189+147$",
        "labelEn": "Arithmetic slip in $147+189=336$",
        "zh": "$-189$ 移去右邊變 $+189$，與 $+147$ 相加得 $336$，不可相減。",
        "en": "Moving $-189$ across adds to $147$, giving $9x-7y=336$."
       }
      ],
      "tip": {
       "zh": "「比例＋轉移」題先寫分數 $\\frac{x-21}{y+21}=\\frac{7}{9}$，交叉相乘並整理成 $ax+by=c$，再直式消元就很工整。",
       "en": "Write the transferred ratio as a fraction, cross-multiply into $ax+by=c$, then eliminate cleanly."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=70,\\ y=42$ 代回原來的兩條方程：$(1)$ 得 $3(70)-5(42)=0$，$(2)$ 得 $9(70)-7(42)=336$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=70,\\ y=42$ into both originals: $(1)$ gives $3(70)-5(42)=0$ and $(2)$ gives $9(70)-7(42)=336$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=70,\\ y=42$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能把 $9(x-21)=7(y+21)$ 整理成 $9x-7y=336$ 並消去 $y$ 嗎？",
       "en": "With the steps hidden, can you rearrange $9(x-21)=7(y+21)$ into $9x-7y=336$ and eliminate $y$?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=84 \\quad \\cdots (1)\nx-y=12 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "$84$ helpers in total",
            "zh": "男女助手總人數為 $84$"
           },
           "math": "x+y=84"
          },
          {
           "clue": {
            "en": "$4$ equal groups, each group has $3$ more males than females",
            "zh": "4 組每組男比女多 $3$ 人 → 全部男比女多 $4\\times 3=12$ 人"
           },
           "math": "x-y=\\hl{4\\times 3}=12"
          }
         ]
        },
        "zh": "設全部男助手有 $x$ 人，全部女助手有 $y$ 人。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the total numbers of male and female helpers respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "共有 $4$ 組，每組男比女多 $3$ 人。全部男助手比全部女助手多幾人？",
          "en": "There are $4$ groups, each with $3$ more males than females. How many more males than females are there in total?"
         },
         "options": [
          {
           "zh": "$4\\times 3=12$ 人，所以 $x-y=12$",
           "en": "$4\\times 3=12$, so $x-y=12$"
          },
          {
           "zh": "也是多 $3$ 人，寫 $x-y=3$",
           "en": "Still $3$, so $x-y=3$",
           "hint": {
            "zh": "$3$ 人只是「每一組（in each group）」的差，共有 $4$ 組，總差要乘 $4$！",
            "en": "$3$ is the difference in each group; across $4$ groups the total difference is $4\\times 3=12$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 直式相減消去 $x$，求出 $y$",
         "en": "Step 2 · Subtract vertically to eliminate $x$ and find $y$"
        },
        "math": "(1) - (2):\n2y=72\n\\hlg{y=36}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $x$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
         },
         "rows": [
          {
           "tag": "(1)",
           "cols": [
            "\\xc{x}",
            "+y",
            "=",
            "84"
           ]
          },
          {
           "op": "-",
           "tag": "(2)",
           "cols": [
            "\\xc{x}",
            "-y",
            "=",
            "12"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "",
           "\\hlg{2y}",
           "=",
           "\\hlg{72}"
          ]
         }
        },
        "zh": "計算 $(1) - (2)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $y=36$。",
        "en": "Compute $(1) - (2)$: the $x$-terms cancel, leaving an equation in $y$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $y=36$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 回應題目最後一句（求全部女助手人數（$y$））",
         "en": "Step 3 · Answer the final question (Find the number of female helpers ($y$))"
        },
        "math": "\\therefore \\hlg{y=36}",
        "zh": "核對題目最後一句要求的是「求全部女助手人數（$y$）」，因此最終答案是 $36$ 人。",
        "en": "Check the final sentence (Find the number of female helpers ($y$)): the required answer is $36$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "漏乘組數 $4$，錯寫成 $x-y=3$",
        "labelEn": "Forgetting to multiply $3$ by $4$ groups",
        "zh": "「in each group」指單組差 $3$ 人，4 組合計男比女多 $4\\times 3=12$ 人。",
        "en": "“In each group” is $3$, so across $4$ groups the total difference is $12$."
       },
       {
        "label": "兩式相減時寫成 $y-y=0$（忘記 $y-(-y)=2y$）",
        "labelEn": "Computing $y-(-y)$ as $0$ instead of $2y$",
        "zh": "相減消去 $x$ 時，左邊 $y-(-y)=y+y=2y$！",
        "en": "Subtracting $(2)$ from $(1)$ gives $y-(-y)=2y$, not $0$."
       }
      ],
      "tip": {
       "zh": "分組題最易踩的坑是把「每組差」當「總差」：先確認 $x, y$ 是「全場總數」，差就要乘上組數！",
       "en": "If $x$ and $y$ are total counts, multiply the per-group difference by the number of groups."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=48,\\ y=36$ 代回原來的兩條方程：$(1)$ 得 $48+36=84$，$(2)$ 得 $48-(36)=12$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=48,\\ y=36$ into both originals: $(1)$ gives $48+36=84$ and $(2)$ gives $48-(36)=12$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=48,\\ y=36$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能不看提示就解釋為何 $x-y=12$ 以及為何 $(1)-(2)$ 得出 $2y=72$ 嗎？",
       "en": "With the steps hidden, can you explain both $x-y=12$ and why $(1)-(2)$ gives $2y=72$?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c5"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=140 \\quad \\cdots (1)\nx-y=30 \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "$140$ guards in total",
            "zh": "男女保安總人數為 $140$"
           },
           "math": "x+y=140"
          },
          {
           "clue": {
            "en": "$5$ zones, each has $6$ less females than males",
            "zh": "每區女比男少 $6$ 人（即男多 $6$ 人）→ 5 區共多 $5\\times 6=30$ 人"
           },
           "math": "x-y=\\hl{5\\times 6}=30"
          }
         ]
        },
        "zh": "設全場男保安有 $x$ 人，女保安有 $y$ 人。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the total numbers of male and female guards respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 2 步 · 直式相加消去 $y$，求出 $x$",
         "en": "Step 2 · Add vertically to eliminate $y$ and find $x$"
        },
        "math": "(1) + (2):\n2x=170\n\\hlg{x=85}",
        "align": {
         "caption": {
          "zh": "直式對齊（異號相加，消去 $y$）",
          "en": "Column-aligned elimination (opposite signs add to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(1)",
           "cols": [
            "x",
            "+\\xc{y}",
            "=",
            "140"
           ]
          },
          {
           "op": "+",
           "tag": "(2)",
           "cols": [
            "x",
            "-\\xc{y}",
            "=",
            "30"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{2x}",
           "",
           "=",
           "\\hlg{170}"
          ]
         }
        },
        "zh": "計算 $(1) + (2)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=85$。",
        "en": "Compute $(1) + (2)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=85$.",
        "marking": "(1M)",
        "think": {
         "prompt": {
          "zh": "面對 $x+y=140$ 與 $x-y=30$，想直接求出男保安 $x$，應該把兩式相加還是相減？",
          "en": "Given $x+y=140$ and $x-y=30$, should we add or subtract to find $x$ directly?"
         },
         "options": [
          {
           "zh": "相加：$(1)+(2)$，讓 $+y$ 與 $-y$ 異號抵消",
           "en": "Add $(1)+(2)$ so $+y$ and $-y$ cancel"
          },
          {
           "zh": "相減：$(1)-(2)$",
           "en": "Subtract $(1)-(2)$",
           "hint": {
            "zh": "相減會消去 $x$、先得出 $y$；要直出 $x$，把異號的 $+y$ 與 $-y$ 相加最快！",
            "en": "Subtracting eliminates $x$ first; adding cancels $+y$ and $-y$ to give $x$ straight away!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 3 步 · 回應題目最後一句（求全部男保安人數（$x$））",
         "en": "Step 3 · Answer the final question (Find the number of male guards ($x$))"
        },
        "math": "\\therefore \\hlg{x=85}",
        "zh": "核對題目最後一句要求的是「求全部男保安人數（$x$）」，因此最終答案是 $85$ 人。",
        "en": "Check the final sentence (Find the number of male guards ($x$)): the required answer is $85$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "漏乘區數 $5$，錯寫成 $x-y=6$",
        "labelEn": "Forgetting to multiply $6$ by $5$ zones",
        "zh": "每個區女比男少 $6$ 人，5 個區合計總差是 $5\\times 6=30$ 人。",
        "en": "Each of the $5$ zones differs by $6$, so the total difference is $5\\times 6=30$."
       },
       {
        "label": "誤把「女比男少」寫成 $y-x=30$",
        "labelEn": "Writing $y-x=30$ instead of $x-y=30$",
        "zh": "女比男少即「男較多」，所以正差是 $x-y=30$。",
        "en": "Fewer females than males means males are more, so $x-y=30$."
       }
      ],
      "tip": {
       "zh": "和差方程 $x+y=S$、$x-y=D$ 是黃金組合：兩式相加立刻得 $2x=S+D$，相減立刻得 $2y=S-D$！",
       "en": "For sum-and-difference pairs ($x+y=S$, $x-y=D$), adding gives $2x=S+D$ and subtracting gives $2y=S-D$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=85,\\ y=55$ 代回原來的兩條方程：$(1)$ 得 $85+55=140$，$(2)$ 得 $85-(55)=30$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=85,\\ y=55$ into both originals: $(1)$ gives $85+55=140$ and $(2)$ gives $85-(55)=30$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=85,\\ y=55$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能一眼看出 $x-y=30$ 並用兩式相加直接算出男保安人數嗎？",
       "en": "With the steps hidden, can you form $x-y=30$ and add the equations to get $x$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c7"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=990 \\quad \\cdots (1)\nx=1.2y \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "$990$ members in total",
            "zh": "男女會員總數為 $990$"
           },
           "math": "x+y=990"
          },
          {
           "clue": {
            "en": "male members is $20\\%$ more than female members",
            "zh": "男比女多 $20\\%$（以女 $y$ 為基準 $100\\%$）"
           },
           "math": "x=(1+20\\%)y=\\hl{1.2y}"
          }
         ]
        },
        "zh": "設男會員有 $x$ 人，女會員有 $y$ 人。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the numbers of male and female members respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "「男會員 $x$ 比女會員 $y$ 多 $20\\%$」應該寫成哪條方程？",
          "en": "How do we translate “male members $x$ is $20\\%$ more than female members $y$”?"
         },
         "options": [
          {
           "math": "x=1.2y"
          },
          {
           "math": "x=0.2y",
           "hint": {
            "zh": "$0.2y$ 只是「多出來的部分」，還要加上原有的 $100\\%$（即 $1y$），合起來是 $1.2y$！",
            "en": "$0.2y$ is only the extra part—add the original $100\\%$ ($y$) to get $1.2y$!"
           }
          },
          {
           "math": "y=0.8x",
           "hint": {
            "zh": "「than」後面是女會員 $y$，基準是 $y$ 不是 $x$，所以要寫成 $x=1.2y$。",
            "en": "The reference after “than” is $y$, not $x$, so write $x=1.2y$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "(\\hl{1.2y})+y=990\n2.2y=990\n\\hlg{y=450}",
        "zh": "把 (2) 的 $x=1.2y$ 加上括號代入 (1)，展開並合併同類項，解出 $y=450$。",
        "en": "Substitute $x=1.2y$ from (2) into (1) with brackets. Expand, then collect like terms to get $y=450$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (2) 求 $x$",
         "en": "Step 3 · Substitute back into (2) for $x$"
        },
        "math": "x=1.2(\\hl{450})\n\\hlg{x=540}",
        "zh": "把剛算出的 $y=450$ 代回 (2)，直接算出 $x=540$。",
        "en": "Put $y=450$ back into (2) to find $x=540$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求男女會員人數之差（$x-y$））",
         "en": "Step 4 · Answer the final question (Find the difference between male and female members ($x-y$))"
        },
        "math": "x-y=540-450=90\n\\therefore \\hlg{x-y=90}",
        "zh": "核對題目最後一句要求的是「求男女會員人數之差（$x-y$）」，因此最終答案是 $90$ 人。",
        "en": "Check the final sentence (Find the difference between male and female members ($x-y$)): the required answer is $90$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把「多 $20\\%$」誤寫成 $x=0.2y$ 或 $x=y+20$",
        "labelEn": "Writing $x=0.2y$ or $x=y+20$",
        "zh": "多 $20\\%$ 是原有 $y$ 的 $(1+20\\%)=1.2$ 倍，即 $x=1.2y$。",
        "en": "$20\\%$ more than $y$ means $(1+20\\%)y=1.2y$."
       },
       {
        "label": "求得 $y=450$ 或 $x=540$ 就停止，忘了求差 $x-y$",
        "labelEn": "Stopping before computing $x-y$",
        "zh": "最後一句要求「difference」，還須計出 $x-y=540-450=90$。",
        "en": "Re-read the question: it asks for the difference $x-y=540-450=90$."
       }
      ],
      "tip": {
       "zh": "代入後得 $1.2y+y=2.2y$（記得單獨的 $y$ 是 $1y$），算出 $y=450$ 後，差剛好就是多出的 $0.2y=90$！",
       "en": "Notice $1.2y+y=2.2y$, and once $y=450$, the difference is simply the extra $20\\%$: $0.2(450)=90$!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=540,\\ y=450$ 代回原來的兩條方程：$(1)$ 得 $540+450=990$，$(2)$ 得 $540-1.2(450)=0$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=540,\\ y=450$ into both originals: $(1)$ gives $540+450=990$ and $(2)$ gives $540-1.2(450)=0$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=540,\\ y=450$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=540,\\ y=450$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能寫出 $x=1.2y$、合併 $1.2y+y=2.2y$ 並算出人數之差嗎？",
       "en": "With the steps hidden, can you write $x=1.2y$, simplify $1.2y+y=2.2y$, and find $x-y$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c7"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x+y=154 \\quad \\cdots (1)\nx=0.75y \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "$154$ magazines and comic books in total",
            "zh": "雜誌與漫畫共 $154$ 本"
           },
           "math": "x+y=154"
          },
          {
           "clue": {
            "en": "magazines is $25\\%$ less than comic books",
            "zh": "雜誌比漫畫少 $25\\%$ → 留下漫畫的 $1-25\\%=75\\%$"
           },
           "math": "x=(1-25\\%)y=\\hl{0.75y}"
          }
         ]
        },
        "zh": "設雜誌有 $x$ 本，漫畫有 $y$ 本。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the numbers of magazines and comic books respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "「雜誌 $x$ 比漫畫 $y$ 少 $25\\%$」，哪條方程正確？",
          "en": "“Magazines $x$ is $25\\%$ less than comic books $y$”—which equation is right?"
         },
         "options": [
          {
           "math": "x=0.75y"
          },
          {
           "math": "x=0.25y",
           "hint": {
            "zh": "「少 $25\\%$」代表從 $100\\%$ 扣走 $25\\%$，剩下的是 $75\\%$（即 $0.75y$）！",
            "en": "“$25\\%$ less” removes $25\\%$ from $100\\%$, leaving $75\\%$ ($0.75y$)!"
           }
          },
          {
           "math": "y=1.25x",
           "hint": {
            "zh": "「than」後面是漫畫 $y$，所以要以 $y$ 為基準寫 $x=(1-25\\%)y=0.75y$。",
            "en": "The reference after “than” is $y$, so write $x=0.75y$."
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "(\\hl{0.75y})+y=154\n1.75y=154\n\\hlg{y=88}",
        "zh": "把 (2) 的 $x=0.75y$ 加上括號代入 (1)，展開並合併同類項，解出 $y=88$。",
        "en": "Substitute $x=0.75y$ from (2) into (1) with brackets. Expand, then collect like terms to get $y=88$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (2) 求 $x$",
         "en": "Step 3 · Substitute back into (2) for $x$"
        },
        "math": "x=0.75(\\hl{88})\n\\hlg{x=66}",
        "zh": "把剛算出的 $y=88$ 代回 (2)，直接算出 $x=66$。",
        "en": "Put $y=88$ back into (2) to find $x=66$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求漫畫與雜誌數量之差（$y-x$））",
         "en": "Step 4 · Answer the final question (Find the difference between comic books and magazines ($y-x$))"
        },
        "math": "y-x=88-66=22\n\\therefore \\hlg{y-x=22}",
        "zh": "核對題目最後一句要求的是「求漫畫與雜誌數量之差（$y-x$）」，因此最終答案是 $22$ 本。",
        "en": "Check the final sentence (Find the difference between comic books and magazines ($y-x$)): the required answer is $22$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把「少 $25\\%$」錯寫成 $x=0.25y$",
        "labelEn": "Writing $x=0.25y$ instead of $0.75y$",
        "zh": "少 $25\\%$ 剩下 $1-0.25=0.75$ 倍，不是 $0.25$ 倍。",
        "en": "$25\\%$ less leaves $1-0.25=0.75$ of $y$, not $0.25y$."
       },
       {
        "label": "誤寫成 $x-y$ 得到負數",
        "labelEn": "Computing $x-y$ instead of $y-x$",
        "zh": "漫畫 $y=88$ 比雜誌 $x=66$ 多，數量之差是正數 $y-x=22$。",
        "en": "Comic books ($88$) outnumber magazines ($66$), so the difference is $y-x=22$."
       }
      ],
      "tip": {
       "zh": "看到「less than」，先算 $100\\%-r\\%$；這題 $0.75y+y=1.75y$，算出 $y=88$ 後再用 $y-x$ 求正差。",
       "en": "For “$r\\%$ less than”, compute $100\\%-r\\%$ first; then combine $0.75y+y=1.75y$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=66,\\ y=88$ 代回原來的兩條方程：$(1)$ 得 $66+88=154$，$(2)$ 得 $66-0.75(88)=0$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=66,\\ y=88$ into both originals: $(1)$ gives $66+88=154$ and $(2)$ gives $66-0.75(88)=0$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=66,\\ y=88$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=66,\\ y=88$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能獨立列出 $x=0.75y$ 並算出 $1.75y=154$ 嗎？",
       "en": "With the steps hidden, can you write $x=0.75y$ and solve $1.75y=154$ yourself?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c7"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=1.5y \\quad \\cdots (1)\ny=1.5(x-25) \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "male is $50\\%$ more than female",
            "zh": "原有：男比女多 $50\\%$（基準為女 $y$）"
           },
           "math": "x=\\hl{1.5y}"
          },
          {
           "clue": {
            "en": "$25$ males get off → female is $50\\%$ more than male",
            "zh": "25 名男下車後，女比男多 $50\\%$（基準變了男 $x-25$！）"
           },
           "math": "y=1.5(\\hlw{x-25})"
          }
         ]
        },
        "zh": "設電車上原有男乘客 $x$ 人，女乘客 $y$ 人。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of male and female passengers on the tram respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "第二句「女乘客比（剩餘）男乘客多 $50\\%$」，$1.5$ 要乘在哪一邊？",
          "en": "In the second sentence, “female is $50\\%$ more than male”, which side is multiplied by $1.5$?"
         },
         "options": [
          {
           "math": "y=1.5(x-25)"
          },
          {
           "math": "x-25=1.5y",
           "hint": {
            "zh": "看「than」後面是「male passengers」（$x-25$），所以 $x-25$ 才是基準，要乘 $1.5$！",
            "en": "After “than” is male passengers ($x-25$), so $x-25$ is the reference multiplied by $1.5$!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "y=1.5(\\hl{1.5y}-25)\ny=\\hlw{2.25y-37.5}\n37.5=2.25y-y\n1.25y=37.5\n\\hlg{y=30}",
        "zh": "把 $(1)$ 的 $x=1.5y$ 代入 $(2)$，將 $1.5$ 乘進括號兩項得 $2.25y-37.5$，移項合併得 $1.25y=37.5 \\Rightarrow y=30$。",
        "en": "Substitute $x=1.5y$ into $(2)$, expand $1.5(1.5y-25)=2.25y-37.5$, then collect like terms to get $1.25y=37.5 \\Rightarrow y=30$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 回應題目最後一句（求女乘客人數（$y$））",
         "en": "Step 3 · Answer the final question (Find the number of female passengers ($y$))"
        },
        "math": "\\therefore \\hlg{y=30}",
        "zh": "核對題目最後一句要求的是「求女乘客人數（$y$）」，因此最終答案是 $30$ 人。",
        "en": "Check the final sentence (Find the number of female passengers ($y$)): the required answer is $30$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "前後兩句沒察覺比較基準對調了",
        "labelEn": "Missing that the percentage reference swapped",
        "zh": "第一句以女 $y$ 為基準（$x=1.5y$），第二句以新男數 $x-25$ 為基準（$y=1.5(x-25)$）。",
        "en": "Sentence 1 uses $y$ as reference ($x=1.5y$); sentence 2 swaps to $x-25$ ($y=1.5(x-25)$)."
       },
       {
        "label": "展開 $1.5(1.5y-25)$ 時算錯 $1.5\\times 1.5=2.25$",
        "labelEn": "Miscalculating $1.5\\times 1.5$",
        "zh": "$1.5\\times 1.5=2.25$ 且 $1.5\\times 25=37.5$，得 $y=2.25y-37.5 \\Rightarrow 1.25y=37.5$。",
        "en": "$1.5\\times 1.5=2.25$ and $1.5\\times 25=37.5$, giving $1.25y=37.5$."
       }
      ],
      "tip": {
       "zh": "DSE 必考「雙 $r\\%$ 互換基準」題：每次看到「than」就圈出後面那個人，把 $(1+r\\%)$ 乘在圈內就萬無一失！",
       "en": "Classic DSE “swapped reference” problem: always circle whoever comes after “than” and multiply them by $(1+r\\%)$."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=45,\\ y=30$ 代回原來的兩條方程：$(1)$ 得 $45-1.5(30)=0$，$(2)$ 得 $-1.5(45)+30=-37.5$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=45,\\ y=30$ into both originals: $(1)$ gives $45-1.5(30)=0$ and $(2)$ gives $-1.5(45)+30=-37.5$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=45,\\ y=30$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=45,\\ y=30$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能準確寫出兩句不同基準的方程，並展開 $y=1.5(1.5y-25)$ 嗎？",
       "en": "With the steps hidden, can you write both swapped-reference equations and solve $y=1.5(1.5y-25)$?"
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
      "concepts": [
       "ws02-c2",
       "ws02-c7"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 設未知數，把兩句條件寫成方程",
         "en": "Step 1 · Define unknowns and form two equations"
        },
        "math": "x=1.2y \\quad \\cdots (1)\ny+22=1.2x \\quad \\cdots (2)",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "teachers is $20\\%$ more than students",
            "zh": "原有：老師比學生多 $20\\%$（基準為學生 $y$）"
           },
           "math": "x=\\hl{1.2y}"
          },
          {
           "clue": {
            "en": "$22$ more students enter → students is $20\\%$ more than teachers",
            "zh": "加 $22$ 名學生後，學生比老師多 $20\\%$（基準為老師 $x$）"
           },
           "math": "y\\hlw{+22}=1.2x"
          }
         ]
        },
        "zh": "設禮堂內原有老師 $x$ 人，學生 $y$ 人。按照上面對照表把題目的兩句條件寫成方程 $(1)$ 與 $(2)$。",
        "en": "Let $x$ and $y$ be the original numbers of teachers and students in the hall respectively. Use the translation map above to form equations $(1)$ and $(2)$.",
        "marking": "(1A + 1A)",
        "think": {
         "prompt": {
          "zh": "再有 $22$ 名學生進入後，「學生比老師多 $20\\%$」應寫成哪條？",
          "en": "After $22$ students enter, “students is $20\\%$ more than teachers” becomes which equation?"
         },
         "options": [
          {
           "math": "y+22=1.2x"
          },
          {
           "math": "y=1.2(x+22)",
           "hint": {
            "zh": "進入禮堂的是「學生（$y$）」，所以 $+22$ 加在 $y$ 上，老師 $x$ 人數不變！",
            "en": "Students ($y$) entered, not teachers—add $22$ to $y$, while $x$ stays unchanged!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 整塊代入並展開求 $y$",
         "en": "Step 2 · Substitute the whole block and solve for $y$"
        },
        "math": "y+22=1.2(\\hl{1.2y})\ny+22=\\hlw{1.44y}\n22=1.44y-y\n0.44y=22\n\\hlg{y=50}",
        "zh": "把 $(1)$ 的 $x=1.2y$ 代入 $(2)$，算出 $1.2\\times 1.2=1.44$，移項合併得 $0.44y=22 \\Rightarrow y=50$。",
        "en": "Substitute $x=1.2y$ into $(2)$, compute $1.2(1.2y)=1.44y$, then transpose to get $0.44y=22 \\Rightarrow y=50$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 3 步 · 代回 (1) 求 $x$",
         "en": "Step 3 · Substitute back into (1) for $x$"
        },
        "math": "x=1.2(\\hl{50})\n\\hlg{x=60}",
        "zh": "把剛算出的 $y=50$ 代回 (1)，直接算出 $x=60$。",
        "en": "Put $y=50$ back into (1) to find $x=60$."
       },
       {
        "title": {
         "zh": "第 4 步 · 回應題目最後一句（求禮堂內老師人數（$x$））",
         "en": "Step 4 · Answer the final question (Find the number of teachers in the hall ($x$))"
        },
        "math": "\\therefore \\hlg{x=60}",
        "zh": "核對題目最後一句要求的是「求禮堂內老師人數（$x$）」，因此最終答案是 $60$ 人。",
        "en": "Check the final sentence (Find the number of teachers in the hall ($x$)): the required answer is $60$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把 $+22$ 加錯在老師 $x$ 上",
        "labelEn": "Adding $22$ to teachers instead of students",
        "zh": "題目寫「22 more students enter」，只有學生變成 $y+22$。",
        "en": "Only students increase to $y+22$; teachers remain $x$."
       },
       {
        "label": "算出學生 $y=50$ 就停手，忘了求老師 $x=60$",
        "labelEn": "Stopping at students $y=50$ instead of teachers $x=60$",
        "zh": "記得代回 $x=1.2(50)=60$ 回應最後一句「number of teachers」。",
        "en": "Remember to compute $x=1.2(50)=60$ for the number of teachers."
       }
      ],
      "tip": {
       "zh": "把 $x=1.2y$ 代入 $y+22=1.2x$ 得到 $y+22=1.44y \\Rightarrow 0.44y=22$，最後別忘代回求題目要的老師人數 $x$。",
       "en": "Substituting gives $y+22=1.44y \\Rightarrow 0.44y=22$; don't forget to find $x=1.2y$ at the end."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=60,\\ y=50$ 代回原來的兩條方程：$(1)$ 得 $60-1.2(50)=0$，$(2)$ 得 $-1.2(60)+50=-22$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=60,\\ y=50$ into both originals: $(1)$ gives $60-1.2(50)=0$ and $(2)$ gives $-1.2(60)+50=-22$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "解這道應用題亦可改用消元法，把兩條方程整理成 $ax+by=c$ 後消去不需要的未知數，同樣得出 $x=60,\\ y=50$。",
        "en": "You can also solve this by elimination: rewrite both in $ax+by=c$ form and eliminate the unwanted unknown to get the same pair $x=60,\\ y=50$."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能獨立列出這兩條百分比方程並算出老師人數 $x$ 嗎？",
       "en": "With the steps hidden, can you form both percentage equations and solve for the number of teachers?"
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
      "concepts": [
       "ws02-c4",
       "ws02-c8"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 統一時間單位（時速轉分鐘速率）",
         "en": "Step 1 · Unify time units (km/h to km/min)"
        },
        "math": "\\frac{66}{\\hlw{60}}=1.1,\\quad \\frac{84}{\\hlw{60}}=1.4",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "speed $66\\ \\text{km/h}$ and $84\\ \\text{km/h}$ → per minute",
            "zh": "時速除以 $60$ 轉為每分鐘公里數"
           },
           "math": "\\frac{66}{60}=1.1,\\quad \\frac{84}{60}=1.4"
          },
          {
           "clue": {
            "en": "total time is $85$ minutes",
            "zh": "兩段時間共 $85$ 分鐘"
           },
           "math": "x+y=85"
          },
          {
           "clue": {
            "en": "total distance is $104\\ \\text{km}$",
            "zh": "兩段路程相加等於 $104$ 公里"
           },
           "math": "1.1x+1.4y=104"
          }
         ]
        },
        "zh": "設 Anson 由 X 到 Y 需時 $x$ 分鐘，由 Y 到 Z 需時 $y$ 分鐘。因時間設為分鐘，先把兩段時速除以 $60$，得每分鐘分別行駛 $1.1$ 公里及 $1.4$ 公里。",
        "en": "Let $x$ minutes and $y$ minutes be the driving times from X to Y and from Y to Z respectively. Since time is in minutes, divide each hourly speed by $60$ to get $1.1$ km/min and $1.4$ km/min.",
        "marking": "(1M)",
        "think": {
         "prompt": {
          "zh": "速率單位是 $\\text{km/h}$，時間是「分鐘」。列路程方程前必須先做甚麼？",
          "en": "Speeds are in $\\text{km/h}$ while time is in minutes. What must we do first?"
         },
         "options": [
          {
           "zh": "把時速除以 $60$（或時間除以 $60$），統一成相同時間單位",
           "en": "Divide speeds (or times) by $60$ so time units match"
          },
          {
           "zh": "直接寫 $66x+84y=104$",
           "en": "Write $66x+84y=104$ directly",
           "hint": {
            "zh": "每小時 $66$ 公里不能直接乘以「分鐘」！必須先除以 $60$ 統一單位。",
            "en": "You cannot multiply $\\text{km/h}$ directly by minutes—divide by $60$ first!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 列出總時間與總路程方程",
         "en": "Step 2 · Form the time and distance equations"
        },
        "math": "x+y=85 \\quad \\cdots (1)\n1.1x+1.4y=104 \\quad \\cdots (2)",
        "zh": "用總時間 $85$ 分鐘列出 $(1)$，再用「路程＝速率×時間」與總路程 $104$ 公里列出 $(2)$。",
        "en": "Use the total time ($85$ minutes) for $(1)$ and distance $=$ speed $\\times$ time ($104$ km) for $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 消去小數並直式相減求 $y$",
         "en": "Step 3 · Clear decimals and eliminate $x$ for $y$"
        },
        "math": "(1)\\times 11:\\ 11x+11y=935 \\quad \\cdots (3)\n(2)\\times 10:\\ 11x+14y=1040 \\quad \\cdots (4)\n3y=105\n\\hlg{y=35}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $x$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
         },
         "rows": [
          {
           "tag": "(4)",
           "cols": [
            "\\xc{11x}",
            "+14y",
            "=",
            "1040"
           ]
          },
          {
           "op": "-",
           "tag": "(3)",
           "cols": [
            "\\xc{11x}",
            "+11y",
            "=",
            "935"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "",
           "\\hlg{3y}",
           "=",
           "\\hlg{105}"
          ]
         }
        },
        "zh": "把 $(2)$ 同乘 $10$ 清去小數得 $(4)$，並將 $(1)$ 同乘 $11$ 對齊 $x$ 的係數得 $(3)$；再做 $(4)-(3)$ 消去 $x$，解得 $y=35$。",
        "en": "Multiply $(2)$ by $10$ to clear decimals and $(1)$ by $11$ to align $x$. Subtract $(4)-(3)$ to get $y=35$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 寫明所求路段及時間單位",
         "en": "Step 4 · State the requested leg and unit"
        },
        "math": "\\therefore \\hlg{y=35}",
        "zh": "題目問由 Y 到 Z 所需的時間，對應 $y$，所以答案是 $35$ 分鐘。",
        "en": "The question asks for the time from Y to Z ($y$), so the answer is $35$ minutes.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "直接寫 $66x+84y=104$（未把分鐘轉小時）",
        "labelEn": "Forgetting to convert minutes and hours",
        "zh": "速率是 $\\text{km/h}$，時間設分鐘時必須先將速率除以 $60$（$1.1$ 與 $1.4\\ \\text{km/min}$）。",
        "en": "Always divide $\\text{km/h}$ by $60$ ($1.1$ and $1.4\\ \\text{km/min}$) when time is in minutes."
       },
       {
        "label": "清去小數後漏乘右邊的 $104$",
        "labelEn": "Forgetting to multiply $104$ by $10$",
        "zh": "$1.1x+1.4y=104$ 同乘 $10$ 時，右邊變 $1040$，得 $11x+14y=1040$。",
        "en": "Multiplying $1.1x+1.4y=104$ by $10$ gives $11x+14y=1040$."
       }
      ],
      "tip": {
       "zh": "路程題三部曲：① 時速 $\\div 60$ 統一單位（取 $1\\text{M}$）；② 列總時間與總路程；③ 同乘 $10$ 清小數再消元！",
       "en": "Journey checklist: (1) divide km/h by $60$ (1M); (2) write time and distance equations; (3) multiply by $10$ to clear decimals."
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=50,\\ y=35$ 代回原來的兩條方程：$(1)$ 得 $50+35=85$，$(2)$ 得 $11(50)+14(35)=1040$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=50,\\ y=35$ into both originals: $(1)$ gives $50+35=85$ and $(2)$ gives $11(50)+14(35)=1040$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=50,\\ y=35$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能先把時速換成分鐘速率，再化成整數方程求 $y$ 嗎？",
       "en": "With the steps hidden, can you convert the speeds, clear decimals, and solve for $y$?"
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
      "en": "A yacht sails from pier A to pier B at an average speed of 96 km/h and then the yacht sails from  pier B to pier C at an average speed of 78 km/h. It is given that the yacht sails 98 km in 65 minutes  for the whole journey. How long does the yacht take to sail from pier A to pier B?"
     },
     "review": null,
     "marks": 5,
     "solution": {
      "concepts": [
       "ws02-c4",
       "ws02-c8"
      ],
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 統一時間單位（時速轉分鐘速率）",
         "en": "Step 1 · Unify time units (km/h to km/min)"
        },
        "math": "\\frac{96}{\\hlw{60}}=1.6,\\quad \\frac{78}{\\hlw{60}}=1.3",
        "translate": {
         "caption": {
          "zh": "把英文題目逐句翻譯成方程",
          "en": "Translate each English clue into algebra"
         },
         "rows": [
          {
           "clue": {
            "en": "speed $96\\ \\text{km/h}$ and $78\\ \\text{km/h}$ → per minute",
            "zh": "時速除以 $60$ 轉為每分鐘公里數"
           },
           "math": "\\frac{96}{60}=1.6,\\quad \\frac{78}{60}=1.3"
          },
          {
           "clue": {
            "en": "total time is $65$ minutes",
            "zh": "兩段時間共 $65$ 分鐘"
           },
           "math": "x+y=65"
          },
          {
           "clue": {
            "en": "total distance is $98\\ \\text{km}$",
            "zh": "兩段路程相加等於 $98$ 公里"
           },
           "math": "1.6x+1.3y=98"
          }
         ]
        },
        "zh": "設遊艇由碼頭 A 到 B 需時 $x$ 分鐘，由 B 到 C 需時 $y$ 分鐘。因時間設為分鐘，先把兩段時速除以 $60$，得每分鐘分別行駛 $1.6$ 公里及 $1.3$ 公里。",
        "en": "Let $x$ minutes and $y$ minutes be the sailing times from pier A to B and from B to C respectively. Since time is in minutes, divide each hourly speed by $60$ to get $1.6$ km/min and $1.3$ km/min.",
        "marking": "(1M)",
        "think": {
         "prompt": {
          "zh": "$96\\ \\text{km/h}$ 換成每分鐘速率是多少 $\\text{km/min}$？",
          "en": "What is $96\\ \\text{km/h}$ converted to $\\text{km/min}$?"
         },
         "options": [
          {
           "math": "\\frac{96}{60}=1.6"
          },
          {
           "math": "96\\times 60=5760",
           "hint": {
            "zh": "每分鐘走的路程比每小時短，應該是除以 $60$，不是乘以 $60$！",
            "en": "Distance per minute is smaller than per hour—divide by $60$, don't multiply!"
           }
          }
         ],
         "answer": 0
        }
       },
       {
        "title": {
         "zh": "第 2 步 · 列出總時間與總路程方程",
         "en": "Step 2 · Form the time and distance equations"
        },
        "math": "x+y=65 \\quad \\cdots (1)\n1.6x+1.3y=98 \\quad \\cdots (2)",
        "zh": "用總時間 $65$ 分鐘列出 $(1)$，再用「路程＝速率×時間」與總路程 $98$ 公里列出 $(2)$。",
        "en": "Use the total time ($65$ minutes) for $(1)$ and distance $=$ speed $\\times$ time ($98$ km) for $(2)$.",
        "marking": "(1A + 1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 消去小數並直式相減求 $x$",
         "en": "Step 3 · Clear decimals and eliminate $y$ for $x$"
        },
        "math": "(1)\\times 13:\\ 13x+13y=845 \\quad \\cdots (3)\n(2)\\times 10:\\ 16x+13y=980 \\quad \\cdots (4)\n3x=135\n\\hlg{x=45}",
        "align": {
         "caption": {
          "zh": "直式對齊（同號相減，消去 $y$）",
          "en": "Column-aligned elimination (same signs subtract to cancel $y$)"
         },
         "rows": [
          {
           "tag": "(4)",
           "cols": [
            "16x",
            "+\\xc{13y}",
            "=",
            "980"
           ]
          },
          {
           "op": "-",
           "tag": "(3)",
           "cols": [
            "13x",
            "+\\xc{13y}",
            "=",
            "845"
           ]
          }
         ],
         "result": {
          "tag": "",
          "cols": [
           "\\hlg{3x}",
           "",
           "=",
           "\\hlg{135}"
          ]
         }
        },
        "zh": "把 $(2)$ 同乘 $10$ 清去小數得 $(4)$，並將 $(1)$ 同乘 $13$ 對齊 $y$ 的係數得 $(3)$；再做 $(4)-(3)$ 消去 $y$，解得 $x=45$。",
        "en": "Multiply $(2)$ by $10$ to clear decimals and $(1)$ by $13$ to align $y$. Subtract $(4)-(3)$ to get $x=45$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 寫明所求路段及時間單位",
         "en": "Step 4 · State the requested leg and unit"
        },
        "math": "\\therefore \\hlg{x=45}",
        "zh": "題目問由 A 到 B 所需的時間，對應 $x$，所以答案是 $45$ 分鐘。",
        "en": "The question asks for the time from A to B ($x$), so the answer is $45$ minutes.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "把時速乘 $60$ 而不是除以 $60$",
        "labelEn": "Multiplying by $60$ instead of dividing",
        "zh": "$1$ 小時有 $60$ 分鐘，每分鐘速率是時速除以 $60$：$96\\div 60=1.6$、$78\\div 60=1.3$。",
        "en": "Divide hourly speed by $60$: $96\\div 60=1.6$ and $78\\div 60=1.3$ km/min."
       },
       {
        "label": "答了第二段 $y=20$ 而非第一段 $x=45$",
        "labelEn": "Answering $y=20$ instead of $x=45$",
        "zh": "題目最後問「from pier A to pier B」，對應第一段 $x=45$ 分鐘。",
        "en": "The question asks for pier A to pier B, which is $x=45$ minutes."
       }
      ],
      "tip": {
       "zh": "同乘 $10$ 把 $1.6x+1.3y=98$ 變為 $16x+13y=980$，再把 $x+y=65$ 乘 $13$ 相減，立刻直出 $x$！",
       "en": "Clear decimals to $16x+13y=980$, then multiply $x+y=65$ by $13$ and subtract to get $x$ directly!"
      },
      "alt": [
       {
        "name": {
         "zh": "代回兩條原方程驗算",
         "en": "Check both original equations"
        },
        "zh": "把 $x=45,\\ y=20$ 代回原來的兩條方程：$(1)$ 得 $45+20=65$，$(2)$ 得 $16(45)+13(20)=980$。兩條都完全相符，確定答案無誤！",
        "en": "Substitute $x=45,\\ y=20$ into both originals: $(1)$ gives $45+20=65$ and $(2)$ gives $16(45)+13(20)=980$. Both balance, confirming the answer!"
       },
       {
        "name": {
         "zh": "另一種解題思路",
         "en": "Alternative solving route"
        },
        "zh": "亦可改用代入法，先從係數較小的一條式轉換主項再套括號代入，同樣得出 $x=45,\\ y=20$。",
        "en": "You can also use substitution by isolating an unknown from the simpler equation and substituting with brackets to get the same solution."
       }
      ],
      "reflect": {
       "zh": "收起步驟後，你能自己走完「轉單位 → 列兩式 → 清小數 → 消去 $y$ 求 $x$」全流程嗎？",
       "en": "With the steps hidden, can you convert units, form both equations, clear decimals, and solve for $x$?"
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
       "concepts": [
        "ws02-c5"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 逐項翻譯「單價 × 數量」",
          "en": "Step 1 · Translate unit price × quantity for each item"
         },
         "translate": {
          "caption": {
           "zh": "把購物條件逐句轉成代數式",
           "en": "Map each shopping clue to algebra"
          },
          "rows": [
           {
            "clue": {
             "en": "$x$ pencils at \\$3 each",
             "zh": "$x$ 枝鉛筆，每枝 $3$ 元"
            },
            "math": "\\hl{3x}"
           },
           {
            "clue": {
             "en": "$y$ rubbers at \\$4 each",
             "zh": "$y$ 塊擦膠，每塊 $4$ 元"
            },
            "math": "\\hl{4y}"
           },
           {
            "clue": {
             "en": "total cost is \\$43",
             "zh": "兩者相加共 $43$ 元"
            },
            "math": "\\hlg{3x+4y=43}"
           }
          ]
         },
         "math": "3x+4y=43",
         "zh": "鉛筆總價是單價乘數量 $3x$，擦膠總價是 $4y$，兩者相加等於總金額 $43$ 元，對應選項 C。",
         "en": "Pencils cost $3x$ and rubbers cost $4y$; adding them equals the total \\$43, giving option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x+y$ 只是物品總「數量」，不是總「金額」，少了各自的單價 $3$ 和 $4$。",
         "en": "$x+y$ is total quantity, not total cost—it omits the unit prices $3$ and $4$.",
         "nudge": {
          "zh": "每枝鉛筆 $3$ 元、每塊擦膠 $4$ 元，單價要乘到哪裡？",
          "en": "Where do the unit prices \\$3 and \\$4 belong?"
         }
        },
        {
         "opt": "B",
         "zh": "把鉛筆（$3$ 元）和擦膠（$4$ 元）的單價對調配錯了。",
         "en": "Swapped the prices of pencils (\\$3) and rubbers (\\$4).",
         "nudge": {
          "zh": "再核對一下：$x$ 是鉛筆（$3$ 元），還是擦膠（$4$ 元）？",
          "en": "Double-check which price matches $x$ (pencils) and which matches $y$ (rubbers)."
         }
        },
        {
         "opt": "D",
         "zh": "總價應把兩類物品的價錢「相加」，不是相減。",
         "en": "Total cost adds both items rather than subtracting.",
         "nudge": {
          "zh": "買了兩種文具，求總金額應該用加號還是減號？",
          "en": "To find total cost of two items, should we add or subtract?"
         }
        }
       ],
       "tip": {
        "zh": "列總價方程前先核對單位：「單價 × 數量 ＝ 元」，每一項都是「元」才能加起來等於總金額。",
        "en": "Check units before adding: each term must be in dollars (price × quantity) to equal the total cost."
       },
       "alt": [
        {
         "name": {
          "zh": "代入具體數量感受一下",
          "en": "Test with concrete numbers"
         },
         "zh": "試想買 $5$ 枝鉛筆和 $7$ 塊擦膠：總價是 $3(5)+4(7)=15+28=43$ 元，正對應 $3x+4y=43$。",
         "en": "Buying $5$ pencils and $7$ rubbers costs $3(5)+4(7)=15+28=43$, matching $3x+4y=43$."
        }
       ],
       "reflect": {
        "zh": "如果題目再告訴你「共買了 $12$ 件文具」，第二條方程應該怎麼寫？",
        "en": "If the question also says $12$ items were bought in total, what is the second equation?"
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
       "concepts": [
        "ws02-c7"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 找出「than」後面的比較基準",
          "en": "Step 1 · Identify the reference quantity after “than”"
         },
         "translate": {
          "caption": {
           "zh": "拆解「$20\\%$ more than $y$」",
           "en": "Break down “$20\\%$ more than $y$”"
          },
          "rows": [
           {
            "clue": {
             "en": "reference: girls ($y$)",
             "zh": "比較基準：女生 $y$（代表 $100\\%$）"
            },
            "math": "1\\cdot y"
           },
           {
            "clue": {
             "en": "$20\\%$ more than $y$",
             "zh": "比女生多 $20\\%$（原有＋多出）"
            },
            "math": "y+20\\%y=\\hlg{1.2y}"
           }
          ]
         },
         "math": "x=(1+20\\%)y\n\\hlg{x=1.2y}",
         "zh": "緊跟在「than」後面的是女生人數 $y$，所以以 $y$ 為基準 $100\\%$。多 $20\\%$ 即 $y$ 的 $(1+0.2)=1.2$ 倍，故 $x=1.2y$（選項 D）。",
         "en": "Girls ($y$) follow “than”, so $y$ is the $100\\%$ reference. $20\\%$ more means $(1+0.2)y=1.2y$ (option D)."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$0.2y$ 只是「多出來的 $20\\%$」，漏了原本的 $100\\%$（$y$）！",
         "en": "$0.2y$ is only the extra $20\\%$, missing the original $100\\%$ ($y$)!",
         "nudge": {
          "zh": "$0.2y$ 比 $y$ 還小，男同學比女同學「多」，別忘了原本的 $100\\%$！",
          "en": "$0.2y$ is smaller than $y$—boys are MORE than girls, so include the original $100\\%$!"
         }
        },
        {
         "opt": "B",
         "zh": "$0.8y$ 代表「少 $20\\%$（$1-20\\%$）」，與題目「多（more）」方向相反。",
         "en": "$0.8y$ means $20\\%$ fewer ($1-20\\%$), the opposite of “more”.",
         "nudge": {
          "zh": "看清題目字眼是「more（多）」還是「less（少）」？",
          "en": "Check whether the question says “more” or “less”."
         }
        },
        {
         "opt": "C",
         "zh": "把百分數 $20\\%$ 當成實數 $20$ 人直接加上去，忽略了「$\\%$」符號。",
         "en": "Treated $20\\%$ as $20$ people instead of $20\\%$ of $y$.",
         "nudge": {
          "zh": "題目說的是「$20\\%$」（百分比），不是「多 $20$ 個人」喔！",
          "en": "It says $20\\%$ (a percentage), not $20$ people!"
         }
        }
       ],
       "tip": {
        "zh": "看見「$r\\%$ more than $y$」一律寫 $(1+r\\%)y$；「$r\\%$ less than $y$」一律寫 $(1-r\\%)y$。",
        "en": "Always translate “$r\\%$ more than $y$” as $(1+r\\%)y$, and “$r\\%$ less than $y$” as $(1-r\\%)y$."
       },
       "alt": [
        {
         "name": {
          "zh": "設 $y=100$ 秒驗",
          "en": "Test with $y=100$"
         },
         "zh": "假設女生有 $100$ 人，男生比女生多 $20\\%$ 即多 $20$ 人，共 $120$ 人。代入各選項只有 $1.2(100)=120$（選項 D）正確！",
         "en": "If there are $100$ girls, $20\\%$ more means $120$ boys. Only option D gives $1.2(100)=120$!"
        }
       ],
       "reflect": {
        "zh": "如果換成「比 $y$ 少 $25\\%$」，倍數會變成多少？",
        "en": "If it were “$25\\%$ less than $y$”, what would the multiplier be?"
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
       "concepts": [
        "ws02-c2",
        "ws02-c5"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並對齊兩條方程",
          "en": "Step 1 · Define unknowns and align both equations"
         },
         "math": "3x+4y=156 \\quad \\cdots (1)\n5x=2y \\Rightarrow 5x-2y=0 \\quad \\cdots (2)",
         "translate": {
          "caption": {
           "zh": "把英文購物條件逐句翻譯成方程",
           "en": "Translate each pricing clue into algebra"
          },
          "rows": [
           {
            "clue": {
             "en": "price of $3$ egg tarts and $4$ doughnuts is \\$156",
             "zh": "3 個蛋撻 ＋ 4 個冬甩 ＝ 156 元"
            },
            "math": "3x+4y=156"
           },
           {
            "clue": {
             "en": "price of $5$ egg tarts = price of $2$ doughnuts",
             "zh": "5 個蛋撻 ＝ 2 個冬甩（乘 $2$ 即得 $4y=10x$！）"
            },
            "math": "5x=2y"
           }
          ]
         },
         "zh": "設一個蛋撻售價為 $x$ 元，一個冬甩售價為 $y$ 元。先把「同價條件」移項成 $=0$ 的標準形式，令兩條方程的 $x$、$y$ 都在等號左邊對齊，消元才不會看錯符號！",
         "en": "Let $x$ dollars be the price of an egg tart and $y$ dollars be the price of a doughnut. Move the equal-price equation into standard form ($=0$) so both equations line up $x$ and $y$ on the left cleanly."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
          "en": "Step 2 · Scale equations to match $y$"
         },
         "math": "(2)\\times \\hlw{2}:\n10x-4y=\\hlw{0} \\quad \\cdots (3)",
         "zh": "要消去 $y$，先把$(2)$ 整條同乘 $2$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $y$, multiply all of $(2)$ by $2$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $y$，求出 $x$",
          "en": "Step 3 · Add vertically to eliminate $y$ and find $x$"
         },
         "math": "(1) + (3):\n13x=156\n\\hlg{x=12}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $y$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $y$)"
          },
          "rows": [
           {
            "tag": "(1)",
            "cols": [
             "3x",
             "+\\xc{4y}",
             "=",
             "156"
            ]
           },
           {
            "op": "+",
            "tag": "(3)",
            "cols": [
             "10x",
             "-\\xc{4y}",
             "=",
             "0"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{13x}",
            "",
            "=",
            "\\hlg{156}"
           ]
          }
         },
         "zh": "計算 $(1) + (3)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=12$。",
         "en": "Compute $(1) + (3)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=12$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{x=12}",
         "zh": "題目所求為 $x=12$，對應選項 A。",
         "en": "The requested value is $x=12$, which matches option A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $14$。正確的蛋撻價錢是 $12$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $14$. The price of an egg tart is \\$12.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        },
        {
         "opt": "C",
         "zh": "$30$ 是「冬甩」的價錢（$y$），但題目最後問的是「蛋撻」（$x=12$）！讀清最後一句就能避開這道高頻陷阱。",
         "en": "$30$ is the price of a doughnut ($y$), whereas the question asks for an egg tart ($x=12$)!",
         "nudge": {
          "zh": "這組數非常接近答案——請重讀題目最後一句，你算出的是不是另一個物品的價錢？",
          "en": "Very close—re-read the final question: did you find the price of the other item instead?"
         }
        },
        {
         "opt": "D",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $35$。正確的蛋撻價錢是 $12$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $35$. The price of an egg tart is \\$12.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        }
       ],
       "tip": {
        "zh": "看到「$3x=4y$」這類同價條件，移項成 $3x-4y=0$ 再跟總價方程做直式消元，符號最清楚、絕不易算反！",
        "en": "Rewrite equal-price relations like $3x=4y$ as $3x-4y=0$ so both equations align cleanly for vertical elimination!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=12,\\ y=30$ 代回原方程：$(1)$ 得 $3(12)+4(30)=156$，$(2)$ 得 $5(12)-2(30)=0$；最後確認所求量為 $12$（選項 A）。",
         "en": "Put $x=12,\\ y=30$ into both equations: $(1)$ gives $3(12)+4(30)=156$ and $(2)$ gives $5(12)-2(30)=0$, confirming $12$ (option A)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $3x+4y=156$ 與 $5x-2y=0$，再按計數機聯立方程程式依次輸入兩組係數 $(3,\\ 4,\\ 156)$ 及 $(5,\\ -2,\\ 0)$，即可直接核對 $x=12,\\ y=30$！",
         "en": "Arrange both equations into standard form $3x+4y=156$ and $5x-2y=0$, then enter $(3,\\ 4,\\ 156)$ and $(5,\\ -2,\\ 0)$ into your simultaneous-equations program to verify $x=12,\\ y=30$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能不看提示把兩句價錢條件寫成對齊的標準方程，再直接消去不需要的未知數嗎？",
        "en": "With the steps hidden, can you align both pricing equations and eliminate the unwanted unknown directly?"
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
       "concepts": [
        "ws02-c4",
        "ws02-c5"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並對齊兩條方程",
          "en": "Step 1 · Define unknowns and align both equations"
         },
         "math": "5x+4y=570 \\quad \\cdots (1)\n8x=5y \\Rightarrow 8x-5y=0 \\quad \\cdots (2)",
         "translate": {
          "caption": {
           "zh": "把英文購物條件逐句翻譯成方程",
           "en": "Translate each pricing clue into algebra"
          },
          "rows": [
           {
            "clue": {
             "en": "price of $5$ hats and $4$ ties is \\$570",
             "zh": "5 頂帽 ＋ 4 條領帶 ＝ 570 元"
            },
            "math": "5x+4y=570"
           },
           {
            "clue": {
             "en": "price of $8$ hats = price of $5$ ties",
             "zh": "8 頂帽 ＝ 5 條領帶（移項得 $8x-5y=0$）"
            },
            "math": "8x=5y"
           }
          ]
         },
         "zh": "設一頂帽子售價為 $x$ 元，一條領帶售價為 $y$ 元。先把「同價條件」移項成 $=0$ 的標準形式，令兩條方程的 $x$、$y$ 都在等號左邊對齊，消元才不會看錯符號！",
         "en": "Let $x$ dollars be the price of a hat and $y$ dollars be the price of a tie. Move the equal-price equation into standard form ($=0$) so both equations line up $x$ and $y$ on the left cleanly."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
          "en": "Step 2 · Scale equations to match $y$"
         },
         "math": "(1)\\times \\hlw{5}:\n25x+20y=\\hlw{2850} \\quad \\cdots (3)\n(2)\\times \\hlw{4}:\n32x-20y=\\hlw{0} \\quad \\cdots (4)",
         "zh": "要消去 $y$，先把$(1)$ 整條同乘 $5$ 得 (3)、$(2)$ 整條同乘 $4$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $y$, multiply all of $(1)$ by $5$ to get (3) and multiply all of $(2)$ by $4$ to get (4). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $y$，求出 $x$",
          "en": "Step 3 · Add vertically to eliminate $y$ and find $x$"
         },
         "math": "(3) + (4):\n57x=2850\n\\hlg{x=50}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $y$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $y$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "25x",
             "+\\xc{20y}",
             "=",
             "2850"
            ]
           },
           {
            "op": "+",
            "tag": "(4)",
            "cols": [
             "32x",
             "-\\xc{20y}",
             "=",
             "0"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{57x}",
            "",
            "=",
            "\\hlg{2850}"
           ]
          }
         },
         "zh": "計算 $(3) + (4)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=50$。",
         "en": "Compute $(3) + (4)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=50$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{x=50}",
         "zh": "題目所求為 $x=50$，對應選項 B。",
         "en": "The requested value is $x=50$, which matches option B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $47.5$。正確的帽子價錢是 $50$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $47.5$. The price of a hat is \\$50.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        },
        {
         "opt": "C",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $76$。正確的帽子價錢是 $50$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $76$. The price of a hat is \\$50.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        },
        {
         "opt": "D",
         "zh": "$80$ 是「領帶」的價錢（$y$），但題目最後問的是「帽子」（$x=50$）！讀清最後一句就能避開這道高頻陷阱。",
         "en": "$80$ is the price of a tie ($y$), whereas the question asks for a hat ($x=50$)!",
         "nudge": {
          "zh": "這組數非常接近答案——請重讀題目最後一句，你算出的是不是另一個物品的價錢？",
          "en": "Very close—re-read the final question: did you find the price of the other item instead?"
         }
        }
       ],
       "tip": {
        "zh": "看到「$3x=4y$」這類同價條件，移項成 $3x-4y=0$ 再跟總價方程做直式消元，符號最清楚、絕不易算反！",
        "en": "Rewrite equal-price relations like $3x=4y$ as $3x-4y=0$ so both equations align cleanly for vertical elimination!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=50,\\ y=80$ 代回原方程：$(1)$ 得 $5(50)+4(80)=570$，$(2)$ 得 $8(50)-5(80)=0$；最後確認所求量為 $50$（選項 B）。",
         "en": "Put $x=50,\\ y=80$ into both equations: $(1)$ gives $5(50)+4(80)=570$ and $(2)$ gives $8(50)-5(80)=0$, confirming $50$ (option B)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $5x+4y=570$ 與 $8x-5y=0$，再按計數機聯立方程程式依次輸入兩組係數 $(5,\\ 4,\\ 570)$ 及 $(8,\\ -5,\\ 0)$，即可直接核對 $x=50,\\ y=80$！",
         "en": "Arrange both equations into standard form $5x+4y=570$ and $8x-5y=0$, then enter $(5,\\ 4,\\ 570)$ and $(8,\\ -5,\\ 0)$ into your simultaneous-equations program to verify $x=50,\\ y=80$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能不看提示把兩句價錢條件寫成對齊的標準方程，再直接消去不需要的未知數嗎？",
        "en": "With the steps hidden, can you align both pricing equations and eliminate the unwanted unknown directly?"
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
       "concepts": [
        "ws02-c4",
        "ws02-c5"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並對齊兩條方程",
          "en": "Step 1 · Define unknowns and align both equations"
         },
         "math": "4x+5y=62 \\quad \\cdots (1)\n3x=4y \\Rightarrow 3x-4y=0 \\quad \\cdots (2)",
         "translate": {
          "caption": {
           "zh": "把英文購物條件逐句翻譯成方程",
           "en": "Translate each pricing clue into algebra"
          },
          "rows": [
           {
            "clue": {
             "en": "price of $4$ highlighters and $5$ pens is \\$62",
             "zh": "4 枝螢光筆 ＋ 5 枝原子筆 ＝ 62 元"
            },
            "math": "4x+5y=62"
           },
           {
            "clue": {
             "en": "price of $3$ highlighters = price of $4$ pens",
             "zh": "3 枝螢光筆 ＝ 4 枝原子筆（移項得 $3x-4y=0$）"
            },
            "math": "3x=4y"
           }
          ]
         },
         "zh": "設一枝螢光筆售價為 $x$ 元，一枝原子筆售價為 $y$ 元。先把「同價條件」移項成 $=0$ 的標準形式，令兩條方程的 $x$、$y$ 都在等號左邊對齊，消元才不會看錯符號！",
         "en": "Let $x$ dollars be the price of a highlighter and $y$ dollars be the price of a pen. Move the equal-price equation into standard form ($=0$) so both equations line up $x$ and $y$ on the left cleanly."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
          "en": "Step 2 · Scale equations to match $y$"
         },
         "math": "(1)\\times \\hlw{4}:\n16x+20y=\\hlw{248} \\quad \\cdots (3)\n(2)\\times \\hlw{5}:\n15x-20y=\\hlw{0} \\quad \\cdots (4)",
         "zh": "要消去 $y$，先把$(1)$ 整條同乘 $4$ 得 (3)、$(2)$ 整條同乘 $5$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $y$, multiply all of $(1)$ by $4$ to get (3) and multiply all of $(2)$ by $5$ to get (4). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $y$，求出 $x$",
          "en": "Step 3 · Add vertically to eliminate $y$ and find $x$"
         },
         "math": "(3) + (4):\n31x=248\n\\hlg{x=8}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $y$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $y$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "16x",
             "+\\xc{20y}",
             "=",
             "248"
            ]
           },
           {
            "op": "+",
            "tag": "(4)",
            "cols": [
             "15x",
             "-\\xc{20y}",
             "=",
             "0"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{31x}",
            "",
            "=",
            "\\hlg{248}"
           ]
          }
         },
         "zh": "計算 $(3) + (4)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=8$。",
         "en": "Compute $(3) + (4)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=8$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{x=8}",
         "zh": "題目所求為 $x=8$，對應選項 B。",
         "en": "The requested value is $x=8$, which matches option B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$6$ 是「原子筆」的價錢（$y$），但題目最後問的是「螢光筆」（$x=8$）！讀清最後一句就能避開這道高頻陷阱。",
         "en": "$6$ is the price of a pen ($y$), whereas the question asks for a highlighter ($x=8$)!",
         "nudge": {
          "zh": "這組數非常接近答案——請重讀題目最後一句，你算出的是不是另一個物品的價錢？",
          "en": "Very close—re-read the final question: did you find the price of the other item instead?"
         }
        },
        {
         "opt": "C",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $9$。正確的螢光筆價錢是 $8$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $9$. The price of a highlighter is \\$8.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        },
        {
         "opt": "D",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $12$。正確的螢光筆價錢是 $8$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $12$. The price of a highlighter is \\$8.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        }
       ],
       "tip": {
        "zh": "看到「$3x=4y$」這類同價條件，移項成 $3x-4y=0$ 再跟總價方程做直式消元，符號最清楚、絕不易算反！",
        "en": "Rewrite equal-price relations like $3x=4y$ as $3x-4y=0$ so both equations align cleanly for vertical elimination!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=8,\\ y=6$ 代回原方程：$(1)$ 得 $4(8)+5(6)=62$，$(2)$ 得 $3(8)-4(6)=0$；最後確認所求量為 $8$（選項 B）。",
         "en": "Put $x=8,\\ y=6$ into both equations: $(1)$ gives $4(8)+5(6)=62$ and $(2)$ gives $3(8)-4(6)=0$, confirming $8$ (option B)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $4x+5y=62$ 與 $3x-4y=0$，再按計數機聯立方程程式依次輸入兩組係數 $(4,\\ 5,\\ 62)$ 及 $(3,\\ -4,\\ 0)$，即可直接核對 $x=8,\\ y=6$！",
         "en": "Arrange both equations into standard form $4x+5y=62$ and $3x-4y=0$, then enter $(4,\\ 5,\\ 62)$ and $(3,\\ -4,\\ 0)$ into your simultaneous-equations program to verify $x=8,\\ y=6$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能不看提示把兩句價錢條件寫成對齊的標準方程，再直接消去不需要的未知數嗎？",
        "en": "With the steps hidden, can you align both pricing equations and eliminate the unwanted unknown directly?"
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
       "concepts": [
        "ws02-c4",
        "ws02-c5"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並對齊兩條方程",
          "en": "Step 1 · Define unknowns and align both equations"
         },
         "math": "3x+2y=70 \\quad \\cdots (1)\n4x=9y \\Rightarrow 4x-9y=0 \\quad \\cdots (2)",
         "translate": {
          "caption": {
           "zh": "把英文購物條件逐句翻譯成方程",
           "en": "Translate each pricing clue into algebra"
          },
          "rows": [
           {
            "clue": {
             "en": "price of $3$ avocados and $2$ pears is \\$70",
             "zh": "3 個牛油果 ＋ 2 個梨 ＝ 70 元"
            },
            "math": "3x+2y=70"
           },
           {
            "clue": {
             "en": "price of $4$ avocados = price of $9$ pears",
             "zh": "4 個牛油果 ＝ 9 個梨（移項得 $4x-9y=0$）"
            },
            "math": "4x=9y"
           }
          ]
         },
         "zh": "設一個牛油果售價為 $x$ 元，一個梨售價為 $y$ 元。先把「同價條件」移項成 $=0$ 的標準形式，令兩條方程的 $x$、$y$ 都在等號左邊對齊，消元才不會看錯符號！",
         "en": "Let $x$ dollars be the price of an avocado and $y$ dollars be the price of a pear. Move the equal-price equation into standard form ($=0$) so both equations line up $x$ and $y$ on the left cleanly."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
          "en": "Step 2 · Scale equations to match $x$"
         },
         "math": "(1)\\times \\hlw{4}:\n12x+8y=\\hlw{280} \\quad \\cdots (3)\n(2)\\times \\hlw{3}:\n12x-27y=\\hlw{0} \\quad \\cdots (4)",
         "zh": "要消去 $x$，先把$(1)$ 整條同乘 $4$ 得 (3)、$(2)$ 整條同乘 $3$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $x$, multiply all of $(1)$ by $4$ to get (3) and multiply all of $(2)$ by $3$ to get (4). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $x$，求出 $y$",
          "en": "Step 3 · Subtract vertically to eliminate $x$ and find $y$"
         },
         "math": "(3) - (4):\n35y=280\n\\hlg{y=8}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $x$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "\\xc{12x}",
             "+8y",
             "=",
             "280"
            ]
           },
           {
            "op": "-",
            "tag": "(4)",
            "cols": [
             "\\xc{12x}",
             "-27y",
             "=",
             "0"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{35y}",
            "=",
            "\\hlg{280}"
           ]
          }
         },
         "zh": "計算 $(3) - (4)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。 減去負數要變加，看清直式每一欄的符號！解得 $y=8$。",
         "en": "Compute $(3) - (4)$: the $x$-terms cancel, leaving an equation in $y$ alone. Watch signs carefully: subtracting a negative turns into addition! Solving gives $y=8$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{y=8}",
         "zh": "題目所求為 $y=8$，對應選項 A。",
         "en": "The requested value is $y=8$, which matches option A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $12$。正確的梨價錢是 $8$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $12$. The price of a pear is \\$8.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        },
        {
         "opt": "C",
         "zh": "$18$ 是「牛油果」的價錢（$x$），但題目最後問的是「梨」（$y=8$）！讀清最後一句就能避開這道高頻陷阱。",
         "en": "$18$ is the price of an avocado ($x$), whereas the question asks for a pear ($y=8$)!",
         "nudge": {
          "zh": "這組數非常接近答案——請重讀題目最後一句，你算出的是不是另一個物品的價錢？",
          "en": "Very close—re-read the final question: did you find the price of the other item instead?"
         }
        },
        {
         "opt": "D",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $27$。正確的梨價錢是 $8$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $27$. The price of a pear is \\$8.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        }
       ],
       "tip": {
        "zh": "看到「$3x=4y$」這類同價條件，移項成 $3x-4y=0$ 再跟總價方程做直式消元，符號最清楚、絕不易算反！",
        "en": "Rewrite equal-price relations like $3x=4y$ as $3x-4y=0$ so both equations align cleanly for vertical elimination!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=18,\\ y=8$ 代回原方程：$(1)$ 得 $3(18)+2(8)=70$，$(2)$ 得 $4(18)-9(8)=0$；最後確認所求量為 $8$（選項 A）。",
         "en": "Put $x=18,\\ y=8$ into both equations: $(1)$ gives $3(18)+2(8)=70$ and $(2)$ gives $4(18)-9(8)=0$, confirming $8$ (option A)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $3x+2y=70$ 與 $4x-9y=0$，再按計數機聯立方程程式依次輸入兩組係數 $(3,\\ 2,\\ 70)$ 及 $(4,\\ -9,\\ 0)$，即可直接核對 $x=18,\\ y=8$！",
         "en": "Arrange both equations into standard form $3x+2y=70$ and $4x-9y=0$, then enter $(3,\\ 2,\\ 70)$ and $(4,\\ -9,\\ 0)$ into your simultaneous-equations program to verify $x=18,\\ y=8$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能不看提示把兩句價錢條件寫成對齊的標準方程，再直接消去不需要的未知數嗎？",
        "en": "With the steps hidden, can you align both pricing equations and eliminate the unwanted unknown directly?"
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
       "concepts": [
        "ws02-c2",
        "ws02-c5"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並對齊兩條方程",
          "en": "Step 1 · Define unknowns and align both equations"
         },
         "math": "5x=8y \\Rightarrow 5x-8y=0 \\quad \\cdots (1)\nx+2y=54 \\quad \\cdots (2)",
         "translate": {
          "caption": {
           "zh": "把英文購物條件逐句翻譯成方程",
           "en": "Translate each pricing clue into algebra"
          },
          "rows": [
           {
            "clue": {
             "en": "price of $5$ hamburgers = price of $8$ sandwiches",
             "zh": "5 個漢堡包 ＝ 8 份三文治"
            },
            "math": "5x=8y"
           },
           {
            "clue": {
             "en": "buys $2$ hamburgers and $4$ sandwiches for \\$108",
             "zh": "2 個漢堡包 ＋ 4 份三文治 ＝ 108 元"
            },
            "math": "2x+4y=108"
           }
          ]
         },
         "zh": "設一個漢堡包售價為 $x$ 元，一份三文治售價為 $y$ 元。先把「同價條件」移項成 $=0$ 的標準形式，令兩條方程的 $x$、$y$ 都在等號左邊對齊，消元才不會看錯符號！",
         "en": "Let $x$ dollars be the price of a hamburger and $y$ dollars be the price of a sandwich. Move the equal-price equation into standard form ($=0$) so both equations line up $x$ and $y$ on the left cleanly."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $y$ 的係數",
          "en": "Step 2 · Scale equations to match $y$"
         },
         "math": "(2)\\times \\hlw{4}:\n4x+8y=\\hlw{216} \\quad \\cdots (3)",
         "zh": "要消去 $y$，先把$(2)$ 整條同乘 $4$ 得 (3)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $y$, multiply all of $(2)$ by $4$ to get (3). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相加消去 $y$，求出 $x$",
          "en": "Step 3 · Add vertically to eliminate $y$ and find $x$"
         },
         "math": "(1) + (3):\n9x=216\n\\hlg{x=24}",
         "align": {
          "caption": {
           "zh": "直式對齊（異號相加，消去 $y$）",
           "en": "Column-aligned elimination (opposite signs add to cancel $y$)"
          },
          "rows": [
           {
            "tag": "(1)",
            "cols": [
             "5x",
             "-\\xc{8y}",
             "=",
             "0"
            ]
           },
           {
            "op": "+",
            "tag": "(3)",
            "cols": [
             "4x",
             "+\\xc{8y}",
             "=",
             "216"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "\\hlg{9x}",
            "",
            "=",
            "\\hlg{216}"
           ]
          }
         },
         "zh": "計算 $(1) + (3)$：$y$ 項剛好抵消，只剩 $x$ 的一元一次方程。解得 $x=24$。",
         "en": "Compute $(1) + (3)$: the $y$-terms cancel, leaving an equation in $x$ alone. Solving gives $x=24$."
        },
        {
         "title": {
          "zh": "第 4 步 · 核對所求量並配對選項",
          "en": "Step 4 · Match the requested value to the options"
         },
         "math": "\\therefore \\hlg{x=24}",
         "zh": "題目所求為 $x=24$，對應選項 D。",
         "en": "The requested value is $x=24$, which matches option D."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $12.5$。正確的漢堡包價錢是 $24$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $12.5$. The price of a hamburger is \\$24.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        },
        {
         "opt": "B",
         "zh": "$15$ 是「三文治」的價錢（$y$），但題目最後問的是「漢堡包」（$x=24$）！讀清最後一句就能避開這道高頻陷阱。",
         "en": "$15$ is the price of a sandwich ($y$), whereas the question asks for a hamburger ($x=24$)!",
         "nudge": {
          "zh": "這組數非常接近答案——請重讀題目最後一句，你算出的是不是另一個物品的價錢？",
          "en": "Very close—re-read the final question: did you find the price of the other item instead?"
         }
        },
        {
         "opt": "C",
         "zh": "若把「同價條件」寫反（例如把 $3x=4y$ 寫成 $4x=3y$），或放大方程時漏乘總金額，便容易計出 $20$。正確的漢堡包價錢是 $24$ 元。",
         "en": "Reversing the equal-price relation or forgetting to scale the total cost can lead to $20$. The price of a hamburger is \\$24.",
         "nudge": {
          "zh": "檢查「兩種物品同價」那條式有沒有把係數配錯給對方，再把你的價錢代回總金額核對！",
          "en": "Check that the equal-price equation pairs each number with the right item, then test against the total cost!"
         }
        }
       ],
       "tip": {
        "zh": "看到「$3x=4y$」這類同價條件，移項成 $3x-4y=0$ 再跟總價方程做直式消元，符號最清楚、絕不易算反！",
        "en": "Rewrite equal-price relations like $3x=4y$ as $3x-4y=0$ so both equations align cleanly for vertical elimination!"
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=24,\\ y=15$ 代回原方程：$(1)$ 得 $5(24)-8(15)=0$，$(2)$ 得 $24+2(15)=54$；最後確認所求量為 $24$（選項 D）。",
         "en": "Put $x=24,\\ y=15$ into both equations: $(1)$ gives $5(24)-8(15)=0$ and $(2)$ gives $24+2(15)=54$, confirming $24$ (option D)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $5x-8y=0$ 與 $x+2y=54$，再按計數機聯立方程程式依次輸入兩組係數 $(5,\\ -8,\\ 0)$ 及 $(1,\\ 2,\\ 54)$，即可直接核對 $x=24,\\ y=15$！",
         "en": "Arrange both equations into standard form $5x-8y=0$ and $x+2y=54$, then enter $(5,\\ -8,\\ 0)$ and $(1,\\ 2,\\ 54)$ into your simultaneous-equations program to verify $x=24,\\ y=15$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能不看提示把兩句價錢條件寫成對齊的標準方程，再直接消去不需要的未知數嗎？",
        "en": "With the steps hidden, can you align both pricing equations and eliminate the unwanted unknown directly?"
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
       "concepts": [
        "ws02-c4",
        "ws02-c5"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並對齊兩條方程",
          "en": "Step 1 · Define unknowns and align both equations"
         },
         "math": "3x+7y=53 \\quad \\cdots (1)\n2x+y=17 \\quad \\cdots (2)",
         "translate": {
          "caption": {
           "zh": "把英文購物條件逐句翻譯成方程",
           "en": "Translate each pricing clue into algebra"
          },
          "rows": [
           {
            "clue": {
             "en": "price of $3$ oranges and $7$ apples is \\$53",
             "zh": "3 個橙 ＋ 7 個蘋果 ＝ 53 元"
            },
            "math": "3x+7y=53"
           },
           {
            "clue": {
             "en": "price of $4$ oranges and $2$ apples is \\$34",
             "zh": "4 個橙 ＋ 2 個蘋果 ＝ 34 元"
            },
            "math": "4x+2y=34"
           }
          ]
         },
         "zh": "設一個橙售價為 $x$ 元，一個蘋果售價為 $y$ 元。根據兩組總價條件列出標準方程 $(1)$ 與 $(2)$。",
         "en": "Let $x$ dollars be the price of an orange and $y$ dollars be the price of an apple. Form standard equations $(1)$ and $(2)$ from the two total-cost clues."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
          "en": "Step 2 · Scale equations to match $x$"
         },
         "math": "(1)\\times \\hlw{2}:\n6x+14y=\\hlw{106} \\quad \\cdots (3)\n(2)\\times \\hlw{3}:\n6x+3y=\\hlw{51} \\quad \\cdots (4)",
         "zh": "要消去 $x$，先把$(1)$ 整條同乘 $2$ 得 (3)、$(2)$ 整條同乘 $3$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $x$, multiply all of $(1)$ by $2$ to get (3) and multiply all of $(2)$ by $3$ to get (4). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $x$，求出 $y$",
          "en": "Step 3 · Subtract vertically to eliminate $x$ and find $y$"
         },
         "math": "(3) - (4):\n11y=55\n\\hlg{y=5}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $x$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "\\xc{6x}",
             "+14y",
             "=",
             "106"
            ]
           },
           {
            "op": "-",
            "tag": "(4)",
            "cols": [
             "\\xc{6x}",
             "+3y",
             "=",
             "51"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{11y}",
            "=",
            "\\hlg{55}"
           ]
          }
         },
         "zh": "計算 $(3) - (4)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。解得 $y=5$。",
         "en": "Compute $(3) - (4)$: the $x$-terms cancel, leaving an equation in $y$ alone. Solving gives $y=5$."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回 (1) 求 $x$",
          "en": "Step 4 · Substitute into (1) to find $x$"
         },
         "math": "3x+7(\\hl{5})=53\n3x+35=53\n3x=18\n\\hlg{x=6}",
         "zh": "把 $y=5$ 代回原方程 (1)，移項化簡得出 $x=6$。",
         "en": "Substitute $y=5$ into original equation (1) and solve to get $x=6$."
        },
        {
         "title": {
          "zh": "第 5 步 · 代入求出題目要求的組合總價",
          "en": "Step 5 · Compute the requested combined total"
         },
         "math": "2x+3y=2(6)+3(5)\n=\\hlg{27}",
         "zh": "把單價 $x=6$、$y=5$ 代入 2 個橙與 3 個蘋果（$2x+3y$），得出總價為 $\\$27$，對應選項 A。",
         "en": "Substitute $x=6$ and $y=5$ into 2 oranges and 3 apples ($2x+3y$) to get \\$27, matching option A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "由兩條價錢方程解得單價 $x=6,\\ y=5$，代入 2 個橙與 3 個蘋果（$2x+3y$） 得 $27$，而不是 $28$；請檢查最後代入時的係數有沒有配錯。",
         "en": "Solving gives unit prices $x=6,\\ y=5$, so 2 oranges and 3 apples ($2x+3y$) is $27$, not $28$. Check the final substitution.",
         "nudge": {
          "zh": "先用兩個單價驗算原本的兩句價錢條件，再檢查最後求組合總價時有沒有把 $x$ 和 $y$ 乘反。",
          "en": "Verify both unit prices against the original totals, then check the final combination."
         }
        },
        {
         "opt": "C",
         "zh": "由兩條價錢方程解得單價 $x=6,\\ y=5$，代入 2 個橙與 3 個蘋果（$2x+3y$） 得 $27$，而不是 $29$；請檢查最後代入時的係數有沒有配錯。",
         "en": "Solving gives unit prices $x=6,\\ y=5$, so 2 oranges and 3 apples ($2x+3y$) is $27$, not $29$. Check the final substitution.",
         "nudge": {
          "zh": "先用兩個單價驗算原本的兩句價錢條件，再檢查最後求組合總價時有沒有把 $x$ 和 $y$ 乘反。",
          "en": "Verify both unit prices against the original totals, then check the final combination."
         }
        },
        {
         "opt": "D",
         "zh": "由兩條價錢方程解得單價 $x=6,\\ y=5$，代入 2 個橙與 3 個蘋果（$2x+3y$） 得 $27$，而不是 $30$；請檢查最後代入時的係數有沒有配錯。",
         "en": "Solving gives unit prices $x=6,\\ y=5$, so 2 oranges and 3 apples ($2x+3y$) is $27$, not $30$. Check the final substitution.",
         "nudge": {
          "zh": "先用兩個單價驗算原本的兩句價錢條件，再檢查最後求組合總價時有沒有把 $x$ 和 $y$ 乘反。",
          "en": "Verify both unit prices against the original totals, then check the final combination."
         }
        }
       ],
       "tip": {
        "zh": "這類卷二題先解出兩件單價，最後別忘記代入題目要求的組合（例如 $2x+3y$）才選答案！",
        "en": "Solve for both unit prices first, then substitute into the exact combination asked in the final sentence."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=6,\\ y=5$ 代回原方程：$(1)$ 得 $3(6)+7(5)=53$，$(2)$ 得 $2(6)+5=17$；最後確認所求量為 $27$（選項 A）。",
         "en": "Put $x=6,\\ y=5$ into both equations: $(1)$ gives $3(6)+7(5)=53$ and $(2)$ gives $2(6)+5=17$, confirming $27$ (option A)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $3x+7y=53$ 與 $2x+y=17$，再按計數機聯立方程程式依次輸入兩組係數 $(3,\\ 7,\\ 53)$ 及 $(2,\\ 1,\\ 17)$，即可直接核對 $x=6,\\ y=5$！",
         "en": "Arrange both equations into standard form $3x+7y=53$ and $2x+y=17$, then enter $(3,\\ 7,\\ 53)$ and $(2,\\ 1,\\ 17)$ into your simultaneous-equations program to verify $x=6,\\ y=5$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能不看提示把兩句價錢條件寫成對齊的標準方程，再直接消去不需要的未知數嗎？",
        "en": "With the steps hidden, can you align both pricing equations and eliminate the unwanted unknown directly?"
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
       "concepts": [
        "ws02-c4",
        "ws02-c5"
       ],
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 設未知數並對齊兩條方程",
          "en": "Step 1 · Define unknowns and align both equations"
         },
         "math": "2x+3y=105 \\quad \\cdots (1)\n5x+4y=210 \\quad \\cdots (2)",
         "translate": {
          "caption": {
           "zh": "把英文購物條件逐句翻譯成方程",
           "en": "Translate each pricing clue into algebra"
          },
          "rows": [
           {
            "clue": {
             "en": "total fare of $2$ adults and $3$ children is \\$105",
             "zh": "2 成人 ＋ 3 小童 ＝ 105 元"
            },
            "math": "2x+3y=105"
           },
           {
            "clue": {
             "en": "total fare of $5$ adults and $4$ children is \\$210",
             "zh": "5 成人 ＋ 4 小童 ＝ 210 元"
            },
            "math": "5x+4y=210"
           }
          ]
         },
         "zh": "設一張成人票價為 $x$ 元，一張小童票價為 $y$ 元。根據兩組總價條件列出標準方程 $(1)$ 與 $(2)$。",
         "en": "Let $x$ dollars be the fare for an adult and $y$ dollars be the fare for a child. Form standard equations $(1)$ and $(2)$ from the two total-cost clues."
        },
        {
         "title": {
          "zh": "第 2 步 · 放大方程，對齊 $x$ 的係數",
          "en": "Step 2 · Scale equations to match $x$"
         },
         "math": "(1)\\times \\hlw{5}:\n10x+15y=\\hlw{525} \\quad \\cdots (3)\n(2)\\times \\hlw{2}:\n10x+8y=\\hlw{420} \\quad \\cdots (4)",
         "zh": "要消去 $x$，先把$(1)$ 整條同乘 $5$ 得 (3)、$(2)$ 整條同乘 $2$ 得 (4)。特別留意等號右邊的常數也要一起乘！",
         "en": "To eliminate $x$, multiply all of $(1)$ by $5$ to get (3) and multiply all of $(2)$ by $2$ to get (4). Remember to multiply the constant on the right-hand side too!"
        },
        {
         "title": {
          "zh": "第 3 步 · 直式相減消去 $x$，求出 $y$",
          "en": "Step 3 · Subtract vertically to eliminate $x$ and find $y$"
         },
         "math": "(3) - (4):\n7y=105\n\\hlg{y=15}",
         "align": {
          "caption": {
           "zh": "直式對齊（同號相減，消去 $x$）",
           "en": "Column-aligned elimination (same signs subtract to cancel $x$)"
          },
          "rows": [
           {
            "tag": "(3)",
            "cols": [
             "\\xc{10x}",
             "+15y",
             "=",
             "525"
            ]
           },
           {
            "op": "-",
            "tag": "(4)",
            "cols": [
             "\\xc{10x}",
             "+8y",
             "=",
             "420"
            ]
           }
          ],
          "result": {
           "tag": "",
           "cols": [
            "",
            "\\hlg{7y}",
            "=",
            "\\hlg{105}"
           ]
          }
         },
         "zh": "計算 $(3) - (4)$：$x$ 項剛好抵消，只剩 $y$ 的一元一次方程。解得 $y=15$。",
         "en": "Compute $(3) - (4)$: the $x$-terms cancel, leaving an equation in $y$ alone. Solving gives $y=15$."
        },
        {
         "title": {
          "zh": "第 4 步 · 代回 (1) 求 $x$",
          "en": "Step 4 · Substitute into (1) to find $x$"
         },
         "math": "2x+3(\\hl{15})=105\n2x+45=105\n2x=60\n\\hlg{x=30}",
         "zh": "把 $y=15$ 代回原方程 (1)，移項化簡得出 $x=30$。",
         "en": "Substitute $y=15$ into original equation (1) and solve to get $x=30$."
        },
        {
         "title": {
          "zh": "第 5 步 · 代入求出題目要求的組合總價",
          "en": "Step 5 · Compute the requested combined total"
         },
         "math": "2x+y=2(30)+15\n=\\hlg{75}",
         "zh": "把單價 $x=30$、$y=15$ 代入 2 張成人票與 1 張小童票（$2x+y$），得出總價為 $\\$75$，對應選項 C。",
         "en": "Substitute $x=30$ and $y=15$ into 2 adults and 1 child ($2x+y$) to get \\$75, matching option C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "由兩條價錢方程解得單價 $x=30,\\ y=15$，代入 2 張成人票與 1 張小童票（$2x+y$） 得 $75$，而不是 $60$；請檢查最後代入時的係數有沒有配錯。",
         "en": "Solving gives unit prices $x=30,\\ y=15$, so 2 adults and 1 child ($2x+y$) is $75$, not $60$. Check the final substitution.",
         "nudge": {
          "zh": "先用兩個單價驗算原本的兩句價錢條件，再檢查最後求組合總價時有沒有把 $x$ 和 $y$ 乘反。",
          "en": "Verify both unit prices against the original totals, then check the final combination."
         }
        },
        {
         "opt": "B",
         "zh": "由兩條價錢方程解得單價 $x=30,\\ y=15$，代入 2 張成人票與 1 張小童票（$2x+y$） 得 $75$，而不是 $70$；請檢查最後代入時的係數有沒有配錯。",
         "en": "Solving gives unit prices $x=30,\\ y=15$, so 2 adults and 1 child ($2x+y$) is $75$, not $70$. Check the final substitution.",
         "nudge": {
          "zh": "先用兩個單價驗算原本的兩句價錢條件，再檢查最後求組合總價時有沒有把 $x$ 和 $y$ 乘反。",
          "en": "Verify both unit prices against the original totals, then check the final combination."
         }
        },
        {
         "opt": "D",
         "zh": "由兩條價錢方程解得單價 $x=30,\\ y=15$，代入 2 張成人票與 1 張小童票（$2x+y$） 得 $75$，而不是 $90$；請檢查最後代入時的係數有沒有配錯。",
         "en": "Solving gives unit prices $x=30,\\ y=15$, so 2 adults and 1 child ($2x+y$) is $75$, not $90$. Check the final substitution.",
         "nudge": {
          "zh": "先用兩個單價驗算原本的兩句價錢條件，再檢查最後求組合總價時有沒有把 $x$ 和 $y$ 乘反。",
          "en": "Verify both unit prices against the original totals, then check the final combination."
         }
        }
       ],
       "tip": {
        "zh": "這類卷二題先解出兩件單價，最後別忘記代入題目要求的組合（例如 $2x+3y$）才選答案！",
        "en": "Solve for both unit prices first, then substitute into the exact combination asked in the final sentence."
       },
       "alt": [
        {
         "name": {
          "zh": "代回兩條原方程驗算",
          "en": "Check both original equations"
         },
         "zh": "把 $x=30,\\ y=15$ 代回原方程：$(1)$ 得 $2(30)+3(15)=105$，$(2)$ 得 $5(30)+4(15)=210$；最後確認所求量為 $75$（選項 C）。",
         "en": "Put $x=30,\\ y=15$ into both equations: $(1)$ gives $2(30)+3(15)=105$ and $(2)$ gives $5(30)+4(15)=210$, confirming $75$ (option C)."
        },
        {
         "name": {
          "zh": "DSE 卷二計數機驗算（聯立方程模式）",
          "en": "DSE Paper 2 calculator check"
         },
         "zh": "先把兩條式整理成標準形式 $2x+3y=105$ 與 $5x+4y=210$，再按計數機聯立方程程式依次輸入兩組係數 $(2,\\ 3,\\ 105)$ 及 $(5,\\ 4,\\ 210)$，即可直接核對 $x=30,\\ y=15$！",
         "en": "Arrange both equations into standard form $2x+3y=105$ and $5x+4y=210$, then enter $(2,\\ 3,\\ 105)$ and $(5,\\ 4,\\ 210)$ into your simultaneous-equations program to verify $x=30,\\ y=15$!"
        }
       ],
       "reflect": {
        "zh": "收起步驟後，你能不看提示把兩句價錢條件寫成對齊的標準方程，再直接消去不需要的未知數嗎？",
        "en": "With the steps hidden, can you align both pricing equations and eliminate the unwanted unknown directly?"
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
