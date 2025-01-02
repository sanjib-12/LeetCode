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
 * @return {boolean}
 */
var isSymmetric = function (root) {
   function dfs(left, right) {
      if (!left && !right) return true;
      if (!left || !right) return false;
      return (
         left.val === right.val &&
         dfs(left.left, right.right) &&
         dfs(left.right, right.left)
      );
   }
   return dfs(root.left, root.right);
};

function TreeNode(val, left, right) {
   this.val = val === undefined ? 0 : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
}

function arrayToTree(arr) {
   if (arr.length === 0) return null;
   const oddLevel = [];
   const evenLevel = [];
   const root = new TreeNode(arr[0]);
   oddLevel.push([root, 0]);
   while (oddLevel.length || evenLevel.length) {
      if (oddLevel.length) {
         let current = oddLevel.pop();
         while (current) {
            let leftNodeIndex = current[1] * 2 + 1;
            let rightNodeIndex = current[1] * 2 + 2;
            if (arr[leftNodeIndex]) {
               let leftNode = new TreeNode(arr[leftNodeIndex]);
               current[0].left = leftNode;
               evenLevel.push([leftNode, leftNodeIndex]);
            }
            if (arr[rightNodeIndex]) {
               let rightNode = new TreeNode(arr[rightNodeIndex]);
               current[0].right = rightNode;
               evenLevel.push([rightNode, rightNodeIndex]);
            }
            current = oddLevel.pop();
         }
         continue;
      }
      if (evenLevel.length) {
         let current = evenLevel.pop();
         while (current) {
            let leftNodeIndex = current[1] * 2 + 1;
            let rightNodeIndex = current[1] * 2 + 2;
            if (arr[leftNodeIndex]) {
               let leftNode = new TreeNode(arr[leftNodeIndex]);
               current[0].left = leftNode;
               oddLevel.push([leftNode, leftNodeIndex]);
            }
            if (arr[rightNodeIndex]) {
               let rightNode = new TreeNode(arr[rightNodeIndex]);
               current[0].right = rightNode;
               oddLevel.push([rightNode, rightNodeIndex]);
            }
            current = evenLevel.pop();
         }
         continue;
      }
   }
   return root;
}

let root = [1, 2, 2, 3, 4, 4, 3];
let rootNode = arrayToTree(root);
let result = isSymmetric(rootNode);
console.log(result);
