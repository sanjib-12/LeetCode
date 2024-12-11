// var MinStack = function () {
//    this.stack = new Array();
//    this.minStack;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//    this.stack.push(val);
//    return [];
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//    this.stack.pop();
//    return [];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//    return this.stack[this.stack.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//    this.minStack = [...this.stack].sort((a, b) => a - b);
//    return this.minStack[0];
// };

// var obj = new MinStack();
// console.log(obj.push(-2));
// console.log(obj.push(0));
// console.log(obj.push(-3));
// console.log(obj.getMin());
// console.log(obj.pop());
// console.log(obj.top());
// console.log(obj.getMin());

var MinStack = function () {
   this.stack = [];
   this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
   this.stack.push(val);
   // Push the value onto minStack if it's the new minimum
   if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
   ) {
      this.minStack.push(val);
   }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
   let removed = this.stack.pop();
   // Pop from minStack only if the popped value is the current minimum
   if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
   }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
   return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
   return this.minStack[this.minStack.length - 1];
};

// Testing
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.push(-1);
console.log(obj.getMin()); // -3
obj.pop();
console.log(obj.top()); // 0
console.log(obj.getMin()); // -2
