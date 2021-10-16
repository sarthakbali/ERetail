import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { signupService } from 'src/app/services/signup.services';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public result: signupService[];
  
  constructor(private signup_services :signupService,private router: Router){
  }
  
  signupForm: FormGroup;
 
    ngOnInit() {
 
        this.signupForm = new FormGroup({

            displayName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            //second_name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            userName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            //email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            password: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
            role: new FormControl('', [Validators.required])

            
        });
    }
    signupUser() {
        //console.log(this.signupForm.value);
        const abc = this.signup_services.get_signup_credentials(this.signupForm.value)
        abc.subscribe((res:signupService[])=>{
          //console.log(res);
           this.result = res;
           alert("Signup Successfull");
           this.router.navigateByUrl('login');
       })
           
      }
      
}
