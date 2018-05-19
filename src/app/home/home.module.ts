//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule, routingComponents } from './home-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SellersListComponent } from './admin/sellers-list/sellers-list.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { PaymentComponent } from './shopping-cart/payment/payment.component';
import { ProductComponent } from './catalog/product/product.component';
import { LoginService } from '../login/login.service';
import {FormsModule} from "@angular/forms";
import { FilterDataPipe } from '../shared/pipes/filter-data.pipe';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';



@NgModule({
  declarations: [
    routingComponents,
    CatalogComponent,
    ShoppingCartComponent,
    SellersListComponent,
    RequestsComponent,
    PaymentComponent,
    ProductComponent,
    FilterDataPipe,
    SellerRegistrationComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    LoginService,
    FilterDataPipe
  ]
})
export class HomeModule { }
