const numeritos = ["⏰", "🏆", "🌧", "😸", "🐀"];

function recursiva(list) {
    if (numeritos.length !== 0) {
        const firstElement = list[0];
        console.log(firstElement);

        list.shift();

        recursiva(list);
    }
}

recursiva(numeritos);