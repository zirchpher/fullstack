// Clases e interfaces
// * Las interfaces en clases funcionan como contratos, nos permiten tipar tanto los atributos como los métodos. Aquí no podemos utilizar encapsulamiento, por defecto todos los atributos y métodos son públicos.
// Las interfaces cuando las combinas con las clases, estas 2 se complementan
// Es decir, que todas las propiedades y métodos que se encuentren en la interfaz, tienen que ser declaradas obligatoriamente en la clase

// * KEYWORD : implements
// Tiene la misma sintaxis cuando aplicamos herencias en las clases, pero implements no es una herencia, es un contrato que nos dice que nuestra clase tiene que cumplir con un estándar que es la interface. Este contrato es tanto como para los parámetros como para los métodos.

// Definición de la interfaz
interface IDriver {
    database: string;
    password: string;
    port: number;
    connect(): void;
    disconnect(): void;
    isConnected(database: string): boolean;
}

class MysqlDriver implements IDriver {
    constructor(
        public database: string,
        public password: string,
        public port: number
    ) {}

    connect(): void {
        // code ...
    }

    disconnect(): void {
        // code ...
    }

    isConnected(database: string): boolean {
        // code ...
        return true;
    }
}

// class PostgresDriver implements IDriver {} // Error, no se ha implementado la interfaz
