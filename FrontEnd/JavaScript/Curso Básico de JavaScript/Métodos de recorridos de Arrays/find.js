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

// .find() = Busca un objeto
// ¿Cuál es la diferencia entre find y filter ?
// filter retorna todas las coincidencias y find retorna solo la primer coincidencia.

let buscarArticulo = articulos.find(function (articulo) {
    return articulo.nombre == "Teclado";
});

console.log(buscarArticulo);