import { describe, it, expect } from 'vitest';
import { evalRPN } from './150';

const testCases = [
   {
      input: ['2', '1', '+', '3', '*'],
      expected: 9,
      comment: 'test case 1',
   },
   {
      input: ['4', '13', '5', '/', '+'],
      expected: 6,
      comment: 'test case 2',
   },
   {
      input: [
         '10',
         '6',
         '9',
         '3',
         '+',
         '-11',
         '*',
         '/',
         '*',
         '17',
         '+',
         '5',
         '+',
      ],
      expected: 22,
      comment: 'test case 3',
   },
];

describe('evalRPN', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = evalRPN(input);
         expect(output).toEqual(expected);
      });
   });
});
