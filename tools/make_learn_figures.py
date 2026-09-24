#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""自學追上站 · 概念卡示意圖產生器（SVG，黑白試卷風）

為什麼用 SVG 而唔係 Word 入面嘅圖：
  WS04.docx 嘅坐標平面圖係 Word 自選圖形＋文字框砌出嚟，.docx 入面冇對應嘅圖片檔；
  嵌入嘅 13 張圖只係 Worksheet 標誌同斜率／距離公式。所以呢度直接畫向量圖 ——
  放大唔會濛、每張得 1–3 KB、圖入面嘅點必定等於題目嘅點。

重要：畫布係正方形，而且 x／y 用同一個比例縮放 —— **每格方格必定係正方形**，
  唔會出現「長方形格仔」嘅怪樣。座標範圍唔同時，內容會置中、兩邊留白。

圖例（統一）
  ● 實心黑點 = 原本的點      ○ 空心點 = 變換後的影像
  ┈ 虛線     = 對稱連線／移動路徑／等距圓
  ▬ 粗黑線   = 鏡軸（反射軸）  ↷ 弧形箭嘴 = 旋轉方向

輸出
  data/learn/figures.json   { "<id>": [ {"svg": …, "caption": …, "step": ?}, … ] }（自動產生，勿手改）
  概念卡／MC 題唔會有 step → 前端一次過顯示全部圖；
  長題示範會有 step（1 起算）→ 圖跟住題解第 step 步出場（逐步揭示，唔會一次過爆出來）。
改完圖要跑：
  python tools/make_learn_figures.py
  python tools/learn_figure_check.py        （自動驗標籤出界／互疊／壓點）
  python tools/make_learn_data.py
"""
from __future__ import annotations

import io
import json
import math
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data", "learn")
OUT = os.path.join(DATA, "figures.json")

W, H = 260, 260          # 畫布（正方形）
PAD = 22                 # 邊界留白（放座標標籤）

INK = "#111"             # 主線／點
AXIS = "#333"            # 座標軸
MID = "#666"             # 輔助線
GRID = "#E3E3E3"         # 方格紙
FONT = "system-ui, 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif"


class Frame:
    """正方格紙座標系：x／y 等比例，內容按範圍置中。"""

    def __init__(self, xmin: float, xmax: float, ymin: float, ymax: float,
                 w: int = W, h: int = H, pad: int = PAD, key: str = "f",
                 show_o: bool = True):
        self.xmin, self.xmax, self.ymin, self.ymax = xmin, xmax, ymin, ymax
        self.w, self.h, self.pad = w, h, pad
        self.key = key
        # 等比例：取兩軸可用空間中較細嘅一邊，格仔先會係正方形
        self.show_o = show_o
        self.scale = min((w - 2 * pad) / (xmax - xmin), (h - 2 * pad) / (ymax - ymin))
        self.cx = (xmin + xmax) / 2.0
        self.cy = (ymin + ymax) / 2.0
        self.parts: list[str] = []
        self._grid()
        self._axes()

    # ── 座標轉換 ──
    def px(self, x: float) -> float:
        return self.w / 2 + (x - self.cx) * self.scale

    def py(self, y: float) -> float:
        return self.h / 2 - (y - self.cy) * self.scale

    def sx(self, dx: float) -> float:
        return dx * self.scale

    # ── 底層 ──
    def _grid(self) -> None:
        g = []
        for x in range(int(self.xmin), int(self.xmax) + 1):
            g.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"/>'
                     % (self.px(x), self.py(self.ymin), self.px(x), self.py(self.ymax)))
        for y in range(int(self.ymin), int(self.ymax) + 1):
            g.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f"/>'
                     % (self.px(self.xmin), self.py(y), self.px(self.xmax), self.py(y)))
        self.parts.append('<g stroke="%s" stroke-width="1">%s</g>' % (GRID, "".join(g)))

    def _axes(self) -> None:
        a = []
        if self.ymin <= 0 <= self.ymax:
            # x 軸：箭咀指住正方向（右）
            a.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" marker-end="url(#ar-%s)"/>'
                     % (self.px(self.xmin), self.py(0), self.px(self.xmax), self.py(0), self.key))
            a.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">x</text>'
                     % (self.px(self.xmax) + 5, self.py(0) + 14, AXIS, FONT))
        if self.xmin <= 0 <= self.xmax:
            # y 軸：箭咀指住正方向（上）
            a.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" marker-end="url(#ar-%s)"/>'
                     % (self.px(0), self.py(self.ymin), self.px(0), self.py(self.ymax), self.key))
            a.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">y</text>'
                     % (self.px(0) + 5, self.py(self.ymax) - 2, AXIS, FONT))
        if self.xmin <= 0 <= self.xmax and self.ymin <= 0 <= self.ymax and self.show_o:
            # 放喺原點右下（避開左下／左上常見嘅點標籤）
            a.append('<text x="%.1f" y="%.1f" font-size="10" fill="%s" font-family="%s">O</text>'
                     % (self.px(0) + 6, self.py(0) + 14, AXIS, FONT))
        self.parts.append('<g stroke="%s" stroke-width="1.3" fill="%s">%s</g>' % (AXIS, AXIS, "".join(a)))

    # ── 元件 ──
    def point(self, x: float, y: float, label: str = "", hollow: bool = False,
              dx: float = 8, dy: float = -10) -> None:
        cx, cy = self.px(x), self.py(y)
        if hollow:
            self.parts.append('<circle cx="%.1f" cy="%.1f" r="4.6" fill="#fff" stroke="%s" stroke-width="1.7"/>'
                              % (cx, cy, INK))
        else:
            self.parts.append('<circle cx="%.1f" cy="%.1f" r="4.6" fill="%s"/>' % (cx, cy, INK))
        if label:
            fs = 11.5
            tx, ty = cx + dx, cy + dy
            w = label_width(label, fs)
            # 右邊留 18px 俾座標軸嘅「x」標籤：會出界或太貼 → 改放點嘅左邊
            if tx + w > self.w - 18:
                tx = cx - dx - w
            if tx < 2:
                tx = 2
            if ty < 12:                             # 上邊出界 → 改放點嘅下面
                ty = cy + 20
            self.parts.append('<text x="%.1f" y="%.1f" font-size="%.1f" fill="%s" font-family="%s">%s</text>'
                              % (tx, ty, fs, INK, FONT, label))

    def seg(self, x1, y1, x2, y2, color: str = MID, width: float = 1.2,
            dash: str | None = None) -> None:
        d = ' stroke-dasharray="%s"' % dash if dash else ""
        self.parts.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                          'stroke-width="%.1f"%s/>'
                          % (self.px(x1), self.py(y1), self.px(x2), self.py(y2), color, width, d))

    def arrow(self, x1, y1, x2, y2, color: str = INK, width: float = 1.7) -> None:
        self.parts.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
                          'stroke-width="%.1f" marker-end="url(#ar-%s)"/>'
                          % (self.px(x1), self.py(y1), self.px(x2), self.py(y2),
                             color, width, self.key))

    def mirror_h(self, y: float, label: str = "") -> None:
        self.seg(self.xmin, y, self.xmax, y, color=INK, width=2.6)
        if label:
            self.parts.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">%s</text>'
                              % (self.px(self.xmax) - 66, self.py(y) - 7, INK, FONT, label))

    def mirror_v(self, x: float, label: str = "") -> None:
        self.seg(x, self.ymin, x, self.ymax, color=INK, width=2.6)
        if label:
            self.parts.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">%s</text>'
                              % (self.px(x) + 6, self.py(self.ymax) + 14, INK, FONT, label))

    def arc(self, r_px: float, t1_deg: float, t2_deg: float, label: str = "") -> None:
        """以原點為圓心、由角度 t1 畫到 t2（數學角，逆時針為正）。"""
        cx, cy = self.px(0), self.py(0)
        t1, t2 = math.radians(t1_deg), math.radians(t2_deg)
        p1 = (cx + r_px * math.cos(t1), cy - r_px * math.sin(t1))
        p2 = (cx + r_px * math.cos(t2), cy - r_px * math.sin(t2))
        large = 1 if abs(t2_deg - t1_deg) > 180 else 0
        sweep = 0 if t2_deg > t1_deg else 1
        self.parts.append('<path d="M %.1f %.1f A %.1f %.1f 0 %d %d %.1f %.1f" fill="none" '
                          'stroke="%s" stroke-width="1.5" marker-end="url(#ar-%s)"/>'
                          % (p1[0], p1[1], r_px, r_px, large, sweep, p2[0], p2[1], INK, self.key))
        if label:
            tm = math.radians((t1_deg + t2_deg) / 2.0)
            self.parts.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">%s</text>'
                              % (cx + (r_px + 15) * math.cos(tm), cy - (r_px + 15) * math.sin(tm) + 4,
                                 INK, FONT, label))

    def circle(self, r: float, dash: str = "4 3") -> None:
        """以原點為圓心、半徑 r（數學單位）嘅圓（x／y 等比例，一定係正圓）。"""
        self.parts.append('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="none" stroke="%s" '
                          'stroke-width="1.1" stroke-dasharray="%s"/>'
                          % (self.px(0), self.py(0), self.sx(r), MID, dash))

    def text(self, x: float, y: float, s: str, size: float = 11, color: str = INK) -> None:
        self.parts.append('<text x="%.1f" y="%.1f" font-size="%.1f" fill="%s" font-family="%s">%s</text>'
                          % (self.px(x), self.py(y), size, color, FONT, s))

    def line_by_eq(self, slope: float, intercept: float, color: str = INK, width: float = 1.6) -> None:
        """整條直線 y = mx + c（裁到畫面範圍內）。"""
        pts = []
        for x in (self.xmin, self.xmax):
            y = slope * x + intercept
            if self.ymin - 1 <= y <= self.ymax + 1:
                pts.append((x, y))
        for y in (self.ymin, self.ymax):
            if abs(slope) > 1e-9:
                x = (y - intercept) / slope
                if self.xmin - 1 <= x <= self.xmax + 1:
                    pts.append((x, y))
        if len(pts) >= 2:
            self.seg(pts[0][0], pts[0][1], pts[1][0], pts[1][1], color=color, width=width)

    def curve(self, fn, x1: float, x2: float, color: str = INK, width: float = 1.8,
              n: int = 140) -> None:
        """畫一段函數曲線 y = fn(x)（x 由 x1 到 x2）。

        只負責畫線；呼叫前要自己確保 y 落在畫面範圍內（否則會畫出畫布外）。
        """
        pts = []
        for i in range(n + 1):
            x = x1 + (x2 - x1) * i / float(n)
            pts.append("%.1f,%.1f" % (self.px(x), self.py(fn(x))))
        self.parts.append('<polyline points="%s" fill="none" stroke="%s" stroke-width="%.1f" '
                          'stroke-linejoin="round"/>' % (" ".join(pts), color, width))

    def vline(self, x: float, label: str = "") -> None:
        """垂直虛線（例如拋物線的對稱軸）。"""
        self.seg(x, self.ymin, x, self.ymax, color=INK, width=1.4, dash="4 3")
        if label:
            self.parts.append('<text x="%.1f" y="%.1f" font-size="11" fill="%s" font-family="%s">%s</text>'
                              % (self.px(x) + 5, self.py(self.ymax) + 14, INK, FONT, label))

    def svg(self) -> str:
        defs = ('<defs><marker id="ar-%s" viewBox="0 0 10 10" refX="9" refY="5" '
                'markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">'
                '<path d="M0,0 L10,5 L0,10 z" fill="%s"/></marker></defs>' % (self.key, INK))
        return ('<svg viewBox="0 0 %d %d" xmlns="http://www.w3.org/2000/svg" '
                'font-family="%s">%s%s</svg>' % (self.w, self.h, FONT, defs, "".join(self.parts)))


# ──────────────────────────────────────────────────────────────────────────
# 六張概念卡嘅圖
# ──────────────────────────────────────────────────────────────────────────
def fig_translation_left() -> str:
    """c1 圖一：A(−7, 3) 向左 6 單位 → A′(−13, 3)"""
    f = Frame(-15, 1, -4, 6, key="c1a")
    f.arrow(-7, 3, -13, 3)                                   # 向左 6
    f.point(-7, 3, "A(−7, 3)", dx=6, dy=-12)
    f.point(-13, 3, "A′(−13, 3)", hollow=True, dx=-8, dy=-12)
    f.text(-10, 1.9, "左 6", size=10.5, color=MID)
    return f.svg()


def fig_translation_up() -> str:
    """c1 圖二：B(−2, −6) 向上 3 單位 → B′(−2, −3)"""
    f = Frame(-8, 4, -9, 1, key="c1b")
    f.arrow(-2, -6, -2, -3)                                  # 向上 3
    f.point(-2, -6, "B(−2, −6)", dx=8, dy=18)
    f.point(-2, -3, "B′(−2, −3)", hollow=True, dx=8, dy=-8)
    f.text(-1.7, -4.6, "上 3", size=10.5, color=MID)
    return f.svg()


def fig_reflect_axes() -> str:
    """c2 對 y 軸反射：P(−4, 2) → P′(4, 2)"""
    f = Frame(-6, 6, -6, 6, key="c2")
    f.mirror_v(0, "y 軸（鏡軸）")
    f.seg(-4, 2, 0, 2, dash="4 3")
    f.seg(0, 2, 4, 2, dash="4 3")
    f.point(-4, 2, "P(−4, 2)")
    f.point(4, 2, "P′(4, 2)", hollow=True)
    f.text(-2.2, 1.35, "4", size=10.5, color=MID)      # 放喺虛線下面，避免同點標籤撞位
    f.text(1.9, 1.35, "4", size=10.5, color=MID)
    return f.svg()


def fig_reflect_line() -> str:
    """c3 對水平線反射：B(3, 2) 對 y = 6 → B′(3, 10)"""
    f = Frame(-1, 7, 0, 12, key="c3")
    f.mirror_h(6, "L：y = 6")
    f.seg(3, 2, 3, 10, dash="4 3")
    f.point(3, 2, "B(3, 2)")
    f.point(3, 10, "B′(3, 10)", hollow=True)
    f.text(3.35, 4, "4", size=10.5, color=MID)
    f.text(3.35, 8, "4", size=10.5, color=MID)
    return f.svg()


def fig_rotate90() -> str:
    """c4 旋轉 90°：A(4, 6) → A′(−6, 4)"""
    f = Frame(-8, 8, -8, 8, key="c4")
    f.seg(0, 0, 4, 6, color=MID, width=1.1)
    f.seg(0, 0, -6, 4, color=MID, width=1.1)
    f.arc(52, math.degrees(math.atan2(6, 4)), math.degrees(math.atan2(4, -6)), "90°")
    f.point(4, 6, "A(4, 6)")
    f.point(-6, 4, "A′(−6, 4)", hollow=True, dx=-6, dy=-10)
    return f.svg()


def fig_rotate180_270() -> str:
    """c5 180° 與 270°：同一個圓周上（旋轉唔改到原點嘅距離）"""
    f = Frame(-6, 6, -6, 6, key="c5")
    f.circle(math.sqrt(13))
    f.seg(0, 0, 3, 2, color=MID, width=1.1)
    f.seg(0, 0, -3, -2, color=MID, width=1.1)
    f.seg(0, 0, 2, -3, color=MID, width=1.1)
    f.point(3, 2, "P(3, 2)")
    f.point(-3, -2, "180°", hollow=True, dx=-10, dy=18)
    f.point(2, -3, "270°", hollow=True, dx=8, dy=18)
    return f.svg()


def fig_slope_perp() -> str:
    """c6 斜率與垂直：m₁ = 2、m₂ = −½"""
    # 原點附近有斜率三角形（1、2 兩個標籤），所以唔畫 O，避免疊字
    f = Frame(-6, 8, -6, 8, key="c6", show_o=False)
    f.line_by_eq(2, 0)                     # L1：y = 2x
    f.line_by_eq(-0.5, 0)                  # L2：y = −x/2
    # 斜率三角形（行 1、升 2）
    f.seg(0, 0, 1, 0, dash="3 2.5")
    f.seg(1, 0, 1, 2, dash="3 2.5")
    f.text(0.5, -0.85, "1", size=10, color=MID)
    f.text(1.35, 1, "2", size=10, color=MID)
    # 直角標記（原點處）
    u1 = (1 / math.sqrt(5), 2 / math.sqrt(5))          # L1 方向
    u2 = (2 / math.sqrt(5), -1 / math.sqrt(5))         # L2 方向
    k = 0.95
    p1 = (u1[0] * k, u1[1] * k)
    p2 = (u1[0] * k + u2[0] * k, u1[1] * k + u2[1] * k)
    p3 = (u2[0] * k, u2[1] * k)
    f.parts.append('<polygon points="%.1f,%.1f %.1f,%.1f %.1f,%.1f %.1f,%.1f" fill="none" '
                   'stroke="%s" stroke-width="1.2"/>'
                   % (f.px(0), f.py(0), f.px(p1[0]), f.py(p1[1]),
                      f.px(p2[0]), f.py(p2[1]), f.px(p3[0]), f.py(p3[1]), INK))
    f.text(2.8, 7.4, "L₁：m₁ = 2", size=11)
    f.text(-5.8, 3.4, "L₂：m₂ = −½", size=11)
    return f.svg()


# ──────────────────────────────────────────────────────────────────────────
# MC 題嘅圖：淨係畫「有需要」嘅題（變換題、兩次變換題、倒推題）
# 兩次變換嘅題目畫兩幅 —— 一次變換一幅，弱生逐步跟得住
# ──────────────────────────────────────────────────────────────────────────
def label_width(s: str, fs: float) -> float:
    """粗略估計文字闊度：中日韓全形字 1.0em、其他 0.55em。"""
    return sum(fs * (1.0 if ord(ch) > 0x2E80 else 0.55) for ch in s)


def frame_for(points, key: str = "q", pad: int = 3) -> Frame:
    """由一組點自動計出座標範圍（必定包埋原點，旋轉題要用）。

    範圍太闊時收窄留白，避免格仔太密（畫面得 260px）。
    """
    xs = [p[0] for p in points] + [0]
    ys = [p[1] for p in points] + [0]
    span = max(max(xs) - min(xs), max(ys) - min(ys))
    if span > 18:
        pad = 2
    return Frame(int(min(xs)) - pad, int(max(xs)) + pad,
                 int(min(ys)) - pad, int(max(ys)) + pad, key=key)


def _fmt(pt) -> str:
    return "(%d, %d)" % (pt[0], pt[1])


def reflect_v_fig(p, pi, xm, d, key, lp="", li="") -> str:
    """對垂直線 x = xm 反射：原本的點 p → 影像 pi，兩邊距離 d"""
    f = frame_for([p, pi, (xm, 0)], key=key, pad=4)
    f.mirror_v(xm, "L：x = %d" % xm)
    f.seg(p[0], p[1], pi[0], pi[1], dash="4 3")
    # 兩個點同一水平線 → 標籤一上（原本）一下（影像），「距離」放連線上面
    f.point(p[0], p[1], lp or _fmt(p), dy=-30)
    f.point(pi[0], pi[1], li or _fmt(pi), hollow=True, dy=20)
    f.text((p[0] + xm) / 2.0, p[1] + 1.0, str(d), size=10.5, color=MID)
    f.text((pi[0] + xm) / 2.0, p[1] + 1.0, str(d), size=10.5, color=MID)
    return f.svg()


def reflect_h_fig(p, pi, ym, d, key, lp="", li="") -> str:
    """對水平線 y = ym 反射：原本的點 p → 影像 pi，兩邊距離 d"""
    f = frame_for([p, pi, (0, ym)], key=key, pad=4)
    f.mirror_h(ym, "L：y = %d" % ym)
    f.seg(p[0], p[1], pi[0], pi[1], dash="4 3")
    # 原本的點放下面、影像放上面（避免同「距離」標籤撞位）
    f.point(p[0], p[1], lp or _fmt(p), dy=20)
    f.point(pi[0], pi[1], li or _fmt(pi), hollow=True, dy=-10)
    f.text(p[0] - 0.75, (p[1] + ym) / 2.0, str(d), size=10.5, color=MID)
    f.text(p[0] - 0.75, (pi[1] + ym) / 2.0, str(d), size=10.5, color=MID)
    return f.svg()


def translate_fig(p, pi, note, key, lp="", li="") -> str:
    """平移：p → pi，箭嘴旁寫 note（例如「左 4」）"""
    f = frame_for([p, pi], key=key)
    f.arrow(p[0], p[1], pi[0], pi[1])
    horizontal = abs(pi[0] - p[0]) >= abs(pi[1] - p[1])
    # 橫向平移：兩個點可能淨係差 1 格 → 兩個標籤一上一下（高度唔同）＋註解放箭嘴下面
    f.point(p[0], p[1], lp or _fmt(p), dy=-14 if horizontal else -10)
    f.point(pi[0], pi[1], li or _fmt(pi), hollow=True, dy=-28 if horizontal else -10)
    mx, my = (p[0] + pi[0]) / 2.0, (p[1] + pi[1]) / 2.0
    if horizontal:                                     # 橫向 → 註解放箭嘴下面
        f.text(mx, my - 0.85, note, size=10.5, color=MID)
    else:                                              # 縱向 → 註解放右邊
        f.text(mx + 0.35, my, note, size=10.5, color=MID)
    return f.svg()


def rotate_fig(p, pi, t1, t2, note, key, lp="", li="") -> str:
    """繞原點旋轉：p → pi，弧形箭嘴由角度 t1 畫到 t2（數學角，逆時針為正）"""
    f = frame_for([p, pi], key=key)
    f.seg(0, 0, p[0], p[1], color=MID, width=1.1)
    f.seg(0, 0, pi[0], pi[1], color=MID, width=1.1)
    f.arc(46, t1, t2, note)
    f.point(p[0], p[1], lp or _fmt(p))
    f.point(pi[0], pi[1], li or _fmt(pi), hollow=True)
    return f.svg()


def _ang(x, y) -> float:
    return math.degrees(math.atan2(y, x))


# ──────────────────────────────────────────────────────────────────────────
# 長題示範（WS04）：一幅圖配題解的一步
#   每幅圖都標明 step（1 起算）＝題解的第幾步；前端逐步揭示題解時，
#   圖就會跟住那一步出場，弱生唔會一次過被兩三個變換淹沒。
# ──────────────────────────────────────────────────────────────────────────
def _du(f: Frame, px_off: float) -> float:
    """把像素偏移換成資料單位（每幅圖縮放不同，唔可以寫死）。"""
    return px_off / f.scale


def _right_angle(f: Frame, pt, d1, d2, k: float = 0.7) -> None:
    """在 pt 畫直角標記；d1、d2 是兩條線的單位方向向量。"""
    a = (pt[0] + d1[0] * k, pt[1] + d1[1] * k)
    b = (pt[0] + (d1[0] + d2[0]) * k, pt[1] + (d1[1] + d2[1]) * k)
    c = (pt[0] + d2[0] * k, pt[1] + d2[1] * k)
    f.parts.append('<polygon points="%.1f,%.1f %.1f,%.1f %.1f,%.1f %.1f,%.1f" fill="none" '
                   'stroke="%s" stroke-width="1.2"/>'
                   % (f.px(pt[0]), f.py(pt[1]), f.px(a[0]), f.py(a[1]),
                      f.px(b[0]), f.py(b[1]), f.px(c[0]), f.py(c[1]), INK))


def long_ex01_s1() -> str:
    """EX1 第 1 步：A(9, −13) 逆時針轉 90° → A′(13, 9)"""
    f = Frame(-2, 15, -15, 11, key="ex1a", show_o=False)
    du = _du(f, 8)
    f.seg(0, 0, 9, -13, color=MID, width=1.1)
    f.seg(0, 0, 13, 9, color=MID, width=1.1)
    f.arc(46, _ang(9, -13), _ang(13, 9), "90°")
    f.point(9, -13, "A(9, −13)")
    f.point(13, 9, "A′(13, 9)", hollow=True, dx=-8, dy=-12)
    f.text(-du, du, "O", size=10, color=AXIS)      # 手動放 O，避開弧形標籤
    return f.svg()


def long_ex01_s2() -> str:
    """EX1 第 2 步：B(−7, 5) 對 y 軸反射 → B′(7, 5)"""
    f = Frame(-10, 10, -5, 10, key="ex1b")
    f.mirror_v(0)                                  # 粗黑線＝鏡軸（就係 y 軸）
    f.seg(-7, 5, 7, 5, dash="4 3")
    f.point(-7, 5, "B(−7, 5)", dy=-30)
    f.point(7, 5, "B′(7, 5)", hollow=True, dy=24)
    f.text(-9.5, 9.5, "y 軸（鏡軸）", size=11)
    f.text(-3.5, 6.0, "7", size=10.5, color=MID)
    f.text(3.3, 6.0, "7", size=10.5, color=MID)
    return f.svg()


def long_ex01_s3() -> str:
    """EX1 第 3 步：A′B′ 的斜率（水平 6、垂直 4）"""
    f = Frame(-2, 16, -2, 12, key="ex1c")
    f.line_by_eq(2.0 / 3.0, 1.0 / 3.0)
    f.seg(7, 5, 13, 5, dash="3 2.5")
    f.seg(13, 5, 13, 9, dash="3 2.5")
    f.point(13, 9, "A′(13, 9)", dx=8, dy=-12)
    f.point(7, 5, "B′(7, 5)", dx=8, dy=-12)
    f.text(9.4, 4.6, "6", size=10.5, color=MID)
    f.text(13.3, 7.2, "4", size=10.5, color=MID)
    return f.svg()


def long_ex02_s1() -> str:
    """EX2 第 1 步：順 270° ＝ 逆 90°，R(−5, −3) → R′(3, −5)"""
    f = Frame(-9, 7, -9, 4, key="ex2a")
    f.seg(0, 0, -5, -3, color=MID, width=1.1)
    f.seg(0, 0, 3, -5, color=MID, width=1.1)
    f.arc(44, _ang(-5, -3), _ang(3, -5), "90°")
    f.point(-5, -3, "R(−5, −3)", dx=-8, dy=-12)
    f.point(3, -5, "R′(3, −5)", hollow=True, dx=-8, dy=20)
    return f.svg()


def long_ex02_s2() -> str:
    """EX2 第 2 步：R′ 與 S′（旋轉 + 平移）"""
    f = Frame(-16, 6, -8, 9, key="ex2b")
    f.seg(0, 0, -5, -3, color=MID, width=1.1, dash="3 2.5")
    f.seg(0, 0, 3, -5, color=MID, width=1.1, dash="3 2.5")
    f.arrow(0, 5, -13, 5)                          # S 向左 13
    f.point(-5, -3, "R(−5, −3)", dx=-8, dy=-14)
    f.point(3, -5, "R′(3, −5)", hollow=True, dx=8, dy=10)
    f.point(0, 5, "S(0, 5)", dx=8, dy=-10)
    f.point(-13, 5, "S′(−13, 5)", hollow=True, dx=-8, dy=-10)
    f.text(-8.5, 4.1, "左 13", size=10.5, color=MID)
    return f.svg()


def long_ex02_s3() -> str:
    """EX2 第 3 步：RS 與 R′S′ 的斜率（RS 畫斜率三角形 5、8）"""
    f = Frame(-16, 6, -8, 9, key="ex2c")
    f.seg(-5, -3, 0, 5, color=INK, width=1.6)      # RS
    f.seg(3, -5, -13, 5, color=INK, width=1.6)     # R′S′
    f.seg(-5, -3, 0, -3, dash="3 2.5")             # 水平 5
    f.seg(0, -3, 0, 5, dash="3 2.5")               # 垂直 8
    f.point(-5, -3, "R(−5, −3)", dx=-8, dy=-10)
    f.point(0, 5, "S(0, 5)", dx=8, dy=-10)
    f.point(3, -5, "R′(3, −5)", hollow=True, dx=8, dy=12)
    f.point(-13, 5, "S′(−13, 5)", hollow=True, dx=-8, dy=-10)
    f.text(-2.5, -3.9, "5", size=10.5, color=MID)
    f.text(0.4, 1.0, "8", size=10.5, color=MID)
    return f.svg()


def long_ex02_s4() -> str:
    """EX2 第 4 步：兩斜率相乘 = −1 → RS ⟂ R′S′（畫直角標記）"""
    f = Frame(-16, 6, -8, 9, key="ex2d")
    f.seg(-5, -3, 0, 5, color=INK, width=1.6)
    f.seg(3, -5, -13, 5, color=INK, width=1.6)
    _right_angle(f, (-3.652, -0.843), (0.530, 0.848), (-0.848, 0.530))
    f.point(-5, -3, "R(−5, −3)", dx=-8, dy=-10)
    f.point(0, 5, "S(0, 5)", dx=8, dy=-10)
    f.point(3, -5, "R′(3, −5)", hollow=True, dx=8, dy=12)
    f.point(-13, 5, "S′(−13, 5)", hollow=True, dx=-8, dy=-10)
    return f.svg()


def long_ex03_s1() -> str:
    """EX3 第 1 步：P(4, 2) 向左 3 單位 → P′(1, 2)"""
    f = Frame(-2, 7, -2, 5, key="ex3a")
    f.arrow(4, 2, 1, 2)
    f.point(4, 2, "P(4, 2)", dx=8, dy=-12)
    f.point(1, 2, "P′(1, 2)", hollow=True, dx=-8, dy=-12)
    f.text(2.4, 1.1, "左 3", size=10.5, color=MID)
    return f.svg()


def long_ex03_s2() -> str:
    """EX3 第 2 步：Q(6, 5) 逆時針轉 90° → Q′(−5, 6)"""
    f = Frame(-8, 8, 0, 8, key="ex3b")
    f.seg(0, 0, 6, 5, color=MID, width=1.1)
    f.seg(0, 0, -5, 6, color=MID, width=1.1)
    f.arc(44, _ang(6, 5), _ang(-5, 6), "90°")
    f.point(6, 5, "Q(6, 5)", dx=8, dy=-12)
    f.point(-5, 6, "Q′(−5, 6)", hollow=True, dx=-8, dy=-12)
    return f.svg()


def long_ex03_s3() -> str:
    """EX3 第 3 步：PQ 與 P′Q′ 的斜率（PQ 畫斜率三角形 2、3）"""
    f = Frame(-8, 9, -2, 9, key="ex3c")
    f.seg(4, 2, 6, 5, color=INK, width=1.6)        # PQ
    f.seg(1, 2, -5, 6, color=INK, width=1.6)       # P′Q′
    f.seg(4, 2, 6, 2, dash="3 2.5")                # 水平 2
    f.seg(6, 2, 6, 5, dash="3 2.5")                # 垂直 3
    f.point(4, 2, "P(4, 2)", dx=8, dy=14)
    f.point(6, 5, "Q(6, 5)", dx=8, dy=-12)
    f.point(1, 2, "P′(1, 2)", hollow=True, dx=-8, dy=-12)
    f.point(-5, 6, "Q′(−5, 6)", hollow=True, dx=-8, dy=-12)
    f.text(5.0, 2.9, "2", size=10.5, color=MID)
    f.text(6.35, 3.4, "3", size=10.5, color=MID)
    return f.svg()


def long_ex03_s4() -> str:
    """EX3 第 4 步：兩斜率相乘 = −1 → PQ ⟂ P′Q′（畫直角標記）"""
    f = Frame(-8, 9, -2, 9, key="ex3d")
    f.seg(4, 2, 6, 5, color=INK, width=1.6)
    f.seg(1, 2, -5, 6, color=INK, width=1.6)
    _right_angle(f, (3.077, 0.615), (2 / 3.606, 3 / 3.606), (-6 / 7.211, 4 / 7.211))
    f.point(4, 2, "P(4, 2)", dx=8, dy=-12)
    f.point(6, 5, "Q(6, 5)", dx=8, dy=-12)
    f.point(1, 2, "P′(1, 2)", hollow=True, dx=-8, dy=22)
    f.point(-5, 6, "Q′(−5, 6)", hollow=True, dx=-8, dy=-12)
    return f.svg()


# ──────────────────────────────────────────────────────────────────────────
# WS04 過渡題（Bridging）：單一動作各一幅，先建立「左減右加」、「對邊軸反射」、
# 「90° 調位變號」、「180° 兩個號一齊改」的直覺。
# ──────────────────────────────────────────────────────────────────────────
def bridge_ws04_w1() -> str:
    """W01 平移：向左 4 單位 (3, −5) → P(−1, −5)"""
    f = Frame(-4, 6, -9, 4, key="bw1")
    f.arrow(3, -5, -1, -5)
    f.point(3, -5, "(3, −5)", dy=-26)
    f.point(-1, -5, "P(−1, −5)", hollow=True, dy=-40)
    f.text(0.1, -3.6, "左 4", size=10.5, color=MID)
    return f.svg()


def bridge_ws04_w2() -> str:
    """W02 對 x 軸反射：(−4, 7) → (−4, −7)"""
    f = Frame(-9, 3, -9, 9, key="bw2")
    f.seg(f.xmin, 0, f.xmax, 0, color=INK, width=2.6)    # 加粗＝鏡軸（就是 x 軸）
    f.text(0.6, 1.7, "鏡軸", size=11)
    f.seg(-4, 7, -4, -7, dash="4 3")
    f.point(-4, 7, "(−4, 7)", dy=-12)
    f.point(-4, -7, "(−4, −7)", hollow=True, dy=20)
    f.text(-3.55, 3.4, "7", size=10.5, color=MID)
    f.text(-3.55, -3.4, "7", size=10.5, color=MID)
    return f.svg()


def bridge_ws04_w3() -> str:
    """W03 逆時針 90°：(2, 5) → R(−5, 2)"""
    f = Frame(-8, 5, -6, 8, key="bw3", show_o=False)
    du = _du(f, 8)
    f.seg(0, 0, 2, 5, color=MID, width=1.1)
    f.seg(0, 0, -5, 2, color=MID, width=1.1)
    f.arc(44, _ang(2, 5), _ang(-5, 2), "90°")
    f.point(2, 5, "(2, 5)")
    f.point(-5, 2, "R(−5, 2)", hollow=True, dx=-8, dy=-12)
    f.text(-du, du, "O", size=10, color=AXIS)          # 手動放 O，避開弧形標籤
    return f.svg()


def bridge_ws04_w4() -> str:
    """W04 旋轉 180°：(−6, 1) → S(6, −1)"""
    f = Frame(-9, 9, -5, 5, key="bw4", show_o=False)
    du = _du(f, 8)
    f.seg(0, 0, -6, 1, color=MID, width=1.1)
    f.seg(0, 0, 6, -1, color=MID, width=1.1)
    f.arc(40, _ang(-6, 1), _ang(-6, 1) + 180, "180°")
    f.point(-6, 1, "(−6, 1)", dx=-8, dy=-12)
    f.point(6, -1, "S(6, −1)", hollow=True, dx=8, dy=12)
    f.text(-du, du, "O", size=10, color=AXIS)
    return f.svg()


# ──────────────────────────────────────────────────────────────────────────
# WS06（函數與圖像）：二次函數圖像 —— 開口方向、y 截距、x 截距與對稱軸、頂點
#   拋物線用 curve() 畫；對稱軸用 vline() 畫成垂直虛線。
#   標籤盡量少：一個圖形文字 ＋ 一個關鍵點標籤，其餘交給圖下面的說明。
# ──────────────────────────────────────────────────────────────────────────
def fig_ws06_c2_up() -> str:
    """c2 圖一：a>0 開口向上，y 截距 = c"""
    f = Frame(-4, 4, -3, 4, key="c2a")
    f.curve(lambda x: 0.5 * x * x - 2, -3.2, 3.2)
    f.point(0, -2, "c", dx=8, dy=16)
    f.text(-3.6, 3.4, "a > 0")
    return f.svg()


def fig_ws06_c2_down() -> str:
    """c2 圖二：a<0 開口向下，y 截距 = c"""
    f = Frame(-4, 4, -4, 4, key="c2b")
    f.curve(lambda x: -0.5 * x * x + 2, -3.2, 3.2)
    f.point(0, 2, "c", dx=8, dy=-12)
    f.text(-3.6, 3.4, "a &lt; 0")
    return f.svg()


def fig_ws06_c3() -> str:
    """c3：兩個 x 截距 α、β → 對稱軸 x = (α+β)/2、頂點在中間"""
    f = Frame(-1, 7, -5, 7, key="c3")
    f.curve(lambda x: (x - 1) * (x - 5), 0.2, 5.8)
    f.vline(3)
    f.point(1, 0, "α")
    f.point(5, 0, "β")
    f.point(3, -4, "vertex", dx=8, dy=-10)
    f.text(3.2, 6.4, "x = 3")
    return f.svg()


def fig_ws06_c4() -> str:
    """c4：頂點式 y = a(x−h)²+k，頂點 (h, k)、對稱軸 x = h"""
    f = Frame(-2, 6, -5, 5, key="c4")
    f.curve(lambda x: 0.8 * (x - 2) ** 2 - 4, -1.3, 5.3)
    f.vline(2)
    f.point(2, -4, "(h, k)", dx=8, dy=-10)
    f.text(2.3, 4.4, "x = h")
    return f.svg()


def fig_ws06_c6() -> str:
    """c6：a<0 時的最大值 k（頂點的 y 座標）"""
    f = Frame(-2, 6, -5, 5, key="c6")
    f.curve(lambda x: -0.8 * (x - 2) ** 2 + 4, -1.32, 5.32)
    f.vline(2)
    f.point(2, 4, "(h, k)", dx=8, dy=-10)
    f.text(-1.6, 4.2, "max. = k")
    return f.svg()


def fig_ws06_q06() -> str:
    """q06：y=(x+h)²+k，頂點在第四象限 → h<0、k<0"""
    f = Frame(0, 7, -5, 6, key="w6q6")
    f.curve(lambda x: (x - 3) ** 2 - 4, 0.3, 5.7)
    f.vline(3)
    f.point(3, -4, "vertex", dx=8, dy=-10)
    f.text(0.35, 5.4, "y = (x + h)² + k")
    return f.svg()


def fig_ws06_q13() -> str:
    """q13：y=p(x+q)² 開口向下、頂點在 y 軸左邊 → p<0、q>0"""
    f = Frame(-5, 3, -6, 4, key="w6q13")
    f.curve(lambda x: -0.5 * (x + 2) ** 2, -5, 1)
    f.vline(-2)
    f.point(-2, 0, "vertex", dx=8, dy=16)
    f.text(-4.8, 3.4, "y = p(x + q)²")
    return f.svg()


FIGURES = {
    "ws04-c1": [(fig_translation_left, "A(−7, 3) 向左 6 單位 → A′(−13, 3)"),
                (fig_translation_up, "B(−2, −6) 向上 3 單位 → B′(−2, −3)")],
    "ws04-c2": [(fig_reflect_axes, "對 y 軸反射：x 變號、y 不變")],
    "ws04-c3": [(fig_reflect_line, "對水平線 y = 6 反射：距離要乘 2")],
    "ws04-c4": [(fig_rotate90, "逆時針 90°：(x, y) → (−y, x)")],
    "ws04-c5": [(fig_rotate180_270, "180° 與 270°：三個位置都喺同一個圓周上")],
    "ws04-c6": [(fig_slope_perp, "m₁ × m₂ = −1 → 兩條線互相垂直")],

    # ── MC 題（一次變換一幅；兩次變換就畫兩幅）──
    "eph-ws04-q01": [(lambda: rotate_fig((-7, -2), (-2, 7), _ang(-7, -2), _ang(-7, -2) + 270,
                                         "270°", "q1", "P(−7, −2)", "(−2, 7)"),
                      "逆時針 270° = 順時針 90°：(x, y) → (y, −x)")],
    "eph-ws04-q02": [(lambda: reflect_v_fig((4, -4), (0, -4), 2, 2, "q2", "A(4, −4)", "B(0, −4)"),
                      "對 x = 2 反射：A 與 B 的距離 = 2 + 2 = 4")],
    "eph-ws04-q03": [(lambda: reflect_v_fig((3, 5), (-7, 5), -2, 5, "q3", "(3, 5)", "(−7, 5)"),
                      "對 x = −2 反射：影像的 x 座標 = −7")],
    "eph-ws04-q04": [(lambda: reflect_h_fig((8, -9), (8, -1), -5, 4, "q4", "(8, −9)", "(8, −1)"),
                      "對 y = −5 反射：影像的 y 座標 = −1")],
    "eph-ws04-q05": [(lambda: rotate_fig((-2, -5), (5, -2), _ang(-2, -5), _ang(-2, -5) + 90,
                                         "90°", "q5a", "P(−2, −5)", "Q(5, −2)"),
                      "第一步：順時針 270° = 逆時針 90° → Q(5, −2)"),
                     (lambda: translate_fig((5, -2), (1, -2), "左 4", "q5b", "Q(5, −2)", "R(1, −2)"),
                      "第二步：向左 4 單位 → R 的 x 座標 = 1")],
    "eph-ws04-q06": [(lambda: translate_fig((8, -8), (9, -8), "右 1", "q6a", "D(8, −8)", "E(9, −8)"),
                      "第一步：向右 1 單位 → E(9, −8)"),
                     (lambda: rotate_fig((9, -8), (-9, 8), _ang(9, -8), _ang(9, -8) + 180,
                                         "180°", "q6b", "E(9, −8)", "F(−9, 8)"),
                      "第二步：逆時針 180°（兩個座標都變號）→ F(−9, 8)")],
    "eph-ws04-q07": [(lambda: reflect_h_fig((-2, -1), (-2, 1), 0, 1, "q7a", "A(−2, −1)", "B(−2, 1)"),
                      "第一步：對 x 軸反射 → B(−2, 1)"),
                     (lambda: rotate_fig((-2, 1), (-1, -2), _ang(-2, 1), _ang(-2, 1) + 90,
                                         "90°", "q7b", "B(−2, 1)", "C(−1, −2)"),
                      "第二步：逆時針 90° → C 的 x 座標 = −1")],
    "eph-ws04-q08": [(lambda: rotate_fig((1, 4), (-4, 1), _ang(1, 4), _ang(1, 4) + 90,
                                         "90°", "q8a", "R(1, 4)", "S(−4, 1)"),
                      "第一步：順時針 270° = 逆時針 90° → S(−4, 1)"),
                     (lambda: reflect_v_fig((-4, 1), (4, 1), 0, 4, "q8b", "S(−4, 1)", "T(4, 1)"),
                      "第二步：對 y 軸反射 → T 的 y 座標 = 1")],
    "eph-ws04-q09": [(lambda: translate_fig((-6, -1), (-6, 2), "上 3", "q9a", "A(−6, −1)", "B(−6, 2)"),
                      "第一步：向上 3 單位 → B(−6, 2)"),
                     (lambda: reflect_v_fig((-6, 2), (-2, 2), -4, 2, "q9b", "B(−6, 2)", "(−2, 2)"),
                      "第二步：對 x = −4 反射 → 影像 = (−2, 2)")],
    "eph-ws04-q10": [(lambda: reflect_h_fig((3, -4), (3, 2), -1, 3, "q10a", "D(3, −4)", "E(3, 2)"),
                      "第一步：對 y = −1 反射 → E(3, 2)"),
                     (lambda: translate_fig((3, 2), (1, 2), "左 2", "q10b", "E(3, 2)", "F(1, 2)"),
                      "第二步：向左 2 單位 → F(1, 2)")],
    "eph-ws04-q11": [(lambda: reflect_v_fig((-4, -6), (4, -6), 0, 4, "q11a", "影像(−4, −6)", "Q(4, −6)"),
                      "倒推第一步：影像反射返轉頭 → Q(4, −6)"),
                     (lambda: translate_fig((4, -6), (14, -6), "右 10", "q11b", "Q(4, −6)", "P(14, −6)"),
                      "倒推第二步：Q 向右 10 單位 → P(14, −6)")],
    "eph-ws04-q12": [(lambda: translate_fig((5, -8), (5, -14), "下 6", "q12a", "已知(5, −8)", "B(5, −14)"),
                      "倒推第一步：由 (5, −8) 向下 6 → B(5, −14)"),
                     (lambda: rotate_fig((5, -14), (-14, -5), _ang(5, -14), _ang(5, -14) - 90,
                                         "90°", "q12b", "B(5, −14)", "A(−14, −5)"),
                      "倒推第二步：順時針 90°（逆 90° 的反向）→ A(−14, −5)")],

    # ── 長題示範（WS04）：一幅圖配題解的一步（第三個元素＝step，1 起算）──
    "eph-ws04-ex01": [(long_ex01_s1, "第 1 步：A(9, −13) 逆時針轉 90° → A′(13, 9)", 1),
                      (long_ex01_s2, "第 2 步：B(−7, 5) 對 y 軸反射 → B′(7, 5)", 2),
                      (long_ex01_s3, "第 3 步：A′(13, 9)、B′(7, 5) 的斜率 = 2/3", 3)],
    "eph-ws04-ex02": [(long_ex02_s1, "第 1 步：順 270° ＝ 逆 90°：R(−5, −3) → R′(3, −5)", 1),
                      (long_ex02_s2, "第 2 步：R′(3, −5)；S 向左 13 → S′(−13, 5)", 2),
                      (long_ex02_s3, "第 3 步：m(RS) = 8/5、m(R′S′) = −5/8", 3),
                      (long_ex02_s4, "第 4 步：8/5 × (−5/8) = −1 → RS ⟂ R′S′", 4)],
    "eph-ws04-ex03": [(long_ex03_s1, "第 1 步：P(4, 2) 向左 3 單位 → P′(1, 2)", 1),
                      (long_ex03_s2, "第 2 步：Q(6, 5) 逆時針轉 90° → Q′(−5, 6)", 2),
                      (long_ex03_s3, "第 3 步：m(PQ) = 3/2、m(P′Q′) = −2/3", 3),
                      (long_ex03_s4, "第 4 步：3/2 × (−2/3) = −1 → PQ ⟂ P′Q′", 4)],

    # ── WS04 過渡題：單一變換各一幅 ──
    "eph-ws04-w01": [(bridge_ws04_w1, "向左 4 單位：x 減 4，y 不變（3, −5）→ P(−1, −5)")],
    "eph-ws04-w02": [(bridge_ws04_w2, "對 x 軸反射：x 不變、y 變號（−4, 7）→ (−4, −7)")],
    "eph-ws04-w03": [(bridge_ws04_w3, "逆時針 90°：(x, y) → (−y, x)，(2, 5) → R(−5, 2)")],
    "eph-ws04-w04": [(bridge_ws04_w4, "180° 旋轉：(x, y) → (−x, −y)，(−6, 1) → S(6, −1)")],

    # ── WS06（函數與圖像）：概念卡 4 幅 ＋ MC 2 幅 ──
    "ws06-c2": [(fig_ws06_c2_up, "$a>0$：開口向上；與 $y$ 軸交於 $c$（這裡 $c<0$）"),
                (fig_ws06_c2_down, "$a<0$：開口向下；$y$ 截距仍是 $c$（這裡 $c>0$）")],
    "ws06-c3": [(fig_ws06_c3, "兩個 $x$ 截距 $\\alpha$、$\\beta$ 的中間就是對稱軸：$x=3$（$\\frac{1+5}{2}$）")],
    "ws06-c4": [(fig_ws06_c4, "頂點式：對稱軸 $x=h$、頂點 $(h,\\ k)$（圖中 $h=2$、$k=-4$）")],
    "ws06-c6": [(fig_ws06_c6, "開口向下（$a<0$）→ 函數的最大值就是頂點的 $y$ 座標 $k$")],
    "eph-ws06-q06": [(fig_ws06_q06, "頂點在右下方（第四象限）：$x$ 座標 $>0$ → $-h>0$；$y$ 座標 $<0$ → $k<0$")],
    "eph-ws06-q13": [(fig_ws06_q13, "開口向下（$p<0$）；頂點在 $y$ 軸左邊（$-q<0$）→ $q>0$")],
}


def main() -> int:
    out: dict[str, list[dict]] = {}
    for cid, items in FIGURES.items():
        figs = []
        for it in items:
            fn, cap = it[0], it[1]
            fig = {"svg": fn(), "caption": cap}
            if len(it) > 2 and it[2] is not None:   # 長題示範：標明屬於第幾步
                fig["step"] = int(it[2])
            figs.append(fig)
        out[cid] = figs
    with io.open(OUT, "w", encoding="utf-8") as f:
        json.dump({"_note": "自動產生（python tools/make_learn_figures.py），請勿手改。"
                            "一張卡可以有多幅圖（例如變換多於一次）；"
                            "長題示範的圖帶 step＝題解的第幾步（逐步揭示時出場）",
                   "figures": out}, f, ensure_ascii=False, indent=1)
        f.write("\n")
    n = sum(len(v) for v in out.values())
    print("已產生 %d 張示意圖（%d 幅圖） → data/learn/figures.json"
          % (len(out), n))
    for k, v in out.items():
        print("  %-10s %d 幅  %s" % (k, len(v), "／".join(
            ("%.1f KB" % (x["svg"].__len__() / 1024.0)) for x in v)))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
