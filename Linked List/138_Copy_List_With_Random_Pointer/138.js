function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
}

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
   // Handle empty list
   if (!head) return null;

   // Step 1: Create interweaved list
   let curr = head;
   while (curr) {
      // Create new node and insert after current node
      const newNode = new Node(curr.val);
      newNode.next = curr.next;
      curr.next = newNode;
      curr = newNode.next;
   }

   // Step 2: Connect random pointers
   curr = head;
   while (curr) {
      // The new node is right after the original node
      if (curr.random) {
         curr.next.random = curr.random.next;
      }
      curr = curr.next.next;
   }

   // Step 3: Separate lists
   const newHead = head.next;
   let oldCurr = head;
   let newCurr = newHead;

   while (oldCurr) {
      // Restore original list
      oldCurr.next = newCurr.next;
      oldCurr = oldCurr.next;

      // Connect new list
      if (oldCurr) {
         newCurr.next = oldCurr.next;
         newCurr = newCurr.next;
      }
   }

   return newHead;
};

export { copyRandomList };
