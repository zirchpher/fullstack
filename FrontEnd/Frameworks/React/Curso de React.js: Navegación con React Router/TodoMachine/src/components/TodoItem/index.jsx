/* eslint-disable react/prop-types */
import './index.css';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FiCheckCircle } from 'react-icons/fi';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';

function TodoItem({
  title,
  isCompleted,
  toggleCompleteTodo,
  deleteTodo,
  editTodo,
}) {
  return (
    <li className="TodoItem">
      <span className="Icon Icon-check" onClick={toggleCompleteTodo}>
        {isCompleted ? (
          <FiCheckCircle className="Todo-completed-icon" />
        ) : (
          <MdOutlineAccessTime className="Todo-pending-icon" />
        )}
      </span>

      <p className={`TodoItem-p ${isCompleted && 'TodoItem-p--complete'}`}>
        {title}
      </p>

      <span className="Icon floating-icon Icon-edit" onClick={editTodo}>
        <FaEdit className="edit-icon" />
      </span>

      <span className="Icon floating-icon Icon-delete" onClick={deleteTodo}>
        <IoCloseCircleSharp className="close-icon" />
      </span>
    </li>
  );
}

export { TodoItem };
