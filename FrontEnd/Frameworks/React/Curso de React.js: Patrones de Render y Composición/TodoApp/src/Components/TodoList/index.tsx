import "./style.css";

interface IProps {
    children: JSX.Element[];
}

function TodoList(props: IProps) {
    return (
        <>
            <section>
                <ul>{props.children}</ul>
            </section>
        </>
    );
}

export { TodoList };
