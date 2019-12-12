import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShowPOComponent } from './show-po.component';

const routes: Routes = [
  {path:'showPo',component:ShowPOComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class SellerRoutingModule { }
