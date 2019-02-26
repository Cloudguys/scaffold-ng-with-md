import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {
  BootstrapComponent,
  SharedModule,
} from './shared';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [BootstrapComponent]
})
export class AppModule { }
