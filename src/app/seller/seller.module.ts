import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller/seller.component';
import { BuyerService } from '../buyer/buyer.service';
import { ShowPOComponent } from './show-po.component';
import { SellerRoutingModule } from './seller-routing.module';



@NgModule({
  declarations: [ShowPOComponent,SellerComponent],
  imports: [
    CommonModule,
    SellerRoutingModule
    
  
    
  ],
  exports: [
    SellerComponent
  ],
  
  providers:[BuyerService]
})
export class SellerModule { }
