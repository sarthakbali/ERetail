import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup} from '../models/signup.model';
@Injectable({ providedIn: 'root' })
export class signupService{
    constructor(private http: HttpClient) { }

    
    get_signup_credentials(user: Signup) {
        console.log(user);
        return this.http.post(`http://localhost:3000/user`, user);
    }
}