// Herencia
// La herencia es entre clases es que la clase hija hereda todos sus propiedades y métodos de la clase hija.
// Keyword: extend

export class Animal {
    constructor(public name: string) {}

    eat(): void {
        console.log('The animal is eating!');
    }

    greeting(): string {
        return `Hello, I'm ${this.name}`;
    }
}

export class Cat extends Animal {
    constructor(name: string, public owner: string) {
        super(name);
    }
    maullar(times: number): void {
        for (let index = 1; index <= times; index++) {
            console.log('Miuau');
        }
    }
    whoIs(): void {
        console.log(`Hello, I'm ${this.name} and my owner is ${this.owner}`);
    }
}

const fifi = new Animal('Fifi');
// fifi.eat();

const coludito = new Cat('Coludito', 'Remmian');
// coludito.maullar(4);
console.log(coludito.name);
coludito.whoIs();
