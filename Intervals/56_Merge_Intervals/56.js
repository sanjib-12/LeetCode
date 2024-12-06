//@ 56. Merge Intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//    if (intervals.length === 0) return [];
//    const result = [];
//    //check if the ith last element of array lies in i+1th array.
//    for (let i = 0; i < intervals.length; i++) {
//       const mergedArray = [];
//       const firstArray = intervals[i];
//       const secondArray = intervals[i + 1];
//       if (
//          firstArray.at(-1) >= secondArray.at(0) ||
//          firstArray.at(-1) <= secondArray.at(-1)
//       ) {
//          mergedArray.push(firstArray.at(0));
//          mergedArray.push(secondArray.at(-1));
//          result.push(mergedArray);
//       }
//    }
//    return result;
// };

var merge = function (intervals) {
   if (intervals.length === 0) return [];

   intervals.sort((a, b) => a[0] - b[0]);

   const result = [];
   let currentInterval = intervals[0];

   for (let i = 0; i < intervals.length; i++) {
      const nextInterval = intervals[i];
      if (currentInterval[1] >= nextInterval[0]) {
         currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
      } else {
         result.push(currentInterval);
         currentInterval = nextInterval;
      }
   }
   result.push(currentInterval);
   return result;
};

//debug
// const input = [
//    [1, 3],
//    [2, 6],
//    [8, 10],
//    [15, 18],
// ];

// const output = merge(input);
// console.log(output);

export { merge };
