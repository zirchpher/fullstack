import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { clsx } from "clsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { OrderCard } from "../OrderCard";
import { generateId, getTotalSum } from "../../utils";
import { Order } from "../../model/order.model";

export function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuVisible,
    setIsCheckoutSideMenuVisible,
    cartProducts,
    setCartProducts,
    setOrder,
  } = useContext(ShoppingCartContext);

  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuVisible(false);

  const handleCheckout = () => {
    const orderToAdd: Order = {
      id: generateId(),
      creationAt: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: getTotalSum(cartProducts),
    };

    setOrder((orders) => [...orders, orderToAdd]);
    setCartProducts([]);
  };

  const deleteProduct = (id: Product["id"]) => {
    const newProducts = cartProducts.filter((product) => {
      return product.id !== id;
    });
    setCartProducts(newProducts);
  };

  return (
    <aside
      className={clsx(
        "flex flex-col fixed right-0 border bg-gray-50 border-gray-900 rounded-lg w-[288px] h-[calc(100vh-80px)] glass",
        [isCheckoutSideMenuVisible ? "flex" : "hidden"],
      )}
    >
      <section className="flex justify-between items-center p-4">
        <h2 className="font-medium text-lg">My Order</h2>

        <XMarkIcon
          className="h-6 w-6 transition duration-300 ease-out hover:scale-125 cursor-pointer hover:rotate-90"
          onClick={closeCheckoutSideMenu}
        />
      </section>

      <div className="px-4 w-full h-full overflow-y-scroll ">
        {cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              title={product.title}
              images={product.images}
              price={product.price}
              deleteProduct={() => deleteProduct(product.id)}
            />
          );
        })}
      </div>

      <div className="px-2 mb-4">
        <p className="flex justify-around items-center py-1">
          <span className="text-md font-lfont-light text-gray-800">Total:</span>
          <span className="text-xl font-medium text-gray-900">
            ${getTotalSum(cartProducts)}
          </span>
        </p>

        <Link to="/my-orders/last">
          <button
            className="w-full py-2 bg-blue-700 text-gray-50 rounded-lg hover:bg-blue-800"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}
