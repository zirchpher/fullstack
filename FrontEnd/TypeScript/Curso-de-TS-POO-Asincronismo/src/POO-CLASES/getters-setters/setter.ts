// Setter
// Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.
// A set lo podemos usar para tener reglas de modificación para nuestros parámetros.
// Los getters y setters sirven para darle interacción a una propiedad

export class Fecha {
    constructor(
        private _year: number = 2000,
        private _month: number = 7,
        private _day: number = 12
    ) {}

    get isLeapYear(): boolean {
        if (this._year % 400 === 0) return true;
        if (this._year % 100 === 0) return false;
        return this._year % 4 === 0;
    }

    get month() {
        return this._month;
    }

    set month(newMonth) {
        // La diferencia con poner la variable pública y hacer un getter y setter
        // Es que en los Get y Set puedes establecer reglas en el return
        if (newMonth >= 1 && newMonth <= 12) {
            this._month = newMonth;
        } else {
            throw new Error('Month out of  range.');
        }
    }
}

const fecha = new Fecha();
fecha.month = 2;
console.log(fecha.month);

fecha.month = 78;
console.log(fecha.month);
