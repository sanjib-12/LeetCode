import { describe, it, expect } from 'vitest';
import { majorityElement } from './169';

describe('remove duplicate', () => {
   it('should return the majority elements', () => {
      const nums = [3, 2, 3];
      const expectedAnswer = 3;
      const result = majorityElement(nums);
      expect(result).toBe(expectedAnswer);
   });

   it('should return the majority elements', () => {
      const nums = [2, 2, 1, 1, 1, 2, 2];
      const expectedAnswer = 2;
      const result = majorityElement(nums);
      expect(result).toBe(expectedAnswer);
   });
});
