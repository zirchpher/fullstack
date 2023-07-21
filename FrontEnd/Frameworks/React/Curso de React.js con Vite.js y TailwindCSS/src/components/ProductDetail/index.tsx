import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { clsx } from "clsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { LazyImage } from "../LazyImage";

function ProductDetail() {
  const { isProductDetailVisible, setIsProductDetailVisible, productToShow } =
    useContext(
      ShoppingCartContext,
    );

  const closeProductDetail = () => setIsProductDetailVisible(false);

  return (
    <aside
      className={clsx(
        "flex flex-col fixed right-0 border bg-gray-50 border-gray-900 rounded-lg w-[288px] h-[calc(100vh-80px)] glass",
        [isProductDetailVisible ? "flex" : "hidden"],
      )}
    >
      <section className="flex justify-between items-center p-4">
        <h2 className="font-medium text-lg">Detalle</h2>

        <XMarkIcon
          className="h-6 w-6 transition duration-300 ease-out hover:scale-125 cursor-pointer hover:rotate-90"
          onClick={closeProductDetail}
        />
      </section>

      <figure className="px-4 w-full h-64">
        <LazyImage
          src={productToShow.images[0]}
          className="w-full h-full rounded-lg"
          alt={productToShow.title}
        />
      </figure>

      <p className="flex flex-col p-4">
        <span className="font-semibold text-2xl">${productToShow.price}</span>
        <span className="font-medium text-base mb-1 underline decoration-red-800 underline-offset-4">
          {productToShow.title}
        </span>
        <span className="text-sm text-gray-800">
          {productToShow.description}
        </span>
      </p>
    </aside>
  );
}

export { ProductDetail };
