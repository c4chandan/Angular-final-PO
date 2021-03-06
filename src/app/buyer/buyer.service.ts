import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }
  url="http://localhost:1234/purchaseOrderFrontend/viewAllProducts";

getAllProducts():Observable<any>
{
  return this.http.get(this.url);
}

raisePoForm(poArr:any,uId:number)

{
  return this.http.post<any>("http://localhost:1234/purchaseOrderFrontend/raisePurchaseOrder/"+uId,poArr);

}
}




