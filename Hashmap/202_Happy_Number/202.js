//@ 202 Happy Number

// function isHappy(n) {
//    const Nvisit = new Set();

//    const sumOfSquare = (num) => {
//       let output = 0;
//       while (num !== 0) {
//          let digit = num % 10;
//          output += digit * digit;
//          num = Math.floor(num / 10); // Ensure integer division
//       }
//       return output;
//    };

//    while (!Nvisit.has(n)) {
//       if (n === 1) return true; // Check if n is 1
//       Nvisit.add(n); // Add n to the set
//       n = sumOfSquare(n); // Update n to the sum of squares of its digits
//    }

//    return false; // If we revisit a number, it's not happy
// }

function isHappy(n) {
   const sumOfSquare = (num) => {
      let output = 0;
      while (num !== 0) {
         let digit = num % 10;
         output += digit * digit;
         num = Math.floor(num / 10);
      }
      return output;
   };

   let slow = n;
   let fast = n;

   do {
      slow = sumOfSquare(slow); // Move slow pointer one step
      fast = sumOfSquare(sumOfSquare(fast)); // Move fast pointer two steps
   } while (slow !== fast);

   return slow === 1; // If both meet at 1, it's a happy number
}

const input = 19;

const output = isHappy(input);
console.log(output);

export { isHappy };
