import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteProductComponent } from './seller-dashboard/view-product/delete-product/delete-product.component';
import { EditProductComponent } from './seller-dashboard/view-product/edit-product/edit-product.component';
import { AddProductComponent } from './seller-dashboard/add-product/add-product.component';
import { ViewProductComponent } from './seller-dashboard/view-product/view-product.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AuthGuardService as AuthGuard } from '../services/authGuard.services';
import { AuthGuardsService as Guard } from 'src/app/services/authguard.service';
import { SellerComponent } from './seller-dashboard/seller/seller.component';
import { ConfirmguardGuard } from '../guards/confirmguard.guard';
const routes: Routes = [ 
 
  // { path : '' , redirectTo: '/seller-dashboard', pathMatch: 'full'},
  { path: '', component: SellerComponent , canActivate: [AuthGuard,Guard] ,
  children:[
  { path:'seller-dashboard', component:SellerDashboardComponent, canActivate: [AuthGuard,Guard]},
  { path: 'view-product', component: ViewProductComponent, canActivate: [AuthGuard,Guard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard,Guard] ,canDeactivate:[ConfirmguardGuard]},
  { path: 'edit-product/:id', component: EditProductComponent,canActivate: [AuthGuard,Guard],canDeactivate:[ConfirmguardGuard] },
  { path: 'delete-product', component: DeleteProductComponent,canActivate: [AuthGuard,Guard] },
  ]
 }];

@NgModule({
  providers:[ConfirmguardGuard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
