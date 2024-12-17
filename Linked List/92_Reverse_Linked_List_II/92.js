/**
 * Definition for singly-linked list.
 */
// function ListNode(val, next) {
//    this.val = val === undefined ? 0 : val;
//    this.next = next === undefined ? null : next;
// }

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function (head, left, right) {
   if (head.nex === null || left === right) return head;
   const stack = [];
   let curr = head;
   let count = 1;
   let newHead = null;
   let leftPointer = null;
   while (curr) {
      if (count === left) {
         while (count < right) {
            stack.push(curr);
            count++;
            curr = curr.next;
         }
         let rightPointer = curr.next;
         newHead = left === 1 ? curr : head;
         if (leftPointer) leftPointer.next = curr;
         while (stack.length > 0) {
            curr.next = stack.pop();
            curr = curr.next;
         }
         curr.next = rightPointer;
         break;
      }
      leftPointer = curr;
      count++;
      curr = curr.next;
   }
   return newHead;
};

export { reverseBetween };
