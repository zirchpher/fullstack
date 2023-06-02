import "./index.css";
function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("le diste click mi loco");
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
