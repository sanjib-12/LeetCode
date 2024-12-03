import { describe, it, expect } from 'vitest';
import { isAnagram } from './242';

const testCases = [
   {
      input: {
         s: 'anagram',
         t: 'nagaram',
      },
      expected: true,
      comment: 'test case 1',
   },
   {
      input: {
         s: 'rat',
         t: 'car',
      },
      expected: false,
      comment: 'test case 2',
   },
];

describe('Ransom Note', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = isAnagram(input.s, input.t);
         expect(output).toEqual(expected);
      });
   });
});
