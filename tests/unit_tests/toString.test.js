import 'jest-chain';
import 'jest-extended/all';
import toString from '../../src/toString.js';

describe('Tests for toString()', () => {
  describe('Happy path and primitive conversions', () => {
    test('returns string inputs unchanged', () => {
      expect(toString('hello')).toBeString().toBe('hello');
      expect(toString('')).toBeString().toBe('');
    });

    test('converts numbers to strings', () => {
      expect(toString(42)).toBeString().toBe('42');
      expect(toString(3.14)).toBeString().toBe('3.14');
      expect(toString(0)).toBeString().toBe('0');
    });

    test('preserves negative zero (-0)', () => {
      expect(toString(-0)).toBeString().toBe('-0');
    });

    test('converts booleans to strings', () => {
      expect(toString(true)).toBeString().toBe('true');
      expect(toString(false)).toBeString().toBe('false');
    });

    test('converts symbols to their string representation', () => {
      expect(toString(Symbol('foo'))).toBeString().toBe('Symbol(foo)');
      expect(toString(Symbol.iterator)).toBeString().toBe('Symbol(Symbol.iterator)');
    });
  });

  describe('Arrays and nested values', () => {
    test('converts flat arrays to comma-separated strings', () => {
      expect(toString([1, 2, 3])).toBeString().toBe('1,2,3');
      expect(toString(['a', 'b', 'c'])).toBeString().toBe('a,b,c');
    });

    test('converts nested arrays and preserves -0 inside arrays', () => {
      expect(toString([1, [2, 3], 4])).toBeString().toBe('1,2,3,4');
      expect(toString([-0])).toBeString().toBe('-0');
    });

    test('handles empty arrays', () => {
      expect(toString([])).toBeString().toBe('');
    });
  });

  describe('Edge cases and special values', () => {
    test('converts null and undefined via template string coercion', () => {
      expect(toString(null)).toBeString().toBe('null');
      expect(toString(undefined)).toBeString().toBe('undefined');
      expect(toString()).toBeString().toBe('undefined');
    });

    test('converts Infinity and -Infinity to strings', () => {
      expect(toString(Infinity)).toBeString().toBe('Infinity');
      expect(toString(-Infinity)).toBeString().toBe('-Infinity');
    });

    test('converts NaN to "NaN"', () => {
      expect(toString(NaN)).toBeString().toBe('NaN');
    });

    test('converts plain objects using default stringification', () => {
      expect(toString({})).toBeString().toBe('[object Object]');
    });
  });
});
