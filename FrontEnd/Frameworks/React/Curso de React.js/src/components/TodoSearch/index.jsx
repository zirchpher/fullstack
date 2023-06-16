// import
import "./index.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { FiSearch } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
function TodoSearch() {
  const { inputValue, setInputValue } = useContext(TodoContext);

  const showInputValue = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <>
      <div className="TodoSearch">
        <FiSearch className="TodoSearch-icon" />
        <input
          value={inputValue}
          placeholder="Search"
          className="TodoSearch-input"
          onChange={showInputValue}
        />
      </div>
    </>
  );
}

export { TodoSearch };
