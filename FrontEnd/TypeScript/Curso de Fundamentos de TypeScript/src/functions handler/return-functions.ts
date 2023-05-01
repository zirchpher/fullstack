// * En TypeScript nosotros le podemos decir al compilador que tipo de dato va a retornar una función

// En este caso le estamos diciendo que la función va a retornar un string
function getNombre(name: string): string {
  return name;
}

// En este caso le estamos diciendo que la función va a retornar un array
function getArray(array: string[]): string[] {
  return array;
}

// En este caso le estamos diciendo que la función no va a retornar nada
function getVoid(): void {
  console.log('Hello world');
}

// En este caso le estamos diciendo que la función puede retornar un string o un number
function getUserId(userId: string | number): string | number {
  return userId;
}
