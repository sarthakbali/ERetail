import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { StartShoppingComponent } from './buyer-dashboard/start-shopping/start-shopping.component';
import { CartComponent } from './buyer-dashboard/cart/cart.component';
import { CheckoutComponent } from './buyer-dashboard/cart/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerComponent } from './buyer-dashboard/buyer/buyer.component';
import { HighlightDetailsDirective } from './highlight-details.directive';


@NgModule({
  declarations: [
    BuyerDashboardComponent,
    StartShoppingComponent,
    CartComponent,
    CheckoutComponent,
    BuyerComponent,
    HighlightDetailsDirective
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
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
export class BuyerModule { }
