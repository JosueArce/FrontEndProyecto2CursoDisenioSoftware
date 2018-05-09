import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LayoutHome } from './home/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LayoutHome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
