import add from '../../src/add.js';

describe("Testing add() - TESTS FROM PART 1", () => {

    describe("Add positive numbers", () => {
        const inputs = [
            [[2, 3], 5],
            [[989, 46081], 47070],
            [[9, 1], 10]
        ];
 
        test.each(inputs)("Add %p to equal %p", (inputPair, expected) => {
            expect(add(inputPair[0], inputPair[1])).toBe(expected);
        });
    });

    describe("Add negative and positive numbers", () => {
        const inputs = [
            [[10, -2], 8],
            [[2, -10], -8],
            [[-10, 2], -8],
            [[-2, 10], 8],
        ];

        test.each(inputs)("Add %p to equal %p", (inputPair, expected) => {
            expect(add(inputPair[0], inputPair[1])).toBe(expected);
        });
    });

    describe("Add two negative numbers", () => {
        const inputs = [
            [[-2, -3], -5],
            [[-10, -2], -12],
            [[-2, -10], -12],
        ];

        test.each(inputs)("Add %p to equal %p", (inputPair, expected) => {
            expect(add(inputPair[0], inputPair[1])).toBe(expected);
        });
    });
});
