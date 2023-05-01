// TODO: Falta implementar la función fibonacci
function* fibonacciSequence(limit) {
    let numeroAnterior = 0;
    let numeroPosterior = 1;
    let suma;
    for (let i = 0; i < limit; i++) {
        suma = numeroAnterior + numeroPosterior;
        numeroAnterior = numeroPosterior;
        numeroPosterior = suma;
        yield suma;
    }
}

console.log(fibonacciSequence(3).next().value);
console.log(fibonacciSequence(3).next().value);
console.log(fibonacciSequence(3).next().value);
console.log(fibonacciSequence(3).next().value);