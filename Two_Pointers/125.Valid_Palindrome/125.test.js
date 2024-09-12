import { describe, it, expect } from 'vitest';
import { isPalindrome } from './125';

const testCases = [
   {
      input: 'A man, a plan, a canal: Panama',
      expected: true,
      comment: 'should return true for palindrome',
   },
   {
      input: 'race a car',
      expected: false,
      comment: 'should return true for palindrome',
   },
   {
      input: ' ',
      expected: true,
      comment: 'should return true for empty space',
   },
];

describe('IsPalindrome', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = isPalindrome(input);
         expect(output).toEqual(expected);
      });
   });
});
