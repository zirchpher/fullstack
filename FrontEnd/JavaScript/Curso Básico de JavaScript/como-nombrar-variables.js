/*
    RESUMEN:
    1.- NOMBRES DE SOLO LECTURA (SNAKE-CASE)
    API_KEY: '8a7sdsd8sd73sd8f3b3g2y34j4h2'

    2.- VARIABLES COMUNES (CAMEL-CASE)
    const primerNombre = nombreCompleto.split(' ')[0];

    3.- BOOLEANOS ()
    const { haAceptadoLosTerminos } = usuario;

    FUNCIONES (VERBO INFINITIVO Y CAMEL-CASE)
    function crearProducto({ id, nombre }) {
    }

    CLASES (UPPER CAMEL-CASE)
    class CoverImage {
    }

    ENUMS (PASCAL-CASE Y SNAKE-CASE/PASCAL-CASE )
    export const AccountType = {
    PERSONAL: 'personal'
    }

    VARIABLES PRIVADAS (_variableName)
    class User {
        constructor(email) {
            this._email = email;
        }
    }

    OMITIR PARÁMETROS ()
    const productos = [...new Array(10)].map((_, index) => ({
    }));
*/



// NOMBRES DE SOLO LECTURA (SNAKE-CASE)
// Se usa para const que solo nos sirven de lectura
// Ejemplos:
const config = {
    API_KEY: '8a7sdsd8sd73sd8f3b3g2y34j4h2',
    HOST: 'localhost',
    WEBSITE_TITLE: 'Atrapa wonejos YA!',
    TIME_ZONE: 'America/Argentina/Buenos_Aires'
};


// VARIABLES COMUNES (CAMEL-CASE)
// Se usa para asignar nombres a variables comunes
// Ejemplos:
function obtenerPrimerNombreEnMayusculas(nombreCompleto) {
    const primerNombre = nombreCompleto.split(' ')[0];
    const primerNombreEnMayusculas = primerNombre.toUpperCase();
    return primerNombreEnMayusculas;
}


// BOOLEANOS ()
// Usar verbos antes de su nombre es una excelente práctica para nombrar booleanos.
/* 
    Verbos en español:
    es...   está...  tiene...    ha...

    Verbos en inglés:
    is...   has...

    Recomendación: usar siempre en afirmativo.
*/
// Ejemplos:
const { haAceptadoLosTerminos } = usuario;

// esCorrecto
const { tienePermisos } = usuario;
// !esCorrecto
if (!tienePermisos) {
    // ...
}


// FUNCIONES (VERBO INFINITIVO Y CAMEL-CASE)
// Se usa para crear funciones
// Ejemplos:
function crearProducto({ id, nombre }) {
    // ...
}

class Producto {
    // ...
    aplicarDescuento() {
        this.precio = this.precio * 0.85;
    }
    // ...
}


// CLASES (UPPER CAMEL-CASE)
// Se usa para crear clases
// Ejemplos:
class CoverImage {
    render() {
        // ...
    }
}


// ENUMS (PASCAL-CASE Y SNAKE-CASE/PASCAL-CASE )
// Se usa para crear enums
// Ejemplos:
export const AccountType = {
    PERSONAL: 'personal',
    BUSSINESS: 'Bussiness',
    CREATOR: 'creator'
}




// CONVENCIONES

// VARIABLES PRIVADAS (_variableName)
// Se usa para crear variables privadas
// Ejemplos:
class User {
    constructor(email) {
        this._email = email;
    }

    getEmail() {
        return this._email;
    }
}


// OMITIR PARÁMETROS ()
// Se usa para crear omitir parámetros
// Ejemplos:
const productos = [...new Array(10)].map((_, index) => ({
    id: index,
    nombre: `Producto-${index}`
}));