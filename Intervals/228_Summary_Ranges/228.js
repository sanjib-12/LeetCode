//@ 228 Summary Ranges

//should retun an array containing smallest sorted list
// function summaryRanges(nums) {
//    if (nums.length === 0) return [];

//    const result = [];
//    for (let i = 0; i < nums.length; i++) {
//       let subset = '';
//       let startingSubset = nums[i].toString();
//       subset = startingSubset;
//       while (nums[i] + 1 === nums[i + 1]) {
//          subset = startingSubset + '->' + nums[i + 1].toString();
//          i++;
//       }
//       result.push(subset);
//    }

//    return result;
// }

function summaryRanges(nums) {
   if (nums.length === 0) return [];

   const result = [];
   let start = 0; // Track the start of each range

   for (let i = 1; i <= nums.length; i++) {
      // Check if the current number is not consecutive or if it's the end of the array
      if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
         // Add range to result
         if (start === i - 1) {
            result.push(nums[start].toString());
         } else {
            result.push(`${nums[start]}->${nums[i - 1]}`);
         }
         start = i; // Update start for the next range
      }
   }

   return result;
}

//debug
// const input = [0, 1, 2, 4, 5, 7];

// const output = summaryRanges(input);
// console.log(output);

export { summaryRanges };
