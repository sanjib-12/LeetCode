import { arrayToTree } from './hp.js';

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
   if (!root) return false;
   function dfs(root, targetSum) {
      if (!root) return false;
      targetSum -= root.val;
      if (targetSum === 0 && !root.left && !root.right) return true;

      let leftTree = dfs(root.left, targetSum),
         rightTree = dfs(root.right, targetSum);
      return leftTree || rightTree;
   }
   return dfs(root, targetSum);
};

let root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
   targetSum = 22;
let result = hasPathSum(arrayToTree(root), targetSum);
console.log(result);
