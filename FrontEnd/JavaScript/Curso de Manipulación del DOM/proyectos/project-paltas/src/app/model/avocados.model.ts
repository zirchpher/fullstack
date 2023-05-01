export interface IAvocado {
    name: string;
    id: string;
    sku: string;
    price: number;
    image: string;
    attributes: IAttributes;
}

export interface IAttributes {
    description: string;
    shape: string;
    hardiness: string;
    taste: string;
}

export default IAvocado;
