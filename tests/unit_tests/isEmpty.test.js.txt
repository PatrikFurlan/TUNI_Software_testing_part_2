import isEmpty from '../src/isEmpty.js';

describe('Testing isEmpty.js', () => {

  // Test 1: Null, undefined and primitives

  test('Null, undefined and primitives', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(1)).toBe(true);
  });

  // Test 2: Arrays and strings

  test('Arrays and strings', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("abc")).toBe(false);
  });

  // Test 3: Plain objects

  test('Plain objects', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  // Test 4: Maps and Sets

  test('Maps and Sets', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set([1, 2]))).toBe(false);
  });

});


