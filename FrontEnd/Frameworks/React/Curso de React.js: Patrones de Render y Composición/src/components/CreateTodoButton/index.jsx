import "./index.css";

function CreateTodoButton({ setModalVisibility }) {
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
