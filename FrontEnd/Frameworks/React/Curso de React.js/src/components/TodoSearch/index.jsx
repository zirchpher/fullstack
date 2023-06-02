import "./index.css";
import { FiSearch } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
function TodoSearch({ inputValue, setInputValue }) {
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
