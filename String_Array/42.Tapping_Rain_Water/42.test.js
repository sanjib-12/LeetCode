import { describe, it, expect } from 'vitest';
import { trap } from './42';

const testCases = [
   {
      input: [4, 2, 0, 3, 2, 5],
      expected: 9,
      comment: '1. should return the maximum amount of trapped water',
   },
   {
      input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      expected: 6,
      comment: '2. should return the maximum amount of trapped water',
   },
];

describe('Product of array except self', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = trap(input);
         expect(output).toBe(expected);
      });
   });
});
