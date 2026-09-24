r"""發布治理：批次狀態、已發放邊界、收回記錄。

`data/releases.json` 每個批次可用的欄位（全部可選，舊資料不必改）：

    date          "YYYY-MM-DD"，發放日
    batch         批次號
    ids           當天的題目 id（建議 3 題）
    status        published（缺省值）| scheduled（未到不發）| withdrawn（整批收回）
    withdrawnIds  單題收回：該批其餘照常發放，這幾題顯示「已收回」
    notice        給學生的更正公告 {"en": ..., "zh": ...}
    history       操作記錄（append_history() 追加）；只給教師端，不進公開資料檔

邊界規則（as_of 預設今天）：
    未到日期或 status=scheduled  → 學生完全看不到（題目與解答根本不輸出到網站檔案）
    status=withdrawn            → 批次條目保留（Archive 顯示「已收回」），題目／解答不輸出
    withdrawnIds 內的題目        → 該批其餘照常，這題顯示「已收回」佔位

三個地方共用這支模組：make_site_data.py（切發布邊界）、panel_server.py（發布管理）、
site_check.js 的資料契約（以 JSON 欄位為準）。
"""
from __future__ import annotations

import datetime
import io
import json
import os
import sys

def _utf8(stream):
    """把 stdout/stderr 轉成 UTF-8；已經轉過就原樣回傳（避免重複包裝把底層 buffer 關掉）。"""
    if not hasattr(stream, "buffer"):
        return stream
    if (getattr(stream, "encoding", "") or "").lower().replace("-", "") == "utf8":
        return stream
    try:
        return io.TextIOWrapper(stream.buffer, encoding="utf-8", errors="replace")
    except (ValueError, AttributeError):
        return stream


sys.stdout = _utf8(sys.stdout)
sys.stderr = _utf8(sys.stderr)

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(BASE, "data")

PUBLISHED = "published"
SCHEDULED = "scheduled"
WITHDRAWN = "withdrawn"
KNOWN_STATUS = (PUBLISHED, SCHEDULED, WITHDRAWN)


def today_iso(as_of: str | None = None) -> str:
    return as_of or datetime.date.today().isoformat()


def load_json(path: str, default):
    if not os.path.exists(path):
        return default
    with open(path, encoding="utf-8-sig") as f:
        return json.load(f)


def releases_path() -> str:
    return os.path.join(DATA, "releases.json")


def load_releases(path: str | None = None) -> dict:
    doc = load_json(path or releases_path(), {"version": 1, "releases": []})
    doc.setdefault("releases", [])
    return doc


def save_releases(doc: dict, path: str | None = None) -> str:
    p = path or releases_path()
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        json.dump(doc, f, ensure_ascii=False, indent=1)
        f.write("\n")
    return p


def status_of(r: dict) -> str:
    """批次狀態；缺省視為已發放（相容舊資料）。"""
    s = str(r.get("status") or PUBLISHED).strip().lower()
    return s if s in KNOWN_STATUS else PUBLISHED


def date_of(r: dict) -> str:
    return str(r.get("date") or "")


def held_ids(r: dict) -> set[str]:
    """該批被單題收回的題目。"""
    return {str(i) for i in (r.get("withdrawnIds") or [])}


def ids_of(r: dict) -> list[str]:
    return [str(i) for i in (r.get("ids") or [])]


def is_visible(r: dict, as_of: str | None = None) -> bool:
    """學生端的 Archive 是否看得到這個批次（已收回的也看得到，顯示為「已收回」）。"""
    if date_of(r) > today_iso(as_of):
        return False
    return status_of(r) in (PUBLISHED, WITHDRAWN)


def is_live(r: dict, as_of: str | None = None) -> bool:
    """批次是否正在發放中（可作答）。"""
    return status_of(r) == PUBLISHED and date_of(r) <= today_iso(as_of)


def live_qids(releases: list[dict], as_of: str | None = None) -> tuple[set[str], set[str], set[str]]:
    """回傳 (可作答, 已收回, 未發放) 三組題目 id。

    可作答：公開／已到期的批次中，未被單題收回的題目 → 題目與解答會輸出到網站。
    已收回：整批收回或單題收回 → 學生看到「已收回」佔位，內容不輸出。
    未發放：未到期或 status=scheduled → 學生完全看不到。
    """
    live: set[str] = set()
    revoked: set[str] = set()
    pending: set[str] = set()
    for r in releases:
        ids = ids_of(r)
        if status_of(r) == SCHEDULED or date_of(r) > today_iso(as_of):
            pending.update(ids)
            continue
        if status_of(r) == WITHDRAWN:
            revoked.update(ids)
            continue
        held = held_ids(r)
        for qid in ids:
            (revoked if qid in held else live).add(qid)
    # 同一題若同時出現在多處，以「可作答」優先（避免已發放的題被另一批收回連累）
    revoked -= live
    pending -= live | revoked
    return live, revoked, pending


def slim_release(r: dict) -> dict:
    """輸出到公開資料檔的批次欄位（去掉教師端的 history）。"""
    out = {k: v for k, v in r.items() if k != "history"}
    out["status"] = status_of(r)
    if held_ids(r):
        out["withdrawnIds"] = sorted(held_ids(r))
    return out


def append_history(r: dict, action: str, note: str, scope: str = "batch",
                   qid: str | None = None, by: str = "teacher") -> None:
    """記錄一次操作（誰、何時、為何），供審計與回溯。"""
    r.setdefault("history", []).append({
        "at": datetime.datetime.now().replace(microsecond=0).isoformat(),
        "action": action,          # publish | withdraw | restore | reschedule | swap | notice
        "scope": scope,            # batch | question
        "id": qid,
        "note": note,
        "by": by,
    })


def find_batch(releases: list[dict], batch: int | None = None, date: str | None = None,
               qid: str | None = None) -> dict | None:
    """依批次號／日期／題目 id 找批次。"""
    for r in releases:
        if batch is not None and int(r.get("batch") or 0) == int(batch):
            return r
        if date and date_of(r) == date:
            return r
        if qid and qid in ids_of(r):
            return r
    return None


def summary(releases: list[dict], as_of: str | None = None) -> dict:
    """發布狀態摘要（面板與生成腳本都用這個）。"""
    live, revoked, pending = live_qids(releases, as_of)
    return {
        "batches": len(releases),
        "liveBatches": sum(1 for r in releases if is_live(r, as_of)),
        "withdrawnBatches": sum(1 for r in releases if status_of(r) == WITHDRAWN),
        "scheduledBatches": sum(1 for r in releases if status_of(r) == SCHEDULED
                                or date_of(r) > today_iso(as_of)),
        "liveQuestions": len(live),
        "revokedQuestions": len(revoked),
        "pendingQuestions": len(pending),
        "asOf": today_iso(as_of),
    }


def main() -> int:
    """命令列：python tools/release_model.py [--as-of YYYY-MM-DD]"""
    as_of = None
    args = sys.argv[1:]
    if "--as-of" in args:
        as_of = args[args.index("--as-of") + 1]
    doc = load_releases()
    s = summary(doc["releases"], as_of)
    print(f"基準日 {s['asOf']}：批次 {s['batches']}（發放中 {s['liveBatches']}、"
          f"已收回 {s['withdrawnBatches']}、未發放 {s['scheduledBatches']}）")
    print(f"題目：可作答 {s['liveQuestions']}、已收回 {s['revokedQuestions']}、"
          f"未發放 {s['pendingQuestions']}")
    for r in doc["releases"]:
        st = status_of(r)
        held = held_ids(r)
        mark = {"published": "●", "withdrawn": "✕", "scheduled": "○"}[st]
        tail = f"  收回 {len(held)} 題" if held else ""
        print(f"  {mark} 批次 {r.get('batch'):>2} {date_of(r)}  {st:<9} "
              f"{len(ids_of(r))} 題{tail}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
