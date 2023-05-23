import "./index.css";

function TodoItem({ title, isCompleted }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${isCompleted && "Icon-check--active"}`}
      >
        V
      </span>

      <p className={`TodoItem-p ${isCompleted && "TodoItem-p--complete"}`}>
        {title}
      </p>

      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem };
