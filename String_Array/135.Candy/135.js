//@ 135. Candy
/*

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.


Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.


Constraints:

n == ratings.length
1 <= n <= 2 * 104
0 <= ratings[i] <= 2 * 104
*/

// //? Solution 1

// export function candy(ratings) {
//    let len = ratings.length;
//    let candies = new Array(len).fill(1);
//    let totalCandies = 0;
//    for (let i = 0; i < len; i++) {
//       if (ratings[i] > ratings[i - 1]) {
//          if (candies[i] <= candies[i - 1]) {
//             candies[i] += 1;
//          }
//       }
//       if (ratings[i] > ratings[i + 1]) {
//          if (candies[i] <= candies[i + 1]) {
//             candies[i] += 1;
//          }
//       }
//       if (ratings[i] == ratings[i + 1]) {
//          if (candies[i] < candies[i + 1]) {
//             candies[i] += 1;
//          }
//       }
//       totalCandies += candies[i];
//    }
//    return totalCandies;
// }

//? solution 2

export function candy(ratings) {
   const n = ratings.length;
   const candies = new Array(n).fill(1);

   // Forward pass: compare with left neighbor
   for (let i = 1; i < n; i++) {
      if (ratings[i] > ratings[i - 1]) {
         candies[i] = candies[i - 1] + 1;
      }
   }

   // Backward pass: compare with right neighbor
   for (let i = n - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
         candies[i] = candies[i + 1] + 1;
      }
   }

   // Sum up all candies
   return candies.reduce((sum, val) => sum + val, 0);
}
