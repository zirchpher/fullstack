'use strict';
/*
    Son funciones dentro de funciones que se retornan asimismos
*/

function myFunction() {
    const number1 = 1;

    function parent() {
        const number2 = 2;

        function child() {
            const number3 = number1 + number2;

            return number3;
        }

        return child();
    }

    return parent();
}

console.log(myFunction());