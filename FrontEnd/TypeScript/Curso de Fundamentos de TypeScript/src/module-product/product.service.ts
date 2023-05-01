import * as model from './product.model';

const products: any = [];

function createProduct(product: model.product) {
  products.push(product);
}

function calcStock(): number {
  const stocks: number[] = products.map((product: model.product) => {
    return product.stock;
  });

  const totalStock: number = stocks.reduce((currValue, accValue) => {
    return currValue + accValue;
  });

  return totalStock;
}

export { products, createProduct, calcStock };
