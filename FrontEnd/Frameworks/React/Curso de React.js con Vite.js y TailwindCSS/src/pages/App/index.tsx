import { ShoppingCartProvider } from "../../context/ShoppingCartContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    <ShoppingCartProvider>
      <AppUI />
    </ShoppingCartProvider>
  );
}

export { App };
