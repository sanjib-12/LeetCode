/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
   const rowLen = board.length;
   const colLen = board[0].length;

   const dfs = (row, col, index) => {
      // Base case: entire word matched
      if (index === word.length) return true;

      // Check bounds and match
      if (
         row < 0 ||
         row >= rowLen ||
         col < 0 ||
         col >= colLen ||
         board[row][col] !== word[index]
      ) {
         return false;
      }

      // Mark current cell as visited
      const temp = board[row][col];
      board[row][col] = '#';

      // Explore all 4 directions
      const found =
         dfs(row + 1, col, index + 1) ||
         dfs(row - 1, col, index + 1) ||
         dfs(row, col + 1, index + 1) ||
         dfs(row, col - 1, index + 1);

      // Restore the cell (backtrack)
      board[row][col] = temp;

      return found;
   };

   for (let row = 0; row < rowLen; row++) {
      for (let col = 0; col < colLen; col++) {
         if (board[row][col] === word[0]) {
            if (dfs(row, col, 0)) return true;
         }
      }
   }

   return false;
};

//@ solution 2
//    const backtrack = (row,  col, visited, index)=>{

//       if(index === word.length-1) return true;

//       const top = row - 1;
//       const bottom = row + 1;
//       const left = col -1;
//       const right = col + 1;

//       visited.add(row.toString()+col.toString());

//       ++index;

//       if(top >= 0 && board[top][col] === word[index] && !visited.has(top.toString()+col.toString())){
//          if(backtrack(top,  col, visited, index)) return true;
//       }
//       if(bottom < rowLen && board[bottom][col] === word[index] && !visited.has(bottom.toString()+col.toString())){
//          if(backtrack(bottom,  col, visited, index)) return true;
//       }
//       if(left >= 0 && board[row][left] === word[index] && !visited.has(row.toString()+left.toString())){
//          if(backtrack(row, left, visited, index)) return true;
//       }
//       if(right < colLen && board[row][right] === word[index] && !visited.has(row.toString()+right.toString())){
//          if(backtrack(row, right, visited, index)) return true;
//       }

//       --index;
//       //visited.delete(row.toString()+col.toString());

//    };

//    for(let row = 0; row < rowLen; row++){
//       for (let col = 0; col < colLen; col++){
//          const visited = new Set();
//          if(board[row][col] === word[0]){
//             if(backtrack(row,  col, visited, 0)) return true;
//          }
//       }
//    }

//    return false;
// };

const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
   ],
   word = 'A';
console.log(exist(board, word));
