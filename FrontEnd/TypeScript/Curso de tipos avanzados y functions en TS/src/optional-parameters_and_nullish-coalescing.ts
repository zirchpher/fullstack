// Los parametros opcionales son aquellos que pueden o no recibir un valor
// "||" => evalua valores falsy (https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
// "??" => evalua valores nullish (osea null y undefined)

interface Person {
    name: string;
    surname: string;
    age?: number;
    job?: string;
}

function printName(data: Person): Person {
    return data;
}

const maria = printName({
    name: "Maria",
    surname: "Moyano",
    age: 20,
    job: "Web Developer",
});

const jose = printName({
    name: "José",
    surname: "Romero",
});

console.log(maria);
console.log(jose);