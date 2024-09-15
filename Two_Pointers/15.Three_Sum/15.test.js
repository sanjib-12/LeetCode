import { describe, it, expect } from 'vitest';
import { threeSum } from './15';

const testCases = [
   {
      input: [-1, 0, 1, 2, -1, -4],
      expected: [
         [-1, -1, 2],
         [-1, 0, 1],
      ],
      comment: 'should return the triplets whose value make the sum zero.',
   },
   {
      input: [0, 1, 1],
      expected: [],
      comment: 'should return empty if the value does not matches.',
   },
   {
      input: [0, 0, 0],
      expected: [[0, 0, 0]],
      comment: 'should return the triplets whose value make the sum zero.',
   },
];

describe('threeSum', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = threeSum(input);
         expect(output).toEqual(expected);
      });
   });
});
