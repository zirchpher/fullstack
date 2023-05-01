import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Model
import { IProduct } from '../model/product.model';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private API = 'https://fakestoreapi.com/products';
    constructor(private httpClient: HttpClient) {}

    fetchAllDatas() {
        const products = this.httpClient.get<IProduct[]>(this.API);
        return products;
    }
}
