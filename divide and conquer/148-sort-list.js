/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
   this.val = val === undefined ? 0 : val;
   this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 import { arrayToList, listToArray } from './helper.js';

// var sortList = function (head) {
//    if (!head || !head.next) return head;


//    //find the length
//    let length = 0;
//    let node = head;
//    while(node){
//       length++;
//       node = node.next;
//    }

//    let dummy = new ListNode(0);
//    dummy.next = head;

//    for(let size = 1; size < length; size *= 2){
//       let curr = dummy.next;
//       let tail = dummy;

//       while(curr){
//          let left =curr;
//          let right = split(left, size);
//          curr = split(right, size);
//          let merged = merge(left, right);
//          tail.next = merged.head;
//          tail = merged.tail;
//       }
//    }
//    return dummy.next;
// }

// function split(head, size){
//    if(!head) return null;
//    for(let i=1; head.next && i < size; i++){
//       head = head.next;
//    }
//    let next = head.next;
//    head.next = null;
//    return next;

// }

// function merge(l1, l2){
//    let dummy = new ListNode(0);
//    let tail = dummy;

//    while (l1 && l2){
//       if(l1.val < l2.val){
//          tail.next = l1;
//          l1 = l1.next;

//       }else{
//          tail.next = l2;
//          l2 = l2.next;
//       }
//       tail = tail.next;
//    }
//    tail.next = l1 || l2;

//    while (tail.next) tail = tail.next;

//    return { head: dummy.next, tail };
// }


var sortList = function (head) {
   if (!head || !head.next) return head;

   let left = head;
   let right = getMid(head);
   let temp = right.next;
   right.next = null;
   right = temp;

   left = sortList(left);
   right = sortList(right);

   return merge(left, right);

}

function getMid(head){
   let slow = head, fast = head.next;
   while(fast&& fast.next){
      slow = slow.next;
      fast = fast.next.next;
   }
   return slow;
}

function merge(l1, l2){
   const dummy = new ListNode(0);
   let tail = dummy;
   while(l1 && l2){
      if(l1.val < l2.val){
         tail.next = l1;
         l1 = l1.next;
      }else{
         tail.next = l2;
         l2 =  l2.next
      }
      tail = tail.next;
   }
   tail.next = l1 || l2;
   return dummy.next;
}


//@ solution one
// the below is the selection sort recursion.
//rearrange() finds the minimum node, places it at the head, and reconstructs the list recursively.
//
// var sortList = function (head) {
//    if (head === null || head.next === null) return head;

//    function rearrange(head) {
//       if (head.next === null) return head;

//       let smallestHead = head;
//       let current = head;
//       let lastNode;
//       while (current) {
//          if (current.val < smallestHead.val) {
//             smallestHead = current;
//          }
//          if (current.next === null) {
//             lastNode = current;
//          }

//          current = current.next;
//       }
//       lastNode.next = head;
//       current = smallestHead.next;
//       while (current.next !== smallestHead) {
//          current = current.next;
//       }

//       current.next = null;

//       return smallestHead;
//    }

//    let resultHead = rearrange(head);
//    let current = resultHead;
//    while (current.next !== null) {
//       current.next = rearrange(current.next);
//       current = current.next;
//    }

//    return resultHead;
// };

// var sortList = function (head) {
//    if (head === null || head.next === null) return head;

//    let smallestHead = head;
//    let current = head;
//    let lastNode;
//    while (current) {
//       if (current.val < smallestHead.val) {
//          smallestHead = current;
//       }
//       if (current.next === null) {
//          lastNode = current;
//       }

//       current = current.next;
//    }
//    lastNode.next = head;
//    current = smallestHead.next;
//    while (current.next !== smallestHead) {
//       current = current.next;
//    }

//    current.next = null;

//    function rearrange(node) {
//       let smallestNode = node;
//       let currentNode = node;
//       let pre = node;
//       while (currentNode) {
//          if (currentNode.val < smallestNode.val) {
//             pre.next = currentNode.next;
//             currentNode.next = smallestNode;
//             smallestNode = currentNode;
//             currentNode = pre.next;
//             continue;
//          }
//          pre = currentNode;
//          currentNode = currentNode.next;
//       }
//       return smallestNode;
//    }

//    current = smallestHead;
//    while (current !== null) {
//       current.next = rearrange(current.next);
//       current = current.next;
//    }

//    return smallestHead;
// };



const head = [4, 2, 1, 3];
const result = sortList(arrayToList(head));
console.log(listToArray(result))