const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const tagDeLaSuma = document.querySelector("#resultadoDeLaSuma");

function calcularOnClick() {
    let numero1 = parseInt(input1.value);
    let numero2 = parseInt(input2.value);
    const resultado = numero1 + numero2;
    tagDeLaSuma.innerHTML = `El resultado de la suma es: ${resultado}`;
}
