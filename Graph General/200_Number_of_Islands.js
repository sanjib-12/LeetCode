/**
 * @param {character[][]} grid
 * @return {number}
 */
//Solution using BFS
var numIslands = function(grid) {
   if (!grid || grid.length === 0) return 0;
   const rowLen = grid.length, colLen = grid[0].length;
   const visit = new Set();
   let islands = 0;

   function bfs(row,col){
      let queue = [[row,col]];
      while(queue.length > 0){
         let[row, col] = queue.shift();
         if(row < 0 || row >= rowLen || col < 0 || col >= colLen || grid[row][col] === '0' || visit.has(`${row},${col}`) ) continue ;
         visit.add(`${row},${col}`);
         queue.push([row+1, col], [row-1, col], [row, col + 1], [row, col - 1])
      }
      
   }
   for(let row = 0; row < rowLen; row++){
      for(let col = 0; col < colLen; col++){
         if (grid[row][col] === '1' && !visit.has(`${row},${col}`) ){
            bfs(row,col) 
            islands++;
         }
      }
   }
   return islands;
};
//Solution using DFS
// var numIslands = function(grid) {
//    if (!grid) return 0;
//    const rowLen = grid.length, colLen = grid[0].length;
//    const visit = new Set();
//    let islands = 0;

//    function dfs(row,col){
//       if(row < 0 || row >= rowLen || col < 0 || col >= colLen || grid[row][col] === '0' || visit.has(`${row},${col}`) ) return ;
//       visit.add(`${row},${col}`);
//       dfs(row -1, col); //up
//       dfs(row, col+1); //right
//       dfs(row +1, col); //down
//       dfs(row, col-1); //left
//    }
//    for(let row = 0; row < rowLen; row++){
//       for(let col = 0; col < colLen; col++){
//          if (grid[row][col] === '1' && !visit.has(`${row},${col}`) ){
//             dfs(row,col) 
//             islands++;
//          }
//       }
//    }
//    return islands;
// };


const input = [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
   ];
console.log(numIslands(input));