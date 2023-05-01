var IMG = [];
IMG["Cauchin"] = "./IMAGES/vaca.png";
IMG["Pokacho"] = "./IMAGES/pollo.png";
IMG["Tocinauro"] = "./IMAGES/cerdo.png";

var coleccion = [];
coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push( new Pakiman("Pokacho", 80, 50) );
coleccion.push( new Pakiman("Tocinauro", 120, 40) );

// in -> me da en índice de cada elemento de la colección
// of -> me da el objeto de cada elemento de la colección
for (var monster of coleccion)
{
    monster.mostrar(); //forma " of "
    // coleccion[monster].mostrar(); forma " in "
    // console.log(monster);
}