// índices positivos y negativos
//  índices +       0         1          2        3        4
const frutas = ["manzana", "cereza", "durazno", "pera", "sandía"];
//  índices -      -5         -4         -3       -2       -1
const firstFruta = frutas[0];
const lastFruta = frutas.slice(-2);



// Includes
// Me dice si un elemento 
const isInsideTheArray = frutas.includes("manzana");
if (isInsideTheArray) console.log("Sí está dentro de la lista frutas");
else console.log("No está dentro de la lista frutas");



// Potenciación
const base = 3;
const exponente = 2;
const potencia = base ** exponente;

console.log(potencia);