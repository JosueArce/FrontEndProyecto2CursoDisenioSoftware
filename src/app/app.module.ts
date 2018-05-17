import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LayoutHome } from './home/layout.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { LoginService } from './login/login.service';

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
    SocialLoginModule
  ],
  providers: [
    {
      provide : AuthServiceConfig,
      useFactory : provideConfig
    },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
