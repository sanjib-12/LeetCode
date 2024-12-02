import { describe, it, expect } from 'vitest';
import { wordPattern } from './290';

const testCases = [
   {
      input: {
         pattern: 'abba',
         s: 'dog cat cat dog',
      },
      expected: true,
      comment: 'test case 1',
   },
   {
      input: {
         pattern: 'abba',
         s: 'dog cat cat fish',
      },
      expected: false,
      comment: 'test case 2',
   },
   {
      input: {
         pattern: 'aaaa',
         s: 'dog cat cat dog',
      },
      expected: false,
      comment: 'test case 3',
   },
   {
      input: {
         pattern: 'abba',
         s: 'dog dog dog dog',
      },
      expected: false,
      comment: 'test case 4',
   },
   {
      input: {
         pattern: 'abba',
         s: 'dog constructor constructor dog',
      },
      expected: true,
      comment: 'test case 4',
   },
];

describe('Ransom Note', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = wordPattern(input.pattern, input.s);
         expect(output).toEqual(expected);
      });
   });
});
