import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-show-po',
  templateUrl: './show-po.component.html',
  styles: []
})
export class ShowPOComponent implements OnInit {

  constructor(private router:Router,private sellerService:SellerService ) { }

  
  public productArray: any;
  ngOnInit() {

    this.sellerService.viewAllPo().subscribe(data =>
      this.productArray = data
    );

}
}