// function moneyBox(coins) {
//     let savedCoins = 0;
//     savedCoins += coins;
//     console.log(`Dinero ahorrado: $${savedCoins}`);
// }

// moneyBox(5);
// moneyBox(5);


function moneyBox() {
    let savedCoins = 0;
    function sumarAhorro(coins) {
        savedCoins += coins;
        console.log(`Tu ahorro actual es: $${savedCoins}`);
    }
    return sumarAhorro;
}

const myMoneyCoins = moneyBox();
myMoneyCoins(5);
myMoneyCoins(5);
myMoneyCoins(10);