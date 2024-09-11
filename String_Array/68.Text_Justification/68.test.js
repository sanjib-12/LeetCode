import { describe, it, expect } from 'vitest';
import { fullJustify } from './68';

const testCases = [
   {
      input: {
         words: ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
         maxWidth: 16,
      },
      expected: ['This    is    an', 'example  of text', 'justification.  '],
      comment: 'should justify text with multiple lines',
   },
   {
      input: {
         words: ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
         maxWidth: 16,
      },
      expected: ['What   must   be', 'acknowledgment  ', 'shall be        '],
      comment: 'should handle single word lines',
   },
   {
      input: {
         words: [
            'Science',
            'is',
            'what',
            'we',
            'understand',
            'well',
            'enough',
            'to',
            'explain',
            'to',
            'a',
            'computer.',
            'Art',
            'is',
            'everything',
            'else',
            'we',
            'do',
         ],
         maxWidth: 20,
      },
      expected: [
         'Science  is  what we',
         'understand      well',
         'enough to explain to',
         'a  computer.  Art is',
         'everything  else  we',
         'do                  ',
      ],
      comment: 'should handle complex text with varying word lengths',
   },
];

describe('Text Justification', () => {
   testCases.forEach(({ input, expected, comment }) => {
      it(comment, () => {
         const output = fullJustify(input.words, input.maxWidth);
         expect(output).toEqual(expected);
      });
   });
});
