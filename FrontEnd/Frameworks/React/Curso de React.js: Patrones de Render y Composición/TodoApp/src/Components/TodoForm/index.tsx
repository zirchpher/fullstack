import { useState } from "react";
import "./style.css";
// Model
import { IContext } from "../../Model/context.model";

interface Props {
    addTodo: IContext["addTodo"];
    setModalVisibility: IContext["setModalVisibility"];
}

function TodoForm({ addTodo, setModalVisibility }: Props) {

    // States
    const [todoTitle, setTodoTitle] = useState("");

    const onCancel = () => setModalVisibility((prevState) => !prevState);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTodo(todoTitle);
        setModalVisibility((prevState) => !prevState);
    };

    const onChangeHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodoTitle(e.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="todoTitle">Escribe tu nuevo TODO</label>
            <textarea
                name="todoTitle"
                id="todoTitle"
                onChange={onChangeHandle}
                value={todoTitle}
                placeholder="Acariciar un pokémon"
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
