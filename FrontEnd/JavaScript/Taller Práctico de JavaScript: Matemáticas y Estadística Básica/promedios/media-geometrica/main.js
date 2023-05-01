'use strict';

class GeometricAverage {
    constructor({
        list
    }) {
        // Fórmula
        // ga = raiz_Nésima(a * b * c ... * n)
        this.list = list;
        this.listLength = list.length;
    }

    multiplyAllTheNumbers(accValue, currValue) {
        return accValue * currValue;
    }

    ofNumbers() {
        const multiplicationOfAllNumbers = this.list.reduce(this.multiplyAllTheNumbers);
        const geometricAverage = Math.pow(multiplicationOfAllNumbers, 1 / this.listLength);
        return geometricAverage.toFixed(2);
    }

    ofPercentages() {
        for (let index = 0; index < this.listLength; index++) {
            this.list[index] = this.list[index] / 100;
        }
        const multiplicationOfAllNumbers = this.list.reduce(this.multiplyAllTheNumbers);
        const geometricAverage = Math.pow(multiplicationOfAllNumbers, 1 / this.listLength);
        const geometricAverageInPercentages = (geometricAverage * 100).toFixed(2);
        return geometricAverageInPercentages;
    }
}
const schoolNotes = [1, 2, 4, 8, 16];

const ga = new GeometricAverage({
    list: schoolNotes,
});

console.log(ga.ofNumbers());
