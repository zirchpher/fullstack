/*
    Objeto Literales
    - Aunque estén vacíos, realmente no están vacíos, sino que tienen por dentro a el objeto __proto__.
    - Son instancias del prototipo OBJECT
*/

<<<<<<< HEAD
const maria = {
    name: "María",
    age: 20,
    cursosAprobados: [
        'Curso definitivo de HTML y CSS',
        'Curso Práctico de JavaScript',
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

/*
    Objeto Prototipo
*/
function Student(name, age, cursosAprobados) 
{
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso);
    // };
}

Student.prototype.aprobarCurso = function (nuevoCurso) 
{
    this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student(
    'Juanita',
    20,
    ["Curso de CSS Grid"]
);
=======
const usuario = {};
Object.defineProperty(usuario, 'nombre', { values: 'Remix', writeble: false });

usuario.nombre = 'Pepe';
console.log(usuario.nombre);
>>>>>>> dfe17b10a1479a576892908dc1eb75ed52b9d4f2
