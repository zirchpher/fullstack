export interface Order {
  id: number;
  creationAt: Date;
  products: Product[];
  totalProducts: number;
  totalPrice: number;
}
