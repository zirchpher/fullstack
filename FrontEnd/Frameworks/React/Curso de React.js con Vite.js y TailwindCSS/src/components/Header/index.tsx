import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Header() {
  const { productsInCart } = useContext(ShoppingCartContext);

  const activeStyle =
    "underline underline-offset-4 decoration-2 decoration-red-500 font-bold";

  const categories = [
    { title: "All", link: "/" },
    { title: "Clothes", link: "/clothes" },
    { title: "Electronics", link: "/electronics" },
    { title: "Furnitures", link: "/furnitures" },
    { title: "Toys", link: "/toys" },
    { title: "Others", link: "/Others" },
  ];

  return (
    <header className="flex justify-between items-center fixed right-0 left-0 top-0 w-full conteiner mx-auto z-10 py-5 px-8 text-sm glass">
      <nav>
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/">Shopi</NavLink>
          </li>

          {categories.map((category, index) => (
            <li key={index}>
              <NavLink
                to={category.link}
                className={(
                  { isActive },
                ) => (isActive ? activeStyle : undefined)}
              >
                {category.title}
              </NavLink>
            </li>
          ))}
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
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:decoration-gray-300">
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
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
