//@ 54. Spiral Matrix
/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

//? Solution 1
export function spiralOrder(matrix) {
   if (matrix.length === 0) return [];

   let left = 0;
   let right = matrix[0].length - 1;
   let top = 0;
   let bottom = matrix.length - 1;
   let result = [];

   while (left <= right && top <= bottom) {
      // Traverse from left to right across the top row
      for (let col = left; col <= right; col++) {
         result.push(matrix[top][col]);
      }
      top++;

      // Traverse from top to bottom down the right column
      for (let row = top; row <= bottom; row++) {
         result.push(matrix[row][right]);
      }
      right--;

      // Traverse from right to left across the bottom row (if still valid)
      if (top <= bottom) {
         for (let col = right; col >= left; col--) {
            result.push(matrix[bottom][col]);
         }
         bottom--;
      }

      // Traverse from bottom to top up the left column (if still valid)
      if (left <= right) {
         for (let row = bottom; row >= top; row--) {
            result.push(matrix[row][left]);
         }
         left++;
      }
   }

   return result;
}

// let input = [
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
// ];

// console.log(spiralOrder(input));
