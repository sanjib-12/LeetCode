//@ Lowest Common Ancestor of a Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

import { arrayToTree } from './hp.js';

var lowestCommonAncestor = function (root, p, q) {
   if (!root || root === p || root === q) {
      return root;
   }

   let left = lowestCommonAncestor(root.left, p, q);
   let right = lowestCommonAncestor(root.right, p, q);

   if (left && right) {
      return root;
   }

   return left || right;
};

let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
   p = [5, 6, 2, null, null, 7, 4],
   q = [4];

let output = lowestCommonAncestor(
   arrayToTree(root),
   arrayToTree(p),
   arrayToTree(q),
);

console.log(output);
