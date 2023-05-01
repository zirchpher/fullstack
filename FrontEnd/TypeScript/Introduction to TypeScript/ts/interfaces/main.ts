// INTERFACES
// Las interfaces nos permiten declarar la forma que tiene un objeto
// Es útil porque nos ayuda en algunos autocompletados y ver los errores más temprano

enum Colors {
    RED = "Rojo",
    BLACK = "Negro",
    BLUE = "Azul",
}

interface Rectangulo {
    ancho: number,  // Propiedad obligatorio
    alto: number,   // Propiedad obligatorio
    color?: Colors, // Propiedad opcional
}

const myRectangulo: Rectangulo = {
    ancho: 2,
    alto: 6,
    color: Colors.BLUE,
}

// Creamos una función que retorne el área de un rectángulo
// Params: rectangulo que es tipo interfaz <Rectangulo>
function calcAreaRectangulo(rectangulo: Rectangulo): number {
    const area = rectangulo.ancho * rectangulo.alto;
    return area;
}

console.log(myRectangulo);

// Reemplazando funciones en una instancia de una interfaz
// f() toLocaleString -> Esa función no existe en myRectangulo, sino que es heredada del superPrototipo Objeto
myRectangulo.toLocaleString = function () {
    return `Tu rectángulo de color ${this.color}`;
};

console.log(myRectangulo.toLocaleString());