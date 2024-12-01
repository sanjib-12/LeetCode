import { describe, it, expect } from 'vitest';
import { isIsomorphic } from './205';

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

describe('Ransom Note', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = isIsomorphic(input.s, input.t);
         expect(output).toEqual(expected);
      });
   });
});
