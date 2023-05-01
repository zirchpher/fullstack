import { Component, OnInit } from '@angular/core';
// Model
import { IProduct } from 'src/app/model/product.model';
// Servicios
import { StoreService } from 'src/app/services/store.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    products: IProduct[] = [];
    addedProducts: IProduct[] = [];
    total = 0;
    todayDate = new Date();

    // Creamos una instancia de nuestro servicio desde el constructor
    constructor(
        private storeService: StoreService,
        private httpService: HttpService
    ) {
        this.addedProducts = this.storeService.addedProducts;
    }

    ngOnInit(): void {
        this.httpService.fetchAllDatas().subscribe((data) => {
            this.products = data;
        });
    }

    productsInShoppingCart(product: IProduct): void {
        this.storeService.addProduct(product);
        this.total = this.storeService.getTotalPrices();
    }
}
