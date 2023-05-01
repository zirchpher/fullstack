/*
“Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asíncrono y nos mantiene a salvo de problemas y errores.”

Para eso son los callbacks, para que una función no se ejecute hasta que antes se ejecute otra que necesitamos.
*/


function sum(number1, number2) {
    return number1 + number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function calc(number1, number2, callback) {
    return callback(number1, number2);
}

// console.log(calc(3, 5, multiply));

// setTimeout(() => console.log("Hola Mundo"), 3000);

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Remix");