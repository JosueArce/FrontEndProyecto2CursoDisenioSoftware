//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule, routingComponents } from './home-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentComponent } from './shopping-cart/payment/payment.component';
import { ProductComponent } from './catalog/product/product.component';
import { LoginService } from '../login/login.service';
import {FormsModule, ReactiveFormsModule,FormBuilder, FormGroup, Validators} from "@angular/forms";
import { FilterDataPipe } from '../shared/pipes/filter-data.pipe';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { AddProductComponent } from './my-products/add-product/add-product.component';
import { AddProductService } from './my-products/add-product/add-product.service';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileSelectDirective } from 'ng2-file-upload';
import { EditProductComponent } from './my-products/edit-product/edit-product.component';
import { EditProductService } from './my-products/edit-product/edit-product.service';
import { AdministrateHandlerService } from '../shared/handlers/administrate.handler.service';
import { DeleteProductComponent } from './my-products/delete-product/delete-product.component';
import { DeleteProductService } from './my-products/delete-product/delete-product.service';

//Angular Material
import {
  MatButtonModule, 
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule
} from '@angular/material';




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
    FileSelectDirective,
    EditProductComponent,
    DeleteProductComponent
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
    MatSelectModule,
    Ng2CloudinaryModule,
    MatDividerModule
  ],
  providers: [
    LoginService,
    FilterDataPipe,
    AddProductService,
    EditProductService,
    AdministrateHandlerService,
    DeleteProductService
  ],
  entryComponents: [
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ]
})
export class HomeModule { }
