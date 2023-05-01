// Neves Type
// Cuando a una función se le asigna el tipo never, significa que nunca llegan a ejecutarse por completo.
// Por ejemplo, una función que lanza una excepción o que entra en un bucle infinito.
// En este caso, la función no tiene un valor de retorno, por lo que el tipo de retorno es never.
// Muy diferente a void, que este tipo de función sí tiene un final.

// Función que lanza una excepción
function error(message: string) {
    throw new Error(message);
}

// Función que entra en un bucle infinito
const withoutEnd = () => {
    while (true) {
        console.log("RAAAAAAA");
    }
};
