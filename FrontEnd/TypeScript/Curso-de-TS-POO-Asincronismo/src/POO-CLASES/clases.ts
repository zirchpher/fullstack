// Esquleto básico de una clase
export class Fecha {
    // Atributos de la clase (No están inicializados)
    day: number;
    month: number;
    year: number;

    // Constructor de la clase
    constructor(day: number, month: number, year: number) {
        // Aquí estamos inicializando los atributos
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

export const fecha = new Fecha(12, 12, 2000);
console.log(fecha);
