import {
  CalendarDaysIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Order } from "../../model/order.model";

interface Props {
  totalPrice: Order["totalPrice"];
  totalProducts: Order["totalProducts"];
  creationAt: Order["creationAt"];
}

export function OrdersCard({ creationAt, totalPrice, totalProducts }: Props) {
  const date = `${creationAt.getDate()}/${
    creationAt.getMonth() + 1
  }/${creationAt.getFullYear()}`;

  return (
    <div className="grid grid-cols-2 w-[288px] mb-2 border border-gray-500 p-2 rounded-xl">
      <div className="pl-2">
        <p className="flex items-center mb-1">
          <CalendarDaysIcon className="w-5 h-5 mr-1" />
          <span className="text-sm">{date}</span>
        </p>
        <p className="flex items-center">
          <ShoppingBagIcon className="w-5 h-5 mr-1" />
          <span className="text-sm">{totalProducts} artículos</span>
        </p>
      </div>

      <div className="">
        <p className="w-full h-full flex items-center justify-center">
          <span className="text-xl font-bold mr-2">$/.{totalPrice}</span>
          <ChevronRightIcon className="w-6 h-6" />
        </p>
      </div>
    </div>
  );
}
