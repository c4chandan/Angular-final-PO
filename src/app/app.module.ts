import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { BannerComponent } from './banner.component';
import { FooterComponent } from './footer.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { BuyerModule } from './buyer/buyer.module';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { SellerModule } from './seller/seller.module';
import { ViewAllProductsComponent } from './vendor/view-all-products.component';
import { VendorModule } from './vendor/vendor/vendor.module';
import { VendorProductsComponent } from './vendor/vendor-products.component';
import { AddProductsComponent } from './vendor/add-products.component';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,BannerComponent,FooterComponent, PageNotFoundComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,BuyerModule,   FormsModule,SellerModule,VendorModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
