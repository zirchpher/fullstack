// En este archivo vamos a hablar acerca de las interfaces, los tipos y los enums

// 1) enums: Son de tipo Array, pero con valores predefinidos
// Los enums los vamos a usar cuando queremos agrupar valores predefinidos, es decir, una lista de valores que no van a cambiar.
// Ejemplo:
enum Capitals {
    Peru = "Lima",
    Japan = "Tokyo",
    Argentina = "Buenos Aires",
}

// Si queremos acceder a un valor del enum, podemos hacerlo de la siguiente manera:
const peruCapital = Capitals.Peru;

// Si queremos acceder a todos los valores del enum, podemos hacerlo de la siguiente manera:
const allCapitals = Object.values(Capitals);

// 2) Tipos (type):
// Los types los vamos a usar cuando querramos darle un tipado de datos a varias variables.
// Son muy útiles para las funciones ya que si agregamos o eliminamos un tipo de datos, solo lo tenemos que hacer en un solo lugar.
// Ejemplo:
type Birthdate = string | Date | number;

let myBirthdate: Birthdate = "1990-10-10";
let yourBirthdate: Birthdate = new Date(2000, 10, 10);
let herBirthdate: Birthdate = 1990_20_10;

function getBirthdate(birthdate: Birthdate): Birthdate {
    return birthdate;
}

// 3) Interfaces:
// Las interfaces es como crear un objeto pero con los tipos de datos que nosotros queramos.
// También las interfaces se pueden extender, es decir, podemos crear una interfaz y extenderla a otra interfaz.
// En algunos casos las clases pueden tener el mismo nombre que las interfaces. Por esa razón es recomendable nombrar a las interfaces con el prefijo Interface.

// interface Person {}
// class Person {}
// Podríamos tener una clase y una interfaz con el mismo nombre, pero no es recomendable.
// Para evitar eso, podemos nombrar a las interfaces con el prefijo Interface.

// Ejemplo:
interface HumanInterface {
    name: string;
    lastName: string;
}

interface HeroInterface extends HumanInterface {
    superPower: string;
}

const me: HumanInterface = {
    name: "Remix",
    lastName: "Zapata",
};

const hero: HeroInterface = {
    name: "Bruce",
    lastName: "Wayne",
    superPower: "Money",
};

