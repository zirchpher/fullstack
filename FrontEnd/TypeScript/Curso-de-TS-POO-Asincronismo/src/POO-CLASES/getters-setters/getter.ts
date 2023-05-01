// Getters
// *Definición : Es una FUNCIÓN que al ser llamada en el exterior, es llamada como una variable, es decir, en vez de llamarlo de esta manera
// fecha.isLeapYear(),
// Lo llamamos de esta manera
// fecha.isLeapYear
// * Características
// 1) un getter no puede ser un void o un never, siempre deber retornar algo

export class Fecha {
    constructor(
        private _year: number = 2000,
        private _month: number = 7,
        private _day: number = 12
    ) {}

    get day(): number {
        return this._day;
    }

    get isLeapYear(): boolean {
        if (this._year % 400 === 0) return true;
        if (this._year % 100 === 0) return false;
        return this._year % 4 === 0;
    }
}

const fecha1 = new Fecha();
console.log('2000', fecha1.isLeapYear);

const fecha2 = new Fecha(1976);
console.log('1976', fecha2.isLeapYear);

const fecha3 = new Fecha(2004);
console.log('2004', fecha3.isLeapYear);

const fecha4 = new Fecha(1554);
console.log('1554', fecha4.isLeapYear);

const fecha5 = new Fecha(2022);
console.log('2022', fecha5.isLeapYear);
