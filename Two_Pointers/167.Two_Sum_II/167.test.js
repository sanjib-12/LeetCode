import { describe, it, expect } from 'vitest';
import { twoSum } from './167';

const testCases = [
   {
      input: {
         number: [2, 7, 11, 15],
         target: 9,
      },
      expected: [1, 2],
      comment:
         'should return rwo indexes when adding numbers form array to a target value.',
   },
   {
      input: {
         number: [2, 3, 4],
         target: 6,
      },
      expected: [1, 3],
      comment:
         'should return rwo indexes when adding numbers form array to a target value.',
   },
   {
      input: {
         number: [-1, 0],
         target: -1,
      },
      expected: [1, 2],
      comment:
         'should return rwo indexes when adding numbers form array to a target value.',
   },
];

describe('twoSum', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = twoSum(input.number, input.target);
         expect(output).toStrictEqual(expected);
      });
   });
});
