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
    return average;
}

function getMedian(list) {
    const numberOfElements = list.length;
    const middleNumber = Math.ceil(numberOfElements / 2);
    list = list.sort();
    const isTheListEven = isEven(list);
    if (isTheListEven) {
        const firstMiddleElement = list[middleNumber];
        const secondMiddleElement = list[middleNumber - 1];

        const middleElementList = [firstMiddleElement, secondMiddleElement];
        const medianOfEvenNumbers = getAverage(middleElementList);
        return medianOfEvenNumbers;
    }
    else {
        const medianOfOddNumbers = list[middleNumber - 1];
        return medianOfOddNumbers;
    }
}

const isEven = (list) => {
    const numberOfElements = list.length;
    if (numberOfElements % 2 === 0) {
        return true
    }
    else {
        return false;
    }
};

const schoolNotes = [40, 20, 10, 30, 50, 80]

console.log(getMedian(schoolNotes));