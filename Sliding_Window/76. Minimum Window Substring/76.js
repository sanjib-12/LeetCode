//@ 76. Minimum Window Substring
/*
Given two strings s and t of lengths m and n respectively, return the minimum window substringof s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
*/

//? Solution 1

export function minWindow(s, t) {
   if (!s || !t || t.length === 0) return '';

   let charMap = {}; // Frequency map for characters in t
   for (let char of t) {
      charMap[char] = (charMap[char] || 0) + 1;
   }

   let left = 0,
      right = 0;
   let minLen = Infinity,
      minStart = 0;
   let required = Object.keys(charMap).length;
   let formed = 0;
   let windowCounts = {}; // Frequency map for the current window

   while (right < s.length) {
      let char = s[right];
      windowCounts[char] = (windowCounts[char] || 0) + 1;

      // If the current character matches its required frequency, increase formed
      if (charMap[char] && windowCounts[char] === charMap[char]) {
         formed++;
      }

      // Try to contract the window
      while (left <= right && formed === required) {
         char = s[left];

         // Update minimum length window
         if (right - left + 1 < minLen) {
            minLen = right - left + 1;
            minStart = left;
         }

         // Remove the leftmost character from the window
         windowCounts[char]--;
         if (charMap[char] && windowCounts[char] < charMap[char]) {
            formed--;
         }

         left++;
      }

      right++;
   }

   return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
}

// function minWindow(s, t) {
//    if (!s || !t || t.length === 0) return '';

//    let minStr = '';
//    let result = undefined;
//    const charMap = {};

//    for (let i = 0; i < t.length; i++) {
//       charMap[t[i]] = (charMap[t[i]] || 0) + 1;
//    }
//    let left = undefined;
//    let indexes = [];
//    let dummyMap = {};
//    let count = 0;
//    for (let i = 0; i < s.length; i++) {
//       if (charMap[s[i]]) {
//          indexes.push(i);
//          count++;
//          dummyMap[s[i]] = (dummyMap[s[i]] || 0) + 1;

//          if (t.length === 1) return s[i];

//          if (dummyMap[s[i]] > charMap[s[i]]) {
//             count = 1;
//             indexes = [];
//             indexes.push(i);
//             dummyMap = {};
//             dummyMap[s[i]] = (dummyMap[s[i]] || 0) + 1;
//          }

//          if (count === t.length) {
//             left = indexes.shift();
//             minStr = s.slice(left, i + 1);
//             result = !result
//                ? minStr
//                : minStr.length <= result.length
//                  ? minStr
//                  : result;
//             count--;
//             dummyMap[s[left]] -= dummyMap[s[left]];
//          }
//       }
//    }
//    return !result ? '' : result;
// }

// let s = 'aaaaaaaaaaaabbbbbcdd';
// let t = 'abcdd';
// console.log(minWindow(s, t));
