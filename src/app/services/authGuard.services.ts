import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
    providedIn: 'root'
  })

export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('access_role')
      this.router.navigate(['login']);
      // return false;
    }
    // else if(!this.auth.isuserAuthenticated()){
    //   this.router.navigate(['login']);
    //   return false;
    // }
    else{
    return true;
    }
         
}
}