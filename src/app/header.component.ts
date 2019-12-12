import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private location: LocationStrategy) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }
  logValue: boolean;
  loggedUser: string;
  reload: boolean = true;

  user: any = undefined;
  ngOnInit() {

    var obj = JSON.parse(sessionStorage.getItem("userObj"));
    this.user = obj;
    console.log(obj);
    if (obj === null) {
      this.logValue = false;
    }
    else {
      this.logValue = true;
      if (obj.role == 'Buyer') {
        this.loggedUser = 'buyer';
      }
      else if (obj.role == 'Seller') {
        this.loggedUser = 'seller';
      }
      else if (obj.role == 'Vendor') {
        this.loggedUser = 'vendor';
      }
    }
  }
  logout() {
    this.logValue = false;
    this.loggedUser = undefined;
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }


}