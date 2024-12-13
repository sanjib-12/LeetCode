/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//    const visited = new Set();
//    let current = head;
//    while (current) {
//       if (visited.has(current)) return true;

//       visited.add(current);
//       current = current.next;
//    }
//    return false;
// };

var hasCycle = function (head) {
   if (!head || !head.next) {
      return false;
   }

   let slow = head;
   let fast = head;

   while (fast && fast.next) {
      slow = slow.next; // Move slow pointer by 1 step
      fast = fast.next.next; // Move fast pointer by 2 steps

      if (slow === fast) {
         // If pointers meet, cycle exists
         return true;
      }
   }

   return false; // If fast pointer reaches the end, no cycle
};

function ListNode(val) {
   this.val = val;
   this.next = null;
}

// Creating a linked list with a cycle
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle here

console.log(hasCycle(node1)); // Output: true

// Creating a linked list without a cycle
let nodeA = new ListNode(1);
let nodeB = new ListNode(2);

nodeA.next = nodeB;

console.log(hasCycle(nodeA)); // Output: false

export { hasCycle };
