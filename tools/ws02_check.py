#!/usr/bin/env python3
"""Independently audit WS02 with exact fractions; no optional dependencies.

The authoring used symbolic algebra. This checker instead solves each source
system with Cramer's rule and checks the published choices and answer checks.
The source manifest also records coverage and the source document hashes.
"""
import ast
from collections import Counter
from fractions import Fraction as F
import hashlib
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data/learn'


def load(name):
    return json.loads((DATA / name).read_text(encoding='utf-8'))


def linear(text, variables):
    """Return coefficients for a two-variable affine expression."""
    def visit(node):
        if isinstance(node, ast.Constant):
            return (F(0), F(0), F(str(node.value)))
        if isinstance(node, ast.Name) and node.id in variables:
            return (F(node.id == variables[0]), F(node.id == variables[1]), F(0))
        if isinstance(node, ast.UnaryOp) and isinstance(node.op, (ast.UAdd, ast.USub)):
            factor = -1 if isinstance(node.op, ast.USub) else 1
            return tuple(factor * value for value in visit(node.operand))
        if isinstance(node, ast.BinOp):
            left, right = visit(node.left), visit(node.right)
            if isinstance(node.op, (ast.Add, ast.Sub)):
                sign = -1 if isinstance(node.op, ast.Sub) else 1
                return tuple(a + sign * b for a, b in zip(left, right))
            if isinstance(node.op, ast.Mult):
                if not any(left[:2]): return tuple(left[2] * x for x in right)
                if not any(right[:2]): return tuple(right[2] * x for x in left)
            if isinstance(node.op, ast.Div) and not any(right[:2]):
                return tuple(x / right[2] for x in left)
        raise ValueError('Not an affine expression: ' + text)
    return visit(ast.parse(text, mode='eval').body)


def tex_number(tex):
    text = tex.strip('$ ').replace(' ', '')
    text = re.sub(r'\\d?frac\{([^{}]+)\}\{([^{}]+)\}', r'(\1)/(\2)', text)
    return linear(text, 'xy')[2]


def main():
    manifest = load('source-manifests/ws02.json')
    bank = {q['id']: q for q in load('bank.json')['questions'] if q['topic'] == 'ws02'}
    sols, checks = load('solutions.json')['solutions'], load('checks.json')['checks']
    assert len(bank) == 76 and len(manifest['models']) == 70
    assert Counter(m['section'] for m in manifest['models']) == {'A': 15, 'B': 31, 'C': 24}
    assert sum(q['source'].endswith('基礎熱身') for q in bank.values()) == 6
    for source in manifest['sourceFiles']:
        path = ROOT / 'inbox/Exercise' / source['name']
        if path.exists():
            assert hashlib.sha256(path.read_bytes()).hexdigest() == source['sha256']
    for model in manifest['models']:
        qid, variables = model['id'], model['variables']
        rows = []
        for equation in model['equations']:
            lhs, rhs = equation.split('=')
            rows.append(tuple(a-b for a,b in zip(linear(lhs, variables),linear(rhs,variables))))
        a,b,c = rows[0]; d,e,f = rows[1]
        determinant = a*e-b*d
        assert determinant, qid
        values = ((b*f-c*e)/determinant, (c*d-a*f)/determinant)
        assert all(F(model['values'][v]) == result for v,result in zip(variables,values)), qid
        x,y,z = linear(model['target'],variables)
        result = x*values[0]+y*values[1]+z
        assert result == F(model['result']), qid
        q = bank[qid]
        if q['type'] == 'mc':
            hits = [letter for letter, option in q['options'].items() if tex_number(option) == result]
            assert hits == [sols[qid]['answer']], (qid,hits)
        else:
            check = checks[qid][0]
            hits = []
            for i,option in enumerate(check['options']):
                if model.get('answerPair'):
                    parts = option.split(',\\quad ')
                    correct = len(parts)==2 and all(tex_number(t.split('=')[1]) == value for t,value in zip(parts,values))
                else:
                    correct = tex_number(option)==result
                if correct: hits.append('ABCD'[i])
            assert hits == [check['answer']], (qid,hits)
    # Independently transcribed keys from the source solution, not derived by the authoring solver.
    original_keys = 'B A A B C D B B D C C C C A C B A D A C'.split()
    assert [sols[f'eph-ws02-m{i:02}']['answer'] for i in range(1,21)] == original_keys
    assert all('自編' not in q['source'] for q in bank.values())
    print('WS02: all 70 original systems, 46 long checks, 24 source MC keys and coverage passed; 6 integrated warm-ups.')


if __name__ == '__main__':
    main()
