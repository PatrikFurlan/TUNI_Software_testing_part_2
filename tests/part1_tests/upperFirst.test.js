import upperFirst from '../../src/upperFirst.js';

describe("Testing upperFirst() - TESTS FROM PART 1", () => {

    describe("Lowercase strings", () => {
        const inputs = [
            ["hello", "Hello"],
            ["h", "H"],
            ["hello world", "Hello world"],
        ];

        test.each(inputs)("upperFirst(%p) to equal %p", (input, expected) => {
            expect(upperFirst(input)).toBe(expected);
        });
    });

    describe("Uppercase strings", () => {
        const inputs = [
            ["HELLO", "HELLO"],
            ["H", "H"],
            ["HELLO WORLD", "HELLO WORLD"],
        ];

        test.each(inputs)("upperFirst(%p) to equal %p", (input, expected) => {
            expect(upperFirst(input)).toBe(expected);
        });
    });

    describe("Mixed strings", () => {
        const inputs = [
            ["HeLlO", "HeLlO"],
            ["hElLo", "HElLo"],
            ["Hello", "Hello"],
        ];

        test.each(inputs)("upperFirst(%p) to equal %p", (input, expected) => {
            expect(upperFirst(input)).toBe(expected);
        });
    });
});
