// Omit and Pick Type
// Como su mismo nombre lo dice, Omit y Pick son dos tipos de datos que nos permiten omitir o elegir ciertos atributos de una interfaz.

// * 1) Omit
interface ProductInterface {
    id: number;
    name: string;
    color: string;
    description: string;
    model: string;
}

// Esta interfaz tiene todos los atributos de Product, pero omitiendo los atributos id y color:)
interface CreateProductDTOInterface
    extends Omit<ProductInterface, "id" | "color"> {
    // Aqui podemos agregar más atributos
}

// * 2) Pick
// Esta interfaz tiene solo los atributos name y description de Product, los demás los omitió
interface simpleProductInterface
    extends Pick<ProductInterface, "name" | "description"> {
    // Aqui podemos agregar más atributos
}
