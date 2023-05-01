// Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.
// Promesas -> Cuando prometemos algo, hay 3 posibles estados:
// 1. Pending: Cuando la promesa se está ejecutando
// 2. Fulfilled (Resolve): Cuando la promesa se ejecutó correctamente
// 3. Rejected: Cuando la promesa se ejecutó con un error

// basic structure of a promise
const promise = new Promise((resolve, reject) => {
    // do something
    if (true) {
        resolve("It worked");
    }
    else {
        reject("It didn't work");
    }
});

// example of a promise
const cows = 2;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) resolve("Sí hay suficientes vacas!!");

    else reject("No hay suficientes vaquitas, pipipipipi");
});

countCows
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(() => console.log("Promesa finalizada!"));