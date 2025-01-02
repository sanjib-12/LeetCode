//@ Invert Binary Tree
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
   if (!root) return root;
   let left = root.left;
   root.left = root.right;
   root.right = left;
   invertTree(root.left);
   invertTree(root.right);
   return root;
};

// Helper Functions
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

let root = [2, 1, 3];
let treeNode = arrayToTree(root);
console.log(invertTree(treeNode));
