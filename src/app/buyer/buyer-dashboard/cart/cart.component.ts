import { Component, OnInit } from '@angular/core';
import { cartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  res: any;
  totalvalue:number;
  price_list = [];
  total = 0;
  final_value :number;
  constructor(private cart: cartService , private router: Router) { }

  ngOnInit() {
    const obs = this.cart.cart_products();
    obs.subscribe((res:cartService[])=>{
   console.log(res);
      this.res = res;
      
      for(let res of this.res){
        if(res.product.onSale ==true){
          this.totalvalue = res.quantity * res.product.salePrice;
        }
        else{
          this.totalvalue = res.quantity * res.product.mrp
        }
        this.price_list.push(this.totalvalue);
        
 
     }
     for(let x of this.price_list)
     this.total = x +this.total;
        this.final_value = this.total;
  })
  }

  navigate_checkout(){
    this.router.navigate(['buyer/checkout']);
  }
 

}
