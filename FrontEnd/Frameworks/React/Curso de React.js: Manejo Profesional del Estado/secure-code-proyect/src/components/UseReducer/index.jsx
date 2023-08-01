/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { reducerObject } from "./reduceObject";

const SUPER_SECURE_PASSWORD = "paradigma";

export const UseReducer = ({ name }) => {
  const inicialState = {
    error: false,
    isLoading: false,
    secureCodeInput: "",
    isVisibleTheConfirmationMenu: false,
    isVisibleTheDeleteMenu: false,
  };

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] ?? state;
  };

  const [state, dispatch] = useReducer(reducer, inicialState);

  useEffect(() => {
    console.log("Iniciando useEffect");

    if (state.isLoading) {
      setTimeout(() => {
        console.log("Comenzando tiempo de espera");

        if (state.secureCodeInput === SUPER_SECURE_PASSWORD) {
          dispatch({ type: "GO_TO_CONFIRMATION_MENU" });
        } else {
          dispatch({ type: "ERROR" });
        }
      }, 2000);
    }

    console.log("Finalizando useEffect");
  }, [state.isLoading]);

  if (!state.isVisibleTheConfirmationMenu && !state.isVisibleTheDeleteMenu) {
    return (
      <div>
        <h2>Eliminar {name}</h2>

        {state.error && <p>Error: El código de seguridad no es correcto.</p>}
        {state.isLoading && <p>Cargando...</p>}

        <label htmlFor="secure-code" style={{ display: "block" }}>
          Por favor, escriba el código de seguridad.
        </label>
        <input
          type="text"
          name="secure-code"
          id="secure-code"
          placeholder="Código de seguridad"
          value={state.secureCodeInput}
          onChange={(e) =>
            dispatch({ type: "SET_SECURE_CODE", payload: e.target.value })}
          readOnly={state.isLoading}
        />

        <button
          onClick={() => dispatch({ type: "CHECK_SECURE_CODE" })}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (
    state.isVisibleTheConfirmationMenu && !state.isVisibleTheDeleteMenu
  ) {
    return (
      <>
        <h2>Estás segura(o) de eliminar el estado</h2>

        <button
          onClick={() => dispatch({ type: "GO_TO_DELETE_MENU" })}
        >
          Segurísimo
        </button>
        <button onClick={() => dispatch({ type: "GO_HOME" })}>
          No, volver
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Estado Eliminado</h2>
        <button onClick={() => dispatch({ type: "GO_HOME" })}>
          ¿Deseas Restaurar el estado?
        </button>
      </>
    );
  }
};
