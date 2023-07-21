import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { OrderCard } from "../../components";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const tableIndex = currentPath.split("/"); // ['', 'my-orders', 'last']
  let index: string | number = tableIndex[tableIndex.length - 1];
  if (index === "last") index = order?.length - 1;

  return (
    <>
      <div className="flex items-center justify-center w-[288px] relative mb-6">
        <h1>My Orders</h1>
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-gray-900 cursor-pointer" />
        </Link>
      </div>

      <div className="flex flex-col w-80">
        {order?.[Number(index)]?.products.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </>
  );
}

export { MyOrder };
