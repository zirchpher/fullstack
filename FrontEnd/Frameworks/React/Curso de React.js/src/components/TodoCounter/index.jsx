import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./index.css";

/* eslint-disable react/prop-types */
function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOS
    </h1>
  );
}

export { TodoCounter };
