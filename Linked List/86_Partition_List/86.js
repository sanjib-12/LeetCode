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

var partition = function (head, x) {
   // Dummy nodes for before and after partitions
   let before = new ListNode(0);
   let after = new ListNode(0);

   // Pointers for before and after lists
   let beforeCurrent = before;
   let afterCurrent = after;

   // Traverse through the original list
   while (head != null) {
      if (head.val < x) {
         beforeCurrent.next = head;
         beforeCurrent = beforeCurrent.next;
      } else {
         afterCurrent.next = head;
         afterCurrent = afterCurrent.next;
      }
      head = head.next;
   }

   // End the after list
   afterCurrent.next = null;

   // Connect before list with after list
   beforeCurrent.next = after.next;

   // Return the head of the new list, skipping the dummy node
   return before.next;
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
      partition(createLinkedList([1, 4, 3, 2, 5, 2]), 3),
   ),
);

export { partition };
