const remix = {
    name: "Remix",
    age: 20,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
}

// console.log(Object.keys(remix));
// console.log(Object.getOwnPropertyNames(remix));
// console.log(Object.entries(remix));

/*
  ** Tenemos 3 configuraciones cuando definimos una propiedad con Object.defineProperty
  * enumerable: Esta propiedad define la visibilidad, y solo podrá ser enumerada si es se usa Object.getOwnPropertyNames(), mas no con Object.key().

  * writable: Esta propiedad habilita o deshabilita la posibilidad de modificar el "value"

  * configurable: Esta propiedad habilita o deshabilita la posibilidad de eliminar variables dentro del objecto.
*/


Object.defineProperty(remix, "navigator", {
    value: "Firefox",
    writable: false,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(remix, "editor", {
    value: "VSCode",
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(remix, "terminal", {
    value: "iterm",
    writable: true,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(remix, "pruebaNasa", {
    value: "Extraterrestres",
    writable: false,
    enumerable: false,
    configurable: false,
});

Object.defineProperty(remix, "vive", {
    value: "Vive Feliz tus días",
    configurable: true,
});

Object.seal(remix);
// No se puede borrar

Object.freeze(remix);
// No se puede borrar ni modificar

console.log(Object.getOwnPropertyDescriptors(remix));