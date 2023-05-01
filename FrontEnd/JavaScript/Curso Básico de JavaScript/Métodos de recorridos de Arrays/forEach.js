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

let nombresArticulos = [];

// ForEach no se usa para guardar datos en una variable, sino para imprimir datos.
articulos.forEach(function (articulo) {
    nombresArticulos.push(articulo.nombre);
    console.log(articulo.nombre);
});