//@ 30. Substring with Concatenation of All Words
/*

You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substring.

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].


Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters
*/

//? Solution 1

// export function findSubstring(s, words) {
//    const result = [];
//    const loCWord = [];
//    let left = 0;
//    const wordLength = words[0].length;
//    const wordMap = {};
//    let string = '';

//    words.forEach((word) => {
//       wordMap[word] = !wordMap[word] ? 1 : wordMap[word] + 1;
//    });

//    for (let right = 0; right <= s.length; right++) {
//       if (right - left != wordLength) {
//          string += s[right];
//          continue;
//       }

//       loCWord.push(string);
//       string = '';
//       left += wordLength;
//       right--;
//    }

//    left = 0;
//    let count = 0;
//    let dummy = JSON.parse(JSON.stringify(wordMap));
//    for (let i = 0; i < loCWord.length; i++) {
//       if (dummy[loCWord[i]]) {
//          count++;
//          dummy[loCWord[i]] -= 1;

//          if (count === wordLength) {
//             result.push(left);
//             left += wordLength;
//             dummy[loCWord[i - (count - 1)]] = !dummy[[i - count - 1]]
//                ? 1
//                : dummy[[i - count - 1]] + 1;
//             count--;
//          }
//          continue;
//       }
//       left = i * wordLength;
//       dummy = JSON.parse(JSON.stringify(wordMap));
//       count = 0;
//       if (i != loCWord.length - 1) {
//          i--;
//       }
//    }

//    return result;
// }

export function findSubstring(s, words) {
   if (!s || !words || words.length === 0) return [];

   const wordLen = words[0].length;
   const totalLen = wordLen * words.length;
   const sLen = s.length;

   if (sLen < totalLen) return [];

   const wordCount = {};
   // Populate the word count map
   for (let word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
   }

   const result = [];

   // Slide over the string in word-length steps
   for (let i = 0; i < wordLen; i++) {
      let left = i,
         right = i;
      let currentCount = {};

      while (right + wordLen <= sLen) {
         // Get the current word from the sliding window
         const word = s.substring(right, right + wordLen);
         right += wordLen;

         if (word in wordCount) {
            currentCount[word] = (currentCount[word] || 0) + 1;

            // If we have more occurrences of the word than needed, shrink the window
            while (currentCount[word] > wordCount[word]) {
               const leftWord = s.substring(left, left + wordLen);
               currentCount[leftWord]--;
               left += wordLen;
            }

            // If the window size matches the total concatenation length, it's a valid substring
            if (right - left === totalLen) {
               result.push(left);
            }
         } else {
            // If the word is not in words, reset the window
            currentCount = {};
            left = right;
         }
      }
   }

   return result;
}

const s = 'foobarbaz';
const words = ['baz', 'foo'];

console.log(findSubstring(s, words));
