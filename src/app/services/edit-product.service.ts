import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
//import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

const API_URL= environment.api_url;
@Injectable({ providedIn: 'root' })
export class editProductService{
    constructor(private http: HttpClient) { }

    
    edit_product(id):Observable<Product> {
        //console.log(editproduct);
        return this.http.get<Product>(API_URL+`product/user`+'/'+id);
    }
    
}