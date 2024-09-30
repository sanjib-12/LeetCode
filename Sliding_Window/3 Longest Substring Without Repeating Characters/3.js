//@ 3. Longest Substring Without Repeating Characters
/*
Given a string s, find the length of the longest 
substringwithout repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

//? Solution 1

export function lengthOfLongestSubstring(s) {
   let longestLength = 0;
   let charMap = new Map();
   let left = 0;

   for (let right = 0; right < s.length; right++) {
      if (charMap.has(s[right])) {
         left = Math.max(left, charMap.get(s[right]) + 1);
      }
      charMap.set(s[right], right);
      longestLength = Math.max(longestLength, right - left + 1);
   }

   return longestLength;
}
