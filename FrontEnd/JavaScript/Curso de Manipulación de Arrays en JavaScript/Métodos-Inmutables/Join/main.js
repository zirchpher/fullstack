// * Join => Junta los elementos de Array y crea un nuevo String

const capabilities = ["Air", "Water", "Ground", "Fire", "Dark"];

// For Method
// const sepator = "--";
// let finalWord = "";
// for (const capacity of capabilities) {
//     finalWord = finalWord + capacity + sepator;
// }

// console.log(finalWord);


// Join Method
const finalWord = capabilities.join("--");
console.log(finalWord);


// * Creeamos una Url usando join y split
const courseName = "Desarrollo de Aplicaciones Web";
// separa por " "(espacios) y crea un Array
const courseNameInArray = courseName.split(" ");
const courseNameInUrl = courseNameInArray.join("-").toLowerCase();
console.log(courseNameInUrl);