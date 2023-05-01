function limpiar() {
    granja.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarTeclado(evento) 
{
    var movimiento = 10;
    granja.drawImage(cerdo.imagen, 240, 240);
    switch (evento.keyCode) 
    {
        case teclas.UP: dibujar();
            granja.drawImage(cerdo.imagen, x, y - movimiento);
            y = y - movimiento;
            break;
        case teclas.DOWN: dibujar();
            granja.drawImage(cerdo.imagen, x, y + movimiento);
            y = y + movimiento;
            break;
        case teclas.LEFT: dibujar();
            granja.drawImage(cerdo.imagen, x - movimiento, y);
            x = x - movimiento;
            break;
        case teclas.RIGHT: dibujar();
            granja.drawImage(cerdo.imagen, x + movimiento, y);
            x = x + movimiento;
            break;
        default:
            break;
    }
}

function aleatorio(min, maxi) {
    var result;
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujarTeclado();
}

function dibujar() {
    if (fondo.cargaOK) {
        granja.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK) {
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            granja.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargaOK) {}

}

var canvas = document.getElementById("granjita");
var granja = canvas.getContext("2d");
var cantidad = aleatorio(5, 15);

// último movimiento del chanchito
var x = 250;
var y = 250;
// teniendo control del teclado
document.addEventListener("keyup", dibujarTeclado);
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var vaca = {
    url: "./IMAGES/vaca.png",
    cargaOK: false
};

var fondo = {
    url: "./IMAGES/tile.png",
    cargaOK: false
};

var cerdo = {
    url: "./IMAGES/cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

// cargando animales
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
