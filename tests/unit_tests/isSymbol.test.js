import isSymbol from '../../src/isSymbol.js';

describe('Tests for isSymbol()', () => {
  test('returns true for symbol primitives', () => {
    expect(isSymbol(Symbol())).toBe(true);
    expect(isSymbol(Symbol('description'))).toBe(true);
    expect(isSymbol(Symbol.for('shared.key'))).toBe(true);
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  test('returns true for boxed Symbol objects', () => {
    const boxedSymbol = Object(Symbol('boxed'));
    expect(isSymbol(boxedSymbol)).toBe(true);
  });

  test('returns false for null and undefined', () => {
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
  });

  test('returns false for primitives other than symbols', () => {
    expect(isSymbol('symbol')).toBe(false);
    expect(isSymbol('')).toBe(false);
    expect(isSymbol(0)).toBe(false);
    expect(isSymbol(42)).toBe(false);
    expect(isSymbol(NaN)).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(false)).toBe(false);
    expect(isSymbol(10n)).toBe(false);
  });

  test('returns false for non-symbol objects, arrays, and functions', () => {
    expect(isSymbol({})).toBe(false);
    expect(isSymbol({ toString: () => '[object Symbol]' })).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol(new Date())).toBe(false);
    expect(isSymbol(/regex/)).toBe(false);
    expect(isSymbol(() => {})).toBe(false);
  });
});
