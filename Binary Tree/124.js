/**
 * @param {TreeNode} root
 * @return {number}
 */

import { arrayToTree } from './hp.js';

var maxPathSum = function (root) {
   let max = -9999;
   function postOrder(root) {
      if (!root) return 0;
      let left = Math.max(postOrder(root.left), 0);
      let right = Math.max(postOrder(root.right), 0);
      max = Math.max(max, left + right + root.val);
      return Math.max(left, right) + root.val;
   }
   postOrder(root);
   return max;
};

let root = [1, 2, 3];
let result = maxPathSum(arrayToTree(root));
console.log(result);
