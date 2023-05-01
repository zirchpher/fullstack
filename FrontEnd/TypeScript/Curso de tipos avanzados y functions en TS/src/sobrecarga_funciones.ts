// Hagamos una función con las siguientes características:
// 1. Si recibe un parámtro de tipo string, debe retornar un array de strings
// 2. Si recibe un parámetro de tipo array de strings, debe retornar un string
// Ejemplos:
// 1. string => ["s","t","r","i","n","g"]
// 2. ["s","t","r","i","n","g"] => "string"

// Solución: Sobrecarga de funciones
function overload(input: string): string[];
function overload(input: string[]): string;

// Problema: ¿Cómo podemos hacer que la función retorne un tipo u otro dependiendo del parámetro que reciba?
function overload(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join("");
    } else {
        return input.split("");
    }
}

// *Si hacemos la función de esta manera, no podemos hacer uso de la inferencia de tipos con Strings pero sí con Arrays
// const overload = (input: string | string[]): string | string[] => {
//     if (Array.isArray(input)) {
//         return input.join("");
//     } else {
//         return input.split("");
//     }
// };

const resultArray = overload("Remix") as string[];

const resultString = overload(["R", "e", "m", "i", "x"]);

console.log("resultString: ", resultString);
console.log("resultArray: ", resultArray);
