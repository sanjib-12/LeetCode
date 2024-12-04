//@ 128 Longest Consecutive Sequence

function longestConsecutive(nums) {
   if (nums.length === 0) return 0;

   const numSet = new Set(nums);
   let longest = 0;

   for (let num of numSet) {
      if (!numSet.has(num - 1)) {
         let currentNum = num;
         let currentStreak = 1;

         while (numSet.has(currentNum + 1)) {
            currentNum += 1;
            currentStreak += 1;
         }

         longest = currentStreak > longest ? currentStreak : longest;
      }
   }
   return longest;
}

//debug
// const input = [100, 4, 200, 1, 3, 2];

// const output = longestConsecutive(input);
// console.log(output);

export { longestConsecutive };
