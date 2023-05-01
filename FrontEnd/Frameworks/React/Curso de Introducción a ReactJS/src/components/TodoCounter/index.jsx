import "./main.css";

function TodoCounter({ todosCompleted, totalTodos }) {
    return (
        <h2 className="TodoCounter">
            Has complentado {todosCompleted} de {totalTodos} TODOs
        </h2>
    );
}

export { TodoCounter };
