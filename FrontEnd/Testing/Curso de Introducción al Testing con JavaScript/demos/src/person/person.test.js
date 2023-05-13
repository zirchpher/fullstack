const Person = require("./index.js");

/*
 * Triple A (AAA) “Mantra” para hacer pruebas
 * Acciones que ejecutamos al realizar una prueba.
 * Arrage: preparar para realizar las pruebas.
 * Act: los pasos a ejecutar.
 * Assert: verificar lo esperado, resolver hipótesis.
 */

describe("tests for Person", () => {
    // Arrage
    let person;
    beforeAll(() => {
        person = new Person("remmian", 45, 1.7);
    });

    test("should be down", () => {
        person.weight = 45; // Arrage
        const imc = person.calcIMC(); // Act
        expect(imc).toBe("down"); // Assert
    });

    test("should be normal", () => {
        person.weight = 59;
        const imc = person.calcIMC();
        expect(imc).toBe("normal");
    });
});
