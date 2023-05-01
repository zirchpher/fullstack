# Veamos cómo podemos hacer nuestro sitio web más accesible

# Índice

- HTML

  - [HTML semántico](#html-semántico)
  - [Precarga de Apis](#precarga-de-apis)
  - [MediaQueries desde el HTML](#mediaqueries-desde-el-html)

# HTML semántico

**¿Por qué es importante tener el html semántico?**

- Primero, definamos qué es el html. El html semático es usar las etiquetas html para lo que ha sido creado. Porque podemos tener:

```HTML
    <!-- HTML NO semántico -->
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
```

- Y podemos tener este HTML:

```HTML
    <!-- HTML Semántico -->
    <body>
        <header></header>
        <main></main>
        <footer></footer>
    </body>
```

- Aunque para nuestros usuarios no haya ningún cambio visual. Para aquellas personas con discapacidad visual, sí existe un cambio gigante, el HTML semántica le ayuda al lector de pantalla saber dónde se encuentra ubicado la persona, y así el lector le puede comunicar a la persona si se encuentra en el header o en el main content o si está en en el footer.
