//@ 36. Valid Sudoku
/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

//? Solution 1
export function isValidSudoku(board) {
   // Function to check if an array has duplicates (excluding '.')
   const hasDuplicates = (arr) => {
      let seen = new Set();
      for (let num of arr) {
         if (num !== '.' && seen.has(num)) {
            return true;
         }
         seen.add(num);
      }
      return false;
   };

   // Check rows and columns
   for (let i = 0; i < 9; i++) {
      let row = [];
      let col = [];
      for (let j = 0; j < 9; j++) {
         row.push(board[i][j]); // Collect values in the current row
         col.push(board[j][i]); // Collect values in the current column
      }
      if (hasDuplicates(row) || hasDuplicates(col)) {
         return false; // If there are duplicates in row or column, return false
      }
   }

   // Check 3x3 subgrids
   for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
         let subgrid = [];
         for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
               subgrid.push(board[row + i][col + j]); // Collect values in the subgrid
            }
         }
         if (hasDuplicates(subgrid)) {
            return false; // If there are duplicates in the subgrid, return false
         }
      }
   }

   return true; // If no duplicates are found, the board is valid
}

//? solution 2

// export function isValidSudoku(board) {
//    // Create sets to track seen numbers in rows, columns, and subgrids
//    let rows = new Array(9).fill().map(() => new Set());
//    let cols = new Array(9).fill().map(() => new Set());
//    let grids = new Array(9).fill().map(() => new Set());

//    for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//          let value = board[i][j];

//          if (value === '.') continue;

//          // Calculate grid index
//          let gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

//          // Check if the value already exists in the row, column, or grid
//          if (rows[i].has(value) || cols[j].has(value) || grids[gridIndex].has(value)) {
//             return false;
//          }

//          // Add the value to row, column, and grid sets
//          rows[i].add(value);
//          cols[j].add(value);
//          grids[gridIndex].add(value);
//       }
//    }

//    return true;  // If no duplicates found, the board is valid
// }
