import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from './3';

const testCases = [
   {
      input: 'abcabcbb',
      expected: 3,
      comment: 'The answer is "abc", with the length of 3',
   },
   {
      input: 'bbbbb',
      expected: 1,
      comment: 'The answer is "b", with the length of 1',
   },
   {
      input: 'pwwkew',
      expected: 3,
      comment: 'The answer is "wke", with the length of 3',
   },
   {
      input: 'dvdf',
      expected: 3,
      comment: 'The answer is "vdf", with the length of 3',
   },
];

describe('Minimum Size Subarray Sum', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = lengthOfLongestSubstring(input);
         expect(output).toEqual(expected);
      });
   });
});
