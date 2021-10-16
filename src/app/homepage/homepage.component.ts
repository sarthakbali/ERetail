import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { product_Service } from '../services/products.services';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {

   res: any;
  constructor(private product_Services : product_Service) { }

  ngOnInit(){
     this.res= this.product_Services.get_products();
  //   obs.subscribe((res:product_Service[])=>{
  //    //console.log(res);
  //     this.res = res;
  // })


}
}
