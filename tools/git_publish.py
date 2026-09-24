r"""發佈用的 git 包裝：**有變更才 commit，有領先才 push**。

為什麼需要它
────────────
面板的發佈流程是逐條執行外部指令，任何一條非零退出碼就整體報「失敗」。
但「沒有變更可以提交」（`git commit` 在乾淨的工作區會退出 1）**不是失敗** ——
老師看到紅字會以為發佈壞了。這支程式把這種情況變成一條清楚訊息 + 退出碼 0。

用法
────
    python tools/git_publish.py --message "發布：批次 3（本機面板）"
    python tools/git_publish.py --dry-run          # 只報告會做什麼

退出碼：0 = 已同步或已成功推送；1 = 真的失敗（會印出 git 的原始訊息）
"""
from __future__ import annotations

import argparse
import io
import os
import subprocess
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def git(*args: str) -> tuple[int, str]:
    p = subprocess.run(["git", *args], cwd=BASE, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    return p.returncode, ((p.stdout or "") + (p.stderr or "")).strip()


def main() -> int:
    ap = argparse.ArgumentParser(description="有變更才提交、有領先才推送")
    ap.add_argument("--message", "-m", default="發布（本機面板）")
    ap.add_argument("--remote", default="origin")
    ap.add_argument("--branch", default="", help="預設＝目前分支")
    ap.add_argument("--dry-run", action="store_true", help="只報告，不真的提交／推送")
    args = ap.parse_args()

    code, branch = git("rev-parse", "--abbrev-ref", "HEAD")
    if code != 0:
        print(branch)
        return 1
    br = args.branch or branch.strip()
    if br in ("", "HEAD"):
        print("[git_publish] 目前不在任何分支上（detached HEAD）—— 中止")
        return 1

    # 1) 有變更才提交
    code, dirty = git("status", "--porcelain")
    if code != 0:
        print(dirty)
        return 1
    if dirty:
        n = len([ln for ln in dirty.splitlines() if ln.strip()])
        print(f"[git_publish] 偵測到 {n} 個變更 → 提交")
        for cmd in (["add", "-A"], ["commit", "-m", args.message]):
            if args.dry_run:
                print("$ git " + " ".join(cmd) + "   （--dry-run，略過）")
                continue
            code, out = git(*cmd)
            print("$ git " + " ".join(cmd))
            print(out)
            if code != 0:
                print("[git_publish] 提交失敗 —— 上面的 git 訊息是真正的原因")
                return 1
    else:
        print("[git_publish] 沒有變更需要提交（略過 commit）")

    # 2) 有領先才推送
    upstream = f"{args.remote}/{br}"
    code, ahead = git("rev-list", "--count", f"{upstream}..HEAD")
    if code != 0:
        print(f"[git_publish] 讀不到 {upstream}，先 fetch…")
        code, out = git("fetch", args.remote, br)
        print(out)
        code, ahead = git("rev-list", "--count", f"{upstream}..HEAD")
        if code != 0:
            print(f"[git_publish] 仍然讀不到 {upstream}；請確認遠端與分支名稱")
            return 1
    try:
        n_ahead = int(ahead or 0)
    except ValueError:
        print(ahead)
        return 1

    if n_ahead == 0:
        print(f"[git_publish] 本機與 {upstream} 已同步 —— 不需要推送")
        return 0

    if args.dry_run:
        print(f"[git_publish] --dry-run：有 {n_ahead} 個提交待推送")
        return 0

    code, out = git("push", args.remote, br)
    print(f"$ git push {args.remote} {br}")
    print(out)
    if code != 0:
        print("[git_publish] 推送失敗 —— 上面的 git 訊息是真正的原因")
        return 1
    print(f"[git_publish] 已推送 {n_ahead} 個提交到 {upstream}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
