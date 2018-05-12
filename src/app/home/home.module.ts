//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule, routingComponents } from './home-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SellersListComponent } from './admin/sellers-list/sellers-list.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { PaymentComponent } from './shopping-cart/payment/payment.component';


@NgModule({
  declarations: [
    routingComponents,
    CatalogComponent,
    ShoppingCartComponent,
    SellersListComponent,
    RequestsComponent,
    PaymentComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
  providers: []
})
export class HomeModule { }
