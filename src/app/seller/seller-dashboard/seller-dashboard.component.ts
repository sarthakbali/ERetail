import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { product_Service } from 'src/app/services/products.services';
import { viewProduct_Service } from 'src/app/services/view-product.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  
  public result: any;
  public xyz:any;
  data:any = {
    first_name: "Sarthakss", second_name: "Bali", age: 24, city: "Phagwara"
  };
  constructor(private product_Services : viewProduct_Service) { }

  ngOnInit(){
    const obs = this.product_Services.view_products();
    obs.subscribe(res=>{
     console.log(res);
      this.result = res;

      let counter = 0;
      for(let i of this.result){
        if(i.onSale){
          counter++
      }
       this.xyz = counter;
    }
  })
  //console.log(this.data);
  of(this.data).subscribe(
    next => console.log('next:', next),
  err => console.log('error:', err),
  () => console.log('the end'),
  );
  for(let key in this.data){
    console.log("key is: " +key+ "and value is: " +this.data[key]);
  }
 
  //console.log(this.data.first_name);
}

}