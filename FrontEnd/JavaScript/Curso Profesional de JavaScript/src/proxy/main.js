"use strict";

const target = {
  red: "Rojo",
  blue: "Azul",
  green: "Verde",
  black: "Negro",
  white: "Blanco",
};

const handler = {
  get(object, property) {
    if (property in object) {
      console.log("No hay errores de typo");
      return object[property];
    }

    const objectKeys = Object.keys(object);
    const suggestion = objectKeys.find((key) => {
      // debugger;
      return Levenshtein.get(key, property) <= 3;
    });

    if (suggestion) {
      console.log(
        `${property} no se encontró, quizás quisiste decir ${suggestion}`
      );
    }
    return object[property];
  },
};

const proxy = new Proxy(target, handler);
