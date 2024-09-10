//@ 42. Trapping Rain Water
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

// //? Solution 1

// export function trap(height) {
//    let totalArea = 0;
//    let len = height.length;
//    if (len <= 1) {
//       return 0;
//    }
//    let leftColumn = height[0];
//    let coverUnit = 0;
//    for (let i = 1; i < len; i++) {
//       if (leftColumn > height[i]) {
//          coverUnit += leftColumn - height[i];
//          continue;
//       }
//       if (height[i] >= leftColumn) {
//          totalArea += coverUnit;
//          leftColumn = height[i];
//          coverUnit = 0;
//       }
//    }
//    let rightColumn = height[len - 1];
//    coverUnit = 0;
//    for (let i = len - 2; i > 0; i--) {
//       if (rightColumn > height[i]) {
//          coverUnit += rightColumn - height[i];
//          continue;
//       }
//       if (height[i] >= rightColumn) {
//          totalArea += coverUnit;
//          rightColumn = height[i];
//          coverUnit = 0;
//       }
//    }
//    return totalArea;
// }

//? solution 2

export function trap(height) {
   if (height.length <= 2) return 0;

   let left = 0;
   let right = height.length - 1;
   let leftMax = 0;
   let rightMax = 0;
   let totalWater = 0;

   while (left < right) {
      if (height[left] < height[right]) {
         if (height[left] >= leftMax) {
            leftMax = height[left];
         } else {
            totalWater += leftMax - height[left];
         }
         left++;
      } else {
         if (height[right] >= rightMax) {
            rightMax = height[right];
         } else {
            totalWater += rightMax - height[right];
         }
         right--;
      }
   }

   return totalWater;
}
