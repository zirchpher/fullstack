import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { CheckIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import "./Card.css";
import { LazyImage } from "../index";

function Card(product: Product) {
  const {
    setProductsInCart,
    setIsProductDetailVisible,
    setProductToShow,
    setCartProducts,
    setIsCheckoutSideMenuVisible,
    cartProducts,
  } = useContext(
    ShoppingCartContext,
  );

  const showCheckoutSideMenu = () => {
    setIsCheckoutSideMenuVisible(true);
    setIsProductDetailVisible(false);
  };

  const addProductToCart = () => {
    setProductsInCart((count) => count + 1);
    setCartProducts((products) => [...products, product]);
    showCheckoutSideMenu();
  };

  const showProductDetail: React.MouseEventHandler<HTMLImageElement> = () => {
    setIsProductDetailVisible(true);
    setIsCheckoutSideMenuVisible(false);

    setProductToShow(product);
  };

  const renderIcon = (id: number) => {
    const addedProducts = cartProducts.filter((product) => {
      return product.id === id;
    });

    const isTheProductInCart = addedProducts.length > 0;

    if (isTheProductInCart) {
      return (
        <button className="effect-appear bg-blue-700 flex justify-center items-center absolute top-0 right-0 mt-3 mr-2 w-6 h-6 rounded-full font-semibold">
          <CheckIcon className="text-gray-50 w-4 h-4 " />
        </button>
      );
    } else {
      return (
        <button
          className="flex justify-center items-center absolute top-0 right-0 mt-3 mr-2 w-6 h-6 rounded-full bg-gray-100 font-semibold"
          onClick={addProductToCart}
        >
          <PlusIcon className="text-gray-800 w-4 h-4 " />
        </button>
      );
    }
  };

  return (
    <div className="w-56 h-60 grid grid-rows-[85%,15%] p-3 border border-gray-300 rounded-xl hover:bg-gray-100">
      <figure className="relative">
        <LazyImage
          src={product.images[0]}
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          alt={product.title}
          onClick={showProductDetail}
        />

        <span className="absolute bottom-0 left-0 bg-white/70 text-sm ml-2 mb-2 rounded-full px-2 py-0.5 font-medium">
          {product.category.name}
        </span>

        {renderIcon(product.id)}
      </figure>

      <p className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-800">
          {product.title}
        </span>
        <span className="text-lg font-semibold">${product.price}</span>
      </p>
    </div>
  );
}

export { Card };
