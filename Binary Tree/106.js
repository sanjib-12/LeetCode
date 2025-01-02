/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

import { treeToArray } from './hp.js';

function TreeNode(val, left, right) {
   this.val = val === undefined ? 0 : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
}

var buildTree = function (inorder, postorder) {
   // Create a map to store value -> index mapping for inorder traversal
   // This helps us quickly find root positions without repeated searches
   const inorderMap = new Map();
   for (let i = 0; i < inorder.length; i++) {
      inorderMap.set(inorder[i], i);
   }

   // Helper function that builds tree for a given range of indices
   function buildTreeHelper(inStart, inEnd, postStart, postEnd) {
      // Base case: if ranges are invalid, return null
      if (inStart > inEnd || postStart > postEnd) {
         return null;
      }

      // The last element in postorder range is the root of current subtree
      const rootValue = postorder[postEnd];
      const root = new TreeNode(rootValue);

      // Find position of root in inorder traversal
      const rootIndex = inorderMap.get(rootValue);

      // Calculate size of left subtree
      const leftSubtreeSize = rootIndex - inStart;

      // Recursively build left and right subtrees
      // For left subtree:
      //   - inorder: [inStart, rootIndex - 1]
      //   - postorder: [postStart, postStart + leftSubtreeSize - 1]
      root.left = buildTreeHelper(
         inStart,
         rootIndex - 1,
         postStart,
         postStart + leftSubtreeSize - 1,
      );

      // For right subtree:
      //   - inorder: [rootIndex + 1, inEnd]
      //   - postorder: [postStart + leftSubtreeSize, postEnd - 1]
      root.right = buildTreeHelper(
         rootIndex + 1,
         inEnd,
         postStart + leftSubtreeSize,
         postEnd - 1,
      );

      return root;
   }

   // Start the tree building process with full ranges of both arrays
   return buildTreeHelper(0, inorder.length - 1, 0, postorder.length - 1);
};

let inorder = [9, 3, 15, 20, 7],
   postorder = [9, 15, 7, 20, 3];
let result = treeToArray(buildTree(inorder, postorder));
console.log(result);
