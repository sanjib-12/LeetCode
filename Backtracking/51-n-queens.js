/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
   const col = new Set();
   const posDiag = new Set();
   const negDiag = new Set();

   const res =[];
   const board = new Array(n).fill(null).map(()=>new Array(n).fill('.'));

   const backtrack = (r) => {
      if( r === n ){
         const newBoard = board.map(row => row.join(''));
         res.push(newBoard);
      }

      for( let c = 0; c < n; c++ ){
         if( col.has(c) || posDiag.has(r+c) || negDiag.has(r-c)){
            continue;
         }
         col.add(c);
         posDiag.add(r+c);
         negDiag.add(r-c);
         board[r][c]="Q";

         backtrack(r+1);

         col.delete(c);
         posDiag.delete(r+c);
         negDiag.delete(r-c);
         board[r][c]=".";
      }
   }

   backtrack(0);
   return res;

   
};

const n = 4;
console.log(solveNQueens(n));