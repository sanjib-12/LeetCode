/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
   // if (s.length === 1) return s;
   // let stack = new Array();
   // for (let i = 0; i < s.length; i++) {
   //    if (s[i] === ' ') continue;
   //    if (s[i] === ')') {
   //       while (true) {
   //          let firstPop = stack.pop();
   //          let secondPop = stack.pop();
   //          let thirdPop = stack.pop();
   //          let ans = operation(firstPop, secondPop, thirdPop);
   //          if (stack[stack.length - 1] === '(') {
   //             stack.pop();
   //             stack.push(ans);
   //             break;
   //          }
   //          stack.push(ans);
   //       }
   //       continue;
   //    }
   //    if (stack[stack.length - 1] === '-') {
   //       stack.pop();
   //       stack.push('+');
   //       stack.push(-s[i]);
   //       continue;
   //    }
   //    stack.push(s[i]);
   // }
   // while (stack.length !== 1) {
   //    let firstPop = stack.pop();
   //    let secondPop = stack.pop();
   //    let thirdPop = stack.pop();
   //    let ans = operation(firstPop, secondPop, thirdPop);
   //    stack.push(ans);
   // }
   // return stack.pop();
   // function operation(firstPop, secondPop, thirdPop) {
   //    let ans;
   //    switch (secondPop) {
   //       case '+':
   //          ans = Number(thirdPop) + Number(firstPop);
   //          break;
   //       case '-':
   //          ans = Number(thirdPop) - Number(firstPop);
   //          break;
   //       case '*':
   //          ans = Number(thirdPop) * Number(firstPop);
   //          break;
   //       case '/':
   //          ans = Number(thirdPop) / Number(firstPop);
   //          break;
   //    }
   //    return ans;
   // }
};

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
   const stack = [];
   let currentNumber = 0;
   let total = 0;
   let sign = 1;

   for (let i = 0; i < s.length; i++) {
      const char = s[i];

      if (!isNaN(char) && char !== ' ') {
         currentNumber = currentNumber * 10 + Number(char);
      } else if (char === '+') {
         total += sign * currentNumber;
         sign = 1;
         currentNumber = 0;
      } else if (char === '-') {
         total += sign * currentNumber;
         sign = -1;
         currentNumber = 0;
      } else if (char === '(') {
         stack.push(total);
         stack.push(sign);
         total = 0;
         sign = 1;
      } else if (char === ')') {
         total += sign * currentNumber;
         currentNumber = 0;
         total *= stack.pop();
         total += stack.pop();
      }
   }
   total += sign * currentNumber;

   return total;
};

//debug
const points = '(1+(4+5+2)-3)+(6+8)';
const output = calculate(points);
console.log(output);

export { calculate };
