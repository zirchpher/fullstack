// FUNCTIONS
function dibujarTeclado(event) 
{
  var movimiento = 10;
  switch (event.keyCode) 
  {
    // Casos de tecla derecha , izq, arriba, abaj
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y -= movimiento;
      break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y += movimiento;
      break;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x -= movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x += movimiento;
      break;

    default:
      console.log("Otra tecla");
      break;
  }
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) 
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var colorcito = '#D4EF47';
// variables para recordar mi último lugar
var x = 100;
var y = 100; 

dibujarLinea(colorcito, x-1, y-1, x+1, y+1, papel);