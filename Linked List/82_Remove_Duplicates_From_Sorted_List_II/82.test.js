import { describe, it, expect } from 'vitest';
import { deleteDuplicates } from './82';

class Node {
   constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
   }
}

function createLinkedList(arr) {
   if (!arr.length) return null;

   // Create nodes first
   const nodes = arr.map((val) => new Node(val));

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

const testCases = [
   {
      input: createLinkedList([1, 2, 3, 3, 4, 4, 5]),
      expected: [1, 2, 5],
      comment: 'test case 1',
   },
   {
      input: createLinkedList([1, 1, 1, 2, 3]),
      expected: [2, 3],
      comment: 'test case 2',
   },
];

describe('deleteDuplicates', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = deleteDuplicates(input);
         //console.log(output);
         expect(convertToArrayRepresentation(output)).toEqual(expected);
      });
   });
});
