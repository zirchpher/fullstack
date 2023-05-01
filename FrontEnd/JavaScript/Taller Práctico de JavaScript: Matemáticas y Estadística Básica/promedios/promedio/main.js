'use strict';
// function getAverage(list) {
//     // obtenemos la suma total de elementos
//     let sumTotalOfElements = 0;
//     for (const item of list) {
//         sumTotalOfElements += item;
//     }

//     // obtenemos la cantidad total de elementos
//     const numberOfElements = list.length;

//     // Calculamos el promedio
//     const average = sumTotalOfElements / numberOfElements;
//     return average.toFixed(2);
// }

function getAverage(list) {
    // obtenemos la suma total de elementos
    const sumTotalOfElements = list.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });

    // obtenemos la cantidad total de elementos
    const numberOfElements = list.length;

    // Calculamos el promedio
    const average = sumTotalOfElements / numberOfElements;
    return average.toFixed(2);
}

const schoolNotes = [2, 4, 6]

console.log(getAverage(schoolNotes));