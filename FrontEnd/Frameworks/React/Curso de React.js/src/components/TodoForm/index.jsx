import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { setModalVisibility, addTodo } = useContext(TodoContext);

  const [newTodo, setNewTodo] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setModalVisibility(false);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label htmlFor="addNewTodo" className="TodoForm__label">
        Escribe tu nuevo TODO
      </label>
      <textarea
        name="addNewTodo"
        id="addNewTodo"
        placeholder="Atrapar un pokemon"
        className="TodoForm__textarea"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      >
      </textarea>
      <div className="TodoForm__button-group">
        <button
          className="TodoForm__button TodoForm__button--cancel"
          type="button"
          onClick={closeModal}
        >
          Cancelar
        </button>
        <button
          className="TodoForm__button TodoForm__button--add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
