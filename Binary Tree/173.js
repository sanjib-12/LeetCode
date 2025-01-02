//@ Binary Search Tree Iterator
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { arrayToTree } from './hp.js';
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
   this.stack = [];
   this._pushLeft(root);
};

BSTIterator.prototype._pushLeft = function (node) {
   while (node) {
      this.stack.push(node);
      node = node.left;
   }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
   const node = this.stack.pop();
   if (node.right) {
      this._pushLeft(node.right);
   }
   return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
   return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
let bSTIterator = new BSTIterator(arrayToTree([7, 3, 15, null, null, 9, 20]));
console.log(bSTIterator.next()); // return 3
console.log(bSTIterator.next()); // return 7
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 9
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 15
console.log(bSTIterator.hasNext()); // return True
console.log(bSTIterator.next()); // return 20
console.log(bSTIterator.hasNext()); // return False
