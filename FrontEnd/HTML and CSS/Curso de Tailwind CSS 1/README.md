# Apuntes

## Directivas de Tailwind

- Directiva es una instrucción que utiliza tailwind para insertar código en el
  archivo final de css que genera.

- `@tailwind base` Esto inyecta los estilos base de Tailwind y cualquier estilo
  base registrado por plugins.

- `@tailwind components` Esto inyecta las clases de componentes de Tailwind y
  cualquier clase de componente registrado por los plugins.

- `@tailwind utilities` Esto inyecta las clases de utilidad de Tailwind y
  cualquier clase de utilidad registrada por los plugins.

- `@tailwind variants` Esta directiva sirve para controlar donde Tailwind
  inyecta las variaciones responsivas de cada utilidad. Si se omite, Tailwind
  añadirá estas clases al final de tu css, por defecto.

### Personalización y configuración

- Dentro del archivo `tailwind.config.js` puedes personalizar la configuración

### 1. Theme

- Es donde define la paleta de colores, la escala de tipos, las fuentes, los
  puntos de interrupción, los valores del radio del borde y más de su proyecto.

  ##### 1.1 screens
  `screens` permite personalizar los breakpoints responsivos de tu proyecto
  ```JAVASCRIPT
  module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
  ```

  ##### 1.2 Colors
  `colors` permite personalizar la paleta de colores global para su proyecto.
  ```JAVASCRIPT
  module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },

      // ...
    }
  }
  ```

  ##### 1.3 Spacing
  `spacing` permite personalizar el espaciado global y la escala de tamaño para
  su proyecto
  ```JAVASCRIPT
  module.exports = {
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    }
  }
  ```

  ##### keyword extend
  `extend` Se usa para agregar valores, sin eliminar los que vienen por default
  ```JAVASCRIPT
  module.exports = {
  theme: {
    extend: {
      // agrega un nuevo breakpoint además de los brakepoints predeterminados 
      screens: {
        '3xl': '1600px',
      }
    }
  }
  ```

## tailwind config full

- Genera un archivo completo de todas las opciones que tenemos para usar

```BASH
npx tailwindcss init tailwind.config.full.js --full
```
