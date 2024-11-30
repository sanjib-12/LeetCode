import { describe, it, expect } from 'vitest';
import { gameOfLife } from './289';

const testCases = [
   {
      input: [
         [0, 1, 0],
         [0, 0, 1],
         [1, 1, 1],
         [0, 0, 0],
      ],
      expected: [
         [0, 0, 0],
         [1, 0, 1],
         [0, 1, 1],
         [0, 1, 0],
      ],
      comment: 'test case 1',
   },
   {
      input: [
         [1, 1],
         [1, 0],
      ],
      expected: [
         [1, 1],
         [1, 1],
      ],
      comment: 'test case 2',
   },
];

describe('Set Matrix Zeroes', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = gameOfLife(input);
         expect(output).toEqual(expected);
      });
   });
});
