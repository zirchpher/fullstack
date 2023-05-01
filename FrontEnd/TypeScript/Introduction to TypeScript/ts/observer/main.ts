interface Observer {
    update: (data: any) => void;
}

interface Subject {
    // recivimos un "observer" de tipo "Observer"
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
    // Declaramos un array de tipo "Observer"
    // Nota: No lleva el "this" ni el "const" porque no es una propiedad de la clase
    observers: Observer[] = [];

    constructor() {
        const input: HTMLInputElement = document.getElementById('value') as HTMLInputElement;
        input.addEventListener('input', () => {
            this.notify(input.value);
        });
    }

    subscribe(observer: Observer) {
        this.observers.push(observer);
    };

    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex(obs => obs === observer);
        this.observers.splice(index, 1);
    };

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    // Declaramos una propiedad de tipo "HTMLElement"
    private price: HTMLElement;

    constructor() {
        // Aquí le asignamos un valor a la propiedad
        this.price = document.getElementById('price') as HTMLElement;
    }

    update(data: any) {
        this.price.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);