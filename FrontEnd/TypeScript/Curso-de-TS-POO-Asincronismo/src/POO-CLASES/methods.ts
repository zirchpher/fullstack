// ¿Qué hacen los métodos?
// Describen el comportamiento de los objetos.

enum dateType {
    DAY = 'day',
    MONTH = 'month',
    YEAR = 'year',
}

export class Fecha {
    day: number;
    month: number;
    year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    // Método que devuelve la fecha en formato dd/mm/yyyy
    getFormat(): string {
        const formattedDate = `${this.day}/${this.month}/${this.year}`;
        return formattedDate;
    }

    // Método que agrega Días / Meses / Años a la fecha
    add(amount: number, type: dateType): void {
        if (type === dateType.DAY) {
            this.day += amount;
        } else if (type === dateType.MONTH) {
            this.month += amount;
        } else if (type === dateType.YEAR) {
            this.year += amount;
        }
    }
}

export const fecha = new Fecha(12, 7, 2000);
console.log(fecha.getFormat());

fecha.add(8, dateType.DAY); // Agregamos 8 días
console.log(fecha.getFormat());

fecha.add(4, dateType.MONTH); // Agregamos 4 meses
console.log(fecha.getFormat()); // 20/11/2000

fecha.add(1, dateType.YEAR); // Agregamos 1 año
console.log(fecha.getFormat()); // 20/11/2001
