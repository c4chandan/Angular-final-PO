import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  url="http://localhost:1234/purchaseOrderFrontend/viewAllPo";

viewAllPo():Observable<any>
{
  return this.http.get(this.url);
}

}