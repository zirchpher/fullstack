import React, { createContext, useState } from "react";

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

  // Shopping Cart . add products to cart
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  // Product Detail . Open/close
  const [isCheckoutSideMenuVisible, setIsCheckoutSideMenuVisible] = useState(
    false,
  );

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
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
