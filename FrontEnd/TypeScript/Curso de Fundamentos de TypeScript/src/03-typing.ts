// Para evitar que nos salga el error de que hemos re declarado una variable, cuando la hemos definido en 2 distintos archivos, ejecutamos cada uno dentro de una función anónima autoejecutable
(function () {
  // Typing is a way to tell the compiler what type of data a variable will hold.

  // Inferencia:
  const message = 'Welcome back';

  // Explicita:
  const message2: string = 'Welcome back';

  // Aunque no siempre se usa de manera explicita, sino ver es qué caso es necesario usarlo
})();
