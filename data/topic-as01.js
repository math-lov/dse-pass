// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_AS01 = {
 "id": "as01",
 "stage": 2,
 "unit": 1,
 "subtopic": "quadratic-equations",
 "source": "統測前哨戰 · 二次方程與複數（自編題組）",
 "name": {
  "zh": "統測前哨戰 1 · 二次方程與複數",
  "en": "Uniform Test Warm-up 1 · Quadratic Equations and Complex Numbers"
 },
 "intro": {
  "zh": "這一課把統測範圍內「二次方程與複數」最基本的題型逐種練熟：先看概念卡，再看逐步示範，最後每頁三題自己做。題目都是為這一課重新設計的（數字與情境都不同），所以練到的是方法，不是背答案。二次方程與複數屬於同一個課程單元，這裡分兩節編排：第 1 節二次方程、第 2 節複數。",
  "en": "This topic drills the basic question types of quadratic equations and complex numbers, one type at a time: read the concept cards, follow the step-by-step demonstrations, then work through three questions per page. Every question was written for this topic with different numbers and contexts, so you practise the method rather than memorising answers. Quadratic equations and complex numbers belong to the same curriculum unit, and are arranged here as two sets: Set 1 on quadratic equations and Set 2 on complex numbers."
 },
 "cmdHints": [
  {
   "en": "Let $k$ be a constant",
   "zh": "「設 $k$ 為常數」：答案可以含有 $k$，不要當它是要求的值"
  },
  {
   "en": "has equal real roots",
   "zh": "「有等實根」：判別式 $\\Delta=0$，未知數只有一個值"
  },
  {
   "en": "is a root of the equation",
   "zh": "「是方程的根」：代入就成立，用來化簡或求另一塊（不用解方程）"
  },
  {
   "en": "in the form $a+bi$",
   "zh": "「以 $a+bi$ 的形式表示」：實部、虛部分開寫，不要留下 $i^{2}$"
  },
  {
   "en": "Hence",
   "zh": "「由此」：必須用 (a) 的結果，(a)→(b) 的固定套路"
  },
  {
   "en": "Solve the equation",
   "zh": "「解方程」：先移項成標準式，再分解；分不到才用公式"
  }
 ],
 "lessons": [
  {
   "id": "as01-1",
   "title": {
    "zh": "第 1 節 · 二次方程",
    "en": "Set 1 · Quadratic equations"
   },
   "cards": [
    {
     "id": "as01-c1",
     "topic": "as01",
     "title": {
      "zh": "解一元二次方程：三個實用方法",
      "en": "Solving a quadratic equation: three practical methods"
     },
     "body": {
      "zh": "解一元二次方程的方法不只一種 —— 因式分解、二次公式、配方法，或者兩邊有相同因式時直接約簡。本課集中三個最實用的：\n① 因式分解（用計算機求根，再逆推因式）—— 唔需要硬做十字相乘；\n② 兩邊有相同因式時：先取「它 $=0$」得一個根，再在「它 $\\ne 0$」時約走它得另一個根；\n③ 二次公式 $x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$ —— 根是根式、或係數唔靚時用。\n方法一（計算機因式分解）：Casio fx-50FH II 按【FMLA 01】（或 fx-3650P II 執行 Prog 1），輸入 $a$、$b$、$c$ 求兩根。逆推口訣：分數根 $x=\\frac{p}{q}$ → 因式 $(qx-p)$；整數根 $x=k$ → 因式 $(x-k)$：\n{{math:0}}\n方法二（兩邊有相同因式）：分兩種情況就唔會漏根 ——\nⓐ 先假設那個共同因式 $=0$：它一定滿足方程（兩邊都變成 0），所以立即得到一個根；\nⓑ 其餘情況（它是 $\\ne 0$）才可以兩邊約走它，解剩下的一條一次方程，得到另一個根。\n✗ 錯（不分情況就直接約走 $x$）：這樣只剩 $x=-8$，漏掉 $x=0${{math:1}}\n✓ 對（先分情況）：{{math:2}}\n例：解 $(x-2t)(x-3t)=(6t-x)(x-3t)$ ——先取 $(x-3t)=0$ 得 $x=3t$；其餘情況約走 $(x-3t)$，得 $2x-8t=0$，即 $x=4t$ —— 兩根齊全。\n（把所有項移到一邊再抽公因式，結果完全一樣；兩種做法都可以，選自己做得穩的那一種。）\n方法三（二次公式）：因式分解唔靚（根是根式）時用：{{math:3}}\n最後：不論用哪個方法，答案一定要寫齊所有根（「or」前後都要）。",
      "en": "There is more than one way to solve a quadratic equation — factorisation, the quadratic formula, completing the square, or cancelling when both sides share the same factor. This lesson focuses on the three most useful:\n(1) factorisation (find the roots with the calculator, then work back to the factors) — no need to force the cross-method;\n(2) a factor on both sides: take it $=0$ first for one root, then cancel it for the other root;\n(3) the quadratic formula $x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}$ — for surd roots or awkward coefficients.\nMethod 1 (calculator factorisation): on a Casio fx-50FH II press [FMLA 01] (or run Prog 1 on a fx-3650P II) and enter $a$, $b$, $c$ to get the two roots. Reverse rule: a fraction root $x=\\frac{p}{q}$ gives the factor $(qx-p)$; an integer root $x=k$ gives $(x-k)$:\n{{math:0}}\nMethod 2 (a factor on both sides): split it into two cases and no root is lost —\n(a) first assume that common factor $=0$: it always satisfies the equation (both sides become 0), so you get one root straight away;\n(b) for everything else (the factor is $\\ne 0$), you may cancel it and solve the remaining linear equation — that gives the other root.\n✗ Wrong (cancelling $x$ without splitting the cases): this leaves only $x=-8$ and loses $x=0${{math:1}}\n✓ Right (split the cases first): {{math:2}}\nExample: solve $(x-2t)(x-3t)=(6t-x)(x-3t)$ — take $(x-3t)=0$ to get $x=3t$; in the other case cancel $(x-3t)$ to get $2x-8t=0$, i.e. $x=4t$ — both roots kept.\n(Moving everything to one side and factoring gives exactly the same roots; both routes are acceptable, so use whichever you are steadier at.)\nMethod 3 (quadratic formula): use it when factorisation is not clean (surd roots): {{math:3}}\nFinally: whichever method you use, always write every root (both sides of “or”)."
     },
     "math": [
      "3x^{2}-14x+8=0\n\\Rightarrow x=\\frac{2}{3}\\text{ or }4\n\\Rightarrow (3x-2)(x-4)=0",
      "x(2x+3)=x(x-5)\n\\Rightarrow 2x+3=x-5\n\\Rightarrow x=-8",
      "x(2x+3)=x(x-5)\n\\text{Case 1: }x=0:\\ \\text{both sides}=0\\ \\Rightarrow\\ x=0\n\\text{Case 2: }x\\ne 0:\\ 2x+3=x-5\\ \\Rightarrow\\ x=-8\n\\text{Roots: }x=0\\text{ or }-8",
      "x^{2}-4x-2=0\n\\Rightarrow x=\\frac{4\\pm\\sqrt{16+8}}{2}=\\frac{4\\pm 2\\sqrt{6}}{2}=2\\pm\\sqrt{6}"
     ],
     "warn": {
      "zh": "兩邊「約走」相同因式 ＝ 假設它 $\\ne 0$：不分情況就會漏掉「它 $=0$」那個根。做法：先取「公因式 $=0$」得一個根，再在「它 $\\ne 0$」時約走，取另一個根。答案務必寫齊所有根。",
      "en": "“Cancelling” a factor that appears on both sides assumes it is $\\ne 0$: without splitting cases you lose the root “it $=0$”. Take the factor $=0$ for one root first, then cancel it for the other. Always write every root."
     },
     "vocab": [
      {
       "en": "factor method",
       "zh": "因式分解法"
      },
      {
       "en": "root",
       "zh": "根"
      },
      {
       "en": "cancel",
       "zh": "約走（兩邊同除）"
      }
     ]
    },
    {
     "id": "as01-c2",
     "topic": "as01",
     "title": {
      "zh": "題目說「$\\alpha$ 是方程的一個根」＝把 $\\alpha$ 代入等於 0",
      "en": "“$\\alpha$ is a root” means substituting it gives 0"
     },
     "body": {
      "zh": "卷二最愛考這種題：已知一個根，要求另一條式子的值 —— 做法通常是兩步：① 寫下 $a\\alpha^{2}+b\\alpha+c=0$；② 把方程整理成「$\\alpha^{2}=$（一條含有 $\\alpha$ 的式子）」，再整塊代入目標式：那個式子是分數也可以 —— 分子整塊乘，約簡時每一項都要除。\n例：已知 $\\alpha$ 是方程 $x^{2}-4x-2=0$ 的一個根，求 $3+8\\alpha-2\\alpha^{2}$ 的值。{{math:0}}\n不需要求出 $\\alpha$ 的數值（它通常是無理數）；用「根」這個關係就夠。\n另一個例子：已知 $\\beta$ 是方程 $3\\beta^{2}-5\\beta-7=0$ 的一個根，求 $4+10\\beta-6\\beta^{2}$ 的值。{{math:1}}",
      "en": "A Paper 2 favourite: given one root, find the value of another expression — usually two steps: (1) write down $a\\alpha^{2}+b\\alpha+c=0$; (2) rearrange the equation into $\\alpha^{2}=$ (an expression in $\\alpha$), then substitute that whole expression into the target; a fraction is fine — multiply the whole numerator, and divide every term when cancelling.\nExample: given that $\\alpha$ is a root of $x^{2}-4x-2=0$, find the value of $3+8\\alpha-2\\alpha^{2}$. {{math:0}}\nYou do not need the value of $\\alpha$ itself (it is usually irrational); the root relation is enough.\nAnother example: given that $\\beta$ is a root of $3\\beta^{2}-5\\beta-7=0$, find the value of $4+10\\beta-6\\beta^{2}$. {{math:1}}"
     },
     "math": [
      "\\alpha^{2}-4\\alpha-2=0\n\\Rightarrow \\alpha^{2}-4\\alpha=2\n\\Rightarrow 3+8\\alpha-2\\alpha^{2}=3-2(\\alpha^{2}-4\\alpha)=3-2(2)=-1",
      "3\\beta^{2}-5\\beta-7=0\n\\Rightarrow \\beta^{2}=\\frac{5\\beta+7}{3}\n\\Rightarrow -6\\beta^{2}=-6\\cdot\\frac{5\\beta+7}{3}=-2(5\\beta+7)=-10\\beta-14\n\\Rightarrow 4+10\\beta-6\\beta^{2}=4+10\\beta-(10\\beta+14)=-10"
     ],
     "warn": {
      "zh": "代入分數時分子要整塊乘：$-6\\times\\frac{5\\beta+7}{3}=-2(5\\beta+7)$（$-6\\div3=-2$），不是 $-2\\times5\\beta+7$；約簡時分子每一項都要除，常數項最容易漏（$-42\\div3=-14$）。",
      "en": "When the subject is a fraction, multiply the whole numerator: $-6\\times\\frac{5\\beta+7}{3}=-2(5\\beta+7)$ (because $-6\\div3=-2$), not $-2\\times5\\beta+7$. Every term must be divided, and the constant is the one students forget."
     },
     "vocab": [
      {
       "en": "root of an equation",
       "zh": "方程的根"
      },
      {
       "en": "substitute",
       "zh": "代入"
      }
     ]
    },
    {
     "id": "as01-c3",
     "topic": "as01",
     "title": {
      "zh": "判別式 $\\Delta=b^{2}-4ac$：有實根／等根／無實根",
      "en": "The discriminant $\\Delta=b^{2}-4ac$: real, equal or no real roots"
     },
     "body": {
      "zh": "先寫成 $ax^{2}+bx+c=0$，再算 $\\Delta=b^{2}-4ac$：{{math:0}}\n題目字眼對照：\n· 「有實根」→ $\\Delta\\ge 0$（包含等根，所以有等號）\n· 「有兩個相異實根」→ $\\Delta>0$\n· 「有等根／重根」→ $\\Delta=0$\n· 「無實根」→ $\\Delta<0$\n使用判別式，多數是用來求未知的係數（如下列例子中的 $k$），因為判別式是不會包含方程式中的未知數（如下列例子中的 $x$）。{{math:1}}",
      "en": "Write the equation as $ax^{2}+bx+c=0$, then compute $\\Delta=b^{2}-4ac$: {{math:0}}\nMatching the wording:\n· “has real roots” → $\\Delta\\ge 0$ (equal roots count, so the equality is included)\n· “has two distinct real roots” → $\\Delta>0$\n· “has equal (repeated) roots” → $\\Delta=0$\n· “has no real roots” → $\\Delta<0$\nThe discriminant is mostly used to find an unknown coefficient (such as $k$ in the example below), because the discriminant never contains the unknown in the equation (such as $x$ in the example below). {{math:1}}"
     },
     "math": [
      "\\Delta>0:\\ \\text{two distinct real roots}\n\\Delta=0:\\ \\text{equal roots}\n\\Delta<0:\\ \\text{no real roots}",
      "2x^{2}-4x+k=1\\ \\text{has real roots}\n\\Rightarrow 2x^{2}-4x+(k-1)=0\n\\Rightarrow \\Delta=(-4)^{2}-4(2)(k-1)=24-8k\\ge 0\n\\Rightarrow k\\le 3"
     ],
     "warn": {
      "zh": "最常見錯誤：忘記把方程搬成「$=0$」的標準形，令常數項寫錯（例如 $k=1$ 要搬過去變成 $k-1$）。",
      "en": "The most common mistake: forgetting to rearrange into the “$=0$” standard form, so the constant term is wrong (e.g. $k=1$ must move across to become $k-1$)."
     },
     "vocab": [
      {
       "en": "discriminant",
       "zh": "判別式"
      },
      {
       "en": "real roots",
       "zh": "實根"
      },
      {
       "en": "equal roots",
       "zh": "等根／重根"
      },
      {
       "en": "range of values",
       "zh": "取值範圍"
      }
     ]
    },
    {
     "id": "as01-c4",
     "topic": "as01",
     "title": {
      "zh": "根與係數：$\\alpha+\\beta$、$\\alpha\\beta$ 與 $\\alpha^{2}+\\beta^{2}$",
      "en": "Sum and product of roots, and $\\alpha^{2}+\\beta^{2}$"
     },
     "body": {
      "zh": "如果 $\\alpha$、$\\beta$ 是方程 $ax^{2}+bx+c=0$ 的兩個根：\n{{math:0}}\n不用解方程（根通常是無理數，解出來也不漂亮）—— 用這兩個關係就夠。\n最常考的目標式：\n{{math:1}}\n例：$x^{2}+kx-15=0$ 的根是 $\\alpha$ 與 $\\beta$，以 $k$ 表示 $\\alpha^{2}+\\beta^{2}$：\n{{math:2}}\n（延伸：$(\\alpha-\\beta)^{2}=(\\alpha+\\beta)^{2}-4\\alpha\\beta$；$\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\alpha+\\beta}{\\alpha\\beta}$。）\n這類題目多數 3 分：(1M) 寫出 $\\alpha+\\beta$ 與 $\\alpha\\beta$、(1M) 用恆等式拆開 $\\alpha^{2}+\\beta^{2}$、(1A) 代入並寫出答案。",
      "en": "If $\\alpha$ and $\\beta$ are the roots of $ax^{2}+bx+c=0$:\n{{math:0}}\nThere is no need to solve the equation (the roots are usually irrational) — these two relations are enough.\nThe most common target expression:\n{{math:1}}\nExample: the roots of $x^{2}+kx-15=0$ are $\\alpha$ and $\\beta$; express $\\alpha^{2}+\\beta^{2}$ in terms of $k$:\n{{math:2}}\n(Also useful: $(\\alpha-\\beta)^{2}=(\\alpha+\\beta)^{2}-4\\alpha\\beta$ and $\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\alpha+\\beta}{\\alpha\\beta}$.)\nQuestions of this kind are usually worth 3 marks: one mark for the sum and the product, one for the identity, and one for the final answer."
     },
     "math": [
      "\\alpha+\\beta=-\\frac{b}{a},\\ \\alpha\\beta=\\frac{c}{a}",
      "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
      "x^{2}+kx-15=0\n\\Rightarrow \\alpha+\\beta=-k,\\ \\alpha\\beta=-15\n\\Rightarrow \\alpha^{2}+\\beta^{2}=(-k)^{2}-2(-15)\n=k^{2}+30"
     ],
     "warn": {
      "zh": "最常見錯誤：硬解方程求 $\\alpha$、$\\beta$ 的數值，再逐個平方相加 —— 這樣既花時間又容易計錯。看到「兩根是 $\\alpha$ 和 $\\beta$」就要反射式寫出 $\\alpha+\\beta$ 與 $\\alpha\\beta$。另外，$\\alpha\\beta$ 要連符號：$x^{2}+kx-15=0$ 的 $\\alpha\\beta=-15$。",
      "en": "The classic mistake is solving the equation for $\\alpha$ and $\\beta$ and squaring them one by one — slow and error-prone. When a question says “the roots are $\\alpha$ and $\\beta$”, immediately write down $\\alpha+\\beta$ and $\\alpha\\beta$. Keep the sign of the product: for $x^{2}+kx-15=0$ we have $\\alpha\\beta=-15$."
     },
     "vocab": [
      {
       "en": "sum of roots",
       "zh": "兩根之和"
      },
      {
       "en": "product of roots",
       "zh": "兩根之積"
      },
      {
       "en": "in terms of",
       "zh": "以…表示"
      }
     ]
    }
   ],
   "long": [
    {
     "id": "eph-as01-ex01",
     "type": "long",
     "topic": "as01",
     "unit": 1,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "AS1-EX1",
     "source": "統測前哨戰 · 二次方程：已知一根求係數（自編）",
     "stem": {
      "text": "$-3$ is a root of the equation $2x^{2}+7x+c=0$, where $c$ is a constant.",
      "zh": "$-3$ 是方程 $2x^{2}+7x+c=0$ 的一個根，其中 $c$ 為常數。",
      "en": "$-3$ is a root of the equation $2x^{2}+7x+c=0$, where $c$ is a constant."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find $c$.",
       "marks": 2,
       "zh": "求 $c$。",
       "en": "Find $c$."
      },
      {
       "label": "(b)",
       "text": "Solve the equation.",
       "marks": 2,
       "zh": "解該方程。",
       "en": "Solve the equation."
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 把已知根代進去",
         "en": "Step 1 · Substitute the known root"
        },
        "math": "2(-3)^{2}+7(-3)+c=0",
        "zh": "「$-3$ 是根」的意思是代入 $x=-3$ 之後方程成立。負數代入一定要加括號：$(-3)^2=9$ 才對。",
        "en": "“$-3$ is a root” means the equation holds when $x=-3$ is substituted. Always bracket a negative number: $(-3)^{2}=9$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 解出 c",
         "en": "Step 2 · Solve for c"
        },
        "math": "18-21+c=0\n\\Rightarrow c=3",
        "zh": "$2\\times9=18$、$7\\times(-3)=-21$，所以 $18-21+c=0$，得 $c=3$。",
        "en": "$2\\times9=18$ and $7\\times(-3)=-21$, so $18-21+c=0$ and hence $c=3$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 分解新方程",
         "en": "Step 3 · Factorise the equation"
        },
        "math": "2x^{2}+7x+3=(2x+1)(x+3)",
        "zh": "有了 $c$ 就可以分解：$2x\\cdot x=2x^2$、$1\\cdot3=3$，交叉項 $2x\\cdot3+1\\cdot x=7x$ 對得上。",
        "en": "With $c$ known, factorise: $2x\\cdot x=2x^{2}$, $1\\cdot3=3$, and the cross terms $2x\\cdot3+1\\cdot x=7x$ match.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 寫出兩根並驗算",
         "en": "Step 4 · State both roots and check"
        },
        "math": "x=-\\frac{1}{2} \\text{ or } x=-3",
        "zh": "兩塊分別等於 0。$x=-3$ 正好是題目給的已知根 —— 這就證明前面的計算沒有錯，另一根是 $-\\frac{1}{2}$。",
        "en": "Each factor gives a root. The value $x=-3$ is the root given in the question, which confirms the earlier work; the other root is $-\\frac{1}{2}$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "代負數漏括號",
        "labelEn": "missing brackets with a negative number",
        "zh": "寫成 $2\\cdot-3^2$ 會計成 $-18$，$c$ 就會求錯。負數代入一定要寫 $2(-3)^2$。",
        "en": "Writing $2\\cdot-3^{2}$ gives $-18$ and a wrong value of $c$. Always write $2(-3)^{2}$ when substituting a negative number."
       },
       {
        "label": "只寫一個根",
        "labelEn": "giving only one root",
        "zh": "已知的 $x=-3$ 只是其中一個根，另一根要自己解出來；只寫一個會失分。",
        "en": "The given value $x=-3$ is only one root; the other must be found by solving. Giving one root loses marks."
       }
      ],
      "tip": {
       "zh": "已知一根求係數：代進去 → 解一元一次 → 回到原方程分解 → 用已知根驗算。四步固定，題目一定會有一根是「靚數」。",
       "en": "For a question giving one root: substitute, solve the linear equation, factorise the original equation, then check with the given root."
      },
      "alt": [
       {
        "name": {
         "zh": "用兩根之和驗算",
         "en": "Check with the sum of roots"
        },
        "zh": "求出 $c=3$ 之後，$2x^2+7x+3=0$ 的兩根之和應該是 $-\\frac{7}{2}$。把 $-\\frac{1}{2}$ 與 $-3$ 相加：$-\\frac{1}{2}-3=-\\frac{7}{2}$，對得上，就證明分解無誤。",
        "en": "After finding $c=3$, the sum of the roots of $2x^{2}+7x+3=0$ must be $-\\frac{7}{2}$. Adding $-\\frac{1}{2}$ and $-3$ gives $-\\frac{7}{2}$, which confirms the factorisation."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-as01-ex02",
     "type": "long",
     "topic": "as01",
     "unit": 1,
     "subtopic": "quadratic-equations",
     "difficulty": 2,
     "code": "AS1-EX2",
     "source": "統測前哨戰 · 二次方程：已知一根求係數（自編）",
     "stem": {
      "text": "$5$ is a root of the equation $3x^{2}-14x+k=0$, where $k$ is a constant.",
      "zh": "$5$ 是方程 $3x^{2}-14x+k=0$ 的一個根，其中 $k$ 為常數。",
      "en": "$5$ is a root of the equation $3x^{2}-14x+k=0$, where $k$ is a constant."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Find $k$.",
       "marks": 2,
       "zh": "求 $k$。",
       "en": "Find $k$."
      },
      {
       "label": "(b)",
       "text": "Solve the equation.",
       "marks": 2,
       "zh": "解該方程。",
       "en": "Solve the equation."
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 把 5 代進去",
         "en": "Step 1 · Substitute 5"
        },
        "math": "3(5)^{2}-14(5)+k=0",
        "zh": "因為 $5$ 是根，代入 $x=5$ 方程成立。$3(25)=75$、$-14(5)=-70$。",
        "en": "Because 5 is a root, substituting $x=5$ satisfies the equation. $3(25)=75$ and $-14(5)=-70$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 求 k",
         "en": "Step 2 · Find k"
        },
        "math": "75-70+k=0\n\\Rightarrow k=-5",
        "zh": "$75-70=5$，所以 $5+k=0$，得 $k=-5$（是負數，不要漏負號）。",
        "en": "$75-70=5$, so $5+k=0$ and $k=-5$ — keep the negative sign.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 分解",
         "en": "Step 3 · Factorise"
        },
        "math": "3x^{2}-14x-5=(3x+1)(x-5)",
        "zh": "試組合：$3x\\cdot x=3x^2$、$1\\cdot(-5)=-5$，交叉項 $3x\\cdot(-5)+1\\cdot x=-14x$ 對得上。",
        "en": "Try the combination: $3x\\cdot x=3x^{2}$ and $1\\cdot(-5)=-5$, while the cross terms $3x\\cdot(-5)+1\\cdot x=-14x$ match.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 兩根",
         "en": "Step 4 · Both roots"
        },
        "math": "x=-\\frac{1}{3} \\text{ or } x=5",
        "zh": "$3x+1=0$ 得 $x=-\\frac{1}{3}$；$x-5=0$ 得 $x=5$（已知根，正好驗算）。",
        "en": "$3x+1=0$ gives $x=-\\frac{1}{3}$ and $x-5=0$ gives $x=5$, the given root, which serves as a check.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "k 的符號",
        "labelEn": "sign of k",
        "zh": "$75-70=5$，所以是 $5+k=0$、$k=-5$。寫成 $k=5$ 就是把搬項的負號吃掉了。",
        "en": "$75-70=5$, so $5+k=0$ and $k=-5$. Writing $k=5$ drops the sign change."
       },
       {
        "label": "分解組合試錯",
        "labelEn": "trying the wrong factor pair",
        "zh": "常數項要湊成 $-5$（$1\\times(-5)$），同時交叉項要是 $-14x$；試錯時兩邊都要對。",
        "en": "The constant product must be $-5$ (from $1\\times(-5)$) while the cross terms give $-14x$; both conditions must hold."
       }
      ],
      "tip": {
       "zh": "求出常數後，把已知根代回新方程驗算（$3(25)-14(5)-5=0$），一秒就知道對不對。",
       "en": "After finding the constant, substitute the given root back into the new equation ($3(25)-14(5)-5=0$) to check it instantly."
      },
      "alt": [
       {
        "name": {
         "zh": "用兩根之積驗算",
         "en": "Check with the product of roots"
        },
        "zh": "$3x^2-14x-5=0$ 的兩根之積是 $\\frac{-5}{3}$。把 $-\\frac{1}{3}$ 與 $5$ 相乘：$-\\frac{5}{3}$，對得上。",
        "en": "The product of the roots of $3x^{2}-14x-5=0$ is $\\frac{-5}{3}$. Multiplying $-\\frac{1}{3}$ and 5 gives $-\\frac{5}{3}$, which agrees."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": [
    [
     {
      "id": "eph-as01-m01",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "AS1-M01",
      "source": "統測前哨戰 · 二次方程：抽公因式解方程（自編）",
      "stem": {
       "text": "Let $k$ be a constant. Solve $(x-k)(x+3k-2)=(x-k)$.",
       "zh": "設 $k$ 為常數。解 $(x-k)(x+3k-2)=(x-k)$。",
       "en": "Let $k$ be a constant. Solve $(x-k)(x+3k-2)=(x-k)$."
      },
      "options": {
       "A": "$x=3k-2$",
       "B": "$x=k$",
       "C": "$x=k$ or $x=3-3k$",
       "D": "$x=k$ or $x=2-3k$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先移項，不要約走括號",
          "en": "Step 1 · Move everything to one side"
         },
         "math": "(x-k)(x+3k-2)-(x-k)=0",
         "zh": "兩邊都有 $(x-k)$，但不可以直接約走它 —— 一約走就會失去 $x=k$ 這個根。先把右邊整塊搬到左邊。",
         "en": "Both sides contain $(x-k)$, but cancelling it would lose the root $x=k$. Bring everything to the left-hand side first."
        },
        {
         "title": {
          "zh": "第 2 步 · 把 (x-k) 當公因式抽出來",
          "en": "Step 2 · Take out (x-k) as a common factor"
         },
         "math": "(x-k)[(x+3k-2)-1]=0",
         "zh": "$(x-k)$ 是兩項的公因式，抽出來之後，另一個括號是 $(x+3k-2)-1$，即 $x+3k-3$。",
         "en": "$(x-k)$ is the common factor of both terms; what is left in the second bracket is $(x+3k-2)-1$, that is $x+3k-3$."
        },
        {
         "title": {
          "zh": "第 3 步 · 零積性質，兩個根",
          "en": "Step 3 · Zero product gives two roots"
         },
         "math": "(x-k)(x+3k-3)=0\n\\Rightarrow x=k \\text{ or } x=3-3k",
         "zh": "兩塊相乘等於 0，任何一塊等於 0 都可以：$x-k=0$ 或 $x+3k-3=0$。答案是 C。",
         "en": "A product is zero when either factor is zero: $x-k=0$ or $x+3k-3=0$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=3k-2$ 是未移項前那個括號的值，而且只有一個根 —— 這正是「兩邊同時約走 $(x-k)$」的後果。",
         "en": "$x=3k-2$ comes from the bracket before moving terms, and it is only one root — exactly what happens when $(x-k)$ is cancelled on both sides."
        },
        {
         "opt": "B",
         "zh": "只寫了 $x=k$。方程最高次數是 2，一般有兩個根，漏一個就是漏了一半。",
         "en": "Only $x=k$ is given. A degree-2 equation normally has two roots, so one of them is missing."
        },
        {
         "opt": "D",
         "zh": "$3-3k$ 抄成 $2-3k$：$(x+3k-2)-1$ 之中 $2-1=1$，所以常數是 3。",
         "en": "$3-3k$ is miscopied as $2-3k$: inside $(x+3k-2)-1$ we have $2-1=1$, so the constant is 3."
        }
       ],
       "tip": {
        "zh": "方程兩邊出現同一個括號，先全部移到一邊再抽公因式；凡是「兩邊同時約走含 $x$ 的東西」都會丟根。",
        "en": "When the same bracket appears on both sides, move everything to one side and take out the common factor. Cancelling anything containing $x$ loses a root."
       },
       "alt": [
        {
         "name": {
          "zh": "保底法：特值代入法（Substitution）",
          "en": "Safety net: Substitution method"
         },
         "zh": "卷二 MC 遇到常數 $k$ 可設簡單質數，避開 0 與 1。設 $k=2$，原方程變為 $(x-2)(x+4)=(x-2)$。展開或移項解得 $x=2$ 或 $x=-3$。將 $k=2$ 代入選項，只有選項 C 的 $x=3-3(2)=-3$ 與 $x=2$ 完全相符，立即鎖定 C。",
         "en": "In Paper 2 MC, substitute a prime number such as $k=2$ (avoid 0 and 1). The equation becomes $(x-2)(x+4)=(x-2)$, which gives $x=2$ or $x=-3$. Substituting $k=2$ into Option C gives $x=3-3(2)=-3$ and $x=2$, which matches."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m02",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 1,
      "code": "AS1-M02",
      "source": "統測前哨戰 · 二次方程：兩邊都有同一個括號（自編）",
      "stem": {
       "text": "Let $m$ be a constant. Solve $2x(x-m)=5(x-m)$.",
       "zh": "設 $m$ 為常數。解 $2x(x-m)=5(x-m)$。",
       "en": "Let $m$ be a constant. Solve $2x(x-m)=5(x-m)$."
      },
      "options": {
       "A": "$x=\\frac{5}{2}$",
       "B": "$x=m$",
       "C": "$x=-m$",
       "D": "$x=m$ or $x=\\frac{5}{2}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 全部移到一邊",
          "en": "Step 1 · Bring all terms to one side"
         },
         "math": "2x(x-m)-5(x-m)=0",
         "zh": "右邊搬過來之後，兩項都含著同一個括號 $(x-m)$。",
         "en": "After moving the right-hand side over, both terms contain the same bracket $(x-m)$."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽公因式",
          "en": "Step 2 · Take out the common factor"
         },
         "math": "(x-m)(2x-5)=0",
         "zh": "把 $(x-m)$ 抽出來，剩下 $2x$ 與 $-5$，即 $2x-5$。",
         "en": "Take $(x-m)$ out as the common factor; what is left is $2x$ and $-5$, that is $2x-5$."
        },
        {
         "title": {
          "zh": "第 3 步 · 兩個根",
          "en": "Step 3 · Read off the two roots"
         },
         "math": "x=m \\text{ or } x=\\frac{5}{2}",
         "zh": "兩塊分別等於 0：$x-m=0$ 得 $x=m$；$2x-5=0$ 得 $x=\\frac{5}{2}$。答案是 D。",
         "en": "Each factor can be zero: $x-m=0$ gives $x=m$, and $2x-5=0$ gives $x=\\frac{5}{2}$. The answer is D."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$x=\\frac{5}{2}$ 只是其中一個根，是把 $(x-m)$ 約走之後的結果，失去了 $x=m$。",
         "en": "$x=\\frac{5}{2}$ is only one root; it appears after cancelling $(x-m)$, so $x=m$ is lost."
        },
        {
         "opt": "B",
         "zh": "$x=m$ 也只是其中一個根：這次是把 $(2x-5)$ 約走。",
         "en": "$x=m$ is also just one root: this time $(2x-5)$ has been cancelled."
        },
        {
         "opt": "C",
         "zh": "$x=-m$ 抄錯符號：括號是 $(x-m)$，令它等於 0 得 $x=m$。",
         "en": "$x=-m$ copies the sign wrongly: the bracket is $(x-m)$, so it gives $x=m$."
        }
       ],
       "tip": {
        "zh": "二次方程寫完答案要數一數：一般應該有兩個根。只寫得出一個，多數是中途約走了含 $x$ 的因式。",
        "en": "After solving a quadratic, count your roots: there should normally be two. If only one appears, something containing $x$ was cancelled."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m03",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "AS1-M03",
      "source": "統測前哨戰 · 二次方程：先移項再抽公因式（自編）",
      "stem": {
       "text": "Let $t$ be a constant. Solve $(x+2t)(x-t)=3(x+2t)$.",
       "zh": "設 $t$ 為常數。解 $(x+2t)(x-t)=3(x+2t)$。",
       "en": "Let $t$ be a constant. Solve $(x+2t)(x-t)=3(x+2t)$."
      },
      "options": {
       "A": "$x=-2t$ or $x=t+3$",
       "B": "$x=t-3$",
       "C": "$x=-2t$ or $x=t-3$",
       "D": "$x=2t$ or $x=t+3$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移到一邊",
          "en": "Step 1 · Move to one side"
         },
         "math": "(x+2t)(x-t)-3(x+2t)=0",
         "zh": "右邊的 $3(x+2t)$ 搬過來，公因式 $(x+2t)$ 就現形了。",
         "en": "Move $3(x+2t)$ to the left-hand side and the common factor $(x+2t)$ becomes visible."
        },
        {
         "title": {
          "zh": "第 2 步 · 抽出整個括號",
          "en": "Step 2 · Take out the whole bracket"
         },
         "math": "(x+2t)[(x-t)-3]=0\n\\Rightarrow (x+2t)(x-t-3)=0",
         "zh": "抽走 $(x+2t)$ 之後，另一個括號裡面全部減 3：$(x-t)-3=x-t-3$。",
         "en": "After taking out $(x+2t)$, subtract 3 from the whole second bracket: $(x-t)-3=x-t-3$."
        },
        {
         "title": {
          "zh": "第 3 步 · 兩個根",
          "en": "Step 3 · Two roots"
         },
         "math": "x=-2t \\text{ or } x=t+3",
         "zh": "$x+2t=0$ 得 $x=-2t$；$x-t-3=0$ 得 $x=t+3$。答案是 A。",
         "en": "$x+2t=0$ gives $x=-2t$, and $x-t-3=0$ gives $x=t+3$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "只寫 $x=t-3$：既漏了 $x=-2t$，符號也錯了（移項應該得 $+3$）。",
         "en": "Only $x=t-3$ is written: it misses $x=-2t$ and the sign is wrong (moving the 3 gives $+3$)."
        },
        {
         "opt": "C",
         "zh": "$x=t-3$ 是符號陷阱：$x-t-3=0$ 移項後是 $x=t+3$。",
         "en": "$x=t-3$ is the sign trap: $x-t-3=0$ rearranges to $x=t+3$."
        },
        {
         "opt": "D",
         "zh": "$x=2t$ 把 $x+2t=0$ 解錯，應該是 $x=-2t$。",
         "en": "$x=2t$ solves $x+2t=0$ wrongly; it should be $x=-2t$."
        }
       ],
       "tip": {
        "zh": "公因式可以是一個「有 $t$ 的括號」，抽走之後，另一個括號要整塊減去後面的數。",
        "en": "A common factor can be a bracket containing $t$; after taking it out, subtract the trailing number from the whole remaining bracket."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-as01-m04",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "AS1-M04",
      "source": "統測前哨戰 · 二次方程：用根化簡（自編）",
      "stem": {
       "text": "If $\\alpha$ is a root of the equation $4x^{2}+6x-3=0$, then $2\\alpha^{2}+3\\alpha+1=$",
       "zh": "若 $\\alpha$ 是方程 $4x^{2}+6x-3=0$ 的一個根，則 $2\\alpha^{2}+3\\alpha+1=$",
       "en": "If $\\alpha$ is a root of the equation $4x^{2}+6x-3=0$, then $2\\alpha^{2}+3\\alpha+1=$"
      },
      "options": {
       "A": "$-\\frac{1}{2}$",
       "B": "$\\frac{1}{2}$",
       "C": "$\\frac{5}{2}$",
       "D": "$4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 用「它是根」求出一塊",
          "en": "Step 1 · Use the root condition"
         },
         "math": "4\\alpha^{2}+6\\alpha-3=0\n\\Rightarrow 4\\alpha^{2}+6\\alpha=3",
         "zh": "因為 $\\alpha$ 是根，代入方程一定成立。我們不需要解出 $\\alpha$，只要把 $4\\alpha^2+6\\alpha$ 這一整塊看成一個數。",
         "en": "Because $\\alpha$ is a root, substituting it satisfies the equation. There is no need to solve for $\\alpha$; treat the block $4\\alpha^{2}+6\\alpha$ as a single number."
        },
        {
         "title": {
          "zh": "第 2 步 · 剛好是題目要的一半",
          "en": "Step 2 · Halve it"
         },
         "math": "2\\alpha^{2}+3\\alpha=\\frac{3}{2}",
         "zh": "題目要的是 $2\\alpha^2+3\\alpha$，係數剛好是 $4\\alpha^2+6\\alpha$ 的一半，所以兩邊一齊除以 2。",
         "en": "The question asks for $2\\alpha^{2}+3\\alpha$, whose coefficients are exactly half of $4\\alpha^{2}+6\\alpha$, so divide both sides by 2."
        },
        {
         "title": {
          "zh": "第 3 步 · 加上常數",
          "en": "Step 3 · Add the constant"
         },
         "math": "2\\alpha^{2}+3\\alpha+1=\\frac{3}{2}+1=\\frac{5}{2}",
         "zh": "最後加上 1：$\\frac{3}{2}+1=\\frac{5}{2}$。答案是 C。",
         "en": "Finally add 1: $\\frac{3}{2}+1=\\frac{5}{2}$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$4$ 是忘記把 $3$ 除以 2（即直接用了 $4\\alpha^2+6\\alpha=3$ 再加 1）。",
         "en": "$4$ forgets to halve the 3 — it uses $4\\alpha^{2}+6\\alpha=3$ and then adds 1."
        },
        {
         "opt": "B",
         "zh": "$\\frac{1}{2}$ 是把最後那個 $+1$ 當成 $-1$：$\\frac{3}{2}-1=\\frac{1}{2}$。",
         "en": "$\\frac{1}{2}$ treats the final $+1$ as $-1$: $\\frac{3}{2}-1=\\frac{1}{2}$."
        },
        {
         "opt": "A",
         "zh": "$-\\frac{1}{2}$ 同時犯了兩個錯：符號反向，而且減了 1。",
         "en": "$-\\frac{1}{2}$ makes two mistakes at once: the sign is reversed and 1 is subtracted."
        }
       ],
       "tip": {
        "zh": "「$\\alpha$ 是方程的根」這類題不用解方程：把方程移項，湊出題目要的那一塊，再整體乘除。",
        "en": "For “$\\alpha$ is a root” questions you never solve the equation: rearrange it to match the block the question asks for, then multiply or divide the whole block."
       },
       "alt": [
        {
         "name": {
          "zh": "計算機保底：Casio Formula 01 求值",
          "en": "Calculator safety net: Casio Formula 01"
         },
         "zh": "用 Casio 計算機按【FMLA 01】（fx-3650P II 執行 Prog 1），輸入 $a=4$、$b=6$、$c=-3$，得 $\\alpha \\approx 0.39564$。按【Shift】【STO】【A】儲存，再在計算機輸入 $2A^{2}+3A+1$，計算機直接顯示 $2.5$（即 $\\frac{5}{2}$），零運算直取答案 C。",
         "en": "On a Casio calculator press [FMLA 01] (or run Prog 1 on fx-3650P II), input $a=4$, $b=6$, $c=-3$ to get $\\alpha \\approx 0.39564$. Store it in memory A, then calculate $2A^{2}+3A+1$ to get $2.5$ (which is $\\frac{5}{2}$), directly confirming Option C."
        }
       ]
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m05",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "AS1-M05",
      "source": "統測前哨戰 · 二次方程：用根化簡（自編）",
      "stem": {
       "text": "If $\\beta$ is a root of the equation $2x^{2}-5x+1=0$, then $4\\beta^{2}-10\\beta+3=$",
       "zh": "若 $\\beta$ 是方程 $2x^{2}-5x+1=0$ 的一個根，則 $4\\beta^{2}-10\\beta+3=$",
       "en": "If $\\beta$ is a root of the equation $2x^{2}-5x+1=0$, then $4\\beta^{2}-10\\beta+3=$"
      },
      "options": {
       "A": "$-2$",
       "B": "$-1$",
       "C": "$1$",
       "D": "$2$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 移項求出小塊",
          "en": "Step 1 · Rearrange for the small block"
         },
         "math": "2\\beta^{2}-5\\beta+1=0\n\\Rightarrow 2\\beta^{2}-5\\beta=-1",
         "zh": "因為 $\\beta$ 是根，所以 $2\\beta^2-5\\beta$ 這一塊等於 $-1$。",
         "en": "Because $\\beta$ is a root, the block $2\\beta^{2}-5\\beta$ equals $-1$."
        },
        {
         "title": {
          "zh": "第 2 步 · 整體乘 2",
          "en": "Step 2 · Double the whole block"
         },
         "math": "4\\beta^{2}-10\\beta=2(-1)=-2",
         "zh": "題目要 $4\\beta^2-10\\beta$，係數全部是剛才那塊的 2 倍，所以整塊乘 2。",
         "en": "The question asks for $4\\beta^{2}-10\\beta$, whose coefficients are all double, so double the whole block."
        },
        {
         "title": {
          "zh": "第 3 步 · 加上 3",
          "en": "Step 3 · Add 3"
         },
         "math": "4\\beta^{2}-10\\beta+3=-2+3=1",
         "zh": "$-2+3=1$。答案是 C。",
         "en": "$-2+3=1$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-2$ 是只做到第 2 步，忘記最後要加上 3。",
         "en": "$-2$ stops after step 2 and forgets to add the 3."
        },
        {
         "opt": "B",
         "zh": "$-1$ 是直接用了 $2\\beta^2-5\\beta$ 的值，忘記整塊乘 2。",
         "en": "$-1$ uses the value of $2\\beta^{2}-5\\beta$ directly and forgets to double the block."
        },
        {
         "opt": "D",
         "zh": "$2$ 是把 $-1$ 與 $3$ 相加時用錯小塊的值（應該先乘 2 得 $-2$）。",
         "en": "$2$ adds the wrong block value to 3; the block must be doubled to $-2$ first."
        }
       ],
       "tip": {
        "zh": "先比較係數：目標式是已知式的幾倍？乘好之後才加常數，兩個步驟不要混在一起做。",
        "en": "Compare coefficients first: how many times is the target block of the known one? Multiply first, then add the constant — keep the two steps separate."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m06",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "AS1-M06",
      "source": "統測前哨戰 · 二次方程：配成完全平方再看（自編）",
      "stem": {
       "text": "If $\\alpha$ is a root of the equation $x^{2}-8x+3=0$, then $(\\alpha-4)^{2}=$",
       "zh": "若 $\\alpha$ 是方程 $x^{2}-8x+3=0$ 的一個根，則 $(\\alpha-4)^{2}=$",
       "en": "If $\\alpha$ is a root of the equation $x^{2}-8x+3=0$, then $(\\alpha-4)^{2}=$"
      },
      "options": {
       "A": "$3$",
       "B": "$13$",
       "C": "$16$",
       "D": "$19$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 求 α²−8α",
          "en": "Step 1 · Find the value of α²−8α"
         },
         "math": "\\alpha^{2}-8\\alpha+3=0\n\\Rightarrow \\alpha^{2}-8\\alpha=-3",
         "zh": "因為 $\\alpha$ 是根，把方程移項就得 $\\alpha^2-8\\alpha=-3$。",
         "en": "Because $\\alpha$ is a root, rearranging the equation gives $\\alpha^{2}-8\\alpha=-3$."
        },
        {
         "title": {
          "zh": "第 2 步 · 展開完全平方",
          "en": "Step 2 · Expand the square"
         },
         "math": "(\\alpha-4)^{2}=\\alpha^{2}-8\\alpha+16",
         "zh": "$(\\alpha-4)^2$ 展開之後，前面的 $\\alpha^2-8\\alpha$ 正是第 1 步求到的那一塊。",
         "en": "Expanding $(\\alpha-4)^{2}$ produces the block $\\alpha^{2}-8\\alpha$ found in step 1."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入求值",
          "en": "Step 3 · Substitute"
         },
         "math": "(\\alpha-4)^{2}=-3+16=13",
         "zh": "$-3+16=13$。答案是 B。",
         "en": "$-3+16=13$. The answer is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$3$ 是抄了方程裡的常數項，但它是 $+3$，移項後要變 $-3$。",
         "en": "$3$ copies the constant term of the equation, but it is $+3$ and becomes $-3$ after rearranging."
        },
        {
         "opt": "C",
         "zh": "$16$ 只算了展開的中間部分（$4^2$），沒有把 $\\alpha^2-8\\alpha$ 的值代入。",
         "en": "$16$ only evaluates the squared constant and never substitutes the value of $\\alpha^{2}-8\\alpha$."
        },
        {
         "opt": "D",
         "zh": "$19$ 用了 $+3$ 而不是 $-3$：$3+16=19$。",
         "en": "$19$ uses $+3$ instead of $-3$: $3+16=19$."
        }
       ],
       "tip": {
        "zh": "看到 $(\\alpha-k)^2$ 就展開，通常會湊回方程已經給你的那一塊；移項時正負號最易出錯。",
        "en": "Expand any $(\\alpha-k)^{2}$: it usually rebuilds the exact block the equation already gives you. Sign errors happen most often when rearranging."
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-as01-m07",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "AS1-M07",
      "source": "統測前哨戰 · 二次方程：等根求常數（自編）",
      "stem": {
       "text": "Let $h$ be a constant. If the quadratic equation $x^{2}+hx=9-3h$ has equal real roots, then $h=$",
       "zh": "設 $h$ 為常數。若二次方程 $x^{2}+hx=9-3h$ 有等實根，則 $h=$",
       "en": "Let $h$ be a constant. If the quadratic equation $x^{2}+hx=9-3h$ has equal real roots, then $h=$"
      },
      "options": {
       "A": "$3$",
       "B": "$6$",
       "C": "$9$",
       "D": "$-6$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫成標準式",
          "en": "Step 1 · Write the standard form"
         },
         "math": "x^{2}+hx-9+3h=0",
         "zh": "先把 $9-3h$ 搬到左邊（全部變號），再認清 $a=1$、$b=h$、$c=3h-9$。",
         "en": "Move $9-3h$ to the left (every term changes sign), then read off $a=1$, $b=h$ and $c=3h-9$."
        },
        {
         "title": {
          "zh": "第 2 步 · 寫出判別式",
          "en": "Step 2 · Write the discriminant"
         },
         "math": "\\Delta=h^{2}-4(3h-9)=h^{2}-12h+36",
         "zh": "等實根的意思是判別式等於 0（重根）。$c$ 裡面有 $h$，所以整個 $\\Delta$ 也是 $h$ 的式子。",
         "en": "Equal real roots means the discriminant is zero. Here $c$ contains $h$, so the whole discriminant is an expression in $h$."
        },
        {
         "title": {
          "zh": "第 3 步 · 解出 h",
          "en": "Step 3 · Solve for h"
         },
         "math": "h^{2}-12h+36=0\n\\Rightarrow (h-6)^{2}=0\n\\Rightarrow h=6",
         "zh": "$h^2-12h+36$ 是完全平方 $(h-6)^2$，所以只有一個解 $h=6$。答案是 B。",
         "en": "$h^{2}-12h+36$ is the perfect square $(h-6)^{2}$, so there is a single solution $h=6$. The answer is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$3$ 是把常數項 $9$ 除以 $3$ 得來，但 $3$ 出現在 $c=3h-9$ 之中，不是答案。",
         "en": "$3$ comes from dividing the constant 9 by 3, but 3 appears inside $c=3h-9$ and is not the answer."
        },
        {
         "opt": "C",
         "zh": "$9$ 是直接抄了方程裡的 $9$，沒有做判別式。",
         "en": "$9$ simply copies the 9 in the equation without forming the discriminant."
        },
        {
         "opt": "D",
         "zh": "$-6$ 是符號陷阱：$(h-6)^2=0$ 的解是 $h=6$，不是 $h=-6$。",
         "en": "$-6$ is the sign trap: $(h-6)^{2}=0$ gives $h=6$, not $h=-6$."
        }
       ],
       "tip": {
        "zh": "「等實根」＝判別式 $=0$。判別式通常會是一個完全平方，所以答案只有一個值（不是兩個）。",
        "en": "“Equal real roots” means discriminant $=0$. The discriminant usually turns out to be a perfect square, so there is only one value of the unknown."
       },
       "alt": [
        {
         "name": {
          "zh": "計算機倒推法：選項回代驗算",
          "en": "Back-substitution with calculator"
         },
         "zh": "不肯定判別式時，直接將選項數值代入原方程。代 $h=6$ 入原式得 $x^{2}+6x=9-18$，移項得 $x^{2}+6x+9=0$。按計算機【FMLA 01】輸入 $1$、$6$、$9$，計算機只顯示一個根 $x=-3$（重根），立刻確定 B 正確。",
         "en": "If unsure about the discriminant, substitute the options into the equation. For $h=6$, $x^{2}+6x+9=0$. Running [FMLA 01] with coefficients 1, 6, 9 returns a single repeated root $x=-3$, confirming B directly."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m08",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "AS1-M08",
      "source": "統測前哨戰 · 二次方程：等根求常數（自編）",
      "stem": {
       "text": "Let $k$ be a constant. If the quadratic equation $x^{2}+kx=25-5k$ has equal real roots, then $k=$",
       "zh": "設 $k$ 為常數。若二次方程 $x^{2}+kx=25-5k$ 有等實根，則 $k=$",
       "en": "Let $k$ be a constant. If the quadratic equation $x^{2}+kx=25-5k$ has equal real roots, then $k=$"
      },
      "options": {
       "A": "$-10$",
       "B": "$5$",
       "C": "$10$",
       "D": "$25$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 標準式",
          "en": "Step 1 · Standard form"
         },
         "math": "x^{2}+kx-25+5k=0",
         "zh": "把 $25-5k$ 移到左邊變號，所以 $c=5k-25$。",
         "en": "Move $25-5k$ to the left with a sign change, so $c=5k-25$."
        },
        {
         "title": {
          "zh": "第 2 步 · 判別式",
          "en": "Step 2 · Discriminant"
         },
         "math": "\\Delta=k^{2}-4(5k-25)=k^{2}-20k+100",
         "zh": "$\\Delta = k^2-20k+100$，留意 $-4\\times(-25)=+100$。",
         "en": "$\\Delta=k^{2}-20k+100$; note that $-4\\times(-25)=+100$."
        },
        {
         "title": {
          "zh": "第 3 步 · 完全平方求 k",
          "en": "Step 3 · Perfect square"
         },
         "math": "k^{2}-20k+100=0\n\\Rightarrow (k-10)^{2}=0\n\\Rightarrow k=10",
         "zh": "答案是 C。驗算：$k=10$ 時方程是 $x^2+10x+25=0$，即 $(x+5)^2=0$，確實有等根。",
         "en": "The answer is C. Check: with $k=10$ the equation is $x^{2}+10x+25=0$, that is $(x+5)^{2}=0$, which indeed has equal roots."
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$25$ 是抄了方程裡的常數，沒有做判別式。",
         "en": "$25$ copies the constant in the equation without using the discriminant."
        },
        {
         "opt": "B",
         "zh": "$5$ 是把 $25$ 開方得來（或 $\\frac{25}{5}$），但方程不是完全平方形式。",
         "en": "$5$ comes from square-rooting 25 (or from $\\frac{25}{5}$), but the equation is not yet a perfect square."
        },
        {
         "opt": "A",
         "zh": "$-10$ 是符號陷阱：$(k-10)^2=0$ 的解是 $10$。",
         "en": "$-10$ is the sign trap: $(k-10)^{2}=0$ gives $10$."
        }
       ],
       "tip": {
        "zh": "求出 $k$ 之後，順手把 $k$ 代回方程看看是否真的重根 —— 兩秒就完成的驗算。",
        "en": "After finding the constant, put it back into the equation to confirm the repeated root — a two-second check."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m09",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 3,
      "code": "AS1-M09",
      "source": "統測前哨戰 · 二次方程：等根求常數（自編）",
      "stem": {
       "text": "Let $t$ be a constant. If the quadratic equation $x^{2}+tx=4+2t$ has equal real roots, then $t=$",
       "zh": "設 $t$ 為常數。若二次方程 $x^{2}+tx=4+2t$ 有等實根，則 $t=$",
       "en": "Let $t$ be a constant. If the quadratic equation $x^{2}+tx=4+2t$ has equal real roots, then $t=$"
      },
      "options": {
       "A": "$-4$",
       "B": "$-2$",
       "C": "$2$",
       "D": "$4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 標準式",
          "en": "Step 1 · Standard form"
         },
         "math": "x^{2}+tx-4-2t=0",
         "zh": "把 $4+2t$ 整塊移到左邊變號，所以 $c=-4-2t$（兩項都要變號）。",
         "en": "Move the whole $4+2t$ to the left with a sign change, so $c=-4-2t$ (both terms change sign)."
        },
        {
         "title": {
          "zh": "第 2 步 · 判別式",
          "en": "Step 2 · Discriminant"
         },
         "math": "\\Delta=t^{2}-4(-4-2t)=t^{2}+8t+16",
         "zh": "負負得正：$-4\\times(-4-2t)=16+8t$，所以判別式是 $t^2+8t+16$。",
         "en": "Two negatives give a positive: $-4\\times(-4-2t)=16+8t$, so the discriminant is $t^{2}+8t+16$."
        },
        {
         "title": {
          "zh": "第 3 步 · 解出 t",
          "en": "Step 3 · Solve for t"
         },
         "math": "t^{2}+8t+16=0\n\\Rightarrow (t+4)^{2}=0\n\\Rightarrow t=-4",
         "zh": "完全平方是 $(t+4)^2$，所以 $t=-4$（要變號）。答案是 A。",
         "en": "The perfect square is $(t+4)^{2}$, so $t=-4$ (the sign flips). The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$4$ 是符號陷阱：$(t+4)^2=0$ 的解是 $t=-4$。",
         "en": "$4$ is the sign trap: $(t+4)^{2}=0$ gives $t=-4$."
        },
        {
         "opt": "C",
         "zh": "$2$ 是只看見 $2t$ 這一項，沒有處理常數項 $4$。",
         "en": "$2$ only looks at the $2t$ term and ignores the constant term 4."
        },
        {
         "opt": "B",
         "zh": "$-2$ 是把 $c$ 誤寫成 $4+2t$（忘記移項要變號），判別式就會變成負數。",
         "en": "$-2$ misreads $c$ as $4+2t$ (forgetting the sign change when moving terms), which makes the discriminant negative."
        }
       ],
       "tip": {
        "zh": "移項時「整塊」變號；得到 $(t+m)^2=0$ 之後答案一定是 $-m$，直覺的 $+m$ 就是陷阱。",
        "en": "When moving a block across, change the sign of every term. From $(t+m)^{2}=0$ the answer is $-m$; the intuitive $+m$ is the trap."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-as01-m10",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 1,
      "code": "AS1-M10",
      "source": "統測前哨戰 · 二次方程：兩根之和與積（自編）",
      "stem": {
       "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^{2}-5x+2=0$, then $\\alpha^{2}+\\beta^{2}=$",
       "zh": "若 $\\alpha$ 與 $\\beta$ 是方程 $x^{2}-5x+2=0$ 的兩根，則 $\\alpha^{2}+\\beta^{2}=$",
       "en": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^{2}-5x+2=0$, then $\\alpha^{2}+\\beta^{2}=$"
      },
      "options": {
       "A": "$21$",
       "B": "$23$",
       "C": "$27$",
       "D": "$29$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出兩根之和與積",
          "en": "Step 1 · Sum and product of roots"
         },
         "math": "\\alpha+\\beta=5,\\ \\alpha\\beta=2",
         "zh": "對 $x^2+bx+c=0$，兩根之和是 $-b$、積是 $c$，這裡 $b=-5$、$c=2$。",
         "en": "For $x^{2}+bx+c=0$ the sum of roots is $-b$ and the product is $c$; here $b=-5$ and $c=2$."
        },
        {
         "title": {
          "zh": "第 2 步 · 用恆等式",
          "en": "Step 2 · Use the identity"
         },
         "math": "\\alpha^{2}+\\beta^{2}=(\\alpha+\\beta)^{2}-2\\alpha\\beta",
         "zh": "$\\alpha^2+\\beta^2$ 不可以直接寫成 $(\\alpha+\\beta)^2$，中間多出來的 $2\\alpha\\beta$ 一定要減走。",
         "en": "$\\alpha^{2}+\\beta^{2}$ is not simply $(\\alpha+\\beta)^{2}$: the extra cross term $2\\alpha\\beta$ must be subtracted."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入計數",
          "en": "Step 3 · Substitute"
         },
         "math": "=5^{2}-2(2)=25-4=21",
         "zh": "$25-4=21$。答案是 A。",
         "en": "$25-4=21$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$23$ 只減了一次 $\\alpha\\beta$（$25-2$），忘記公式是減 $2\\alpha\\beta$。",
         "en": "$23$ subtracts $\\alpha\\beta$ once ($25-2$) and forgets the factor 2 in $2\\alpha\\beta$."
        },
        {
         "opt": "C",
         "zh": "$27$ 把 $2\\alpha\\beta$ 加了進去（$25+2$），符號錯。",
         "en": "$27$ adds $2\\alpha\\beta$ ($25+2$), which is the wrong sign."
        },
        {
         "opt": "D",
         "zh": "$29$ 加了 $2\\alpha\\beta=4$，應該減。",
         "en": "$29$ adds $2\\alpha\\beta=4$, but it should be subtracted."
        }
       ],
       "tip": {
        "zh": "$\\alpha^2+\\beta^2$、$(\\alpha-\\beta)^2$、$\\frac{1}{\\alpha}+\\frac{1}{\\beta}$ 都是「先用兩根之和與積」的對稱式，記住它們與 $(\\alpha+\\beta)$、$\\alpha\\beta$ 的關係。",
        "en": "$\\alpha^{2}+\\beta^{2}$, $(\\alpha-\\beta)^{2}$ and $\\frac{1}{\\alpha}+\\frac{1}{\\beta}$ are symmetric expressions: always rewrite them using the sum and the product of the roots."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m11",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "AS1-M11",
      "source": "統測前哨戰 · 二次方程：對稱式化簡（自編）",
      "stem": {
       "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^{2}-4x+1=0$, then $\\frac{\\alpha}{\\beta}+\\frac{\\beta}{\\alpha}=$",
       "zh": "若 $\\alpha$ 與 $\\beta$ 是方程 $x^{2}-4x+1=0$ 的兩根，則 $\\frac{\\alpha}{\\beta}+\\frac{\\beta}{\\alpha}=$",
       "en": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^{2}-4x+1=0$, then $\\frac{\\alpha}{\\beta}+\\frac{\\beta}{\\alpha}=$"
      },
      "options": {
       "A": "$15$",
       "B": "$16$",
       "C": "$18$",
       "D": "$14$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 通分",
          "en": "Step 1 · Put over a common denominator"
         },
         "math": "\\frac{\\alpha}{\\beta}+\\frac{\\beta}{\\alpha}=\\frac{\\alpha^{2}+\\beta^{2}}{\\alpha\\beta}",
         "zh": "兩個分式通分之後，分子變成 $\\alpha^2+\\beta^2$、分母是 $\\alpha\\beta$，兩者都可以由兩根之和與積求出。",
         "en": "After putting the two fractions over a common denominator, the numerator is $\\alpha^{2}+\\beta^{2}$ and the denominator is $\\alpha\\beta$; both come from the sum and product of roots."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩根之和與積",
          "en": "Step 2 · Sum and product"
         },
         "math": "\\alpha+\\beta=4,\\ \\alpha\\beta=1",
         "zh": "方程是 $x^2-4x+1=0$，所以和是 4、積是 1。",
         "en": "The equation is $x^{2}-4x+1=0$, so the sum of roots is 4 and the product is 1."
        },
        {
         "title": {
          "zh": "第 3 步 · 代入",
          "en": "Step 3 · Substitute"
         },
         "math": "\\frac{(4)^{2}-2(1)}{1}=\\frac{16-2}{1}=14",
         "zh": "$\\alpha^2+\\beta^2=16-2=14$，再除以 $\\alpha\\beta=1$，答案 14。答案是 D。",
         "en": "$\\alpha^{2}+\\beta^{2}=16-2=14$; dividing by $\\alpha\\beta=1$ gives 14. The answer is D."
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$16$ 是 $(\\alpha+\\beta)^2$ 本身，忘記減 $2\\alpha\\beta$。",
         "en": "$16$ is just $(\\alpha+\\beta)^{2}$; $2\\alpha\\beta$ was not subtracted."
        },
        {
         "opt": "A",
         "zh": "$15$ 是 $16-1$，把分母的 $\\alpha\\beta$ 當成要減的數。",
         "en": "$15$ is $16-1$, treating the product in the denominator as something to subtract."
        },
        {
         "opt": "B",
         "zh": "$18$ 是 $16+2$，符號反向。",
         "en": "$18$ is $16+2$, with the sign reversed."
        }
       ],
       "tip": {
        "zh": "分式的對稱式先通分；通分後分子幾乎一定是 $\\alpha^2+\\beta^2$，分母是 $\\alpha\\beta$。",
        "en": "For symmetric fractions, put them over a common denominator first: the numerator is almost always $\\alpha^{2}+\\beta^{2}$ and the denominator $\\alpha\\beta$."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m12",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "quadratic-equations",
      "difficulty": 2,
      "code": "AS1-M12",
      "source": "統測前哨戰 · 二次方程：先抽公因式再看兩根（自編）",
      "stem": {
       "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^{2}+6x+4=0$, then $\\alpha^{2}\\beta+\\alpha\\beta^{2}=$",
       "zh": "若 $\\alpha$ 與 $\\beta$ 是方程 $x^{2}+6x+4=0$ 的兩根，則 $\\alpha^{2}\\beta+\\alpha\\beta^{2}=$",
       "en": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^{2}+6x+4=0$, then $\\alpha^{2}\\beta+\\alpha\\beta^{2}=$"
      },
      "options": {
       "A": "$-10$",
       "B": "$-24$",
       "C": "$10$",
       "D": "$24$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先抽公因式",
          "en": "Step 1 · Factorise first"
         },
         "math": "\\alpha^{2}\\beta+\\alpha\\beta^{2}=\\alpha\\beta(\\alpha+\\beta)",
         "zh": "兩項都有 $\\alpha\\beta$，抽出來就只剩 $(\\alpha+\\beta)$，這樣才用得上兩根之和與積。",
         "en": "Both terms contain $\\alpha\\beta$; taking it out leaves $(\\alpha+\\beta)$, which is exactly what the sum and product of roots give."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩根之和與積",
          "en": "Step 2 · Sum and product"
         },
         "math": "\\alpha+\\beta=-6,\\ \\alpha\\beta=4",
         "zh": "$x^2+6x+4=0$：和是 $-6$（要變號）、積是 $4$。",
         "en": "For $x^{2}+6x+4=0$ the sum of roots is $-6$ (the sign flips) and the product is 4."
        },
        {
         "title": {
          "zh": "第 3 步 · 相乘",
          "en": "Step 3 · Multiply"
         },
         "math": "=4\\times(-6)=-24",
         "zh": "正數乘負數是負數：$-24$。答案是 B。",
         "en": "A positive times a negative is negative: $-24$. The answer is B."
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$24$ 是符號錯：$\\alpha+\\beta=-6$，乘出來一定是負數。",
         "en": "$24$ has the wrong sign: $\\alpha+\\beta=-6$, so the product must be negative."
        },
        {
         "opt": "A",
         "zh": "$-10$ 是 $-6+4$，把兩個數相加而不是相乘。",
         "en": "$-10$ is $-6+4$: the two values were added instead of multiplied."
        },
        {
         "opt": "C",
         "zh": "$10$ 同時犯了相加與符號兩個錯。",
         "en": "$10$ makes both mistakes: adding instead of multiplying and the wrong sign."
        }
       ],
       "tip": {
        "zh": "見到 $\\alpha^2\\beta+\\alpha\\beta^2$ 這類式子，先抽公因式；抽完就只剩下 $(\\alpha+\\beta)$ 與 $\\alpha\\beta$。",
        "en": "For expressions such as $\\alpha^{2}\\beta+\\alpha\\beta^{2}$, factorise first — what remains involves only $(\\alpha+\\beta)$ and $\\alpha\\beta$."
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ]
   ]
  },
  {
   "id": "as01-2",
   "title": {
    "zh": "第 2 節 · 複數",
    "en": "Set 2 · Complex numbers"
   },
   "cards": [
    {
     "id": "as01-c5",
     "topic": "as01",
     "title": {
      "zh": "複數：$i$ 的冪與四則運算",
      "en": "Complex numbers: powers of $i$ and the four operations"
     },
     "body": {
      "zh": "複數的基本規則只有一條：$i^{2}=-1$。\n{{math:0}}\n加減：實部與實部合併、虛部與虛部合併 —— 例 $(4+5i)-(6-7i)=-2+12i$（減號要分配給每一項）。\n乘：展開之後把 $i^{2}$ 換成 $-1$，最後整理成 $a+bi$。\n{{math:1}}\n題目要求「express the result in the form $a+bi$」時，實部與虛部要分開兩份寫：$\\frac{3+i}{10}$ 寫成 $\\frac{3}{10}+\\frac{1}{10}i$。\n高次冪（例如 $i^{18}$、$i^{31}$）不可以硬乘 —— 先看下面的重點框，用「除以 4 看餘數」一步化簡。",
      "en": "There is only one basic rule for complex numbers: $i^{2}=-1$.\n{{math:0}}\nAdd and subtract: combine the real parts together and the imaginary parts together — for example $(4+5i)-(6-7i)=-2+12i$ (the minus sign applies to every term).\nMultiply: expand, replace $i^{2}$ by $-1$, then tidy everything into the form $a+bi$.\n{{math:1}}\nWhen the question says “express the result in the form $a+bi$”, keep the real part and the imaginary part as two separate terms: write $\\frac{3+i}{10}$ as $\\frac{3}{10}+\\frac{1}{10}i$.\nNever expand a high power such as $i^{18}$ or $i^{31}$ by hand — read the key box below and reduce it in one step by dividing the index by 4."
     },
     "math": [
      "i^{2}=-1",
      "(1-2i)(3+4i)=3+4i-6i-8i^{2}\n=3-2i+8=11-2i"
     ],
     "box": {
      "tag": {
       "zh": "餘數法",
       "en": "Remainder rule"
      },
      "title": {
       "zh": "$i$ 的四個冪：除以 4 看餘數",
       "en": "The four powers of $i$: divide the index by 4 and look at the remainder"
      },
      "zh": "① 四個冪先順序記熟（餘數 1、2、3、0 依次對應 $i$、$-1$、$-i$、$1$）：\n{{math:0}}\n② 每 4 個一循環，所以第 5 個冪由頭開始：\n{{math:1}}\n③ 化簡 $i^{n}$ 只有一步 —— 把 $n$ 除以 4，看餘數（這是整個方法的重點）：\n{{math:2}}\n④ 例子：先把指數寫成 $4k+$ 餘數，再換成對應的冪。\n{{math:3}}",
      "en": "① First learn the four powers in order (remainders 1, 2, 3 and 0 give $i$, $-1$, $-i$ and $1$):\n{{math:0}}\n② The pattern repeats every 4, so the fifth power starts the cycle again:\n{{math:1}}\n③ There is only one step in simplifying $i^{n}$ — divide $n$ by 4 and look at the remainder (this is the heart of the method):\n{{math:2}}\n④ Examples: write the index as $4k$ plus the remainder, then swap in the matching power.\n{{math:3}}",
      "math": [
       "i^{1}=i,\\quad i^{2}=-1,\\quad i^{3}=-i,\\quad i^{4}=1",
       "i^{5}=i,\\quad i^{6}=-1,\\quad i^{7}=-i,\\quad i^{8}=1",
       "\\text{remainder }1\\to i,\\quad 2\\to-1,\\quad 3\\to-i,\\quad 0\\to1",
       "18=4\\times4+2\\ \\Rightarrow\\ i^{18}=i^{2}=-1\n31=4\\times7+3\\ \\Rightarrow\\ i^{31}=i^{3}=-i\n20=4\\times5+0\\ \\Rightarrow\\ i^{20}=i^{4}=1"
      ]
     },
     "warn": {
      "zh": "把 $i^{4}$ 誤記成 $-1$（正確是 $1$）最致命：$i^{20}=(i^{4})^{5}=1$，寫成 $-1$ 就會全盤皆錯。另一個常見錯：展開 $(3-2i)(1+i)$ 時漏了 $-2i\\times i=-2i^{2}=+2$。",
      "en": "Remembering $i^{4}$ as $-1$ (it is $1$) ruins everything: $i^{20}=(i^{4})^{5}=1$, and writing $-1$ makes every later step wrong. Another common slip: when expanding $(3-2i)(1+i)$, the term $-2i\\times i=-2i^{2}=+2$ is missed."
     },
     "vocab": [
      {
       "en": "imaginary unit",
       "zh": "虛數單位 $i$"
      },
      {
       "en": "power of $i$",
       "zh": "$i$ 的冪"
      },
      {
       "en": "remainder",
       "zh": "餘數（除以 4 之後餘下多少）"
      }
     ]
    },
    {
     "id": "as01-c6",
     "topic": "as01",
     "title": {
      "zh": "複數的實部／虛部與除法：分母乘共軛",
      "en": "Real part, imaginary part and division: multiply by the conjugate"
     },
     "body": {
      "zh": "把複數寫成 $a+bi$ 之後：$a$ 是實部（real part）、$b$ 是虛部（imaginary part）。兩者都是實數，虛部只寫 $i$ 前面那個數，而且要連符號 —— $3-7i$ 的實部是 $3$、虛部是 $-7$（不是 $7$）。\n{{math:0}}\n分母有 $i$ 時，分子分母同乘分母的共軛（conjugate），把分母變成實數：$(c+di)(c-di)=c^{2}+d^{2}$。\n{{math:1}}\n兩個高頻題型：\n① 求 real part／imaginary part：先化簡成 $a+bi$，再讀出 $a$、$b$ —— 讀完要核對正負號；\n② 「is a real number」（是實數）＝虛部 $=0$：把 $i$ 的係數寫成一條方程，就求得 $k$。\n{{math:2}}",
      "en": "Once a complex number is written as $a+bi$: $a$ is the real part and $b$ is the imaginary part. Both are real numbers, and the imaginary part is only the number in front of $i$, with its sign — for $3-7i$ the real part is $3$ and the imaginary part is $-7$, not $7$.\n{{math:0}}\nWhen the denominator contains $i$, multiply the top and the bottom by the conjugate of the denominator: $(c+di)(c-di)=c^{2}+d^{2}$ makes the denominator real.\n{{math:1}}\nTwo frequent question types:\n(1) find the real part or the imaginary part: simplify into $a+bi$ first, then read off $a$ and $b$ and check the signs;\n(2) “is a real number” means the imaginary part is $0$: set the coefficient of $i$ equal to zero and solve for $k$.\n{{math:2}}"
     },
     "math": [
      "3-7i:\\ \\text{real part}=3,\\ \\text{imaginary part}=-7",
      "\\frac{2+i}{7+i}=\\frac{(2+i)(7-i)}{(7+i)(7-i)}\n=\\frac{15+5i}{50}=\\frac{3}{10}+\\frac{1}{10}i",
      "\\frac{k-i}{1+2i}=\\frac{(k-i)(1-2i)}{(1+2i)(1-2i)}\n=\\frac{(k-2)-(2k+1)i}{5}\n\\text{real number}\\ \\Rightarrow 2k+1=0\n\\Rightarrow k=-\\frac{1}{2}"
     ],
     "warn": {
      "zh": "讀虛部時要連符號：$2-4i$ 的虛部是 $-4$。另外，$(c+di)(c-di)=c^{2}+d^{2}$（因為 $-i^{2}=+1$），不是 $c^{2}-d^{2}$ —— 這個符號錯是複數題最常見的失分位。",
      "en": "The imaginary part keeps its sign: the imaginary part of $2-4i$ is $-4$. Also $(c+di)(c-di)=c^{2}+d^{2}$ (because $-i^{2}=+1$), not $c^{2}-d^{2}$ — that wrong sign is the most common slip in complex-number questions."
     },
     "vocab": [
      {
       "en": "conjugate",
       "zh": "共軛"
      },
      {
       "en": "real part",
       "zh": "實部"
      },
      {
       "en": "imaginary part",
       "zh": "虛部"
      }
     ]
    },
    {
     "id": "as01-c7",
     "topic": "as01",
     "title": {
      "zh": "複數題的流程與常見錯誤（帶走這一張）",
      "en": "Complex-number routine and common mistakes (take this card away)"
     },
     "body": {
      "zh": "複數題固定四步：① 有 $i$ 的冪就先化簡（除以 4 看餘數）；② 加減乘除之後整理成 $a+bi$（$i^{2}=-1$）；③ 分母有 $i$ 就分子分母同乘共軛，分母變成 $c^{2}+d^{2}$；④ 最後才回答題目問的東西 —— real part、imaginary part，或者由「是實數」寫出虛部 $=0$。\n{{math:0}}\n五個最常見的失分位：\n① 把 $i^{4}$ 記成 $-1$（正確是 $1$）：之後 $i^{18}$、$i^{20}$ 全部錯；\n② 共軛相乘的分母寫成 $c^{2}-d^{2}$（正確是 $c^{2}+d^{2}$，因為 $-i^{2}=+1$）；\n③ 問 real part 卻答了 imaginary part（選項通常兩個都放進去）；\n④ 讀虛部時漏了負號（$2-4i$ 的虛部是 $-4$，不是 $4$）；\n⑤ 漏掉式子後面不含 $i$ 的常數項（例如 $-i^{18}=+1$），少了一項答案就錯。",
      "en": "Complex-number questions follow four fixed steps: (1) simplify any power of $i$ first by dividing the index by 4; (2) add, subtract, multiply or divide and tidy everything into the form $a+bi$ using $i^{2}=-1$; (3) when the denominator contains $i$, multiply the top and the bottom by its conjugate so that the denominator becomes $c^{2}+d^{2}$; (4) only then answer what is asked — the real part, the imaginary part, or use “is a real number” to mean that the imaginary part is zero.\n{{math:0}}\nFive ways marks are lost:\n(1) remembering $i^{4}$ as $-1$ instead of $1$, which spoils every higher power;\n(2) writing the conjugate product as $c^{2}-d^{2}$ instead of $c^{2}+d^{2}$, because minus $i$ squared is plus 1;\n(3) answering the imaginary part when the real part was asked, since the options usually contain both;\n(4) dropping the sign of the imaginary part ($2-4i$ has imaginary part $-4$, not $4$);\n(5) missing the constant terms that carry no $i$, such as minus $i$ to the 18th being plus 1."
     },
     "math": [
      "z=a+bi:\\ \\text{real part}=a,\\ \\text{imaginary part}=b\nz\\ \\text{is purely imaginary}\\ \\Leftrightarrow\\ a=0\nz\\ \\text{is real}\\ \\Leftrightarrow\\ b=0"
     ],
     "warn": {
      "zh": "「是實數」＝虛部 $=0$；「是純虛數」＝實部 $=0$ —— 兩個條件剛好相反，是複數題最常見的混淆。",
      "en": "Being real means the imaginary part is zero, while being purely imaginary means the real part is zero; the two conditions are opposites and are easily confused."
     },
     "vocab": [
      {
       "en": "conjugate",
       "zh": "共軛"
      },
      {
       "en": "purely imaginary",
       "zh": "純虛數（實部 $=0$）"
      }
     ]
    }
   ],
   "long": [
    {
     "id": "eph-as01-ex03",
     "type": "long",
     "topic": "as01",
     "unit": 1,
     "subtopic": "complex-numbers",
     "difficulty": 2,
     "code": "AS1-EX3",
     "source": "統測前哨戰 · 複數：平方與化簡分式（自編）",
     "stem": {
      "text": "It is given that $z=3+i$.",
      "zh": "已知 $z=3+i$。",
      "en": "It is given that $z=3+i$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Simplify $z^{2}$ and express the answer in the form $a+bi$.",
       "marks": 2,
       "zh": "化簡 $z^{2}$，並以 $a+bi$ 的形式表示答案。",
       "en": "Simplify $z^{2}$ and express the answer in the form $a+bi$."
      },
      {
       "label": "(b)",
       "text": "Hence, simplify $\\left(\\frac{20}{z}\\right)^{2}$ and express the answer in the form $a+bi$.",
       "marks": 3,
       "zh": "由此化簡 $\\left(\\frac{20}{z}\\right)^{2}$，並以 $a+bi$ 的形式表示答案。",
       "en": "Hence, simplify $\\left(\\frac{20}{z}\\right)^{2}$ and express the answer in the form $a+bi$."
      }
     ],
     "marks": 5,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 展開 z²",
         "en": "Step 1 · Expand z²"
        },
        "math": "z^{2}=(3+i)^{2}=9+6i+i^{2}",
        "zh": "用 $(a+b)^2$：中間項 $2\\times3\\times i=6i$ 最容易漏，一定要寫出來。",
        "en": "Use $(a+b)^{2}$: the middle term $2\\times3\\times i=6i$ is the one most often missed, so write it down.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 化簡成 a+bi",
         "en": "Step 2 · Simplify to a+bi"
        },
        "math": "=9+6i-1=8+6i",
        "zh": "$i^2=-1$，所以答案是 $8+6i$（$a=8$、$b=6$）。",
        "en": "$i^{2}=-1$, so the answer is $8+6i$ (with $a=8$, $b=6$).",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 用 (a) 的結果",
         "en": "Step 3 · Use the result of (a)"
        },
        "math": "\\left(\\frac{20}{z}\\right)^{2}=\\frac{400}{z^{2}}=\\frac{400}{8+6i}",
        "zh": "「Hence」就是一定要用 (a)：$\\left(\\frac{20}{z}\\right)^2=\\frac{20^2}{z^2}$，而 $z^2$ 剛才已經算好是 $8+6i$。",
        "en": "“Hence” means part (a) must be used: $\\left(\\frac{20}{z}\\right)^{2}=\\frac{20^{2}}{z^{2}}$, and $z^{2}=8+6i$ is already known.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 上下乘共軛",
         "en": "Step 4 · Multiply by the conjugate"
        },
        "math": "=\\frac{400(8-6i)}{(8+6i)(8-6i)}=\\frac{400(8-6i)}{64+36}",
        "zh": "分母 $8+6i$ 的共軛是 $8-6i$；分母變成 $(8^2+6^2)=100$，是一個實數。",
        "en": "The conjugate of $8+6i$ is $8-6i$; the denominator becomes $8^{2}+6^{2}=100$, a real number.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 5 步 · 約簡",
         "en": "Step 5 · Simplify"
        },
        "math": "=\\frac{400(8-6i)}{100}=4(8-6i)=32-24i",
        "zh": "$\\frac{400}{100}=4$，所以答案 $4(8-6i)=32-24i$（$a=32$、$b=-24$）。",
        "en": "$\\frac{400}{100}=4$, so the answer is $4(8-6i)=32-24i$ (with $a=32$, $b=-24$).",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "平方漏中間項",
        "labelEn": "missing the middle term",
        "zh": "$(3+i)^2$ 的中間項是 $6i$；只寫 $9+i^2$ 會漏掉整個虛部。",
        "en": "The middle term of $(3+i)^{2}$ is $6i$; writing only $9+i^{2}$ loses the whole imaginary part."
       },
       {
        "label": "共軛只乘分子",
        "labelEn": "multiplying only the numerator",
        "zh": "上下一定要同時乘 $(8-6i)$，值才不變；只乘分子就會算錯。",
        "en": "Both numerator and denominator must be multiplied by $8-6i$ so the value is unchanged."
       }
      ],
      "tip": {
       "zh": "「Hence」題幾乎都是「(a) 先算好一塊，(b) 把那塊整塊代入」；分數的平方可以寫成 $\\frac{20^2}{z^2}$，不必逐項展開。",
       "en": "A “Hence” question almost always means “(a) computes a block, (b) substitutes that block”. A squared fraction can be written as $\\frac{20^{2}}{z^{2}}$ instead of being expanded."
      },
      "alt": [
       {
        "name": {
         "zh": "用 |z|² 快速檢查",
         "en": "Quick check with |z|²"
        },
        "zh": "驗算分母：$(8+6i)$ 的模平方是 $8^2+6^2=100$，而 $400$ 剛好是 $100$ 的 4 倍，所以答案一定是 $4\\times$ 共軛，數字理應很整齊。",
        "en": "Check the denominator: the squared modulus of $8+6i$ is $8^{2}+6^{2}=100$, and 400 is exactly four times that, so the answer must be four times the conjugate — a strong sign the arithmetic is clean."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-as01-ex04",
     "type": "long",
     "topic": "as01",
     "unit": 1,
     "subtopic": "complex-numbers",
     "difficulty": 3,
     "code": "AS1-EX4",
     "source": "統測前哨戰 · 複數：平方與化簡分式（自編）",
     "stem": {
      "text": "It is given that $w=4-i$.",
      "zh": "已知 $w=4-i$。",
      "en": "It is given that $w=4-i$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Simplify $w^{2}$ and express the answer in the form $a+bi$.",
       "marks": 2,
       "zh": "化簡 $w^{2}$，並以 $a+bi$ 的形式表示答案。",
       "en": "Simplify $w^{2}$ and express the answer in the form $a+bi$."
      },
      {
       "label": "(b)",
       "text": "Hence, simplify $\\left(\\frac{17}{w}\\right)^{2}$ and express the answer in the form $a+bi$.",
       "marks": 3,
       "zh": "由此化簡 $\\left(\\frac{17}{w}\\right)^{2}$，並以 $a+bi$ 的形式表示答案。",
       "en": "Hence, simplify $\\left(\\frac{17}{w}\\right)^{2}$ and express the answer in the form $a+bi$."
      }
     ],
     "marks": 5,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 展開 w²",
         "en": "Step 1 · Expand w²"
        },
        "math": "w^{2}=(4-i)^{2}=16-8i+i^{2}",
        "zh": "中間項是 $2\\times4\\times i=8i$，因為是減號所以寫 $-8i$。",
        "en": "The middle term is $2\\times4\\times i=8i$; because of the minus sign it is written $-8i$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 化簡",
         "en": "Step 2 · Simplify"
        },
        "math": "=16-8i-1=15-8i",
        "zh": "$i^2=-1$，所以 $16-1=15$，答案是 $15-8i$。",
        "en": "$i^{2}=-1$, so $16-1=15$ and the answer is $15-8i$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 用 (a) 的結果",
         "en": "Step 3 · Use the result of (a)"
        },
        "math": "\\left(\\frac{17}{w}\\right)^{2}=\\frac{289}{w^{2}}=\\frac{289}{15-8i}",
        "zh": "$17^2=289$，再把 $w^2=15-8i$ 整塊代入（這就是 Hence 的意思）。",
        "en": "$17^{2}=289$, then substitute $w^{2}=15-8i$ as a block — this is what “Hence” requires.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 上下乘共軛",
         "en": "Step 4 · Multiply by the conjugate"
        },
        "math": "=\\frac{289(15+8i)}{(15-8i)(15+8i)}=\\frac{289(15+8i)}{225+64}",
        "zh": "分母的共軛是 $15+8i$；$15^2+8^2=225+64=289$。",
        "en": "The conjugate of the denominator is $15+8i$; note $15^{2}+8^{2}=225+64=289$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 5 步 · 約簡",
         "en": "Step 5 · Simplify"
        },
        "math": "=\\frac{289(15+8i)}{289}=15+8i",
        "zh": "分母與分子的 $289$ 約去，答案 $15+8i$。留意 (b) 的答案就是 (a) 的共軛。",
        "en": "The 289 cancels, leaving $15+8i$. Notice that the answer to (b) is the conjugate of the answer to (a).",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "中間項符號",
        "labelEn": "sign of the middle term",
        "zh": "$(4-i)^2$ 的中間項是 $-8i$；寫成 $+8i$ 會令答案錯。",
        "en": "The middle term of $(4-i)^{2}$ is $-8i$; writing $+8i$ makes the answer wrong."
       },
       {
        "label": "分母漏平方",
        "labelEn": "forgetting to square the terms",
        "zh": "共軛相乘的結果是 $a^2+b^2$（$225+64=289$），不是 $15+8$。",
        "en": "The product with the conjugate is $a^{2}+b^{2}$ ($225+64=289$), not $15+8$."
       }
      ],
      "tip": {
       "zh": "如果 $\\frac{n^2}{w^2}$ 的 $n^2$ 剛好等於 $|w|^4$… 更簡單的檢查：分母乘共軛後的實數若等於分子，答案就是那個共軛，數字會非常整齊。",
       "en": "A useful check: if the real number obtained from the denominator equals the numerator, the answer is simply that conjugate, so the numbers should come out very clean."
      },
      "alt": [
       {
        "name": {
         "zh": "完整性驗算",
         "en": "Completeness check"
        },
        "zh": "把答案乘回 $w^2$：$(15-8i)(15+8i)=225+64=289$，正好等於 $\\left(\\frac{17}{w}\\right)^2 w^2=17^2$，所以答案正確。",
        "en": "Multiply the answer back by $w^{2}$: $(15-8i)(15+8i)=225+64=289$, which is exactly $17^{2}$, so the answer is correct."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    }
   ],
   "pages": [
    [
     {
      "id": "eph-as01-m13",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "AS1-M13",
      "source": "統測前哨戰 · 複數：乘法（自編）",
      "stem": {
       "text": "Simplify $(4+3i)(2-5i)$.",
       "zh": "化簡 $(4+3i)(2-5i)$。",
       "en": "Simplify $(4+3i)(2-5i)$."
      },
      "options": {
       "A": "$-7-14i$",
       "B": "$23-26i$",
       "C": "$23-14i$",
       "D": "$23+14i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 像多項式一樣展開",
          "en": "Step 1 · Expand as if it were algebraic"
         },
         "math": "(4+3i)(2-5i)=8-20i+6i-15i^{2}",
         "zh": "逐項相乘：$4\\times2=8$、$4\\times(-5i)=-20i$、$3i\\times2=6i$、$3i\\times(-5i)=-15i^2$。",
         "en": "Multiply term by term: $4\\times2=8$, $4\\times(-5i)=-20i$, $3i\\times2=6i$ and $3i\\times(-5i)=-15i^{2}$."
        },
        {
         "title": {
          "zh": "第 2 步 · 處理 i²",
          "en": "Step 2 · Replace i²"
         },
         "math": "-15i^{2}=-15(-1)=15",
         "zh": "複數運算只有一條規則是新的：$i^2=-1$，所以 $-15i^2$ 其實是 $+15$。",
         "en": "Only one rule is new in complex arithmetic: $i^{2}=-1$, so $-15i^{2}$ is actually $+15$."
        },
        {
         "title": {
          "zh": "第 3 步 · 合併同類項",
          "en": "Step 3 · Collect like terms"
         },
         "math": "=8-20i+6i+15=23-14i",
         "zh": "實部 $8+15=23$、虛部 $-20i+6i=-14i$，得 $23-14i$。答案是 C。",
         "en": "Real part $8+15=23$ and imaginary part $-20i+6i=-14i$, giving $23-14i$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$-7-14i$ 是把 $i^2$ 當成 $+1$：$8-20i+6i-15=-7-14i$。",
         "en": "$-7-14i$ treats $i^{2}$ as $+1$: $8-20i+6i-15=-7-14i$."
        },
        {
         "opt": "B",
         "zh": "$23-26i$ 把兩個交叉項都當正：$-20i+6i$ 應該是 $-14i$。",
         "en": "$23-26i$ takes both cross terms as positive: $-20i+6i$ should be $-14i$."
        },
        {
         "opt": "D",
         "zh": "$23+14i$ 的虛部符號錯：$-20i+6i=-14i$。",
         "en": "$23+14i$ has the wrong imaginary sign: $-20i+6i=-14i$."
        }
       ],
       "tip": {
        "zh": "複數乘法＝多項式乘法 ＋ 最後一步把 $i^2$ 換成 $-1$；次序不要調亂。",
        "en": "Complex multiplication is polynomial multiplication plus a final step: replace $i^{2}$ by $-1$. Keep that order."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m14",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 1,
      "code": "AS1-M14",
      "source": "統測前哨戰 · 複數：平方（自編）",
      "stem": {
       "text": "Simplify $(3-2i)^{2}$ and express the answer in the form $a+bi$.",
       "zh": "化簡 $(3-2i)^{2}$，並以 $a+bi$ 的形式表示答案。",
       "en": "Simplify $(3-2i)^{2}$ and express the answer in the form $a+bi$."
      },
      "options": {
       "A": "$13-12i$",
       "B": "$5+12i$",
       "C": "$9-12i$",
       "D": "$5-12i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 展開平方",
          "en": "Step 1 · Expand the square"
         },
         "math": "(3-2i)^{2}=9-12i+4i^{2}",
         "zh": "用 $(a-b)^2=a^2-2ab+b^2$：$a=3$、$b=2i$，中間項是 $2\\times3\\times2i=12i$（負號）。",
         "en": "Use $(a-b)^{2}=a^{2}-2ab+b^{2}$ with $a=3$ and $b=2i$: the middle term is $2\\times3\\times2i=12i$ with a minus sign."
        },
        {
         "title": {
          "zh": "第 2 步 · i² = −1",
          "en": "Step 2 · i² = −1"
         },
         "math": "4i^{2}=4(-1)=-4",
         "zh": "$(2i)^2=4i^2=-4$，所以最後一項變成 $-4$。",
         "en": "$(2i)^{2}=4i^{2}=-4$, so the last term becomes $-4$."
        },
        {
         "title": {
          "zh": "第 3 步 · 合併",
          "en": "Step 3 · Combine"
         },
         "math": "=9-12i-4=5-12i",
         "zh": "實部 $9-4=5$，虛部 $-12i$，答案 $5-12i$（$a=5$、$b=-12$）。答案是 D。",
         "en": "Real part $9-4=5$ and imaginary part $-12i$, so the answer is $5-12i$ (with $a=5$, $b=-12$). The answer is D."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$13-12i$ 把 $i^2$ 當成 $+1$：$9+4=13$。",
         "en": "$13-12i$ treats $i^{2}$ as $+1$: $9+4=13$."
        },
        {
         "opt": "B",
         "zh": "$5+12i$ 的中間項符號錯：$(a-b)^2$ 的中間項一定是負。",
         "en": "$5+12i$ has the wrong middle sign: in $(a-b)^{2}$ the middle term is always negative."
        },
        {
         "opt": "C",
         "zh": "$9-12i$ 忘記處理 $i^2$，把 $(2i)^2$ 當成 $0$。",
         "en": "$9-12i$ never replaces $i^{2}$, effectively treating $(2i)^{2}$ as zero."
        }
       ],
       "tip": {
        "zh": "$(a\\pm bi)^2$ 的實部是 $a^2-b^2$、虛部是 $\\pm 2ab$；背了這兩塊就不會漏 $i^2=-1$。",
        "en": "For $(a\\pm bi)^{2}$ the real part is $a^{2}-b^{2}$ and the imaginary part is $\\pm2ab$; remembering these two pieces prevents forgetting $i^{2}=-1$."
       }
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-as01-m15",
      "type": "mc",
      "topic": "as01",
      "unit": 1,
      "subtopic": "complex-numbers",
      "difficulty": 2,
      "code": "AS1-M15",
      "source": "統測前哨戰 · 複數：除法（乘共軛）（自編）",
      "stem": {
       "text": "Express $\\frac{4+2i}{1-i}$ in the form $a+bi$.",
       "zh": "把 $\\frac{4+2i}{1-i}$ 寫成 $a+bi$ 的形式。",
       "en": "Express $\\frac{4+2i}{1-i}$ in the form $a+bi$."
      },
      "options": {
       "A": "$3+i$",
       "B": "$1+3i$",
       "C": "$3-i$",
       "D": "$1-3i$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 上下乘分母的共軛",
          "en": "Step 1 · Multiply by the conjugate"
         },
         "math": "\\frac{4+2i}{1-i}\\times\\frac{1+i}{1+i}",
         "zh": "分母是 $1-i$，共軛是 $1+i$。上下同時乘同一個數，值不變，但分母會變成實數。",
         "en": "The denominator is $1-i$, whose conjugate is $1+i$. Multiplying top and bottom by the same number keeps the value and makes the denominator real."
        },
        {
         "title": {
          "zh": "第 2 步 · 計分子與分母",
          "en": "Step 2 · Work out numerator and denominator"
         },
         "math": "\\frac{(4+2i)(1+i)}{(1-i)(1+i)}=\\frac{2+6i}{2}",
         "zh": "分子：$4+4i+2i+2i^2=4+6i-2=2+6i$；分母：$(1-i)(1+i)=1-i^2=2$。",
         "en": "Numerator: $4+4i+2i+2i^{2}=4+6i-2=2+6i$. Denominator: $(1-i)(1+i)=1-i^{2}=2$."
        },
        {
         "title": {
          "zh": "第 3 步 · 約簡",
          "en": "Step 3 · Simplify"
         },
         "math": "=\\frac{2}{2}+\\frac{6i}{2}=1+3i",
         "zh": "實部與虛部分別除以 2，得 $1+3i$（$a=1$、$b=3$）。答案是 B。",
         "en": "Divide the real and imaginary parts by 2 to get $1+3i$ (with $a=1$, $b=3$). The answer is B."
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$3-i$ 是上下乘了 $1-i$（錯的共軛）：共軛要變中間那個符號，即 $1+i$。",
         "en": "$3-i$ multiplies by $1-i$, the wrong conjugate; the conjugate flips the middle sign, giving $1+i$."
        },
        {
         "opt": "D",
         "zh": "$1-3i$ 的虛部符號錯：分子是 $2+6i$，除以 2 得 $+3i$。",
         "en": "$1-3i$ has the wrong imaginary sign: the numerator is $2+6i$, so dividing by 2 gives $+3i$."
        },
        {
         "opt": "A",
         "zh": "$3+i$ 是展開分子時正負號出錯（誤將實部算成 $4+2=6$、虛部算成 $4i-2i=2i$，再除以分母 2 得 $3+i$）。",
         "en": "$3+i$ comes from expanding the numerator with wrong signs, getting $6+2i$ instead of $2+6i$, and then dividing by 2."
        }
       ],
       "tip": {
        "zh": "複數除法固定三步：乘共軛 → 分母變成 $a^2+b^2$ → 實部虛部分別約簡。",
        "en": "Division of complex numbers is always three steps: multiply by the conjugate, turn the denominator into $a^{2}+b^{2}$, then simplify the real and imaginary parts separately."
       }
      },
      "answer": "B",
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 15,
  "long": 4,
  "cards": 7,
  "pages": 5
 }
};
