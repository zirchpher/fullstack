const app = document.querySelector('#app');

// * El reto de esta clase es agregar 100 nuevos inputs al dom

// Forma No Recommendada porque hace uso del DOM 100 veces
// for (let index = 1; index <= 100; index++) {
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.placeholder = `Input ${index}`;

//     app.append(input);
// }

// * Forma Recomendada porque hace uso del DOM solo una vez
const nodes = [];
for (let index = 1; index <= 100; index++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Input ${index}`;

    nodes.push(input);
}

app.append(...nodes);


/*
    * Conclusión:
    Como ves, en ambos casos se está haciendo uso del loop for para crear los inputs, pero en el primer caso se está haciendo uso del DOM 100 veces, mientras que en el segundo caso se está haciendo uso del DOM solo una vez.
*/