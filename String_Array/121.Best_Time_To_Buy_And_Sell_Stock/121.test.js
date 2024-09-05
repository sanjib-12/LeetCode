import { describe, it, expect } from 'vitest';
import { maxProfit } from './121';

describe('Best Time To Buy and Sell Stock', () => {
   it('should return the maximum difference between the two number', () => {
      const prices = [7, 1, 5, 3, 6, 4];
      const expectedOutput = 5;
      const output = maxProfit(prices);
      expect(output).toBe(expectedOutput);
   });
   it('should return the Zero if there is no greater number than its left', () => {
      const prices = [7, 6, 4, 3, 1];
      const expectedOutput = 0;
      const output = maxProfit(prices);
      expect(output).toBe(expectedOutput);
   });
   it('should return the Zero if the prices are given in the negative num\bers', () => {
      const prices = [-1, -2, -3, -4];
      const expectedOutput = 0;
      const output = maxProfit(prices);
      expect(output).toBe(expectedOutput);
   });
});
