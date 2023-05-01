import { Component, EventEmitter, Input, Output } from '@angular/core';

// Model
import { IProduct } from '../../model/product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
    @Input() product!: IProduct;

    // Send product to dad component
    @Output() shoppingCart = new EventEmitter<IProduct>();

    addToCart() {
        this.shoppingCart.emit(this.product);
    }
}
