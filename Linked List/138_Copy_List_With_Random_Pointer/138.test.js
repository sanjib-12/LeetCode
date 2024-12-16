import { describe, it, expect } from 'vitest';
import { copyRandomList } from './138';

class Node {
   constructor(val = 0, next = null, random = null) {
      this.val = val;
      this.next = next;
      this.random = random;
   }
}

function createLinkedList(arr) {
   if (!arr.length) return null;

   // Create nodes first
   const nodes = arr.map(([val]) => new Node(val));

   // Connect next pointers
   for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
   }

   // Connect random pointers
   arr.forEach(([, randomIndex], i) => {
      if (randomIndex !== null) {
         nodes[i].random = nodes[randomIndex];
      }
   });

   return nodes[0];
}

function convertToArrayRepresentation(head) {
   const result = [];
   const nodeToIndex = new Map();

   // First pass: create index mapping
   let curr = head;
   let index = 0;
   while (curr) {
      nodeToIndex.set(curr, index++);
      result.push([curr.val, null]);
      curr = curr.next;
   }

   // Second pass: set random indices
   curr = head;
   index = 0;
   while (curr) {
      if (curr.random) {
         result[index][1] = nodeToIndex.get(curr.random);
      }
      curr = curr.next;
      index++;
   }

   return result;
}

const testCases = [
   {
      input: createLinkedList([
         [7, null],
         [13, 0],
         [11, 4],
         [10, 2],
         [1, 0],
      ]),
      expected: [
         [7, null],
         [13, 0],
         [11, 4],
         [10, 2],
         [1, 0],
      ],
      comment: 'test case 1',
   },
];

describe('copyRandomList', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = copyRandomList(input);
         expect(convertToArrayRepresentation(output)).toEqual(expected);
      });
   });
});
