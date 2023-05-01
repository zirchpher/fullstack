// Concat => une 2 array

const pairNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

// Concat Method
const allNumbers = pairNumbers.concat(oddNumbers);
console.log("Concat Method", allNumbers, "\n");

// spreadOperation Method
const spreadMethod = [...pairNumbers, ...oddNumbers];
console.log("spread Method", spreadMethod, "\n");

// push Method
const pushMethod = [];
pushMethod.push(...pairNumbers);
pushMethod.push(...oddNumbers);
console.log("push Method", pushMethod, "\n");

