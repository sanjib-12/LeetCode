import { describe, it, expect } from 'vitest';
import { strStr } from './28';

const testCases = [
   {
      input: {
         haystack: 'sadbutsad',
         needle: 'sad',
      },
      expected: 0,
      comment: '1. should return the first occurrence of the string ',
   },
   {
      input: {
         haystack: 'leetcode',
         needle: 'leeto',
      },
      expected: -1,
      comment: '2. should return the first occurrence of the string ',
   },
];

describe('Product of array except self', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = strStr(input.haystack, input.needle);
         expect(output).toBe(expected);
      });
   });
});
