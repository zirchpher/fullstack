import { XMarkIcon } from "@heroicons/react/24/solid";
import { LazyImage } from "../LazyImage";

interface ProductDTO extends Pick<Product, "title" | "images" | "price"> {
  deleteProduct?: () => void;
}

export function OrderCard({ title, images, price, deleteProduct }: ProductDTO) {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-14 h-14">
          <LazyImage
            src={images[0]}
            className="w-full h-full rounded-lg object-cover"
            alt={title}
          />
        </figure>
        <span className="text-sm font-light">{title}</span>
      </div>

      <section className="flex items-center gap-2">
        <h3 className="text-lg font-medium">${price}</h3>

        {deleteProduct && (
          <XMarkIcon
            className="h-6 w-6 text-gray-900 cursor-pointer"
            onClick={deleteProduct}
          />
        )}
      </section>
    </div>
  );
}
