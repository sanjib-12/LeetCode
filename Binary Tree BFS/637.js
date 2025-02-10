/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

import { arrayToTree } from '../Binary Tree/hp.js';

var averageOfLevels = function (root) {
   const result = [];

   const queue = [root];

   while (queue.length !== 0) {
      const levelLength = queue.length;

      let levelSum = 0;

      for (let i = 0; i < levelLength; i++) {
         const node = queue.shift();
         levelSum += node.val;

         if (node.left) {
            queue.push(node.left);
         }

         if (node.right) {
            queue.push(node.right);
         }
      }

      result.push(levelSum / levelLength);
   }
   return result;
};

let root = [3, 9, 20, null, null, 15, 7];
let output = averageOfLevels(arrayToTree(root));
console.log(output);
