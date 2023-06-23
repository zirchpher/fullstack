# Tips para trabajar React con TypeScript

# Obtén el tipado de event parámetro de una función

```TypeScript
const getInputValue = (event) => {
  event.preventDefault();
};
```

1. Busca dónde lo vas a usar

- En este caso, lo usaré para saber cada letra que se escribe en el input

```TypeScript
<input type="text" onChange={getInputValue} />;
```

2. Ahora simplemente haz un hover en onChange

```TypeScript
(property) React.InputHTMLAttributes<HTMLInputElement>.onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined

// agrega el tipado
const getInputValue: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  event.preventDefault();
};
```

# usa un custom Hook

- Para usar un custom hook, es obligatorio decirle a la función qué es lo que va
  a retornar

```TypeScript
import { useState } from "react";
import { ImageItem } from "../types/ImageItem.type";

type useImageItemReturn = [
  ImageItem[],
  (imageItem: ImageItem) => void,
];

const useImageItem = (): useImageItemReturn => {
  const [images, setImages] = useState<ImageItem[]>([]);

  const addImageItem = (imageItem: ImageItem): void => {
    setImages([...images, imageItem]);
  };

  return [images, addImageItem];
};

export { useImageItem };
```

# Creemos un tipado GLOBAL

- Para crear un tipado global, debemos crear un archivo en la raíz de nuestro
  proyecto, en este caso es la carpeta src, y dentro crear un archivo
  `anyname.d.ts`.

```TypeScript
// app.d.ts
interface IFoxItem {
  id: string;
  url: string;
}
```

# Crea su tipado a una librería que no cuenta con tipado

- Supongamos que estás usando una librería llamada lodash, y esta no trae
  tipado, es decir, solo se creó en JS. Aunque sí se puede usar en TypeScript,
  nos resultará con muchos errores. Para arreglar esto, creemos su propio tipado

```TypeScript
import { random } from "lodash"; // error no se encontró la librería lodash
const generateRandomId = (): string => random(1, 100); // error, random tiene el tipado any
```

### Solución 1

1. definitely_typed se encarga de darle tipado a las librerías que no tienen.
   Modo de uso:

```BASH
npm install --save-dev @types/name_of_package
npm install --save-dev @types/lodash
```

### Solución 2

1. crea estos archivos, dentro de tu carpeta raíz, en este caso la carpeta src

```
src/@types
└── lodash
    └── index.d.ts
```

2. crea el tipado para la(s) únicamente a las funciones que vas a usar

```TypeScript
declare module "lodash" {
  export function random(lower: number, upper: number): number;
}
```
