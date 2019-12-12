import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  constructor(private http:HttpClient) { }
  url="http://localhost:1234/purchaseOrderFrontend/viewAllProducts";

getAllProducts():Observable<any>
{
  return this.http.get(this.url);
}

  // addQuantity(productId:number,quantity:number,vendorId:number):Observable<any>{
  //   return this.http.get<any>("http://localhost:1234/purchaseOrderFrontend/"+'updateProductQuantity?productId='+productId
  //   +"&&quantity="+quantity+"&&vendorId="+vendorId,{responseType:'text' as 'json'});
  // }

  // viewAllVendorProducts(vendorId:number):Observable<Product[]> {
  //   return this.http.get<Product[]>("http://localhost:1234/purchaseOrderFrontend/viewAllAvailableProducts?vendorId="+vendorId);
  // }
}