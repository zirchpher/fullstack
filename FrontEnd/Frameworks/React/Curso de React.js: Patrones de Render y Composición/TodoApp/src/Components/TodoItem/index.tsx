import { ITodo } from "../../Model/todo.model";
import { BsCheck2Circle, BsDashCircleFill } from "react-icons/bs";
import "./style.css";

interface IProps {
    todo: ITodo;
    markTodoAsCompleted: () => void;
    deleteTodo: () => void;
}

function TodoItem(props: IProps) {
    return (
        <li className="todo-item">
            {/* if "todo.isCompleted" is True then add the "icon-check--active" class */}
            <span
                className={` icon icon-check 
                    ${
                        props.todo.isCompleted === true && "icon-check--active"
                    } `}
                onClick={props.markTodoAsCompleted}
            >
                <BsCheck2Circle />
            </span>

            {/* if "todo.isCompleted" is True then add the "todo-item-p--complete" class */}
            <p
                className={`todo-item-p ${
                    props.todo.isCompleted === true && "todo-item-p--complete"
                }`}
            >
                {props.todo.title}
            </p>
            <span className="icon icon-delete" onClick={props.deleteTodo}>
                <BsDashCircleFill />
            </span>
        </li>
    );
}

export { TodoItem };
