import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

const API_URL= environment.api_url;
interface IToken {
    access_token: string;
  }

@Injectable({ providedIn: 'root' })
export class loginService {
    constructor(private http: HttpClient,private readonly jwtService: JwtHelperService) { }


    get_login_credentials(username: string, password: string) {
        return this.http.post<IToken>(API_URL+'auth/login', { username, password })
        .pipe(pluck('access_token'), tap(token => {
            localStorage.setItem('access_token', token);
            const decodedToken = this.jwtService.decodeToken();
            localStorage.setItem('access_role', decodedToken['role']);
          }));
    }
    
}