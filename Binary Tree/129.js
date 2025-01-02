//@ Sum Root to Leaf Number
/**
 * @param {TreeNode} root
 * @return {number}
 */
import { arrayToTree } from './hp.js';

var sumNumbers = function (root) {
   let total = '';
   //const arr = [];
   function bfs(root, total) {
      total += root.val;
      if (!root.left && !root.right) {
         return parseInt(total);
      }

      let left = root.left && bfs(root.left, total);
      let right = root.right && bfs(root.right, total);
      return left + right;
   }
   return bfs(root, total);
};

let root = [4, 9, 0, 5, 1];
let output = sumNumbers(arrayToTree(root));
console.log(output);
