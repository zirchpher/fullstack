import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { clsx } from "clsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { OrderCard } from "../OrderCard";

function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuVisible,
    setIsCheckoutSideMenuVisible,
    cartProducts,
  } = useContext(
    ShoppingCartContext,
  );

  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuVisible(false);

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
            />
          );
        })}
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
