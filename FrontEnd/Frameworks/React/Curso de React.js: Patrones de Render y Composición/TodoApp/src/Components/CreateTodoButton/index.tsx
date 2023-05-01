import "./style.css";
import { IContext } from "../../Model/context.model";

interface Props {
    setModalVisibility: IContext["setModalVisibility"]
}

function CreateTodoButton({ setModalVisibility }: Props) {
    const openModal = () => {
        setModalVisibility((prevState) => !prevState);
    };

    return (
        <button className="create-todo-button" onClick={openModal}>
            +
        </button>
    );
}

export { CreateTodoButton };
