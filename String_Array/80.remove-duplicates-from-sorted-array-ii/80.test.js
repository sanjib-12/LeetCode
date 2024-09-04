import { describe, it, expect } from 'vitest';
import { removeDuplicate } from './80';

describe('remove duplicate', () => {
   it('should remove duplicate and return the correct length', () => {
      const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
      const result1 = [0, 0, 1, 1, 2, 2, 3, 3, 4];
      const expectedLength1 = 9;
      const resultLength1 = removeDuplicate(nums1);
      expect(resultLength1).toBe(expectedLength1);
      expect(nums1.slice(0, resultLength1)).toEqual(result1);

      const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
      const result2 = [0, 0, 1, 1, 2, 3, 3];
      const expectedLength2 = 7;
      const resultLength2 = removeDuplicate(nums2);
      expect(resultLength2).toBe(expectedLength2);
      expect(nums2.slice(0, resultLength2)).toEqual(result2);
   });

   it('should handle an empty array', () => {
      const nums = [];
      const expectedLength = 0;
      const resultLength = removeDuplicate(nums);
      expect(resultLength).toBe(expectedLength);
      expect(nums).toEqual([]);
   });

   it('should handle an array with no duplicates', () => {
      const nums = [1, 2, 3, 4, 5];
      const expectedLength = 5;
      const resultLength = removeDuplicate(nums);
      expect(resultLength).toBe(expectedLength);
      expect(nums.slice(0, resultLength)).toEqual([1, 2, 3, 4, 5]);
   });
});
