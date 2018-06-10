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
import { PaginationService } from './shared/handlers/pagination.handler.service';
import { SellersHandlerService } from './shared/handlers/sellers.handler.service';
import { SellerRegistrationHandlerService } from './shared/handlers/seller-registration.handler.service';
import { UserHandlerService } from './shared/handlers/user.handler.service';
/*import { PurchaseService } from './shared/handlers/purchase.handler.service';*/

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
    LayoutHome
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
    GlobalService,
    LoginService,
    LoginModalService,
    Http_Requests,
    ProductHandlerService,
    CartService,
    CatalogHandlerService,
    PaginationService,
    SellersHandlerService,
    SellerRegistrationHandlerService,
    UserHandlerService
    //PurchaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
