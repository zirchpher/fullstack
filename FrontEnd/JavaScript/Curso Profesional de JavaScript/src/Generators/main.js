"use strict";

function* FibonacciSequence(maximumNumber) {
  let a = 0;
  let b = 1;
  // debugger;
  while (a + b < maximumNumber) {
    const nexNumber = a + b;
    yield nexNumber;
    [a, b] = [b, nexNumber]; // destructuring assignment
    // Es lo mismo que decir, a = b y b = nexNumber;
  }
}

const fibo = FibonacciSequence(10);
