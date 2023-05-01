function saludarEstudiante(estudiante) {
    console.log(`Buenos días, ${estudiante}.`)
}

let estudiantes = ['Andrea', 'Fiorella', 'Esmeralda', 'Gabriel'];

for (estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}