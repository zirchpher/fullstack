// Propiedades y métodos Estáticos
// Se usan para poder usar propiedades y métodos de una clase sin necesidad de instanciar un objeto
// Ejemplo:
// * Método NO estático
// const myMath = new Math();
// myMath.PI // 3.1416;
// * Método estático
// Math.PI // 3.1416;

class MyMath {
    // Si dejamos la propiedad sola con el estatic, entonces esa variable podrá ser modificada desde el exterior
    // Para que solo pueda ser leída desde el exterior, se debe usar el readonly
    static readonly PI = 3.1416;
    static max(...numbers: number[]): number {
        // Forma 1 (Recomendada)
        const maxNumber = numbers.reduce((max, item) => {
            if (max > item) {
                return max;
            } else {
                return item;
            }
        });

        // Forma 2 (Menos Performance)
        // const numberSorted = numbers.sort((a, b) => a - b);
        // const maxNumber = numberSorted.at(-1);
        return maxNumber;
    }
}

console.log(MyMath.PI);
// MyMath.PI = 20; // Esto no se puede hacer porque es una propiedad readonly
console.log(MyMath.max(-1, -6, 1, -7, -2, -20));
