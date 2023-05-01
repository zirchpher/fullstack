// aunque a implementado esto, aun se puede seguir cambiando el valor de count

class makeCounter {
    #count;
    constructor(number) {
        this.#count = number;
        this.#count = 0;
    }
    getCounter() { return this.#count }
    incrementCounter() { return this.#count++ }
    decreaseCounter() { return this.#count-- }
}

const counter = new makeCounter(6);
console.log(counter.getCounter()); // 0