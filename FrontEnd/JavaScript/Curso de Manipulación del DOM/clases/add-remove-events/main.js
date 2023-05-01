const goto = document.querySelector('#goto');

function handleClick() {
    console.log('button Clicked');
}

function greet() {
    console.log('Hello!!!');
}

// Estamos agregando eventos
goto.addEventListener('click', handleClick);
goto.addEventListener('click', greet);

// Estamos removiendo eventos
goto.removeEventListener('click', handleClick);