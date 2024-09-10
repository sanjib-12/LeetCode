import { describe, it, expect } from 'vitest';
import { reverseWords } from './151';

const testCases = [
   {
      input: 'the sky is blue',
      expected: 'blue is sky the',
      comment: '1. should return the reverse word',
   },
   {
      input: '  hello world  ',
      expected: 'world hello',
      comment: '2. should return the reverse word',
   },
   {
      input: 'a good   example',
      expected: 'example good a',
      comment: '3. should return the reverse word',
   },
];

describe('Product of array except self', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = reverseWords(input);
         expect(output).toBe(expected);
      });
   });
});
