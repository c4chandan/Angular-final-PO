import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { RaisePOComponent } from './raise-po/raise-po.component';
import { BuyerService } from './buyer.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BuyerComponent, RaisePOComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule
  ],
  exports: [
    BuyerComponent
  ],
  providers:[BuyerService]
})
export class BuyerModule { }
