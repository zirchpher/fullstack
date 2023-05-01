import mainNode from "../main";

// Este método sirve para agregar un nodo antes de otro nodo.
// El primer parámetro es el nodo que se va a agregar
// * El segundo parámetro es el nodo antes del cual se va a agregar el primer parámetro (Nodo de referencia).

// Creando los nodos
// Nodo que se va a agregar
const node = document.createElement("li");
node.textContent = "Nodo hecho con Before :=x";

// Nodo de referencia
const referenceNode = document.querySelector(".item--reference");

// Agregando el nodo
mainNode?.insertBefore(node, referenceNode);
