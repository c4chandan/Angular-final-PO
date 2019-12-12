import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BuyerComponent } from './buyer/buyer.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
import { SellerComponent } from './seller/seller/seller.component';
// import { RaisePOComponent } from './buyer/raise-po/raise-po.component';



const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'buyerPage',component:BuyerComponent},
     {path:'sellerPage',component:SellerComponent},
    // {path:'raisepo',component:RaisePOComponent}
    {path:'pageNotFound',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents=[
//   LoginComponent
//  ]