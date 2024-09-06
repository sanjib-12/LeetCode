import { describe, it, expect } from 'vitest';
import { hIndex } from './274';

describe('H-Index', () => {
   const testCases = [
      {
         input: [3, 0, 6, 1, 5],
         expected: 3,
         comment:
            'should check whether the citation is equal to the expected 1',
      },
      {
         input: [10, 8, 5, 4, 3],
         expected: 4,
         comment:
            'should check whether the citation is equal to the expected 2',
      },
      {
         input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
         expected: 5,
         comment:
            'should check whether the citation is equal to the expected 3',
      },

      //! Debugger
      // {
      //    input: [10, 8, 5, 4, 3],
      //    expected: 4,
      //    comment:
      //       'should check whether the citation is equal to the expected 2',
      // },
   ];

   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output3 = hIndex(input);
         expect(output3).toBe(expected);
      });
   });
});
