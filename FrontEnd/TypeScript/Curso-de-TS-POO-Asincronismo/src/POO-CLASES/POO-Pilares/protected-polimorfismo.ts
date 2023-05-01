// Protected
// Protected es muy parecido a Private, pero tienen una pequeña diferencia.
//      Protected     |     Private
// Private: Te prohibe ser accedido desde el exterior y solo puede ser accedida desde la clase misma, mas no en las clases heredadas.
// Protected: Te prohibe ser accedido desde el exterior, pero sí puede ser accedida desde su misma clase y clases hijas.

// Polimorfimo: Reescribir un método que hereda de la clase madre

export abstract class Animal {
    constructor(protected name: string) {}

    eat(): void {
        console.log('The animal is eating!');
    }

    greeting(): string {
        return `Hello, I'm ${this.name}`;
    }
    doSomething(): void {
        console.log('DOOOOO');
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
    doSomething() {
        // Esto ya es polimorfismo
        console.log(`El gatin se llama ${this.name} y el dice RAAAAAAAAA`);
        super.doSomething();
    }
}

const coludito = new Cat('Coludito', 'Remmian');
// coludito.name = 's'; Error la propiedad name está protegida
coludito.doSomething();
