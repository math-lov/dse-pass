// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_AS03 = {
 "id": "as03",
 "stage": 2,
 "unit": 8,
 "subtopic": "inequalities",
 "source": "統測前哨戰 · 不等式（自編題組）",
 "name": {
  "zh": "統測前哨戰 3 · 不等式",
  "en": "Uniform Test Warm-up 3 · Inequalities"
 },
 "intro": {
  "zh": "這一課練四種必考的不等式：①「對所有實數 $x$ 都成立」與「無實數解」＝看開口方向（$x^2$ 的係數）＋ 判別式，求未知數的範圍；② 兩條不等式用「或」連起來（只要一段成立就可以）；③ 三節式複合不等式（$a<x<b$）求出範圍與最大值；④ $\\Delta=0$（完全平方）時四種不等號分別對應甚麼答案。所有題目都是為這一課重新設計的，練的是方法。",
  "en": "This topic practises four must-know inequality types: (1) “true for all real $x$” and “no real solution”, where you read both the opening direction (the coefficient of $x^{2}$) and the discriminant to find the range of an unknown; (2) two inequalities joined by “or”, where one true piece is enough; (3) three-part compound inequalities such as $a<x<b$, where you find the range and the maximum value; (4) what the four inequality signs give when $\\Delta=0$ (a perfect square). Every question was written for this topic, so you practise the method."
 },
 "cmdHints": [
  {
   "en": "for any real number $x$ / has no real solution",
   "zh": "「對任何實數 $x$ 都成立」／「無實數解」：先看 $x^2$ 的係數（要 $>0$，開口向上）＋ 判別式（嚴格 $<0$、有等號 $\\le0$）"
  },
  {
   "en": "find the range of values of $k$",
   "zh": "「求 $k$ 的取值範圍」：答案要寫成區間（$-a\\le k\\le b$）或兩段（$k\\le a$ 或 $k\\ge b$）"
  },
  {
   "en": "or",
   "zh": "「或」：只要一段成立就可以（兩段都寫；一段包含另一段時只寫較寬鬆的那段）"
  },
  {
   "en": "and",
   "zh": "「及」：兩段要同時成立（取重疊，通常是較嚴格的那段）"
  },
  {
   "en": "compound inequality $a<x<b$",
   "zh": "「三節式」：三節一起做同一個運算，最後檢查端點是開還是閉"
  },
  {
   "en": "maximum value of $x$",
   "zh": "「$x$ 的最大值」：先看端點是 $\\le$ 還是 $<$；閉端點才拿得到那個值"
  }
 ],
 "lessons": [
  {
   "id": "as03-1",
   "title": {
    "zh": "第 1 節 · 恆成立、複合不等式與三節式",
    "en": "Set 1 · Always true, compound inequalities and three-part inequalities"
   },
   "cards": [
    {
     "id": "as03-c1",
     "topic": "as03",
     "title": {
      "zh": "複合不等式：先逐條解，再讀出答案",
      "en": "Compound inequalities: solve each part, then read off the answer"
     },
     "body": {
      "zh": "一條題目有兩個不等式時（中間用「或」或「及」連接），做法固定三步：\n① 逐條解，各自寫成「$x$ 大於某數」或「$x$ 小於某數」；\n② 比較兩段，看看哪一段包含哪一段；\n③ 寫出最後答案 —— 不要只把兩條並列就當完成。\n\n「或」（or）：只要其中一段成立就可以，所以兩段都是答案 —— 兩段分開時照寫{{math:0}}\n如果一段完全包含另一段，只寫較寬鬆的那一段就夠{{math:1}}\n\n「及」（and）：兩段要同時成立，所以取兩段重疊的部分 —— 通常就是較嚴格的那一段{{math:2}}\n如果兩段重疊成一段區間，就把兩個端點一齊寫出來{{math:3}}\n\n三節式（例如 $2<x<7$）就是三節之間的「及」：首尾兩節都是純數字時，才可以三節一起加、減、乘、除同一個數（乘或除負數時要把不等號倒轉）；首節或尾節只要含有 $x$，就不能三節一起做，要拆成兩條「及」的不等式，分別解再取交集。最後檢查兩個端點是開（$<$、$>$）還是閉（$\\le$、$\\ge$）。",
      "en": "When a question contains two inequalities joined by “or” or “and”, the routine always has three steps:\n(1) solve each one, writing it as “$x$ is greater than …” or “$x$ is less than …”;\n(2) compare the two pieces and see which one contains the other;\n(3) write the final answer — do not just put the two pieces side by side and stop.\n\n“Or”: it is enough that one piece holds, so both pieces belong to the answer — when the pieces are separate, keep them as they are{{math:0}}\nWhen one piece contains the other, write only the wider one{{math:1}}\n\n“And”: the two must hold together, so take the overlap — usually the stricter piece{{math:2}}\nWhen the overlap forms one interval, write the two endpoints together{{math:3}}\n\nA three-part inequality such as $2<x<7$ is simply an “and” between its three parts: only when the first and last parts are pure numbers may you add, subtract, multiply or divide all three parts by the same number at once (reverse the inequality signs when multiplying or dividing by a negative number); if the first or last part contains $x$, do not work on all three parts — split it into two “and” inequalities, solve each and intersect. Then check whether each endpoint is open ($<$, $>$) or closed ($\\le$, $\\ge$)."
     },
     "math": [
      "x<-3\\text{ or }x>8\n\\text{keep both pieces}",
      "x>7\\text{ or }x>3\n\\Rightarrow x>3\\ \\text{(the wider piece)}",
      "x>3\\text{ and }x\\ge 5\n\\Rightarrow x\\ge 5\\ \\text{(the stricter piece)}",
      "x\\ge 5\\text{ and }x\\le 12\n\\Rightarrow 5\\le x\\le 12"
     ],
     "vocab": [
      {
       "en": "compound inequality",
       "zh": "複合不等式"
      },
      {
       "en": "either ... or ...",
       "zh": "「或」：其中一段成立就足夠"
      },
      {
       "en": "both ... and ...",
       "zh": "「及」：兩段要同時成立"
      }
     ],
     "warn": {
      "zh": "最大的陷阱是把「或」當成「及」：$x<-3$ 或 $x>8$ 之中，$x=0$ 兩條都不成立，所以答案不是「所有實數」。寫答案前用一個中間值代回去檢查一次。另一個常見錯誤：逐條解完就把兩條並列，沒有比較誰包含誰 —— 例如 $x>7$ 或 $x>3$，答案應該化簡為 $x>3$。",
      "en": "The classic trap is treating “or” as “and”: for $x<-3$ or $x>8$ the value $x=0$ satisfies neither, so the answer is not “all real numbers”. Substitute one middle value to check before writing the answer. Another common slip is leaving the two pieces side by side without comparing them: $x>7$ or $x>3$ should be simplified to $x>3$."
     }
    },
    {
     "id": "as03-c2",
     "topic": "as03",
     "title": {
      "zh": "解二次不等式：先分解，再判斷「中間」還是「兩邊」",
      "en": "Quadratic inequalities: factorise, then choose “between” or “outside”"
     },
     "body": {
      "zh": "二次不等式一定要先把一邊變成 0，再分解成兩個括號（假設 $a<b$）：\n{{math:0}}\n{{math:1}}\n{{math:2}}\n{{math:3}}\n記法：$>0$ 取「兩邊」、$<0$ 取「中間」；有等號（$\\ge$、$\\le$）就把兩個端點也包進去。分解不到的話，畫一畫拋物線（開口方向 ＋ 與 $x$ 軸的交點）也一樣看得出答案。",
      "en": "For a quadratic inequality, first make one side zero and factorise into two brackets (assuming $a<b$):\n{{math:0}}\n{{math:1}}\n{{math:2}}\n{{math:3}}\nRemember: $>0$ takes the two outer regions and $<0$ takes the middle interval; with an equality sign ($\\ge$, $\\le$) both endpoints are included as well. If it does not factorise, sketching the parabola (direction of opening plus the $x$-intercepts) gives the same answer."
     },
     "math": [
      "(x-a)(x-b)>0",
      "\\Rightarrow x<a \\text{ or } x>b",
      "(x-a)(x-b)<0",
      "\\Rightarrow a<x<b"
     ],
     "vocab": [
      {
       "en": "inequality",
       "zh": "不等式"
      },
      {
       "en": "number line",
       "zh": "數線"
      },
      {
       "en": "endpoint",
       "zh": "端點"
      }
     ],
     "warn": {
      "zh": "最常見的錯：$\\le0$ 與 $\\ge0$ 的方向搞亂（$\\le0$ 取兩根「之間」、$\\ge0$ 取「兩邊」）。另外分解出來的根是「括號等於 0」的 $x$ 值，寫區間時次序不要倒轉。",
      "en": "The most common error is mixing up the directions: $\\le0$ gives the interval between the roots while $\\ge0$ gives the two outer regions. Also, the roots are the values that make a bracket zero — do not write the interval in the wrong order."
     }
    },
    {
     "id": "as03-c3",
     "topic": "as03",
     "title": {
      "zh": "判別式 $\\Delta=0$：完全平方的四種情況",
      "en": "When $\\Delta=0$: the four cases of a perfect square"
     },
     "body": {
      "zh": "$\\Delta=0$ 代表二次式是一個完全平方（乘上 $x^2$ 的係數 $a$）：\n{{math:0}}\n它與 $x$ 軸只有一個交點 $x=r$，所以答案只有四種（先看 $a>0$）：\n{{math:1}}\n· 「$>0$」＝ 除了 $x=r$ 那一點之外，所有實數都成立；\n· 「$\\ge 0$」＝ 所有實數都成立（連 $x=r$ 也接受）；\n· 「$<0$」＝ 無解；\n· 「$\\le 0$」＝ 只有 $x=r$ 一個解。\n\n如果 $x^2$ 的係數 $a<0$，兩邊同乘 $-1$（不等號倒轉）就變回上面四種情況。\n例：$x^{2}-6x+9=(x-3)^{2}${{math:2}}",
      "en": "$\\Delta=0$ means the quadratic is a perfect square multiplied by the coefficient $a$ of $x^{2}$:\n{{math:0}}\nIt meets the $x$-axis at exactly one point $x=r$, so there are only four possible answers (take $a>0$ first):\n{{math:1}}\n· “$>0$” — true for every real number except the single point $x=r$;\n· “$\\ge 0$” — true for all real numbers (the point $x=r$ counts);\n· “$<0$” — no solution;\n· “$\\le 0$” — the single solution $x=r$.\n\nIf the coefficient of $x^{2}$ is negative, multiply both sides by $-1$ (reversing the inequality sign) and you are back to the four cases above.\nExample: $x^{2}-6x+9=(x-3)^{2}${{math:2}}"
     },
     "math": [
      "ax^{2}+bx+c=a(x-r)^{2},\\quad r=-\\frac{b}{2a}",
      "(x-r)^{2}>0\\ \\Rightarrow\\ x\\ne r\n(x-r)^{2}\\ge 0\\ \\Rightarrow\\ \\text{all real }x\n(x-r)^{2}<0\\ \\Rightarrow\\ \\text{no solution}\n(x-r)^{2}\\le 0\\ \\Rightarrow\\ x=r",
      "x^{2}-6x+9=(x-3)^{2}\n(x-3)^{2}<0:\\ \\text{no solution}\n(x-3)^{2}\\le 0:\\ x=3"
     ],
     "vocab": [
      {
       "en": "perfect square",
       "zh": "完全平方"
      },
      {
       "en": "repeated root",
       "zh": "重根（兩個相等的根）"
      },
      {
       "en": "no solution",
       "zh": "無解"
      }
     ],
     "warn": {
      "zh": "最常見的錯是一見到 $\\Delta=0$ 就答「所有實數」—— 那只對 $\\ge 0$ 成立：「$>0$」要把 $x=r$ 那一點排除，「$\\le 0$」更加只有 $x=r$ 一個解，「$<0$」則是無解。做題前先問一句：不等號有沒有等號？",
      "en": "The usual mistake is answering “all real numbers” as soon as $\\Delta=0$: that holds only for $\\ge 0$. For $>0$ the point $x=r$ must be excluded, for $\\le 0$ the only solution is $x=r$, and for $<0$ there is no solution. Ask one question first: does the inequality include equality?"
     }
    },
    {
     "id": "as03-c4",
     "topic": "as03",
     "title": {
      "zh": "「對所有實數 x 都成立」與「無解」：一般二次式的判別式條件",
      "en": "“True for all real x” and “no solution”: the discriminant conditions in general"
     },
     "body": {
      "zh": "見到「for any real number $x$」或「對任何實數 $x$ 都成立」，代表整條拋物線要留在 $x$ 軸的同一邊，所以條件一定同時看兩件事：\n① 開口方向（$x^2$ 的係數 $a$）；\n② 有沒有穿過 $x$ 軸（判別式 $\\Delta$）。\n\n寫成一般式 $ax^{2}+bx+c$（$a\\ne 0$），「對所有實數 $x$ 都成立」有四種情況：\n{{math:0}}\n\n「無解」（沒有任何實數 $x$ 滿足）就是把同一件事反過來讀 —— 例如 $ax^{2}+bx+c<0$ 無解，等同於 $ax^{2}+bx+c\\ge 0$ 對所有實數 $x$ 都成立。四種情況：\n{{math:1}}\n\n三個要點：\n① $a>0$（開口向上）才可以「大於 0」撐得住；$a<0$（開口向下）才可以「小於 0」撐得住 —— 只看 $\\Delta$ 而漏看 $a$，答案一定錯。\n② 有等號（$\\ge$、$\\le$）用 $\\Delta\\le 0$；嚴格（$>$、$<$）用 $\\Delta<0$。$\\Delta=0$ 時只有一個 $x$ 值會令式子等於 0，嚴格不等式不接受那一個值（見上一張卡）。\n③ 如果 $x^2$ 的係數含未知數（例如 $kx^{2}+\\cdots$），要另外檢查 $k=0$：那時它不是二次式。\n\n例（$a\\ne 1$）：$3x^{2}+4x+k>0$ 對所有實數 $x$ 都成立{{math:2}}\n例（無解）：$kx^{2}+2x+1<0$ 沒有實數解{{math:3}}",
      "en": "“For any real number $x$” means the whole parabola must stay on one side of the $x$-axis, so two things always matter at once:\n(1) which way it opens (the coefficient $a$ of $x^{2}$);\n(2) whether it crosses the $x$-axis (the discriminant $\\Delta$).\n\nWrite the quadratic as $ax^{2}+bx+c$ with $a\\ne 0$. “True for all real $x$” gives four cases:\n{{math:0}}\n\n“No solution” (no real $x$ satisfies it) is the same statement read the other way round — for example, $ax^{2}+bx+c<0$ having no solution is the same as $ax^{2}+bx+c\\ge 0$ being true for all real $x$. The four cases:\n{{math:1}}\n\nThree key points:\n(1) $a>0$ (opening upwards) is what lets a quadratic stay positive, and $a<0$ (opening downwards) is what lets it stay negative — using $\\Delta$ alone and forgetting $a$ always gives a wrong answer.\n(2) With equality ($\\ge$, $\\le$) use $\\Delta\\le 0$; for a strict inequality ($>$, $<$) use $\\Delta<0$. When $\\Delta=0$ there is one value of $x$ that makes the expression zero, and a strict inequality rejects it (see the previous card).\n(3) If the coefficient of $x^{2}$ contains the unknown (for example $kx^{2}+\\cdots$), check $k=0$ separately: then it is not a quadratic at all.\n\nExample ($a\\ne 1$): $3x^{2}+4x+k>0$ for all real $x$ {{math:2}}\nExample (no solution): $kx^{2}+2x+1<0$ has no real solution {{math:3}}"
     },
     "math": [
      "ax^{2}+bx+c>0\\ \\text{for all }x\\ \\Leftrightarrow\\ a>0\\ \\text{and}\\ \\Delta<0\nax^{2}+bx+c\\ge 0\\ \\text{for all }x\\ \\Leftrightarrow\\ a>0\\ \\text{and}\\ \\Delta\\le 0\nax^{2}+bx+c<0\\ \\text{for all }x\\ \\Leftrightarrow\\ a<0\\ \\text{and}\\ \\Delta<0\nax^{2}+bx+c\\le 0\\ \\text{for all }x\\ \\Leftrightarrow\\ a<0\\ \\text{and}\\ \\Delta\\le 0",
      "ax^{2}+bx+c>0\\ \\text{has no solution}\\ \\Leftrightarrow\\ a<0\\ \\text{and}\\ \\Delta\\le 0\nax^{2}+bx+c\\ge 0\\ \\text{has no solution}\\ \\Leftrightarrow\\ a<0\\ \\text{and}\\ \\Delta<0\nax^{2}+bx+c<0\\ \\text{has no solution}\\ \\Leftrightarrow\\ a>0\\ \\text{and}\\ \\Delta\\le 0\nax^{2}+bx+c\\le 0\\ \\text{has no solution}\\ \\Leftrightarrow\\ a>0\\ \\text{and}\\ \\Delta<0",
      "3x^{2}+4x+k>0\\ \\text{for all real }x\n\\Rightarrow a=3>0\\ \\text{and}\\ \\Delta=4^{2}-4(3)(k)=16-12k<0\n\\Rightarrow k>\\frac{4}{3}",
      "kx^{2}+2x+1<0\\ \\text{has no solution}\n\\Rightarrow kx^{2}+2x+1\\ge 0\\ \\text{for all real }x\n\\Rightarrow k>0\\ \\text{and}\\ \\Delta=2^{2}-4(k)(1)=4-4k\\le 0\n\\Rightarrow k\\ge 1"
     ],
     "vocab": [
      {
       "en": "for all real numbers",
       "zh": "對所有實數都成立"
      },
      {
       "en": "leading coefficient",
       "zh": "二次項係數（$x^2$ 的係數）"
      },
      {
       "en": "no solution",
       "zh": "無解"
      }
     ],
     "warn": {
      "zh": "三個常見錯誤：① 只寫 $\\Delta<0$ 而忘記 $x^2$ 的係數要正 —— $a=1$ 的題目剛好不用寫，但 $a=2$ 或 $a=k$ 的題目就會漏；② 嚴格與非嚴格不分（嚴格用 $\\Delta<0$、有等號用 $\\Delta\\le 0$），寫錯會多收或少收邊界值；③ $x^2$ 的係數含未知數時沒有檢查它等於 0 的情況 —— 例如 $kx^{2}+2kx+3>0$ 對所有實數 $x$ 都成立：$k=0$ 時變成 $3>0$，所以 $k=0$ 也成立。",
      "en": "Three common mistakes: (1) writing only $\\Delta<0$ and forgetting that the coefficient of $x^{2}$ must be positive — questions with $a=1$ hide this hole, but $a=2$ or $a=k$ exposes it; (2) mixing up strict and non-strict inequalities (strict needs $\\Delta<0$, equality allows $\\Delta\\le 0$), which adds or drops boundary values; (3) when the coefficient of $x^{2}$ contains the unknown, not checking the case where it is zero — for example $kx^{2}+2kx+3>0$ for all real $x$ also holds when $k=0$, because the statement becomes $3>0$."
     }
    }
   ],
   "long": [
    {
     "id": "eph-as03-ex01",
     "type": "long",
     "topic": "as03",
     "unit": 8,
     "subtopic": "inequalities",
     "difficulty": 2,
     "code": "AS3-EX1",
     "source": "統測前哨戰 · 不等式：三節式複合不等式（自編）",
     "stem": {
      "text": "Consider the compound inequality $\\frac{4x-3}{9}\\le \\frac{x}{3}+1\\le 3$.",
      "zh": "考慮複合不等式 $\\frac{4x-3}{9}\\le \\frac{x}{3}+1\\le 3$。",
      "en": "Consider the compound inequality $\\frac{4x-3}{9}\\le \\frac{x}{3}+1\\le 3$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Solve the compound inequality.",
       "marks": 4,
       "zh": "解該複合不等式。",
       "en": "Solve the compound inequality."
      },
      {
       "label": "(b)",
       "text": "Find the maximum value of $x$ which satisfies the compound inequality in (a).",
       "marks": 2,
       "zh": "求滿足 (a) 的複合不等式的 $x$ 的最大值。",
       "en": "Find the maximum value of $x$ which satisfies the compound inequality in (a)."
      }
     ],
     "marks": 6,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 三節式＝「及」，拆成兩條",
         "en": "Step 1 · A three-part inequality means “and”: split it"
        },
        "math": "\\frac{4x-3}{9}\\le \\frac{x}{3}+1\\quad \\text{and}\\quad \\frac{x}{3}+1\\le 3",
        "zh": "中間的 $\\frac{x}{3}+1$ 同時受左右兩邊限制，所以是「及」：兩條不等式都要解，最後取交集。首節 $\\frac{4x-3}{9}$ 含有 $x$（不是純數字），這類三節式不能三節一起做，一定要像這樣拆開。",
        "en": "The middle expression is bounded on both sides, so this is an “and”: solve both inequalities and then intersect the answers. The first part $\\frac{4x-3}{9}$ contains $x$ rather than being a pure number, so a three-part inequality like this must be split up instead of worked on all at once.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 解左邊",
         "en": "Step 2 · Solve the left inequality"
        },
        "math": "9 \\times \\left[\\frac{4x-3}{9}\\right] \\le 9 \\times \\left[\\frac{x}{3}+1\\right]\n\\Rightarrow 4x-3 \\le 3x+9\n\\Rightarrow x \\le 12",
        "zh": "左邊兩邊同乘 9 去分母。右側整塊必須加中括號展開：$9 \\left[ \\frac{x}{3} + 1 \\right] = 3x + 9$。切忌心算跳步，常數項 1 容易忘記乘 9。",
        "en": "Multiply both sides by 9. The right side must be placed in brackets: $9 \\left[ \\frac{x}{3} + 1 \\right] = 3x + 9$. Do not skip steps, as multiplying the constant 1 by 9 is frequently missed.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 解右邊",
         "en": "Step 3 · Solve the right inequality"
        },
        "math": "\\frac{x}{3}\\le 2\n\\Rightarrow x\\le 6",
        "zh": "右邊：$\\frac{x}{3}+1\\le3$，兩邊減 1 再乘 3，得 $x\\le6$。",
        "en": "Right inequality: subtract 1 from $\\frac{x}{3}+1\\le3$ and multiply by 3 to get $x\\le6$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 兩條都要成立",
         "en": "Step 4 · Both must hold"
        },
        "math": "x\\le 12 \\text{ and } x\\le 6\n\\Rightarrow x\\le 6",
        "zh": "兩條同時成立，較嚴格的是 $x\\le6$，所以 (a) 的答案是 $x\\le6$。",
        "en": "Both conditions hold together, and the stricter one is $x\\le6$, so the answer to (a) is $x\\le6$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 5 步 · 檢查端點",
         "en": "Step 5 · Check the endpoint"
        },
        "math": "x=6:\\ \\frac{4(6)-3}{9}=\\frac{21}{9},\\ \\frac{6}{3}+1=3",
        "zh": "把 $x=6$ 代回原式驗算：左邊 $\\frac{21}{9}\\approx2.33\\le3$、右邊 $\\frac{6}{3}+1=3\\le3$，成立；再試 $x=6.5$ 便會超過 3。",
        "en": "Substitute $x=6$ back: the left side is $\\frac{21}{9}\\approx2.33\\le3$ and the right side is $\\frac{6}{3}+1=3\\le3$, so it holds; at $x=6.5$ the value already exceeds 3.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 6 步 · (b) 最大值",
         "en": "Step 6 · (b) the maximum value"
        },
        "math": "x=6",
        "zh": "(b) 不等號是「$\\le$」（有等號），所以 $x=6$ 本身也符合；最大的 $x$ 就是 6。",
        "en": "In (b) the inequality is “$\\le$”, so $x=6$ itself is allowed; the maximum value of $x$ is 6.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "只乘一邊",
        "labelEn": "multiplying only one side",
        "zh": "去分母時要整個三節一起乘（每一節都乘），只乘其中一節就會漏掉另一條條件。",
        "en": "When clearing a fraction in a three-part inequality, multiply every part; touching only one part loses the other condition."
       },
       {
        "label": "忘記取交集",
        "labelEn": "forgetting to intersect",
        "zh": "三節式是「及」，兩條都要成立；只寫其中一條會漏掉較嚴格的條件（這裡是 $x\\le6$，不是 $x\\le12$）。",
        "en": "A three-part inequality is an “and”: both conditions must hold. Writing only one misses the stricter bound, which here is $x\\le6$ rather than $x\\le12$."
       }
      ],
      "tip": {
       "zh": "三節式的固定三步：拆成兩條 → 分別解 → 取交集（在數線上畫一畫最清楚）。",
       "en": "Three fixed steps for a three-part inequality: split into two, solve each, then intersect — sketching a number line makes the intersection obvious."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代入端點",
         "en": "Check by substituting the endpoints"
        },
        "zh": "把 $x=6$ 代回：$\\frac{4(6)-3}{9}=\\frac{21}{9}$、$\\frac{6}{3}+1=3$，左邊 $\\le3$、右邊 $=3$，成立。再試 $x=6.5$：$\\frac{6.5}{3}+1\\approx3.17>3$，已不成立，所以最大值確實是 6。",
        "en": "Substitute $x=6$: $\\frac{4(6)-3}{9}=\\frac{21}{9}$ and $\\frac{6}{3}+1=3$, so the left side is below 3 and the right side equals 3. Try $x=6.5$: $\\frac{6.5}{3}+1\\approx3.17>3$ fails, confirming that 6 is the maximum."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-as03-ex02",
     "type": "long",
     "topic": "as03",
     "unit": 8,
     "subtopic": "inequalities",
     "difficulty": 3,
     "code": "AS3-EX2",
     "source": "統測前哨戰 · 不等式：三節式複合不等式（自編）",
     "stem": {
      "text": "Consider the compound inequality $-3<\\frac{2x-5}{3}\\le 5$.",
      "zh": "考慮複合不等式 $-3<\\frac{2x-5}{3}\\le 5$。",
      "en": "Consider the compound inequality $-3<\\frac{2x-5}{3}\\le 5$."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "Solve the compound inequality.",
       "marks": 4,
       "zh": "解該複合不等式。",
       "en": "Solve the compound inequality."
      },
      {
       "label": "(b)",
       "text": "Find the maximum value of $x$ which satisfies the compound inequality in (a).",
       "marks": 2,
       "zh": "求滿足 (a) 的複合不等式的 $x$ 的最大值。",
       "en": "Find the maximum value of $x$ which satisfies the compound inequality in (a)."
      }
     ],
     "marks": 6,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · 三節一起乘 3",
         "en": "Step 1 · Multiply all three parts by 3"
        },
        "math": "-9<2x-5\\le 15",
        "zh": "三節式可以「同時」做同一個運算，不必拆開 —— 前提是首尾兩節都是純數字（本題是 $-3$ 與 $5$）。乘 3 是正數，兩個不等號方向都不變。",
        "en": "A three-part inequality lets you apply the same operation to all three parts at once instead of splitting it up — provided that the first and last parts are pure numbers (here $-3$ and $5$). Multiplying by 3 is safe: both inequality signs keep their direction.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 三節一起加 5",
         "en": "Step 2 · Add 5 to every part"
        },
        "math": "-4<2x\\le 20",
        "zh": "三節一起加 5：$-9+5=-4$、$15+5=20$，目標是令中間只剩下 $2x$。",
        "en": "Add 5 to all three parts: $-9+5=-4$ and $15+5=20$, leaving just $2x$ in the middle.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · 三節一起除以 2",
         "en": "Step 3 · Divide every part by 2"
        },
        "math": "-2<x\\le 10",
        "zh": "除以 2（正數，方向不變），得 $-2<x\\le10$。",
        "en": "Divide by 2 (positive, so directions are unchanged) to get $-2<x\\le10$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 檢查左端點",
         "en": "Step 4 · Check the left endpoint"
        },
        "math": "x=-2:\\ \\frac{-9}{3}=-3",
        "zh": "左邊是「$<$」（嚴格），$x=-2$ 時中間等於 $-3$，不合「大於 $-3$」，所以要排除 $-2$。",
        "en": "The left sign is “$<$” (strict). At $x=-2$ the middle equals $-3$, which is not greater than $-3$, so $-2$ is excluded.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 5 步 · 檢查右端點",
         "en": "Step 5 · Check the right endpoint"
        },
        "math": "x=10:\\ \\frac{15}{3}=5\\le 5",
        "zh": "右邊是「$\\le$」（有等號），$x=10$ 時中間等於 5，符合，所以要保留 10。",
        "en": "The right sign is “$\\le$”, so at $x=10$ the middle equals 5 and satisfies the condition; keep 10.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 6 步 · (b) 最大值",
         "en": "Step 6 · (b) the maximum value"
        },
        "math": "x=10",
        "zh": "右端是閉的（$\\le$），所以最大的 $x$ 就是 10。",
        "en": "The right end is closed, so the maximum value of $x$ is 10.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "端點開閉搞錯",
        "labelEn": "getting the open/closed endpoints wrong",
        "zh": "左邊是「$<$」（開）、右邊是「$\\le$」（閉）：$-2$ 要排除、$10$ 要保留。這正是 (b) 的答案來源。",
        "en": "The left sign is “$<$” (open) and the right is “$\\le$” (closed): exclude $-2$ but keep 10. This is exactly where the answer to (b) comes from."
       },
       {
        "label": "三節只做一半",
        "labelEn": "operating on only part of the inequality",
        "zh": "三節式做運算時三個部分都要做；只改中間一節，最後的範圍就會偏。",
        "en": "Every operation in a three-part inequality must be applied to all three parts; changing only the middle one shifts the final range."
       }
      ],
      "tip": {
       "zh": "三節式可以三節一起做同一個運算，比拆成兩條快 —— 但只限首尾兩節都是純數字（如本題 $-3$、$5$）；首節或尾節只要含有 $x$（如第 1 題的 $\\frac{4x-3}{9}$），就要拆成兩條「及」：分別解，再取交集。最後一定要逐個檢查兩個端點是開還是閉。",
       "en": "Applying one operation to all three parts at once is quicker than splitting it up — but it only works when the first and last parts are pure numbers (here $-3$ and $5$). If the first or last part contains $x$ (as in Q.1, $\\frac{4x-3}{9}$), split it into two “and” inequalities: solve each, then intersect. Always check whether each endpoint is open or closed."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：代入端點與端點外",
         "en": "Check the endpoints and just beyond"
        },
        "zh": "把 $x=10$ 代回：$\\frac{2(10)-5}{3}=5$，符合 $\\le5$。再試 $x=11$：$\\frac{17}{3}\\approx5.67>5$ 不成立，所以最大值是 10。",
        "en": "Substitute $x=10$: $\\frac{2(10)-5}{3}=5$, which satisfies $\\le5$. Try $x=11$: $\\frac{17}{3}\\approx5.67>5$ fails, so the maximum value is 10."
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
      "id": "eph-as03-m01",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 2,
      "code": "AS3-M01",
      "source": "統測前哨戰 · 不等式：恆成立求 k 的範圍（自編）",
      "stem": {
       "text": "Let $k$ be a constant. Find the range of values of $k$ such that $x^{2}+2kx+4k+5\\ge 0$ for any real number $x$.",
       "zh": "設 $k$ 為常數。求 $k$ 的取值範圍，使得 $x^{2}+2kx+4k+5\\ge 0$ 對任何實數 $x$ 都成立。",
       "en": "Let $k$ be a constant. Find the range of values of $k$ such that $x^{2}+2kx+4k+5\\ge 0$ for any real number $x$."
      },
      "options": {
       "A": "$-5\\le k\\le 1$",
       "B": "$k\\le -5$ or $k\\ge 1$",
       "C": "$-1\\le k\\le 5$",
       "D": "$k\\le -1$ or $k\\ge 5$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 恆成立＝判別式條件",
          "en": "Step 1 · “Always true” becomes a discriminant condition"
         },
         "math": "x^{2}+2kx+4k+5\\ge 0\\ \\text{for all }x",
         "zh": "$x^2$ 的係數是 $1>0$，拋物線開口向上；要它永遠不小於 0，就只可以「不碰到 $x$ 軸」或「只碰一次」，即判別式 $\\Delta\\le0$。",
         "en": "The coefficient of $x^{2}$ is $1>0$, so the parabola opens upwards. For it never to go below 0 it must not cross the $x$-axis, or touch it only once: the discriminant must satisfy $\\Delta\\le0$."
        },
        {
         "title": {
          "zh": "第 2 步 · 計算判別式",
          "en": "Step 2 · Compute the discriminant"
         },
         "math": "\\Delta=(2k)^{2}-4(1)(4k+5)=4k^{2}-16k-20",
         "zh": "留意 $b=2k$，平方時是 $(2k)^2=4k^2$（連係數一齊平方）；常數項是 $4k+5$，整塊乘 4。",
         "en": "Note that $b=2k$, so squaring gives $(2k)^{2}=4k^{2}$ (the coefficient is squared too), and the constant term $4k+5$ is multiplied by 4 as a block."
        },
        {
         "title": {
          "zh": "第 3 步 · 整理不等式",
          "en": "Step 3 · Simplify the inequality"
         },
         "math": "4k^{2}-16k-20\\le 0\n\\Rightarrow k^{2}-4k-5\\le 0",
         "zh": "兩邊除以 4（正數，方向不變），數字細一點比較容易分解。",
         "en": "Divide both sides by 4 (a positive number, so the inequality does not turn) to make the numbers easier to factorise."
        },
        {
         "title": {
          "zh": "第 4 步 · 分解再讀出範圍",
          "en": "Step 4 · Factorise and read off the range"
         },
         "math": "(k-5)(k+1)\\le 0\n\\Rightarrow -1\\le k\\le 5",
         "zh": "$k^2-4k-5=(k-5)(k+1)$。兩塊相乘 $\\le0$ 表示一正一負，所以 $k$ 在兩根 $-1$ 與 $5$ 之間。答案是 C。",
         "en": "$k^{2}-4k-5=(k-5)(k+1)$. A product that is $\\le0$ means one factor is positive and the other negative, so $k$ lies between the two roots $-1$ and $5$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "D",
         "zh": "$k\\le -1$ or $k\\ge 5$ 的兩根正確，但方向錯：$(k-5)(k+1)\\le0$ 的解是「兩根之間」，不是兩邊。",
         "en": "$k\\le -1$ or $k\\ge 5$ has the right roots but the wrong direction: $(k-5)(k+1)\\le0$ gives the interval between the roots, not the outside."
        },
        {
         "opt": "B",
         "zh": "$k\\le -5$ or $k\\ge 1$ 用了 $\\Delta\\ge0$（有實根）的條件；題目要「所有實數都成立」，方向剛好相反。",
         "en": "$k\\le -5$ or $k\\ge 1$ uses $\\Delta\\ge0$ (having real roots), but “true for all real $x$” requires the opposite condition."
        },
        {
         "opt": "A",
         "zh": "$-5\\le k\\le 1$ 把兩根當成 $-5$ 與 $1$；$(k-5)(k+1)=0$ 的根是 $5$ 與 $-1$（括號等於 0 才是根），寫區間時次序不要倒轉。",
         "en": "$-5\\le k\\le 1$ misreads the roots as $-5$ and $1$; $(k-5)(k+1)=0$ gives $5$ and $-1$, since a root is where the bracket itself is zero."
        }
       ],
       "tip": {
        "zh": "「對所有實數 $x$ 都 $\\ge0$」＝開口向上 ＋ $\\Delta\\le0$；最後一步記住 $\\le0$ 取「兩根之間」、$\\ge0$ 取「兩根之外」。",
        "en": "“$\\ge0$ for all real $x$” means opening upwards together with $\\Delta\\le0$. Remember that $\\le0$ gives the interval between the roots while $\\ge0$ gives the two outer regions."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as03-m02",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 1,
      "code": "AS3-M02",
      "source": "統測前哨戰 · 不等式：嚴格大於的恆成立（自編）",
      "stem": {
       "text": "Let $k$ be a constant. Find the range of values of $k$ such that $x^{2}-4x+k>0$ for any real number $x$.",
       "zh": "設 $k$ 為常數。求 $k$ 的取值範圍，使得 $x^{2}-4x+k>0$ 對任何實數 $x$ 都成立。",
       "en": "Let $k$ be a constant. Find the range of values of $k$ such that $x^{2}-4x+k>0$ for any real number $x$."
      },
      "options": {
       "A": "$k<-4$",
       "B": "$k>-4$",
       "C": "$k<4$",
       "D": "$k>4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 寫出判別式",
          "en": "Step 1 · Write the discriminant"
         },
         "math": "\\Delta=(-4)^{2}-4(1)(k)=16-4k",
         "zh": "$a=1$、$b=-4$、$c=k$，所以 $\\Delta=16-4k$。",
         "en": "With $a=1$, $b=-4$ and $c=k$, the discriminant is $\\Delta=16-4k$."
        },
        {
         "title": {
          "zh": "第 2 步 · 嚴格大於 → Δ < 0",
          "en": "Step 2 · Strict inequality → Δ < 0"
         },
         "math": "16-4k<0\n\\Rightarrow k>4",
         "zh": "題目是「$>0$」（嚴格），所以拋物線要完全在 $x$ 軸之上，$\\Delta<0$。$16<4k$ 即 $k>4$。",
         "en": "The question says $>0$ (strict), so the parabola must lie entirely above the $x$-axis and $\\Delta<0$. From $16<4k$ we get $k>4$."
        },
        {
         "title": {
          "zh": "第 3 步 · 檢查邊界值",
          "en": "Step 3 · Check the boundary"
         },
         "math": "k=4:\\ x^{2}-4x+4=(x-2)^{2}",
         "zh": "邊界 $k=4$ 時方程是 $(x-2)^2$，在 $x=2$ 等於 0，不滿足「$>0$」，所以 $k$ 不可以等於 4。答案是 D。",
         "en": "At the boundary $k=4$ the expression is $(x-2)^{2}$, which equals 0 at $x=2$ and therefore fails “$>0$”. So $k=4$ is not allowed. The answer is D."
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "$k<4$ 把不等式方向倒轉：$16-4k<0$ 移項後是 $4k>16$，即 $k>4$。",
         "en": "$k<4$ reverses the inequality: from $16-4k<0$ we get $4k>16$, that is $k>4$."
        },
        {
         "opt": "B",
         "zh": "$k>-4$ 的符號錯：移項後是一次方程 $4k>16$，解是 $k>4$（不是 $-4$）。",
         "en": "$k>-4$ has the wrong sign: the linear inequality $4k>16$ gives $k>4$, not $-4$."
        },
        {
         "opt": "A",
         "zh": "$k<-4$ 同時犯兩個錯：方向倒轉，而且把界寫成 $-4$。",
         "en": "$k<-4$ makes two errors: the direction is reversed and the boundary is written as $-4$."
        }
       ],
       "tip": {
        "zh": "「$>0$」用 $\\Delta<0$、「$\\ge0$」用 $\\Delta\\le0$；每次求出邊界值都要代回去檢查一次（這題 $k=4$ 就是反面教材）。",
        "en": "Use $\\Delta<0$ for “$>0$” and $\\Delta\\le0$ for “$\\ge0$”; always substitute the boundary value back, as $k=4$ shows here."
       },
       "alt": [
        {
         "name": {
          "zh": "邊界值與特值驗算法",
          "en": "Boundary and test value method"
         },
         "zh": "臨界值試 $k=4$：式子成為 $x^{2}-4x+4=(x-2)^{2}$，在 $x=2$ 時等於 0，不符合題目嚴格「$>0$」的要求 —— 所以 $k$ 不能等於 4，凡包含 4 的選項（B：$k>-4$）先排除。再各試一個值：$k=-5$ 得 $x^{2}-4x-5=(x-5)(x+1)$，取 $x=2$ 得 $-9<0$，排除 A（$k<-4$）；$k=0$ 得 $x^{2}-4x$，取 $x=2$ 得 $-4<0$，排除 C（$k<4$）。三個測試值分別排除 A、B、C，餘下只有 D（$k>4$）。",
         "en": "Try the boundary $k=4$: the expression becomes $x^{2}-4x+4=(x-2)^{2}$, which equals 0 at $x=2$ and so fails the strict “$>0$” test — hence $k=4$ is not allowed, and option B ($k>-4$, which contains 4) is out. Test one value from each remaining option: $k=-5$ gives $x^{2}-4x-5=(x-5)(x+1)$, which is $-9$ at $x=2$, ruling out A ($k<-4$); $k=0$ gives $x^{2}-4x$, which is $-4$ at $x=2$, ruling out C ($k<4$). Only D ($k>4$) survives."
        }
       ]
      },
      "answer": "D",
      "verify": "checked"
     },
     {
      "id": "eph-as03-m03",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 2,
      "code": "AS3-M03",
      "source": "統測前哨戰 · 不等式：恆成立求 t 的範圍（自編）",
      "stem": {
       "text": "Let $t$ be a constant. Find the range of values of $t$ such that $x^{2}+tx+9\\ge 0$ for any real number $x$.",
       "zh": "設 $t$ 為常數。求 $t$ 的取值範圍，使得 $x^{2}+tx+9\\ge 0$ 對任何實數 $x$ 都成立。",
       "en": "Let $t$ be a constant. Find the range of values of $t$ such that $x^{2}+tx+9\\ge 0$ for any real number $x$."
      },
      "options": {
       "A": "$-3\\le t\\le 3$",
       "B": "$t\\le -6$ or $t\\ge 6$",
       "C": "$-6\\le t\\le 6$",
       "D": "$t\\le -3$ or $t\\ge 3$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 判別式",
          "en": "Step 1 · Discriminant"
         },
         "math": "\\Delta=t^{2}-4(1)(9)=t^{2}-36",
         "zh": "$a=1$、$b=t$、$c=9$，所以 $\\Delta=t^2-36$。",
         "en": "With $a=1$, $b=t$ and $c=9$, the discriminant is $t^{2}-36$."
        },
        {
         "title": {
          "zh": "第 2 步 · 分解",
          "en": "Step 2 · Factorise"
         },
         "math": "t^{2}-36\\le 0\n\\Rightarrow (t-6)(t+6)\\le 0",
         "zh": "平方差分解：$t^{2}-36=(t-6)(t+6)$。$t^{2}$ 的係數 $1>0$，圖像向上開，所以「$\\le 0$」代表圖像在橫軸下方的那一段 —— 答案被兩個根夾住：$-6\\le t\\le 6$，兩個條件之間是「及」（and）。至於「兩塊一正一負」，那是分解成乘積之後的讀法：$t^{2}-36$ 屬「平方減常數」的型態，$(t-6)$、$(t+6)$ 一正一負，正好就是「$t$ 在 $-6$ 與 $6$ 之間」。",
         "en": "Difference of two squares: $t^{2}-36=(t-6)(t+6)$. The coefficient of $t^{2}$ is $1>0$, so the curve opens upwards and “$\\le 0$” is the part below the horizontal axis — the answer is squeezed between the two roots, $-6\\le t\\le 6$, with the two conditions joined by “and”. The “one factor positive, the other negative” reading comes only after factorising: $t^{2}-36$ is of the form square minus constant, so $(t-6)$ and $(t+6)$ have opposite signs, which is exactly “$t$ lies between $-6$ and $6$”."
        },
        {
         "title": {
          "zh": "第 3 步 · 讀出範圍",
          "en": "Step 3 · Read off the range"
         },
         "math": "-6\\le t\\le 6",
         "zh": "$t$ 要在兩根 $-6$ 與 $6$ 之間。答案是 C。",
         "en": "$t$ lies between the two roots $-6$ and $6$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$t\\le -6$ or $t\\ge 6$ 的兩根正確，但方向錯：$\\le0$ 取兩根之間。",
         "en": "$t\\le -6$ or $t\\ge 6$ has the right roots but the wrong direction: $\\le0$ gives the interval between them."
        },
        {
         "opt": "A",
         "zh": "$-3\\le t\\le 3$ 是解了 $t^2\\le9$：$36$ 開方是 $6$，不是 $3$（$3^2=9$）。",
         "en": "$-3\\le t\\le 3$ solves $t^{2}\\le9$ by mistake: the square root of 36 is 6, not 3."
        },
        {
         "opt": "D",
         "zh": "$t\\le -3$ or $t\\ge 3$ 同時犯了「開方錯」與「方向錯」兩個問題。",
         "en": "$t\\le -3$ or $t\\ge 3$ makes both mistakes: the wrong square root and the wrong direction."
        }
       ],
       "tip": {
        "zh": "$t^2\\le c^2$ 的解是 $-c\\le t\\le c$ —— 中間那一段，不是兩邊。先開方、再判斷方向，兩步分開做。",
        "en": "The solution of $t^{2}\\le c^{2}$ is $-c\\le t\\le c$, the middle interval rather than the two outer regions. Take the square root first, then decide the direction."
       }
      },
      "answer": "C",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-as03-m04",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 1,
      "code": "AS3-M04",
      "source": "統測前哨戰 · 不等式：兩條不等式取「或」（自編）",
      "stem": {
       "text": "Solve $3x+5<x-1$ or $2x-7>9$.",
       "zh": "解 $3x+5<x-1$ 或 $2x-7>9$。",
       "en": "Solve $3x+5<x-1$ or $2x-7>9$."
      },
      "options": {
       "A": "$x<-3$ or $x>8$",
       "B": "$-3<x<8$",
       "C": "$x>8$",
       "D": "all real numbers"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 第一條不等式",
          "en": "Step 1 · The first inequality"
         },
         "math": "3x+5<x-1\n\\Rightarrow 2x<-6\n\\Rightarrow x<-3",
         "zh": "把 $x$ 集中在一邊：$3x-x<-1-5$，得 $2x<-6$，即 $x<-3$。",
         "en": "Collect the $x$ terms: $3x-x<-1-5$ gives $2x<-6$, that is $x<-3$."
        },
        {
         "title": {
          "zh": "第 2 步 · 第二條不等式",
          "en": "Step 2 · The second inequality"
         },
         "math": "2x-7>9\n\\Rightarrow 2x>16\n\\Rightarrow x>8",
         "zh": "$2x>16$，即 $x>8$。",
         "en": "$2x>16$, that is $x>8$."
        },
        {
         "title": {
          "zh": "第 3 步 · 「或」＝取聯集",
          "en": "Step 3 · “or” means union"
         },
         "math": "x<-3 \\text{ or } x>8",
         "zh": "題目是「或」，兩個解集都要（取聯集）：$x<-3$ 或 $x>8$。答案是 A。",
         "en": "The word is “or”, so both solution sets count (take the union): $x<-3$ or $x>8$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-3<x<8$ 把「或」當成「及」（取交集）：$-3$ 與 $8$ 之間（例如 $x=0$）兩條不等式都不成立。",
         "en": "$-3<x<8$ treats “or” as “and” (an intersection): between $-3$ and $8$, for example $x=0$, neither inequality holds."
        },
        {
         "opt": "C",
         "zh": "$x>8$ 只取了第二條，漏掉第一條。",
         "en": "$x>8$ keeps only the second inequality and drops the first."
        },
        {
         "opt": "D",
         "zh": "all real numbers 是錯的：$x=0$ 兩條都不成立，所以不是所有實數都符合。",
         "en": "“All real numbers” is wrong: $x=0$ satisfies neither inequality."
        }
       ],
       "tip": {
        "zh": "「或」＝聯集（把兩段都寫出來）、「及」＝交集（取重疊那段）；用一個中間值（例如 $x=0$）代回檢查，就可以排除「all real numbers」。",
        "en": "“Or” is a union (write both pieces) and “and” is an intersection (take the overlap). Substituting a middle value such as $x=0$ quickly rules out “all real numbers”."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-as03-m05",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 2,
      "code": "AS3-M05",
      "source": "統測前哨戰 · 不等式：有分數的「或」（自編）",
      "stem": {
       "text": "Solve $\\frac{2x+1}{3}<x-2$ or $5x-3>12$.",
       "zh": "解 $\\frac{2x+1}{3}<x-2$ 或 $5x-3>12$。",
       "en": "Solve $\\frac{2x+1}{3}<x-2$ or $5x-3>12$."
      },
      "options": {
       "A": "$x>3$",
       "B": "$x>7$",
       "C": "$3<x<7$",
       "D": "$x<3$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 第一條（先去分母）",
          "en": "Step 1 · First inequality (clear the fraction)"
         },
         "math": "\\frac{2x+1}{3}<x-2\n\\Rightarrow 2x+1<3x-6\n\\Rightarrow x>7",
         "zh": "兩邊乘 3（正數，方向不變）：$2x+1<3x-6$。移項得 $1+6<x$，即 $x>7$。",
         "en": "Multiply by 3 (positive, so the inequality keeps its direction): $2x+1<3x-6$. Rearranging gives $1+6<x$, that is $x>7$."
        },
        {
         "title": {
          "zh": "第 2 步 · 第二條",
          "en": "Step 2 · Second inequality"
         },
         "math": "5x-3>12\n\\Rightarrow 5x>15\n\\Rightarrow x>3",
         "zh": "$5x>15$，即 $x>3$。",
         "en": "$5x>15$, that is $x>3$."
        },
        {
         "title": {
          "zh": "第 3 步 · 誰包含誰？",
          "en": "Step 3 · Which set contains the other?"
         },
         "math": "x>7 \\text{ or } x>3\n\\Rightarrow x>3",
         "zh": "「或」取聯集：$x>7$ 的所有值本來就符合 $x>3$，所以合起來就是 $x>3$。答案是 A。",
         "en": "“Or” takes the union: every value with $x>7$ already satisfies $x>3$, so the union is simply $x>3$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$x>7$ 只取了第一條，忘記「或」要把兩條合起來（$x=5$ 符合第二條，所以答案要包含它）。",
         "en": "$x>7$ keeps only the first inequality; $x=5$ satisfies the second one, so the answer must include it."
        },
        {
         "opt": "C",
         "zh": "$3<x<7$ 把「或」當成「及」：$x=10$ 其實符合第一條，應該在答案之內。",
         "en": "$3<x<7$ treats “or” as “and”, but $x=10$ satisfies the first inequality and must be included."
        },
        {
         "opt": "D",
         "zh": "$x<3$ 把不等號方向倒轉；兩條不等式解出來都是「大於」。",
         "en": "$x<3$ reverses both inequalities; each of them gives a “greater than” region."
        }
       ],
       "tip": {
        "zh": "「A 或 B」而一個範圍完全包含另一個時，答案是較寬鬆的那個 —— 先在數線上畫出來就一目了然。",
        "en": "When “A or B” and one region completely contains the other, the answer is the wider one; sketching both on a number line makes this obvious."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-as03-m06",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 2,
      "code": "AS3-M06",
      "source": "統測前哨戰 · 不等式：兩邊分開走的「或」（自編）",
      "stem": {
       "text": "Solve $4(x-1)\\ge 2x+6$ or $3x+7<4$.",
       "zh": "解 $4(x-1)\\ge 2x+6$ 或 $3x+7<4$。",
       "en": "Solve $4(x-1)\\ge 2x+6$ or $3x+7<4$."
      },
      "options": {
       "A": "$x<-1$ or $x\\ge 5$",
       "B": "$-1<x\\le 5$",
       "C": "$x\\ge 5$",
       "D": "all real numbers"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 第一條（先展開）",
          "en": "Step 1 · First inequality (expand first)"
         },
         "math": "4x-4\\ge 2x+6\n\\Rightarrow 2x\\ge 10\n\\Rightarrow x\\ge 5",
         "zh": "先把 $4(x-1)$ 展開成 $4x-4$，再移項：$2x\\ge10$，即 $x\\ge5$。",
         "en": "Expand $4(x-1)$ to $4x-4$ and rearrange: $2x\\ge10$, that is $x\\ge5$."
        },
        {
         "title": {
          "zh": "第 2 步 · 第二條",
          "en": "Step 2 · Second inequality"
         },
         "math": "3x+7<4\n\\Rightarrow 3x<-3\n\\Rightarrow x<-1",
         "zh": "$3x<-3$，即 $x<-1$。",
         "en": "$3x<-3$, that is $x<-1$."
        },
        {
         "title": {
          "zh": "第 3 步 · 兩段分開的答案",
          "en": "Step 3 · Two separate pieces"
         },
         "math": "x<-1 \\text{ or } x\\ge 5",
         "zh": "「或」取聯集，得兩段：$x<-1$ 或 $x\\ge5$。答案是 A。",
         "en": "Taking the union of “or” gives two pieces: $x<-1$ or $x\\ge5$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$-1<x\\le5$ 取的是交集（「及」）；中間這段兩條不等式都不成立。",
         "en": "$-1<x\\le5$ is the intersection (“and”); in that middle region neither inequality holds."
        },
        {
         "opt": "C",
         "zh": "$x\\ge5$ 只取第一條，漏了 $x<-1$ 那一段。",
         "en": "$x\\ge5$ keeps only the first piece and drops $x<-1$."
        },
        {
         "opt": "D",
         "zh": "all real numbers 是錯的：$x=0$ 落在 $-1$ 與 $5$ 之間，兩條都不成立。",
         "en": "“All real numbers” is wrong: $x=0$ lies between $-1$ and $5$ and satisfies neither inequality."
        }
       ],
       "tip": {
        "zh": "答案出現「兩段分開」時（$x<a$ 或 $x>b$），就可以用中間值（例如 $x=0$）證明「all real numbers」是錯的。",
        "en": "When the answer splits into two pieces ($x<a$ or $x>b$), a middle value such as $x=0$ proves that “all real numbers” is wrong."
       }
      },
      "answer": "A",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-as03-m07",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 1,
      "code": "AS3-M07",
      "source": "統測前哨戰 · 不等式：完全平方（Δ=0）的解集（自編）",
      "stem": {
       "text": "Solve $x^{2}+10x+25\\le 0$.",
       "zh": "解 $x^{2}+10x+25\\le 0$。",
       "en": "Solve $x^{2}+10x+25\\le 0$."
      },
      "options": {
       "A": "$x=-5$",
       "B": "$x\\ne -5$",
       "C": "all real numbers",
       "D": "no real solution"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 認出完全平方",
          "en": "Step 1 · Recognise the perfect square"
         },
         "math": "x^{2}+10x+25=(x+5)^{2}",
         "zh": "$10=2\\times5$、$25=5^2$，所以 $x^2+10x+25=(x+5)^2$：判別式 $\\Delta=10^2-4(1)(25)=0$，只有一個重根 $x=-5$。",
         "en": "Since $10=2\\times5$ and $25=5^{2}$, we have $x^{2}+10x+25=(x+5)^{2}$: the discriminant is $\\Delta=10^{2}-4(1)(25)=0$, so there is one repeated root $x=-5$."
        },
        {
         "title": {
          "zh": "第 2 步 · 平方不可能小於 0",
          "en": "Step 2 · A square is never negative"
         },
         "math": "(x+5)^{2}\\ge 0\\ \\text{for all }x",
         "zh": "任何實數的平方都 $\\ge0$，所以 $(x+5)^2<0$ 無解；要它 $\\le0$，就只剩「等於 0」一種可能。",
         "en": "The square of a real number is always $\\ge0$, so $(x+5)^{2}<0$ has no solution; for it to be $\\le0$ the only possibility is equality."
        },
        {
         "title": {
          "zh": "第 3 步 · 只有一個解",
          "en": "Step 3 · One solution only"
         },
         "math": "(x+5)^{2}=0\n\\Rightarrow x=-5",
         "zh": "只有 $x=-5$ 令 $(x+5)^2=0$，所以解集是單一個數 $x=-5$。答案是 A。",
         "en": "Only $x=-5$ makes $(x+5)^{2}=0$, so the solution set is the single number $x=-5$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$x\\ne -5$ 是「$>0$」的答案（排除了 $-5$ 那一點）；題目是 $\\le 0$，$-5$ 反而要收。",
         "en": "$x\\ne -5$ is the answer for “$>0$”, where the point $-5$ is excluded; for $\\le 0$ the point $-5$ is exactly what we keep."
        },
        {
         "opt": "C",
         "zh": "all real numbers 是「$\\ge 0$」的答案；$\\le 0$ 只收等於 0 的那一點。",
         "en": "“all real numbers” is the answer for “$\\ge 0$”; for $\\le 0$ only the single point where the square is zero counts."
        },
        {
         "opt": "D",
         "zh": "no real solution 是「$<0$」的答案；$-5$ 真的滿足 $\\le 0$，所以不是無解。",
         "en": "“no real solution” belongs to “$<0$”; since $x=-5$ really does satisfy $\\le 0$, the inequality is not unsolvable."
        }
       ],
       "tip": {
        "zh": "$\\Delta=0$（完全平方）時，四個答案要認清：$>0$ → $x\\ne r$；$\\ge0$ → 所有實數；$<0$ → 無解；$\\le0$ → 只有 $x=r$。",
        "en": "When $\\Delta=0$ (a perfect square) the four answers are fixed: $>0$ gives $x\\ne r$; $\\ge0$ gives all real numbers; $<0$ gives no solution; $\\le0$ gives $x=r$ only."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代值檢查",
          "en": "Check: substitute values"
         },
         "zh": "代 $x=-5$：$0\\le0$ 成立；代 $x=0$：$25\\le0$ 不成立 —— 所以解集既不是所有實數，也不是無解。",
         "en": "Substitute $x=-5$: $0\\le0$ is true. Substitute $x=0$: $25\\le0$ is false — so the solution set is neither all real numbers nor empty."
        }
       ]
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-as03-m08",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 2,
      "code": "AS3-M08",
      "source": "統測前哨戰 · 不等式：一般式（a≠1）的恆成立（自編）",
      "stem": {
       "text": "Let $k$ be a constant. Find the range of values of $k$ such that $2x^{2}-3x+k>0$ for any real number $x$.",
       "zh": "設 $k$ 為常數。求 $k$ 的取值範圍，使得 $2x^{2}-3x+k>0$ 對任何實數 $x$ 都成立。",
       "en": "Let $k$ be a constant. Find the range of values of $k$ such that $2x^{2}-3x+k>0$ for any real number $x$."
      },
      "options": {
       "A": "$k>\\frac{9}{8}$",
       "B": "$k<\\frac{9}{8}$",
       "C": "$k>\\frac{3}{4}$",
       "D": "$k\\ge\\frac{9}{8}$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先看 x² 的係數",
          "en": "Step 1 · Look at the coefficient of x² first"
         },
         "math": "a=2>0",
         "zh": "$x^2$ 的係數是 $2>0$，拋物線開口向上，所以「永遠大於 0」是可能的 —— 只要它不碰到 $x$ 軸。",
         "en": "The coefficient of $x^{2}$ is $2>0$, so the parabola opens upwards and “always positive” is possible — as long as it never touches the $x$-axis."
        },
        {
         "title": {
          "zh": "第 2 步 · 計算判別式",
          "en": "Step 2 · Compute the discriminant"
         },
         "math": "\\Delta=(-3)^{2}-4(2)(k)=9-8k",
         "zh": "$b=-3$、$c=k$，所以 $\\Delta=9-4\\times2\\times k=9-8k$（$4ac$ 的 $a=2$ 要一齊乘）。",
         "en": "Here $b=-3$ and $c=k$, so $\\Delta=9-4\\times2\\times k=9-8k$ (the value $a=2$ must be included in $4ac$)."
        },
        {
         "title": {
          "zh": "第 3 步 · 嚴格大於 → Δ < 0",
          "en": "Step 3 · Strict inequality → Δ < 0"
         },
         "math": "9-8k<0\n\\Rightarrow k>\\frac{9}{8}",
         "zh": "題目是嚴格「$>0$」，所以用 $\\Delta<0$：$9-8k<0$，即 $k>\\frac{9}{8}$。答案是 A。",
         "en": "The inequality is strict (“$>0$”), so use $\\Delta<0$: $9-8k<0$, giving $k>\\frac{9}{8}$. The answer is A."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "$k<\\frac{9}{8}$ 的方向相反：$\\Delta$ 要「小於 0」才恆正，解出 $k$ 是「大於」。",
         "en": "$k<\\frac{9}{8}$ has the direction reversed: $\\Delta$ must be negative for the expression to stay positive, which makes $k$ greater than the boundary."
        },
        {
         "opt": "C",
         "zh": "$k>\\frac{3}{4}$ 把 $4ac$ 算成 $4\\times3\\times k=12k$：$a=2$，所以是 $4\\times2\\times k=8k$。",
         "en": "$k>\\frac{3}{4}$ uses $4ac=4\\times3\\times k=12k$, but $a=2$, so it should be $4\\times2\\times k=8k$."
        },
        {
         "opt": "D",
         "zh": "$k\\ge\\frac{9}{8}$ 是「有等號」的條件。取 $k=\\frac{9}{8}$：$2x^{2}-3x+\\frac{9}{8}=2(x-\\frac{3}{4})^{2}$，在 $x=\\frac{3}{4}$ 時等於 0，不滿足嚴格「$>0$」。",
         "en": "$k\\ge\\frac{9}{8}$ belongs to the version with equality. At $k=\\frac{9}{8}$ the expression is $2x^{2}-3x+\\frac{9}{8}=2(x-\\frac{3}{4})^{2}$, which equals 0 when $x=\\frac{3}{4}$ and so fails the strict “$>0$”."
        }
       ],
       "tip": {
        "zh": "「對所有實數都成立」永遠兩步：① $x^2$ 的係數要 $>0$；② 判別式（嚴格用 $\\Delta<0$、有等號用 $\\Delta\\le0$）。$a\\ne1$ 時 $4ac$ 的 $a$ 一定要一齊乘。",
        "en": "“True for all real $x$” is always two steps: (1) the coefficient of $x^{2}$ must be positive; (2) use the discriminant (strict needs $\\Delta<0$, equality allows $\\Delta\\le0$). When $a\\ne1$, remember to include $a$ in $4ac$."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代兩個 k 值",
          "en": "Check: substitute two values of k"
         },
         "zh": "取 $k=2$（$\\frac{9}{8}<2$）：$\\Delta=9-16=-7<0$，$2x^{2}-3x+2$ 恆正 ✓。取 $k=1$：$2x^{2}-3x+1=(2x-1)(x-1)$，在 $x=\\frac{3}{4}$ 時是負數，不成立 ✓（所以答案不是 $k>\\frac{3}{4}$）。",
         "en": "Take $k=2$ (which is greater than $\\frac{9}{8}$): $\\Delta=9-16=-7<0$, so $2x^{2}-3x+2$ is always positive. Take $k=1$: $2x^{2}-3x+1=(2x-1)(x-1)$ is negative at $x=\\frac{3}{4}$, so it fails — confirming that $k>\\frac{3}{4}$ is not the answer."
        }
       ]
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-as03-m09",
      "type": "mc",
      "topic": "as03",
      "unit": 8,
      "subtopic": "inequalities",
      "difficulty": 2,
      "code": "AS3-M09",
      "source": "統測前哨戰 · 不等式：無實數解的判別式條件（自編）",
      "stem": {
       "text": "Let $k$ be a constant. If the inequality $x^{2}+4x+k<0$ has no real solution, find the range of values of $k$.",
       "zh": "設 $k$ 為常數。若不等式 $x^{2}+4x+k<0$ 沒有實數解，求 $k$ 的取值範圍。",
       "en": "Let $k$ be a constant. If the inequality $x^{2}+4x+k<0$ has no real solution, find the range of values of $k$."
      },
      "options": {
       "A": "$k>4$",
       "B": "$k\\ge 4$",
       "C": "$k\\le 4$",
       "D": "$k<4$"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 「無解」先反過來讀",
          "en": "Step 1 · Read “no solution” the other way"
         },
         "math": "x^{2}+4x+k<0\\ \\text{has no solution}\n\\Leftrightarrow x^{2}+4x+k\\ge 0\\ \\text{for all }x",
         "zh": "「沒有實數解」＝沒有一個 $x$ 會令它成立，即是反過來對所有實數 $x$ 都成立：$x^2+4x+k\\ge0$。",
         "en": "“No real solution” means no value of $x$ satisfies it, which is the same as the opposite being true for every real $x$: $x^{2}+4x+k\\ge0$."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩個條件一齊寫",
          "en": "Step 2 · Write both conditions"
         },
         "math": "a=1>0\\ \\text{and}\\ \\Delta=4^{2}-4(1)(k)=16-4k\\le 0",
         "zh": "$x^2$ 的係數 $1>0$ ✓；因為要「$\\ge0$」對所有實數成立（有等號），所以用 $\\Delta\\le0$。",
         "en": "The coefficient of $x^{2}$ is $1>0$; since the statement is “$\\ge0$” for all real $x$ (equality allowed), we need $\\Delta\\le0$."
        },
        {
         "title": {
          "zh": "第 3 步 · 解 k 的範圍",
          "en": "Step 3 · Solve for k"
         },
         "math": "16-4k\\le 0\n\\Rightarrow k\\ge 4",
         "zh": "$16\\le4k$，即 $k\\ge4$。答案是 B。",
         "en": "$16\\le4k$, so $k\\ge4$. The answer is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "$k>4$ 用了嚴格的 $\\Delta<0$。取 $k=4$：$x^{2}+4x+4=(x+2)^{2}\\ge0$，依然沒有實數令它 $<0$，所以 $k=4$ 要收。",
         "en": "$k>4$ uses the strict condition $\\Delta<0$. At $k=4$ the expression is $x^{2}+4x+4=(x+2)^{2}\\ge0$, so still no real number makes it negative — the boundary value $k=4$ must be included."
        },
        {
         "opt": "C",
         "zh": "$k\\le4$ 的方向相反：要「無解」是要求 $\\Delta\\le0$，解出 $k$ 是「大於」。",
         "en": "$k\\le4$ has the direction reversed: “no solution” requires $\\Delta\\le0$, which makes $k$ greater than the boundary."
        },
        {
         "opt": "D",
         "zh": "$k<4$ 方向相反，而且用了嚴格的 $\\Delta<0$（$k=4$ 其實合格）。",
         "en": "$k<4$ has the direction reversed and also uses the strict $\\Delta<0$, although $k=4$ in fact works."
        }
       ],
       "tip": {
        "zh": "見到「無解」，先改寫成「對所有實數都成立」（不等號反過來），然後兩步走：$a>0$ ＋ $\\Delta\\le0$（嚴格才用 $\\Delta<0$）。邊界值（$\\Delta=0$）代回去試一次最穩。",
        "en": "When a question says “no solution”, rewrite it as “true for all real $x$” with the inequality reversed, then use the two steps: $a>0$ and $\\Delta\\le0$ (strict needs $\\Delta<0$). Substituting the boundary value ($\\Delta=0$) is the safest check."
       },
       "alt": [
        {
         "name": {
          "zh": "驗算：代兩個 k 值",
          "en": "Check: substitute two values of k"
         },
         "zh": "取 $k=4$：$x^{2}+4x+4=(x+2)^{2}$，永遠 $\\ge0$，所以 $<0$ 無解 ✓（$k=4$ 合格）。取 $k=3$：$x^{2}+4x+3=(x+1)(x+3)$，取 $x=-2$ 得 $-1<0$，有解 ✗。",
         "en": "At $k=4$: $x^{2}+4x+4=(x+2)^{2}$ is always $\\ge0$, so $<0$ has no solution, confirming that $k=4$ is allowed. At $k=3$: $x^{2}+4x+3=(x+1)(x+3)$ is negative at $x=-2$, so a solution exists."
        }
       ]
      },
      "answer": "B",
      "verify": "checked"
     }
    ]
   ]
  }
 ],
 "stats": {
  "mc": 9,
  "long": 2,
  "cards": 4,
  "pages": 3
 }
};
