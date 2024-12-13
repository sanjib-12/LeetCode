import { describe, it, expect } from 'vitest';
import { hasCycle } from './141';

class ListNode {
   constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
   }
}

// Helper function to create a linked list with a cycle
function createLinkedListWithCycle(values, pos) {
   const nodes = values.map((val) => new ListNode(val));
   for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
   }
   if (pos !== -1) {
      nodes[nodes.length - 1].next = nodes[pos];
   }
   return nodes[0];
}

// Helper function to create a linked list without a cycle
function createLinkedList(values) {
   return createLinkedListWithCycle(values, -1);
}

const testCases = [
   {
      input: createLinkedListWithCycle([3, 2, 0, -4], 1),
      expected: true,
      comment: 'test case 1: linked list has a cycle',
   },
   {
      input: createLinkedListWithCycle([1, 2], 0),
      expected: true,
      comment: 'test case 2: linked list has a cycle connecting to the head',
   },
   {
      input: createLinkedList([1]),
      expected: false,
      comment: 'test case 3: single node without a cycle',
   },
   {
      input: createLinkedList([1, 2, 3, 4]),
      expected: false,
      comment: 'test case 4: multiple nodes without a cycle',
   },
];

describe('hasCycle', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = hasCycle(input);
         expect(output).toEqual(expected);
      });
   });
});
