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
 * @return {number}
 */

import { arrayToTree } from './hp.js';
var countNodes = function (root) {
   if (!root) return 0;
   return countNodes(root.left) + countNodes(root.right) + 1;
};

let root = [1, 2, 3, 4, 5, 6];
let output = countNodes(arrayToTree(root));
console.log(output);
