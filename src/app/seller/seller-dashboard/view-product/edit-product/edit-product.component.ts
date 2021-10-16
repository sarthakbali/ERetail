import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { editProductService } from 'src/app/services/edit-product.service';
import { categoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { UpdateProductService } from 'src/app/services/update-product.services';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CanComponentDeactivate } from 'src/app/guards/confirmguard.guard';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent implements OnInit, CanComponentDeactivate {
  message="Product Updated Successfully";
  action = "OK";
  res:editProductService[];
  result : UpdateProductService[];
  constructor(private edit_product_Services : editProductService, private route : ActivatedRoute,private router: Router, private update_product: UpdateProductService,private snackBar: MatSnackBar) { }
  
  editProductForm: FormGroup;
  private category: Product;
  
  ngOnInit() {
 
    this.editProductForm = new FormGroup({

        name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        //second_name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        
        //email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        mrp: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
        salePrice: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
        quantity: new FormControl('', [Validators.required]),
        onSale: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
      

        
    });
    let second_id = this.route.snapshot.paramMap.get('id');
    console.log(second_id);
    if(second_id){
    const abc = this.edit_product_Services.edit_product(second_id).pipe(take(1)).
    subscribe((res =>{
      console.log(res);
      this.editProductForm.patchValue(res);
      
    
}))
}
  }
  onclickedit(){
    let second_id = this.route.snapshot.paramMap.get('id');
    console.log(this.editProductForm.value);
    const abc = this.update_product.update_product(second_id , this.editProductForm.value);
    abc.subscribe((res=>{
      console.log(res);
     // alert("Product updated successfully")
       this.router.navigate(['seller/seller-dashboard']).then(()=>{
        this.snackBar.open(this.message, this.action,{
          duration: 5000
        });
        
      });;
  }))

    }
    clearform(){
      //this.editProductForm.reset();
      this.editProductForm.reset();
    }
    confirm(){
      if(this.editProductForm.invalid){
      return confirm("Are You sure you want to navigate");
      }

      return true;
    }
}
