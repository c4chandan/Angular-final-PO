import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllProductsComponent } from './view-all-products.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorProductsComponent } from './vendor-products.component';
import { AddProductsComponent } from './add-products.component';

const routes:Routes=[
  {path:'',component:VendorComponent},
  {path:'ViewAllProducts',component:ViewAllProductsComponent},
  {path:'viewVendorProducts',component:VendorProductsComponent},
{path:'addProductQuantity',component:AddProductsComponent}

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
    
})
export class VendorRoutingModule { }
