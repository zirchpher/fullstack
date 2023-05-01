// Creamos nuestro patrón
// la "g" al final es un flag(bandera)
// g => Global (Significa que va a agarrar todas las coincidencias)
const pattern = /@[A-z]+|@[A-z]+[0-9]+/g;

const commentary = document.querySelector('p');

// obtenemos el texto que contenta la variable commentary
let textCommentary = commentary.innerText;

// Match espera una expresión regular y retorna un resultado.
// Match hace búsquedas en un texto y busca coincidencias de palabra con respecto al patrón
// Me devuelve los resultados en un Array ["@remmian" , "@miuchan1114"]
const result = textCommentary.match(pattern);

result.forEach((value) => {
    // Quitamos ese arroba
    const person = value.slice(1);
    textCommentary = textCommentary.replace(value, `<a target="_blank" href="https://www.instagram.com/${person}/">${value}</a>`);
});

commentary.innerHTML = textCommentary;