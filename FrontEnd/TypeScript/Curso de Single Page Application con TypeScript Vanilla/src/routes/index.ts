import { Header } from "../components/Header";
import { Character, Error404, Home } from "../pages";
import { getHash, resolveRoutes } from "../utils";

interface Routes {
    [index: string]: () => Promise<string>;
}

const routes: Routes = {
    "/": Home,
    "/:id": Character,
    // "/contact": "Contact",
};

const router = async () => {
    const header = document.getElementById("header")!;
    const content = document.getElementById("content")!;

    header.innerHTML = await Header();

    const hash = getHash();
    const route = resolveRoutes(hash);

    const render = routes[route] ?? Error404;

    content.innerHTML = await render();
};

export { router };
