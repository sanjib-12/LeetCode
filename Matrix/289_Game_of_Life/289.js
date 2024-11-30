//@ 289. Game of Life
/*
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.
Given the current state of the board, update the board to reflect its next state.
Note that you do not need to return anything.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
*/

//? Solution 1
export function gameOfLife(board) {
   // original | new | state
   //    0     |  0  |  0
   //    1     |  0  |  1
   //    0     |  1  |  2
   //    1     |  1  |  3

   const row = board.length;
   const col = board[0].length;

   const countNeighbors = (r, c) => {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
         for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const nr = r + i;
            const nc = c + j;
            if (
               nr >= 0 &&
               nr < row &&
               nc >= 0 &&
               nc < col &&
               board[nr][nc] % 2 === 1
            ) {
               neighbors++;
            }
         }
      }
      return neighbors;
   };

   for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
         let neighbors = countNeighbors(r, c);

         if (board[r][c]) {
            if (neighbors == 2 || neighbors == 3) {
               board[r][c] = 3;
            }
         } else if (neighbors == 3) {
            board[r][c] = 2;
         }
      }
   }

   for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
         if (board[r][c] == 1) {
            board[r][c] = 0;
         } else if (board[r][c] == 2 || board[r][c] == 3) {
            board[r][c] = 1;
         }
      }
   }

   return board;
}
