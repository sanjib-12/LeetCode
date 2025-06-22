/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
   const result = [];
   const dfs = (start, path, sum) => {
      if(sum === target){
         result.push([...path]);
         return;
      }
      if(sum > target) return;

      for(let i = start; i < candidates.length; i++){
         path.push(candidates[i]);
         dfs(i, path, sum+candidates[i]);
         path.pop();
      }
   }
   dfs(0,[],0);
   return result;
};

// Solution 2.
// var combinationSum = function (candidates, target) {
//    const result = new Array();
//    const uniqueValue = new Set();
//    const dfs = function (path, sum) {
//       if(sum === target){
//          let newArr = [...path];
//          newArr.sort((a,b)=> a - b);
//          let unique = '';
//          for(let char of newArr){
//             unique = unique + char;
//          }
//          if(!uniqueValue.has(unique)){
//             uniqueValue.add(unique)
//             result.push([...path]);
//          }
//          return;
//       } else if(sum > target){
//          return;
//       }
//       for(let i = 0; i < candidates.length; i++){
//          let num = candidates[i];
//          path.push(num);
//          sum = sum + num;
//          dfs(path, sum);
//          sum = sum - num;
//          path.pop();
//       }

//    };
//    let sum = 0;
//    dfs([], sum);
//    return result;
// };

const candidates = [2, 3, 6, 7],
   target = 7;
const result = combinationSum(candidates, target);
console.log(result);
