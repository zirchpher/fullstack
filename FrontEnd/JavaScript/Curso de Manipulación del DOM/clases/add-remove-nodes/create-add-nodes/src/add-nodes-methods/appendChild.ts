import mainNode from "../main";

// Este es un método viejo, pero que sigue funcionando.
// Hace lo mismo que el método append, pero solo agrega UN SOLO NODO al final de la lista.

// Creando los nodos
const node = document.createElement("li");
node.textContent = "Nodo hecho con appendChild capo!";

mainNode?.appendChild(node);
