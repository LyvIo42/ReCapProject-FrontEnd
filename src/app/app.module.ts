import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './compenent/brand/brand.component';
import { CarComponent } from './compenent/car/car.component';
import { ColorComponent } from './compenent/color/color.component';
import { CustomerComponent } from './compenent/customer/customer.component';
import { NaviComponent } from './compenent/navi/navi.component';
import { RentalComponent } from './compenent/rental/rental.component';
import {  HttpClientModule } from '@angular/common/http';
import { CardetailComponent } from './compenent/cardetail/cardetail.component';
import { CarimageComponent } from './compenent/carimage/carimage.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent,
    CardetailComponent,
    CarimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
