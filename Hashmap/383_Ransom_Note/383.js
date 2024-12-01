//@ 383. Ransom Note
/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/
// //@ Solution 1
// export function canConstruct(ransomNote, magazine) {
//    const hashMap = new Map();

//    if (magazine.length < ransomNote.lenth) return false;

//    for (const char of magazine) {
//       hashMap.set(char, (hashMap.get(char) || 0) + 1);
//    }

//    for (const char of ransomNote) {
//       const count = hashMap.get(char);
//       if (!count) return false;
//       hashMap.set(char, count - 1);
//    }

//    return true;
// }

//@ Solution 2
export function canConstruct(ransomNote, magazine) {
   if (magazine.length < ransomNote.length) return false;

   const charCount = {};

   for (const char of magazine) {
      charCount[char] = (charCount[char] || 0) + 1;
   }

   for (const char of ransomNote) {
      if (!charCount[char]) return false;
      charCount[char]--;
   }

   return true;
}

// debug
//for debug remove export from the function.
// const input = {
//    ransomNote: 'aa',
//    magazine: 'aab',
// };

// const output = canConstruct(input.ransomNote, input.magazine);
// console.log(output);
