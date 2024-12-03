//@ 242  valid anagram

function isAnagram(s, t) {
   if (s.length !== t.length) return false;

   const counter = {};

   for (let char of s) {
      counter[char] = (counter[char] || 0) + 1;
   }

   for (let char of t) {
      if (!counter[char]) return false;
      counter[char]--;
   }

   return true;
}
// solution using Map
// function isAnagram(s, t) {
// if (s.length !== t.length) return false;

// const counter = new Map();

// for (let char of s) {
//    counter.set(char, (counter.get(char) || 0) + 1);
// }

// for (let char of t) {
//    if (!counter.get(char)) return false;
//    counter.set(char, counter.get(char) - 1);
// }

// return true;
// }

//solution using split, sort and json.
// function isAnagram(s, t) {
// if (s.length !== t.length) return false;

// const sString = s.split('').sort();
// const tString = t.split('').sort();

// if (JSON.stringify(sString) !== JSON.stringify(tString)) return false;

// return true;
// }

// debug
const input = {
   s: 'anagram',
   t: 'nagaram',
};

const output = isAnagram(input.s, input.t);
console.log(output);

export { isAnagram };
