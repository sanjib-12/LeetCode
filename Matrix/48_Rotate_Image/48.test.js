import { describe, it, expect } from 'vitest';
import { rotate } from './48';

const testCases = [
   {
      input: [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9],
      ],
      expected: [
         [7, 4, 1],
         [8, 5, 2],
         [9, 6, 3],
      ],
      comment:
         'Should return the matrix by rotating it to 90 degree test case 1',
   },
   {
      input: [
         [5, 1, 9, 11],
         [2, 4, 8, 10],
         [13, 3, 6, 7],
         [15, 14, 12, 16],
      ],
      expected: [
         [15, 13, 2, 5],
         [14, 3, 4, 1],
         [12, 6, 8, 9],
         [16, 7, 10, 11],
      ],
      comment:
         'Should return the matrix by rotating it to 90 degree test case 2',
   },
];

describe('Rotate Image', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = rotate(input);
         expect(output).toEqual(expected);
      });
   });
});
