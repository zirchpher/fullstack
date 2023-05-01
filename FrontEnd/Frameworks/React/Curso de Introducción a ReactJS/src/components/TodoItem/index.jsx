import "./main.css";

function TodoItem({ isCompleted, text, completeTodo, deleteTodo }) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check 
                ${isCompleted && "Icon-check--active"}`}
                onClick={completeTodo}
            >
                √
            </span>

            <p
                className={`TodoItem-p ${
                    isCompleted && "TodoItem-p--complete"
                }`}
            >
                {text}
            </p>

            <span className="Icon Icon-delete" onClick={deleteTodo}>
                X
            </span>
        </li>
    );
}

export { TodoItem };
