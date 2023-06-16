import "./index.css";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { IoCloseCircleSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function TodoItem({ title, isCompleted, toggleCompleteTodo, deleteTodo }) {
  return (
    <li className="TodoItem">
      <span className="Icon Icon-check" onClick={toggleCompleteTodo}>
        {isCompleted
          ? <FiCheckCircle className="Todo-completed-icon" />
          : <MdOutlineAccessTime className="Todo-pending-icon" />}
      </span>

      <p className={`TodoItem-p ${isCompleted && "TodoItem-p--complete"}`}>
        {title}
      </p>

      <span className="Icon Icon-delete" onClick={deleteTodo}>
        <IoCloseCircleSharp className="close-icon" />
      </span>
    </li>
  );
}

export { TodoItem };
