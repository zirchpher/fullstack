for (var index = 0; index < 10; index++) {
    console.log("Number index: " + index);
    function printNumbers(number) {
        setTimeout(() => console.log(number), 1000);
    }
    printNumbers(index);
}