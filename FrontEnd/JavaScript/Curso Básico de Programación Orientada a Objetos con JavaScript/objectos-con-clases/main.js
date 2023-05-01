/*
    Objeto con Clase
    - Aunque su sintaxis sea muy parecida a las clases de otros lenguajes de programación, en realidad no cambia en nada, sigue usando por detrás prototipos, lo que cambia es la manera en que escribimos el código(sugar syntax);
*/
class Student {
    constructor({
        cursosAprobados = [],
        email,
        name,
        age,
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new Student({
    name: "Miguelito",
    age: 34,
    email: "miguelito@gmail.com"
});