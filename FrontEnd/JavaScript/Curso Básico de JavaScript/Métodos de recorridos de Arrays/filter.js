let articulos = [
  { nombre: "Bici", precio: 120 },
  { nombre: "Tv", precio: 2400 },
  { nombre: "Libro", precio: 60 },
  { nombre: "Celular", precio: 2800 },
  { nombre: "Laptop", precio: 3400 },
  { nombre: "Teclado", precio: 120 },
  { nombre: "Audífonos", precio: 240 },
];

// Con filter() vamos a filtrar objetos dependiendo de una condición
// filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y
// devolverlos en un nuevo array.

let articulosBaratos = articulos.filter(function (articulo) {
  return articulo.precio <= 1000;
});

// Nota:
// ¿Cuál es la diferencia entre find y filter ?
// filter retorna todas las coincidencias y find retorna solo la primer coincidencia.

