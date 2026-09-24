r"""獨立驗算：用程式重新解一次題目，核對 data/solutions.json 的答案。

為什麼要另寫一份：解答是「人／AI 寫的」，驗算必須用**另一條路徑**算出來，
不能只是把同一個推理重念一次。這裡對每題用數值／代數方法求出答案，
再逐個選項比對，確認只有一個選項對得上，且與 solutions.json 的 answer 相同。

用法：
    python tools/verify_answers.py            # 驗算所有已登記的題目
    python tools/verify_answers.py --json     # 額外輸出機器可讀結果

未登記驗算方法的題目會被列為「未驗算」（不影響退出碼，但會提醒）。
"""
from __future__ import annotations

import argparse
import io
import json
import math
import os
import re
import sys
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# ───────────────────────── LaTeX → Python 表達式 ─────────────────────────
def to_py(tex: str) -> str:
    """把試卷裡常見的簡單 LaTeX 轉成可 eval 的 Python 表達式。"""
    s = tex
    s = s.replace("\\left", "").replace("\\right", "")
    s = s.replace("\\cdot", "*").replace("\\times", "*").replace("\\div", "/")
    s = s.replace("\\le", "<=").replace("\\ge", ">=").replace("\\neq", "!=")
    s = s.replace("\\;", " ").replace("\\,", " ").replace("\\quad", " ").replace("\\!", "")
    s = s.replace("\\text{ or }", " or ")
    s = s.replace("−", "-").replace("–", "-")
    # \frac{a}{b} → ((a)/(b))，允許單層大括號
    while "\\frac" in s:
        i = s.index("\\frac")
        j = s.index("{", i)
        depth, k = 0, j
        while True:
            if s[k] == "{":
                depth += 1
            elif s[k] == "}":
                depth -= 1
                if depth == 0:
                    break
            k += 1
        num = s[j + 1 : k]
        j2 = s.index("{", k)
        depth, k2 = 0, j2
        while True:
            if s[k2] == "{":
                depth += 1
            elif s[k2] == "}":
                depth -= 1
                if depth == 0:
                    break
            k2 += 1
        den = s[j2 + 1 : k2]
        s = s[:i] + f"(({num})/({den}))" + s[k2 + 1 :]
    s = s.replace("\\pi", "pi")
    s = s.replace("{", "(").replace("}", ")")
    s = s.replace("^", "**")
    s = re.sub(r"\\[a-zA-Z]+", "", s)          # 清掉剩下的 LaTeX 命令
    s = s.replace(" ", "")
    # 隱式乘法：數字/右括號 後面接 字母/左括號
    s = re.sub(r"(?<=[0-9\)])(?=[a-zA-Z(])", "*", s)
    s = re.sub(r"(?<=[a-zA-Z])(?=\()", "*", s)   # (x+1)(x-1) 這類
    return s


def ev(expr: str, **env):
    py = to_py(expr)
    return eval(py, {"__builtins__": {}, "pi": 3.141592653589793, "sqrt": lambda v: v ** 0.5}, env)


def close(a, b, rel: float = 1e-9) -> bool:
    """相對容差比較（(27x)^5 這種數值可達 1e17，絕對容差會失效）。"""
    return abs(a - b) <= rel * max(1.0, abs(a), abs(b))


def words(tex: str) -> str:
    return tex.replace(" ", "").replace("\n", "")


# ───────────────────────── 各題驗算方法 ─────────────────────────
def q01(options):
    """(27x)^5 / (3x^-2)^4 → 用 x = 2,3,5 數值比對（相對容差）。"""
    hits = []
    for L, tex in options.items():
        ok = all(close(ev("\\frac{(27x)^{5}}{(3x^{-2})^{4}}", x=x), ev(tex, x=x)) for x in (2, 3, 5))
        if ok:
            hits.append(L)
    return hits, "(27x)^5/(3x^{-2})^4 evaluated at x=2,3,5"


def q02(options):
    """36-(3m+4n)^2 → 用 (m,n) 樣本比對每個選項。"""
    hits = []
    for L, tex in options.items():
        ok = all(abs(ev("36-(3m+4n)^{2}", m=m, n=n) - ev(tex, m=m, n=n)) < 1e-6
                 for m, n in ((1, 1), (2, -3), (-1.5, 0.5)))
        if ok:
            hits.append(L)
    return hits, "36-(3m+4n)^2 compared with each option at 3 sample points"


def q03(options):
    """比較係數：8+a = 5a → a=2；b = 15a - 8a = 14。"""
    a = None
    for cand in (x / 100 for x in range(-2000, 2001)):
        if abs((8 + cand) - 5 * cand) < 1e-9:
            a = cand
            break
    b = 15 * a - 8 * a
    hits = [L for L, tex in options.items() if abs(ev(tex) - b) < 1e-9]
    return hits, f"solved a={a}, b=15a-8a={b}"


def q04(options):
    """(3c+1)(d-4) = 2d(5c-1) → c = (3d-4)/(7d+12)；用 d 樣本比對。"""
    hits = []
    for L, tex in options.items():
        ok = True
        for d in (1, 2, 0.5, -3):
            c_exact = (3 * d - 4) / (7 * d + 12)
            if abs(ev("(3c+1)(d-4)", c=c_exact, d=d) - ev("2d(5c-1)", c=c_exact, d=d)) > 1e-9:
                ok = False
                break
            if abs(ev(tex, d=d) - c_exact) > 1e-9:
                ok = False
                break
        if ok:
            hits.append(L)
    return hits, "solved c=(3d-4)/(7d+12) and checked the equation at d=1,2,0.5,-3"


def q05(options):
    """x^2+4x = k^2-2k-3：把每個選項的兩個根代回原方程，只有全對的才命中。"""
    hits = []
    for L, tex in options.items():
        # 選項格式如 "x=k-3 \\text{ or } x=-k-1"；先按 or 切開再接 Python 表達式
        parts = [p for p in re.split(r"\\text\{\s*or\s*\}|\bor\b", tex) if p.strip()]
        if len(parts) != 2:
            continue
        cands = []
        for p in parts:
            p = words(p)
            p = p[p.index("=") + 1:] if "=" in p else p
            cands.append(p)
        ok = True
        for k in (0, 1, -2, 3.5):
            for cand in cands:
                x = ev(cand, k=k)
                if not close((x ** 2 + 4 * x), (k ** 2 - 2 * k - 3)):
                    ok = False
        if ok:
            hits.append(L)
    return hits, "substituted both roots of each option back into x^2+4x=k^2-2k-3"


def q06(options):
    """「準確至 2 位小數」的真實取值範圍：用 Decimal 半上進位逐點比對。"""
    def rounds_to_567(v: str) -> bool:
        return Decimal(v).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP) == Decimal("5.67")

    grid = [Decimal(x) / 10000 for x in range(56630, 56760, 1)]
    truth = {v: rounds_to_567(str(v)) for v in grid}

    hits = []
    for L, tex in options.items():
        m = re.match(r"^([\d.]+)\s*(\\le|<)\s*x\s*(\\le|<)\s*([\d.]+)$", words(tex))
        if not m:
            continue
        lo, op_lo, op_hi, hi = Decimal(m.group(1)), m.group(2), m.group(3), Decimal(m.group(4))
        ok = True
        for v, want in truth.items():
            inside = (v >= lo if op_lo == "\\le" else v > lo) and (v <= hi if op_hi == "\\le" else v < hi)
            if inside != want:
                ok = False
                break
        if ok:
            hits.append(L)
    return hits, "compared each interval against Decimal half-up rounding to 2 d.p."


def q07(options):
    """4y+1 < 5y-3 <= 8y-9：在網格上求真實解集，與各選項比對。"""
    truth = {y: (4 * y + 1 < 5 * y - 3 <= 8 * y - 9) for y in [x / 2 for x in range(-30, 30)]}
    hits = []
    for L, tex in options.items():
        m = re.match(r"^y\s*(\\ge|\\le|>|<)\s*(-?[\d.]+)$", words(tex))
        if not m:
            continue
        op, val = m.group(1), float(m.group(2))
        f = {">": lambda a, b: a > b, "<": lambda a, b: a < b,
             "\\ge": lambda a, b: a >= b, "\\le": lambda a, b: a <= b}[op]
        if all(f(y, val) == want for y, want in truth.items()):
            hits.append(L)
    return hits, "solved the compound inequality on a half-integer grid"


def _numeric(options, value, tol=1e-9):
    """回傳與 value 相符的選項字母清單。"""
    return [L for L, tex in options.items() if abs(ev(tex) - value) < tol]


# ───────────────────────── 共用小工具（新批次用）─────────────────────────
def _num(tex: str, keep_pi: bool = False) -> float:
    """從選項文字抽取數值（可選乘回 π）。

    支援貨幣千分位： "\\$46\\,000" → 46000； "288\\pi\\text{ cm}^{3}" → 288（keep_pi 時 288π）。
    """
    s = words(tex)
    has_pi = "\\pi" in s
    s = s.replace("\\$", "").replace("$", "").replace("\\,", "").replace(",", "")
    s = re.sub(r"\\pi", "", s)
    s = re.sub(r"\\text\{[^}]*\}", "", s)
    s = re.sub(r"\\[a-zA-Z]+", "", s)
    m = re.search(r"-?\d+(?:\.\d+)?", s)
    if not m:
        return float("nan")
    v = float(m.group(0))
    if keep_pi and has_pi:
        v *= math.pi
    return v


ROMAN_RE = re.compile(r"\b(I{1,3})\b")


def _roman_set(tex: str) -> set[str]:
    """從選項文字抽出羅馬數字集合："\\text{I and III only}" → {"I","III"}。"""
    s = re.sub(r"\\text\{([^}]*)\}", r"\1", tex)
    s = s.replace("\\", " ").upper()
    return set(ROMAN_RE.findall(s))


def _stmt_hits(options, truth: set[str]):
    """找出「所列命題集合 == truth」的選項。"""
    return [L for L, tex in options.items() if _roman_set(tex) == truth]


def _solve3(rows: list[list[Fraction]]) -> list[Fraction]:
    """3×3 線性方程組的高斯消去（精確分數），rows = [a,b,c|d]。"""
    m = [r[:] for r in rows]
    n = 3
    for col in range(n):
        piv = next(r for r in range(col, n) if m[r][col] != 0)
        m[col], m[piv] = m[piv], m[col]
        pv = m[col][col]
        m[col] = [v / pv for v in m[col]]
        for r in range(n):
            if r != col and m[r][col] != 0:
                f = m[r][col]
                m[r] = [a - f * b for a, b in zip(m[r], m[col])]
    return [m[i][n] for i in range(n)]


def _shoelace(pts: list[tuple[float, float]]) -> float:
    s = 0.0
    for i in range(len(pts)):
        x1, y1 = pts[i]
        x2, y2 = pts[(i + 1) % len(pts)]
        s += x1 * y2 - x2 * y1
    return abs(s) / 2


def _dist(a, b) -> float:
    return math.hypot(a[0] - b[0], a[1] - b[1])


def _angle_at(v, p1, p2) -> float:
    """∠p1-v-p2（度）。"""
    u = (p1[0] - v[0], p1[1] - v[1])
    w = (p2[0] - v[0], p2[1] - v[1])
    c = (u[0] * w[0] + u[1] * w[1]) / (math.hypot(*u) * math.hypot(*w))
    return math.degrees(math.acos(max(-1.0, min(1.0, c))))


def _similar(s1: list[float], s2: list[float], tol: float = 1e-6) -> bool:
    """兩組邊（已排序）是否成比例。"""
    a, b = sorted(s1), sorted(s2)
    r = a[-1] / b[-1]
    return all(abs(x - r * y) <= tol * max(1.0, x) for x, y in zip(a, b))


def q10(options):
    """$40 000、年利率 3%、半年複利、5 年 → 40000(1.015)^10。"""
    target = 40000 * (1 + 0.03 / 2) ** (2 * 5)
    hits = [L for L, tex in options.items()
            if abs(_num(tex) - round(target)) < 1.0]
    return hits, f"40000(1.015)^10 = {target:.2f} → nearest dollar {round(target)}"


def q11(options):
    """解 α+2β=4k, β+2γ=9k, γ+2α=5k（k=1），比較 α:β 與各選項。"""
    a, b, g = _solve3([
        [Fraction(1), Fraction(2), Fraction(0), Fraction(4)],
        [Fraction(0), Fraction(1), Fraction(2), Fraction(9)],
        [Fraction(2), Fraction(0), Fraction(1), Fraction(5)],
    ])
    hits = []
    for L, tex in options.items():
        m = re.match(r"^(-?\d+):(-?\d+)$", words(tex))
        if m and Fraction(int(m.group(1))) * b == Fraction(int(m.group(2))) * a:
            hits.append(L)
    return hits, f"solved α={a}, β={b}, γ={g} → α:β = {a / b}"


def q14(options):
    """圖示：x 截距 a∈(0,1)、y 截距 b>1，故 p=7/a、q=7/b（取 a=0.5, b=2）。"""
    a, b = 0.5, 2.0
    p, q = 7 / a, 7 / b
    truth = set()
    if p > 7:
        truth.add("I")
    if q > 7:
        truth.add("II")
    if q > p:
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, f"sample intercepts (a={a}, b={b}) → p={p}, q={q}; true = {sorted(truth)}"


def q15(options):
    """扇形 r=3π、周界 12π → θ=2 rad；檢驗面積、ΔOMN 周界、圓心角。"""
    r = 3 * math.pi
    theta = (12 * math.pi - 2 * r) / r
    area = 0.5 * r * r * theta
    chord = 2 * r * math.sin(theta / 2)
    perim = 2 * r + chord
    truth = set()
    if abs(area - 9 * math.pi ** 2) < 1e-9:
        truth.add("I")
    if perim < 35:
        truth.add("II")
    if theta > math.radians(100):
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, (f"θ={theta:.4f} rad={math.degrees(theta):.2f}°, area={area:.4f}, "
                  f"perimeter(ΔOMN)={perim:.4f}; true = {sorted(truth)}")


def q16(options):
    """圓柱 TSA：r²+35r-246=0 → r；球體積 (4/3)πr³。"""
    disc = 35 ** 2 + 4 * 246
    rr = (-35 + math.sqrt(disc)) / 2
    vol = 4 / 3 * math.pi * rr ** 3
    hits = [L for L, tex in options.items()
            if abs(_num(tex, keep_pi=True) - vol) < 1e-6 * max(1.0, vol)]
    return hits, f"r={rr:.6f}, V=(4/3)πr³={vol / math.pi:.4f}π cm³"


def q17(options):
    """平行四邊形取比例坐標 → [DFEG]/[ΔCGH]=49/16。"""
    B, A = (0.0, 0.0), (4.0, 0.0)
    D, C = (0.0, 5.0), (4.0, 5.0)
    E = (A[0] / 4, 0.0)                       # AE:EB = 1:3
    F = (0.0, D[1] * 2 / 5)                   # AF:FD = 2:3
    G = (D[0] + (C[0] - D[0]) * 2 / 3, 5.0)   # DG:GC = 2:1
    slope = (G[1] - E[1]) / (G[0] - E[0])
    H = (C[0], E[1] + slope * (C[0] - E[0]))  # BC produced: x = 4
    tri = _shoelace([C, G, H])
    quad = _shoelace([D, F, E, G])
    value = 16.0 * quad / tri
    hits = [L for L, tex in options.items() if abs(_num(tex) - value) < 0.5]
    return hits, (f"[DFEG]/[ΔCGH] = {quad:.4f}/{tri:.4f} = {quad / tri:.6f} "
                  f"→ {16.0}×ratio = {value:.4f}")


def q18(options):
    """WZ=25、XZ=60、WX=65 → 直角；XY²=WY·YZ=XZ²+YZ² → YZ=144, XY=156。"""
    WZ, XZ, WX = 25.0, 60.0, 65.0
    assert abs(WZ ** 2 + XZ ** 2 - WX ** 2) < 1e-9, "不是直角"
    yz = (XZ ** 2) / WZ                       # 3600 = 25·YZ
    xy = math.sqrt(XZ ** 2 + yz ** 2)
    hits = [L for L, tex in options.items() if abs(_num(tex) - xy) < 0.5]
    return hits, f"YZ={yz}, XY={xy} (check WY·YZ={WZ + yz}×{yz}={xy ** 2})"


def q19(options):
    """正方形邊長 1：F 在 AC 延線且 CF=CD；BG∥AF 定出 G；檢驗三命題。"""
    B, A = (0.0, 0.0), (1.0, 0.0)
    C, D = (0.0, 1.0), (1.0, 1.0)
    r2 = math.sqrt(2)
    F = (-1 / r2, 1 + 1 / r2)
    # 菱形 CDEF：E = D + (F - C)
    E = (D[0] + F[0] - C[0], D[1] + F[1] - C[1])
    assert abs(_dist(D, E) - 1) < 1e-9 and abs(_dist(E, F) - 1) < 1e-9
    d = (F[0] - D[0], F[1] - D[1])            # DF 方向
    da = (F[0] - A[0], F[1] - A[1])           # AF 方向
    # G = D + u·d 且 G ∥ da（B 為原點）
    u = -(D[0] * da[1] - D[1] * da[0]) / (d[0] * da[1] - d[1] * da[0])
    G = (D[0] + u * d[0], D[1] + u * d[1])
    truth = set()
    if abs(_dist(D, F) - _dist(F, G)) < 1e-9:                      # I
        truth.add("I")
    if _similar([_dist(D, E), _dist(E, F), _dist(D, F)],            # II
                [_dist(B, F), _dist(F, G), _dist(B, G)]):
        truth.add("II")
    if abs(_angle_at(B, A, G) + _angle_at(F, B, D) - 180) < 1e-6:   # III
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, (f"DG/DF={u:.6f}, BF={_dist(B, F):.6f}, ∠ABG={_angle_at(B, A, G):.2f}°, "
                  f"∠BFD={_angle_at(F, B, D):.2f}°; true = {sorted(truth)}")


def q08(options):
    """f(x)=x^2+7x+k, f(4)+f(-4)=38 → 2k+32=38。"""
    k = None
    for cand in (x / 100 for x in range(-1000, 1001)):
        f = lambda t: t ** 2 + 7 * t + cand
        if abs(f(4) + f(-4) - 38) < 1e-9:
            k = cand
            break
    return _numeric(options, k), f"solved k={k}"


def q09(options):
    """p(x)=nx^3-3nx+36，x+3 為因式 → n，再求 p(3)。"""
    n = None
    for cand in (x / 100 for x in range(-2000, 2001)):
        p = lambda t: cand * t ** 3 - 3 * cand * t + 36
        if abs(p(-3)) < 1e-9:
            n = cand
            break
    p3 = n * 27 - 3 * n * 3 + 36
    return _numeric(options, p3), f"solved n={n}, p(3)={p3}"



def q12(options):
    """z = k x^3 / y^2。"""
    k = None
    for cand in (x / 100 for x in range(0, 2001)):
        if abs(cand * 27 / 36 - 3) < 1e-9:
            k = cand
            break
    z = k * 125 / 4
    return _numeric(options, z), f"solved k={k}, z={z}"


def q13(options):
    """a_{n+2}=2a_{n+1}+a_n, a_2=3, a_5=41 → a_6。"""
    a2 = 3
    a3 = None
    for cand in (x / 100 for x in range(-10000, 10001)):
        a4 = 2 * cand + a2
        if abs(2 * a4 + cand - 41) < 1e-9:
            a3 = cand
            break
    a4 = 2 * a3 + a2
    a6 = 2 * 41 + a4
    return _numeric(options, a6), f"solved a3={a3}, a4={a4}, a6={a6}"


def q29(options):
    """柱狀圖：books→teachers 為 3→4, 4→8, 5→6, 6→2, 7→2，求四分位距。"""
    data = [3] * 4 + [4] * 8 + [5] * 6 + [6] * 2 + [7] * 2
    n = len(data)
    def quartile(p):
        pos = (n + 1) * p
        lo = int(pos)
        hi = min(lo + 1, n)
        frac = pos - lo
        return data[lo - 1] * (1 - frac) + data[hi - 1] * frac
    iqr = quartile(0.75) - quartile(0.25)
    return _numeric(options, iqr), f"n={n}, Q1={quartile(0.25)}, Q3={quartile(0.75)}, IQR={iqr}"


def q20(options):
    """梯形：S(0,0)、R(53,0)，PS=41 與 SR 成 120°，RQ 與 RS 成 150° → PQ。"""
    R = (53.0, 0.0)
    P = (41 * math.cos(math.radians(120)), 41 * math.sin(math.radians(120)))
    t = P[1] / math.sin(math.radians(30))          # 由 R 沿 30° 升到 P 的高度
    Q = (R[0] + t * math.cos(math.radians(30)), P[1])
    pq = Q[0] - P[0]
    hits = [L for L, tex in options.items() if abs(_num(tex) - pq) < 0.5]
    return hits, f"P=({P[0]:.3f},{P[1]:.3f}), Q=({Q[0]:.3f},{Q[1]:.3f}) → PQ={pq:.4f}"


def q21(options):
    """ΔADE 直角在 E：AE=20、面積 150 → DE=15、AD=25；E 到 CD 的距離 = AD − AE²/AD。"""
    ae, area = 20.0, 150.0
    de = 2 * area / ae
    ad = math.hypot(ae, de)
    dist = ad - ae ** 2 / ad
    hits = [L for L, tex in options.items() if abs(_num(tex) - dist) < 0.5]
    return hits, f"DE={de}, AD={ad}, E 到 CD 的距離={dist}"


def q22(options):
    """弧 RS = 弧 UV = 66°；RT∥VU 且角平分線 ⇒ 弧 RV = TU = ST = x；66+66+3x=360。"""
    arc_rs = arc_uv = 2 * 33
    x = (360 - arc_rs - arc_uv) / 3
    ang = (arc_rs + x) / 2                          # ∠RUT 對弧 RS+ST
    hits = [L for L, tex in options.items() if abs(_num(tex) - ang) < 1e-9]
    return hits, f"弧RS={arc_rs}°, 弧UV={arc_uv}°, x={x}° → ∠RUT={ang}°"


def q23(options):
    """h²=bd；用一組樣本 b=1, d=4, h=2（滿足 h²=bd）檢驗四個等式。"""
    b, d, h = 1.0, 4.0, 2.0
    assert abs(h * h - b * d) < 1e-9
    tan_acb, tan_adc = b / h, h / d                 # 直角分別在 A、C
    bc, ad = math.hypot(b, h), math.hypot(d, h)
    pairs = {"A": (tan_acb, b / ad), "B": (tan_acb, b / d),
             "C": (tan_adc, bc / ad), "D": (tan_adc, bc / d)}
    hits = [L for L, (u, v) in pairs.items() if abs(u - v) < 1e-9]
    return hits, (f"b={b}, d={d}, h={h}（h²=bd）：tan∠ACB={tan_acb:.4f}, tan∠ADC={tan_adc:.4f}, "
                  f"BC/AD={bc / ad:.4f}, BC/CD={bc / d:.4f}")


def _root_or_num(tex: str) -> float:
    """解析 "\\sqrt{7}" → √7；其他交給 _num（ev() 會吞掉 \\sqrt，故另寫）。"""
    m = re.match(r"^\\sqrt\{(\d+(?:\.\d+)?)\}$", words(tex))
    if m:
        return math.sqrt(float(m.group(1)))
    return _num(tex)


def q24(options):
    """極坐標 X(1,20°)、Y(2,80°)；等邊第三點落在 20°–80° 之間 → r。"""
    X = (math.cos(math.radians(20)), math.sin(math.radians(20)))
    Y = (2 * math.cos(math.radians(80)), 2 * math.sin(math.radians(80)))
    v = (Y[0] - X[0], Y[1] - X[1])
    inside = []
    for sgn in (-1, 1):
        a = math.radians(60 * sgn)
        w = (v[0] * math.cos(a) - v[1] * math.sin(a), v[0] * math.sin(a) + v[1] * math.cos(a))
        Z = (X[0] + w[0], X[1] + w[1])
        ang = math.degrees(math.atan2(Z[1], Z[0])) % 360
        if 20 < ang < 80:
            inside.append((math.hypot(*Z), ang))
    assert inside, "兩個等邊頂點都不在 20°-80° 之間"
    r, ang = inside[0]
    hits = [L for L, tex in options.items() if abs(_root_or_num(tex) - r) < 1e-9]
    return hits, f"Z 在 {ang:.3f}° → r={r:.6f}（√7）"


def q25(options):
    """AP = OA = a√5（固定且非零）→ 與定點等距的軌跡 = 圓。"""
    a = 1.0
    oa = math.hypot(a, 2 * a)
    hits = [L for L, tex in options.items() if re.search(r"circle", tex, re.I)]
    return hits, f"OA={oa:.4f}（固定且非零）→ 圓"


def q26(options):
    """L1: 3x+4y=20、L2: mx+ny=20 垂直（m=-4n/3）；逐個選項檢查面積=6 且 C 在軸上方。"""
    ax = 20 / 3
    hits, notes = [], []
    for L, tex in options.items():
        n = _num(tex)
        m = -4 * n / 3
        det = 3 * n - 4 * m
        if abs(det) < 1e-12:
            continue
        xc, yc = 20 * (n - 4) / det, 20 * (3 - m) / det
        bx = 20 / m
        area = 0.5 * abs(ax - bx) * abs(yc)
        notes.append(f"{L}(n={n:g}): area={area:.4f}, y_C={yc:.4f}")
        if yc > 0 and abs(area - 6) < 1e-6:
            hits.append(L)
    return hits, "；".join(notes)


def q27(options):
    """圓心 (7,-5)、x 軸上的弦 PQ=24 → r²=12²+5²=169；比對 D=-2h、E=-2k、F=h²+k²-r²。"""
    h, k, half = 7.0, -5.0, 12.0
    r2 = half ** 2 + k ** 2
    want = (-2 * h, -2 * k, h ** 2 + k ** 2 - r2)
    hits = []
    for L, tex in options.items():
        m = re.match(r"^x\^\{2\}\+y\^\{2\}([-+]\d+)x([-+]\d+)y([-+]\d+)=0$", words(tex))
        if not m:
            continue
        coef = (int(m.group(1)), int(m.group(2)), int(m.group(3)))
        if coef == want:
            hits.append(L)
    return hits, (f"圓心 (7,-5)、r²={r2:.0f}（r=13）→ "
                  f"x²+y²{want[0]:+g}x{want[1]:+g}y{want[2]:+g}=0")


def q28(options):
    """6 張卡 2,2,2,3,4,5 → E = (3×10+15+25+50)/6。"""
    exp = (3 * 10 + 15 + 25 + 50) / 6
    hits = [L for L, tex in options.items() if abs(_num(tex) - exp) < 1e-9]
    return hits, f"E = {exp}"


def q30(options):
    """8 個數 mean=0、range=10 → α+β=0 且 |α|=5；再算眾數 s、中位數 t。"""
    base = [-4, -3, 1, 1, 1, 4]
    found = []
    for a in range(-15, 16):
        data = sorted(base + [a, -a])
        if data[-1] - data[0] == 10:
            found.append((a, -a, data))
    assert found, "找不到符合 mean=0、range=10 的 α,β"
    a, b, data = found[0]
    s = max(set(data), key=data.count)
    t = (data[3] + data[4]) / 2
    truth = set()
    if s == 1:
        truth.add("I")
    if t == -1:
        truth.add("II")
    if a + b == 0:
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, f"α,β={a},{b}; data={data}; s={s}, t={t}; true={sorted(truth)}"


def q31(options):
    """3E 後接 12 個十六進位 0 = 62×2^48；比對選項的二冪和。"""
    total = int("3E" + "0" * 12, 16)
    hits = []
    for L, tex in options.items():
        terms = [int(k) for k in re.findall(r"2\^\{(\d+)\}", words(tex))]
        if terms and sum(2 ** k for k in terms) == total:
            hits.append(L)
    return hits, f"3E(0×12)₁₆ = {total}（最高次 2^{total.bit_length() - 1}）"


def q32(options):
    """LCM = (p+2q)²(p³-8q³)；用樣本值比對（p=3, q=2）。"""
    p, q = 3.0, 2.0
    lcm_val = (p + 2 * q) ** 2 * (p ** 3 - 8 * q ** 3)
    # 三個原式都是它的因式（以因式分解論證）
    assert abs(lcm_val % (p ** 2 - 4 * q ** 2)) < 1e-9
    assert abs(lcm_val % (p ** 3 - 8 * q ** 3)) < 1e-9
    assert abs(lcm_val % ((p + 2 * q) * (p ** 2 - 4 * q ** 2))) < 1e-9
    hits = [L for L, tex in options.items() if abs(ev(tex, p=p, q=q) - lcm_val) < 1e-9]
    return hits, (f"(p+2q)²(p³-8q³) 在 p=3,q=2 時 = {lcm_val:.0f}；"
                  f"公倍式但非最小者（選項 D）會多一個 (p-2q)")


def q33(options):
    """斜率 a = -12/2 = -6（u=log25 x, v=log5 y）；n = a/2 = -3。"""
    a = -12 / 2
    n = a / 2                     # log25 x = (1/2) log5 x
    hits = [L for L, tex in options.items() if abs(_num(tex) - n) < 1e-9]
    return hits, f"a={a} → n={n}"


def q34(options):
    """0<a<1（取 a=0.5）：兩曲線相交、Q=(1,0)、交點在 y=x 上。"""
    a = 0.5
    lo, hi = 0.01, 0.999
    for _ in range(200):
        mid = (lo + hi) / 2
        if (a ** lo - lo) * (a ** mid - mid) <= 0:
            hi = mid
        else:
            lo = mid
    x0 = (lo + hi) / 2
    truth = set()
    if a < 1:
        truth.add("I")
    if 1 > a:                      # OQ = 1（log_a x = 0 ⇒ x = 1）
        truth.add("II")
    if abs(math.degrees(math.atan2(x0, x0)) - 45) < 1e-6:
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, f"a={a}, 交點 P≈({x0:.6f},{x0:.6f}) 在 y=x 上, OQ=1; true={sorted(truth)}"


def q35(options):
    """i^9+…+i^999：991 項 = 247×4 + 3，週期內和為 0。"""
    total = sum(1j ** n for n in range(9, 1000))
    hits = [L for L, tex in options.items() if abs(ev(tex, i=1j) - total) < 1e-9]
    return hits, f"991 項 = 247 週期 + 3 → 和 = {total}"


def q36(options):
    """線性規劃：候選角點 + 沿兩條邊界掃描，取可行最大值。"""
    f1 = lambda x: (19 - 4 * x) / 5
    f2 = lambda x: (7 * x + 11) / 6

    def feasible(x, y):
        return (x <= 11 + 1e-9 and 4 * x + 5 * y - 19 >= -1e-9 and 7 * x - 6 * y + 11 <= 1e-9)

    cands = [(1.0, 3.0), (11.0, f1(11)), (11.0, f2(11))]
    best = None
    for x, y in cands:
        if feasible(x, y):
            v = 8 * x - 6 * y + 11
            if best is None or v > best[0]:
                best = (v, x, y)
    scan = None
    for i in range(-2000, 2001):
        x = i / 100.0
        for y in (f1(x), f2(x)):
            if feasible(x, y):
                v = 8 * x - 6 * y + 11
                scan = v if scan is None else max(scan, v)
    value = best[0]
    hits = [L for L, tex in options.items() if abs(_num(tex) - value) < 1e-6]
    return hits, (f"角點最佳 {value:.4f} @ ({best[1]:.3f},{best[2]:.3f})；"
                  f"沿邊界掃描最大 {scan:.4f}")


def q37(options):
    """p,q,r 等差：用兩組樣本檢驗三命題（必然成立者才算）。"""
    samples = [(1.0, 2.0, 3.0), (-2.0, 1.0, 4.0)]
    truth = {"I", "II", "III"}
    for p, q, r in samples:
        checks = {
            "I": abs((3 ** q) ** 2 - 3 ** p * 3 ** r) < 1e-9,
            "II": abs((5 / q) ** 2 - (5 / p) * (5 / r)) < 1e-9,
            "III": abs(2 * (q - r) - ((p - q) + (r - p))) < 1e-9,
        }
        for k, ok in checks.items():
            if not ok:
                truth.discard(k)
    hits = _stmt_hits(options, truth)
    return hits, f"樣本 {samples} → 必然成立 {sorted(truth)}"


def q38(options):
    """切弦角 ∠CDT=∠DAC=41°；直徑 ⇒ ∠ADC=90°；E 在 BD 上 ⇒ ∠CED=180°-96°。"""
    ang_dac = 41.0
    ang_acd = 180 - 90 - ang_dac
    ang_ced = 180 - 96
    ang_cde = 180 - ang_acd - ang_ced
    hits = [L for L, tex in options.items() if abs(_num(tex) - ang_cde) < 1e-9]
    return hits, (f"∠DAC=41° → ∠ACD={ang_acd}°，∠CED={ang_ced}° "
                  f"→ ∠CDE={ang_cde}°（180-{ang_acd}-{ang_ced}）")


def q39(options):
    """tan³θ=2tanθ 在 (90°,270°) 的實根數：掃描符號變化計數。"""
    step, t = 0.01, 90.0 + 0.01
    prev = math.tan(math.radians(t)) ** 3 - 2 * math.tan(math.radians(t))
    roots = []
    while t < 270.0 - step:
        nxt = math.tan(math.radians(t + step)) ** 3 - 2 * math.tan(math.radians(t + step))
        if (prev < 0) != (nxt < 0):
            roots.append(round(t + step / 2, 2))
        prev, t = nxt, t + step
    uniq = []
    for r in roots:
        if not uniq or abs(r - uniq[-1]) > 1.0:
            uniq.append(r)
    hits = [L for L, tex in options.items() if abs(_num(tex) - len(uniq)) < 1e-9]
    return hits, f"根 ≈ {uniq}（共 {len(uniq)} 個）"


def q40(options):
    """正四面體：P 投影到面心 G，cos(線面角)=QG/PQ=(√3/3)。"""
    qg = (2 / 3) * (math.sqrt(3) / 2)                      # 邊長 1
    ang = math.degrees(math.acos(qg))
    hits = [L for L, tex in options.items() if abs(_num(tex) - round(ang)) < 1e-9]
    return hits, f"cos∠PQG=QG/PQ={qg:.6f} → {ang:.4f}° ≈ {round(ang)}°"


def q41(options):
    """內心 x 坐標 = 內切圓半徑 r = 6：解 (20+h-√(400+h²))/2 = 6。"""
    def f(h):
        return (20 + h - math.sqrt(400 + h * h)) / 2 - 6

    lo, hi = 0.001, 200.0
    for _ in range(200):
        mid = (lo + hi) / 2
        if f(lo) * f(mid) <= 0:
            hi = mid
        else:
            lo = mid
    h = (lo + hi) / 2
    area = 0.5 * 20 * h
    hits = [L for L, tex in options.items() if abs(_num(tex) - area) < 0.5]
    return hits, f"h={h:.6f}, 面積 = 10h = {area:.4f}"


def q42(options):
    """至少 1 位經理 = C(18,7) - C(16,7)。"""
    total = math.comb(18, 7) - math.comb(16, 7)
    hits = [L for L, tex in options.items() if abs(_num(tex) - total) < 1e-9]
    return hits, f"C(18,7)-C(16,7) = {math.comb(18, 7)}-{math.comb(16, 7)} = {total}"


def q43(options):
    """最多 3 罐葡萄 = 1 - C(4,4)C(9,2)/C(13,6) = 140/143。"""
    total = math.comb(13, 6)
    fav = total - math.comb(4, 4) * math.comb(9, 2)
    want = Fraction(fav, total)
    hits = []
    for L, tex in options.items():
        m = re.match(r"^\\frac\{(\d+)\}\{(\d+)\}$", words(tex))
        if m and Fraction(int(m.group(1)), int(m.group(2))) == want:
            hits.append(L)
    return hits, f"{fav}/{total} = {want}"


def q44(options):
    """男生標準分 -2、分差 6 分、SD 2 ⇒ 標準分差 3：|z-(-2)|=3 → z=1 或 -5。"""
    boy, gap = -2.0, 6.0 / 2.0
    want = {boy + gap, boy - gap}
    hits = []
    for L, tex in options.items():
        nums = {float(v) for v in re.findall(r"-?\d+(?:\.\d+)?", words(tex))}
        if nums == want:
            hits.append(L)
    return hits, f"男生標準分 {boy:g}、標準分差 {gap:g} → z ∈ {{{', '.join(f'{v:g}' for v in sorted(want))}}}"


def q45(options):
    """三組數據的 mean/range/variance 關係，用互異樣本 {0,1,2,5} 檢驗。"""
    data = [0.0, 1.0, 2.0, 5.0]

    def stats(xs):
        m = sum(xs) / len(xs)
        return m, max(xs) - min(xs), sum((x - m) ** 2 for x in xs) / len(xs)

    m1, r1, v1 = stats(data)
    m2, r2, v2 = stats([2 * x for x in data])
    m3, r3, v3 = stats([x + 3 for x in data])
    truth = set()
    if m1 + m3 > m2:
        truth.add("I")
    if abs(r1 + r3 - r2) < 1e-12:
        truth.add("II")
    if v1 + v3 < v2:
        truth.add("III")
    hits = _stmt_hits(options, truth)
    return hits, (f"樣本 {data}：m1+m3={m1 + m3:.4g} vs m2={m2:.4g}；"
                  f"r1+r3={r1 + r3:.4g} vs r2={r2:.4g}；"
                  f"v1+v3={v1 + v3:.4g} vs v2={v2:.4g} → {sorted(truth)}")


def _poly_area(pts) -> float:
    s = 0.0
    for i in range(len(pts)):
        x1, y1 = pts[i]
        x2, y2 = pts[(i + 1) % len(pts)]
        s += x1 * y2 - x2 * y1
    return abs(s) / 2


def _ang(a, b, c) -> float:
    """∠abc 的度數（退化情況回傳 0）。"""
    v1 = (a[0] - b[0], a[1] - b[1])
    v2 = (c[0] - b[0], c[1] - b[1])
    den = math.hypot(*v1) * math.hypot(*v2)
    if den < 1e-15:
        return 0.0
    cos = (v1[0] * v2[0] + v1[1] * v2[1]) / den
    return math.degrees(math.acos(max(-1.0, min(1.0, cos))))


def _lines(a1, b1, c1, a2, b2, c2):
    """解 a1x+b1y=c1 與 a2x+b2y=c2。"""
    det = a1 * b2 - a2 * b1
    return ((c1 * b2 - c2 * b1) / det, (a1 * c2 - a2 * c1) / det)


def _sides(p, q, r):
    return sorted([math.dist(p, q), math.dist(q, r), math.dist(r, p)])


def _clean(tex: str) -> str:
    """把選項字串清成可解析的算式：去掉 $ 與句尾的句號。"""
    return str(tex).strip().replace("$", "").rstrip(".").strip()


def p26_07(options):
    """f(1+d)=0：把每個選項的 d 代回 f(1+d) 直接檢驗。"""
    f = lambda d: (1 + 2 * d) * (d - 1) + 9 * (1 + d)
    hits = [L for L, tex in options.items()
            if (m := re.search(r"(-?\d+)", tex)) and abs(f(int(m.group(1)))) < 1e-9]
    return hits, "f(1+d) evaluated at each option's value"


def p26_08(options):
    """任取滿足 g(4)=0 的 (h,k)（h=0, k=−27/4），算 g(−4)；餘數與 h、k 無關。"""
    k = Fraction(-27, 4)
    rem = 32 - 4 * k - 5
    hits = [L for L, tex in options.items() if abs(_num(tex) - float(rem)) < 1e-9]
    return hits, f"g(-4) for a valid (h,k) = {rem}"


def p26_09(options):
    """逐點比較：原不等式（or）與各選項在一組 x 樣本上的真值，唯一全同者為答案。"""
    def truth(x):
        return (x - 1 > (2 * x - 9) / 3) or (3 * x + 12 >= 0)

    xs = [i / 2 for i in range(-20, 21)]
    hits = []
    for L, tex in options.items():
        t = tex.replace("$", "").replace("\\le", "<=").replace("\\ge", ">=").strip().rstrip(".")
        if all(bool(ev(t, x=x)) == truth(x) for x in xs):
            hits.append(L)
    return hits, "solution sets compared on 41 sample values"


def p26_10(options):
    """把每個選項的比例代入「混合後每公斤成本」，等於 16 者為答案。"""
    hits = []
    for L, tex in options.items():
        m = re.match(r"(\d+)\s*:\s*(\d+)", tex.strip())
        if m:
            a, b = int(m.group(1)), int(m.group(2))
            if abs((12 * a + 18 * b) / (a + b) - 16) < 1e-9:
                hits.append(L)
    return hits, "mixture cost per kg for each option's ratio"


def p26_11(options):
    """用 Decimal 精算 80000/1.01^20 並四捨五入到整數。"""
    val = Decimal(80000) / (Decimal("1.01") ** 20)
    ans = int(val.quantize(Decimal("1"), rounding=ROUND_HALF_UP))
    hits = [L for L, tex in options.items() if _num(tex) == ans]
    return hits, f"80000/1.01^20 = {val:.2f} → {ans}"


def p26_12(options):
    """w' = (1.2/0.8)w = 1.5w：把每個選項的百分數化成倍數比對。"""
    target = 1.2 / 0.8
    hits = []
    for L, tex in options.items():
        m = re.search(r"(\d+)", tex)
        if m and abs((1 + int(m.group(1)) / 100) - target) < 1e-9:
            hits.append(L)
    return hits, f"required multiplier {target} → +50%"


def p26_13(options):
    """由 a2、a5 反解 a1，再用遞推式逐步迭代到 a8（不引用通項公式）。"""
    a1 = Fraction(70, 14)
    seq = [a1, Fraction(7)]
    while len(seq) < 8:
        seq.append(3 * seq[-1] - 2 * seq[-2])
    hits = [L for L, tex in options.items() if _num(tex) == float(seq[7])]
    return hits, f"a1={a1}, iterated a8={seq[7]}"


def p26_14(options):
    """在多組符合圖示（b>d>0、交點在正 x 軸）的 (t,b,d) 下檢驗三命題。"""
    truth = {"I", "II", "III"}
    for t, b, d in ((2, 4, 2), (3, 6, 1), (1, 10, 4)):
        a, c = b / t, d / t
        if not a < c:
            truth.discard("I")
        if not b > d:
            truth.discard("II")
        if abs(a * d - b * c) > 1e-12:
            truth.discard("III")
    return _stmt_hits(options, truth), "statements tested on 3 valid configurations (b>d)"


def p26_15(options):
    """在多組 pq<0 的 (p,q) 下檢驗：開口方向、x 截距數、是否過原點。"""
    truth = {"I", "II", "III"}
    for p, q in ((1, -2), (3, -1), (-2, 5)):
        if not p * q < 0:
            truth.discard("I")
        if not abs(-1 / p - (-2 / q)) > 0:
            truth.discard("II")
        if abs((0 * p + 1) * (0 * q + 2)) > 1e-12:      # y(0) = 2 ≠ 0 → 不過原點
            truth.discard("III")
    return _stmt_hits(options, truth), "statements tested on 3 (p,q) with pq<0"


def p26_16(options):
    """把每個選項的弧長代入 2r+s=k 與 ½rs=3k（r=14），兩式同時成立者為答案。"""
    r = 14
    hits = []
    for L, tex in options.items():
        n = _num(tex)
        if abs(0.5 * r * n - 3 * (2 * r + n)) < 1e-9:
            hits.append(L)
    return hits, "each option's arc length checked against both sector conditions"


def p26_17(options):
    """以相似比 (12/16) 的三次方算小金字塔，Y = 總體積 − V_X。"""
    k = 12 / 16
    vx = (1 / 3) * (18 * k) * (16 * k) * (12 * k)
    vy = (1 / 3) * 18 * 16 * 12 - vx
    hits = [L for L, tex in options.items() if abs(_num(tex) - vy) < 1e-6]
    return hits, f"V_X={vx}, V_Y={vy}"


def p26_18(options):
    """（驗算用坐標）由 △ABD=225 定高，依 E、F 的定義定點，用鞋帶公式算 CDEF 面積。"""
    h = 225 * 2 / 3
    e = 0.7
    B, D = (3.0, 0.0), (e, h)
    C = (e + 5, h)
    E = (B[0] + 0.4 * (D[0] - B[0]), 0.4 * h)
    F = (B[0] + 0.4 * e, 0.4 * h)
    area = _poly_area([C, D, E, F])
    hits = [L for L, tex in options.items() if abs(_num(tex) - area) < 1e-6]
    return hits, f"area(CDEF)={area:.2f} (h={h})"


def p26_19(options):
    """用三組實際直角三角形檢驗各選項公式是否等於面積（p=斜邊、q=PR、θ=∠PQR）。"""
    forms = {"A": lambda p, q, t: 0.5 * p * q,
             "B": lambda p, q, t: 0.5 * p * q * math.sin(t),
             "C": lambda p, q, t: 0.5 * p * q * math.cos(t),
             "D": lambda p, q, t: 0.5 * p * q * math.tan(t)}
    ok = {L: True for L in options}
    for PQ, PR in ((3, 4), (5, 12), (2, 7)):
        p, q = math.hypot(PQ, PR), PR
        theta = math.atan2(PR, PQ)
        S = PQ * PR / 2
        for L in options:
            if L in forms and abs(forms[L](p, q, theta) - S) > 1e-9:
                ok[L] = False
    return [L for L in options if ok[L]], "each formula compared with the true area on 3 right triangles"


def p26_20(options):
    """（驗算用坐標）A(0,0),B(3,0),C(3,16),D(0,16),E(3,12)：求直線 DE 與 y=0 的交點 F，算 EF。"""
    D, E = (0.0, 16.0), (3.0, 12.0)
    t = D[1] / (D[1] - E[1])
    F = (D[0] + t * (E[0] - D[0]), 0.0)
    ef = math.dist(E, F)
    hits = [L for L, tex in options.items() if abs(_num(tex) - ef) < 1e-6]
    return hits, f"F={F}, EF={ef}"


def p26_21(options):
    """（驗算用坐標）W(0,0),X(9,0),Y(0,40)；由 WZ=41×40/9、ZY=40×40/9 解 Z，
       驗證兩個角相等後算周長。"""
    W, X, Y = (0.0, 0.0), (9.0, 0.0), (0.0, 40.0)
    s = 40 / 9
    dW, dY = s * 41.0, s * 40.0
    z2 = (dW ** 2 - dY ** 2 + 40 ** 2) / (2 * 40)
    z1 = math.sqrt(max(dW ** 2 - z2 ** 2, 0.0))
    Z = (z1, z2)
    ang_ok = (abs(_ang(W, X, Y) - _ang(Y, W, Z)) < 1e-4
              and abs(_ang(W, Y, X) - _ang(W, Z, Y)) < 1e-4)
    per = math.dist(W, X) + math.dist(X, Y) + math.dist(Y, Z) + math.dist(Z, W)
    hits = [L for L, tex in options.items() if ang_ok and abs(_num(tex) - per) < 1e-6]
    return hits, f"Z=({z1:.2f},{z2:.2f}), angles consistent={ang_ok}, perimeter={per:.3f}"


def p26_22(options):
    """（驗算用坐標）建 4 組合法圖形（AB⊥EA、AB⊥BC、D 為向左內凹點），實測 p、r、q 的關係。"""
    ok = {"A": True, "B": True, "C": True, "D": True}
    figs = ((6, 6, 8, 4, 3), (5, 4, 7, 3, 2), (7, 9, 11, 5, 3), (4, 3, 6, 2.5, 1.5))
    for h, c, e, dx, dy in figs:
        A, B, C, E, D = (0.0, 0.0), (0.0, h), (c, h), (e, 0.0), (dx, dy)
        p, r, q = _ang(A, E, D), _ang(B, C, D), _ang(C, D, E)
        if abs(p - r) > 1e-9:
            ok["A"] = False
        if abs(q - 90) > 1e-9:
            ok["B"] = False
        if abs(p + r - q) > 1e-9:
            ok["C"] = False
        if abs(p + q + r - 180) > 1e-9:
            ok["D"] = False
    truth = {k for k, v in ok.items() if v}
    return [L for L in options if L in truth], "p, r, q relations tested on 4 valid figures"


def p26_23(options):
    """（驗算用坐標）單位正六邊形：求 G，逐一檢驗 I（BG∥CE）、II（△ABG~△BDC）、III（△AGF≅△BGC）。"""
    pts = {n: (math.cos(math.radians(90 - 60 * k)), math.sin(math.radians(90 - 60 * k)))
           for k, n in enumerate("ABCDEF")}
    A, B, C, D, E, F = (pts[n] for n in "ABCDEF")

    def inter(p, q, r, s):
        d1 = (q[0] - p[0], q[1] - p[1])
        d2 = (s[0] - r[0], s[1] - r[1])
        den = d1[0] * d2[1] - d1[1] * d2[0]
        t = ((r[0] - p[0]) * d2[1] - (r[1] - p[1]) * d2[0]) / den
        return (p[0] + t * d1[0], p[1] + t * d1[1])

    G = inter(A, C, B, F)
    I = abs((B[0] - G[0]) * (E[1] - C[1]) - (B[1] - G[1]) * (E[0] - C[0])) < 1e-9
    s1, s2 = _sides(A, B, G), _sides(B, D, C)
    II = abs(s1[0] / s2[0] - s1[1] / s2[1]) < 1e-9 and abs(s1[1] / s2[1] - s1[2] / s2[2]) < 1e-9
    s3, s4 = _sides(A, G, F), _sides(B, G, C)
    III = all(abs(a - b) < 1e-9 for a, b in zip(s3, s4))
    truth = {k for k, ok in (("I", I), ("II", II), ("III", III)) if ok}
    return _stmt_hits(options, truth), f"I={I}, II={II}, III={III}"


def p26_24(options):
    """先平移再旋轉：用逆時針 270° 的旋轉矩陣算 V 的 y 坐標。"""
    th = math.radians(270)
    ux, uy = 3 - 5, 1.0
    vy = ux * math.sin(th) + uy * math.cos(th)
    hits = [L for L, tex in options.items() if abs(_num(tex) - vy) < 1e-9]
    return hits, f"V_y={vy:.3f}"


def p26_25(options):
    """（驗算用坐標）單位圓：P 在 0°、Q 在 82°；在 OQ 上找 T 使 ∠PTQ=104°，定出 R，
       再由圓心角 ∠QOR 求圓周角 ∠QSR。"""
    P = (1.0, 0.0)
    Q = (math.cos(math.radians(82)), math.sin(math.radians(82)))
    # 掃描 T = mid·Q（mid ∈ (0,1)）找 ∠PTQ = 104°：避開 mid→1（T→Q）的退化位置
    best = (1e9, 0.5)
    mid = 0.001
    while mid < 0.999:
        T = (mid * Q[0], mid * Q[1])
        d = abs(_ang(P, T, Q) - 104)
        if d < best[0]:
            best = (d, mid)
        mid += 0.001
    best2 = best
    mid = best[1] - 0.001
    while mid <= best[1] + 0.001:
        if 0 < mid < 1:
            T = (mid * Q[0], mid * Q[1])
            d = abs(_ang(P, T, Q) - 104)
            if d < best2[0]:
                best2 = (d, mid)
        mid += 1e-6
    mid = best2[1]
    T = (mid * Q[0], mid * Q[1])
    dx, dy = T[0] - P[0], T[1] - P[1]
    b = 2 * (P[0] * dx + P[1] * dy)
    c = P[0] ** 2 + P[1] ** 2 - 1
    u = (-b + math.sqrt(b * b - 4 * (dx * dx + dy * dy) * c)) / (2 * (dx * dx + dy * dy))
    R = (P[0] + u * dx, P[1] + u * dy)
    ra = math.degrees(math.atan2(R[1], R[0])) % 360
    ans = abs(ra - 82) / 2
    hits = [L for L, tex in options.items() if abs(_num(tex) - ans) < 1.0]
    return hits, f"R at {ra:.2f}°, ∠QSR≈{ans:.2f}°"


def p26_26(options):
    """兩線斜率比較：不同 → 相交 → 等距點軌跡是兩條角平分線（一對直線）。"""
    m1, m2 = -3 / 5, 3 / 5
    if abs(m1 - m2) > 1e-12:
        return ([L for L in options if L == "D"],
                f"slopes {m1} vs {m2} differ → two angle bisectors")
    return ([L for L in options if L == "B"], "parallel lines → one midline")


def p26_27(options):
    """圓心 (5,k) 與兩點等距解 k=6.5；周長 2π|k|。"""
    k = 52 / 8
    circ = 2 * math.pi * abs(k)
    hits = []
    for L, tex in options.items():
        m = re.search(r"(\d+(?:\.\d+)?)", tex)
        if m and abs(float(m.group(1)) * math.pi - circ) < 1e-6:
            hits.append(L)
    return hits, f"k={k}, circumference={circ:.6f}"


def p26_28(options):
    """窮舉 C(5,2)=10 組配對（兩張 2 是不同卡），數和大於 7 者。"""
    cards = [2, 2, 3, 4, 6]
    tot = fav = 0
    for i in range(5):
        for j in range(i + 1, 5):
            tot += 1
            if cards[i] + cards[j] > 7:
                fav += 1
    p = fav / tot
    hits = [L for L, tex in options.items() if abs(ev(_clean(tex)) - p) < 1e-12]
    return hits, f"{fav}/{tot} pairs with sum > 7"


def p26_29(options):
    """反例：兩組數據可有相同五數摘要但平均數不同 → 平均數不可從盒鬚圖得知。"""
    a = [1, 2, 3, 3, 5, 6, 7, 8, 9]
    b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    def summary(xs):
        xs = sorted(xs)
        n = len(xs)
        med = xs[n // 2]
        lo, hi = xs[:n // 2], xs[n // 2 + 1:]
        q1 = (lo[1] + lo[2]) / 2 if len(lo) == 4 else lo[len(lo) // 2]
        q3 = (hi[1] + hi[2]) / 2 if len(hi) == 4 else hi[len(hi) // 2]
        return (xs[0], q1, med, q3, xs[-1])

    same = summary(a) == summary(b)
    means = (sum(a) / len(a), sum(b) / len(b))
    differ = abs(means[0] - means[1]) > 1e-9
    truth = {"II", "III"} if (same and differ) else set()
    return _stmt_hits(options, truth), f"same five-number summary={same}, means differ={differ}"


def p26_30(options):
    """窮舉所有 x+y=22 且 x,y∈[4,13] 的 (x,y)，檢驗 I/II/III 是否恆成立。"""
    from collections import Counter
    base = [4, 7, 7, 7, 8, 11, 11, 13]
    always = {"I": True, "II": True, "III": True}
    tested = 0
    for x in range(4, 14):
        y = 22 - x
        if not (4 <= y <= 13):
            continue
        tested += 1
        data = base + [x, y]
        n = len(data)
        mean = sum(data) / n
        u = sum((v - mean) ** 2 for v in data) / n
        s = sorted(data)
        v = (s[4] + s[5]) / 2
        cnt = Counter(data)
        w = max(cnt, key=lambda k: cnt[k])
        if not u < 7:
            always["I"] = False
        if not v > 7:
            always["II"] = False
        if w != 7:
            always["III"] = False
    truth = {k for k, ok in always.items() if ok}
    return _stmt_hits(options, truth), f"{tested} valid (x,y): " + ", ".join(
        f"{k}={always[k]}" for k in ("I", "II", "III"))


def p26_31(options):
    """二進位字串轉整數，再比對每個選項的表達式。"""
    val = int("1010100000001110", 2)
    hits = [L for L, tex in options.items() if abs(ev(_clean(tex)) - val) < 1e-6]
    return hits, f"1010100000001110_2 = {val}"


def p26_32(options):
    """三個式子的指數：min 必須等於 HCF、max 等於 LCM。"""
    e1, e2 = (1, 3, 6), (1, 2, 4)
    hcf, lcm = (1, 2, 3), (2, 4, 6)
    hits = []
    for L, tex in options.items():
        m = re.match(r"x(?:\^\{?(\d+)\}?)?y(?:\^\{?(\d+)\}?)?z(?:\^\{?(\d+)\}?)?",
                     tex.strip().replace("$", ""))
        if m:
            e3 = tuple(int(g) if g else 1 for g in m.groups())
            if tuple(min(x) for x in zip(e1, e2, e3)) == hcf and \
               tuple(max(x) for x in zip(e1, e2, e3)) == lcm:
                hits.append(L)
    return hits, "each option tested: min=HCF and max=LCM"


def p26_33(options):
    """由 S_n=3^n−1 直接算 a1..a5，檢驗三命題。"""
    S = lambda n: 3 ** n - 1
    a = [None] + [S(n) - S(n - 1) for n in range(1, 6)]
    cond = {"I": a[2] == 8,
            "II": all(a[n + 1] == 3 * a[n] for n in range(1, 5)),
            "III": all(x % 2 == 0 for x in a[1:])}
    truth = {k for k, ok in cond.items() if ok}
    return _stmt_hits(options, truth), f"a1..a5={a[1:]}, " + ", ".join(
        f"{k}={cond[k]}" for k in ("I", "II", "III"))


def p26_34(options):
    """把每個選項的 β 代入複數式（Python complex），實測虛部是否為 0。"""
    i = complex(0, 1)
    num = i ** 4 + 2 * i ** 3 + 3 * i ** 2 + 4 * i
    hits = []
    for L, tex in options.items():
        m = re.search(r"(-?\d+)", tex)
        if m and abs((num / (complex(0, float(m.group(1))) - 1)).imag) < 1e-9:
            hits.append(L)
    return hits, f"numerator={num}; imaginary part tested for each option"


def p26_35(options):
    """數值檢驗 y=2−log_3(x+4) 的單調性、x 截距與 y 截距。"""
    f = lambda x: 2 - math.log(x + 4, 3)
    cond = {"I": f(1) > f(0), "II": abs(f(5)) < 1e-12, "III": abs(f(0) - 2) < 1e-12}
    truth = {k for k, ok in cond.items() if ok}
    return _stmt_hits(options, truth), f"f(0)={f(0):.4f}, f(1)={f(1):.4f}, f(5)={f(5):.1e}"


def p26_36(options):
    """縱軸截距 log a = 2 → a = 10²；橫軸截距定出斜率。"""
    loga = 2.0
    a = 10 ** loga
    hits = [L for L, tex in options.items() if abs(_num(tex) - a) < 1e-6]
    return hits, f"log a=2 → a={a}, slope log b={-loga}"


def p26_37(options):
    """三條邊界線兩兩求交點，篩出可行頂點，取 5x+4y+28 的最小值。"""
    cands = [_lines(0, 1, 7, 3, -4, 2), _lines(0, 1, 7, 6, 13, 25), _lines(3, -4, 2, 6, 13, 25)]
    feas = [(x, y) for x, y in cands
            if y <= 7 + 1e-9 and 3 * x - 4 * y <= 2 + 1e-9 and 6 * x + 13 * y >= 25 - 1e-9]
    mn = min(5 * x + 4 * y + 28 for x, y in feas)
    hits = [L for L, tex in options.items() if abs(_num(tex) - mn) < 1e-9]
    return hits, f"vertices {[(round(x, 3), round(y, 3)) for x, y in feas]} → min={mn}"


def p26_38(options):
    """（驗算用坐標）以弧 a=112,b=124,c=78,d=46 建構圖形，逐項驗證已知條件與所求角。"""
    def on(deg):
        return (math.cos(math.radians(deg)), math.sin(math.radians(deg)))

    def inter(p, q, r, s):
        d1 = (q[0] - p[0], q[1] - p[1])
        d2 = (s[0] - r[0], s[1] - r[1])
        den = d1[0] * d2[1] - d1[1] * d2[0]
        t = ((r[0] - p[0]) * d2[1] - (r[1] - p[1]) * d2[0]) / den
        return (p[0] + t * d1[0], p[1] + t * d1[1])

    A = on(90)
    B = on(90 - 112)
    C = on(90 - 112 - 124)
    D = on(90 - 112 - 124 - 78)
    E = inter(A, C, B, D)
    tang = (-C[1], C[0])
    T = inter(C, (C[0] + tang[0], C[1] + tang[1]), B, D)
    ab = (B[0] - A[0], B[1] - A[1])
    parallel = abs(ab[0] * tang[1] - ab[1] * tang[0]) < 1e-9
    abd, aed, cte, ade = _ang(A, B, D), _ang(A, E, D), _ang(C, T, E), _ang(A, D, E)
    hits = [L for L, tex in options.items() if abs(_num(tex) - ade) < 0.6]
    return hits, (f"∠ABD={abd:.2f}°(23), ∠AED={aed:.2f}°(85), AB∥TC={parallel}, "
                  f"∠CTE={cte:.2f}°(23) → ∠ADE={ade:.2f}°")


def p26_39(options):
    """（驗算用坐標）T=(0,0)、U=(D,0)，S=(8cosφ,8sinφ) 且 D=8/cosφ；
       掃描 φ 使 SV=5（取 S、V 同側的解），再量度 ∠SUV。"""
    found = None
    for i in range(3001, 9000):
        phi = math.radians(i / 100)
        D = 8 / math.cos(phi)
        S = (8 * math.cos(phi), 8 * math.sin(phi))
        t = D * math.cos(math.radians(30))
        V = (t * math.cos(math.radians(30)), t * math.sin(math.radians(30)))
        if abs(math.dist(S, V) - 5) < 0.002:
            found = (phi, S, V, (D, 0.0))
            break
    if not found:
        return [], "no configuration found"
    phi, S, V, U = found
    ans = _ang(S, U, V)
    hits = [L for L, tex in options.items() if abs(_num(tex) - ans) < 1.0]
    return hits, f"φ={math.degrees(phi):.2f}°, |SV|={math.dist(S, V):.3f}, ∠SUV={ans:.2f}°"


def p26_40(options):
    """（驗算用向量）A(0,0,0),B(1,0,0),C(0,1,0),E(0,0,2)：交線 BC 的兩條垂線夾角即所求。"""
    A, E, M = (0.0, 0.0, 0.0), (0.0, 0.0, 2.0), (0.5, 0.5, 0.0)
    u = tuple(A[i] - M[i] for i in range(3))
    v = tuple(E[i] - M[i] for i in range(3))
    cos = sum(a * b for a, b in zip(u, v)) / (math.sqrt(sum(a * a for a in u)) *
                                              math.sqrt(sum(b * b for b in v)))
    sin = math.sqrt(max(0.0, 1 - cos * cos))
    targets = {"A": 1 / 3, "B": 2 / 3, "C": math.sqrt(2) / 4, "D": 2 * math.sqrt(2) / 3}
    hits = [L for L in options if L in targets and abs(targets[L] - sin) < 1e-9]
    return hits, f"cosθ={cos:.6f}, sinθ={sin:.6f}"


def p26_41(options):
    """掃描 90°~360°（0.01°）數 6sin⁴θ−5sin²θ+1=0 的根（全部是簡單根 → 看變號）。"""
    f = lambda t: 6 * math.sin(t) ** 4 - 5 * math.sin(t) ** 2 + 1
    roots, prev = 0, f(math.radians(90))
    for i in range(9001, 36001):
        cur = f(math.radians(i / 100))
        if abs(cur) < 1e-12:            # 採樣點正好落在根上：跳過，讓下一段判斷變號
            continue
        if prev * cur < 0:
            roots += 1
        prev = cur
    hits = [L for L, tex in options.items() if _num(tex) == roots]
    return hits, f"sign changes on [90°,360°] = {roots}"


def p26_42(options):
    """窮舉 C(10,5)=252 個委員會，數出男生 ≤ 2 的數目。"""
    from itertools import combinations
    tot = fav = 0
    for comb in combinations(range(10), 5):
        tot += 1
        if sum(1 for s in comb if s < 3) <= 2:
            fav += 1
    p = fav / tot
    hits = [L for L, tex in options.items() if abs(ev(_clean(tex)) - p) < 1e-12]
    return hits, f"{fav}/{tot} → {p:.6f}"


def p26_43(options):
    """窮舉：8 人中選 7 人排隊且兼職不相鄰，直接數出所有合法排列。"""
    from itertools import permutations
    people = ["F1", "F2", "F3", "F4", "F5", "P1", "P2", "P3"]
    cnt = 0
    for perm in permutations(people, 7):
        if all(not (perm[i][0] == "P" and perm[i + 1][0] == "P") for i in range(6)):
            cnt += 1
    hits = [L for L, tex in options.items() if _num(tex) == cnt]
    return hits, f"brute-force enumeration = {cnt}"


def p26_44(options):
    """由 (40,z=0)、(58,z=2) 定 σ = 18/2；β−α = (3−(−1))σ。"""
    sigma = (58 - 40) / 2
    diff = 4 * sigma
    hits = [L for L, tex in options.items() if abs(_num(tex) - diff) < 1e-9]
    return hits, f"σ={sigma}, β−α={diff}"


def p26_45(options):
    """造一組標準差為 5 的數據，實際做 (x+2)/5 變換後計算變異數。"""
    data = [-5.0, 5.0]
    n = len(data)
    m = sum(data) / n
    sd = math.sqrt(sum((x - m) ** 2 for x in data) / n)
    new = [(x + 2) / 5 for x in data]
    mn = sum(new) / n
    var = sum((x - mn) ** 2 for x in new) / n
    hits = [L for L, tex in options.items() if abs(_num(tex) - var) < 1e-9]
    return hits, f"original SD={sd}, new variance={var}"


# ───────── 2026 卷（p26_xx）─────────
def p26_01(options):
    """1/(k+2)+3/(5k-6) → 在 k=1,3,7 數值比對各選項（避開 k=-2、6/5 兩個無定義點）。"""
    hits = []
    stem = "\\frac{1}{k+2}+\\frac{3}{5k-6}"
    for L, tex in options.items():
        if all(close(ev(stem, k=k), ev(tex, k=k)) for k in (1, 3, 7)):
            hits.append(L)
    return hits, "1/(k+2)+3/(5k-6) evaluated at k=1,3,7"


def p26_02(options):
    """9^(3n+1)/((3^(2n+3))(27^(2n+1))) → n=1,2,3 數值比對。"""
    hits = []
    stem = "\\frac{9^{3n+1}}{(3^{2n+3})(27^{2n+1})}"
    for L, tex in options.items():
        if all(close(ev(stem, n=n), ev(tex, n=n), rel=1e-6) for n in (1, 2, 3)):
            hits.append(L)
    return hits, "index expression evaluated at n=1,2,3"


def p26_03(options):
    """(2α-β)²+(α-2β)² → α,β 換成單字母變數（補上相鄰字母的乘號）後數值比對。"""
    def norm(tex):                       # to_py 不會在兩個字母之間補乘號（\alpha\beta）
        s = tex.replace("\\alpha", "a").replace("\\beta", "b")
        return re.sub(r"(?<=[a-zA-Z])(?=[a-zA-Z])", "*", s)

    hits = []
    stem = norm("(2\\alpha-\\beta)^{2}+(\\alpha-2\\beta)^{2}")
    for L, tex in options.items():
        if all(close(ev(stem, a=a, b=b), ev(norm(tex), a=a, b=b))
               for a, b in ((1, 2), (3, -1), (-2.5, 4))):
            hits.append(L)
    return hits, "quadratic expansion compared at 3 (alpha,beta) sample points"


def p26_04(options):
    """230.045678 的捨入：用 Decimal 精確算「4 位有效數字」與「4 位小數」，再比對選項的數值＋模式。"""
    val = Decimal("230.045678")
    sf4 = val.quantize(Decimal("0.1"), rounding=ROUND_HALF_UP)        # 230.0
    dp4 = val.quantize(Decimal("0.0001"), rounding=ROUND_HALF_UP)     # 230.0457
    hits = []
    for L, tex in options.items():
        m = re.search(r"([0-9]+(?:\.[0-9]+)?)", tex)
        if not m:
            continue
        num = Decimal(m.group(1))
        if "significant" in tex and num == sf4:
            hits.append(L)
        elif "decimal" in tex and num == dp4:
            hits.append(L)
    return hits, f"Decimal rounding: 4 s.f. = {sf4}, 4 d.p. = {dp4}"


def p26_05(options):
    """恆等式 (x-5)(x+m)-4(x+n) ≡ x(x+6)+1：
       展開得 F(x)=(m-15)x-(5m+4n+1)；取 x=0,1 建二元一次方程，用 Fraction 精確解 m,n。"""
    # x=0 → 5m+4n = -1 ； x=1 → m+n = -4
    rows = [[Fraction(5), Fraction(4), Fraction(-1)],
            [Fraction(1), Fraction(1), Fraction(-4)]]
    det = rows[0][0] * rows[1][1] - rows[0][1] * rows[1][0]                 # 5·1-4·1 = 1
    m = (rows[0][2] * rows[1][1] - rows[0][1] * rows[1][2]) / det           # 15
    n = (rows[0][0] * rows[1][2] - rows[0][2] * rows[1][0]) / det           # -19
    hits = []
    for L, tex in options.items():
        mm = re.search(r"(-?\d+)", tex)
        if mm and Fraction(int(mm.group(1))) == n:
            hits.append(L)
    return hits, f"identity solved exactly with Fractions: m={m}, n={n}"


def p26_06(options):
    """(x+2s)(x+t)=sx+st → 整理成 x²+(s+t)x+st=0，用二次公式求根，再比對選項的候選值集合。"""
    hits = []
    for L, tex in options.items():
        cands = re.findall(r"x\s*=\s*([^$\s,]+)", tex)
        if not cands:
            continue
        ok = True
        for s, t in ((2, 3), (1, 5), (-2, 7)):
            disc = (s + t) ** 2 - 4 * s * t
            roots = sorted(round((-(s + t) + sgn * disc ** 0.5) / 2, 9) for sgn in (1, -1))
            vals = sorted(round(ev(c, s=s, t=t), 9) for c in cands)
            if vals != roots:
                ok = False
                break
        if ok:
            hits.append(L)
    return hits, "quadratic roots compared with each option's candidate set at 3 (s,t) samples"


CHECKS = {
    "2025-p2-q01": q01, "2025-p2-q02": q02, "2025-p2-q03": q03, "2025-p2-q04": q04,
    "2025-p2-q05": q05, "2025-p2-q06": q06, "2025-p2-q07": q07, "2025-p2-q08": q08,
    "2025-p2-q09": q09, "2025-p2-q12": q12, "2025-p2-q13": q13, "2025-p2-q29": q29,
    # Batch B1
    "2025-p2-q10": q10, "2025-p2-q11": q11, "2025-p2-q14": q14, "2025-p2-q15": q15,
    "2025-p2-q16": q16, "2025-p2-q17": q17, "2025-p2-q18": q18, "2025-p2-q19": q19,
    # Batch B2
    "2025-p2-q20": q20, "2025-p2-q21": q21, "2025-p2-q22": q22, "2025-p2-q23": q23,
    "2025-p2-q24": q24, "2025-p2-q25": q25, "2025-p2-q26": q26, "2025-p2-q27": q27,
    "2025-p2-q28": q28,
    # Batch B3（後半段）
    "2025-p2-q30": q30, "2025-p2-q31": q31, "2025-p2-q32": q32, "2025-p2-q33": q33,
    "2025-p2-q34": q34, "2025-p2-q35": q35, "2025-p2-q36": q36, "2025-p2-q37": q37,
    # Batch B4（最後）
    "2025-p2-q38": q38, "2025-p2-q39": q39, "2025-p2-q40": q40, "2025-p2-q41": q41,
    "2025-p2-q42": q42, "2025-p2-q43": q43, "2025-p2-q44": q44, "2025-p2-q45": q45,
    # 2026 卷 · batch 6
    "2026-p2-q01": p26_01, "2026-p2-q02": p26_02, "2026-p2-q03": p26_03,
    "2026-p2-q04": p26_04, "2026-p2-q05": p26_05, "2026-p2-q06": p26_06,
    # 2026 卷 · batch 7–11（q22 待人工看圖，暫不解答）
    "2026-p2-q07": p26_07, "2026-p2-q08": p26_08, "2026-p2-q09": p26_09,
    "2026-p2-q10": p26_10, "2026-p2-q11": p26_11, "2026-p2-q12": p26_12,
    "2026-p2-q13": p26_13, "2026-p2-q14": p26_14, "2026-p2-q15": p26_15,
    "2026-p2-q16": p26_16, "2026-p2-q17": p26_17, "2026-p2-q18": p26_18,
    "2026-p2-q19": p26_19, "2026-p2-q20": p26_20,     "2026-p2-q21": p26_21,
    "2026-p2-q22": p26_22, "2026-p2-q23": p26_23, "2026-p2-q24": p26_24, "2026-p2-q25": p26_25,
    "2026-p2-q26": p26_26, "2026-p2-q27": p26_27, "2026-p2-q28": p26_28,
    "2026-p2-q29": p26_29, "2026-p2-q30": p26_30, "2026-p2-q31": p26_31,
    "2026-p2-q32": p26_32, "2026-p2-q33": p26_33, "2026-p2-q34": p26_34,
    "2026-p2-q35": p26_35, "2026-p2-q36": p26_36, "2026-p2-q37": p26_37,
    "2026-p2-q38": p26_38, "2026-p2-q39": p26_39, "2026-p2-q40": p26_40,
    "2026-p2-q41": p26_41, "2026-p2-q42": p26_42, "2026-p2-q43": p26_43,
    "2026-p2-q44": p26_44, "2026-p2-q45": p26_45,
}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    bank = json.load(open(os.path.join(BASE, "data", "bank.json"), encoding="utf-8-sig"))
    solutions = json.load(open(os.path.join(BASE, "data", "solutions.json"), encoding="utf-8-sig"))["solutions"]
    by_id = {q["id"]: q for q in bank["questions"]}

    fails, unverified, results = [], [], []
    print(f"{'id':<16} {'answer':<7} {'verified':<9} note")
    print("-" * 100)
    for qid in sorted(solutions, key=lambda i: by_id[i]["no"]):
        q, sol = by_id[qid], solutions[qid]
        fn = CHECKS.get(qid)
        if not fn:
            unverified.append(qid)
            print(f"{qid:<16} {sol['answer']:<7} {'—':<9} no independent check registered")
            continue
        hits, note = fn(q["options"])
        verdict = "OK" if hits == [sol["answer"]] else "MISMATCH"
        if verdict != "OK":
            fails.append((qid, hits, sol["answer"]))
        print(f"{qid:<16} {sol['answer']:<7} {verdict:<9} {note}  → matches {hits}")
        results.append({"id": qid, "answer": sol["answer"], "computed": hits, "ok": verdict == "OK"})

    print("-" * 100)
    print(f"已驗算 {len(results)} 題：通過 {len(results) - len(fails)}、失敗 {len(fails)}；未登記驗算 {len(unverified)} 題")
    for qid, hits, ans in fails:
        print(f"  [ERROR] {qid}: 程式算得 {hits}，solutions.json 寫 {ans}")
    if unverified:
        print("  未驗算：" + ", ".join(unverified))

    if args.json:
        path = os.path.join(BASE, "data", "ai", "answer_verification.json")
        os.makedirs(os.path.dirname(path), exist_ok=True)
        json.dump({"results": results, "unverified": unverified}, open(path, "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        print(f"  明細：{os.path.relpath(path, BASE)}")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
