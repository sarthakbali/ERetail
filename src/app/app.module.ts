import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { headerComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component'; 
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './Signup/signup/signup.component';
import { LoginComponent } from './Login/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {TokenInterceptorService} from './services/token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    DummyComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>{
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:3000','localhost:8080'],
        blacklistedRoutes:[/localhost:4200\/auth\/auth.*/,/localhost:4200\/main\/main.*/]
       
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
