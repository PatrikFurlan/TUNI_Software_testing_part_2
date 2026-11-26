import get from '../src/get.js';

describe('Testing get.js', () => {

  // Test 1: Existing property

  test('Existing property', () => {
    const product = { name: "Honey" };

    const result = get(product, "name");

    expect(result).toBe("Honey");
  });

  // Test 2: Nested property

  test('Nested property', () => {
    const product = {
      producer: {
        name: "Farm"
      }
    };

    const result = get(product, "producer.name");

    expect(result).toBe("Farm");
  });

  // Test 3: Missing property

  test('Missing property', () => {
    const product = { name: "Honey" };

    const result = get(product, "price");

    expect(result).toBe(undefined);
  });

  // Test 4: Null object

  test('Null object', () => {
    const result = get(null, "name", "Unknown");

    expect(result).toBe("Unknown");
  });

});
