import { describe, it, expect } from 'vitest';
import { isSubsequence } from './392';

const testCases = [
   {
      input: {
         s: 'abc',
         t: 'ahbgdc',
      },
      expected: true,
      comment: 'should return true for subsequence',
   },
   {
      input: {
         s: 'axc',
         t: 'ahbgcd',
      },
      expected: false,
      comment: 'should return true for subsequence',
   },
];

describe('IsSubsequence', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = isSubsequence(input.s, input.t);
         expect(output).toEqual(expected);
      });
   });
});
