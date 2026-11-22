import 'jest-chain';
import 'jest-extended/all';
import ceil from '../../src/ceil.js';

describe('Tests for ceil()', () => {
  describe('Happy path and default precision (0)', () => {
    test('rounds positive decimals up to the next integer', () => {
      expect(ceil(4.006)).toBeNumber().toBe(5);
      expect(ceil(4.1)).toBeNumber().toBe(5);
      expect(ceil(4.9)).toBeNumber().toBe(5);
    });

    test('rounds negative decimals toward zero', () => {
      expect(ceil(-4.006)).toBeNumber().toBe(-4);
      expect(ceil(-4.9)).toBeNumber().toBe(-4);
    });

    test('returns integer and zero inputs unchanged', () => {
      expect(ceil(4)).toBeNumber().toBe(4);
      expect(ceil(-4)).toBeNumber().toBe(-4);
      expect(ceil(0)).toBeNumber().toBe(0);
    });
  });

  describe('Positive and negative precision', () => {
    test('rounds up to positive decimal precision', () => {
      expect(ceil(6.004, 2)).toBeNumber().toBe(6.01);
      expect(ceil(6.01, 2)).toBeNumber().toBe(6.01);
      expect(ceil(-6.004, 2)).toBeNumber().toBe(-6);
    });

    test('rounds up to negative precision', () => {
      expect(ceil(6040, -2)).toBeNumber().toBe(6100);
      expect(ceil(6000, -2)).toBeNumber().toBe(6000);
      expect(ceil(-6040, -2)).toBeNumber().toBe(-6000);
    });

    test('treats null or undefined precision as 0', () => {
      expect(ceil(4.2, null)).toBeNumber().toBe(5);
      expect(ceil(4.2, undefined)).toBeNumber().toBe(5);
    });
  });

  describe('Edge cases and coearcion', () => {
    test('handles Infinity and NaN inputs', () => {
      expect(ceil(Infinity)).toBe(Infinity);
      expect(ceil(-Infinity)).toBe(-Infinity);
      expect(ceil(NaN)).toBeNaN();
    });

    test('handles very large numbers in exponential notation', () => {
      expect(ceil(1e20)).toBeNumber().toBe(1e20);
      expect(ceil(1.23e10, 2)).toBeNumber().toBe(1.23e10);
      expect(ceil(1.234e10, 2)).toBeNumber().toBe(1.234e10);
      expect(ceil(1.234e10, -8)).toBeNumber().toBe(1.24e10);
      expect(ceil(1.23e10, -8)).toBeNumber().toBe(1.23e10);
      expect(ceil(1.23e10, -9)).toBeNumber().toBe(1.3e10);
      expect(ceil(-1.234e10, 2)).toBeNumber().toBe(-1.234e10);
      expect(ceil(-1.234e10, -8)).toBeNumber().toBe(-1.23e10);
      expect(ceil(-1.234e10, -9)).toBeNumber().toBe(-1.2e10);
      expect(ceil(1e308)).toBe(1e308);
      expect(ceil(1e308, 1)).toBeNaN();
    });

    test('coerces numeric strings to numbers', () => {
      expect(ceil('4.2')).toBeNumber().toBe(5);
      expect(ceil('6.004', '2')).toBeNumber().toBe(6.01);
    });
  });
});
