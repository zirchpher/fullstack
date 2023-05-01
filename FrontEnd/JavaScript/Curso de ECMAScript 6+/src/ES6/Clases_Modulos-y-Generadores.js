// Módulos en ES6
// import myHello from './module.js'
// console.log(myHello())



// Generators
function* helloWorld() {
    if (true) yield "Este es el mensaje 1";
    if (true) yield "Este es el mensaje 2";
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);