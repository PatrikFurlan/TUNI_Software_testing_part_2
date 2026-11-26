import chunk from '../src/chunk.js';

describe('chunk.js - Product Search and Filtering', () => {

  test('Evenly divided array', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = chunk(numbers, 2);
    const expected = [[1, 2], [3, 4], [5, 6]];

    expect(result).toEqual(expected);
  });

  test('Unevenly divided array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = chunk(numbers, 3);
    const expected = [[1, 2, 3], [4, 5]];

    expect(result).toEqual(expected);
  });

  test('Empty list', () => {
    const numbers = [];
    const result = chunk(numbers, 3);
    const expected = [];

    expect(result).toEqual(expected);
  });

  test('Fewer elements than chunk size', () => {
    const numbers = [1, 2, 3];
    const result = chunk(numbers, 5);
    const expected = [[1, 2, 3]];

    expect(result).toEqual(expected);
  });

  test('Invalid chunk size', () => {
    const numbers = [1, 2, 3];
    const result = chunk(numbers, 0);
    const expected = [];

    expect(result).toEqual(expected);
  });

  test('Invalid value', () => {
    const numbers = [1, 2, 3];
    const result = chunk(numbers, "a");
    const expected = [];

    expect(result).toEqual(expected);
  });

});
