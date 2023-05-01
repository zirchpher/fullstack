// Métodos o Propiedades Privadas
// Con esta palabra reservada private estamos restringiendo el acceso de nuestros parámetros y métodos, solo podrán ser accedidos o modificados dentro de la clase.

enum dateType {
    DAY = 'day',
    MONTH = 'month',
    YEAR = 'year',
}

export class Fecha {
    public day: number; // Propiedad pública explícita
    month: number; // Propiedad pública inferida
    private _year: number; // Propiedad privada

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this._year = year;
    }

    private addPadding(data: number): string {
        if (data < 10) {
            const dataWithPadding = `0${data}`;
            return dataWithPadding;
        } else {
            return `${data}`;
        }
    }

    // Método que devuelve la fecha en formato dd/mm/yyyy
    getFormat(): string {
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        const formattedDate = `${day}/${month}/${this._year}`;
        return formattedDate;
    }

    // Método que agrega Días / Meses / Años a la fecha
    add(amount: number, type: dateType): void {
        if (type === dateType.DAY) {
            this.day += amount;
        } else if (type === dateType.MONTH) {
            this.month += amount;
        } else if (type === dateType.YEAR) {
            this._year += amount;
        }
    }
}

export const fecha = new Fecha(12, 7, 2000);
// fecha.addPadding(); // addPadding is only private use
console.log(fecha.getFormat());
// fecha.year = 1000; // Property 'year' is private and only accessible within class 'Fecha'
