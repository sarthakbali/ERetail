import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { shoppingService } from 'src/app/services/shopping.service';
import { Router, ActivatedRoute } from '@angular/router';
import { product_Service } from 'src/app/services/products.services';
import { take } from 'rxjs/operators';
import { editProductService } from 'src/app/services/edit-product.service';
import { DataService } from 'src/app/shared/shared.service';
import { Route } from '@angular/compiler/src/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface CategoryProduct{
  name: string;
};
interface Product{
  _id: string,
  name: string,
  mrp: number,
  salePrice: number,
  quantity: number,
  onSale: boolean,
  category: CategoryProduct
};
@Component({
  selector: 'app-start-shopping',
  templateUrl: './start-shopping.component.html',
  styleUrls: ['./start-shopping.component.css'],
  
})
export class StartShoppingComponent implements OnInit {
  message="Product added to cart Successfully";
  action="OK";
  constructor(private shopping: shoppingService,private router : Router,private product_Services : product_Service,private edit_product_Services : editProductService, private data : DataService,private snackBar: MatSnackBar) { }
  result :shoppingService[];
  shoppings: FormGroup;
  edit_results : editProductService;
  ressult: any;
  addTocartForm:FormGroup;
  productdetail:any;
  ngOnInit() {

      this.shoppings = new FormGroup({

        name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        description: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        
        //email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        mrp: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
        salePrice: new FormControl(null, [Validators.required, Validators.maxLength(8)]),

         
      });
      this.addTocartForm = new FormGroup({

        
        quantity: new FormControl(null, [Validators.required ]),

         
      });
      
     const abc = this.data.getmessage().pipe(take(1)).subscribe((ress: Product)=>{
        console.log(ress);
        this.shoppings.patchValue(ress);
        this.ressult = ress;
     // this.ressult = ress;
      })
      
    //   let second_id = this.route.snapshot.paramMap.get('id');
    // console.log(second_id);
    // if(second_id){
    // const abc = this.edit_product_Services.edit_product(second_id).pipe(take(1)).
    // subscribe((res =>{
    //  console.log(res);
      
    // this.edit_results = res;
      
    
// }))
}
  
post_shopping() {

}

onformsubmit() {
  this.productdetail = {
    'quantity' : this.addTocartForm.get('quantity').value,
    'product' : this.ressult._id
  }
   // console.log(this.addTocartForm.value);
    const abc = this.shopping.get_shopping_credentials(this.productdetail);
       abc.subscribe((res:shoppingService[])=>{
      
        
          //alert("Item added to cart");
          this.router.navigate(['buyer/checkout']).then(()=>{
            this.snackBar.open(this.message, this.action,{
              duration: 6000
            });
            
          });
        
  //     this.result = res;
      
  //  })
       
  })
}
  
  

}
