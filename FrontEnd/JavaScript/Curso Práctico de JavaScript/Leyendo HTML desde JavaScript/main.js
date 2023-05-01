// querySelector es muy parecido a usar css
// Para llamar a un h1 o .class o #id lo haremos como
// en css:
// h1 { ... };
// .title { ... };
// #wrapper { ... };

// Diferencias entre querySelector y querySelectorAll
// querySelector: Selecciona la primera ocurrencia
// querySelectorAll: Selecciona la todas las ocurrencias

const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
