import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';
import { Product } from 'src/models/Product';
import { POItems } from './POItems';

@Component({
  selector: 'app-show-po',
  templateUrl: './show-po.component.html',
  styles: []
})
export class ShowPOComponent implements OnInit {

  constructor(private router:Router,private sellerService:SellerService ) { }

  
  public productArray: any;
  ngOnInit() {

    this.sellerService.viewAllPo().subscribe(data =>{
      this.productArray = data;
    }
    );

}

itemArr:POItems[]=[];
show:boolean=false;

viewPOItems(poId:number){
  this.itemArr=[];
  for(let obj of this.productArray){
      if(obj.purchaseOrderId===poId){
       
       
        for(let itemObj of obj.purchaseOrderItemsObj){
          this.itemArr.push(new POItems(itemObj.productObj.productId,itemObj.productObj.productName,itemObj.quantity));
        }
      }
  }
  this.show=true;
}
}