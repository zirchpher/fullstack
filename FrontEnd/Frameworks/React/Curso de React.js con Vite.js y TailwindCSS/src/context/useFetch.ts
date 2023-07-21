import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((products) => setProducts(products))
        .finally(() => setIsLoading(false));
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return { products, isLoading };
};
