import { describe, it, expect } from 'vitest';
import { canJump } from './55';

describe('Jump Game', () => {
   const testCases = [
      {
         input: [2, 3, 1, 1, 4],
         expected: true,
         comment: 'Check weather it reaches at end of the index',
      },
      {
         input: [3, 2, 1, 0, 4],
         expected: false,
         comment: 'Check weather it reaches at end of the index',
      },
      {
         input: [0],
         expected: true,
         comment: 'Edge case: Single element array',
      },
      { input: [1, 1, 1, 1], expected: true, comment: 'All elements are 1' },
      {
         input: [2, 0, 0, 0],
         expected: false,
         comment: 'All elements except the first are 0',
      },
      {
         input: [2, 5, 0, 0],
         expected: true,
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
