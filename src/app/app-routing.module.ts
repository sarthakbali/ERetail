import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './Signup/signup/signup.component';
import { LoginComponent } from './Login/login/login.component';

import { AuthGuardService as AuthGuard } from './services/authGuard.services';
import { userGuardService as userGuard } from './services/userGuard.services';
import { AuthGuardsService as Guard } from './services/authguard.service';
import { SellerModule } from './seller/seller.module';
const routes: Routes = [
  { path : '' , redirectTo: '/homepage', pathMatch: 'full'},
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule)
  },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
