/*
 * definitions:
 * 1. describe() => reúne un conjunto de pruebas, mejora la lectura del código y la encapsulación.
 * 2. beforeAll() => es una sentencia [setup] que corre antes de todos los tests respetando el alcance o scope del grupo
 * 3. afterAll() => lo mismo que beforeAll() pero este lo hace después de correr todos los test
 * 4. beforeEach() => corre código antes de todos los test
 * 5. afterEach() => lo mismo que beforeEach() pero este corre después de correr todos los test
 */

describe("group 1", () => {
    beforeAll(() => {
        console.log("beforeAll group 1");
    });

    afterAll(() => {
        console.log("afterAll group 1");
    });

    beforeEach(() => {
        console.log("beforeEach");
    });

    afterEach(() => {
        console.log("afterEach");
    });

    test("case 1", () => {
        console.log("case 1");
        const sum = 2 + 4;
        expect(sum).toBe(6);
    });

    test("case 2", () => {
        console.log("case 2");
        const sum = 3 + 4;
        expect(sum).toBe(7);
    });

    describe("group 2", () => {
        beforeAll(() => {
            console.log("beforeAll group 2");
        });

        test("case 3", () => {
            console.log("case 3");
            const sum = 2 + 4;
            expect(sum).toBe(6);
        });

        test("case 4", () => {
            console.log("case 4");
            const sum = 3 + 4;
            expect(sum).toBe(7);
        });
    });
});
