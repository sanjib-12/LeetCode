import { arrayToTreeNext } from './hp.js';

//@ Populating Next Right Pointers in Each Node II
/**
 * @param {_Node} root
 * @return {_Node}
 */

function _Node(val, left, right, next) {
   this.val = val === undefined ? null : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
   this.next = next === undefined ? null : next;
}

var connect = function (root) {
   if (!root) {
      return null;
   }

   // Start with the root node
   let current = root;

   // Continue till we have levels to process
   while (current) {
      // Dummy node to help build the next level's connections
      const dummy = new _Node(0);
      // Temp will be used to traverse and build the next level
      let temp = dummy;

      // Process current level and build connections for next level
      while (current) {
         // Connect left child if exists
         if (current.left) {
            temp.next = current.left;
            temp = temp.next;
         }

         // Connect right child if exists
         if (current.right) {
            temp.next = current.right;
            temp = temp.next;
         }

         // Move to next node at current level using 'next' pointer
         current = current.next;
      }

      // Move to the first node of next level
      current = dummy.next;
   }

   return root;
};

let root = [1, 2, 3, 4, 5, null, 7];
let result = connect(arrayToTreeNext(root));
console.log(result);
