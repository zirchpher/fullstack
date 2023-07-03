import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Card(product: Product) {
  const {
    setProductsInCart,
    setIsProductDetailVisible,
    setProductToShow,
    setCartProducts,
    setIsCheckoutSideMenuVisible,
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

  return (
    <div className="w-56 h-60 grid grid-rows-[85%,15%] p-3 border border-gray-300 rounded-xl hover:bg-gray-100">
      <figure className="relative">
        <img
          className="w-full h-full object-cover rounded-xl cursor-pointer"
          src={product.images[0]}
          alt="Headphones"
          onClick={showProductDetail}
        />
        <span className="absolute bottom-0 left-0 bg-white/70 text-sm ml-2 mb-2 rounded-full px-2 py-0.5 font-medium">
          {product.category.name}
        </span>
        <button
          className="absolute top-0 right-0 mt-3 mr-2 w-6 h-6 rounded-full bg-gray-100 font-semibold"
          onClick={addProductToCart}
        >
          +
        </button>
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
