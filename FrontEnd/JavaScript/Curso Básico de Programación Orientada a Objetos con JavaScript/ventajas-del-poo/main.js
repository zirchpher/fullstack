import * as Student from './student.js';

const remix = new Student.StudentFree({
    name: "Remix Zapata",
    username: "remmian",
    email: "remmian@gmail.com",
    points: 100,
    twitter: "remmian"
});

const freddy = new Student.StudentTeacher({
    name: "Freddy Vega",
    username: "freddier",
    email: "freddyvega@gmail.com",
    points: 1000,
    twitter: "freddier"
});

// console.log(remix-> name);
// console.log(freddy.publicarComentario("Estuvo buenardo el curso!"));