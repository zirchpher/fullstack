// Aquí irá el modelo de datos del producto

enum Sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

interface product {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

export { Sizes, product };
