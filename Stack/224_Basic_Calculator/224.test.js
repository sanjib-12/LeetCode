import { describe, it, expect } from 'vitest';
import { calculate } from './224';

const testCases = [
   {
      input: '1 + 1',
      expected: 2,
      comment: 'test case 1',
   },
   {
      input: ' 2-1 + 2 ',
      expected: 3,
      comment: 'test case 2',
   },
   {
      input: '(1+(4+5+2)-3)+(6+8)',
      expected: 23,
      comment: 'test case 3',
   },
];

describe('calculate', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = calculate(input);
         expect(output).toEqual(expected);
      });
   });
});
