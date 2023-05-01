function saludarEstudiante(estudiante) {
    console.log(`Buenos días, ${estudiante}.`)
}

let estudiantes = ['Andrea', 'Fiorella', 'Esmeralda', 'Gabriel'];

let i = 0;

while (estudiantes.length > i) {
    saludarEstudiante(estudiantes[i]);
    i++;
}