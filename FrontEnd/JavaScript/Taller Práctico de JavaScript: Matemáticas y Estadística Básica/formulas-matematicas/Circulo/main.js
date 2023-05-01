class Circle {
    constructor({
        radio,
    }) {
        this.radio = radio;
        this.diameter = this.radio * 2;
    }

    getCircumference() {
        const circumference = this.diameter * Math.PI;
        return circumference;
    }

    getArea() {
        const area = Math.pow(this.radio, 2) * Math.PI;
        return area;
    }
}

const myCircle = new Circle({
    radio: 3,
})

console.group("Circle");
console.log({
    myCircle,
    Circumference: myCircle.getCircumference().toFixed(4),
    Area: myCircle.getArea().toFixed(4),
});
console.groupEnd();