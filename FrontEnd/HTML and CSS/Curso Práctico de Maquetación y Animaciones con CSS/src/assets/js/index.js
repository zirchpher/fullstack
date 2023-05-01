const footerButton = document.querySelectorAll("#footer-button");
const modalClose = document.querySelector("#modal-close");
const modal = document.querySelector("#modal");

footerButton.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.remove("hide");
        modal.classList.add("visible");
    });
});

modalClose.addEventListener("click", () => {
    modal.classList.remove("visible");
    modal.classList.add("hide");
});