import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

const API_URL= environment.api_url;
@Injectable({ providedIn: 'root' })
export class addProductService{
    constructor(private http: HttpClient) { }

    
    get_product(product: Product) {
        console.log(product);
        return this.http.post(API_URL+`product`, product);
    }
    
}