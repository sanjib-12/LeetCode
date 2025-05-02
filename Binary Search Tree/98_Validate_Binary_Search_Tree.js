import { arrayToTree} from '../Binary Tree/hp.js'

var isValidBST = function(root) {
   let curr = root;
   let prev = -Infinity;

   while( curr !== null){
      if(curr.left === null){
         if(curr.val <= prev) return false;
         prev = curr.val;
         curr = curr.right;
      }else{
         let pred = curr.left;
         while(pred.right !== null && pred.right !== curr){
            pred = pred.right;
         }

         if(pred.right === null){
            pred.right = curr;
            curr = curr.left;
         }else{
            pred.right === null;
            if( curr.val <= prev) return false;
            prev = curr.val;
            curr = curr.right;
         }
      }
   }
   return true;
};

const root = [5,1,4,null,null,3,6]
const result = isValidBST(arrayToTree(root));
console.log(result);