// Event propagation
// Los eventos por defecto se propagan de forma ascendente, es decir, desde el elemento más interno hasta el elemento más externo.
// Pero podemos cambiar este comportamiento con el método stopPropagation() de la clase Event. Este método detiene la propagación del evento en el elemento actual. Por ejemplo:

const goto = document.querySelector('#goto');
const container = document.querySelector('#container');
const body = document.querySelector('body');

goto.addEventListener('click', (e) => console.log('goto'));
container.addEventListener('click', (e) => console.log('container'));
// body.addEventListener('click', (e) => console.log('body'));

// Cuando yo le de click a goto, este hará que se ejecuten los eventos de todos sus elementos padres, es decir, container y body. Pero si yo le agrego el método stopPropagation() a goto, este solo hará que se ejecuten los eventos de container y body. Por ejemplo:

// goto.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('goto');
// });
