import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private http: HttpClient) { }
  public messageSource = new BehaviorSubject(null);

  getmessage(){
    return this.messageSource.asObservable();
  }
 

  changeMessage(message: Observable<Product>) {
    this.messageSource.next(message)
  }

}



// import { HttpClient } from '@angular/common/http';

// import { Product } from '../models/product.model';
// import { Observable } from 'rxjs';
// //import { Product } from '../models/product.model';
// @Injectable({ providedIn: 'root' })
// export class editProductService{
//     constructor(private http: HttpClient) { }

    
   
//      private myMessage = this.http.get(`http://localhost:3000/product/all`);




// getMessage(): Observable<string&gt; {
//     return this.myMessage.asObservable();
//  }
//  updateMessage(message: string) {
//     this.myMessage.next(message);
//   }
// }