//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule, routingComponents } from './home-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentComponent } from './shopping-cart/payment/payment.component';
import { ProductComponent } from './catalog/product/product.component';
import { LoginService } from '../login/login.service';
import {FormsModule} from "@angular/forms";
import { FilterDataPipe } from '../shared/pipes/filter-data.pipe';
import { FilterByCategoryPipe } from '../shared/pipes/filter-by-category.pipe';
import { FilterBySellerPipe } from '../shared/pipes/filter-by-seller.pipe';
import { FilterByBrandPipe } from '../shared/pipes/filter-by-brand.pipe';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MyProductsComponent } from './my-products/my-products.component';


@NgModule({
  declarations: [
    routingComponents,
    CatalogComponent,
    ShoppingCartComponent,
    PaymentComponent,
    ProductComponent,
    FilterDataPipe,
    FilterByBrandPipe,
    FilterByCategoryPipe,
    FilterBySellerPipe,
    SellerRegistrationComponent,
    PaginationComponent,
    MyProductsComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    LoginService,
    FilterDataPipe,
    FilterByBrandPipe,
    FilterByCategoryPipe,
    FilterBySellerPipe
  ]
})
export class HomeModule { }
