import "./index.css";

// eslint-disable-next-line react/prop-types
function TodoList({ children }) {
  return <ul className="TodoList">{children}</ul>;
}

export { TodoList };
