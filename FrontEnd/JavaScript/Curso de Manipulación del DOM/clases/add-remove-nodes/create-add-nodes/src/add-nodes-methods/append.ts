import mainNode from "../main";

// Como ya hemos visto, el método append nos permite agregar varios nodos al final de la lista.
// Tener en cuenta que este método es nuevo y no es compatible con Internet Explorer.

// Creando los nodos
const node = document.createElement("li");
node.textContent = "Nodo hecho con append RAAAAA";

mainNode?.append(node);
