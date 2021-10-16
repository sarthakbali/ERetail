import { CanActivate, Router } from '@angular/router'
import { AuthService } from './auth.service'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuardsService implements CanActivate {
    constructor(private check_login:AuthService, private router: Router){}
    canActivate():boolean{
      if(this.check_login.login_entity()){
        return true;
      }else
      {
        this.router.navigate(['/login'])
      }
    }
    canActivateChild():boolean{
      if(this.check_login.login_entity()){
        return true;
      }else
      {
        this.router.navigate(['/login'])
      }
  
    }
  }
  