function checkWinner(me) {
    switch (me) {
        case pc:
            console.log('Empate!');
            break;

        case (me == 'rock' && pc == 'paper') || (me == 'paper' && pc == 'scissor') || (me == 'scissor' && pc == 'rock'):
            console.log('Perdiste!');
            break;

        case (me == 'rock' && pc == 'scissor') || (me == 'paper' && pc == 'rock') || (me == 'scissor' && pc == 'paper'):
            console.log('Ganaste!');
            break;

        default:
            console.log('Ingrese valores correctos');
            break;
    }
}

// Variables
let me = 'rock';
let pc = 'scissor';
let playNow = checkWinner(me);