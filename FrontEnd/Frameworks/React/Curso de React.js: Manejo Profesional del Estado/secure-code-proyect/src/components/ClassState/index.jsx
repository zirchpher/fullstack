/* eslint-disable react/prop-types */
import { Component } from "react";

const SUPER_SECURE_PASSWORD = "paradigma";

class ClassState extends Component {
  // Forma 1 de crear un estado
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     error: false,
  //   };
  // }

  // Forma 2 de crear un estado
  state = {
    error: false,
    isLoading: false,
    secureCodeInput: "",
  };

  // Ciclo de Vida del componente

  // Esto ocurre antes de que el componente se monte en el DOM (antes de hacer render)
  // UNSAFE_componentWillMount() {
  //   console.log("ComponentWillMount");
  // }

  // Esto ocurre después de que el componente se haya montado en el DOM (después de hacer render)
  componentDidMount() {
    console.log("Componente montado en el DOM");
  }

  // Esto ocurre cuando hay una actualización del componente
  componentDidUpdate() {
    if (this.state.isLoading) {
      setTimeout(() => {
        console.log("Comenzando tiempo de espera");

        if (this.state.secureCodeInput !== SUPER_SECURE_PASSWORD) {
          this.setState({ error: true });
        }

        this.setState({ isLoading: false });

        console.log("Finalizando tiempo de espera");
      }, 3000);
    }
  }

  // Esto ocurre cuando el componente se va a desmontar del DOM (ya no es visible en pantalla)
  componentWillUnmount() {
    console.log("componentDidMount");
  }

  render() {
    const { name } = this.props;
    const { error, isLoading, secureCodeInput } = this.state;

    return (
      <div>
        <h2>Eliminar {name}</h2>

        {error && <p>Error: El código de seguridad no es correcto.</p>}
        {isLoading && <p>Cargando...</p>}

        <label htmlFor="secure-code" style={{ display: "block" }}>
          Por favor, escriba el código de seguridad.
        </label>
        <input
          type="text"
          name="secure-code"
          id="secure-code"
          placeholder="Código de seguridad"
          value={secureCodeInput}
          onChange={(event) =>
            this.setState({ secureCodeInput: event.target.value })}
          readOnly={isLoading}
        />

        <button
          onClick={() => this.setState({ error: false, isLoading: true })}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
