import "../css/main.css";

function sum(firstNumber: number, secondNumber: number): number {
    const total = firstNumber + secondNumber;
    return total;
}

const buttonSum = document.getElementById("calc-sum");
buttonSum?.addEventListener("click", () => {
    type InputType = HTMLInputElement | null;

    const firstNumber: InputType = document.querySelector("#first-number");
    const secondNumber: InputType = document.querySelector("#second-number");

    if (firstNumber && secondNumber) {
        const result = sum(Number(firstNumber.value), Number(secondNumber.value));
        return alert(`La suma es ${result}`);
    }
});
