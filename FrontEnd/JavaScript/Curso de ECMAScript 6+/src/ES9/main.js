// Operador de Reposo
const remix = {
    name: "Remix",
    age: 20,
    languages: ["Spanish", "Japanese"],
};

const { age, ...all } = remix;
// console.log(all);



// Propiedades de Propagación
// Si las propiedades son iguales (en este caso, name, age y languages son iguales)
// Entonces se solo se guarda el uno, no imprime ambos.
const maria = {
    ...remix,
    name2: "Vania",
    age2: 20,
    languages2: ["Spanish", "Portugues"],
};
// console.log(maria);



// Promise.finally
const promesa = () => {
    return new Promise((resolve, reject) => {
        const time = 2000;
        (true)
            ? setTimeout(() => resolve("Todo ok mi kin."), time)
            : reject(new Error("Ups! Algo salió mal."))
    });
};

promesa()
    .then((response) => console.log(response))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Finalizó el programa."))



// RegEx (Regular Expressions)
// Regex se usa para crear patrones de diseño de datos y para encontrar coincidencias
// Se empieza y termina con " / "
// Se separan en "()-"  Ejemplo => /()-()-()/
// [0-9] => Esto se lee como: Valores del 0 al 9
// {4} => Dentro de las "{}" va la cantidad máxima que puede contener (4 elementos como máximo)
// Datos: A => Año, M => Mes , D => Día, C => Cantidad de máxima
//                    A   C      M   C      D   C
const regexPattern = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
// al usar .exec() => Me devuelve un arreglo
const match = regexPattern.exec("2022-09-09");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);