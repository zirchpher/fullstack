import { Component } from '@angular/core';

// Model
import { IProduct } from './model/product.model'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'store';

    widthImg: number = 10;

    register = {
        name: '',
        email: '',
        password: '',
    }

    box = {
        width: 100,
        height: 100,
        color: "peachpuff",
    }

    person = {
        name: 'Remmian',
        age: 20,
    };

    username: string = 'fara';

    products: IProduct[] = [
        {
            name: 'EL mEjOr juguete',
            price: 565,
            image: './assets/images/toy.jpg',
            category: 'all',
        },
        {
            name: 'Bicicleta casi nueva',
            price: 356,
            image: './assets/images/bike.jpg'
        },
        {
            name: 'Colleción de albumnes',
            price: 34,
            image: './assets/images/album.jpg'
        },
        {
            name: 'Mis libros',
            price: 23,
            image: './assets/images/books.jpg'
        },
        {
            name: 'Casa para perro',
            price: 34,
            image: './assets/images/house.jpg'
        },
        {
            name: 'Gafas',
            price: 3434,
            image: './assets/images/glasses.jpg'
        }
    ]

    product = {
        name: 'Arch Linux',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Archlinux-vert-dark.svg/400px-Archlinux-vert-dark.svg.png',
        kernel: '6.0.11-arch1-1',
    };

    increaseAge() {
        this.person.age += 1;
    }

    onScrool(event: Event) {
        const element = event.target as HTMLElement;
        console.log(element.scrollTop);
    }

    names: string[] = ['Remmian', 'cintia', 'Rafaela', 'Pedro'];

    addUser() {
        this.names.push(this.username);
        this.username = '';
    }

    deleteName(indice: number) {
        this.names.splice(indice, 1);
    }

    // changeText(event: Event) {
    //     const element = event.target as HTMLInputElement;
    //     this.username = element.value;
    // }

    // saludar() {
    //     console.log("RAAA");
    // }

    registrarse() {
        console.log(this.register);
    }
}
