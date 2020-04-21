import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import {  HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './line-chart/line-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
