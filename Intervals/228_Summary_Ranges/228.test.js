import { describe, it, expect } from 'vitest';
import { summaryRanges } from './228';

const testCases = [
   {
      input: [0, 1, 2, 4, 5, 7],
      expected: ['0->2', '4->5', '7'],
      comment: 'test case 1',
   },
   {
      input: [0, 2, 3, 4, 6, 8, 9],
      expected: ['0', '2->4', '6', '8->9'],
      comment: 'test case 2',
   },
];

describe('summaryRanges', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = summaryRanges(input);
         expect(output).toEqual(expected);
      });
   });
});
