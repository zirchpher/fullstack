"use strict";

const patito = {
    age: "12meses",
    color: "gray",
}

const patito2 = patito;

/* 
🎳 Las variables son referencias a un espacio en memoria.
🎩 Los navegadores web usan dos tipos de memorias: Stack y Heap.
*📁 La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números…).

*🌪 La memoria Heap es más lenta, pero permite guardar enormes cantidades de información (son como los tornados: grandes, lentos y desordenados). En esta memoria guardamos los valores de los objetos ({...}).

           *STACK             *HEAP
NOMBRE          VALORES      OBJETOS
let name    =>  "Remix"
let age     =>    20
let patito  =>  POINTER  =>   {...}

* Las variables name y age se guardan en STACK
* El objeto patito guarda un POINTER o su ubicación en STACK y su datos dentro de HEAP

Entender cómo funciona la memoria en JavaScript no solo será útil para aprender POO, sino también para programación funcional. 😉
*/