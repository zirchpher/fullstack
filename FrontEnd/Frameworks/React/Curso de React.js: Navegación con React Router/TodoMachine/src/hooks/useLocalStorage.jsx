import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  const initialState = {
    item: initialValue,
    isLoading: true,
    hasError: false,
  };

  const onSaveItem = (newItem) => {
    dispatch({ type: actionType.saveItem, payload: newItem });
  };

  const onError = () => {
    dispatch({ type: actionType.error });
  };

  const onStopLoading = () => {
    dispatch({ type: actionType.stopLoading });
  };

  const actionType = {
    saveItem: "SAVE_ITEM",
    error: "ERROR",
    stopLoading: "STOP_LOADING",
  };

  const objectReducer = (state, payload) => ({
    [actionType.saveItem]: {
      state,
      item: payload,
    },
    [actionType.error]: {
      state,
      isLoading: false,
      hasError: true,
    },
    [actionType.error]: {
      state,
      isLoading: false,
    },
  });

  const reducer = (state, action) => {
    return objectReducer(state, action.payload)[action.type] ?? state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { item, isLoading, hasError } = state;

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
          onSaveItem(parsedItem);
          state.item;
        }

        onStopLoading();
      } catch (error) {
        onError();
      }
      console.log("Hello from useLocalStorage");
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    onSaveItem(newItem);
  };

  return { item, saveItem, isLoading, hasError };
}

export { useLocalStorage };
