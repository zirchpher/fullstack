// Teníamos
// Usemos el shortcut de instancias de propiedades

// Forma Larga 1
// Primero declaramos las propierdades y luego las inicializamos en el constructor
export class Person {
    public name: string;
    public lastname: string;
    private _age: number;
    private _nickname: string;

    constructor(name: string, lastname: string, age: number, nickname: string) {
        this.name = name;
        this.lastname = lastname;
        this._age = age;
        this._nickname = nickname;
    }

    printFullname(): string {
        const fullname = `${this.name} ${this.lastname}`;
        return fullname;
    }
}

// Forma Corta 1
// Declaramos e inicializamos en el constructor (Solo funciona si le damos su acceso de forma explícita, es decir si le decimos si es público o variable la propiedad)
// Si no le decimos su acceso, el constructor lo va a tomar como si fuera un parámetro y lo hará lo dicho anteriormente
// * Y por supuesto, le podemos dar un valor por defecto
export class Hero {
    peopleSaved: number;
    constructor(
        public name: string = 'Remix',
        public lastname: string = 'Zapata',
        private _age: number = 20,
        private _nickname: string = 'remmian',
        peopleSaved: number = 10 // peopleSaved lo está tomando como parámetro y por ende no está inicializado
    ) {
        this.peopleSaved = peopleSaved;
    }

    printFullname(): string {
        const fullname = `${this.name} ${this.lastname} y ha salvado ${this.peopleSaved} personas`;
        return fullname;
    }
}

const remmian = new Hero();
// console.log(remmian.printFullname());
