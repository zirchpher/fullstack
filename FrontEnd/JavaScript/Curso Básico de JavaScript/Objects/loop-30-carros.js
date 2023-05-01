function crearCarro(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

for (let index = 0; index <= 30; index++) {
    let marca = prompt("Ingresa la marca del auto");
    let modelo = prompt("Ingresa el modelo del auto");
    let year = parseInt(prompt("Ingresa el año del auto"));

    let nuevoAuto = new crearCarro(marca, modelo, year);
    console.log(nuevoAuto);

    let deseaContinuar = prompt("¿Desea continuar agregando carros?(Yes/No)");
    if (deseaContinuar == "No") {
        break;
    }
}