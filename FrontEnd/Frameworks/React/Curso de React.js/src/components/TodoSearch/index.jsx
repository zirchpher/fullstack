import "./index.css";
import { FiSearch } from "react-icons/fi";

function TodoSearch() {
  return (
    <>
      <div className="TodoSearch">
        <FiSearch className="TodoSearch-icon" />
        <input placeholder="Search" className="TodoSearch-input" />
      </div>
    </>
  );
}

export { TodoSearch };
