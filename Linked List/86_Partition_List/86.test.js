import { describe, it, expect } from 'vitest';
import { partition } from './86';

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
      input: createLinkedList([1, 4, 3, 2, 5, 2]),
      x: 3,
      expected: [1, 2, 2, 4, 3, 5],
      comment: 'test case 1',
   },
   {
      input: createLinkedList([2, 1]),
      x: 2,
      expected: [1, 2],
      comment: 'test case 2',
   },
];

describe('partition', () => {
   testCases.forEach(({ input, x, expected, comment }) => {
      it(comment, () => {
         const output = partition(input, x);
         //console.log(output);
         expect(convertToArrayRepresentation(output)).toEqual(expected);
      });
   });
});
