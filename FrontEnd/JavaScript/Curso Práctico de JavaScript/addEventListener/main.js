const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const tagDeLaSuma = document.querySelector("#resultadoDeLaSuma");
const form = document.querySelector("#form");

// Agreguemos un escuchador de eventos!!!:D
btn.addEventListener("click", calcularOnClick);

function calcularOnClick(event) {
    // console.log({event});
    // event.preventDefault();
    let numero1 = parseInt(input1.value);
    let numero2 = parseInt(input2.value);
    const resultado = numero1 + numero2;
    tagDeLaSuma.innerHTML = `El resultado de la suma es: ${resultado}`;
}

// HTML
// <input type="text" id="textToCopy" value="try copy this text" >

// Función que muestre un alert cuando copiemos un texto
//
// Obtenemos el input con querySelector
const textToCopy = document.querySelector("#textToCopy");
// Agregemos una escuchador a ese input llamado textToCopy
textToCopy.addEventListener("copy", showMessageWhenCopy);

// creemos la función que avise cuando copie el texto
function showMessageWhenCopy() {
    alert("Copiaste el texto capo!!");
}
