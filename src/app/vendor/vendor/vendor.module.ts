import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllProductsComponent } from '../view-all-products.component';
import { VendorComponent } from './vendor.component';
import { VendorRoutingModule } from '../vendor-routing.module';
import { VendorService } from '../vendor.service';
import { FormsModule } from '@angular/forms';
import { AddProductsComponent } from '../add-products.component';
import { VendorProductsComponent } from '../vendor-products.component';



@NgModule({
  declarations: [ViewAllProductsComponent,VendorComponent,AddProductsComponent,VendorProductsComponent],
  imports: [
    CommonModule,VendorRoutingModule,FormsModule
  ],
  
  exports: [VendorComponent
  ],
  
  providers:[VendorService]
})
export class VendorModule { }
