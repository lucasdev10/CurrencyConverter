import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './components/calculate-currency/calculadora.component';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { CurrencyOptionsComponent } from './components/currency-options/currency-options.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    LineChartComponent,
    CurrencyOptionsComponent
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
