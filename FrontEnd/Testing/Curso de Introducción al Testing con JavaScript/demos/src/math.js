/**
 * Add two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @return {number} The sum of the two numbers.
 */
function sum(a, b) {
    return a + b;
}

/**
 * multiply two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @return {number} The multiplication of the two numbers.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * divide two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @return {number} The division of the two numbers.
 */
function divide(a, b) {
    if (a === 0 || b === 0) {
        return null;
    }
    return a / b;
}

module.exports = {
    sum,
    multiply,
    divide,
};
