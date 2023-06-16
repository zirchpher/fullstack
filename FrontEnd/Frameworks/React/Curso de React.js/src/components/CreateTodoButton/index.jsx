import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./index.css";

function CreateTodoButton() {
  const { setModalVisibility } = useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setModalVisibility((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
