// Dynamic import
// Hace importes dinámicos, sin cargar todos los archivos JavaScript al iniciar la página, sino que lo hacer cuando escuchemos un evento "click" por ejemplo
const button = document.querySelector('#btn');
button.addEventListener('click', async function () {
    const module = await import("./file.js");
    module.saludar();
});


// Big Int
// Permite usar JavaScript con números grandes que sobrepasen el límite de int
// Permite trabajar con numeros mayores a 2^53
const aBigInt = 9007199254740991n;
const anotherBigInt = BigInt(9007199254740991);


// Promise allSettled
// Ejecuta algo cuando todas las promesas terminen
const promise1 = new Promise((resolve, reject) => reject("rechazado"));
const promise2 = new Promise((resolve, reject) => resolve("Todo ok mi kin"));
const promise3 = new Promise((resolve, reject) => resolve("Todo ok again mi kin"));

const allPromises = [promise1, promise2, promise3];
Promise.allSettled(allPromises)
    .then(done => console.log(done))


// Para el mejor manero entre JavaScript y el nodejs Usamos globalThis
console.log(globalThis);
console.log(global);
// console.log(self);
// console.log(frames);
// console.log(this);


// Alternativas para asignar un string
const foo = null ?? "default string";
const foo2 = undefined ?? "default string";
// se lee así:
// Si foo es "null" o "undefined" entonces asigna "default string"


// Optional chaining
// Se usa para que nuestra aplicación no se detenga y en vez de que se detenga me devuelve un undefined
const user = {};
const userEmail = user?.profile?.email;
(userEmail === undefined)
    ? console.log("No se encontró el correo")
    : console.log(userEmail);


const getSomeoneAwesome = null;
console.log(getSomeoneAwesome()); // Error
console.log(getSomeoneAwesome?.()); // undefined