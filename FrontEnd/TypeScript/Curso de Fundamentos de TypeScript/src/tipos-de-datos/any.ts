// No es buena práctica usarlo
let coludo: string;
// coludo.charAt // Cuando trabajamos con tipado fuerte, el editor sabe como ayudarnos porque sabe con qué tipo de datos estamos trabajando

// sin embargo cuando usamos "any", la variable puede ser de cualquier tipo, y el editor no sabe como ayudarnos y no nos devuelve ninguna sugerencia.
let silvestre: any;

// Convertir una variable de un tipo a otro (CASTEAR)
const price: any = 20;
// el keyword as , en realidad no castea un tipo de varible a otra, sino que le dice a typescript cómo quiero que trate a esa variable
const rpta = price as string;
console.log('rpta is: ', typeof rpta); // Number

// ejemplo 2 <number>
// Nota: Esto no convierte castea a un número
let anything: any = '20';
let aNumber = (<number>anything);
console.log('aNumber is: ', typeof aNumber); // Number
