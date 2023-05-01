'use strict';
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

// function getFashion(list) {
//     const repeatedObjects = [];

//     list.forEach(function (element) {
//         // Si el "element" es repetido retorna ese objeto en findMatches
//         const findMatches = repeatedObjects.find((object) => {
//             return object.name == element;
//         });

//         // Si findMatches es distinto a undefined es porque ya exite ese objeto en la lista
//         if (findMatches !== undefined) {
//             findMatches.timesRepeated += 1;
//         }
//         // Sino, simplemente agrega ese nuevo objeto a la lista
//         else {
//             repeatedObjects.push({
//                 name: element,
//                 timesRepeated: 1,
//             });
//         }
//     })

//     // orderedListOfRepeatedTimes me retorna una lista ordenada de veces repetidas de manera descendiente
//     const orderedListOfRepeatedTimes = repeatedObjects.sort((accValue, currValue) => {
//         return accValue.timesRepeated - currValue.timesRepeated;
//     });

//     // obtenemos el último elemento porque es el elemento con más veces repetidas
//     const lastElementOfTheOrderedList = orderedListOfRepeatedTimes[orderedListOfRepeatedTimes.length - 1];

//     // obtenemos todos los elementos que tengan las misma cantidad de veces repetidas
//     let fashion = orderedListOfRepeatedTimes.filter((object) => {
//         return object.timesRepeated === lastElementOfTheOrderedList.timesRepeated;
//     });
//     return fashion;
// };

function getFashion(list) {
    const repeatedElements = {};
    for (let element of list) {
        if (repeatedElements[element] >= 1) {
            repeatedElements[element] += 1;
        }
        else {
            repeatedElements[element] = 1;
        }
    }

    const listOfRepeatedElements = Object.entries(repeatedElements);
    const orderedListOfRepeatedElements = listOfRepeatedElements.sort((accValue, currValue) => {
        return accValue[1] - currValue[1];
    });

    const listLength = orderedListOfRepeatedElements.length;
    const fashion = orderedListOfRepeatedElements[listLength - 1];
    return fashion;
}

const schoolNotes = ['🍔', '🌭', '🌭', '🍟', '🥞', '🥪', '🥙', '🍣', '🍕', '🍕', '🌭'];

console.log(getFashion(schoolNotes));
