function ListNode(val, next) {
   this.val = val === undefined ? 0 : val;
   this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
   if (arr.length === 0) return null;
   const headPointer = new ListNode(0);
   let curr = headPointer;
   for (let index = 0; index < arr.length; index++) {
      curr.next = new ListNode(arr[index]);
      curr = curr.next;
   }
   return headPointer.next;
}

function listToArray(head) {
   if (!head) return [];
   const arr = [];
   while (head) {
      arr.push(head.val);
      head = head.next;
   }
   return arr;
}

function arrOfLists(arrs) {
   if (!arrs.length) arrs;
   for (let index = 0; index < arrs.length; index++) {
      arrs[index] = arrayToList(arrs[index]);
   }
   return arrs;
}

export { arrayToList, listToArray, arrOfLists};