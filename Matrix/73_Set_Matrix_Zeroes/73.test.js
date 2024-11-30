import { describe, it, expect } from 'vitest';
import { setZeroes } from './73';

const testCases = [
   {
      input: [
         [1, 1, 1],
         [1, 0, 1],
         [1, 1, 1],
      ],
      expected: [
         [1, 0, 1],
         [0, 0, 0],
         [1, 0, 1],
      ],
      comment: 'Should return the entire row and column to zero  test case 1',
   },
   {
      input: [
         [0, 1, 2, 0],
         [3, 4, 5, 2],
         [1, 3, 1, 5],
      ],
      expected: [
         [0, 0, 0, 0],
         [0, 4, 5, 0],
         [0, 3, 1, 0],
      ],
      comment: 'Should return the entire row and column to zero  test case 2',
   },
];

describe('Set Matrix Zeroes', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = setZeroes(input);
         expect(output).toEqual(expected);
      });
   });
});
