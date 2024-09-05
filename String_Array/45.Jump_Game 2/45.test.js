import { describe, it, expect } from 'vitest';
import { canJump } from './45';

describe('Jump Game', () => {
   const testCases = [
      {
         input: [2, 3, 1, 1, 4],
         expected: 2,
         comment: 'Check weather it reaches at end of the index',
      },

      { input: [1, 1, 1, 1], expected: 3, comment: 'All elements are 1' },

      {
         input: [2, 5, 0, 0],
         expected: 2,
         comment: 'Edge case: A large jump can reach the end',
      },
   ];

   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output3 = canJump(input);
         expect(output3).toBe(expected);
      });
   });
});
