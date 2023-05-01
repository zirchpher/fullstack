class Pakiman 
{
    constructor(nombre, vida, ataque)
    {
        this.tipo = "Tierra";
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;

        this.imagen = new Image();
        this.imagen.src = IMG[this.nombre];
    }

    hablar()
    {
        var speak = this.nombre.slice(0,4);
        alert(speak + " " + speak + " " + this.nombre.slice(4));
    }

    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>"+ this.nombre +"</strong>" + "<br />");
        document.write("Vida : "+ this.vida + "<br />");
        document.write("Ataque : "+ this.ataque + "<br />" + "<hr />");
        document.write("</p>");
    }
}