import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MatDialogModule, MatDialogRef } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

//services
import { LoginService } from './login/login.service';
import { ProductHandlerService } from './shared/handlers/product.handler.service';
//import { FilterTextCatalogPipe } from './shared/pipes/filter-text-catalog.pipe';
import { CatalogHandlerService } from './shared/handlers/catalog.handler.service';
import { Http_Requests } from './shared/http_request.service';

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
    routingComponents/*,
    FilterTextCatalogPipe*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    MatDialogModule,
    NoopAnimationsModule,
    HttpModule
  ],
  providers: [
    {
      provide : AuthServiceConfig,
      useFactory : provideConfig
    },
    LoginService,
    Http_Requests,
    ProductHandlerService,
    CatalogHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
