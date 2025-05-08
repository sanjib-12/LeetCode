/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
   const n = board.length;
   const target = n * n;

   const getPosition = (cell) => {
      let row = Math.floor((cell - 1) / n);
      let col = (cell - 1) % n;

      if (row % 2 === 1) {
         col = n - 1 - col;
      }

      row = n - 1 - row;

      return [row, col];
   };

   const queue = [[1, 0]];
   const visited = new Set([1]);

   while (queue.length > 0) {
      const [cell, moves] = queue.shift();

      if (cell === target) {
         return moves;
      }

      for (let dice = 1; dice <= 6; dice++) {
         let nextCell = cell + dice;

         if (nextCell > target) {
            continue;
         }

         const [row, col] = getPosition(nextCell);
         if (board[row][col] !== -1) {
            nextCell = board[row][col];
         }

         if (!visited.has(nextCell)) {
            visited.add(nextCell);
            queue.push([nextCell, moves + 1]);
         }
      }
   }

   return -1;
};

const board = [
   [-1, -1, -1, -1, -1, -1],
   [-1, -1, -1, -1, -1, -1],
   [-1, -1, -1, -1, -1, -1],
   [-1, 35, -1, -1, 13, -1],
   [-1, -1, -1, -1, -1, -1],
   [-1, 15, -1, -1, -1, -1],
];
console.log(snakesAndLadders(board));
