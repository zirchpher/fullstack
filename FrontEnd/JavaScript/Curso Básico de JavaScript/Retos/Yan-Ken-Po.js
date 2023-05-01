function checkWinner(me) {
    if (me === pc) {
        console.log('Empate!');
    }

    else if ((me == 'rock' && pc == 'paper') || (me == 'paper' && pc == 'scissor') || (me == 'scissor' && pc == 'rock')) {
        console.log('Perdiste!');
    }

    else if ((me == 'rock' && pc == 'scissor') || (me == 'paper' && pc == 'rock') || (me == 'scissor' && pc == 'paper')) {
        console.log('Ganaste!');
    }

    else {
        console.log('Ingrese valores correctos');
    }
}

// Variables
let me = 'rock';
let pc = 'rock';
let playNow = checkWinner(me);