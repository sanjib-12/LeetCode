import { describe, it, expect } from 'vitest';
import { merge } from './56';

const testCases = [
   {
      input: {
         s: 'egg',
         t: 'add',
      },
      expected: true,
      comment: 'test case 1',
   },
   {
      input: {
         s: 'foo',
         t: 'bar',
      },
      expected: false,
      comment: 'test case 2',
   },
   {
      input: {
         s: 'paper',
         t: 'title',
      },
      expected: true,
      comment: 'test case 3',
   },
];

describe('merge', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = merge(input.s, input.t);
         expect(output).toEqual(expected);
      });
   });
});
