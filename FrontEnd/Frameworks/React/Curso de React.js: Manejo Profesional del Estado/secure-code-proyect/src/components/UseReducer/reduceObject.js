export const reducerObject = (state, payload) => ({
  "ERROR": {
    ...state,
    error: true,
    isLoading: false,
  },

  "CHECK_SECURE_CODE": { ...state, error: false, isLoading: true },

  "SET_SECURE_CODE": {
    ...state,
    secureCodeInput: payload,
  },

  "GO_TO_CONFIRMATION_MENU": {
    ...state,
    isLoading: false,
    isVisibleTheConfirmationMenu: true,
  },

  "GO_TO_DELETE_MENU": {
    ...state,
    isVisibleTheDeleteMenu: true,
    isVisibleTheConfirmationMenu: false,
  },

  "GO_HOME": {
    ...state,
    secureCodeInput: "",
    isVisibleTheConfirmationMenu: false,
    isVisibleTheDeleteMenu: false,
  },
});
