const obj1 = {
    ala: "a",
    buala: "b",
    castor: {
        comida: "croquetas",
        color: "marrón",
    }
};

const obj2 = {};

for (key in obj1) {
    obj2[key] = obj1[key];
}

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1);

console.log({
    obj1,
    obj3,
    obj4,
});