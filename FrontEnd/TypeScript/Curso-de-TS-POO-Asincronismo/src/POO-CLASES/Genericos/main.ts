// ¿Qué son los genéricos?
// Los genéricos sirven para mandar el tipado por parámetro
// A diferencia del unknown, ya no es necesario hacerle la confirmación.

import { Cat } from '../POO-Pilares/herencia';

// <T> : es el tipado, este tipado se le pasa cuando llamamos a la función
function getValue<T>(value: T) {
    //*Usar T es una convención para tus propios tipados
    return value;
}

// <tipado> : Ahí va el tipado
getValue<number>(12).toFixed();
getValue<string>('12').length;
getValue<boolean>(true).toString();

const kitty = new Cat('kitty', 'remmian');
getValue<Cat>(kitty);
