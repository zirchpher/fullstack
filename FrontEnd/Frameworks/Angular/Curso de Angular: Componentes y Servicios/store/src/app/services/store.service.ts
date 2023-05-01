import { Injectable } from '@angular/core';

// Importa todo el patrón de Observables en Angular
import { BehaviorSubject } from 'rxjs';

// Model
import { IProduct } from 'src/app/model/product.model';

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    private _addedProducts: IProduct[];

    private myCart = new BehaviorSubject<IProduct[]>([]);
    // Creamos un Observable
    myCart$ = this.myCart.asObservable();

    constructor() {
        this._addedProducts = [];
    }

    addProduct(product: IProduct): void {
        this._addedProducts.push(product);
        this.myCart.next(this._addedProducts);
    }

    getTotalPrices(): number {
        const total = this._addedProducts.reduce((sum, item) => {
            return sum + item.price;
        }, 0);
        return total;
    }

    // getters and setter
    get addedProducts() {
        return this._addedProducts;
    }
}
