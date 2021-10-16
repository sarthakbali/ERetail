import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API_URL= environment.api_url;
@Injectable({ providedIn: 'root' })
export class cartService {
    constructor(private http: HttpClient) { }

    cart_products(){
        return this.http.get(API_URL+`user-cart`);
    }
}