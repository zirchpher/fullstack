import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../components";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-2">
        <h1>My Orders</h1>
      </div>

      {order.map((order, index) => (
        <Link to={`/my-orders/${index}`} key={index}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            creationAt={order.creationAt}
          />
        </Link>
      ))}
    </>
  );
}
