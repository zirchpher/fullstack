// Closures son funciones que recuerdan el entorno en el que fueron creadas
// Además de las variables locales, también recuerdan las variables globales
// Para que se cumple esto, las funciones internas deben ser retornadas
// y se debe crear una instancia de la función dentro de una variable
// Ejm: const printColorGreen = makeColorPrinter('red');

function makeColorPrinter(color) {
    const colorMessage = `The color is ${color}`;

    function printColor() {
        console.log(colorMessage);
    }

    return printColor;
}

const printColorGreen = makeColorPrinter('red');


// * USOS DE CLOSURES

// 1. Para crear funciones privadas
function makeCounter(number) {
    let count = number;

    return {
        getCounter() { return count },
        incrementCounter() { return count++ },
        decreaseCounter() { return count-- },
    };
}

const counter = makeCounter(6);
console.log(counter.getCounter());

