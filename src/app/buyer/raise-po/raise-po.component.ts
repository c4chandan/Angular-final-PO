import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Product } from 'src/models/Product';


import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-raise-po',
  templateUrl: './raise-po.component.html',
  styleUrls: ['./raise-po.component.css']
})
export class RaisePOComponent implements OnInit {
  public pro: number;
  public quantity: number;

  constructor(private buyerService: BuyerService) { }
  public productArray: any;
  ngOnInit() {

    this.buyerService.getAllProducts().subscribe(data =>
      this.productArray = data
    );
  }
  fetchProductName(pId: number) {
    for (let product of this.productArray) {
      if (product.productId == pId) {
        return product.productName;
      }
    }
  }
  productsArrToDisplay: Product[] = [];
  onAdd() {
    let obj = new Product();
    obj.isSelected = false;
    obj.productId = this.pro;
    obj.productName = this.fetchProductName(this.pro);
    obj.quantity = this.quantity;
    this.productsArrToDisplay.push(obj);
  }
  deleteRow() {
    this.productsArrToDisplay = this.productsArrToDisplay.filter(item => item.isSelected! === false);
  }

  RaisePo() {
    let obj = JSON.parse(sessionStorage.getItem("uObj"));
    console.log(obj);
    let uId = obj.userId;
    console.log(uId);
    console.log(this.productsArrToDisplay + " " + uId);
    this.buyerService.raisePoForm(this.productsArrToDisplay, uId).
      subscribe(data => console.log("Value Added" + this.productsArrToDisplay));

  }
}
