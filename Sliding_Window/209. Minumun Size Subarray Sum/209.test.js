import { describe, it, expect } from 'vitest';
import { minSubArrayLen } from './209';

const testCases = [
   {
      input: [2, 3, 1, 2, 4, 3],
      target: 7,
      expected: 2,
      comment:
         'should return the minimum length of a contiguous subarray with sum >= target',
   },
   {
      input: [1, 4, 4],
      target: 4,
      expected: 1,
      comment:
         'should return the minimum length when a single element meets the target',
   },
   {
      input: [1, 1, 1, 1, 1, 1, 1, 1],
      target: 11,
      expected: 0,
      comment:
         'should return 0 when no subarray sum meets or exceeds the target',
   },
];

describe('Minimum Size Subarray Sum', () => {
   testCases.forEach(({ input, target, expected, comment }) => {
      it(comment, () => {
         const output = minSubArrayLen(target, input);
         expect(output).toEqual(expected);
      });
   });
});
