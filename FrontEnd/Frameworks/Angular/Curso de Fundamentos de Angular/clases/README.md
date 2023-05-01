# Índice

-   INTRODUCCIÓN

    -   [Lectura que explica algunos conceptos importantes](#lectura-que-explica-algunos-conceptos-importantes)
    -   [Archivos internos](#archivos-internos)

-   CONCEPTOS

    -   [String interpolation](#string-interpolation)
    -   [Property Binding](#property-binding)
    -   [Event Binding](#event-binding)
    -   [Data binding con ngModel](#data-binding-con-ngmodel)
    -   [ngIf](#ngif)
    -   [ngFor](#ngfor)
    -   [ngSwitch](#ngswitch)
    -   [ngClass and ngStyle](#ngclass-and-ngstyle)
    -   [Clases Dinámicas](#clases-dinámicas)
    -   [Formularios](#formularios)
    -   [Deploy con Firebase](#deploy-con-firebase)

## Lectura que explica algunos conceptos importantes

    `https://medium.com/@yonem9/angular-qu%C3%A9-narices-es-eso-del-data-binding-y-los-pipes-f1a094eefb7f`

## Archivos internos

`1. .browserslistrc:`

    - Indica a angular en que versiones tiene que ser compatible tu aplicacion

`2. .editorconfig`

    - Tiene mas que ver con trabajar en equipo.
    - Sirve para configurar las reglas de desarrollo del equipo.
    - Por ejemplo la indentacion, etc.
    - Para que este archivo funcione debes de instalar en VsCode un plugin llamado EditorConfig for VS Code

`3. tsconfig.json`

    - Tiene que ve con la configuracion que tiene Angular con TypeScript

`4. angular.json`

    - Es donde podemos manejar diferentes ambientes.
    - Por ejemplo: podemos tener un ambiente de staging y un ambiente de QA (testing).
    - En la seccion de budgets podemos configurar cual es el tamaño que deberia tener normalmente nuestra aplicacion

`5. karma.conf.js`

    - Es para correr unit testing

`6. package.json`

    - Las versiones que estamos utilizando

`7. .nvmrc` - Sirve para especificar la version de node en la cual corre nuestro proyecto. - Si no esta creada simplemente podemos crearla

## String interpolation

-   String interpolation es la manera de enviar datos desde nuestro componente hacia la vista. Utilizando el doble símbolo de llaves {{ }}, o también conocidos como brackets, puedes imprimir el valor de una variable, realizar operaciones matemáticas o hacer el llamado a una función dentro del código HTML.

```HTML
<h1>{{ 'Hola Platzi'.toUpperCase() }}</h1>
<h2>1 + 1 = {{ 1 + 1 }}</h2>
<h3>{{ myFunction(); }}</h3>
```

## Property Binding

-   Property Binding es la manera que dispone Angular para controlar y modificar las propiedades de los distintos elementos de HTML. Para esto, simplemente utiliza los corchetes [] para poder modificar dinámicamente ese atributo desde el controlador.
    Utilidades.

-   Utilidades

    -   El atributo src de la etiqueta `<img>` para modificar dinámicamente una imagen.
    -   El atributo href de un `<a>` para modificar un enlace.
    -   El atributo value de un `<input>` para autocompletar un valor de un formulario.
    -   El atributo disable de un `<input>` para habilitar/deshabilitar un campo de un formulario.

-   Si tienes en tu componente:

```TypeScript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  empresa = 'Platzi';
  habilitado = true;
}
```

-   Puedes modificar el value de un campo de un formulario de la siguiente manera:

```HTML
<input [value]="empresa" [disabled]="habilitado"  />
```

-   Se imprime el valor de la propiedad empresa como valor de un `<input>` y gracias a la variable habilitado controlas la edición del campo.

## Event Binding

-   A lo igual que el Property Binding nos permite modificar el valor de los atributos de los elementos HTML desde el controlador, el Event Binding permite controlar los eventos que suceden en estos elementos. El clic de un botón, detectar cambios en un campo, el envío de un formulario, entre otros eventos. Para esto utiliza los paréntesis () para el bindeo de la propiedad del elemento.

-   Si tienes en tu componente:

```TypeScript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enviarFormulario() {
    // code ...
  }
}
```

-   Puedes ejecutar el método enviarFormulario() cuando se realiza un clic en un botón de la siguiente manera:

```HTML
<button (click)="enviarFormulario()" >
```

## Data binding con ngModel

-   El atributo ngModel permite el intercambio de datos de forma bidireccional entre el componente y la vista. Lo que suceda en el componente, se verá reflejado en la vista. Lo que se suceda en la vista, inmediatamente impactará en el componente.

```HTML
<input [(ngModel)]="name">
```

-   ngModel usar tanto los corchetes [] como los paréntesis (). De esta manera, se vuelve bidireccional el intercambio de datos. Si no quieres la bidirección, solo colocamos los corchetes [ngModel] para que la comunicación sea unidireccional.Para utilizar ngModel, es necesario hacer uso e importar Angular Forms. Para esto, dirígete al archivo app.module.ts que es el módulo principal de toda aplicación Angular y agrega lo siguiente:

```TypeScript
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ... ],
  imports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [ ... ]
})
export class AppModule { }
```

-   De esta manera puedes importar el módulo FormsModule desde @angular/forms y agregarlo a imports para emplear la propiedad [(ngModel)].

## ngIf

-   Para usar un else en Angular, la sintaxis es algo especial. Debes crear un template en tu código HTML usando la etiqueta que provee Angular llamada `<ng-template>` con una Variable de Template, comenzando con `#`, para hacer referencia a este elemento desde tu If.

```HTML
<div *ngIf="isPlatzi; else templateElse">Hola, soy Platzi</div>
<ng-template #blockElse>
    <p>No soy Platzi</p>
</ng-template>
```

-   Si la condición del If no se cumple, seguido de punto y coma, se coloca la sentencia else haciendo referencia a templateElse, que es el nombre de la variable del template a mostrar en su lugar.

## ngFor

-   Al igual que con un If, Angular permite iterar un array de números, de cadenas de caracteres o de objetos usando `*ngFor`.Si tienes en tu componente un array de datos:

```TypeScript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myArray: string[] = [
    'Platzi',
    'es',
    'genial!'
  ];
}
```

-   Puedes mostrar cada elemento iterando el array en un elemento HTML:

```HTML
<ul>
    <li *ngFor="let str of myArray">
        {{ str }}
    </li>
</ul>
```

-   El `*ngFor` crea una variable temporal llamada str (o el nombre que más te guste) que contiene cada valor de myArray. Finalmente, utilizando una interpolación, muestras el valor de str.Quedando tu HTML de la siguiente manera:

```HTML
<ul>
  <li>Platzi</li>
  <li>es</li>
  <li>genial!</li>
</ul>
```

-   Índice de iteración

    -   ngFor también cuenta con un índice con el número de iteraciones. Puedes acceder a este número agregando al ngFor index as i de la siguiente manera:

```HTML
<ul>
    <li *ngFor="let str of myArray; index as i">
        {{ i }}. {{ str }}
    </li>
</ul>
```

-   Cada iteración contiene una variable i con el índice que le corresponde. Iniciando desde cero, da como resultado:

```HTML
<ul>
    <li>0. Platzi</li>
    <li>1. es</li>
    <li>2. genial!</li>
</ul>
```

## ngSwitch

-   Angular también ofrece la sentencia *ngSwitch y *ngSwitchCase para determinar el flujo de control de tu aplicación y qué elemento mostrar entre multiples elementos HTML. Además de utilizar un elemento default con \*ngSwitchDefault en caso de que ninguna condición se cumpla.

```TypeScript
@Component({
    selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    color: string = 'verde';
}
```

-   Ejemplo de \*ngSwitchCase

```HTML
<div [ngSwitch]="color">
    <p *ngSwitchCase="'azul'">
        El color el Azul
    </p>
    <p *ngSwitchCase="'verde'">
        El color el Verde
    </p>
    <p *ngSwitchCase="'rojo'">
        El color el Rojo
    </p>
    <p *ngSwitchDefault>
        No hay ningún color
    </p>
</div>
```

## ngClass and ngStyle

-   Con el binding de [class] y [style] puedes agregar clases y estilos fácilmente. Pero se vuelve algo complicado en el caso de que necesites agregar varias clases o modificar muchos estilos. Es por esto que Angular ofrece las directivas ngClass y ngStyle para este propósito.

-   Puedes bindear la directiva [ngStyle] o [ngClass] y pasarle un objeto con cada propiedad o clase que deseas agregar:

```HTML
<p [ngStyle]="{
        'color': textColor,
        'background': textBackground
    }">
</p>
```

-   El operador ternario será tu mejor aliado para agregar o quitar clases y estilos:

```HTML
<div [ngClass]="isAvailable ? 'active-class' : 'deactivate-class'">
</div>
```

-   O puedes usar las Interpolaciones en lugar del binding:

```HTML
<p ngClass="{{ isAvailable ? 'active-class' : 'deactivate-class' }}">
</p>
```

## Clases Dinámicas

-   Tenemos un input, con un id `#nameIput="ngModel"`, esto nos va a servir para agarrar su método del input `input.valid || input.invalid`

```HTML
<input type="text" required #nameIput="ngModel" [(ngModel)]="username" placeholder="Enter your Name">
```

-   Ahora este párrafo va a incluir o no, la clase "invalid", dependiento esta condición `nameIput.invalid`, si eso es true, entonces se agrega la clase "invalid"

```HTML
<p class="message-error" [class.invalid]="nameIput.invalid">
    El campo es requerido
</p>
```

## Formularios

-   Conociendo la directiva `[(ngModel)]` que nos facilita el intercambio de datos de forma bidireccional entre la vista y el componente, puedes crear tu primer formulario apoyándote de esta directiva y de otras características propias de Angular para el manejo y validación de formularios.

-   Paso 1

    -   Crea un simple formulario de Login en el HTML y las variables en el componente para capturar los valores de los campos con ngModel:

```TypeScript
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    form = {
    email: '',
    password = ''
    };
}
```

```HTML
<form>
    <div>
        <label></label>
        <input name="email" type="email" [(ngModel)]="form.email" required />
    </div>
    <div>
        <label></label>
        <input name="password" type="password" [(ngModel)]="form.password" required />
    </div>
    <div>
        <button type="submit">Iniciar sesión</button>
    </div>
</form>
```

-   Paso 2

    -   Agregale al componente un método que responda al evento del envío del formulario llamado submitLogin(). Puedes enlazar este método al formulario con la directiva (ngSubmit) que va colocada en la etiqueta <form> junto con una variable de template para ponerle un nombre al formulario como por ejemplo #formLogin="ngForm". Tienes que igualar el nombre de tu variable a ngForm para que Angular reconozca que se trata de un formulario.

```TypeScript
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    form = {
    email: '',
    password = ''
    };

    submitLogin() {
        // Login del usuario
    }
}
```

```HTML
<form (ngSubmit)="submitLogin()" #formLogin="ngForm">
    <div>
        <label></label>
        <input name="email" type="email" [(ngModel)]="form.email" required />
    </div>
    <div>
        <label></label>
        <input name="password" type="password" [(ngModel)]="form.password" required />
    </div>
    <div>
        <button type="submit">Iniciar sesión</button>
    </div>
</form>
```

-   Paso 3

    -   Finalmente, gracias a esta conexión de tu formulario con el componente, se activará el método submitLogin() al hacer clic en el botón. Para validar tu formulario, utiliza la variable de template para imprimir un mensaje de error en pantalla o deshabilitar el botón de envío de la siguiente manera:

```HTML
<div>
    <button [disabled]="formLogin.invalid" type="submit">Iniciar sesión</button>
</div>
```

## Deploy con Firebase

-   Deploy por primera vez:

    1. Ingresa a Firebase y accede con tu cuenta gmail.
    2. Ingresa a la opción "Go to Console"
    3. Crea una nuevo proyecto
    4. Selecciona el servicio de Hosting
    5. Instala Firebase en NPM de forma global
        ```BASH
            npm install -g firebase-tools
        ```
    6. Comprueba si se instaló correctamente mostrando la versión
        ```BASH
            firebase -V
        ```
    7. Inicializa el proyecto
        ```BASH
            firebase login
        ```
        ```BASH
            firebase init
        ```
    8. Seleccionamos los servicio de firebase que queremos (space para seleccionar)
    9. Selecciona el proyecto creado
    10. Selecciona las demás opciones a tu gusto
    11. Construye tu proyecto para producción
        ```BASH
            ng build
        ```
    12. En la parte de public, escribe el nombre que te salga en tu build
        ```JSON
            // firebase.json
            "hosting": {
                "public": "dist/{{ nombre-de-tu-proyecto }},
            }
        ```
    13. Finalmente, haz el deploy
        ```BASH
            firebase deploy
        ```

-   Deploy cuando ya tenemos nuestra página web en el hosting:
    1. Construye tu proyecto para producción
        ```BASH
            ng build
        ```
    2. Haz el deploy
        ```BASH
            firebase deploy
        ```
