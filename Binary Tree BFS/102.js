//@ Binary Tree Level Order Traversal

import { arrayToTree } from '../Binary Tree/hp.js';

var levelOrder = function (root) {
   if (!root) return [];

   const result = [];
   const queue = [root];

   while (queue.length > 0) {
      const leveSize = queue.length;
      const currentLevel = [];

      for (let i = 0; i < leveSize; i++) {
         const node = queue.shift();

         currentLevel.push(node.val);

         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);
      }
      result.push(currentLevel);
   }
   return result;
};
const root = [3, 9, 20, null, null, 15, 7];
const result = levelOrder(arrayToTree(root));
console.log(result);
