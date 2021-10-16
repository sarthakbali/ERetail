import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { addProductService } from 'src/app/services/add-product.service';
import { categoryService } from 'src/app/services/category.service';
import { Route, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CanComponentDeactivate } from 'src/app/guards/confirmguard.guard';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit, CanComponentDeactivate {
  message="Product Added successfully";
  action="OK";
  public res: addProductService[];
  public result : categoryService[];
  product :FormArray;
  constructor(private add_product_services :addProductService, private category_product : categoryService, private router: Router,private cd: ChangeDetectorRef,private snackBar: MatSnackBar){
  }
  
  addProductForm: FormGroup;
 
    ngOnInit() {
 
        this.addProductForm = new FormGroup({

            name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            //second_name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            description: new FormArray([new FormControl('', [Validators.required, Validators.minLength(4)])]),
            //email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            mrp: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
            salePrice: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
            quantity: new FormControl('', [Validators.required]),
            onSale: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
            category: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
            
        });
        const obser = this.category_product.category_products();
       obser.subscribe((result:categoryService[])=>{
       //console.log(result);
         this.result = result;
      })
    }
    addFormArray(){
      this.product = this.addProductForm.get('description') as FormArray;
      this.product.push(new FormControl('', [Validators.required, Validators.minLength(4)]))
    }
    showFormArray(){
      console.log(this.addProductForm.value);
    }
    deleteNameField(index: number) {
      if (this.product.length !== 1) { 
        this.product.removeAt(index); 
      }
}
    clearFormArray() {
        this.product.reset();
      }
      
      
    addProduct() {
        console.log(this.addProductForm.value);
        const abc = this.add_product_services.get_product(this.addProductForm.value)
        abc.subscribe((res:addProductService[])=>{
          console.log(res);
           this.res = res;
           //this.cd.markForCheck;
          // alert("Product added successfully");
           this.router.navigate(['seller/seller-dashboard']).then(()=>{
            this.snackBar.open(this.message, this.action,{
              duration: 3000
            });
            
          });
           
       })
       

}
  confirm(){
    
   if(this.addProductForm.invalid && this.addProductForm.dirty)
   { 
   return confirm("Are You sure you want to navigate");
   }

   return true;
  }
}
