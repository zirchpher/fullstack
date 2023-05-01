// ReadonlyArray
// Como su mismo nombre lo dice, es tener un array pero inmutable, es decir, no se puede agregar li eliminar sus elementos.
// Lo que sí se puede hacer es usar sus métodos de los arrays.

// Ejemplo
const alwaysArray: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// alwaysArray.push(6); // Error
// alwaysArray.pop(); // Error
// alwaysArray[0] = 0; // Error
alwaysArray[0]; // 1
alwaysArray.length; // 5
alwaysArray.slice(0, 2); // [1, 2]
alwaysArray.map(() => 0);
alwaysArray.reduce(() => 0);
alwaysArray.find(() => 0);
