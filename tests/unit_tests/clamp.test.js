import 'jest-chain';
import 'jest-extended/all';
import clamp from '../../src/clamp.js';

describe('Tests for clamp()', () => {
  describe('Happy path and boundary tests', () => {
    test('clamps a value below the lower bound up to lower', () => {
      const result = clamp(-10, -5, 5);

      expect(result).toBeNumber().toBe(-5);
    });

    test('clamps a value above the upper bound down to upper', () => {
      const result = clamp(10, -5, 5);

      expect(result).toBeNumber().toBe(5);
    });

    test('keeps a value already within bounds unchanged', () => {
      const result = clamp(2, -5, 5);

      expect(result).toBeNumber().toBe(2);
    });

    test('returns exact bound when value equals lower or upper', () => {
      expect(clamp(-5, -5, 5)).toBeNumber().toBe(-5);
      expect(clamp(5, -5, 5)).toBeNumber().toBe(5);
    });

    test('supports floating-point numbers and negative zero', () => {
      expect(clamp(0.25, 0, 1)).toBeNumber().toBeCloseTo(0.25);
      expect(clamp(-0, -5, 5)).toBeNumber().toBe(-0);
    });
  });

  describe('Edge cases and NaN / bound handling', () => {
    test('defaults NaN lower or upper bounds to 0', () => {
      expect(clamp(-3, NaN, 5)).toBeNumber().toBe(-3);
      expect(clamp(3, -5, NaN)).toBeNumber().toBe(3);
      expect(clamp(2, NaN, NaN)).toBeNumber().toBe(2);
    });

    test('returns NaN when input number is NaN', () => {
      const result = clamp(NaN, -5, 5);

      expect(result).toBeNaN();
    });

    test('handles inverted bounds where lower is greater than upper', () => {
      const result = clamp(3, 10, -10);

      expect(result).toBeNumber().toBe(10);
    });

    test('handles equal lower and upper bounds', () => {
      expect(clamp(7, 4, 4)).toBeNumber().toBe(4);
      expect(clamp(1, 4, 4)).toBeNumber().toBe(4);
    });
  });

  describe('Type coercion and non-number inputs', () => {
    test('coerces numeric strings to numbers', () => {
      expect(clamp('10', '-5', '5')).toBeNumber().toBe(5);
      expect(clamp('-10', '-5', '5')).toBeNumber().toBe(-5);
    });

    test('coerces null and booleans via unary plus', () => {
      expect(clamp(null, -5, 5)).toBeNumber().toBe(0);
      expect(clamp(true, 0, 5)).toBeNumber().toBe(1);
      expect(clamp(false, -5, 5)).toBeNumber().toBe(0);
    });

    test('returns NaN when number coerces to NaN (e.g. non-numeric string)', () => {
      const result = clamp('abc', -5, 5);

      expect(result).toBeNaN();
    });

    test('treats non-numeric lower/upper strings as NaN and defaults them to 0', () => {
      expect(clamp(2, 'invalid', 5)).toBeNumber().toBe(2);
      expect(clamp(2, -5, 'invalid')).toBeNumber().toBe(2);
    });
  });
});

