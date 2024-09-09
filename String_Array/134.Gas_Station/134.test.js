import { describe, it, expect } from 'vitest';
import { canCompleteCircuit } from './134';

const testCases = [
   {
      input: { gas: [1, 2, 3, 4, 5], cost: [3, 4, 5, 1, 2] },
      expected: 3,
      comment: 'should return the index if complete rotation',
   },
   {
      input: { gas: [2, 3, 4], cost: [3, 4, 3] },
      expected: -1,
      comment: 'should return negative if it does not complete the rotation',
   },
   {
      input: { gas: [5, 1, 2, 3, 4], cost: [4, 4, 1, 5, 1] },
      expected: 4,
      comment: 'should return negative if it does not complete the rotation',
   },
];

describe('Product of array except self', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = canCompleteCircuit(input.gas, input.cost);
         expect(output).toBe(expected);
      });
   });
});
