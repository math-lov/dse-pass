// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_AS02 = {
 "id": "as02",
 "stage": 2,
 "unit": 10,
 "subtopic": "straight-lines",
 "source": "統測前哨戰 · 直線方程（自編題組）",
 "name": {
  "zh": "統測前哨戰 2 · 直線方程",
  "en": "Uniform Test Warm-up 2 · Equations of Straight Lines"
 },
 "intro": {
  "zh": "這一課練兩種最常見的直線題：① 垂直 ＋ 截距（或過一點）求方程；② 由 $ax+y+b=0$ 的圖判斷 $a$、$b$ 的正負。第二種的圖會在作答之後才出現，所以先自己讀圖判斷，再對答案。所有題目都是為這一課重新設計的（數字與情境都不同），練的是方法。",
  "en": "This topic practises the two most common straight-line questions: ① finding the equation of a line that is perpendicular to a given line and passes through a given point or intercept; ② reading the signs of $a$ and $b$ from the graph of $ax+y+b=0$. The graphs for the second type appear only after you answer, so judge from the description first and then check. Every question was written for this topic with different numbers and contexts, so you practise the method."
 },
 "cmdHints": [
  {
   "en": "perpendicular to",
   "zh": "「垂直於」：兩條線的斜率乘積 $=-1$，所以要取「負倒數」"
  },
  {
   "en": "$x$-intercept / $y$-intercept",
   "zh": "「$x$ 截距／$y$ 截距」：$x$ 截距是 $y=0$ 時的 $x$；$y$ 截距是 $x=0$ 時的 $y$"
  },
  {
   "en": "find the equation of $L$",
   "zh": "「求 $L$ 的方程」：先找斜率，再用點斜式，最後整理成一般式"
  },
  {
   "en": "the graph of $ax+y+b=0$",
   "zh": "「$ax+y+b=0$ 的圖像」：先改寫成 $y=-ax-b$，斜率是 $-a$、$y$ 截距是 $-b$"
  },
  {
   "en": "Which of the following are true?",
   "zh": "「以下哪項正確？」：逐句獨立核對，錯一句就刪走含有它的選項"
  }
 ],
 "lessons": [
  {
   "id": "as02-1",
   "title": {
    "zh": "第 1 節 · 斜率、截距與讀圖",
    "en": "Set 1 · Slope, intercepts and reading graphs"
   },
   "cards": [
    {
     "id": "as02-c1",
     "topic": "as02",
     "title": {
      "zh": "直線方程：斜率、截距與垂直條件",
      "en": "Straight lines: slope, intercepts and the perpendicular condition"
     },
     "body": {
      "zh": "一條直線由兩個數決定：斜率與 $y$ 截距。\n{{math:0}}\n{{math:1}}\n已知兩點求斜率：\n{{math:2}}\n已知斜率與一點，用點斜式：\n{{math:3}}\n最常考的是垂直條件（兩條線互相垂直）：\n{{math:4}}\n做這一類題目的固定四步：① 讀出已知直線的斜率（先寫成 $y=mx+c$）→ ② 取負倒數 → ③ 用題目給的點寫點斜式 → ④ 整理成題目要求的形式。",
      "en": "A straight line is fixed by two numbers: the slope and the $y$-intercept.\n{{math:0}}\n{{math:1}}\nThe slope from two points:\n{{math:2}}\nGiven a slope and one point, use point-slope form:\n{{math:3}}\nThe perpendicular condition appears most often:\n{{math:4}}\nA fixed four-step routine for these questions: ① read the slope of the given line (write it as $y=mx+c$) → ② take the negative reciprocal → ③ write point-slope form using the given point → ④ rearrange into the form the question asks for."
     },
     "math": [
      "y=mx+c",
      "m=\\frac{\\text{rise}}{\\text{run}}",
      "m=\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}",
      "y-y_{1}=m(x-x_{1})",
      "m_{1}m_{2}=-1"
     ],
     "vocab": [
      {
       "en": "slope",
       "zh": "斜率"
      },
      {
       "en": "intercept",
       "zh": "截距（與座標軸相交的那個數）"
      },
      {
       "en": "point-slope form",
       "zh": "點斜式"
      }
     ],
     "warn": {
      "zh": "「垂直」是取斜率的負倒數（$\\frac{2}{3}$ 變 $-\\frac{3}{2}$），只顛倒不變號是錯的；另外 $x$ 截距是 $y=0$ 時的 $x$，$y$ 截距是 $x=0$ 時的 $y$，兩者不要對調。",
      "en": "“Perpendicular” means the negative reciprocal of the slope ($\\frac{2}{3}$ becomes $-\\frac{3}{2}$); inverting without changing the sign is wrong. Also, the $x$-intercept is the value of $x$ when $y=0$, and the $y$-intercept is the value of $y$ when $x=0$ — do not swap them."
     }
    },
    {
     "id": "as02-c2",
     "topic": "as02",
     "title": {
      "zh": "由 ax + y + b = 0 的圖讀出 a、b 的正負",
      "en": "Reading the signs of a and b from the graph of ax + y + b = 0"
     },
     "body": {
      "zh": "題目給的方程是 $ax+y+b=0$，但圖上看到的是「斜率」與「截距」，所以第一步一定是改寫：\n{{math:0}}\n寫成這個形式之後可以直接讀出：\n{{math:1}}\n{{math:2}}\n於是：\n線往右上斜（斜率 $>0$）→ $-a>0$ → $a<0$；\n線往右下斜（斜率 $<0$）→ $-a<0$ → $a>0$；\n交於 $y$ 軸原點之上（$y$ 截距 $>0$）→ $-b>0$ → $b<0$；\n交於 $y$ 軸原點之下（$y$ 截距 $<0$）→ $-b<0$ → $b>0$。\n$\\frac{b}{a}$ 的正負還可以用來判斷線與 $x$ 軸交在原點的左邊還是右邊。",
      "en": "The equation given is $ax+y+b=0$, but the graph shows the slope and the intercepts, so always rewrite first:\n{{math:0}}\nIn this form the two quantities can be read off directly:\n{{math:1}}\n{{math:2}}\nTherefore:\nrising to the right (slope $>0$) → $-a>0$ → $a<0$;\nfalling to the right (slope $<0$) → $-a<0$ → $a>0$;\nmeeting the $y$-axis above the origin ($y$-intercept $>0$) → $-b>0$ → $b<0$;\nmeeting the $y$-axis below the origin ($y$-intercept $<0$) → $-b<0$ → $b>0$.\nThe sign of $\\frac{b}{a}$ also tells you whether the line meets the $x$-axis to the left or the right of the origin."
     },
     "math": [
      "ax+y+b=0",
      "y=-ax-b",
      "\\text{slope}=-a,\\quad y\\text{-intercept}=-b"
     ],
     "vocab": [
      {
       "en": "general form",
       "zh": "一般式（$Ax+By+C=0$）"
      },
      {
       "en": "x-intercept",
       "zh": "$x$ 截距"
      },
      {
       "en": "y-intercept",
       "zh": "$y$ 截距"
      }
     ],
     "warn": {
      "zh": "最常見的兩個錯：① 直接把圖上的 $y$ 截距當成 $b$（其實截距是 $-b$，符號相反）；② 把「線往右上斜」當成 $a>0$（其實斜率是 $-a$）。每次由圖上的數寫成 $a$、$b$ 都要反一次號。",
      "en": "The two most common errors: ① taking the $y$-intercept read from the graph as $b$ (it is actually $-b$, the opposite sign); ② treating “rising to the right” as $a>0$ (the slope is $-a$). Every quantity read from the graph changes sign when written as $a$ or $b$."
     }
    }
   ],
   "long": [],
   "pages": [
    [
     {
      "id": "eph-as02-m01",
      "type": "mc",
      "topic": "as02",
      "unit": 10,
      "subtopic": "straight-lines",
      "difficulty": 2,
      "code": "AS2-M01",
      "source": "統測前哨戰 · 直線方程：垂直與 x 截距（自編）",
      "stem": {
       "text": "The straight line $L$ is perpendicular to the straight line $2x+3y-6=0$. If the $x$-intercept of $L$ is 4, find the equation of $L$.",
       "zh": "直線 $L$ 垂直於直線 $2x+3y-6=0$。若 $L$ 的 $x$ 截距是 4，求 $L$ 的方程。",
       "en": "The straight line $L$ is perpendicular to the straight line $2x+3y-6=0$. If the $x$-intercept of $L$ is 4, find the equation of $L$."
      },
      "options": {
       "A": "$2x+3y-8=0$",
       "B": "$3x-2y+12=0$",
       "C": "$3x-2y-12=0$",
       "D": "$2x+3y+8=0$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 讀出已知直線的斜率",
          "en": "Step 1 · Read the slope of the given line"
         },
         "math": "2x+3y-6=0\n\\Rightarrow y=-\\frac{2}{3}x+2",
         "zh": "把已知直線寫成 $y=mx+c$ 才讀得出斜率：$3y=-2x+6$，兩邊除以 3 得 $y=-\\frac{2}{3}x+2$，斜率是 $-\\frac{2}{3}$。",
         "en": "Write the given line as $y=mx+c$: from $3y=-2x+6$, dividing by 3 gives $y=-\\frac{2}{3}x+2$, so the slope is $-\\frac{2}{3}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 垂直＝取負倒數",
          "en": "Step 2 · Perpendicular means negative reciprocal"
         },
         "math": "m\\times\\left(-\\frac{2}{3}\\right)=-1\n\\Rightarrow m=\\frac{3}{2}",
         "zh": "垂直的兩條線斜率乘積等於 $-1$，所以 $L$ 的斜率是 $-\\frac{2}{3}$ 的負倒數：先顛倒（$\\frac{3}{2}$）、再變號（$-\\frac{3}{2}$ 再變回 $+\\frac{3}{2}$）。",
         "en": "Slopes of perpendicular lines multiply to $-1$, so the slope of $L$ is the negative reciprocal of $-\\frac{2}{3}$, which is $\\frac{3}{2}$."
        },
        {
         "title": {
          "zh": "第 3 步 · 把 x 截距變成一個點",
          "en": "Step 3 · Turn the intercept into a point"
         },
         "math": "y=\\frac{3}{2}(x-4)",
         "zh": "$x$ 截距是 4 的意思是「線與 $x$ 軸交於 $x=4$」，即通過 $(4,\\ 0)$。用點斜式 $y-y_1=m(x-x_1)$，$x_1=4$、$y_1=0$。",
         "en": "An $x$-intercept of 4 means the line meets the $x$-axis at $x=4$, so it passes through $(4,\\ 0)$. Use $y-y_1=m(x-x_1)$ with $x_1=4$ and $y_1=0$."
        },
        {
         "title": {
          "zh": "第 4 步 · 整理成一般式",
          "en": "Step 4 · Rearrange into general form"
         },
         "math": "2y=3x-12\n\\Rightarrow 3x-2y-12=0",
         "zh": "兩邊乘 2 消去分數，再把所有項搬到同一邊，得 $3x-2y-12=0$。答案是 C。",
         "en": "Multiply both sides by 2 and collect all terms on one side to get $3x-2y-12=0$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$2x+3y-8=0$ 用了已知直線的斜率 $-\\frac{2}{3}$，這條線其實與已知直線平行，不是垂直。",
         "en": "$2x+3y-8=0$ uses the slope of the given line, so it is parallel to it rather than perpendicular."
        },
        {
         "opt": "B",
         "zh": "$3x-2y+12=0$ 斜率正確（$\\frac{3}{2}$），但常數項符號錯：把 $(4,\\ 0)$ 代入得 $12-0+12=24\\ne0$。",
         "en": "$3x-2y+12=0$ has the right slope but the wrong constant: $(4,\\ 0)$ gives $12-0+12=24\\ne0$."
        },
        {
         "opt": "D",
         "zh": "$2x+3y+8=0$ 斜率與常數項都錯，而且代入 $(4,\\ 0)$ 也不成立。",
         "en": "$2x+3y+8=0$ gets both the slope and the constant wrong, and $(4,\\ 0)$ does not satisfy it either."
        }
       ],
       "tip": {
        "zh": "垂直 ＝ 斜率「負倒數」（先顛倒、再變號）。寫完方程後，把題目給的那一點代回去看是否等於 0，是最快的驗算。",
        "en": "Perpendicular means the negative reciprocal of the slope. After writing the equation, substitute the given point back to check that it gives 0."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as02-m02",
      "type": "mc",
      "topic": "as02",
      "unit": 10,
      "subtopic": "straight-lines",
      "difficulty": 2,
      "code": "AS2-M02",
      "source": "統測前哨戰 · 直線方程：垂直與 y 截距（自編）",
      "stem": {
       "text": "The straight line $L$ is perpendicular to the straight line $3x-4y+8=0$. If the $y$-intercept of $L$ is $-3$, find the equation of $L$.",
       "zh": "直線 $L$ 垂直於直線 $3x-4y+8=0$。若 $L$ 的 $y$ 截距是 $-3$，求 $L$ 的方程。",
       "en": "The straight line $L$ is perpendicular to the straight line $3x-4y+8=0$. If the $y$-intercept of $L$ is $-3$, find the equation of $L$."
      },
      "options": {
       "A": "$4x+3y-9=0$",
       "B": "$4x+3y+9=0$",
       "C": "$3x-4y+12=0$",
       "D": "$4x-3y-9=0$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 已知直線的斜率",
          "en": "Step 1 · Slope of the given line"
         },
         "math": "3x-4y+8=0\n\\Rightarrow y=\\frac{3}{4}x+2",
         "zh": "$4y=3x+8$，兩邊除以 4 得 $y=\\frac{3}{4}x+2$，斜率 $\\frac{3}{4}$。",
         "en": "From $4y=3x+8$, dividing by 4 gives $y=\\frac{3}{4}x+2$, so the slope is $\\frac{3}{4}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 負倒數",
          "en": "Step 2 · Negative reciprocal"
         },
         "math": "m\\times\\frac{3}{4}=-1\n\\Rightarrow m=-\\frac{4}{3}",
         "zh": "$\\frac{3}{4}$ 的倒數是 $\\frac{4}{3}$，再加負號，所以 $L$ 的斜率是 $-\\frac{4}{3}$。",
         "en": "The reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$; adding the minus sign gives the slope of $L$ as $-\\frac{4}{3}$."
        },
        {
         "title": {
          "zh": "第 3 步 · y 截距就是一點",
          "en": "Step 3 · The y-intercept is a point"
         },
         "math": "y=-\\frac{4}{3}x-3",
         "zh": "$y$ 截距是 $-3$ 表示線通過 $(0,\\ -3)$；用點斜式時 $y-(-3)=y+3$，負號很容易漏。",
         "en": "A $y$-intercept of $-3$ means the line passes through $(0,\\ -3)$; in point-slope form this gives $y-(-3)=y+3$, where the sign is easily dropped."
        },
        {
         "title": {
          "zh": "第 4 步 · 整理",
          "en": "Step 4 · Rearrange"
         },
         "math": "3y=-4x-9\n\\Rightarrow 4x+3y+9=0",
         "zh": "兩邊乘 3 消去分數，再搬到同一邊得 $4x+3y+9=0$。答案是 B。",
         "en": "Multiply by 3 and move everything to one side: $4x+3y+9=0$. The answer is B."
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$3x-4y+12=0$ 用了同一個斜率 $\\frac{3}{4}$，這條線與已知直線平行，不是垂直。",
         "en": "$3x-4y+12=0$ keeps the same slope $\\frac{3}{4}$, so it is parallel to the given line."
        },
        {
         "opt": "D",
         "zh": "$4x-3y-9=0$ 的斜率是 $\\frac{4}{3}$：只把 $\\frac{3}{4}$ 顛倒，忘記變號，相乘得 $+1$ 不是 $-1$。",
         "en": "$4x-3y-9=0$ has slope $\\frac{4}{3}$: the fraction was inverted but not negated, so the product is $+1$, not $-1$."
        },
        {
         "opt": "A",
         "zh": "$4x+3y-9=0$ 斜率正確，但 $y$ 截距變成 $+3$（它通過 $(0,\\ 3)$ 而不是 $(0,\\ -3)$）。",
         "en": "$4x+3y-9=0$ has the right slope but its $y$-intercept is $+3$; it passes through $(0,\\ 3)$ instead of $(0,\\ -3)$."
        }
       ],
       "tip": {
        "zh": "負數截距要特別小心：$y$ 截距 $-3$ 就是線過 $(0,\\ -3)$，代入點斜式時一定要寫 $y+3$。",
        "en": "Be careful with negative intercepts: a $y$-intercept of $-3$ means the line passes through $(0,\\ -3)$, so point-slope form must read $y+3$."
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-as02-m03",
      "type": "mc",
      "topic": "as02",
      "unit": 10,
      "subtopic": "straight-lines",
      "difficulty": 3,
      "code": "AS2-M03",
      "source": "統測前哨戰 · 直線方程：垂直且過一點（自編）",
      "stem": {
       "text": "The straight line $L$ is perpendicular to the straight line $5x-2y-10=0$. If $L$ passes through $(2,\\ -1)$, find the equation of $L$.",
       "zh": "直線 $L$ 垂直於直線 $5x-2y-10=0$。若 $L$ 通過 $(2,\\ -1)$，求 $L$ 的方程。",
       "en": "The straight line $L$ is perpendicular to the straight line $5x-2y-10=0$. If $L$ passes through $(2,\\ -1)$, find the equation of $L$."
      },
      "options": {
       "A": "$2x+5y+1=0$",
       "B": "$2x+5y-1=0$",
       "C": "$5x-2y-12=0$",
       "D": "$5x+2y-8=0$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 已知直線的斜率",
          "en": "Step 1 · Slope of the given line"
         },
         "math": "5x-2y-10=0\n\\Rightarrow y=\\frac{5}{2}x-5",
         "zh": "$2y=5x-10$，兩邊除以 2 得 $y=\\frac{5}{2}x-5$，斜率 $\\frac{5}{2}$。",
         "en": "From $2y=5x-10$, dividing by 2 gives $y=\\frac{5}{2}x-5$, so the slope is $\\frac{5}{2}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 負倒數",
          "en": "Step 2 · Negative reciprocal"
         },
         "math": "m\\times\\frac{5}{2}=-1\n\\Rightarrow m=-\\frac{2}{5}",
         "zh": "$\\frac{5}{2}$ 顛倒成 $\\frac{2}{5}$，再變號得 $-\\frac{2}{5}$。",
         "en": "Inverting $\\frac{5}{2}$ gives $\\frac{2}{5}$; changing the sign gives $-\\frac{2}{5}$."
        },
        {
         "title": {
          "zh": "第 3 步 · 點斜式",
          "en": "Step 3 · Point-slope form"
         },
         "math": "y+1=-\\frac{2}{5}(x-2)",
         "zh": "通過 $(2,\\ -1)$：$y-(-1)$ 要寫成 $y+1$；右邊是 $x-2$。",
         "en": "Through $(2,\\ -1)$: the left side becomes $y+1$ and the right side is $x-2$."
        },
        {
         "title": {
          "zh": "第 4 步 · 整理",
          "en": "Step 4 · Rearrange"
         },
         "math": "5y+5=-2x+4\n\\Rightarrow 2x+5y+1=0",
         "zh": "兩邊乘 5，再把所有項搬到一邊得 $2x+5y+1=0$。答案是 A。",
         "en": "Multiply by 5 and collect terms on one side: $2x+5y+1=0$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$5x-2y-12=0$ 用了同一斜率 $\\frac{5}{2}$（與已知直線平行）；它雖然也經過 $(2,\\ -1)$，但平行不是垂直。",
         "en": "$5x-2y-12=0$ keeps the slope $\\frac{5}{2}$ and is parallel to the given line; it does pass through $(2,\\ -1)$, but parallel is not perpendicular."
        },
        {
         "opt": "D",
         "zh": "$5x+2y-8=0$ 的斜率是 $-\\frac{5}{2}$：與 $\\frac{5}{2}$ 相乘得 $-\\frac{25}{4}\\ne-1$，所以不是垂直。",
         "en": "$5x+2y-8=0$ has slope $-\\frac{5}{2}$; multiplying by $\\frac{5}{2}$ gives $-\\frac{25}{4}\\ne-1$, so it is not perpendicular."
        },
        {
         "opt": "B",
         "zh": "$2x+5y-1=0$ 斜率正確，但代入 $(2,\\ -1)$ 得 $4-5-1=-2\\ne0$，即不通過那一點。",
         "en": "$2x+5y-1=0$ has the right slope, but $(2,\\ -1)$ gives $4-5-1=-2\\ne0$, so the line misses the point."
        }
       ],
       "tip": {
        "zh": "這類題目有三個常見陷阱：斜率忘記取負倒數、負號漏掉、代入點時符號錯。寫完把那一點代回自己的方程，一步就檢查完。",
        "en": "Three common traps: forgetting the negative reciprocal, dropping a minus sign, and substituting the point with the wrong sign. Substituting the point back checks all of them at once."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-as02-m04",
      "type": "mc",
      "topic": "as02",
      "unit": 10,
      "subtopic": "straight-lines",
      "difficulty": 2,
      "code": "AS2-M04",
      "source": "統測前哨戰 · 直線方程：由圖判斷 a、b 的正負（自編）",
      "stem": {
       "text": "The figure shows the graph of $ax+y+b=0$. Which of the following are true?\nI. $a>0$\nII. $b>0$\nIII. The $x$-intercept of the line is positive.",
       "zh": "圖示為 $ax+y+b=0$ 的圖像。以下哪項正確？\nI. $a>0$\nII. $b>0$\nIII. 該直線的 $x$ 截距是正數。",
       "en": "The figure shows the graph of $ax+y+b=0$. Which of the following are true?\nI. $a>0$\nII. $b>0$\nIII. The $x$-intercept of the line is positive."
      },
      "options": {
       "A": "I and II only",
       "B": "I and III only",
       "C": "II and III only",
       "D": "I, II and III"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 把方程改成看得見斜率的形式",
          "en": "Step 1 · Rewrite so that the slope is visible"
         },
         "math": "ax+y+b=0\n\\Rightarrow y=-ax-b",
         "zh": "圖上見到的是「斜率」與「$y$ 截距」，但題目問的是 $a$、$b$；寫成 $y=-ax-b$ 就可以把它們連起來：斜率是 $-a$、$y$ 截距是 $-b$。",
         "en": "The graph shows the slope and the $y$-intercept, while the question asks about $a$ and $b$. Writing $y=-ax-b$ links them: the slope is $-a$ and the $y$-intercept is $-b$."
        },
        {
         "title": {
          "zh": "第 2 步 · 由斜率判斷 a",
          "en": "Step 2 · Decide a from the slope"
         },
         "math": "\\text{slope}=-a>0\n\\Rightarrow a<0",
         "zh": "圖中直線往右上斜，斜率是正數；斜率等於 $-a$，所以 $-a>0$，即 $a<0$ → 陳述 I 是錯的。",
         "en": "The line rises to the right, so its slope is positive. Since the slope equals $-a$, we get $-a>0$ and hence $a<0$ — statement I is false."
        },
        {
         "title": {
          "zh": "第 3 步 · 由 y 截距判斷 b",
          "en": "Step 3 · Decide b from the y-intercept"
         },
         "math": "y\\text{-intercept}=-b<0\n\\Rightarrow b>0",
         "zh": "線與 $y$ 軸交於原點之下，$y$ 截距是負數；$-b<0$ 即 $b>0$ → 陳述 II 是對的。",
         "en": "The line meets the $y$-axis below the origin, so the $y$-intercept is negative; $-b<0$ gives $b>0$ — statement II is true."
        },
        {
         "title": {
          "zh": "第 4 步 · 檢查 x 截距",
          "en": "Step 4 · Check the x-intercept"
         },
         "math": "x\\text{-intercept}=-\\frac{b}{a}>0",
         "zh": "線與 $x$ 軸交於原點之右，$x$ 截距是正數；由 $b>0$、$a<0$ 得 $-\\frac{b}{a}>0$，與圖一致 → 陳述 III 也是對的。只有 II、III 對，答案是 C。",
         "en": "The line meets the $x$-axis to the right of the origin, so the $x$-intercept is positive; with $b>0$ and $a<0$, $-\\frac{b}{a}>0$ agrees — statement III is true as well. Only II and III hold, so the answer is C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "I and II only：以為 III 錯。但 $x$ 截距是 $-\\frac{b}{a}$，$b>0$、$a<0$ 令它必然是正數。",
         "en": "I and II only assumes III is false, but the $x$-intercept is $-\\frac{b}{a}$, which must be positive when $b>0$ and $a<0$."
        },
        {
         "opt": "B",
         "zh": "I and III only：以為 II 錯。線與 $y$ 軸交於原點之下，$-b<0$ 即 $b>0$，II 是對的。",
         "en": "I and III only assumes II is false, but the line meets the $y$-axis below the origin, so $-b<0$ and hence $b>0$."
        },
        {
         "opt": "D",
         "zh": "I, II and III：以為 I 對。線往右上斜表示斜率 $-a>0$，所以 $a<0$，I 其實是錯的。",
         "en": "I, II and III assumes I is true, but rising to the right means the slope $-a>0$, so $a<0$ and I is false."
        }
       ],
       "tip": {
        "zh": "見到 $ax+y+b=0$ 先改寫成 $y=-ax-b$：圖上讀到的斜率與截距，寫成 $a$、$b$ 時每個都要變一次號。",
        "en": "Rewrite $ax+y+b=0$ as $y=-ax-b$ first: every quantity read from the graph changes sign when it is turned into $a$ or $b$."
       }
      },
      "answer": "C",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-a2m04\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"188.9\" x2=\"22.0\" y2=\"71.1\"/><line x1=\"41.6\" y1=\"188.9\" x2=\"41.6\" y2=\"71.1\"/><line x1=\"61.3\" y1=\"188.9\" x2=\"61.3\" y2=\"71.1\"/><line x1=\"80.9\" y1=\"188.9\" x2=\"80.9\" y2=\"71.1\"/><line x1=\"100.5\" y1=\"188.9\" x2=\"100.5\" y2=\"71.1\"/><line x1=\"120.2\" y1=\"188.9\" x2=\"120.2\" y2=\"71.1\"/><line x1=\"139.8\" y1=\"188.9\" x2=\"139.8\" y2=\"71.1\"/><line x1=\"159.5\" y1=\"188.9\" x2=\"159.5\" y2=\"71.1\"/><line x1=\"179.1\" y1=\"188.9\" x2=\"179.1\" y2=\"71.1\"/><line x1=\"198.7\" y1=\"188.9\" x2=\"198.7\" y2=\"71.1\"/><line x1=\"218.4\" y1=\"188.9\" x2=\"218.4\" y2=\"71.1\"/><line x1=\"238.0\" y1=\"188.9\" x2=\"238.0\" y2=\"71.1\"/><line x1=\"22.0\" y1=\"188.9\" x2=\"238.0\" y2=\"188.9\"/><line x1=\"22.0\" y1=\"169.3\" x2=\"238.0\" y2=\"169.3\"/><line x1=\"22.0\" y1=\"149.6\" x2=\"238.0\" y2=\"149.6\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"110.4\" x2=\"238.0\" y2=\"110.4\"/><line x1=\"22.0\" y1=\"90.7\" x2=\"238.0\" y2=\"90.7\"/><line x1=\"22.0\" y1=\"71.1\" x2=\"238.0\" y2=\"71.1\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-a2m04)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"100.5\" y1=\"188.9\" x2=\"100.5\" y2=\"71.1\" marker-end=\"url(#ar-a2m04)\"/><text x=\"105.5\" y=\"69.1\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"106.5\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"22.0\" y1=\"188.9\" x2=\"238.0\" y2=\"80.9\" stroke=\"#111\" stroke-width=\"1.6\"/><circle cx=\"139.8\" cy=\"130.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><circle cx=\"100.5\" cy=\"149.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"27.9\" y=\"102.5\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">ax + y + b = 0</text></svg>",
        "caption": "讀圖：線往右上斜 → 斜率 $>0$；與 $y$ 軸交於原點之下 → $y$ 截距 $<0$；與 $x$ 軸交於原點之右 → $x$ 截距 $>0$"
       }
      ]
     },
     {
      "id": "eph-as02-m05",
      "type": "mc",
      "topic": "as02",
      "unit": 10,
      "subtopic": "straight-lines",
      "difficulty": 2,
      "code": "AS2-M05",
      "source": "統測前哨戰 · 直線方程：由圖判斷 a、b 的正負（自編）",
      "stem": {
       "text": "The figure shows the graph of $ax+y+b=0$. Which of the following are true?\nI. $a>0$\nII. $b>0$\nIII. The $y$-intercept of the line is positive.",
       "zh": "圖示為 $ax+y+b=0$ 的圖像。以下哪項正確？\nI. $a>0$\nII. $b>0$\nIII. 該直線的 $y$ 截距是正數。",
       "en": "The figure shows the graph of $ax+y+b=0$. Which of the following are true?\nI. $a>0$\nII. $b>0$\nIII. The $y$-intercept of the line is positive."
      },
      "options": {
       "A": "I and II only",
       "B": "I and III only",
       "C": "II and III only",
       "D": "I, II and III"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 改寫方程",
          "en": "Step 1 · Rewrite the equation"
         },
         "math": "ax+y+b=0\n\\Rightarrow y=-ax-b",
         "zh": "先看清：斜率是 $-a$、$y$ 截距是 $-b$，兩個都帶著負號。",
         "en": "Note first that the slope is $-a$ and the $y$-intercept is $-b$: both carry a minus sign."
        },
        {
         "title": {
          "zh": "第 2 步 · 斜率（往右下斜）",
          "en": "Step 2 · Slope (falling to the right)"
         },
         "math": "\\text{slope}=-a<0\n\\Rightarrow a>0",
         "zh": "線往右下斜，斜率是負數；$-a<0$ 即 $a>0$ → 陳述 I 是對的。",
         "en": "The line falls to the right, so its slope is negative; $-a<0$ gives $a>0$ — statement I is true."
        },
        {
         "title": {
          "zh": "第 3 步 · y 截距",
          "en": "Step 3 · The y-intercept"
         },
         "math": "y\\text{-intercept}=-b>0\n\\Rightarrow b<0",
         "zh": "線與 $y$ 軸交於原點之上，$y$ 截距是正數；$-b>0$ 即 $b<0$ → 陳述 II 是錯的，而 III（$y$ 截距是正數）是對的。",
         "en": "The line meets the $y$-axis above the origin, so the $y$-intercept is positive; $-b>0$ gives $b<0$ — statement II is false while III is true."
        },
        {
         "title": {
          "zh": "第 4 步 · 只有兩項對",
          "en": "Step 4 · Only two statements hold"
         },
         "math": "a>0,\\ b<0",
         "zh": "I 對、II 錯、III 對 → 答案是「I and III only」，即 B。",
         "en": "I is true, II is false and III is true, giving “I and III only”, that is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "I and II only：看到「線往右下斜」就以為 $b$ 也是正。但 $b$ 由 $y$ 截距決定：截距是正數代表 $-b>0$，所以 $b<0$。",
         "en": "I and II only assumes $b>0$ as well, but $b$ comes from the $y$-intercept: a positive intercept means $-b>0$, so $b<0$."
        },
        {
         "opt": "C",
         "zh": "II and III only：漏了 I。斜率 $-a$ 是負數，所以 $a>0$；把「斜率本身的負號」與「$a$ 的符號」攪亂了。",
         "en": "II and III only drops statement I: the slope $-a$ is negative, so $a>0$. The minus sign inside the slope is confused with the sign of $a$."
        },
        {
         "opt": "D",
         "zh": "I, II and III：II 明顯不成立（$b<0$），不可能三項都對。",
         "en": "I, II and III cannot hold because II clearly fails: $b<0$."
        }
       ],
       "tip": {
        "zh": "「線往右下斜」只決定 $a$ 的符號；$b$ 的符號要另外看 $y$ 截距。兩件事分開處理就不會混。",
        "en": "A line falling to the right decides only the sign of $a$; the sign of $b$ comes from the $y$-intercept. Keep the two separate."
       }
      },
      "answer": "B",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-a2m05\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"188.9\" x2=\"22.0\" y2=\"71.1\"/><line x1=\"41.6\" y1=\"188.9\" x2=\"41.6\" y2=\"71.1\"/><line x1=\"61.3\" y1=\"188.9\" x2=\"61.3\" y2=\"71.1\"/><line x1=\"80.9\" y1=\"188.9\" x2=\"80.9\" y2=\"71.1\"/><line x1=\"100.5\" y1=\"188.9\" x2=\"100.5\" y2=\"71.1\"/><line x1=\"120.2\" y1=\"188.9\" x2=\"120.2\" y2=\"71.1\"/><line x1=\"139.8\" y1=\"188.9\" x2=\"139.8\" y2=\"71.1\"/><line x1=\"159.5\" y1=\"188.9\" x2=\"159.5\" y2=\"71.1\"/><line x1=\"179.1\" y1=\"188.9\" x2=\"179.1\" y2=\"71.1\"/><line x1=\"198.7\" y1=\"188.9\" x2=\"198.7\" y2=\"71.1\"/><line x1=\"218.4\" y1=\"188.9\" x2=\"218.4\" y2=\"71.1\"/><line x1=\"238.0\" y1=\"188.9\" x2=\"238.0\" y2=\"71.1\"/><line x1=\"22.0\" y1=\"188.9\" x2=\"238.0\" y2=\"188.9\"/><line x1=\"22.0\" y1=\"169.3\" x2=\"238.0\" y2=\"169.3\"/><line x1=\"22.0\" y1=\"149.6\" x2=\"238.0\" y2=\"149.6\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"110.4\" x2=\"238.0\" y2=\"110.4\"/><line x1=\"22.0\" y1=\"90.7\" x2=\"238.0\" y2=\"90.7\"/><line x1=\"22.0\" y1=\"71.1\" x2=\"238.0\" y2=\"71.1\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-a2m05)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"100.5\" y1=\"188.9\" x2=\"100.5\" y2=\"71.1\" marker-end=\"url(#ar-a2m05)\"/><text x=\"105.5\" y=\"69.1\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"106.5\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"22.0\" y1=\"71.1\" x2=\"238.0\" y2=\"179.1\" stroke=\"#111\" stroke-width=\"1.6\"/><circle cx=\"139.8\" cy=\"130.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><circle cx=\"100.5\" cy=\"110.4\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"27.9\" y=\"177.1\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">ax + y + b = 0</text></svg>",
        "caption": "讀圖：線往右下斜 → 斜率 $<0$；與 $y$ 軸交於原點之上 → $y$ 截距 $>0$；與 $x$ 軸交於原點之右 → $x$ 截距 $>0$"
       }
      ]
     },
     {
      "id": "eph-as02-m06",
      "type": "mc",
      "topic": "as02",
      "unit": 10,
      "subtopic": "straight-lines",
      "difficulty": 3,
      "code": "AS2-M06",
      "source": "統測前哨戰 · 直線方程：由圖判斷 a、b 的正負（自編）",
      "stem": {
       "text": "The figure shows the graph of $ax+y+b=0$. Which of the following are true?\nI. $a>0$\nII. $b>0$\nIII. The $x$-intercept of the line is negative.",
       "zh": "圖示為 $ax+y+b=0$ 的圖像。以下哪項正確？\nI. $a>0$\nII. $b>0$\nIII. 該直線的 $x$ 截距是負數。",
       "en": "The figure shows the graph of $ax+y+b=0$. Which of the following are true?\nI. $a>0$\nII. $b>0$\nIII. The $x$-intercept of the line is negative."
      },
      "options": {
       "A": "I and II only",
       "B": "I and III only",
       "C": "II and III only",
       "D": "I, II and III"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 改寫方程",
          "en": "Step 1 · Rewrite the equation"
         },
         "math": "ax+y+b=0\n\\Rightarrow y=-ax-b",
         "zh": "斜率 $-a$、$y$ 截距 $-b$；圖上兩個數都在原點之下，表示兩個都是負數。",
         "en": "The slope is $-a$ and the $y$-intercept is $-b$; both quantities read from the graph are negative."
        },
        {
         "title": {
          "zh": "第 2 步 · 斜率（往右下斜）",
          "en": "Step 2 · Slope (falling to the right)"
         },
         "math": "\\text{slope}=-a<0\n\\Rightarrow a>0",
         "zh": "線往右下斜 → 斜率負 → $-a<0$ → $a>0$：陳述 I 對。",
         "en": "The line falls to the right, so the slope is negative, $-a<0$ and hence $a>0$: statement I holds."
        },
        {
         "title": {
          "zh": "第 3 步 · y 截距",
          "en": "Step 3 · The y-intercept"
         },
         "math": "y\\text{-intercept}=-b<0\n\\Rightarrow b>0",
         "zh": "線與 $y$ 軸交於原點之下 → $y$ 截距負 → $-b<0$ → $b>0$：陳述 II 也對。",
         "en": "The line meets the $y$-axis below the origin, so the $y$-intercept is negative, $-b<0$ and $b>0$: statement II also holds."
        },
        {
         "title": {
          "zh": "第 4 步 · x 截距",
          "en": "Step 4 · The x-intercept"
         },
         "math": "x\\text{-intercept}=-\\frac{b}{a}<0",
         "zh": "線與 $x$ 軸交於原點之左 → $x$ 截距是負數。驗算：$b>0$、$a>0$，$-\\frac{b}{a}$ 果然是負數 → 陳述 III 也對。三項都對，答案是 D。",
         "en": "The line meets the $x$-axis to the left of the origin, so the $x$-intercept is negative. Check: with $b>0$ and $a>0$, $-\\frac{b}{a}$ is indeed negative, so III holds too. All three hold, and the answer is D."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "I and II only：以為 III 錯。$x$ 截距是 $-\\frac{b}{a}$，$b>0$、$a>0$ 令它必然是負數，III 是對的。",
         "en": "I and II only assumes III is false, but the $x$-intercept $-\\frac{b}{a}$ must be negative when $b>0$ and $a>0$."
        },
        {
         "opt": "B",
         "zh": "I and III only：以為 II 錯。線與 $y$ 軸交於原點之下，$-b<0$ 即 $b>0$，II 是對的。",
         "en": "I and III only assumes II is false, but meeting the $y$-axis below the origin means $-b<0$ and hence $b>0$."
        },
        {
         "opt": "C",
         "zh": "II and III only：以為 I 錯。線往右下斜，斜率 $-a<0$，所以 $a>0$，I 是對的。",
         "en": "II and III only assumes I is false, but a line falling to the right has slope $-a<0$, so $a>0$ and I is true."
        }
       ],
       "tip": {
        "zh": "三句陳述都可能同時成立；不要因為「通常是兩項對」而不敢選「I, II and III」。每句都用圖獨立核對一次。",
        "en": "All three statements can hold at once. Do not avoid “I, II and III” just because two are usually true — check each statement against the graph separately."
       }
      },
      "answer": "D",
      "verify": "checked",
      "figures": [
       {
        "svg": "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\"><defs><marker id=\"ar-a2m06\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6.5\" markerHeight=\"6.5\" orient=\"auto-start-reverse\"><path d=\"M0,0 L10,5 L0,10 z\" fill=\"#111\"/></marker></defs><g stroke=\"#E3E3E3\" stroke-width=\"1\"><line x1=\"22.0\" y1=\"194.8\" x2=\"22.0\" y2=\"65.2\"/><line x1=\"43.6\" y1=\"194.8\" x2=\"43.6\" y2=\"65.2\"/><line x1=\"65.2\" y1=\"194.8\" x2=\"65.2\" y2=\"65.2\"/><line x1=\"86.8\" y1=\"194.8\" x2=\"86.8\" y2=\"65.2\"/><line x1=\"108.4\" y1=\"194.8\" x2=\"108.4\" y2=\"65.2\"/><line x1=\"130.0\" y1=\"194.8\" x2=\"130.0\" y2=\"65.2\"/><line x1=\"151.6\" y1=\"194.8\" x2=\"151.6\" y2=\"65.2\"/><line x1=\"173.2\" y1=\"194.8\" x2=\"173.2\" y2=\"65.2\"/><line x1=\"194.8\" y1=\"194.8\" x2=\"194.8\" y2=\"65.2\"/><line x1=\"216.4\" y1=\"194.8\" x2=\"216.4\" y2=\"65.2\"/><line x1=\"238.0\" y1=\"194.8\" x2=\"238.0\" y2=\"65.2\"/><line x1=\"22.0\" y1=\"194.8\" x2=\"238.0\" y2=\"194.8\"/><line x1=\"22.0\" y1=\"173.2\" x2=\"238.0\" y2=\"173.2\"/><line x1=\"22.0\" y1=\"151.6\" x2=\"238.0\" y2=\"151.6\"/><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\"/><line x1=\"22.0\" y1=\"108.4\" x2=\"238.0\" y2=\"108.4\"/><line x1=\"22.0\" y1=\"86.8\" x2=\"238.0\" y2=\"86.8\"/><line x1=\"22.0\" y1=\"65.2\" x2=\"238.0\" y2=\"65.2\"/></g><g stroke=\"#333\" stroke-width=\"1.3\" fill=\"#333\"><line x1=\"22.0\" y1=\"130.0\" x2=\"238.0\" y2=\"130.0\" marker-end=\"url(#ar-a2m06)\"/><text x=\"243.0\" y=\"144.0\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">x</text><line x1=\"151.6\" y1=\"194.8\" x2=\"151.6\" y2=\"65.2\" marker-end=\"url(#ar-a2m06)\"/><text x=\"156.6\" y=\"63.2\" font-size=\"11\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">y</text><text x=\"157.6\" y=\"144.0\" font-size=\"10\" fill=\"#333\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">O</text></g><line x1=\"22.0\" y1=\"86.8\" x2=\"238.0\" y2=\"194.8\" stroke=\"#111\" stroke-width=\"1.6\"/><circle cx=\"108.4\" cy=\"130.0\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><circle cx=\"151.6\" cy=\"151.6\" r=\"4.6\" fill=\"#fff\" stroke=\"#111\" stroke-width=\"1.7\"/><text x=\"28.5\" y=\"181.8\" font-size=\"11.0\" fill=\"#111\" font-family=\"system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif\">ax + y + b = 0</text></svg>",
        "caption": "讀圖：線往右下斜 → 斜率 $<0$；兩個截距都在原點之下 → $y$ 截距 $<0$、$x$ 截距 $<0$"
       }
      ]
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 6,
  "long": 0,
  "cards": 2,
  "pages": 2
 }
};
