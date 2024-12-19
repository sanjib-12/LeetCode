/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
   constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
   }
}

var rotateRight = function (head, k) {
   if (!head || k === 0) return head;

   let last = head;
   let length = 1;
   while (last.next) {
      last = last.next;
      length++;
   }

   k = k % length;

   if (k === 0) return head;

   last.next = head;
   let stepToNewTail = length - k;
   let newTail = head;

   for (let i = 0; i < stepToNewTail - 1; i++) {
      newTail = newTail.next;
   }

   let newHead = newTail.next;
   newTail.next = null;
   return newHead;
};

function createLinkedList(arr) {
   if (!arr.length) return null;

   // Create nodes first
   const nodes = arr.map((val) => new ListNode(val));

   // Connect next pointers
   for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
   }

   return nodes[0];
}

function convertToArrayRepresentation(head) {
   const result = [];
   //const nodeToIndex = new Map();

   // First pass: create index mapping
   let curr = head;
   //let index = 0;
   while (curr) {
      //nodeToIndex.set(curr, index++);
      result.push(curr.val);
      curr = curr.next;
   }

   return result;
}

console.log(
   convertToArrayRepresentation(
      rotateRight(createLinkedList([1, 2, 3, 4, 5]), 2),
   ),
);

export { rotateRight };
