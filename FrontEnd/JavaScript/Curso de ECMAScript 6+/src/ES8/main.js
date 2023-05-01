"use strict";
// Object entries, Object Values, Padding y Trailing-Comas

const recursos = {
    name: "Remix",
    cargo: "Developer",
    age: 20,
}

// Object entries
// Convierte la estructura de un objeto pero ==> en un Array
const recursosPeroEnArray = Object.entries(recursos);

// Object Values
// Convierte SOLO LOS VALUES de un objeto ==> en un Array
const valuesDelRecursoEnArray = Object.values(recursos);

// Padding
// Nos permite agregar texto a un String, al inicio o al final
const frase = "Vive la vida, y no dejes que la vida te viva";
const stringLength = frase.length;
console.log(frase.padStart(stringLength + 5, "No!! "));
console.log(frase.padEnd(stringLength + 11, ". Me gustó!"));
console.log(frase);