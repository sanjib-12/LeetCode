function ListNode(val, next) {
   this.val = val === undefined ? 0 : val;
   this.next = next === undefined ? null : next;
}

/*

You’re using recursion to construct the list. While recursive solutions are elegant, they are often not optimal for JavaScript because:

Each recursive call consumes a stack frame.

For large arrays, you risk a stack overflow.

Iterative approaches are more efficient in space and time.

*/

// function arrayToList(arr){
//    if (arr.length === 0) return null;

//    function createList(index){
//       if(index >= arr.length) return null;

//       const list = new ListNode(arr[index]);
//       list.next = createList(index+1);
//       return list;

//    };

//    const head = new ListNode(arr[0]);
//    head.next = createList(1);

//    return head;
// }

function arrayToList(arr) {
   if (arr.length === 0) return null;

   const head = new ListNode(arr[0]);
   let current = head;
   for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
   }
   return head;
}


function listToArray(head){
   if( head === null) return [];

   const arr = new Array();
   while(head){
      arr.push(head.val);
      head = head.next;
   }
   return arr;
}

export { arrayToList, listToArray};
