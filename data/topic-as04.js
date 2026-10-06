// 自動生成，請勿手改（來源：data/learn/；重新生成：python tools/make_learn_data.py）
window.LEARN_TOPIC_AS04 = {
 "id": "as04",
 "stage": 2,
 "unit": 15,
 "subtopic": "permutations-combinations",
 "source": "統測前哨戰 · 排列與組合（自編題組）",
 "name": {
  "zh": "統測前哨戰 4 · 排列與組合",
  "en": "Uniform Test Warm-up 4 · Permutations and Combinations"
 },
 "intro": {
  "zh": "這一課練三種必考的計數題：①「不可相鄰」用插空法；② 有職位的選人（1 名隊長 ＋ 幾名隊員）；③ 由表格給出各班人數的選人題。全部題目都是為這一課重新設計的，練的是「先判斷次序要緊嗎」這個判斷力。",
  "en": "This topic practises three must-know counting questions: ① “not next to each other”, solved by the insertion method; ② selecting people when one holds a post (a captain plus several members); ③ selection questions where a table gives the numbers in each class. Every question was written for this topic, so you train the key judgement of whether order matters."
 },
 "cmdHints": [
  {
   "en": "no two boys are next to each other",
   "zh": "「沒有兩個男生相鄰」：先排沒有條件的一方，再插入空隙（空隙數＝人數＋1）"
  },
  {
   "en": "how many different queues can be formed?",
   "zh": "「可排成多少個不同的隊列？」：人與人有分別 → 用排列 $P$，不是組合 $C$"
  },
  {
   "en": "1 captain and 4 members",
   "zh": "「1 名隊長及 4 名隊員」：只有一個職位 → 先選職位（$C^{n}_{1}$），其餘用組合"
  },
  {
   "en": "selected from the club",
   "zh": "「從 n 人中選出」：只選不排 → 用組合 $C$"
  },
  {
   "en": "1 boy and 1 girl are selected from each class",
   "zh": "「每個班別各選 1 男 1 女」：每班「男 × 女」，班別之間再相乘"
  },
  {
   "en": "4 boys and 4 girls are selected",
   "zh": "「選出 4 男 4 女」：不分班別 → 先把人數合併再選"
  }
 ],
 "lessons": [
  {
   "id": "as04-1",
   "title": {
    "zh": "第 1 節 · 插空法、有職位的選人與表格題",
    "en": "Set 1 · Insertion, posts and table questions"
   },
   "cards": [
    {
     "id": "as04-c1",
     "topic": "as04",
     "title": {
      "zh": "兩條基本原理：分類用加、分步用乘",
      "en": "Two basic principles: add for cases, multiply for steps"
     },
     "body": {
      "zh": "- 加法原理（分類）：把做法分成幾類，各類分別有 $a_1, a_2, \\ldots, a_k$ 種，而每一種做法只屬於其中一類，總數就是 {{math:0}}\n- 乘法原理（分步）：要依次完成 $k$ 個步驟，各步分別有 $n_1, n_2, \\ldots, n_k$ 種做法，總數就是 {{math:1}}\n- 例：餐廳午餐 ＝ 前菜 2 選 1、主菜 4 選 1、飲品 3 選 1。三樣都要揀（分步），所以是 {{math:2}}",
      "en": "- Addition principle (cases): split the ways into classes holding $a_1, a_2, \\ldots, a_k$ ways, where every way belongs to exactly one class. The total is {{math:0}}\n- Multiplication principle (steps): to finish the task you carry out $k$ steps in turn, with $n_1, n_2, \\ldots, n_k$ ways at each step. The total is {{math:1}}\n- Example: a lunch set = 2 appetizers, 4 main dishes, 3 drinks. All three are chosen (steps), so the total number of lunch sets is{{math:2}}"
     },
     "math": [
      "a_1 + a_2 + \\cdots + a_k",
      "n_1 \\times n_2 \\times \\cdots \\times n_k",
      "2 \\times 4 \\times 3 = 24"
     ],
     "warn": {
      "zh": "- 「或者」＝分類，用加；「同時／然後」＝分步，用乘。一題可以兩者都用（先分類，類內再分步）。\n- 分步時每步的選項數目要重新數：上一步用掉一個選擇，下一步可能只剩 9 個。\n- 分類時各類不可重疊；有重疊就要先減去重複計算的部分。",
      "en": "- \"Or\" means cases → add; \"and then\" means steps → multiply. One question can use both (split into cases, then multiply within each case).\n- At each step count the choices again: a choice used in the previous step may leave only 9 for the next.\n- The classes must not overlap; if they do, subtract the overlapping part first."
     },
     "vocab": [
      {
       "zh": "加法原理",
       "en": "Addition principle"
      },
      {
       "zh": "乘法原理",
       "en": "Multiplication principle"
      },
      {
       "zh": "分類",
       "en": "Cases"
      },
      {
       "zh": "分步",
       "en": "Steps"
      }
     ]
    },
    {
     "id": "as04-c2",
     "topic": "as04",
     "title": {
      "zh": "排列法：綑綁法（處理「必須相鄰」）",
      "en": "Permutation: Bundling method (objects must be adjacent)"
     },
     "body": {
      "zh": "當題目要求某些指定物件「必須相鄰」或「連在一起」時，通常可用綑綁法。做法可分為兩步：\n- 第一步 · 把所有必須相鄰的物件視為一個整體，並與其他不受限制的物件一起進行排列；\n- 第二步 · 再計算該整體內部各物件的排列數。\n總排列數為兩部分之積：{{math:0}}\n示例：將 5 名學生 A、B、C、D、E 排成一行，並要求 A 與 B 必須相鄰。\n- 第一步 · 將 A 與 B 綑綁成一個大單位，連同其餘 3 人共有 4 個單位，故有 $4! = 24$ 種排法；\n- 第二步 · 大單位內 A 與 B 的排列數為 $2! = 2$ 種（AB 或 BA）。\n因此總數為 $4! \\times 2! = 24 \\times 2 = 48$。",
      "en": "When a question states that certain objects must be adjacent or kept together, the bundling method is usually the clearest approach. There are two standard steps:\n- Step 1 · treat all required adjacent objects as one block and arrange this block together with the other unrestricted objects;\n- Step 2 · count the number of ways to arrange the objects inside the block.\nThe total number of arrangements is the product of the two parts: {{math:0}}\nExample: arrange 5 students A, B, C, D, E in a row so that A and B must be adjacent.\n- Step 1 · tie A and B into one block; together with the other 3 students there are 4 units, so the number of arrangements is $4! = 24$;\n- Step 2 · A and B can be arranged inside the block in $2! = 2$ ways (AB or BA).\nHence the total is $4! \\times 2! = 24 \\times 2 = 48$."
     },
     "math": [
      "\\text{Total}\n= (\\text{arrangement of units})\n\\times (\\text{arrangement inside the block})"
     ],
     "warn": {
      "zh": "- 常見錯誤：只寫外部的 $4!$，卻忘記乘上大單位內部的 $2!$，便會得到 24，少了一半。\n- 若題目已規定塊內次序（例如「A 必須緊接在 B 之前」），則塊內只有 1 種排列。因此同樣的 5 人例子，實際只會是 $4! = 24$，不能再乘 $2!$。",
      "en": "- Common mistake: writing only the outside factor $4!$ but forgetting the internal arrangement $2!$ gives 24, which is exactly half the correct answer.\n- If the order inside the block is fixed in advance (for example, 'A must be immediately before B'), then the block has only 1 possible arrangement. In that case, the same five-student example becomes $4! = 24$; do not multiply by $2!$ again."
     },
     "vocab": [
      {
       "zh": "綑綁法",
       "en": "Bundling method / Block method"
      },
      {
       "zh": "相鄰",
       "en": "Adjacent / next to each other"
      },
      {
       "zh": "內部排列",
       "en": "Internal arrangement"
      }
     ]
    },
    {
     "id": "as04-c3",
     "topic": "as04",
     "title": {
      "zh": "排列法：插空法（處理「互不相鄰」）",
      "en": "Permutation: Slot-in method (objects must not be adjacent)"
     },
     "body": {
      "zh": "當題目要求某些指定物件「不可相鄰」或「互不相鄰」時，通常使用插空法。步驟一般為三步：\n- 第一步 · 先把不受限制的其他物件排列好；\n- 第二步 · 計算這些物件左右兩端及中間所形成的空隙數目；\n- 第三步 · 把受限制的物件依次放進這些空隙中。\n總排列數為兩部分之積：{{math:0}}\n示例：將 4 名男生與 3 名女生排成一行，並要求 3 名女生不可相鄰。\n- 第一步 · 先排 4 名男生，有 $4! = 24$ 種；\n- 第二步 · 4 名男生前後及中間共形成 $4 + 1 = 5$ 個空隙；\n- 第三步 · 3 名相異女生從 5 個空隙中選 3 個放入，並考慮其順序，有 $P^5_3 = 5 \\times 4 \\times 3 = 60$ 種。\n因此總數為 $4! \\times P^5_3 = 24 \\times 60 = 1440$。",
      "en": "When a question requires certain objects to be non-adjacent or separated from one another, the slot-in method is the standard technique. It usually follows three steps:\n- Step 1 · arrange the unrestricted objects first;\n- Step 2 · count the available spaces before, between and after them;\n- Step 3 · place the restricted objects into these spaces in order.\nThe total number of arrangements is the product of the two parts: {{math:0}}\nExample: arrange 4 boys and 3 girls in a row so that no two girls are adjacent.\n- Step 1 · arrange the 4 boys in $4! = 24$ ways;\n- Step 2 · the 4 boys create $4 + 1 = 5$ gaps;\n- Step 3 · place the 3 distinct girls into 3 of the 5 gaps in order, giving $P^5_3 = 5 \\times 4 \\times 3 = 60$ ways.\nHence the total is $4! \\times P^5_3 = 24 \\times 60 = 1440$."
     },
     "math": [
      "\\text{Total}\n= (\\text{arrangement of unrestricted items})\n\\times P^{\\text{gaps}}_{\\text{restricted items}}"
     ],
     "warn": {
      "zh": "- 數空隙時常見失誤：2 件物件會形成 3 個空隙（前、中、後），並非 1 個；一般而言，$k$ 件物件能形成 $k+1$ 個空隙。\n- 例如 2 名男生與 3 名女生排成一行，若 3 名女生互不相鄰，先排男生會形成 3 個空隙，3 名女生須各佔一個空隙，故正確數目是 $2! \\times P^3_3 = 12$。若錯用「全部排列減去 3 名女生全部相鄰」，便會算成 $5! - (3! \\times 3!) = 84$；但這只扣除了 3 名女生連成一組的情況，仍把「剛好 2 名女生相鄰」的排列算在內，所以 84 並非正確答案。\n- 因此，涉及 3 個或以上指定物件互不相鄰時，插空法尤其可靠；不要把「不可互相相鄰」的反面誤當成「全部相鄰」。\n- 這類題目最重要的是先排列不受限制的物件，再把受限制的物件放入空隙，較容易避免重複或遺漏。",
      "en": "- A common error is to count the gaps incorrectly: 2 objects form 3 gaps (before, between and after), not 1. In general, $k$ objects create $k+1$ gaps.\n- For example, arrange 2 boys and 3 girls in a row, with no two girls adjacent. Arranging the boys first creates 3 gaps, and each girl must occupy a different gap, so the correct count is $2! \\times P^3_3 = 12$. The incorrect shortcut 'total arrangements minus the arrangements with all 3 girls together' gives $5! - (3! \\times 3!) = 84$. However, this subtracts only the cases where all 3 girls form one block; it still counts arrangements where exactly 2 girls are adjacent, so 84 is not the correct answer.\n- The slot-in method is especially reliable when 3 or more specified objects must be mutually non-adjacent. Do not mistake the opposite of 'not mutually adjacent' for 'all together'.\n- The key is to arrange the unrestricted objects first, then place the restricted objects into the gaps. This helps avoid double-counting or missing cases."
     },
     "vocab": [
      {
       "zh": "插空法",
       "en": "Slot-in method / Gap method"
      },
      {
       "zh": "互不相鄰",
       "en": "Not adjacent to one another"
      },
      {
       "zh": "空隙",
       "en": "Gaps / spaces"
      }
     ]
    },
    {
     "id": "as04-c4",
     "topic": "as04",
     "title": {
      "zh": "組合：只選一組，不計次序",
      "en": "Combinations: choose a group, ignore order"
     },
     "body": {
      "zh": "若只關心選出哪些物件，不理會選取次序，便使用組合。從 $n$ 件相異物件中選 $r$ 件：\n- 第一步 · 依次排列所選的 $r$ 件物件，有 $P^n_r$ 種；\n- 第二步 · 同一組物件有 $r!$ 種內部次序，這些次序都代表同一組選擇，所以除以 $r!$。\n因此組合數為：{{math:0}}\n例如從 5 名學生中選 3 人組隊：同一個組合有 $3! = 6$ 種次序，所以用 $C^5_3 = \\frac{60}{3!} = 10$，而不是 $P^5_3 = 60$。",
      "en": "Use a combination when only the selected objects matter and their selection order is irrelevant. To select $r$ objects from $n$ distinct objects:\n- Step 1 · Arrange the selected $r$ objects in order: $P^n_r$ ways;\n- Step 2 · Each group has $r!$ internal orders, all representing the same selection, so divide by $r!$.\nHence the number of combinations is: {{math:0}}\nFor example, choosing 3 students from 5 to form a team: the same selection has $3! = 6$ orders, so use $C^5_3 = \\frac{60}{3!} = 10$, not $P^5_3 = 60$."
     },
     "math": [
      "C^n_r = \\frac{P^n_r}{r!} = \\frac{n!}{r!(n-r)!}"
     ],
     "warn": {
      "zh": "- 組隊只選成員，用組合；若成員分任隊長與副隊長，職位不同，便須計次序。\n- 「至少一個」條件可考慮反面計數：例如至少一男一女，等於全部隊伍減去全男及全女隊伍。",
      "en": "- Forming a team selects members, so use combinations; assigning different roles such as president and vice-president makes order matter.\n- For an 'at least one' condition, consider the complement. For example, at least one boy and one girl equals all teams minus all-boys and all-girls teams."
     },
     "vocab": [
      {
       "zh": "組合",
       "en": "Combination"
      },
      {
       "zh": "不計次序",
       "en": "Order does not matter"
      },
      {
       "zh": "相異物件",
       "en": "Distinct objects"
      }
     ]
    },
    {
     "id": "as04-c5",
     "topic": "as04",
     "title": {
      "zh": "「至少／至多」：用反面計數",
      "en": "At least / at most: count the complement"
     },
     "body": {
      "zh": "題目出現「至少」或「至多」時，直接分類討論容易漏掉情況。先把「反面」（不符合條件的全部情況）寫出來，再用全部情況減去它，通常最快又最穩。\n- 第一步 · 數出沒有限制時的全部情況；\n- 第二步 · 數出「反面」的情況（通常是「全部來自某一類」這種極端情況）；\n- 第三步 · 相減。\n關係式為：{{math:0}}\n示例：6 男 7 女中選 5 人，要求至少 1 男 1 女。全部有 $C^{13}_5=1287$ 種；反面是全男（$C^6_5=6$）或全女（$C^7_5=21$），故答案為 $1287-6-21=1260$。",
      "en": "When a question says \"at least\" or \"at most\", listing cases directly easily misses some. Write down the complement (the cases that fail the condition) and subtract it from all cases - usually faster and safer.\n- Step 1 · count all cases with no restriction;\n- Step 2 · count the complement (often the extreme case of everything coming from one group);\n- Step 3 · subtract.\nThe relation is: {{math:0}}\nExample: choose 5 from 6 boys and 7 girls with at least 1 boy and 1 girl. All cases: $C^{13}_5=1287$; the complement is all boys ($C^6_5=6$) or all girls ($C^7_5=21$), giving $1287-6-21=1260$."
     },
     "math": [
      "\\text{At least one of each}\n= \\text{all cases}\n- \\text{all from one group}"
     ],
     "warn": {
      "zh": "- 反面情況要寫齊：例如「至少一男一女」的反面是「全男」加「全女」兩種，不可只減一種。\n- 切勿用「先選一男一女、再選其餘」的做法：同一隊會被重複計算（有 $b$ 名男生、$5-b$ 名女生的隊伍會被數 $b(5-b)$ 次）。",
      "en": "- List every complement case: the complement of \"at least one boy and one girl\" is \"all boys\" plus \"all girls\", not just one of them.\n- Never use the anchor-first trick (choose one boy and one girl first, then the rest): the same team is counted more than once (a team with $b$ boys and $5-b$ girls is counted $b(5-b)$ times)."
     },
     "vocab": [
      {
       "zh": "至少",
       "en": "At least"
      },
      {
       "zh": "至多",
       "en": "At most"
      },
      {
       "zh": "反面計數",
       "en": "Counting the complement"
      }
     ]
    },
    {
     "id": "as04-c6",
     "topic": "as04",
     "title": {
      "zh": "分組問題：組別有沒有編號？",
      "en": "Dividing into groups: are the groups labelled?"
     },
     "body": {
      "zh": "把物件「分組」時，先問一句：各組有沒有編號（第一組、第二組）？\n- 有編號或有先後次序：第 1 組先選、第 2 組再選，如此類推，直接相乘即可；\n- 沒有編號：人數相同的組會互相重複計算 $k!$ 次（$k$ ＝ 人數相同的組數），所以要除以 $k!$。\n關係式為：{{math:0}}\n示例：6 人分成 2 組、每組 3 人。\n- 有組名（一隊去數學賽、一隊去科學賽）：$C^6_3 \\times C^3_3 = 20$ 種；\n- 無組名（分兩隊打街頭籃球）：兩個 3 人組對調係同一場球賽，所以 $\\frac{C^6_3 \\times C^3_3}{2!} = 10$ 種。\n再看一層：10 人分成 4、4、2 三組，不編號時只除 $2!$（只有兩個 4 人組對調會重複），不是除 $3!$，得 $\\frac{C^{10}_4 C^6_4 C^2_2}{2!} = 1575$ 種。",
      "en": "When objects are divided into groups, ask first: are the groups labelled (group 1, group 2, ...)?\n- Labelled, or in a stated order: choose group 1 first, then group 2, and multiply the counts;\n- Not labelled: groups of the same size are counted $k!$ times ($k$ = number of groups of that size), so divide by $k!$.\nThe relation is: {{math:0}}\nExample: 6 people divided into 2 groups of 3.\n- Labelled (one team to a maths contest, one to a science contest): $C^6_3 \\times C^3_3 = 20$ ways;\n- Unlabelled (two teams for a street-ball game): swapping the two 3-person teams is the same match, so $\\frac{C^6_3 \\times C^3_3}{2!} = 10$ ways.\nOne level further: 10 people divided into groups of 4, 4 and 2 — with no labels only $2!$ is cancelled (only the two 4-person groups duplicate each other), not $3!$, giving $\\frac{C^{10}_4 C^6_4 C^2_2}{2!} = 1575$ ways."
     },
     "math": [
      "\\text{Unlabelled groups}\n= \\frac{\\text{ordered selection}}{k!}"
     ],
     "warn": {
      "zh": "- 「依次」「先後」會令組別有次序，此時不可再除以 $k!$。\n- 「分成兩隊」如沒有說明「第一隊、第二隊」，嚴格來說兩隊不編號；若題目把兩隊視為有別（例如比賽的 A 隊、B 隊），才直接相乘。\n- 除以 $k!$ 的 $k$ 只計「人數相同」的組：10 人分成 4、4、2 時，只有兩個 4 人組會互相重複，所以只除 $2!$，不是 $3!$。",
      "en": "- Words such as \"in order\" or \"one by one\" already order the groups, so do not divide by $k!$.\n- Two teams with no names (\"team 1 / team 2\") are unlabelled in principle; multiply directly only when the question treats them as distinct (e.g. team A and team B).\n- The $k$ in $k!$ counts only groups of the same size: for 10 people split 4, 4, 2, only the two 4-person groups duplicate each other, so divide by $2!$, not $3!$."
     },
     "vocab": [
      {
       "zh": "分組",
       "en": "Dividing into groups"
      },
      {
       "zh": "編號",
       "en": "Labelled"
      },
      {
       "zh": "重複計算",
       "en": "Overcounting"
      }
     ]
    }
   ],
   "long": [
    {
     "id": "eph-as04-ex01",
     "type": "long",
     "topic": "as04",
     "unit": 15,
     "subtopic": "permutations-combinations",
     "difficulty": 2,
     "code": "AS4-EX1",
     "source": "統測前哨戰 · 排列組合：由表格選人（自編）",
     "stem": {
      "text": "The following table shows the distribution of the members of a Science club in three classes.\nClass: 5P / 5Q / 5R\nNumber of boys: 7 / 5 / 4\nNumber of girls: 3 / 6 / 5\n8 members are selected from these three classes. In each of the following, find the number of ways of selection.",
      "zh": "下表顯示某科學學會三個班別的會員分佈。\n班別：5P / 5Q / 5R\n男生人數：7 / 5 / 4\n女生人數：3 / 6 / 5\n現從這三個班別選出 8 名會員。就以下各項，求選法的數目。",
      "en": "The following table shows the distribution of the members of a Science club in three classes.\nClass: 5P / 5Q / 5R\nNumber of boys: 7 / 5 / 4\nNumber of girls: 3 / 6 / 5\n8 members are selected from these three classes. In each of the following, find the number of ways of selection."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "1 boy and 1 girl are selected from each class.",
       "marks": 2,
       "zh": "每個班別各選 1 名男生及 1 名女生。",
       "en": "1 boy and 1 girl are selected from each class."
      },
      {
       "label": "(b)",
       "text": "4 boys and 4 girls are selected.",
       "marks": 2,
       "zh": "選出 4 名男生及 4 名女生。",
       "en": "4 boys and 4 girls are selected."
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · (a) 每班各自選 1 男 1 女",
         "en": "Step 1 · (a) One boy and one girl from each class"
        },
        "math": "(7\\times 3)(5\\times 6)(4\\times 5)=21\\times 30\\times 20",
        "zh": "每一班「1 男 1 女」都是乘法原理（男生數 × 女生數）：5P 班 $7\\times3=21$、5Q 班 $5\\times6=30$、5R 班 $4\\times5=20$。",
        "en": "For each class, “1 boy and 1 girl” is a product (number of boys times number of girls): 5P gives $7\\times3=21$, 5Q gives $5\\times6=30$ and 5R gives $4\\times5=20$.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 三班之間再相乘",
         "en": "Step 2 · Multiply across the three classes"
        },
        "math": "21\\times 30\\times 20=12600",
        "zh": "三個班別的選法都要做，所以相乘：$21\\times30\\times20=12600$。",
        "en": "All three class selections happen together, so multiply: $21\\times30\\times20=12600$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · (b) 先合併兩性別的總人數",
         "en": "Step 3 · (b) Combine the totals first"
        },
        "math": "\\text{boys}=7+5+4=16,\\quad \\text{girls}=3+6+5=14",
        "zh": "(b) 只要求「4 男 4 女」，不分班別，所以先把人數加起來：男共 16 人、女共 14 人。",
        "en": "Part (b) only requires 4 boys and 4 girls with no class restriction, so add the totals first: 16 boys and 14 girls.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 兩性別各自用組合",
         "en": "Step 4 · Use combinations for each gender"
        },
        "math": "C^{16}_{4}\\times C^{14}_{4}=1820\\times 1001=1821820",
        "zh": "由 16 名男生選 4 人、由 14 名女生選 4 人，各自沒有次序，用組合：$1820\\times1001=1\\ 821\\ 820$。",
        "en": "Choose 4 of the 16 boys and 4 of the 14 girls; order does not matter, so use combinations: $1820\\times1001=1\\ 821\\ 820$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(a) 用加法代替乘法",
        "labelEn": "adding instead of multiplying in (a)",
        "zh": "每一班「1 男 1 女」是乘法（$7\\times3$），不是加法（$7+3$）；班別之間也是乘法。",
        "en": "Within a class, “1 boy and 1 girl” is a product ($7\\times3$), not a sum; across classes it is again a product."
       },
       {
        "label": "(b) 逐班選而不是合併",
        "labelEn": "working class by class in (b)",
        "zh": "(b) 沒有要求每班各選幾人，所以要把三個班的人數合併（男女分別相加）再選；逐班處理會漏掉很多組合。",
        "en": "Part (b) sets no per-class quota, so the classes must be merged (boys and girls added separately) before choosing; working class by class misses most combinations."
       }
      ],
      "tip": {
       "zh": "表格題先問一句：「題目有沒有要求每班各選幾個？」有 → 逐班做再相乘；沒有 → 先把人數合併再選。",
       "en": "For table questions ask one thing first: does the question fix how many come from each class? If yes, work class by class and multiply; if not, merge the totals first."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：(a) 的另一種寫法",
         "en": "Check: another way to write (a)"
        },
        "zh": "(a) 也可以寫成 $7\\times5\\times4\\times3\\times6\\times5$（三個班的男生相乘、女生相乘）：$140\\times90=12600$，與上面的結果相同。",
        "en": "Part (a) can also be written as $7\\times5\\times4\\times3\\times6\\times5$ (boys across classes times girls across classes), giving $140\\times90=12600$, the same result."
       }
      ]
     },
     "answer": null,
     "verify": "checked"
    },
    {
     "id": "eph-as04-ex02",
     "type": "long",
     "topic": "as04",
     "unit": 15,
     "subtopic": "permutations-combinations",
     "difficulty": 3,
     "code": "AS4-EX2",
     "source": "統測前哨戰 · 排列組合：由表格選人（自編）",
     "stem": {
      "text": "The following table shows the distribution of the members of a Music club in four classes.\nClass: 5W / 5X / 5Y / 5Z\nNumber of boys: 5 / 3 / 6 / 4\nNumber of girls: 4 / 5 / 2 / 5\n8 members are selected from these four classes. In each of the following, find the number of ways of selection.",
      "zh": "下表顯示某音樂學會四個班別的會員分佈。\n班別：5W / 5X / 5Y / 5Z\n男生人數：5 / 3 / 6 / 4\n女生人數：4 / 5 / 2 / 5\n現從這四個班別選出 8 名會員。就以下各項，求選法的數目。",
      "en": "The following table shows the distribution of the members of a Music club in four classes.\nClass: 5W / 5X / 5Y / 5Z\nNumber of boys: 5 / 3 / 6 / 4\nNumber of girls: 4 / 5 / 2 / 5\n8 members are selected from these four classes. In each of the following, find the number of ways of selection."
     },
     "parts": [
      {
       "label": "(a)",
       "text": "1 boy and 1 girl are selected from each class.",
       "marks": 2,
       "zh": "每個班別各選 1 名男生及 1 名女生。",
       "en": "1 boy and 1 girl are selected from each class."
      },
      {
       "label": "(b)",
       "text": "4 boys and 4 girls are selected.",
       "marks": 2,
       "zh": "選出 4 名男生及 4 名女生。",
       "en": "4 boys and 4 girls are selected."
      }
     ],
     "marks": 4,
     "review": null,
     "solution": {
      "steps": [
       {
        "title": {
         "zh": "第 1 步 · (a) 每班 1 男 1 女",
         "en": "Step 1 · (a) One boy and one girl from each class"
        },
        "math": "(5\\times 4)(3\\times 5)(6\\times 2)(4\\times 5)=20\\times 15\\times 12\\times 20",
        "zh": "四個班各自「男 × 女」：20、15、12、20。",
        "en": "Each class contributes “boys times girls”: 20, 15, 12 and 20.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 2 步 · 四班相乘",
         "en": "Step 2 · Multiply the four classes"
        },
        "math": "20\\times 15\\times 12\\times 20=72000",
        "zh": "$20\\times15\\times12\\times20=72\\ 000$。",
        "en": "$20\\times15\\times12\\times20=72\\ 000$.",
        "marking": "(1A)"
       },
       {
        "title": {
         "zh": "第 3 步 · (b) 合併人數",
         "en": "Step 3 · (b) Merge the totals"
        },
        "math": "\\text{boys}=5+3+6+4=18,\\quad \\text{girls}=4+5+2+5=16",
        "zh": "(b) 不分班別，先把人數合併：男共 18 人、女共 16 人。",
        "en": "Part (b) has no class restriction, so merge first: 18 boys and 16 girls.",
        "marking": "(1M)"
       },
       {
        "title": {
         "zh": "第 4 步 · 兩邊各自用組合",
         "en": "Step 4 · Combinations for each gender"
        },
        "math": "C^{18}_{4}\\times C^{16}_{4}=3060\\times 1820=5569200",
        "zh": "$C^{18}_{4}=3060$、$C^{16}_{4}=1820$，相乘得 $5\\ 569\\ 200$。",
        "en": "$C^{18}_{4}=3060$ and $C^{16}_{4}=1820$, giving $5\\ 569\\ 200$.",
        "marking": "(1A)"
       }
      ],
      "traps": [
       {
        "label": "(b) 忘了合併人數",
        "labelEn": "forgetting to merge the totals in (b)",
        "zh": "(b) 要「4 男 4 女」，是從全部 18 名男生、全部 16 名女生之中選，不是每班各選幾人。",
        "en": "Part (b) asks for 4 boys and 4 girls chosen from all 18 boys and all 16 girls, not a quota per class."
       },
       {
        "label": "(a) 漏掉其中一班",
        "labelEn": "missing one class in (a)",
        "zh": "(a) 是「每個班別」都要選 1 男 1 女，四個班缺一不可（乘少一項答案就完全不同）。",
        "en": "Part (a) requires one boy and one girl from every class, so all four classes must appear; dropping one changes the answer completely."
       }
      ],
      "tip": {
       "zh": "組合數字大不等於方法錯 —— 表格題的關鍵永遠是「先判斷要不要分班」，之後才計數。",
       "en": "A large number does not mean the method is wrong: for table questions the key step is deciding whether the selection is per class, and only then doing the arithmetic."
      },
      "alt": [
       {
        "name": {
         "zh": "驗算：(b) 用另一條路粗略核對",
         "en": "Check: a rough independent check for (b)"
        },
        "zh": "$C^{18}_{4}=\\frac{18\\times17\\times16\\times15}{24}=3060$，$C^{16}_{4}=\\frac{16\\times15\\times14\\times13}{24}=1820$；兩者相乘約 $3\\times10^{3}\\times1.8\\times10^{3}\\approx5.6\\times10^{6}$，與 5 569 200 相符。",
        "en": "$C^{18}_{4}=\\frac{18\\times17\\times16\\times15}{24}=3060$ and $C^{16}_{4}=\\frac{16\\times15\\times14\\times13}{24}=1820$; their product is about $3\\times10^{3}\\times1.8\\times10^{3}\\approx5.6\\times10^{6}$, matching 5 569 200."
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
      "id": "eph-as04-m01",
      "type": "mc",
      "topic": "as04",
      "unit": 15,
      "subtopic": "permutations-combinations",
      "difficulty": 2,
      "code": "AS4-M01",
      "source": "統測前哨戰 · 排列組合：不可相鄰（插空法）（自編）",
      "stem": {
       "text": "A queue is formed by 3 boys and 3 girls. If no two girls are next to each other, how many different queues can be formed?",
       "zh": "3 名男生與 3 名女生排成一列。若沒有兩個女生相鄰，問可排成多少個不同的隊列？",
       "en": "A queue is formed by 3 boys and 3 girls. If no two girls are next to each other, how many different queues can be formed?"
      },
      "options": {
       "A": "24",
       "B": "36",
       "C": "144",
       "D": "720"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先排沒有條件的一方",
          "en": "Step 1 · Arrange the unrestricted group first"
         },
         "math": "3!=6,\\quad \\text{gaps}=4",
         "zh": "「女生不可相鄰」是限制條件，所以先排沒有條件的一方：3 名男生排列有 $3!=6$ 種。男生排好之後，他們之間（連前後）一共有 $3+1=4$ 個空隙。",
         "en": "“No two girls next to each other” is the restriction, so first arrange the unrestricted group: the 3 boys give $3!=6$ arrangements. Once they stand in a row there are $3+1=4$ gaps (including the two ends)."
        },
        {
         "title": {
          "zh": "第 2 步 · 空隙要「排列」不是「組合」",
          "en": "Step 2 · Fill the gaps by permutation, not combination"
         },
         "math": "P^{4}_{3}=4\\times 3\\times 2=24",
         "zh": "3 名女生是不同的人，所以由 4 個空隙選 3 個放入時有次序之分，要用排列 $P^{4}_{3}=24$（不是 $C^{4}_{3}=4$）。每個空隙最多放一人，就自動保證了不相鄰。",
         "en": "The 3 girls are distinct, so placing them into 3 of the 4 gaps is ordered: use $P^{4}_{3}=24$, not $C^{4}_{3}=4$. Putting at most one girl per gap guarantees that no two girls are adjacent."
        },
        {
         "title": {
          "zh": "第 3 步 · 兩步相乘",
          "en": "Step 3 · Multiply the two stages"
         },
         "math": "6\\times 24=144",
         "zh": "先排男生、再插女生，兩步都要做，所以相乘：$6\\times24=144$。答案是 C。",
         "en": "The boys are arranged and then the girls are inserted, so both stages apply: $6\\times24=144$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "24 是 $3!\\times C^{4}_{3}=6\\times4$：由 4 個空隙「選」3 個時用了組合，把 3 名女生當成一樣的。女生是不同的學生，放入不同空隙是不同的排法。",
         "en": "24 is $3!\\times C^{4}_{3}=6\\times4$, using a combination to “choose” 3 gaps and treating the girls as identical. Different girls in different gaps are different arrangements."
        },
        {
         "opt": "B",
         "zh": "36 是 $3!\\times3!=6\\times6$：只把男生與女生各自排列，完全沒有「選空隙」這一步。",
         "en": "36 is $3!\\times3!=6\\times6$: the boys and girls are each arranged on their own, with no choice of gaps at all."
        },
        {
         "opt": "D",
         "zh": "720 是 $6!$：把 6 個人隨便排，完全沒有處理「女生不相鄰」這個條件。",
         "en": "720 is $6!$: arranging all six people freely and ignoring the “no two girls adjacent” condition."
        }
       ],
       "tip": {
        "zh": "「不可相鄰」固定用插空法：先排沒有條件的一方，數出空隙（人數 $+1$），再把有條件的人放入空隙。人與人之間有分別，所以空隙用排列 $P$ 不是組合 $C$。",
        "en": "For “not next to each other”, always use the insertion method: arrange the unrestricted group, count the gaps (number of people plus one), then place the restricted people into the gaps. People are distinct, so the gaps use a permutation, not a combination."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as04-m02",
      "type": "mc",
      "topic": "as04",
      "unit": 15,
      "subtopic": "permutations-combinations",
      "difficulty": 2,
      "code": "AS4-M02",
      "source": "統測前哨戰 · 排列組合：不可相鄰（插空法）（自編）",
      "stem": {
       "text": "5 boys and 2 girls are arranged in a row. If no two girls are next to each other, how many different arrangements are there?",
       "zh": "5 名男生與 2 名女生排成一列。若沒有兩個女生相鄰，問有多少種不同的排列？",
       "en": "5 boys and 2 girls are arranged in a row. If no two girls are next to each other, how many different arrangements are there?"
      },
      "options": {
       "A": "240",
       "B": "1800",
       "C": "3600",
       "D": "5040"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先排男生",
          "en": "Step 1 · Arrange the boys first"
         },
         "math": "5!=120,\\quad \\text{gaps}=6",
         "zh": "限制是「女生不可相鄰」，所以先排 5 個男生（$5!=120$），他們之間連前後有 $5+1=6$ 個空隙。",
         "en": "The restriction is on the girls, so first arrange the 5 boys ($5!=120$); together with the two ends there are $5+1=6$ gaps."
        },
        {
         "title": {
          "zh": "第 2 步 · 女生放入空隙",
          "en": "Step 2 · Place the girls into the gaps"
         },
         "math": "P^{6}_{2}=6\\times 5=30",
         "zh": "2 名女生放入 6 個空隙（有次序）：$P^{6}_{2}=30$。",
         "en": "Place the 2 girls into the 6 gaps in order: $P^{6}_{2}=30$."
        },
        {
         "title": {
          "zh": "第 3 步 · 相乘",
          "en": "Step 3 · Multiply"
         },
         "math": "120\\times 30=3600",
         "zh": "$120\\times30=3600$。答案是 C。",
         "en": "$120\\times30=3600$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "B",
         "zh": "1800 是 $5!\\times C^{6}_{2}=120\\times15$：用組合選空隙，把兩個女生當成一樣的。她們是不同的學生，站左邊或右邊是兩種排法。",
         "en": "1800 is $5!\\times C^{6}_{2}=120\\times15$, choosing gaps with a combination and treating the two girls as identical, although swapping them gives a different arrangement."
        },
        {
         "opt": "A",
         "zh": "240 是 $5!\\times2!=240$：只把兩個女生當成一組插入，沒有「選空隙」這一步，會得出很多重複／不合法的排法。",
         "en": "240 is $5!\\times2!=240$: the two girls are treated as one block with no choice of gaps."
        },
        {
         "opt": "D",
         "zh": "5040 是 $7!$：7 個人自由排列，完全沒有處理「女生不相鄰」。",
         "en": "5040 is $7!$: all seven people arranged freely, ignoring that the girls must not be adjacent."
        }
       ],
       "tip": {
        "zh": "空隙數 ＝ 已排好的人數 $+1$（不要把兩端的空隙漏掉）；有條件的人數多過空隙數就一定做不到，可以先用這個檢查題目是否合理。",
        "en": "The number of gaps is the number of people already arranged plus one (do not forget the two ends). If the restricted group is larger than the number of gaps, the arrangement is impossible — a quick sanity check."
       }
      },
      "answer": "C",
      "verify": "checked"
     },
     {
      "id": "eph-as04-m03",
      "type": "mc",
      "topic": "as04",
      "unit": 15,
      "subtopic": "permutations-combinations",
      "difficulty": 2,
      "code": "AS4-M03",
      "source": "統測前哨戰 · 排列組合：不可相鄰（插空法）（自編）",
      "stem": {
       "text": "4 boys and 2 girls are arranged in a row. If no two girls are next to each other, how many different arrangements are there?",
       "zh": "4 名男生與 2 名女生排成一列。若沒有兩個女生相鄰，問有多少種不同的排列？",
       "en": "4 boys and 2 girls are arranged in a row. If no two girls are next to each other, how many different arrangements are there?"
      },
      "options": {
       "A": "24",
       "B": "48",
       "C": "144",
       "D": "480"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先排男生",
          "en": "Step 1 · Arrange the boys first"
         },
         "math": "4!=24,\\quad \\text{gaps}=5",
         "zh": "限制在女生，所以先排 4 個男生：$4!=24$；他們之間連前後共有 5 個空隙。",
         "en": "The restriction is on the girls, so arrange the 4 boys first: $4!=24$, giving $4+1=5$ gaps."
        },
        {
         "title": {
          "zh": "第 2 步 · 兩個女生放入空隙",
          "en": "Step 2 · Place the two girls"
         },
         "math": "P^{5}_{2}=5\\times 4=20",
         "zh": "2 名女生放入 5 個空隙（有次序）：$P^{5}_{2}=20$。",
         "en": "The 2 girls go into 5 gaps in order: $P^{5}_{2}=20$."
        },
        {
         "title": {
          "zh": "第 3 步 · 相乘",
          "en": "Step 3 · Multiply"
         },
         "math": "24\\times 20=480",
         "zh": "$24\\times20=480$。答案是 D。",
         "en": "$24\\times20=480$. The answer is D."
        }
       ],
       "traps": [
        {
         "opt": "C",
         "zh": "144 是 $4!\\times C^{4}_{2}=24\\times6$：只數了男生「之間」的 4 個空隙，漏了最前與最後兩個位置。",
         "en": "144 is $4!\\times C^{4}_{2}=24\\times6$: it counts only the 4 gaps between the boys and forgets the two end positions."
        },
        {
         "opt": "B",
         "zh": "48 是 $4!\\times2!=48$：把兩個女生當成一組，完全沒有選空隙。",
         "en": "48 is $4!\\times2!=48$: the two girls are treated as one block and no gap is chosen."
        },
        {
         "opt": "A",
         "zh": "24 只是男生的排列 $4!$，女生完全沒有排進去。",
         "en": "24 is only $4!$ for the boys; the girls are never placed."
        }
       ],
       "tip": {
        "zh": "由幾多人排隊，空隙就是「人數 $+1$」：4 個男生 → 5 個空隙。漏掉兩端的空隙是最常見的失分位。",
        "en": "With $n$ people already arranged there are $n+1$ gaps: four boys give five gaps. Forgetting the two ends is the most common mistake."
       }
      },
      "answer": "D",
      "verify": "checked"
     }
    ],
    [
     {
      "id": "eph-as04-m04",
      "type": "mc",
      "topic": "as04",
      "unit": 15,
      "subtopic": "permutations-combinations",
      "difficulty": 2,
      "code": "AS4-M04",
      "source": "統測前哨戰 · 排列組合：有職位的選人（自編）",
      "stem": {
       "text": "There are 11 members in a club. If 5 members are selected from the club to form a committee of 1 chairman and 4 members, how many different committees can be formed?",
       "zh": "某學會共有 11 名會員。若從中選出 5 人組成一個由 1 名主席及 4 名委員組成的委員會，問可組成多少個不同的委員會？",
       "en": "There are 11 members in a club. If 5 members are selected from the club to form a committee of 1 chairman and 4 members, how many different committees can be formed?"
      },
      "options": {
       "A": "462",
       "B": "2310",
       "C": "3630",
       "D": "11088"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先處理有職位的那個人",
          "en": "Step 1 · Fill the post first"
         },
         "math": "C^{11}_{1}=11",
         "zh": "主席是「有職位」的：先由 11 人中選主席，有 11 種。",
         "en": "The chairman holds a post: choose the chairman from the 11 members in 11 ways."
        },
        {
         "title": {
          "zh": "第 2 步 · 其餘的人只是選出來",
          "en": "Step 2 · The rest are simply chosen"
         },
         "math": "C^{10}_{4}=\\frac{10\\times9\\times8\\times7}{4!}=210",
         "zh": "主席已經用了 1 人，餘下 10 人選 4 位委員。委員之間沒有分別，所以用組合 $C^{10}_{4}=210$。",
         "en": "One member is already the chairman, so 4 committee members are chosen from the remaining 10. They have no distinct roles, so use the combination $C^{10}_{4}=210$."
        },
        {
         "title": {
          "zh": "第 3 步 · 相乘",
          "en": "Step 3 · Multiply"
         },
         "math": "11\\times 210=2310",
         "zh": "兩步都要做，所以相乘：$11\\times210=2310$。答案是 B。",
         "en": "Both stages apply, so multiply: $11\\times210=2310$. The answer is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "462 是 $C^{11}_{5}$：只選了 5 個人，忘記分出「主席」這個職位。",
         "en": "462 is $C^{11}_{5}$: five people are chosen but nobody is made the chairman."
        },
        {
         "opt": "C",
         "zh": "3630 是 $11\\times C^{11}_{4}=11\\times330$：第二步應該由「餘下 10 人」選 4 人，不是由 11 人（主席有可能被重複選中）。",
         "en": "3630 is $11\\times C^{11}_{4}=11\\times330$: the second stage must choose 4 people from the remaining 10, not from all 11, otherwise the chairman may be counted again."
        },
        {
         "opt": "D",
         "zh": "11088 是 $4!\\times C^{11}_{5}=24\\times462$：先選 5 人再為其餘 4 人「排職位」，做法上多乘了 $4!$。",
         "en": "11088 is $4!\\times C^{11}_{5}=24\\times462$: five people are chosen and then the other four are treated as ordered, adding an extra factor of $4!$."
        }
       ],
       "tip": {
        "zh": "「有職位」的題目：先處理職位（$C^{n}_{1}$ 或 $P$），再處理沒有分別的其他人（$C$）。有職位＝有次序、沒有職位＝組合。",
        "en": "For questions with a post: fill the post first (with $C^{n}_{1}$ or a permutation), then choose the interchangeable people with a combination. A post implies order; no post implies a combination."
       }
      },
      "answer": "A",
      "verify": "checked"
     },
     {
      "id": "eph-as04-m05",
      "type": "mc",
      "topic": "as04",
      "unit": 15,
      "subtopic": "permutations-combinations",
      "difficulty": 2,
      "code": "AS4-M05",
      "source": "統測前哨戰 · 排列組合：有職位的選人（自編）",
      "stem": {
       "text": "A committee of 4 members is chosen from 9 students, and one of the 4 members is the chairperson. How many different committees can be formed?",
       "zh": "從 9 名學生中選出 4 人組成委員會，其中 1 人出任主席。問可組成多少個不同的委員會？",
       "en": "A committee of 4 members is chosen from 9 students, and one of the 4 members is the chairperson. How many different committees can be formed?"
      },
      "options": {
       "A": "126",
       "B": "504",
       "C": "756",
       "D": "3024"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 選主席",
          "en": "Step 1 · Choose the chairperson"
         },
         "math": "C^{9}_{1}=9",
         "zh": "主席由 9 名學生中選出：9 種。",
         "en": "The chairperson is chosen from the 9 students in 9 ways."
        },
        {
         "title": {
          "zh": "第 2 步 · 其餘 3 位委員",
          "en": "Step 2 · The other three members"
         },
         "math": "C^{8}_{3}=\\frac{8\\times7\\times6}{3!}=56",
         "zh": "餘下 8 人選 3 位委員（沒有分別）→ $C^{8}_{3}=56$。",
         "en": "Choose the 3 remaining members from the other 8 (no distinct roles): $C^{8}_{3}=56$."
        },
        {
         "title": {
          "zh": "第 3 步 · 相乘",
          "en": "Step 3 · Multiply"
         },
         "math": "9\\times 56=504",
         "zh": "答案是 B。",
         "en": "The answer is B."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "126 是 $C^{9}_{4}$：只選了 4 個人，沒有為其中一位安排「主席」這個職位。",
         "en": "126 is $C^{9}_{4}$: four people are chosen but nobody is made the chairperson."
        },
        {
         "opt": "D",
         "zh": "3024 是 $P^{9}_{4}$：4 個位置全部當成有分別，但其實只有主席一個職位。",
         "en": "3024 is $P^{9}_{4}$, treating all four places as distinct although only one is a post."
        },
        {
         "opt": "C",
         "zh": "756 是 $3!\\times C^{9}_{4}=6\\times126$：先選 4 人再為其中 3 人「排職位」，多乘了 $3!$。",
         "en": "756 is $3!\\times C^{9}_{4}=6\\times126$: four people are chosen and three of them are treated as ordered, adding an extra $3!$."
        }
       ],
       "tip": {
        "zh": "另一條同樣快的路：先從 9 人選 4 人（$C^{9}_{4}=126$），再在 4 人之中選主席（$\\times4$），得 $126\\times4=504$ —— 兩個方法答案一定相同，可以用來驗算。",
        "en": "An equally quick route: choose 4 people from 9 ($C^{9}_{4}=126$) and then pick the chairperson among them ($\\times4$), giving $126\\times4=504$. The two methods must agree, which is a useful check."
       }
      },
      "answer": "B",
      "verify": "checked"
     },
     {
      "id": "eph-as04-m06",
      "type": "mc",
      "topic": "as04",
      "unit": 15,
      "subtopic": "permutations-combinations",
      "difficulty": 3,
      "code": "AS4-M06",
      "source": "統測前哨戰 · 排列組合：有職位的選人（自編）",
      "stem": {
       "text": "From 8 students, a team of 3 students is formed, consisting of 1 captain and 2 members. How many different teams can be formed?",
       "zh": "從 8 名學生中組成一個 3 人小隊，其中 1 人為隊長、2 人為隊員。問可組成多少個不同的小隊？",
       "en": "From 8 students, a team of 3 students is formed, consisting of 1 captain and 2 members. How many different teams can be formed?"
      },
      "options": {
       "A": "56",
       "B": "112",
       "C": "168",
       "D": "336"
      },
      "review": null,
      "solution": {
       "steps": [
        {
         "title": {
          "zh": "第 1 步 · 先選隊長",
          "en": "Step 1 · Choose the captain first"
         },
         "math": "C^{8}_{1}=8",
         "zh": "隊長有職位之分，先由 8 人中選出：8 種。",
         "en": "The captain holds a post, so choose the captain from the 8 students first: 8 ways."
        },
        {
         "title": {
          "zh": "第 2 步 · 再選 2 名隊員",
          "en": "Step 2 · Choose the two members"
         },
         "math": "C^{7}_{2}=\\frac{7\\times6}{2!}=21",
         "zh": "餘下 7 人選 2 名隊員（沒有分別）→ $C^{7}_{2}=21$。",
         "en": "The two remaining members are chosen from the other 7 (no distinct roles): $C^{7}_{2}=21$."
        },
        {
         "title": {
          "zh": "第 3 步 · 相乘",
          "en": "Step 3 · Multiply"
         },
         "math": "8\\times 21=168",
         "zh": "$8\\times21=168$。答案是 C。",
         "en": "$8\\times21=168$. The answer is C."
        }
       ],
       "traps": [
        {
         "opt": "A",
         "zh": "56 是 $C^{8}_{3}$：只選了 3 個人，沒有分出誰是隊長。",
         "en": "56 is $C^{8}_{3}$: three people are chosen without deciding who is the captain."
        },
        {
         "opt": "B",
         "zh": "112 是 $2!\\times C^{8}_{3}=2\\times56$：先選 3 人再為 2 名隊員排列，多乘了 $2!$（隊員之間沒有分別）。",
         "en": "112 is $2!\\times C^{8}_{3}=2\\times56$: three people are chosen and the two members are then ordered, adding an unnecessary $2!$."
        },
        {
         "opt": "D",
         "zh": "336 是 $P^{8}_{3}$：把 3 個位置全部當成有分別，但只有隊長是職位。",
         "en": "336 is $P^{8}_{3}$, treating all three places as distinct although only the captaincy is a post."
        }
       ],
       "tip": {
        "zh": "驗算：先選 3 人再選隊長 ＝ $C^{8}_{3}\\times3=56\\times3=168$，與 $8\\times C^{7}_{2}$ 相同 —— 兩條路都對就放心。",
        "en": "Check: choosing 3 people and then the captain gives $C^{8}_{3}\\times3=56\\times3=168$, matching $8\\times C^{7}_{2}$; agreement between two routes confirms the answer."
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
  "mc": 6,
  "long": 2,
  "cards": 6,
  "pages": 2
 }
};
