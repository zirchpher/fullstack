import { FiSearch } from 'react-icons/fi';
import './index.css';

function TodoSearch({ inputValue, setInputValue, isLoading }) {
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
          disabled={isLoading}
        />
      </div>
    </>
  );
}

export { TodoSearch };
