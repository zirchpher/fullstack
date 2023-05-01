class Square {
    constructor({
        lado
    }) {
        this.lado = lado;
    }

    getPerimeter() {
        return this.lado * 4;
    }

    getArea() {
        return this.lado ** 2;
    }
}

class Triangle {
    constructor({
        lado1,
        lado2,
        ladoBase,
        height,
    }) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.ladoBase = ladoBase;
        this.height = height;
    }

    getPerimeter() {
        const perimeter = this.lado1 + this.lado2 + this.ladoBase;
        return perimeter;
    }

    getArea() {
        const area = (this.ladoBase * this.height) / 2;
        return area;
    }
}

const miSquare = new Square({
    lado: 5,
});

const miTriangle = new Triangle({
    lado1: 6,
    lado2: 6,
    ladoBase: 4,
    height: 5.5,
});

console.group("Square");
console.log({
    miSquare,
    perimeter: miSquare.getPerimeter(),
    area: miSquare.getArea(),
});
console.groupEnd("Square");

console.group("Triangle");
console.log({
    miTriangle,
    perimeter: miTriangle.getPerimeter(),
    area: miTriangle.getArea(),
});
console.groupEnd("Triangle");