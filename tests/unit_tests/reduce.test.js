import 'jest-chain';
import 'jest-extended/all';
import reduce from '../../src/reduce.js';

describe('Tests for reduce()', () => {
  describe('Happy path tests', () => {
    test('sums an array of numbers with initial accumulator', () => {
      const result = reduce([1, 2], (sum, n) => sum + n, 0);

      expect(result).toBeNumber().toBe(3);
    });

    test('concatenates strings onto an initial string accumulator', () => {
      const result = reduce(['wor', 'ld'], (acc, x) => `${acc}${x}`, 'Hello ');

      expect(result).toBeString().toBe('Hello world');
    });

    test('sums numeric values of a plain object', () => {
      const result = reduce({ a: 2, b: 3 }, (sum, n) => sum + n, 0);

      expect(result).toBeNumber().toBe(5);
    });
  });

  describe('Array and empty collection edge cases', () => {
    test('returns initial accumulator when array is empty', () => {
      const result = reduce([], (acc, x) => acc + x, 4);

      expect(result).toBeNumber().toBe(4);
    });

    test('reduces single-element array with initial accumulator', () => {
      const result = reduce([1], (acc, x) => acc + x, 0);

      expect(result).toBeNumber().toBe(1);
    });

    test('returns undefined when reducing an empty array without an accumulator', () => {
      const result = reduce([], (acc, x) => acc + x);

      expect(result).toBeUndefined();
    });

    test('uses first element as initial accumulator when omitted', () => {
      const result = reduce([10, 3, 2], (acc, x) => acc - x);

      expect(result).toBeNumber().toBe(5);
    });

    test('returns initial accumulator when object is empty', () => {
      const result = reduce({}, (sum, n) => sum + n, 4);

      expect(result).toBeNumber().toBe(4);
    });
  });

  describe('Type mismatches and non-standard inputs', () => {
    test('returns initial accumulator when collection is null', () => {
      const result = reduce(null, (acc, x) => acc + x, 0);

      expect(result).toBeNumber().toBe(0);
    });

    test('iterates over string characters when adding to numeric accumulator', () => {
      const result = reduce('Hello', (acc, x) => acc + x, 0);

      expect(result).toBeString().toBe('0Hello');
    });

    test('throws TypeError when iteratee calls a missing method on accumulator', () => {
      expect(() => reduce('Hello', (acc, x) => acc.append(x), 0)).toThrow(TypeError);
    });
  });
});
