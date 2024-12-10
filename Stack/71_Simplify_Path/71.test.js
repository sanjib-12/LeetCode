import { describe, it, expect } from 'vitest';
import { simplifyPath } from './71';

const testCases = [
   {
      input: '/home/',
      expected: '/home',
      comment: 'test case 1',
   },
   {
      input: '/home//foo/',
      expected: '/home/foo',
      comment: 'test case 2',
   },
   {
      input: '/home/user/Documents/../Pictures',
      expected: '/home/user/Pictures',
      comment: 'test case 3',
   },
   {
      input: '/../',
      expected: '/',
      comment: 'test case 4',
   },
   {
      input: '/.../a/../b/c/../d/./',
      expected: '/.../b/d',
      comment: 'test case 5',
   },
];

describe('simplifyPath', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = simplifyPath(input);
         expect(output).toEqual(expected);
      });
   });
});
