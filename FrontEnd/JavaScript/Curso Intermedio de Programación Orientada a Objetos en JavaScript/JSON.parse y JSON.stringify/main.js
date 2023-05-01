const obj1 = {
    ala: "a",
    buala: "b",
    castor: {
        comida: "croquetas",
        color: "marrón",
    },
    comer() {
        console.log(`El castor come su ${this.castor.comida}`);
    }
};

// convierte un objecto en un string (NO FUNCIONA CON MÉTODOS)
const stringifiedComplexObj = JSON.stringify(obj1);
console.log(typeof stringifiedComplexObj);
// output: String

// convierte un string en un objecto
const obj2 = JSON.parse(stringifiedComplexObj);

console.log({
    obj1,
    obj2,
    stringifiedComplexObj,
});