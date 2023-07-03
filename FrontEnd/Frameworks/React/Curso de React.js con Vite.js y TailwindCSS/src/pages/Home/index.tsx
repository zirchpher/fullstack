import { useEffect, useState } from "react";
import {
  Card,
  CardSkeleton,
  CheckoutSideMenu,
  ProductDetail,
} from "../../components";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products",
        );
        const data: Product[] = await response.json();
        setProducts(data);
        setIsLoading(false);
      };

      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {isLoading && <CardSkeleton />}

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            {...product}
          />
        ))}
      </div>

      <ProductDetail />
      <CheckoutSideMenu />
    </>
  );
}

export { Home };
