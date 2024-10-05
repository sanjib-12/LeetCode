import { describe, it, expect } from 'vitest';
import { minWindow } from './76';

const testCases = [
   {
      s: 'ADOBECODEBANC',
      t: 'ABC',
      expected: 'BANC',
      comment:
         'The minimum window substring "BAN" includes "A", "B", and "C" from string t.',
   },
   {
      s: 'a',
      t: 'a',
      expected: 'a',
      comment: 'The entire string s is the minimum window.',
   },
   {
      s: 'a',
      t: 'aa',
      expected: '',
      comment: 'Both as from t must be included in the window.',
   },
];

describe('Minimum Window Substring', () => {
   testCases.forEach(({ s, t, expected, comment }) => {
      it(comment, () => {
         const output = minWindow(s, t);
         expect(output).toEqual(expected);
      });
   });
});
