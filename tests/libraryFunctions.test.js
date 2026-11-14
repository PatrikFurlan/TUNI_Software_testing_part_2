import add from '../src/add.js';
import upperFirst from '../src/upperFirst.js';

describe("Library function testing", () => {

    describe("Testing add()", () => {

        const inputs = [[[2, 3], 5], [[989, 46081], 47070], [[9, 1], 10]]

        test.each(inputs)("Add %p to equal %p", (inputPair, expected) => {
            expect(add(inputPair[0], inputPair[1])).toBe(expected);
        });
    });
});







