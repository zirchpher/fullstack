// Funciones

// Funciones que no retornan ningún valor
function printHelloWorld(): void {
    console.log("Hello World");
}

printHelloWorld(); // Hello World

// Partes de una función
//          ----------------Parámetros-------------- -Valor de retorno-
//                  firstNumber y secondNumber           : number
function sum(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
}

// Funciones que retornan a otras funciones
// Cuando una función retorna otra función, le indicamos con los signos "()" => string.
// Nota: Esto solo puede ser usado si una función retorna a otra
//                        agarra un número - retorna un número
//                              (number)   =>     number
function createAdder(a: number): (number) => number {
    return function (b: number): number {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);


// funciones con parámetros no obligatorios

// Parámetro que si no le pasamos valor es UNDEFINED
function getFullname(name: string, lastname?: string): string {
    const fullname = `${name} ${lastname}`;
    return fullname;
}
console.log(getFullname("Remix")); // Remix undefined

// Parámetro no obligatorio que si no le pasamos un valor, le asignamos el que queramos
function getFullname2(name: string, lastname: string = "Mugiwara"): string {
    const fullname = `${name} ${lastname}`;
    return fullname;
}
console.log(getFullname2("Luffy")); // Luffy Mugiwara