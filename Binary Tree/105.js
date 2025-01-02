/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
   this.val = val === undefined ? 0 : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
}
var buildTree = function (preorder, inorder) {
   if (preorder.length === 0 || inorder.length === 0) return null;
   let root = new TreeNode(preorder[0]);
   let mid = inorder.indexOf(preorder[0]);
   root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
   root.right = buildTree(
      preorder.slice(mid + 1, preorder.length),
      inorder.slice(mid + 1, inorder.length),
   );
   return root;
};

let preorder = [3, 9, 20, 15, 7],
   inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
