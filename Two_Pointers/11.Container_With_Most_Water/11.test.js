import { describe, it, expect } from 'vitest';
import { maxArea } from './11';

const testCases = [
   {
      input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      expected: 49,
      comment: 'should return the maximum area of water contained .',
   },
   {
      input: [1, 1],
      expected: 1,
      comment: 'should return the maximum area of water contained .',
   },
];

describe('maxArea', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = maxArea(input);
         expect(output).toBe(expected);
      });
   });
});
