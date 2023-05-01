document.addEventListener("mouseup", dibujarMouse);

function dibujarMouse(event) {
//   var movimiento = 10;
  var mouseX = event.layerX;
  var mouseY = event.layerY;
  if (mouseX < 300 && mouseY < 300) {
    dibujarLinea(colorcito, x, y, mouseX, mouseY, papel);
    x = mouseX;
    y = mouseY;
  }
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var colorcito = "#D4EF47";

var x = 100;
var y = 100;
// Línea de inicio
dibujarLinea(colorcito, x - 1, y - 1, x + 1, y + 1, papel);

//Dibujando bordes del lienzo
dibujarLinea(colorcito, 1, 1, 1, 299, papel);
dibujarLinea(colorcito, 1, 299, 299, 299, papel);
dibujarLinea(colorcito, 1, 1, 299, 0, papel);
dibujarLinea(colorcito, 299, 1, 299, 299, papel);