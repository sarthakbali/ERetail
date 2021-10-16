import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Product } from '../models/product.model';
//import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL= environment.api_url;
@Injectable({ providedIn: 'root' })
export class checkoutService{
    constructor(private http: HttpClient) { }


    checkout_product() {
        //console.log(editproduct);
        return this.http.delete(API_URL+`user-cart`);
    }
    
}