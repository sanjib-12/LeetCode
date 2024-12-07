import { describe, it, expect } from 'vitest';
import { insert } from './57';

const testCases = [
   {
      input: {
         intervals: [
            [1, 3],
            [6, 9],
         ],
         newInterval: [2, 5],
      },
      expected: [
         [1, 5],
         [6, 9],
      ],
      comment: 'test case 1',
   },
   {
      input: {
         intervals: [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
         ],
         newInterval: [4, 8],
      },
      expected: [
         [1, 2],
         [3, 10],
         [12, 16],
      ],
      comment: 'test case 2',
   },
];

describe('insert', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = insert(input.intervals, input.newInterval);
         expect(output).toEqual(expected);
      });
   });
});
