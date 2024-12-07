/**
 *
 * https://leetcode.com/problems/insert-interval/
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
   const result = [];
   let i = 0;

   // Add all intervals that come before newInterval
   while (i < intervals.length && intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
      i++;
   }

   // Merge overlapping intervals
   while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
   }
   result.push(newInterval); // Add the merged interval

   // Add all intervals that come after newInterval
   while (i < intervals.length) {
      result.push(intervals[i]);
      i++;
   }

   return result;
   // if (newInterval.length === 0) return intervals;
   // const result = [];
   // let currentInterval = intervals[0];
   // for (let i = 1; i <= intervals.length; i++) {
   //    if (newInterval[0] > currentInterval[1]) {
   //       result.push(currentInterval);
   //       currentInterval = intervals[i];
   //       continue;
   //    }
   //    if (newInterval[0] <= currentInterval[1]) {
   //       currentInterval[1] = Math.max(newInterval[1], currentInterval[1]);
   //    }
   //    if (currentInterval[1] >= intervals[i][0]) {
   //       currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
   //    }
   //    result.push(currentInterval);
   // }
   // return result;
};

//debug

// const output = insert(intervals, newInterval);
// console.log(output);

export { insert };
