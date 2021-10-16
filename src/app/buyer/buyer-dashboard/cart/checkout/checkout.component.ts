import { Component, OnInit, ViewChild } from '@angular/core';
import { cartService } from 'src/app/services/cart.service';
import { checkoutService } from 'src/app/services/checkout.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
// export interface product {
//   name: String;
//   mrp: number;
//   salePrice : String;
//   quantity: number;
//   onSale: boolean;
// }
 interface product{
  name:string;
  mrp:number;
  salePrice:String;
}
interface productUser {
 product:product;
 quantity:number;
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  items:any;
  totalvalue:number;
  price_list = [];
  total = 0;
  final_value :number;
  message= "Checkout service failed";
  action = "OK"
  displayedColumns:string[]=['name','quantity','mrp','salePrice'];
  dataSource=new MatTableDataSource<productUser>(this.items);
  constructor(private cart: cartService , private checkout: checkoutService, private snackBar:MatSnackBar ) { 
    this.dataSource.filterPredicate = (data,filter:string) =>{
      const dataString= data.product.name+data.quantity+data.product.mrp+data.product.salePrice;
      return dataString.indexOf(filter) !=-1;
    }
  }
  res: any;
 checkout_result:any;
 @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    const obs = this.cart.cart_products();
    obs.subscribe(res=>{
   console.log(res);
      // this.res = res;
      this.dataSource.data=res as productUser[];
      

     
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
  });
  this.dataSource.sort = this.sort;
  this.dataSource.sortingDataAccessor = (item, property) => {
    switch (property) {
    case 'name': return item.product.name;
    case 'mrp': return item.product.mrp;
    case 'salePrice': return item.product.salePrice;
    default: return item[property];
    }}
}
  applyFilter(product: productUser) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
  checkouts(){
    this.checkout.checkout_product().subscribe(res=>{
   
  
      //this.checkout_result = res;
  },(err=>{

    this.snackBar.open(this.message, this.action,{
      duration: 2000
    });
  }))
  }
    
}
