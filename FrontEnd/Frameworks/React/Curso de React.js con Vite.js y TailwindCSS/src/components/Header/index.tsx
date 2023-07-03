import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Header() {
  const { productsInCart } = useContext(ShoppingCartContext);

  const activeStyle =
    "underline underline-offset-4 decoration-2 decoration-red-500 font-bold";

  return (
    <header className="flex justify-between items-center fixed top-0 w-full z-10 py-5 px-8 text-sm glass">
      <nav>
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/">
              Shopi
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              All
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/clothes"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Clothes
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/electronics"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Electronics
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/furnitures"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Furnitures
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/toys"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Toys
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/others"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Others
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex items-center gap-3">
          <li className="text-gray-700 font-light md:mr-2">
            remmian@gmail.com
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/my-order"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              My Orders
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/my-orders"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              My Orders
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/my-account"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              My Account
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/sign-in"
              className={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Sign In
            </NavLink>
          </li>
          <li className="flex items-center">
            <ShoppingBagIcon className="h-6 w-6 text-gray-800" />
            <span>{productsInCart}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
