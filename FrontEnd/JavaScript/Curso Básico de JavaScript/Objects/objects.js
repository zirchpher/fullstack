let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2022,
    resumen: function () {
        console.log(`${this.marca} ${this.modelo} del año ${this.year}`);
    }
    // ¿Qué es 'this'?
    // Es una variable que hace referencia al objeto. En este caso: this = miAuto.
}

// LLamamos un item
miAuto.marca // "Toyota"
miAuto.year // 2022

// LLamamos a una función dentro del objeto
miAuto.resumen();