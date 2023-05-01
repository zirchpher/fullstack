import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const modalRoot = document.querySelector("#modal") as HTMLDivElement;

interface Props {
    children: JSX.Element;
}

function Modal({ children }: Props) {
    return ReactDOM.createPortal(
        <div className="modal-background">{children}</div>,
        modalRoot
    );
}

export { Modal };
