/**
 * @param {string} digits
 * @return {string[]}
 */

//solution 1
var letterCombinations = function (digits) {
   if (digits.length === 0) return [];
   
   const map = {
      '2':['a', 'b', 'c'],
      '3':['d', 'e', 'f'],
      '4':['g', 'h', 'i'],
      '5':['j', 'k', 'l'],
      '6':['m', 'n', 'o'],
      '7':['p', 'q', 'r', 's'],
      '8':['t', 'u', 'v'],
      '9':['w', 'x', 'y', 'z']
   };

   if (digits.length === 1) return map[digits];

   const result = [];

   const backtrack = (index, current) =>{
      if(index === digits.length){
         result.push(current);
         return;
      }

      for( let char of map[digits[index]]){
         backtrack(index+1, current+char)
      }
   }

   backtrack(0, '');
   return result;
};

//@ solution 2
// var letterCombinations = function (digits) {
//    if (digits.length === 0) return [];
   
//    let result;
   
//    const map = new Map([['2', ['a', 'b', 'c']],['3',['d','e','f']], ['4',['g','h','i']], ['5',['j', 'k', 'l']], ['6', ['m', 'n', 'o']], ['7', ['p', 'q', 'r']], ['8', ['t', 'u', 'v']], ['9', ['w', 'x', 'y', 'z']]]);

//    if(digits.length === 1) return map.get(digits);

//    result = map.get(digits[0])
//    for(let i = 1; i< digits.length; i++){
//       let temp = [];
//       let mappedDigit = map.get(digits[i]);
//       for(let charMap of mappedDigit){
//          for(let charRes of result){
//             temp.push(charRes+charMap)
//          }
//       }
//       result = temp;
      
//    }
//    return result;
// };

const digits = '23';
console.log(letterCombinations(digits));
