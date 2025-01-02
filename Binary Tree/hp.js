function TreeNode(val, left, right) {
   this.val = val === undefined ? 0 : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
}
function _Node(val, left, right, next) {
   this.val = val === undefined ? 0 : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
   this.next = next === undefined ? null : next;
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
            if (arr[rightNodeIndex] === 0 || arr[rightNodeIndex]) {
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

function treeToArray(root) {
   if (root.left === null && root.right === null) return [root.val];
   let result = [];
   const oddLevel = [];
   const evenLevel = [];
   result[0] = root.val;
   oddLevel.push([root, 0]);
   //let count = 0;
   while (oddLevel.length || evenLevel.length) {
      //count++;
      if (oddLevel.length) {
         let current = oddLevel.pop();
         while (current) {
            let leftNodeIndex = current[1] * 2 + 1;
            let rightNodeIndex = current[1] * 2 + 2;
            if (current[0].left) {
               result[leftNodeIndex] = current[0].left.val;
               evenLevel.push([current[0].left, leftNodeIndex]);
            } else if (current[0].left === null) {
               result[leftNodeIndex] = null;
            }
            if (current[0].right) {
               result[rightNodeIndex] = current[0].right.val;
               evenLevel.push([current[0].right, rightNodeIndex]);
            } else if (current[0].right === null) {
               result[rightNodeIndex] = null;
            }
            current = oddLevel.shift();
         }
         continue;
      }
      if (evenLevel.length) {
         let current = evenLevel.pop();
         while (current) {
            let leftNodeIndex = current[1] * 2 + 1;
            let rightNodeIndex = current[1] * 2 + 2;
            if (current[0].left) {
               result[leftNodeIndex] = current[0].left.val;
               oddLevel.push([current[0].left, leftNodeIndex]);
            } else if (current[0].left === null) {
               result[leftNodeIndex] = null;
            }
            if (current[0].right) {
               result[rightNodeIndex] = current[0].right.val;
               oddLevel.push([current[0].right, rightNodeIndex]);
            } else if (current[0].right === null) {
               result[rightNodeIndex] = null;
            }
            current = evenLevel.shift();
         }
         continue;
      }
   }
   while (true) {
      if (
         result[result.length - 1] === undefined ||
         result[result.length - 1] === null
      ) {
         result.pop();
         continue;
      }
      break;
   }
   return result;
}

function arrayToTreeNext(arr) {
   if (arr.length === 0) return null;
   const oddLevel = [];
   const evenLevel = [];
   const root = new _Node(arr[0]);
   oddLevel.push([root, 0]);
   while (oddLevel.length || evenLevel.length) {
      if (oddLevel.length) {
         let current = oddLevel.pop();
         while (current) {
            let leftNodeIndex = current[1] * 2 + 1;
            let rightNodeIndex = current[1] * 2 + 2;
            if (arr[leftNodeIndex]) {
               let leftNode = new _Node(arr[leftNodeIndex]);
               current[0].left = leftNode;
               evenLevel.push([leftNode, leftNodeIndex]);
            }
            if (arr[rightNodeIndex]) {
               let rightNode = new _Node(arr[rightNodeIndex]);
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
               let leftNode = new _Node(arr[leftNodeIndex]);
               current[0].left = leftNode;
               oddLevel.push([leftNode, leftNodeIndex]);
            }
            if (arr[rightNodeIndex]) {
               let rightNode = new _Node(arr[rightNodeIndex]);
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

export { treeToArray, arrayToTree, arrayToTreeNext };
