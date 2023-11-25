/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm({ submitEvent, titleText, buttonText }) {
  const navigate = useNavigate();
  const [newTodo, setNewTodo] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    submitEvent(newTodo);
    navigate('/');
  };

  const cancelAddTodo = () => {
    navigate('/');
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label htmlFor="addNewTodo" className="TodoForm__label">
        {titleText}
      </label>
      <textarea
        name="addNewTodo"
        id="addNewTodo"
        placeholder="Atrapar un pokemon"
        className="TodoForm__textarea"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      ></textarea>
      <div className="TodoForm__button-group">
        <button
          className="TodoForm__button TodoForm__button--cancel"
          type="button"
          onClick={cancelAddTodo}
        >
          Cancelar
        </button>
        <button
          className="TodoForm__button TodoForm__button--add"
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
