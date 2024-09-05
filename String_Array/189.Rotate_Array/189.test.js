import { describe, it, expect } from 'vitest';
import { rotate } from './189';

describe('Rotate Array', () => {
   it('should return the majority elements', () => {
      const nums = [1, 2, 3, 4, 5, 6, 7];
      const k = 3;
      const expectedAnswer = [5, 6, 7, 1, 2, 3, 4];
      const result = rotate(nums, k);
      expect(result).toStrictEqual(expectedAnswer);

      const nums1 = [-1, -100, 3, 99];
      const k1 = 2;
      const expectedAnswer1 = [3, 99, -1, -100];
      const result1 = rotate(nums1, k1);
      expect(result1).toStrictEqual(expectedAnswer1);
   });
});
