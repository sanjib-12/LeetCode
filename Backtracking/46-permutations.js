/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
   let result = [];

   const backtrack = (path, used) => {
      if (path.length === nums.length) {
         result.push([...path]);
         return;
      }

      for (let i = 0; i < nums.length; i++) {
         if (used[i]) continue;
         used[i] = true;
         path.push(nums[i]);
         backtrack(path, used);
         path.pop(); // backtrack
         used[i] = false; // backtrack
      }
   };

   backtrack([], Array(nums.length).fill(false));
   return result;
};

let nums = [1,2,3];
console.log(permute(nums));
