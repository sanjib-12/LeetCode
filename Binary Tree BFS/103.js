//@ Binary Tree ZigZag Level Order Traversal

import { arrayToTree } from '../Binary Tree/hp.js';

var zigzagLevelOrder = function (root) {
   if (!root) return [];

   const result = [];
   const queue = [root];
   let level = 0;

   while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];

      for (let i = 0; i < levelSize; i++) {
         const node = queue.shift();

         currentLevel.push(node.val);

         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);
      }
      if (level % 2 === 1) {
         currentLevel.reverse();
      }
      result.push(currentLevel);
      level++;
   }
   return result;
};

//solution 2
// var zigzagLevelOrder = function (root) {
//    if (!root) return [];

//    const result = [];
//    const queue = [root];
//    let isRightToLeft = false;

//    while (queue.length > 0) {
//       const levelSize = queue.length;
//       const currentLevel = [];

//       for (let i = 0; i < levelSize; i++) {
//          const node = queue.shift();

//          if (isRightToLeft) {
//             currentLevel.unshift(node.val);
//          } else {
//             currentLevel.push(node.val);
//          }

//          if (node.left) queue.push(node.left);
//          if (node.right) queue.push(node.right);
//       }
//       result.push(currentLevel);
//       isRightToLeft = !isRightToLeft;
//    }
//    return result;
// };

const root = [3, 9, 20, null, null, 15, 7];
const result = zigzagLevelOrder(arrayToTree(root));
console.log(result);
