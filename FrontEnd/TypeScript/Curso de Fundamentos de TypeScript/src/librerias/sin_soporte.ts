// ¿Cómo trabajamos con librerías que no tienen soporte para TypeScript?

// En primer lugar, debes saber que toda librería que exista para JavaScript, funciona en TypeScript. ya que TypeScript es un superconjunto de JavaScript.

// Segundo, TypeScript tiene un módulo que hace que un paquete npm sea compatible con TypeScript. Este módulo se llama @types/nombre_paquete (Aveces te sugiere el comando de instalación VSCode)

// *Usemos una librería sin soporte para TypeScript
// 1) Importación de la librería
// En su documentación de lodash, nos dice que esta es la manera de instalarlo con JavaScript, sin embargo require no existe en TypeScript, por lo que debemos usar import.
// var _ = require('lodash');
import _ from 'lodash';

// 2) Haciendo compatible la librería con TypeScript
// Verás, esa librería no tiene soporte para TypeScript, para eso usaremos el módulo que mencioné anteriormente.
// El módulo en específico es @types/<nombre_paquete>, también te lo sugiere VSCode si haces hover sobre la librería.
// $ npm i --save-dev @types/lodash

// 3) Usando la librería
// Ya que la librería es compatible con TypeScript, podemos usarla sin problemas. (Verás que la importación ya no está en rojo)

const data = [
  {
    name: 'Remix',
    role: 'Developer',
  },
  {
    name: 'Franchesa',
    role: 'CEO',
  },
  {
    name: 'Tatiana',
    role: 'Manager',
  },
  {
    name: 'Fátima',
    role: 'Customer',
  },
];

const roles = _.groupBy(data, 'role');
console.log(roles);

// 4) ¿Qué pasa si no existe el módulo @types/<nombre_paquete>?
// Si no existe el módulo, debes crearlo tu mismo. (No es tan difícil, solo debes crear un archivo .d.ts y escribir la definición de la librería)


