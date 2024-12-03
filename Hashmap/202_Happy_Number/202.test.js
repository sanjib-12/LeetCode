import { describe, it, expect } from 'vitest';
import { isHappy } from './202';

const testCases = [
   {
      input: 19,
      expected: true,
      comment: 'test case 1',
   },
   {
      input: 2,
      expected: true,
      comment: 'test case 1',
   },
];

describe('Test', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = isHappy(input);
         expect(output).toEqual(expected);
      });
   });
});
