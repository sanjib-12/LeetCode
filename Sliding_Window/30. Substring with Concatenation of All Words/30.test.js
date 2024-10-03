import { describe, it, expect } from 'vitest';
import { findSubstring } from './30';

const testCases = [
   {
      input: 'barfoothefoobarman',
      words: ['foo', 'bar'],
      expected: [0, 9],
      comment:
         'should return index 0 and 9 as the string contains a permutation of words',
   },
   {
      input: 'wordgoodgoodgoodbestword',
      words: ['word', 'good', 'best', 'word'],
      expected: [],
      comment:
         'should return an empty array as the string does not contain a permutation of words',
   },
   {
      input: 'barfoofoobarthefoobarman',
      words: ['bar', 'foo', 'the'],
      expected: [6, 9, 12],
      comment:
         'should return indices 6, 9, and 12 as the string contains a permutation of words',
   },
   {
      input: '',
      words: ['word'],
      expected: [],
      comment: 'should return an empty array for an empty string',
   },
];

describe('Find Substring Concatenation of All Words', () => {
   testCases.forEach(({ input, words, expected, comment }) => {
      it(comment, () => {
         const output = findSubstring(input, words);
         expect(output.sort()).toEqual(expected.sort());
      });
   });
});
