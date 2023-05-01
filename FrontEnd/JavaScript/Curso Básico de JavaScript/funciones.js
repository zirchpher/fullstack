// Declarativas
function miFuncion() {
  return 3;
}
// Llamar una función
miFuncion();

// Expresión
let miFuncion = function () {
  return a + b;
};
// Llamar una función
miFuncion();

// Trabajar con los argumentos en una función de flecha
// function (...args): Con esto le decimos que no vamos a especificar los
// parámetros, que   puede haber cualquier cantidad de parámetros.
const imprimirArgumentos = function (...args) {
  return args;
};

imprimirArgumentos(10, true, false, "Alejandra", "Hola");
