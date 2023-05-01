'use strict';

function combatir(player1, player2) {
    let turno = 0;
    while (player1.estaVivo() && player2.estaVivo()) {
        console.log(`Tueno ${turno}`);

        console.log(`>>> Acción de ${player1.nombre}`);
        player1.atacar(player2);

        console.log(`>>> Acción de ${player2.nombre}`);
        player2.atacar(player1);

        console.log("----------------------------");
        turno += 1;
    }
    if (player1.estaVivo()) {
        console.log(`¡${player1.nombre} ha ganado!`);
    }
    else if (player2.estaVivo()) {
        console.log(`¡${player2.nombre} ha ganado!`);
    }
    else {
        console.log("¡Empate!");
    }
}

class Personaje {
    constructor({
        nombre,
        fuerza,
        inteligencia,
        defensa,
        vida,
        espada,
        libro,
    }) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.inteligencia = inteligencia;
        this.defensa = defensa;
        this.vida = vida;
        this.aguante = this.fuerza * this.vida;

        this.espada = espada;
        this.libro = libro;
    }

    mostrarAtributos() {
        console.log(`${this.nombre}:`);
        console.log(`   - Fuerza: ${this.fuerza}`);
        console.log(`   - Inteligencia: ${this.inteligencia}`);
        console.log(`   - Defensa: ${this.defensa}`);
        console.log(`   - Vida: ${this.vida}`);
        console.log(`   - Aguante: ${this.aguante}`);
    }

    subirNivel({
        fuerza = 0,
        inteligencia = 0,
        defensa = 0,
    }) {
        this.fuerza += fuerza;
        this.inteligencia += inteligencia;
        this.defensa += defensa;
    }

    estaVivo() {
        return this.vida > 0;
    }

    morir() {
        this.vida = 0;
        console.log(`${this.nombre} ha muerto.`);
    }

    calcularDaño(enemigo) {
        return this.fuerza - enemigo.defensa;
    }

    atacar(enemigo) {
        const daño = this.calcularDaño(enemigo);
        enemigo.vida -= daño;
        console.log(`${this.nombre} ha realizado ${daño} puntos de daño a ${enemigo.nombre}`);

        if (enemigo.estaVivo()) {
            console.log(`La vida de ${enemigo.nombre} ahora es ${enemigo.vida}`);
        }

        else {
            enemigo.morir();
        }
    }
}

class Guerrero extends Personaje {
    constructor(props) {
        super(props);
    }

    cambiarArma() {
        const option = parseInt(prompt("Elige una espada: (1) Acero Valyrio, daño 8. (2) Matadragones, daño 10."));

        switch (option) {
            case 1:
                this.espada = 8;
                console.log("Espada: Acero Valyrio de daño 8 escogida.");
                break;

            case 2:
                this.espada = 10;
                console.log("Espada: Matadragones de daño 10 escogida.");
                break;
            default:
                console.log("Espada no existente");
                break;
        }

        this.mostrarAtributos();
    }

    mostrarAtributos() {
        super.mostrarAtributos();
        console.log(`   - Espada: ${this.espada}`);
    }

    calcularDaño(enemigo) {
        return this.fuerza * this.espada - enemigo.defensa;
    }
}

class Mago extends Personaje {
    constructor(props) {
        super(props);
    }

    mostrarAtributos() {
        super.mostrarAtributos();
        console.log(`   - Libro: ${this.libro}`);
    }

    calcularDaño(enemigo) {
        return this.inteligencia * this.libro - enemigo.defensa;
    }
}


const luffy = new Personaje({
    nombre: "Luffy",
    fuerza: 100,
    inteligencia: 20,
    defensa: 70,
    vida: 200,
});

const zoro = new Guerrero({
    nombre: "Roronoa Zoro",
    fuerza: 30,
    inteligencia: 20,
    defensa: 40,
    vida: 166,
    espada: 4,
});

const harry = new Mago({
    nombre: "Harry Potter",
    fuerza: 70,
    inteligencia: 4,
    defensa: 40,
    vida: 1000,
    libro: 50,
});

combatir(zoro, harry);