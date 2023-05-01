function newFunction(name, age, country) {
    var name = name || "Remix";
    var age = age || 20;
    var country = country || "PE";
    console.log(name, age, country);
}

newFunction();

// ES6

function newFunction2(name = "Remix", age = 20, country = "PE") {
    console.log(name, age, country);
}

newFunction2();


// Template concat
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase);
console.log(epicPhrase2);