//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule, routingComponents } from './home-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentComponent } from './shopping-cart/payment/payment.component';
import { ProductComponent } from './catalog/product/product.component';
import { LoginService } from '../login/login.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterDataPipe } from '../shared/pipes/filter-data.pipe';
import { FilterByCategoryPipe } from '../shared/pipes/filter-by-category.pipe';
import { FilterBySellerPipe } from '../shared/pipes/filter-by-seller.pipe';
import { FilterByBrandPipe } from '../shared/pipes/filter-by-brand.pipe';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { AddProductComponent } from './my-products/add-product/add-product.component';
import { AddProductService } from './my-products/add-product/add-product.service';
import { EditProductService } from './my-products/edit-product/edit-product.service';
//Angular Material
import {
  MatButtonModule, 
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { EditProductComponent } from './my-products/edit-product/edit-product.component';


@NgModule({
  declarations: [
    routingComponents,
    CatalogComponent,
    ShoppingCartComponent,
    PaymentComponent,
    ProductComponent,
    FilterDataPipe,
    SellerRegistrationComponent,
    PaginationComponent,
    MyProductsComponent,
    AddProductComponent,
    EditProductComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    LoginService,
    FilterDataPipe,
    FilterByBrandPipe,
    FilterByCategoryPipe,
    FilterBySellerPipe,
    AddProductService,
    EditProductService
  ],
  entryComponents: [
    AddProductComponent
  ]
})
export class HomeModule { }
