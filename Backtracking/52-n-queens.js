/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
   let res = 0;
   
   const col = new Set();
   const posDgl = new Set();
   const negDgl = new Set();

   const backtrack = (r) => {
      if(r === n){
         res = res + 1;
      }
      for(let c = 0 ; c < n ; c++){
         if(col.has(c) || posDgl.has(r+c) || negDgl.has(r-c)) continue;

         col.add(c);
         posDgl.add(r+c);
         negDgl.add(r-c);;

         backtrack(r+1);

         col.delete(c);
         posDgl.delete(r+c);
         negDgl.delete(r-c);

      }
   }
   backtrack(0);
   return res;
};

const n = 4;
console.log(totalNQueens(n));