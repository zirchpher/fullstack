import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
      console.log("Hello from useLocalStorage");
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, isLoading, hasError };
}

export { useLocalStorage };
