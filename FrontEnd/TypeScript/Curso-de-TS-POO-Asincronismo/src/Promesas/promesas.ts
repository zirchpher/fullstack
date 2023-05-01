// Las promesas en TS, son muy similares a JS, lo que cambia es que nosotros vamos a saber el tipado de respuesta de la promesa.

function delay(time: number) {
    // Pongámosle su respectivo tipado a la promesa, usando los genéricos "Promise<number>"
    const promesa = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("RAAAAAAA I'm happy");
        }, time);
    });
    return promesa;
}

// function printDelay()  {}
console.log('-----'.repeat(10));
delay(2000).then((response) => console.log(response));
