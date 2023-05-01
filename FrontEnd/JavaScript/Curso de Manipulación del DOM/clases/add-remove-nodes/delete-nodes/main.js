// Para eliminar nodos en el DOM
// Tenemos 3 formas de hacerlo
// 1. Usando el método removeChild (más antiguo)
// 2. Usando el método remove (más moderno) (No soportado por IE)
// 3. Usando el método replaceChild (Elimina y reemplaza el nodo)
// 4. Usando el método replaceWith (Elimina y reemplaza el nodo) (No soportado por IE)

// * 1. Usando el método removeChild
// Nota: Para que funcione este método, se necesita el nodo padre directo del nodo que queremos eliminar
const nodeToDelete = document.querySelector("#node");
const parentNode = nodeToDelete.parentNode; // Obtenemos el nodo padre

parentNode.removeChild(nodeToDelete);

// * 2. Usando el método remove (más moderno)
// Nota: Este método no necesita el nodo padre directo del nodo que queremos eliminar
const subtitle = document.querySelector("#subtitle");

subtitle.remove();

// * 3. Usando el método replaceChild
// Nota: Para que funcione este método, se necesita:
// - el nodo padre directo del nodo que queremos eliminar
// - el nodo que queremos reemplazar (nodo antiguo)
// - el nuevo nodo que queremos poner (nodo nuevo)

// Obtenemos el nodo que queremos reemplazar
const oldNode = document.querySelector("#title");

// Obtenemos el nodo padre directo del nodo que queremos eliminar
const nodoPadre = oldNode.parentNode;

// Creamos el nuevo nodo
const newNode = document.createElement("h1");
newNode.textContent = "Este es el nuevo título";
newNode.id = "title";

// Reemplazamos el nodo antiguo por el nuevo
nodoPadre.replaceChild(newNode, oldNode);

// * 4. Usando el método replaceWith (más moderno)
// Nota: Este método no necesita el nodo padre directo del nodo que queremos eliminar

// Obtenemos el nodo que queremos reemplazar
const nodoAntiguo = document.querySelector("#title");

// Creamos el nuevo nodo
const nuevoNodo = document.createElement("span");
nuevoNodo.textContent = "Faraón Love Shady";

// Reemplazamos el nodo antiguo por el nuevo
nodoAntiguo.replaceWith(nuevoNodo);

