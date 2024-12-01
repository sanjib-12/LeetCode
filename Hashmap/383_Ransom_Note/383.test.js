import { describe, it, expect } from 'vitest';
import { canConstruct } from './383';

const testCases = [
   {
      input: {
         ransomeNote: 'a',
         magazine: 'b',
      },
      expected: false,
      comment: 'test case 1',
   },
   {
      input: {
         ransomeNote: 'aa',
         magazine: 'bb',
      },
      expected: false,
      comment: 'test case 2',
   },
   {
      input: {
         ransomeNote: 'aa',
         magazine: 'aab',
      },
      expected: true,
      comment: 'test case 3',
   },
];

describe('Ransom Note', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = canConstruct(input.ransomeNote, input.magazine);
         expect(output).toEqual(expected);
      });
   });
});
