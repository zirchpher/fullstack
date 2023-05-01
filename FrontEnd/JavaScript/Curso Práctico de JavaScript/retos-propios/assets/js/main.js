const dropdown = document.querySelector('.dropdown-container');
const dropdownOpciones = document.querySelector('.dropdown-opciones');

// Agregamos un nuevo evento
dropdown.addEventListener('click', toggleMenuOpciones);

function toggleMenuOpciones() {
    dropdownOpciones.classList.toggle('inactive');
}