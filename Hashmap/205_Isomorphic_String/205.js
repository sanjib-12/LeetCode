//@ 205. Isomorphic Strings
/*


Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/
//@ Solution 1
// export function isIsomorphic(s, t) {
//    if (s.length != t.length) return false;

//    const smap = {};
//    const tmap = {};

//    for (const char of s) {
//       smap[char] = (smap[char] || 0) + 1;
//    }

//    for (const char of t) {
//       tmap[char] = (tmap[char] || 0) + 1;
//    }

//    let svalue = Object.values(smap).sort();
//    let tvalue = Object.values(tmap).sort();

//    console.log(svalue);
//    console.log(tvalue);
//    const areEqual = JSON.stringify(svalue) === JSON.stringify(tvalue);

//    if (!areEqual) return false;

//    return true;
// }
// //@ Solution 2
export function isIsomorphic(s, t) {
   if (s.length !== t.length) {
      return false;
   }

   const mappingSToT = {};
   const mappingTToS = {};

   for (let i = 0; i < s.length; i++) {
      // Check mapping of s[i] to t[i]
      if (mappingSToT[s[i]] !== undefined) {
         if (mappingSToT[s[i]] !== t[i]) {
            return false;
         }
      } else {
         mappingSToT[s[i]] = t[i];
      }

      // Check mapping of t[i] to s[i]
      if (mappingTToS[t[i]] !== undefined) {
         if (mappingTToS[t[i]] !== s[i]) {
            return false;
         }
      } else {
         mappingTToS[t[i]] = s[i];
      }
   }

   return true;
}

// debug
//for debug remove export from the function.
// const input = {
//    s: 'egg',
//    t: 'add',
// };

// const output = isIsomorphic(input.s, input.t);
// console.log(output);
