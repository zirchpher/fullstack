"use strict";

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        this.length--;
        const lastItem = this.data[this.length];
        delete this.data[this.length];
        return lastItem;
    }

    delete(index) {
        const itemToDelete = this.data[index];
        this.sortIndices(index);
        return itemToDelete;
    }

    sortIndices(initialIndex) {
        this.length--;

        for (let i = initialIndex; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length];
    }

    // Delete the first element
    shift() {
        this.sortIndices(0);
    }

    // Add elements at the start
    unshift(newItem) {
        for (let index = this.length; index > 0; index--) {
            this.data[index] = this.data[index - 1];
        }
        this.data[0] = newItem;

        this.length++;
        return this.data[0];
    }
}

const newArray = new MyArray();
newArray.push("a");
newArray.push("b");
newArray.push("c");
newArray.push("d");

// console.log(newArray);
// newArray.shift(0);
// newArray.unshift("remmian");
console.log(newArray.pop());
console.log(newArray);
