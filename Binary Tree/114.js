import { arrayToTree } from './hp.js';
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
   if (!root) return;

   let curr = root;
   while (curr) {
      if (curr.left) {
         // Find the rightmost node of the left subtree
         let rightmost = curr.left;
         while (rightmost.right) {
            rightmost = rightmost.right;
         }

         // Connect the right subtree to the rightmost node of left subtree
         rightmost.right = curr.right;

         // Move the left subtree to the right
         curr.right = curr.left;
         curr.left = null;
      }
      // Move to the next node
      curr = curr.right;
   }
};

let root = [1, 2, 5, 3, 4, null, 6];
let result = flatten(arrayToTree(root));
console.log(result);
