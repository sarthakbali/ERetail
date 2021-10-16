import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL= environment.api_url;
@Injectable({ providedIn: 'root' })
export class UpdateProductService{
    constructor(private http: HttpClient) { }


    update_product(id,product : Product):Observable<Product> {
        //console.log(editproduct);
        return this.http.put<Product>(API_URL+`product`+'/'+id , product);
    }
    
}