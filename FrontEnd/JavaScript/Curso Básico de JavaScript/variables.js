/*
    DIFERENCIAS ENTRE VAR, LET Y CONST

    Var: Es una variable que puede cambiar su valor en un futuro y su alcance es Global. Surgió en ECMAScript5.
    Es decir, si declaras un var dentro de un loop, podrás acceder a esa variable desde cualquier parte.

    Const: Es una variable constante que no puede cambiar nunca su valor en un futuro.

    Let: Es una variable que puede cambiar su valor pero solo funciona en un bloque donde se declare ( {let} ).
    Esto ya es más acostumbrado a lo que te ofrecen todos los lenguajes, es decir que con let sí tendremos "Scope" de variables.

    RECOMENDACIÓN: Siempre usar let.
*/


let nombre = "Remix";

// Declaración
let edad;
// Inicialización
edad = 30;

// Array
let smartphone = ["Apple", "Xiomi", "Honor", "Samsung"];

// Diccionarios
let capitals = {
    Peru: "Lima",
    Japan: "Tokyo",
    Brazil: "Brasilia",
    Uruguay: "Montevideo"
};