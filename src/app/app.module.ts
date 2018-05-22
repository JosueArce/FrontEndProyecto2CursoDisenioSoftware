import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LayoutHome } from './home/layout.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

//Angular Material
import { 
  MatDialogModule,  
  MatListModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
} from "@angular/material";

//services
import { LoginService } from './login/login.service';
import { LoginModalService } from './login/loginModal.service';
import { ProductHandlerService } from './shared/handlers/product.handler.service';
import { CatalogHandlerService } from './shared/handlers/catalog.handler.service';
import { GlobalService } from './shared/handlers/global-service.service';
import { Http_Requests } from './shared/http_request.service';
import { CartService } from './shared/handlers/cart.handler.service';

//pipes
import { FilterByBrandPipe } from './shared/pipes/filter-by-brand.pipe';
import { FilterByCategoryPipe } from './shared/pipes/filter-by-category.pipe';
import { FilterBySellerPipe } from './shared/pipes/filter-by-seller.pipe';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("219621475146-1rdgrkmkmhqe1gtih5g5p3lfe82ohfsm.apps.googleusercontent.com",{scope:'profile email'})
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LayoutHome,
    FilterByBrandPipe,
    FilterByCategoryPipe,
    FilterBySellerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpModule,
    MatDialogModule,  
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    NoopAnimationsModule
  ],
  providers: [
    {
      provide : AuthServiceConfig,
      useFactory : provideConfig
    },
    LoginService,
    LoginModalService,
    Http_Requests,
    ProductHandlerService,
    CatalogHandlerService,
    GlobalService,
    CartService,
    FilterByBrandPipe,
    FilterByCategoryPipe,
    FilterBySellerPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
