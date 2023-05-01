import { products, createProduct, calcStock } from './product.service';

createProduct({
  title: 'Product 1',
  createdAt: new Date(2000, 12, 4),
  stock: 10,
});

createProduct({
  title: 'Product 2',
  createdAt: new Date(2002, 11, 4),
  stock: 9,
});

console.log(calcStock());
