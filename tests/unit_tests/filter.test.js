import filter from '../src/filter.js';

describe('Testing filter.js', () => {

  // Test 1: Filter by category

  test('Filter by category', () => {
    const products = [
      { category: "Fruit" },
      { category: "Vegetable" }
    ];

    const result = filter(
      products,
      p => p.category === "Fruit"
    );

    const expected = [
      { category: "Fruit" }
    ];

    expect(result).toEqual(expected);
  });

  // Test 2: Multiple conditions (price and category)

  test('Multiple conditions - price and category', () => {
    const products = [
      { price: 5, category: "Fruit" },
      { price: 15, category: "Fruit" },
      { price: 8, category: "Vegetable" }
    ];

    const result = filter(
      products,
      p => p.price < 10 && p.category === "Fruit"
    );

    const expected = [
      { price: 5, category: "Fruit" }
    ];

    expect(result).toEqual(expected);
  });

  // Test 3: All elements match

  test('All elements match', () => {
    const products = [
      { price: 6 },
      { price: 15 },
      { price: 8 }
    ];

    const result = filter(
      products,
      p => p.price > 5
    );

    const expected = [
      { price: 6 },
      { price: 15 },
      { price: 8 }
    ];

    expect(result).toEqual(expected);
  });

  // Test 4: No elements match

  test('No elements match', () => {
    const products = [
      { price: 6 },
      { price: 15 },
      { price: 8 }
    ];

    const result = filter(
      products,
      p => p.price > 20
    );

    const expected = [];

    expect(result).toEqual(expected);
  });

});

