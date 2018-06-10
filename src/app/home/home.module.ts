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
import { PaginationComponent } from './shared/pagination-catalog/pagination.component';
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
import { PurchaseService } from '../shared/handlers/purchase.handler.service';

//Angular Material
import { 
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatTableDataSource
} from "@angular/material";

import {MatNativeDateModule, MatRippleModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { PaginationAdminRequestsComponent } from './shared/pagination-admin-requests/pagination-admin-requests.component';
import { PaginationAdminSellersComponent } from './shared/pagination-admin-sellers/pagination-admin-sellers.component';
import { PaginationMyProductsSellerComponent } from './shared/pagination-my-products-seller/pagination-my-products-seller.component';
import { CategoryRegistrationComponent } from './category-registration/category-registration.component';
import { PurchasesComponent } from './purchases/purchases.component';



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
    DeleteProductComponent,
    PaginationAdminRequestsComponent,
    PaginationAdminSellersComponent,
    PaginationMyProductsSellerComponent,
    CategoryRegistrationComponent,
    PurchasesComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    CdkTableModule,
    A11yModule,
    BidiModule,
    CdkAccordionModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule
  ],
  providers: [
    LoginService,
    FilterDataPipe,
    AddProductService,
    EditProductService,
    AdministrateHandlerService,
    DeleteProductService,
    PurchaseService
  ],
  entryComponents: [
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ]
})
export class HomeModule { }
