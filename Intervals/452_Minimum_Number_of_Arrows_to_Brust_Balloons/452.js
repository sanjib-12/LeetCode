/**
 * 452_Minimum_Number_of_Arrows_to_Brust_Balloons
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function (points) {
//    if (points.length === 0) return 0;
//    points.sort((a, b) => a[0] - b[0]);
//    let count = 1;
//    let currentBalloon = [...points[0]];
//    for (let i = 1; i < points.length; i++) {
//       if (currentBalloon[1] >= points[i][0]) {
//          continue;
//       } else {
//          currentBalloon = [...points[i]];
//          count++;
//       }
//    }
//    console.log(points);
//    return count;
// };
var findMinArrowShots = function (points) {
   if (points.length === 0) return 0;

   // Sort by the end of the balloon range
   points.sort((a, b) => a[1] - b[1]);

   let count = 1;
   let currentEnd = points[0][1];

   for (let i = 1; i < points.length; i++) {
      if (points[i][0] > currentEnd) {
         count++;
         currentEnd = points[i][1];
      }
   }

   return count;
};

//debug
const points = [
   [10, 16],
   [2, 8],
   [1, 6],
   [7, 12],
];
const output = findMinArrowShots(points);
console.log(output);

export { findMinArrowShots };
