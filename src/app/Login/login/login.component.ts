import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { loginService } from 'src/app/services/login.services';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login_result: loginService[];
  message="Logged in Successfully";
  action="OK";
  message1 = "not logged in"
  constructor(private login_services :loginService , private router: Router, private auth: AuthService, private readonly jwtService: JwtHelperService,private _snackBar: MatSnackBar){
  }
  loginForm: FormGroup;
 
    ngOnInit() {
        
        this.loginForm = new FormGroup({
            username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            password: new FormControl(null, [Validators.required, Validators.maxLength(20)])
        });
    }
    get f() { return this.loginForm.controls; }
    loginUser() {
        console.log(this.loginForm.value);
        const login = this.login_services.get_login_credentials(this.f.username.value,this.f.password.value)
        login.subscribe((res=>{
          console.log(res);
           //this.login_result = res;
           localStorage.getItem('access_token');
            const decodedToken = this.jwtService.decodeToken();
           //console.log(decodedToken);
            const role = decodedToken['role'];
           //console.log(role);
           if(role == 'admin'){
           // alert("Logged in successfully");
            this.router.navigate(['seller/seller-dashboard']).then(()=>{
                this._snackBar.open(this.message, this.action,{
                  duration: 2000
                });
                
              });
           
           }
           else if(role == 'user'){
            //alert("Logged in successfully");
            this.router.navigate(['buyer/buyer-dashboard']).then(()=>{
              this._snackBar.open(this.message, this.action,{
                duration: 2000
              });
              
            });
           }
           
       }))
      }
       

}
    
//user-token----eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNAYnV5ZXIuY29tIiwic3ViIjoiNWViZmIwZmViZmMzYTkyMDUwOTdhMzNiIiwicm9sZSI6InVzZXIiLCJpYXQiOjE1ODk2MjE5NTUsImV4cCI6MTU5MDIyNjc1NX0.OblitxfC1LK-3J8KkCSOuIZoTewUmMXf9iKDE2HmjE4


