import { Component, OnInit } from '@angular/core';
import { product_Service } from 'src/app/services/products.services';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {

  public flag:boolean = false;
  public res: product_Service[];
  constructor(private product_Services : product_Service, private router: Router , private data: DataService) { }

  ngOnInit(){
    const obs = this.product_Services.get_products();
    obs.subscribe((res:product_Service[])=>{
     //console.log(res);
      this.res = res;
  })
  


}
  getshoppingid(result:any){
    
   // console.log(result);
    this.data.changeMessage(result);
      this.router.navigate(['buyer/start-shopping'],result);
    }
    toggle(){
      this.flag = ! this.flag;
    }
  }


