// Event delegation
// Esto puede mejorar el rendimiento de la aplicación al no tener que agregar un evento a cada elemento del DOM
// Se agrega un evento al elemento padre y se usa la propagación de eventos para detectar el elemento hijo que se hizo clic

const parentElement = document.querySelector('#main');

parentElement.addEventListener('click', (e) => {
    // Si el elemento tiene una clase llamado goto, entonces se muestra un mensaje en la consola
    if (e.target.classList.contains('card-text__subtitle--simple')) console.log('subtitle');

    // Si el elemento tiene un id llamado goto, entonces se muestra un mensaje en la consola
    if (e.target.id === 'goto') console.log('Click goto');

    // Si el elemento es un H1, entonces se muestra un mensaje en la consola
    if (e.target.nodeName === 'H1') console.log('Click en el titulo');
});