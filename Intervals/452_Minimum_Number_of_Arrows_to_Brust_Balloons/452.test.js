import { describe, it, expect } from 'vitest';
import { findMinArrowShots } from './452';

const testCases = [
   {
      input: [
         [10, 16],
         [2, 8],
         [1, 6],
         [7, 12],
      ],
      expected: 2,
      comment: 'test case 1',
   },
   {
      input: [
         [1, 2],
         [3, 4],
         [5, 6],
         [7, 8],
      ],
      expected: 4,
      comment: 'test case 2',
   },
   {
      input: [
         [1, 2],
         [2, 3],
         [3, 4],
         [4, 5],
      ],
      expected: 2,
      comment: 'test case 3',
   },
];

describe('findMinArrowShots', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = findMinArrowShots(input);
         expect(output).toEqual(expected);
      });
   });
});
