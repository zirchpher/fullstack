function saludarEstudiante(estudiante) {
    console.log(`Buenos días, ${estudiante}.`)
}

let estudiantes = ['Andrea', 'Fiorella', 'Esmeralda', 'Gabriel'];

for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}