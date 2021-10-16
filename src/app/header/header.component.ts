import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
selector : 'app-header',
templateUrl: './header.component.html'
})

export class headerComponent implements OnInit{
    isLoggedIn: Observable<boolean>;
    public userloggedin: boolean = false;
    constructor(private authService: AuthService, public router: Router) { }
  
    ngOnInit() {
    
    }
  
    // onLogout() {
    //   this.authService.logout();
    // }

}