/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const SUPER_SECURE_PASSWORD = "paradigma";

export const UseState = ({ name }) => {
  const [state, setState] = useState({
    error: false,
    isLoading: false,
    secureCodeInput: "",
    isVisibleTheConfirmationMenu: false,
    isVisibleTheDeleteMenu: false,
  });

  const goToConfirmationMenu = () => {
    setState({
      ...state,
      isLoading: false,
      isVisibleTheConfirmationMenu: true,
    });
  };

  const renderError = () => {
    setState({
      ...state,
      error: true,
      isLoading: false,
    });
  };

  const checkSecureCode = () => {
    setState({
      ...state,
      error: false,
      isLoading: true,
    });
  };

  const goToDeleteMenu = () => {
    setState({
      ...state,
      isVisibleTheDeleteMenu: true,
      isVisibleTheConfirmationMenu: false,
    });
  };

  const goHome = () => {
    setState({
      ...state,
      secureCodeInput: "",
      isVisibleTheConfirmationMenu: false,
      isVisibleTheDeleteMenu: false,
    });
  };

  useEffect(() => {
    console.log("Iniciando useEffect");

    if (state.isLoading) {
      setTimeout(() => {
        console.log("Comenzando tiempo de espera");

        if (state.secureCodeInput === SUPER_SECURE_PASSWORD) {
          goToConfirmationMenu();
        } else {
          renderError();
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
          onChange={(e) => setState({ secureCodeInput: e.target.value })}
          readOnly={state.isLoading}
        />

        <button
          onClick={checkSecureCode}
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
          onClick={goToDeleteMenu}
        >
          Segurísimo
        </button>
        <button onClick={goHome}>
          No, volver
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Estado Eliminado</h2>
        <button
          onClick={goHome}
        >
          ¿Deseas Restaurar el estado?
        </button>
      </>
    );
  }
};
