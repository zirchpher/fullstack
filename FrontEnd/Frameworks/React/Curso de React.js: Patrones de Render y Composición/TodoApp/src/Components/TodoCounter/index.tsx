import "./style.css";
// Model
import { IContext } from '../../Model/context.model'

interface Props {
    todosCompleted: IContext["todosCompleted"]
    totalTodos: IContext["totalTodos"]
}

function TodoCounter({ todosCompleted, totalTodos }: Props) {
    return (
        <h2 className="todo-counter">
            Has completado {todosCompleted} de {totalTodos} TODOs
        </h2>
    );
}

export { TodoCounter };
