import "./style.css";
import { IContext } from "../../Model/context.model";

interface Props {
    search: IContext["search"];
    setSearch: IContext["setSearch"];
}

function TodoSearch({ search, setSearch }: Props) {
    // This function is called when the input changes
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredValue = event.target.value;
        setSearch(enteredValue);
    };

    return (
        <input
            type="text"
            className="todo-search"
            placeholder="Cebolla"
            onChange={inputHandler}
            value={search}
        />
    );
}

export { TodoSearch };
