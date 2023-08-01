const inicialState = {
  error: false,
  isLoading: false,
  secureCodeInput: "",
  isVisibleTheConfirmationMenu: false,
  isVisibleTheDeleteMenu: false,
};

const reducerObject = (state) => ({
  "ERROR": {
    state,
    error: true,
    isLoading: false,
  },
  "CHECK": {
    ...state,
    isLoading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state)[action.type] ?? state;
};
