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
import { VendorComponent } from './vendor/vendor/vendor.component';
import { LogoutComponent } from './logout/logout.component';
import { SellerModule } from './seller/seller.module';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,BannerComponent,FooterComponent, PageNotFoundComponent, VendorComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,BuyerModule,   FormsModule,SellerModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
