// @ 530. Minimum Absolute Difference in BST

import { arrayToTree } from '../Binary Tree/hp.js';

var getMinimumDifference = function (root) {
   let prev = null, 
      res = Infinity;
   
   function dfs(node) {
      if(!node) return;

      dfs(node.left);

      if(prev){
         res = Math.min(res, node.val - prev.val)
      }

      prev = node;
      dfs(node.right);
   }

   dfs(root);
   return res;
};

const root = [4, 2, 6, 1, 3];

const result = getMinimumDifference(arrayToTree(root));

console.log(result);