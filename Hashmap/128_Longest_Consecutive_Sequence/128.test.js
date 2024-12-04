import { describe, it, expect } from 'vitest';
import { longestConsecutive } from './128';

const testCases = [
   {
      input: [100, 4, 200, 1, 3, 2],
      expected: 4,
      comment: 'test case 1',
   },
   {
      input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
      expected: 9,
      comment: 'test case 2',
   },
];

describe('Test', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = longestConsecutive(input);
         expect(output).toEqual(expected);
      });
   });
});
