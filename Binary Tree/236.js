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
   let stack = [];
   function bfs(root) {
      if (root === null) return;
      stack.push(root.val);
      bfs(root.left);
      bfs(root.right);
   }
   bfs(root);
   console.log(stack);
};

let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
   p = [5],
   q = [1];

let output = lowestCommonAncestor(arrayToTree(root), p, q);

console.log(output);
