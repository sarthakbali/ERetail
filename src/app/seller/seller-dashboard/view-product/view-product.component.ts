import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef ,ViewChild} from '@angular/core';
import { viewProduct_Service } from 'src/app/services/view-product.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Sort} from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, AbstractControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { deleteProductService } from 'src/app/services/delete-product.service';
export interface Product {
    name: String;
    description: String;
    mrp: number;
    salePrice : String;
    quantity: number;
    onSale: boolean;
    category: String;
}
  
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewProductComponent implements OnInit {
  message ="Product deleted successfully";
  action= "OK";
  public res: viewProduct_Service[];
  public product_id:string[] = []; 
  items: Product[];
  displayedColumns:string[]=['name','quantity','mrp','salePrice','onSale','actions'];
  dataSource=new MatTableDataSource<Product>(this.items);
  readonly formControl: AbstractControl;
  constructor(formBuilder: FormBuilder,private view_product_Services : viewProduct_Service , private router: Router,private http: HttpClient,private cd:ChangeDetectorRef,private snack:MatSnackBar, private del:deleteProductService) {
     
    this.dataSource.filterPredicate = ((data, filter) => {
      const a = !filter.name || data.name.toLowerCase().includes(filter.name);
      const b = !filter.quantity ||  data.quantity.toString().includes(filter.quantity);
      const c = !filter.mrp ||  data.mrp.toString().includes(filter.mrp);
      const d = !filter.salePrice ||  data.salePrice.toString().includes(filter.salePrice);
      
      const e = !filter.onSale || data.onSale.toString().includes(filter.onSale);
       
      
      return a && b && c && d && e;
    }) as (Product, string) => boolean;

    this.formControl = formBuilder.group({
      name: '',
      quantity: '',
      mrp: '',
      salePrice: '',
      onSale:'',
    })
    this.formControl.valueChanges.subscribe(value => {
      const filter = {...value, name: value.name.trim().toLowerCase()} as string;
      this.dataSource.filter = filter;
    });
    }
  
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    const obs = this.view_product_Services.view_products();
    obs.subscribe((res)=>{
   console.log(res);
   this.dataSource.data=res as Product[]
   
      //this.cd.markForCheck;
      
  });
  this.dataSource.sort = this.sort;
}

// applyFilter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSource.filter = filterValue.trim().toLowerCase();
// }
edit_button(product_id : number){
  this.router.navigate(['/seller/edit-product',product_id]);
}








delete_button(id){
  this.product_id.push(id);
 
  const options = {
    headers : new HttpHeaders({
      'content-type': 'application/json',
  }),
    body:
    this.product_id
  }
  if(window.confirm("Are you sure you want to delete")){
    console.log("product_id" +JSON.stringify(this.product_id))
    // return this.http.delete(`http://localhost:3000/product`, options).subscribe(res=>{
      return this.del.delete_product(options).subscribe(res=>{
      this.router.navigate(['/seller/seller-dashboard']).then(()=>{
        this.snack.open(this.message, this.action,{
          duration: 5000
        });
        
      });
      

      console.log(res);
    })
  }
  
}

  
}
// private getSortedData(data: viewProduct_Service[]) {
//   if (!this.sort.active || this.sort.direction === '') {
//     return data;
//   }

//   return data.sort((a, b) => {
//     const isAsc = this.sort.direction === 'asc';
//     switch (this.sort.active) {
//       case 'name': return compare(a.name, b.name, isAsc);
//       case 'id': return compare(+a.id, +b.id, isAsc);
//       default: return 0;
//     }
//   });
//   function compare(a, b, isAsc) {
//     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
//   }
// }

//access_token---eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhcnRoYWtAYmFsaS5jb20iLCJzdWIiOiI1ZWJiOWI4M2ZhYmJhODIwZDRmNDE0YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1ODk0NjMzMDAsImV4cCI6MTU5MDA2ODEwMH0.-j9fZPpcpATcxa5ItpRc_q04J5BnImlEDixFZGzLeek