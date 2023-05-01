function printDatas(
    name: string, // este parametro es OBLIGATORIO y tiene un valor por defecto
    surname: string, // este parametro es OBLIGATORIO y tiene un valor por defecto
    age: number = 20, // este parametro es OPCIONAL y tiene un valor por defecto
    job: string = "Web Developer" // este parametro es OPCIONAL y tiene un valor por defecto
) {
    return {
        name,
        surname,
        age,
        job,
    };
}

const valeria = printDatas("Valeria", "Pereira", 37);
const joaquina = printDatas("Joaquina", "Perez");

console.log(valeria);
console.log(joaquina);
