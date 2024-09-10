import { describe, it, expect } from 'vitest';
import { lengthOfLastWord } from './58';

const testCases = [
   {
      input: 'Hello World',
      expected: 5,
      comment: '1. should return the last word total character',
   },
   {
      input: '   fly me   to   the moon  ',
      expected: 4,
      comment: '2. should return the last word total character',
   },
   {
      input: 'luffy is still joyboy',
      expected: 6,
      comment: '3. should return the last word total character',
   },
];

describe('Product of array except self', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = lengthOfLastWord(input);
         expect(output).toBe(expected);
      });
   });
});
