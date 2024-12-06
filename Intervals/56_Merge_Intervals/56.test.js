import { describe, it, expect } from 'vitest';
import { merge } from './56';

const testCases = [
   {
      input: [
         [1, 3],
         [2, 6],
         [8, 10],
         [15, 18],
      ],
      expected: [
         [1, 6],
         [8, 10],
         [15, 18],
      ],
      comment: 'test case 1',
   },
   {
      input: [
         [1, 4],
         [4, 5],
      ],
      expected: [[1, 5]],
      comment: 'test case 2',
   },
];

describe('merge', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = merge(input);
         expect(output).toEqual(expected);
      });
   });
});
