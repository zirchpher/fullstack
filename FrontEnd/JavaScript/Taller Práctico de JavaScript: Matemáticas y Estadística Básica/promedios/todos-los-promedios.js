'use strict';

const Averages = {};

Averages.getAverage = (list) => {
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

Averages.getFashion = (list) => {
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

Averages.isEven = (list) => {
    const numberOfElements = list.length;
    if (numberOfElements % 2 === 0) {
        return true
    }
    else {
        return false;
    }
};

Averages.getMedian = (list) => {
    const numberOfElements = list.length;
    const middleNumber = Math.ceil(numberOfElements / 2);
    list = list.sort((accValue, currValue) => accValue - currValue);
    const isTheListEven = Averages.isEven(list);
    if (isTheListEven) {
        const firstMiddleElement = list[middleNumber];
        const secondMiddleElement = list[middleNumber - 1];

        const middleElementList = [firstMiddleElement, secondMiddleElement];
        const medianOfEvenNumbers = Averages.getAverage(middleElementList);
        return medianOfEvenNumbers;
    }
    else {
        const medianOfOddNumbers = list[middleNumber - 1];
        return medianOfOddNumbers;
    }
}