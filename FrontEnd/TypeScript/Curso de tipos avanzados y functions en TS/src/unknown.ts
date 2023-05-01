/**
 ** Unknown type
  Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. Unknown nos fuerza a hacer una verificación de tipo.

  Unknown es un tipo de dato que no sabemos que es, pero para asignar esta variable a otra variable, primero hay que verificar con un if o un switch si son del mismo tipo, y si son del mismo tipo, entonces podemos asignar el valor a la variable.
 */

// acepta cualquier tipo de dato
let WhatIsIt: unknown;
WhatIsIt = "Hello"; // Correcto
WhatIsIt = 203; // Correcto
WhatIsIt = true; // Correcto

// Pero la diferencia con any es que no podemos asignar un unknown a otra variable sin antes verificar que sean del mismo tipo.

let newVariable: boolean;
// newVariable = WhatIsIt; // Error

// Para poder asignar un unknown a otra variable, primero hay que verificar que sean del mismo tipo.

if (typeof WhatIsIt === "boolean") {
  newVariable = WhatIsIt; // Correcto
  console.log("newVariable: ", newVariable);
}

// unknown en funciones
const parseToJson = (data: string): unknown => {
  return JSON.stringify(data);
};
