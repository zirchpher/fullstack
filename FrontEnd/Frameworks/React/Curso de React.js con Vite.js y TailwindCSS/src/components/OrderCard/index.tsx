import { XMarkIcon } from "@heroicons/react/24/solid";

type ProductDTO = Pick<Product, "title" | "images" | "price">;

function OrderCard({ title, images, price }: ProductDTO) {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-14 h-14">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
        </figure>
        <span className="text-sm font-light">{title}</span>
      </div>

      <section className="flex items-center gap-2">
        <h3 className="text-lg font-medium">${price}</h3>
        <XMarkIcon className="h-6 w-6 text-gray-900 cursor-pointer" />
      </section>
    </div>
  );
}

export { OrderCard };
