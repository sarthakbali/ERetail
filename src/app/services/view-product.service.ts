import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API_URL= environment.api_url;
@Injectable({ providedIn: 'root' })
export class viewProduct_Service {
    constructor(private http: HttpClient) { }

    view_products(){
        return this.http.get(API_URL+`product/user`);
    }
}