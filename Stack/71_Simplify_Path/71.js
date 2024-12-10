/**
 * @ Simplify Path
 * https://leetcode.com/problems/simplify-path/
 * @param {string} path
 * @return {string}
 */
// var simplifyPath = function (path) {
//    const stack = [];
//    let curr = '';
//    for (let char of path) {
//       if (char === '/') {
//          if (curr === '..') {
//             if (stack) stack.pop();
//          } else if (curr !== '' && curr !== '.') {
//             stack.push(curr);
//          }
//          curr = '';
//       } else {
//          curr += char;
//       }
//    }
//    if (curr !== '' && curr !== '.' && curr !== '..') stack.push(curr);
//    if (curr === '..') {
//       if (stack) stack.pop();
//    }
//    return '/' + stack.join('/');
// };

// var simplifyPath = function (path) {
//    const splitPath = path.split('/');
//    const stack = [];
//    for (let str of splitPath) {
//       if (str === '..') {
//          if (stack.length !== 0) {
//             stack.pop();
//          }
//       } else if (str !== '' && str !== '.') {
//          stack.push(str);
//       }
//    }
//    return '/' + stack.join('/');
// };

var simplifyPath = function (path) {
   const paths = path.split('/').filter(Boolean),
      stack = [];

   for (let path of paths) {
      if (path === '.') continue;
      else if (path === '..') {
         stack.pop();
      } else {
         stack.push(path);
      }
   }

   return '/' + stack.join('/');
};

//debug
const points = '/.../a/../b/c/../d/./';
const output = simplifyPath(points);
console.log(output);

export { simplifyPath };
