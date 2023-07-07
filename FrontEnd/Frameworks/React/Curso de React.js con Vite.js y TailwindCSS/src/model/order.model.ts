export interface Order {
  creationAt: Date;
  products: Product[];
  totalProducts: number;
  totalPrice: number;
}
