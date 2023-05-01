let articulos = [
    { nombre: "Bici", precio: 120 },
    { nombre: "Tv", precio: 2400 },
    { nombre: "Libro", precio: 60 },
    { nombre: "Celular", precio: 2800 },
    { nombre: "Laptop", precio: 3400 },
    { nombre: "Teclado", precio: 120 },
    { nombre: "Audífonos", precio: 240 }
];

// .map() : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
let nombresArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});