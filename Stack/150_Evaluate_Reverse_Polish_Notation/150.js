/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
   const stack = new Array();
   for (let token of tokens) {
      if (!isNaN(token)) {
         stack.push(Number(token));
      } else {
         let first = stack.pop();
         let second = stack.pop();
         let result;
         switch (token) {
            case '+':
               result = second + first;
               break;
            case '-':
               result = second - first;
               break;
            case '*':
               result = second * first;
               break;
            case '/':
               result = Math.trunc(second / first);

               break;
         }
         stack.push(result);
      }
   }
   return stack.pop();
};
//debug
const points = ['4', '13', '5', '/', '+'];
const output = evalRPN(points);
console.log(output);

export { evalRPN };
