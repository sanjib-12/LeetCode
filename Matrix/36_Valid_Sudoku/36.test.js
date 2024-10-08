import { describe, it, expect } from 'vitest';
import { isValidSudoku } from './36';

const testCases = [
   {
      s: [
         ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
         ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
         ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
         ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
         ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
         ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
         ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
         ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
         ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ],
      expected: true,
      comment:
         'Should return true since it satisfy the condition of the sudoku',
   },
   {
      s: [
         ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
         ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
         ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
         ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
         ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
         ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
         ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
         ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
         ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ],
      expected: false,
      comment:
         'Should return the false since the number 8 is repeated twice in the first column',
   },
];

describe('Minimum Window Substring', () => {
   testCases.forEach(({ s, expected, comment }) => {
      it(comment, () => {
         const output = isValidSudoku(s);
         expect(output).toEqual(expected);
      });
   });
});
