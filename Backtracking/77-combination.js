/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
   const result = [];

   const dfs = (start, path) => {
      if (path.length === k) {
         result.push([...path]);
         return;
      }

      for (let i = start; i <= n; i++) {
         path.push(i);
         dfs(i + 1, path);
         path.pop();
      }
   };

   dfs(1, []);
   return result;
};

const n = 4,
   k = 2;
console.log(combine(n, k));
