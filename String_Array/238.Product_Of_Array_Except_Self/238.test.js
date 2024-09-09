import { describe, it, expect } from 'vitest';
import { productExceptSelf } from './238';

const testCases = [
   {
      input: [1, 2, 3, 4],
      expected: [24, 12, 8, 6],
      comment: 'should return the product of elements of an array 1',
   },
   {
      input: [-1, 1, 0, -3, 3],
      expected: [-0, 0, 9, -0, 0],
      comment: 'should return the product of elements of an array 2',
   },
];

describe('Product of array except self', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = productExceptSelf(input);
         expect(output).toEqual(expected);
      });
   });
});
