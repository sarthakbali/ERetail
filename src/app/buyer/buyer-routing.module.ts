import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { StartShoppingComponent } from './buyer-dashboard/start-shopping/start-shopping.component';
import { CartComponent } from './buyer-dashboard/cart/cart.component';
import { CheckoutComponent } from './buyer-dashboard/cart/checkout/checkout.component';
import { userGuardService as userGuard } from '../services/userGuard.services';
import { AuthGuardsService as Guard } from '../services/authguard.service';
import { BuyerComponent } from './buyer-dashboard/buyer/buyer.component';

const routes: Routes = [

  { path: '', component: BuyerComponent , canActivate: [userGuard,Guard] ,
  children:[
  { path : 'buyer-dashboard', component: BuyerDashboardComponent,canActivate: [userGuard,Guard]},
  { path : 'start-shopping', component: StartShoppingComponent,canActivate: [userGuard,Guard]},
  { path : 'cart', component: CartComponent,canActivate: [userGuard,Guard]},
  {  path : 'checkout', component: CheckoutComponent,canActivate: [userGuard,Guard]},
]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
