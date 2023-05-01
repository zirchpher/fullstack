/*
    COERCIÓN (Casting)
    Coerción es la forma en la que podemos cambiar un tipo de valor
    a otro, existen dos tipos de coerción:

    Coerción implícita = es cuando el lenguaje nos ayuda
    a cambiar el tipo de valor.

    Coerción explicita = es cuando obligamos a que cambiar
    el tipo de valor.
*/

// Coerción implícita
// Cuando es una suma "+", lo que hace es concatenar(unir datos)
let a = 4 + "7";
// 47

// Cuando es una multiplicación "*", lo que hace es convertir
// el String en Int
let b = 4 * "7";
// 28

// Coerción explicita
// Convertir Número a String
let n = 20;
let c = String(n);
// c = "20"

// Convertir String a Número
let s = "20";
// let r = Number(s);
let r = parseInt(s);
// c = "20"

