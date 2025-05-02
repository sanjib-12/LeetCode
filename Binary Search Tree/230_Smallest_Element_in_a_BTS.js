import {arrayToTree} from '../Binary Tree/hp.js'

var kthSmallest = function(root, k) {
   let curr = root;
   let count = 0;

   while(curr !== null){
      if(!curr.left){
         count++;
         if( count === k) return curr.val;
         curr = curr.right;
      }
      else {
         let pred = curr.left;
         while(pred.right !== null && pred.right !== curr){
            pred = pred.right;
         }

         if(!pred.right){
            pred.right = curr;
            curr = curr.left;
         }else{
            pred.right = null;
            count++;
            if(count === k) return curr.val;
            curr=curr.right;
         }
      }
   }
   return null;
};
// var kthSmallest = function(root, k) {
//    if(!root.left && !root.right) return root.val;
//    let kthSmallestValue;
//    let flag = 0;

//    function dfs(node){
//       if(!node) return;

//       dfs(node.left);
//       flag++;

//       if(flag===k){
//          kthSmallestValue = node.val;
//          node.left = null;
//          node.right = null;
//          return;
//       }

//       dfs(node.right)
//    }
//    dfs(root);
//    return kthSmallestValue;
// };

const root = [5,3,6,2,4,null,null,1], k = 3;
const result = kthSmallest(arrayToTree(root), k);
console.log(result);