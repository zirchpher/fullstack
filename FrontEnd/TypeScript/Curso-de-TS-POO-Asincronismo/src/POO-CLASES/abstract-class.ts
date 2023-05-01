// Clases abstractas en TypeScript
//* ¿Qué son las clases abstractas?
// Una clase abstracta es una clase que no se puede instanciar directamente de una clase base o madre, sino que solo se puede instanciar de una clase hija o derivada.
//* ¿Cómo se define una clase abstracta?
// Para definir una clase abstracta, se utiliza la palabra reservada abstract antes de la palabra class.
//* Ejemplo:
abstract class AbstractClass {
    constructor() {}
}

// Hagamos un ejemplo real, importémonos 2 clases, una base(clase Animal) y otra hija (clase Cat)
import { Animal, Cat } from './POO-Pilares/protected-polimorfismo';

// Instanciemos la clase Animal
// const animal = new Animal('Animal'); // Error, no se puede instanciar una clase abstracta

// Instanciemos la clase Animal
const cat = new Cat('Coludito', 'Remmian'); // Todito bien porque es una clase hija y no se ve afecta por la clase abstracta
