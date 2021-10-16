import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, private readonly jwtService: JwtHelperService, private router: Router) {}
  //private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }
  public isAuthenticated(): boolean{
    
    
      localStorage.getItem('access_token');
      const decodedToken = this.jwtService.decodeToken();
      //console.log(decodedToken);
      const role = decodedToken['role'];
     //console.log(role);
      if(role == 'admin'){
      return true;
    }
     
  }
  public isuserAuthenticated(): boolean{
    
    
    localStorage.getItem('access_token');
    const decodedToken = this.jwtService.decodeToken();
    //console.log(decodedToken);
    const role = decodedToken['role'];
   //console.log(role);
    if(role == 'user'){
    return true;
  }
  
}
  login_entity(){
    return !! localStorage.getItem('access_token')
  }
  getToken(){
    return localStorage.getItem('access_token');
  }
  // logout() {
  //   this.loggedIn.next(false);
  //   this.router.navigate(['/login']);
  // }
   
  }
