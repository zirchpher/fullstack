import { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const itemInLS = localStorage.getItem(itemName);
  let parsedItem;

  if (itemInLS) {
    parsedItem = JSON.parse(itemInLS);
  } else {
    parsedItem = initialValue;
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  }

  const [item, setitem] = useState(parsedItem);

  const saveItem = (newItem) => {
    setitem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return [item, saveItem];
}

export { useLocalStorage };
