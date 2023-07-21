import React, { createContext, useState } from "react";
import { useFetch } from "./useFetch";
import { Order } from "../model/order.model";

interface Props {
  children: JSX.Element;
}

interface Context {
  productsInCart: number;
  setProductsInCart: React.Dispatch<React.SetStateAction<number>>;
  productToShow: Product;
  setProductToShow: React.Dispatch<React.SetStateAction<Product>>;
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  order: Order[];
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
  products: Product[];
  isLoading: boolean;
  searchTitleProduct: string;
  setSearchTitleProduct: React.Dispatch<React.SetStateAction<string>>;
  // --------------------
  // Visible Handler
  // --------------------
  // Checkout Side Menu Component
  isCheckoutSideMenuVisible: boolean;
  setIsCheckoutSideMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // Product Detail Component
  isProductDetailVisible: boolean;
  setIsProductDetailVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCartContext = createContext<Context>({} as Context);

function ShoppingCartProvider({ children }: Props) {
  // Shopping Cart
  const [productsInCart, setProductsInCart] = useState(0);

  // Product Detail . Open/close
  const [isProductDetailVisible, setIsProductDetailVisible] = useState(false);
  const [productToShow, setProductToShow] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    images: [""],
    creationAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: 0,
      name: "",
      image: "",
      creationAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Product Detail . Open/close
  const [isCheckoutSideMenuVisible, setIsCheckoutSideMenuVisible] = useState(
    false,
  );

  // Shopping Cart . add products to cart
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  // Shopping Cart . add products to cart
  const [order, setOrder] = useState<Order[]>([]);

  // Fetch Products
  const { products, isLoading } = useFetch(
    "https://api.escuelajs.co/api/v1/products",
  );

  // Search Products by title
  const [searchTitleProduct, setSearchTitleProduct] = useState("");

  const contextValue: Context = {
    productsInCart,
    setProductsInCart,
    isProductDetailVisible,
    setIsProductDetailVisible,
    productToShow,
    setProductToShow,
    cartProducts,
    setCartProducts,
    isCheckoutSideMenuVisible,
    setIsCheckoutSideMenuVisible,
    order,
    setOrder,
    products,
    isLoading,
    searchTitleProduct,
    setSearchTitleProduct,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
