// creating a function in javascript
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) 
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() 
{
    // var year = parseInt(texto.value);
    var verde = "#49b149";
    var lineas = parseInt(texto.value); //Líneas totales
    var l = 0; // linea inicial
    var ancho = d.width;
    var space = ancho / lineas;

    //Dibujando bordes del lienzo
    dibujarLinea("red", 1, 1, 1, 299);
    dibujarLinea("red", 1, 299, 299, 299);
    dibujarLinea("red", 1, 1, 299, 0);
    dibujarLinea("red", 299, 1, 299, 299);

    //Dibujando primera mitad

    /*
        Fórmulas
        yi = l * 10
        xi = (l + 1) * 10
    */
    var yi;
    var xf;
    while (l < lineas) {
        yi = l * space;
        xf = (l + 1) * space;
        dibujarLinea(verde, 0, yi, xf, 300);
        l++;
    }

    //Dibujando segunda mitad
    for (var l = 0, xi, yf; l < lineas; l++) 
    {
        xi = space * (l + 1);
        yf = space * (l + 2);
        dibujarLinea("blue", xi, 0, 300, yf);
    }

}

//Obtener datos del formulario
var texto = document.getElementById("lineasUser");
var boton = document.getElementById("botoncito");

//agregando escuchador de eventos
boton.addEventListener("click", dibujoPorClick);

// d = obtener todos los datos de la etiqueta canvas
var d = document.getElementById("dibujito");
// lienzo es para indicar si el dibujo lo quiero en 2D o 3D
var lienzo = d.getContext("2d");
// console.log(lienzo);
