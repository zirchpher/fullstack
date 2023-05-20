# Curso de introducción al Testing con JavaScript

# Índice

-   Introducción

    -   [Testing](#testing)
    -   [Piramides del testing](#piramides-del-testing)
    -   [Herramientas de Testing](#herramientas-de-testing)
    -   [editorconfig airbnb](#editorconfig-airbnb)
    -   [Pruebas estáticas con eslint](#pruebas-estáticas-con-eslint)
    -   [Hack para que aparezcan los keywords de Jest](#hack-para-que-aparezcan-los-keywords-de-jest)
    -   [Reporte de Cobertura](#reporte-de-cobertura)

-   Pruebas unitarias

    -   [Mocking Stub y doubles](#mocking-stub-y-doubles)

# Testing

## ¿Qué es?

    -   En el mundo actual las tecnologias con las que vivimos necesitan codigo, esto ha hecho que el desarrollo de software se haya vuelto industrial, donde contamos con procesos y herramientas, como el testing, que nos permiten entregar mas rapido proyectos de calidad a nuestros clientes reduciendo el riesgo de errores en produccion.

## ¿Por qué hacer testing?

    -   Normalmente hay cuatro fases en el desarrollo de software para crear un producto:
       ` Diseño ⇒ Desarrollo ⇒ Pruebas ⇒ Produccion `
    En estas fases, detectar un error se vuelve cada vez mas costoso. Ahi es donde hacemos tecnicas para prevenir estas situaciones. El testing es la manera en la que nosotros gestionamos el riesgo y tratamos de evitar, en la medida de lo posible, los errores en el sistema.

## Gestionar riesgos como Google

1. **Analisis de codigo estatico:** Mientras desarrollamos vamos viendo nuestros resultados.
2. **Pruebas unitarias:** Nos aseguramos que el codigo funciona como queremos.
3. **Pruebas de integracion:** Verificar que varios elementos funcionan bien trabajando juntos.
4. **Revision de codigo:** Equipo o persona encargada de revisar el codigo de las demas
5. **QA:** Equipos de creacion de pruebas automaticas o manuales.

# Piramides del testing

![](https://static.platzi.com/media/user_upload/Livelli-e-tool-della-piramide-del-test-automation-960x504-1524125b-0cae-4530-b0ce-01c49891bebe.jpg)

![](https://static.platzi.com/media/user_upload/Ashampoo_Snap_jueves%2C%202%20de%20febrero%20de%202023_14h36m50s_028_-89cd6c5d-21a1-4e20-9eae-d934897afa33.jpg)

# Herramientas de Testing

-   Estas herramientas mencionadas están clasificadas según el tipo o nivel de pruebas a realizar.

    -   Multipropósito o Robustas
        Pueden ejecutar la mayoría de pruebas de la pirámide o trofeo, tanto para backend, frontend, integration test, algunas hasta UI y API s testing.
        `Jest, _Chai, Mocha, Ava, Jasmine`

    -   UI Testing
        Pruebas desplegadas en un dispositivo real o simulado bajo un Browser (navegador) automatizando toques y gestos en la aplicación.
        `Playwright, _ Cypress, WebdriverIO, Puppeteer`

    -   API Testing
        En general, las APIs no tienen UI, usan protocolos de servicios por peticiones.
        `Supertest, Dredd, Postman`

    -   Pruebas Estáticas
        Estas pruebas no ejecutan el código, estas herramientas se integran al editor de código y van analizando si hay alguna mala práctica.
        `ESLint, Prettier, Typescript tools (TSLint)`

-   **Todas estas herramientas manejan una sola estructura (de forma), de modo que el lenguaje o framework pasa a un segundo plano.**

# editorconfig airbnb

    `
        root = true

        [*]
        indent_style = space
        indent_size = 2
        charset = utf-8
        trim_trailing_whitespace = true
        insert_final_newline = true
        end_of_line = lf

        max_line_length = off

        [CHANGELOG.md]
        indent_size = false
    `

# Test

```JavaScript
    test("comentarios del test", () => {
        const response = sum(2, 3);
        expect(response).toBe(5);
    });
```

# Pruebas estáticas con eslint

## ¿Qué son?

-   Las pruebas estáticas se caracterizan por no ejecutar código, solo lo analizan y nos dan un feedback temprano. Estas nos ayudan a ver si estamos teniendo buenas prácticas al escribir nuestro código. Hay herramientas que nos ayudan a ejecutar esta pruebas estáticas como lo son:
    `ESLint, Prettier, TypeScript`

## Creemos pruebas estáticas con ESLint

1. Instálalo

```BASH
    npm i -D eslint
```

2. Establece configuraciones por defecto

```BASH
    npx eslint --init
```

3. Elije las opciones con la configuración que más se adecue con tu proyecto

4. (opcional) El archivo por defecto será muy estricto, pero si deseas agregarle algunas reglas

```JavaScript
    file: .eslintrc.js
    rules: {
        indent: ["error", 4], // identación con 4 espacios (2 for default)
        quotes: ["error", "double"], // permitir la doble comilla (")
        semi: ["error", "always"], // permitir que no siempre termine todo con (;)
    },
```

5. Agrega algunas shotcuts para correr el código rápidamente

```JSON
    file: package.json
    {
        "scripts": {
            "lint": "eslint src/**", // Marca los errores
            "lint:fix": "eslint src/** --fix" // Marcar los errores y arreglar los problemas
        },
    }
```

# Hack para que aparezcan los keywords de Jest

```BASH
    npm i -D @types/jest
```

# Reporte de Cobertura

-   Es una medida porcentual que indica cuanto falta probar del código que va a ir a producción, cuál ya está probado, cuál no se usa. ISO y la FAA exigen 100% de cobertura, pero en la realidad no es tan así, por ejemplo hacer test a setter y getters puede llegar a ser innecesario, este 100% no garantiza que aparezcan errores ni que sean el mejor set de pruebas.

### Crea un reporte de cobertura

1. haz el reporte

```BASH
    npm run test -- --coverage
```

2. se creará una carpeta llamada "coverage", busca los archivos "index.html" y ábrelos en un navegador

# Mocking Stub y doubles

-   Definición de algunos keywords
    -   **Dummy:** Son datos ficticios para llenar información.
    -   **Fake:** Son objetos que simulan comportamientos o datos; como un usuario ficticio.
    -   **Stub:** Son proveedores o APIs de tatos preparados (BD Clima).
    -   **Spies:** Son como los stubs, pero se dejan espiar su comportamiento, comunicación e invocación.
    -   **Mocks:** Mocks: Stubs + Spies, pueden estar pre-programados para enviar las respuestas supuestas.

# Mocking

-   Cuando queremos hacer pruebas a una base de datos real, si usamos las herramientas
    como hasta ahora, corremos el riesgo de dañar, eliminar y agregar datos erróneamente
    a la base de datos, por eso usamos los Mocks, simulamos una base de datos falsa y allí
    hacemos todas las pruebas

### Pasos para hacer un Mock

-   En este caso vamos a hacer Mock a una clase llamada "MongoLib", dentro de esta clase
    hay dos métodos "get" y "create"

1. Creamos el libro fake que será devuelto por el mock

```JavaScript
const fakeBooks = [
  {
    _id: 1,
    name: ‘Harry Potter’,
  },
];
```

2. Suplanta a nuestra mongoLib real

```JAVASCRIPT
const MongoLibStub = {
    getAll: () => [...fakeBooks],
    create: () => {},
};
```

3. Suplantamos al método

```JAVASCRIPT
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));
```
