/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
   this.val = val === undefined ? 0 : val;
   this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

import {listToArray, arrOfLists } from './linked-list-helper.js';



// var mergeKLists = function (lists) {
//    if (lists.length === 0) return null;
//    if (lists.length === 1) return lists[0];
//    const resultHead = new ListNode();
//    let currentHead = resultHead;

//    let flag = true;
//    while (flag) {
//       let smallest = Infinity;
//       let smallestIndex = -1;
//       flag = false;
//       for (let index = 0; index < lists.length; index++) {
//          if (!lists[index]) continue;
//          if (lists[index]) flag = true;
//          if (lists[index].val < smallest) {
//             smallest = lists[index].val;
//             smallestIndex = index;
//          }
//       }
//       if(flag){
//          lists[smallestIndex] = lists[smallestIndex].next;
//          currentHead.next = new ListNode(smallest);
//          currentHead = currentHead.next;
//       }
//    }
//    return resultHead.next;
// };

var mergeKLists = function(lists) {
   if(lists.length === 0) return null;
   return mergeRange(lists, 0, lists.length-1);
};

function mergeRange(lists, left, right){
   if(left === right) return lists[left];

   const mid = Math.floor((left+right)/2);
   const leftMerged = mergeRange(lists, left, mid);
   const rightMerged = mergeRange(lists, mid+1, right);

   return mergeTwoLists(leftMerged, rightMerged);
}

function mergeTwoLists(l1, l2){
   const headPointer = new ListNode();
   let currentHead = headPointer;

   while(l1 && l2){
      if(l1.val < l2.val){
         currentHead.next = l1
         l1 = l1.next;
      }else {
         currentHead.next = l2
         l2 = l2.next;
      }
      currentHead = currentHead.next;
   }
   if(l1 || l2){
      currentHead.next = l1 || l2;
   }
   return headPointer.next;
}

const lists = [
   [1, 4, 5],
   [1, 3, 4],
   [2, 6],
];
const arr = arrOfLists(lists);

const result = mergeKLists(arr);

console.log(listToArray(result));
