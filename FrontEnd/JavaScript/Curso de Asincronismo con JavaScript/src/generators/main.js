// Generators => used to pause and resume a function's execution.
// yield => is used to pause a function's execution.

function* greet() {
    yield "Hello";
    yield "How are you?";
    yield "I hope you are well.";
}

const greeter = greet();
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());


// Using generators with other functions
function* subSerie() {
    yield "Hola";
    yield "Estoy en la subserie";
}

function* serie() {
    yield "Soy la serie principal";
    yield "RAAAAAAA";
    yield* subSerie();
    yield "Soy la serie otra vez";
}

const serieGenerator = serie();
console.log(serieGenerator.next());
console.log(serieGenerator.next());
console.log(serieGenerator.next());
console.log(serieGenerator.next());
console.log(serieGenerator.next());