"use strict";
// El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
const piratas = ["Piratas Corazón",
    "Piratas Barba Blanca",
    ["Piratas Sombrero de Paja", ["Luffy", "Nami", "Zoro", "Robin", "Usopp", "Sanji"]],
    ["Piratas de Kid", ["Eustass Kid", "Killer"]],
];
const profundidad = Infinity;
// Infinity => Me imprime todos los elementos sin importar la profunidad
const bandasYPiratas = piratas.flat(profundidad);
console.log(bandasYPiratas);


// flat.map
// Es idéntico a map() seguido de flat() de profundidad 1, pero un poco más eficiente que llamar a esos dos métodos por separado.
// Es como llamar al método .map() y .flat() al mismo tiempo
const numbers = [2, 4, 6, 8, 10, 12, 14, 16];
const squaredNumbers = numbers.flatMap(number => [number, number ** 2]);


// trimStart(): Elimina Espacios restantes al inicio de un String.
// trimEnd(): Elimina Espacios restantes al final de un String.
// trim(): Hace lo mismo que .TrimStart() .TrimEnd() al mismo tiempo
const password = "            misupercontraseña123              ";
// console.log(password);
// console.log(password.trimStart());
// console.log(password.trimEnd());
// console.log(password.trim());


// Optional Catch Binding;
// Puede ser opcional enviar como parámetro el keyword error en un catch{}
{
    try {

    }
    // catch (error) {
    //     console.log(error);
    // }
    //ES10
    catch {
        console.log(error);
    }
}


// FromEntries
// Convierte un Array en un objeto
const datasWithList = [
    ["name", "Remix"],
    ["age", 20]
];
const datasWithObj = Object.fromEntries(datasWithList);


// Objetos de tipo símbolo
// Ayuda a obtener una descripción
const description = "This is the description of my symbol";
const symbol = Symbol(description);