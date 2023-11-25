/* eslint-disable react/prop-types */
import './index.css';

function CreateTodoButton({ navigateToNewTodoPage }) {
  return (
    <button className="CreateTodoButton" onClick={navigateToNewTodoPage}>
      +
    </button>
  );
}

export { CreateTodoButton };
