//@ remove-duplicates-from-sorted-array-ii
export function removeDuplicate(nums) {
   let i = 0;

   for (let j = 0; j < nums.length; j++) {
      if (i < 2 || nums[j] !== nums[i - 2]) {
         nums[i] = nums[j];
         i++;
      }
   }

   return i;
}
