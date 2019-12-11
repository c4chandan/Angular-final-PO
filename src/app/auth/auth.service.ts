import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  addUser(uObj: any): Observable<any> {
    console.log(uObj);
    return this.http.post<any>("http://localhost:1234/purchaseOrderFrontend/user", uObj, { responseType: 'text' as 'json' });
  }


  validateUser(userEmail: any, userPass: any): Observable<any> {
    return this.http.post<any>("http://localhost:1234/purchaseOrderFrontend/userValidate?userEmail="
      + userEmail + "&&userPass=" + userPass, null);
  }
}