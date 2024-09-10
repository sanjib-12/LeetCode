import { describe, it, expect } from 'vitest';
import { candy } from './135';

const testCases = [
   {
      input: [1, 0, 2],
      expected: 5,
      comment: 'should return the minimum candies solution 1',
   },
   {
      input: [1, 2, 2],
      expected: 4,
      comment: 'should return the minimum candies solution 2',
   },
];

describe('Product of array except self', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = candy(input);
         expect(output).toBe(expected);
      });
   });
});
