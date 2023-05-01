import "./main.css";

function TodoSearch({ inputValue, setInputValue }) {
    const searchTodo = (event) => {
        const currentInputValue = event.target.value;
        setInputValue(currentInputValue);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            onChange={searchTodo}
            value={inputValue}
        />
    );
}

export { TodoSearch };
