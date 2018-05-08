//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule, routingComponents } from './home-routing.module';


@NgModule({
  declarations: [
    routingComponents,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
  providers: []
})
export class HomeModule { }
