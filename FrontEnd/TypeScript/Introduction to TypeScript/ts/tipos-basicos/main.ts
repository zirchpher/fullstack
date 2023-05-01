/**
 * 
 ** Keywords:
    boolean. Valor verdadero o falso.
    number. Números.
    string. Cadenas de texto.
    string[]. Arreglo del tipo cadena de texto.
    Array. Arreglo multi-tipo, acepta cadenas de texto o números.
    enum. Es un tipo especial llamado enumeración.
    any. Cualquier tipo.
    object. Del tipo objeto.
 */

// boolean values
let isAdult: boolean = true;
isAdult = false;

// Number values
const numerador: number = 90;
const denominador: number = 32;
const resultado: number = numerador / denominador;

// String values
const nombre: string = "Remix";
const saludo: string = `Hola ${nombre}`;

// Object values
const powers: Object = {};
powers["Luffy"] = 16000;
console.log(powers);

// Array values
// String array -> is an Array of only string
const phones: String[] = [];
phones.push("Apple");
phones.push("Samsung");

// String and Number Array -> is an Array that accepts string values and numbers
const capitals: Array<string | number> = [];
capitals.push("Lima");
capitals.push(23);

// Array of unknown data o mixture -> use any
const anything: Array<any> = [];
anything.push("Socio");
anything.push(23);
anything.push(false);
anything.push(["age"], [23]);
anything.push({ country: "Perú" });

// Enum
enum Colors {
    Red = "Rojo",
    Blue = "Azul",
    Black = "Negro",
    Brown = "Marrón",
};

const myFavoriteColor: Colors = Colors.Black;

// tuplas
let remix: [string, number, Array<string>];
remix = ["Remix", 20, ["Programador"]];
console.log(remix);