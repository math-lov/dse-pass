#!/usr/bin/env python3
"""Regression: repeated answer choices in different questions are real content."""
import unittest
from eph_digest import build_digest


class SourceDigestTests(unittest.TestCase):
    def test_repeated_body_choice_is_retained(self):
        doc = {'code': 'WS', 'variant': 'question', 'blocks': [
            {'type': 'para', 'text': '1. Find x.'},
            {'type': 'para', 'text': 'B. -2.'},
            {'type': 'para', 'text': '2. Find y.'},
            {'type': 'para', 'text': 'B. -2.', 'dup': 1},
        ]}
        self.assertEqual(build_digest(doc).count('B. -2.'), 2)

    def test_mirrored_textbox_copy_is_filtered(self):
        doc = {'code': 'WS', 'variant': 'question', 'blocks': [
            {'type': 'para', 'text': 'Example 1', 'context': 'textbox'},
            {'type': 'para', 'text': 'Example 1', 'context': 'textbox', 'dup': 0},
        ]}
        self.assertEqual(build_digest(doc).count('Example 1'), 1)


if __name__ == '__main__':
    unittest.main()
