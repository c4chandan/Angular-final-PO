import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller/seller.component';
import { BuyerService } from '../buyer/buyer.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SellerComponent
  ],
  
  providers:[BuyerService]
})
export class SellerModule { }
