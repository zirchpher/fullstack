// Union Types son los tipos de datos que le podemos asignar a una variable

(function () {
  // Union Type -> 1 solo tipo
  // name solo puede ser un string
  let name: string;
  name = "Remix"; // OK
  // name = 23; // Error

  // Union Type -> múltiplos tipos
  // userID puede ser un string o un número
  let userId: string | number;
  userId = "12345"; // OK
  userId = 12345; // OK
  // userId = true; // Error
})();
