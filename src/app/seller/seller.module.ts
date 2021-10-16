import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { ViewProductComponent } from './seller-dashboard/view-product/view-product.component';
import { AddProductComponent } from './seller-dashboard/add-product/add-product.component';
import { EditProductComponent } from './seller-dashboard/view-product/edit-product/edit-product.component';
import { DeleteProductComponent } from './seller-dashboard/view-product/delete-product/delete-product.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerComponent } from './seller-dashboard/seller/seller.component';




@NgModule({
  declarations: [
    SellerDashboardComponent,
    ViewProductComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    SellerComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SellerModule { }
