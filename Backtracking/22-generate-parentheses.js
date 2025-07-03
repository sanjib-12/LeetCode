/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
   let result = [];

   const backtrack = (op, cp, path) => {
      if (op === cp && op === n) {
         result.push(path);
         return;
      }

      if(op < n){
         backtrack(op+1, cp, path+'(');
      }

      if(cp < op){
         backtrack(op, cp+1, path+')');
      }

   };

   backtrack(0, 0, '');
   return result;
};

// Solution 2
// var generateParenthesis = function (n) {
//    let result = [];

//    const backtrack = (op, cp, path) => {
//       if (op === cp && op === n) {
//          result.push(path.join(''));
//          return;
//       }

//       if (op < cp) return;

//       if(op < n){

//          path.push('(');
//          op = op + 1;
//          backtrack(op, cp, path);
//          path.pop();
//          op = op -1;
//       }
//       if (cp < op && cp < n) {
//          path.push(')')
//          cp = cp + 1;
//          backtrack(op, cp, path);
//          path.pop();

//       }

//    };

//    backtrack(0, 0, []);
//    return result;
// };

const n = 2;
console.log(generateParenthesis(n));
