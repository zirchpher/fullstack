// * Flat => Cuando tenemos arrays dentro de arrays, a eso le llamamos niveles. Flat lo que hace es unir todos los elementos a un solo nivel

const matrices = [
    [2, 3, 6, [98, 41, 48, [734, 409, 734, 462]]],
    [5, 6, 6, [43, 80, 73, [763, 837, 644, 984]]],
    [8, 9, 6, [62, 48, 62, [120, 092, 644, 983]]],
    [1, 3, 0, [91, 84, 92, [275, 325, 644, 538]]],
];

const pets = ["cat", "dog", "chicken"];

// function flatten(array) {
//     // Verificamos si hay arrays dentro del array
//     let isArray = false;
//     for (const item of array) {
//         if (Array.isArray(item)) {
//             isArray = true;
//             break;
//         }
//     }

//     const newArray = [];
//     if (isArray) {

//         for (const item of array) {
//             newArray.push(item);
//         }

//         // for (let i = 0; i < array.length; i++) {
//         //     const firstPass = array[i];
//         //     for (let j = 0; j < firstPass.length; j++) {
//         //         const element = array[i][j];
//         //         newArray.push(element);
//         //     }
//         // }

//         return flatten(newArray);
//     }
//     else console.log("Ya no hay arrays!!!")
// }


/*
    Método Fino
*/
function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray = profundidad(matrices);
console.log("Método Fino", newArray);


// OWN METHOD
function flatten(list) {
    // listFlatten ya es un string con todos los elementos del array sin importar la profundidad
    let listFlatten = "" + list;

    // listFlatten lo tranformo a array
    listFlatten = listFlatten.split(",");
    return listFlatten;
}
console.log("Own Method", flatten(matrices));


// FLAT METHOD
const allItems = matrices.flat(Infinity);
console.log("Flat Method: ", allItems);

// Another Method
function flattenShortVersion(list) {
    // Esto transforma en string la lista sin importar la profundidad y luego crea una nueva lista
    let flattenList = matrices.join(",").split(",");
    // La lista anterior está hecha con elementos string, ahora tranformamos esos elementos en números
    flattenList = flattenList.map(matrixItem => Number(matrixItem));
    return flattenList;
}

console.log("AnotherMethod: ", flattenShortVersion(matrices));