const { sum, divide, multiply } = require("./math");

describe("tests for math", () => {
    describe("sum module", () => {
        test("adds 2 + 3 should be 5", () => {
            const response = sum(2, 3);
            expect(response).toBe(5);
        });
    });

    describe("multiply module", () => {
        test("should be 6", () => {
            const response = multiply(2, 3);
            expect(response).toBe(6);
        });
    });

    describe("divide module", () => {
        test("should divide", () => {
            const response = divide(8, 4);
            expect(response).toBe(2);
            const response2 = divide(12, 4);
            expect(response2).toBe(3);
        });

        test("should divide", () => {
            const response = divide(8, 0);
            expect(response).toBeNull();
            const response2 = divide(0, 12);
            expect(response2).toBeNull();
        });
    });
});
