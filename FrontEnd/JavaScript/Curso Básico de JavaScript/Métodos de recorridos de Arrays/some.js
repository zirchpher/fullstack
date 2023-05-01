let articulos = [
    { nombre: "Bici", precio: 120 },
    { nombre: "Teclado", precio: 200000 },
    { nombre: "Tv", precio: 2400 },
    { nombre: "Libro", precio: 60 },
    { nombre: "Celular", precio: 2800 },
    { nombre: "Laptop", precio: 3400 },
    { nombre: "Teclado", precio: 120 },
    { nombre: "Audífonos", precio: 240 }
];

// some(): Comprueba si al menos un elemento del array cumple con la condición que le damos
// Retorna verdadero o falso para artículos que cumplan esa validación.
let hayArticulosBaratos = articulos.some(function (articulo) {
    return articulo.precio <= 100;
});
// Si hay articulos que cuesten - 100 soles retorna = true
// Sino, retorna false.