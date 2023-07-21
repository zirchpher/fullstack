import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import {
  Card,
  CardSkeleton,
  CheckoutSideMenu,
  ProductDetail,
} from "../../components";

export function Home() {
  const {
    products,
    isLoading,
    searchTitleProduct,
    setSearchTitleProduct,
  } = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  const tableIndex = currentPath.split("/"); // ['', 'clothes']
  const categoryName = tableIndex[tableIndex.length - 1];
  const isInAllCategory = categoryName === "";

  let productsToRender: Product[] = [];

  const searchForMatches = (listOfProducts: Product[]) => {
    const filteredProducts = listOfProducts.filter((product) => {
      const productTitle = product.title.toLowerCase();
      const searchTitle = searchTitleProduct.toLowerCase();
      return productTitle.includes(searchTitle);
    });

    return filteredProducts;
  };

  if (isInAllCategory) {
    productsToRender = searchForMatches(products);
  } else {
    const categoryProducts = products.filter((product) => {
      const productCategory = product.category.name.toLowerCase();
      const categoryToSearch = categoryName.toLowerCase();
      return productCategory.includes(categoryToSearch);
    });

    productsToRender = searchForMatches(categoryProducts);
  }

  return (
    <>
      <div className="mb-6 w-[288px] flex flex-col items-center justify-center">
        <label
          htmlFor="search-by-title"
          className="mb-1 uppercase text-gray-800 font-semibold"
        >
          Search a product:
        </label>

        <input
          type="text"
          id="search-by-title"
          name="search-by-title"
          placeholder="Palta"
          className="w-full border border-gray-700 p-2 rounded-md"
          value={searchTitleProduct}
          onChange={(event) => setSearchTitleProduct(event.target.value)}
        />
      </div>

      {isLoading && <CardSkeleton />}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {(!isLoading && productsToRender?.length === 0) && (
          <p>No products found :(</p>
        )}

        {productsToRender?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <ProductDetail />
      <CheckoutSideMenu />
    </>
  );
}
