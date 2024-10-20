import { describe, it, expect } from 'vitest';
import { spiralOrder } from './54';

const testCases = [
   {
      input: [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9],
      ],
      expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
      comment: 'Should return all elements in a spiral order : test 1',
   },
   {
      input: [
         [1, 2, 3, 4],
         [5, 6, 7, 8],
         [9, 10, 11, 12],
      ],
      expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
      comment: 'Should return all elements in a spiral order : test 2',
   },
];

describe('Minimum Window Substring', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = spiralOrder(input);
         expect(output).toEqual(expected);
      });
   });
});
