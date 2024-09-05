import { describe, it, expect } from 'vitest';
import { maxProfit } from './122';

describe('Best Time To Buy and Sell Stock 2', () => {
   it('should return the maximum profit with two buy and two sell', () => {
      const prices = [7, 1, 5, 3, 6, 4];
      const expectedOutput = 7;
      const output = maxProfit(prices);
      expect(output).toBe(expectedOutput);

      const prices2 = [7, 1, 5, 3, 4, 1, 2, 6];
      const expectedOutput2 = 10;
      const output2 = maxProfit(prices2);
      expect(output2).toBe(expectedOutput2);
   });
   it('should return the maximum profit', () => {
      const prices = [1, 2, 3, 4, 5];
      const expectedOutput = 4;
      const output = maxProfit(prices);
      expect(output).toBe(expectedOutput);
   });
   it('should return the Zero if the prices are given in the negative numbers', () => {
      const prices = [-1, -2, -3, -4];
      const expectedOutput = 0;
      const output = maxProfit(prices);
      expect(output).toBe(expectedOutput);
   });
});
