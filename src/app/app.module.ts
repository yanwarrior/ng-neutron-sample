import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgNeutronModule } from 'ng-neutron';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgNeutronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
