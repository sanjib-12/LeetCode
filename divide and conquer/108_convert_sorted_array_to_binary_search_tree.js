/*
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
   this.val = val === undefined ? 0 : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
}

/*
 * @param {number[]} nums
 * @return {TreeNode}
 */

import {treeToArray} from '../Binary Tree/hp.js';
var sortedArrayToBST = function (nums) {

   function helper(l, r){
      if(l > r) return null;

      const m = Math.floor((l+r)/2);
      const root = new TreeNode(nums[m]);
      root.left = helper(l, m-1);
      root.right = helper(m+1, r);
      return root;
   }

   return helper(0, nums.length - 1);
};

const nums = [-10, -3, 0, 5, 9];
const result = sortedArrayToBST(nums);
console.log(treeToArray(result));
