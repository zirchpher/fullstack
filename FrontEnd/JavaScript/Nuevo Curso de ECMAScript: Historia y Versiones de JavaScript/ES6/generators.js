// Generator
function* iterator(array) {
    for (const item of array) {
        yield item;
    }
}

const names = ["Remix", "Ana", "Juliana", "María", "José", "Martín"];
const generator = iterator(names);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);