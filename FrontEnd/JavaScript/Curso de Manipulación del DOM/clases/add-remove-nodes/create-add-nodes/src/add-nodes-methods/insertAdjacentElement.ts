// Este método es muy flexible, ya que permite agregar un nodo antes o después de otro nodo.
// El primer parámetro es el modo en el que se va a agregar el nodo:
// beforebegin, afterbegin, beforeend, afterend

// El segundo parámetro es el nodo que se va a agregar

// Creando los nodos
// Nodo que se va a agregar
const node = document.createElement("li");
node.textContent = "Nodo hecho con insertAdjacentElement 😎";

// Nodo de referencia
const referenceNode = document.querySelector(".item--reference");

// Agregando el nodo
referenceNode?.insertAdjacentElement("afterend", node);

export default node;