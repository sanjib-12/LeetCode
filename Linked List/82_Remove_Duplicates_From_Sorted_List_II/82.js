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

var deleteDuplicates = function (head) {
   let dummy = new ListNode(0);
   dummy.next = head;
   let prev = dummy;
   let current = head;

   while (current) {
      while (current.next && current.val === current.next.val) {
         current = current.next;
      }
      if (prev.next === current) {
         prev = prev.next;
      } else {
         prev.next = current.next;
      }

      current = current.next;
   }

   return dummy.next;
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
      deleteDuplicates(createLinkedList([1, 2, 3, 3, 4, 4, 5])),
   ),
);

export { deleteDuplicates };
