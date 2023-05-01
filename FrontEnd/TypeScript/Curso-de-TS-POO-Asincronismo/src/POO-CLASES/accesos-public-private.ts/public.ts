// Métodos y propiedades públicas en TypeScript
// ¿Qué quiere decir acceso público?
// Esto quiere decir que podemos acceder a las propiedades y métodos del objeto desde el interior o exterior.
// Por defecto, todas las propiedades y métodos son públicos pero si queremos aclarar en nuestro código el alcance de los mismos podemos utilizar la palabra reservada public.
// Esto quiere decir que si no le damos un tipado explícito a las propiedades y métodos de una clase, TypeScript los considera públicos.

// * Desventajas:
// La desventaja que tenemos al tener una propiedad o método con alcance público es que estás pueden ser modificables desde fuera de la clase.

enum dateType {
    DAY = 'day',
    MONTH = 'month',
    YEAR = 'year',
}

export class Fecha {
    public day: number; // Propiedad pública explícita
    month: number; // Propiedad pública inferida
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
console.log(fecha.day);
fecha.day = 200;
console.log(fecha.day);
