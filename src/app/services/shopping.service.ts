import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

const API_URL= environment.api_url;
@Injectable({ providedIn: 'root' })
export class shoppingService{
    constructor(private http: HttpClient) { }

    
    get_shopping_credentials(product: Product) {
        console.log(product);
        return this.http.post(API_URL+`user-cart`, product);
    }
}