import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styles: []
})
export class VendorProductsComponent implements OnInit {

  public vendorProducts:any;

  constructor(private vendorService:VendorService) { }
  public productArray: any;
  ngOnInit(): void {
    this.vendorService.getAllProducts().subscribe(data =>
      this.productArray = data
    );

  //   this.vs.viewAllVendorProducts(vendorId).subscribe(data =>
  //     {this.vendorProducts = data;
  //     console.log(this.vendorProducts);})
  // }

}
}