import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LayoutHome } from './home/layout.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

//services
import { LoginService } from './login/login.service';
import { ProductHandlerService } from './shared/handlers/product.handler.service';
import { CatalogHandlerService } from './shared/handlers/catalog.handler.service';
import { GlobalService } from './shared/handlers/global-service.service';
import { Http_Requests } from './shared/http_request.service';
import { CartService } from './shared/handlers/cart.handler.service';

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
    AppRoutingModule,
    SocialLoginModule,
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
    CatalogHandlerService,
    GlobalService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
