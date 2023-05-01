import "./main.css";

function CreateTodoButtom(props) {
    const openModal = (msg) => {
        alert(msg);
    };

    return (
        <button
            className="CreateTodoButton"
            onClick={() => openModal("Abriendo modal...")}
        >
            +
        </button>
    );
}

export { CreateTodoButtom };
