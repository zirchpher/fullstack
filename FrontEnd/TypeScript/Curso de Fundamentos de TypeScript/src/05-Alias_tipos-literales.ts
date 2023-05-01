// Alias
// Los alias son una forma de crear de agrupar varios tipos de datos y poder reutilizarlos (Especialmente en funciones y objetos);

type userID = number | string;
let userId: userID;
function printUserId(idUser: userID) {
  console.log(`User id: ${idUser}`);
}

// Tipos literales
// Los tipos literales es más como para limitar el los posibles valores que puede tener una variable

type ShirtSize = 'S' | 'M' | 'L' | 'XL';
let size: ShirtSize;
size = 'S'; // OK
// size = 'SMALL'; // Error

function doSomething(userId: userID, size: ShirtSize) {
  console.log(`User id: ${userId}, Shirt size: ${size}`);
}

doSomething(20, 'S');
