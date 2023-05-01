"use strict";

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (true) resolve("Todo ok mi kin");
        else reject(new Error("Ups! hubo un errro!"));
    });
};

const firstWay = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

const secondWay = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
}
// secondWay();





// My tried
const datos = [
    { name: "Remix", age: 20, languages: ["Spanish", "Japanese"] },
    { name: "Mario", age: 10, languages: ["English", "Japanese"] },
    { name: "Vania", age: 20, languages: ["Spanish", "Portugues"] },
    { name: "Maria", age: 20, languages: ["Italian", "Japanese"] },
];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve(datos), 1500)
        }
        else reject(new Error("Hubo un Error mi kin, pipipipipipi"))
    });
};

const showDatos = async () => {
    try {
        const datosFetched = await getDatos();
        console.log(datosFetched);
    }
    catch (error) {
        console.log(error.message);
    }
    // Esto se aumentó en ES9
    // finally {
    //     console.log("La operación Finalizó");
    // }
};

showDatos();












