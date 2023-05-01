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

    getHeight() {
        return this.height;
    }

    getPerimeter() {
        const perimeter = this.lado1 + this.lado2 + this.ladoBase;
        return perimeter;
    }

    getArea() {
        const area = (this.ladoBase * this.getHeight()) / 2;
        return area;
    }
}

class ScaleneTriangle extends Triangle {
    constructor(props) {
        super(props);
    }

    getHeight() {
        // h = 2 / ladoBase Raiz(S(S-a)(S-b)(S-c))
        // S = SemiPerimeter
        const S = (this.lado1 + this.lado2 + this.ladoBase) / 2;
        const height = (2 / this.ladoBase) * Math.sqrt(S * (S - this.lado1) * (S - this.lado2) * (S - this.ladoBase));
        return height;
    }

    getArea() {
        const area = 0.5 * this.ladoBase * this.getHeight();
        return area.toFixed(2);
    }
}

class IsoscelesTriangle extends Triangle {
    constructor(props) {
        super(props);
    }

    getHeight() {
        const height = Math.sqrt((this.lado1 ** 2) - (this.ladoBase ** 2) / 4);
        return height;
    }

    getArea() {
        const area = 0.5 * this.ladoBase * this.getHeight();
        return area.toFixed(2);
    }
}

class EquilateralTriangle extends Triangle {
    constructor(props) {
        super(props);
    }

    getHeight() {
        // h = ( Raiz(3) * lado1 ) / 2
        const height = (Math.sqrt(3) * this.lado1) / 2;
        return height;
    }

    getArea() {
        const area = (this.ladoBase * this.getHeight()) / 2;
        return area.toFixed(2);
    }
}




const myIsoscelesTriangle = new IsoscelesTriangle({
    lado1: 14,
    ladoBase: 12,
})

const myScaleneTriangle = new ScaleneTriangle({
    lado1: 10,
    lado2: 12,
    ladoBase: 14,
});

const myEquilateralTriangle = new EquilateralTriangle({
    lado1: 45,
});