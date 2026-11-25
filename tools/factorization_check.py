#!/usr/bin/env python3
"""Exact algebra audit of the factorisation course; requires optional SymPy.

Run: python tools/factorization_check.py
Checks displayed equalities, MC keys and the options for each long-question part.
It verifies algebraic equivalence, not prose quality or completeness of factoring.
Four original MC questions have equivalent partial forms; each needs a separate
practiceGoal that explicitly asks for complete factorisation.
"""
import json
import re
import string
import sys
from pathlib import Path

import sympy as sp
from sympy.parsing.sympy_parser import (
    convert_xor, implicit_multiplication_application, parse_expr,
    standard_transformations,
)

ROOT = Path(__file__).resolve().parent.parent
TRANSFORMS = standard_transformations + (implicit_multiplication_application, convert_xor)
SYMBOLS = {letter: sp.Symbol(letter) for letter in string.ascii_letters}
FACTOR_TOPICS = {"ws01", "ws01b", "ws01c"}
PARTIAL_OPTIONS = {"eph-ws01-w01", "eph-ws01-w02", "eph-ws01-w03", "eph-ws01-q08"}


def load(name):
    return json.loads((ROOT / "data/learn" / name).read_text(encoding="utf-8"))


def clean(tex):
    """Remove presentation macros without introducing algebraic parentheses."""
    while match := re.search(r"\\(?:hlg|hlw|hl|xf)\{", tex):
        start = match.end()
        depth, end = 1, start
        while depth:
            if end >= len(tex):
                raise ValueError("Unbalanced highlight macro")
            depth += (tex[end] == "{") - (tex[end] == "}")
            end += 1
        tex = tex[:match.start()] + tex[start:end - 1] + tex[end:]
    tex = re.sub(r"\\(?:left|right|big|Big|bigg|Bigg|,|;|!|quad|qquad)", "", tex)
    for old, new in ((r"\cdot", "*"), (r"\times", "*"), ("×", "*"), ("−", "-")):
        tex = tex.replace(old, new)
    while r"\frac" in tex:
        match = re.search(r"\\frac\{([^{}]*)\}\{([^{}]*)\}", tex)
        if not match:
            raise ValueError("Unsupported fraction: " + tex)
        tex = tex[:match.start()] + "((" + match[1] + ")/(" + match[2] + "))" + tex[match.end():]
    for old, new in (("{", "("), ("}", ")"), ("[", "("), ("]", ")"), ("$", "")):
        tex = tex.replace(old, new)
    if "\\" in tex:
        raise ValueError("Unsupported command: " + tex)
    return tex.strip()


def expression(tex):
    return parse_expr(clean(tex), local_dict=SYMBOLS, transformations=TRANSFORMS)


def equivalent(left, right):
    return sp.expand(left - right) == 0


def main():
    questions = [q for q in load("bank.json")["questions"] if q["topic"] in FACTOR_TOPICS]
    solutions = load("solutions.json")["solutions"]
    checks = load("checks.json")["checks"]
    cards = [c for c in load("concepts.json")["cards"] if c["topic"] in FACTOR_TOPICS]
    errors, ambiguous = [], set()
    counts = {"questions": len(questions), "equalities": 0, "mc_keys": 0, "part_checks": 0}

    def audit_chain(tex, tag, previous=None):
        if r"\Rightarrow" in tex:
            return None  # A one-way implication is not a claim of equality.
        try:
            # A wrapped multiplication continues the preceding physical line.
            tex = re.sub(r"\n(?=\s*[*])", "", clean(tex))
            for line in tex.splitlines():
                sides = line.split("=")
                values = [expression(side) for side in sides if side.strip()]
                if not sides[0].strip() and previous is not None:
                    values.insert(0, previous)
                for left, right in zip(values, values[1:]):
                    counts["equalities"] += 1
                    if not equivalent(left, right):
                        errors.append(f"{tag}: {left} != {right}")
                if values:
                    previous = values[-1]
            return previous
        except Exception as exc:
            errors.append(f"{tag}: could not audit {tex!r}: {exc}")
            return None

    for question in questions:
        qid = question["id"]
        previous = None
        for index, step in enumerate(solutions[qid]["solution"]["steps"], 1):
            previous = audit_chain(step.get("math", ""), f"{qid} step {index}", previous)
        if question["type"] == "mc":
            target = expression(re.findall(r"\$(.*?)\$", question["stem"]["en"])[0])
            matches = [letter for letter, option in question["options"].items()
                       if equivalent(target, expression(option))]
            counts["mc_keys"] += 1
            if solutions[qid]["answer"] not in matches:
                errors.append(f"{qid}: answer key is not equivalent")
            if len(matches) != 1:
                ambiguous.add(qid)
                if not question.get("practiceGoal"):
                    errors.append(f"{qid}: equivalent options need an explicit practice goal")
        for check in checks.get(qid, []):
            part = next((p for p in question.get("parts", []) if p["label"] == check["part"]), None)
            source = part or question["stem"]
            target = expression(re.findall(r"\$(.*?)\$", source.get("en", source.get("text", "")))[-1])
            matches = ["ABCD"[index] for index, option in enumerate(check["options"])
                       if equivalent(target, expression(option))]
            counts["part_checks"] += 1
            if matches != [check["answer"]]:
                errors.append(f"{qid} {check['part']}: expected one equivalent option, got {matches}")

    for card in cards:
        previous = None
        for index, tex in enumerate(card.get("math", [])):
            previous = audit_chain(tex, f"{card['id']} formula {index}", previous)
        example = card.get("crossExample")
        if example:
            for tex in example["products"] + [example["sum"]]:
                audit_chain(tex, f"{card['id']} cross example")
    if ambiguous != PARTIAL_OPTIONS:
        errors.append(f"Unexpected equivalent-option set: {sorted(ambiguous)}")
    print(json.dumps({"counts": counts, "partial_options_with_goal": sorted(ambiguous), "errors": errors}, indent=2))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
