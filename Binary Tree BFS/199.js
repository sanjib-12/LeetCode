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
var rightSideView = function (root) {
   if (!root) return [];

   let result = [];
   let queue = [root];

   while (queue.length > 0) {
      let levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
         let node = queue.shift();

         if (i === levelSize - 1) {
            result.push(node.val);
         }
         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);
      }
   }

   return result;
};

let root = [5, 3, 6, 1, 4, null, null, null, 2];
let output = rightSideView(arrayToTree(root));
console.log(output);
