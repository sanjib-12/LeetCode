/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// First checks if the border has 'O' or not. If it has 'O' then it marks it and all of its connection. then later it will flip it.
var solve = function(board) {
   const rowLen = board.length, colLen = board[0].length;
   //Dfs for marking;
   const dfs = (row, col) =>{
      if(row < 0 || row >= rowLen || col < 0 || col >= colLen || board[row][col] !== 'O') return;
      board[row][col] = '#';
      dfs(row-1,col)
      dfs(row,col+1)
      dfs(row+1,col)
      dfs(row,col-1)
   }

   //mark the boarder 'O' and its connection with '#'
   for(let row = 0; row < rowLen; row++){
      dfs(row, 0); // check the left column
      dfs(row, colLen-1); // check the right column
   }

   for(let col = 0; col < colLen; col++){
      dfs(0, col); // check the top row
      dfs(rowLen-1, col)// check the bottom row
   }

   for(let row = 0; row < rowLen; row++){
      for(let col = 0; col < colLen; col++){
         if(board[row][col] === 'O'){
            board[row][col] = 'X'
         }
         if(board[row][col] === '#'){
            board[row][col] = 'O'
         }
      }
   }
};

// Solution 2 
// THis solution first check whether it is connected to the border or not and then modifies.
// var solve = function(board) {
//    let flag = true;
//    const rowLen = board.length, colLen = board[0].length;
//    const checked = new Set();

//    const dfsChecker = (row, col) =>{
//       if(row < 0 || row >= rowLen || col < 0 || col >= colLen || board[row][col] === 'X' || checked.has(`${row},${col}`) ) return;
//       checked.add(`${row},${col}`);
//       if(row === 0 || row === rowLen - 1 || col === 0 || col === colLen - 1){
//          flag = false;
//       }
//       dfsChecker(row -1, col); //up
//       dfsChecker(row, col+1); //right
//       dfsChecker(row +1, col); //down
//       dfsChecker(row, col-1); //left
//    }

//    const dfsModifier = (row, col) =>{
//       if(row < 0 || row >= rowLen || col < 0 || col >= colLen || board[row][col] === 'X') return;
//       board[row][col] = 'X';
//       dfsModifier(row - 1, col);
//       dfsModifier(row, col + 1);
//       dfsModifier(row + 1, col);
//       dfsModifier(row, col - 1);

//    }

//    for(let row = 0; row < rowLen; row++){
//       for(let col = 0; col < colLen; col++){
//          if(board[row][col] === 'O' && !checked.has(`${row},${col}`)){
//             dfsChecker(row, col);
//             if(flag === true ){
//                dfsModifier(row, col)
//             }else{
//                flag = true;
//             }
//          }
//       }
//    }

// };

const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve(board);
console.log(board);
