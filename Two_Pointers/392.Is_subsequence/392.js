//@ 392. Is Subsequence
/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters
*/

//? Solution 1

export function isSubsequence(s, t) {
   let i = 0;
   let j = 0;

   while (j < t.length && i < s.length) {
      if (s[i] === t[j]) {
         i++;
      }
      j++;
   }

   return i === s.length;
}
