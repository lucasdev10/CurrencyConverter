import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateComponent } from './components/calculate-currency/calculate-currency.component';
import { HttpClientModule } from '@angular/common/http';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { CurrencyOptionsComponent } from './components/currency-options/currency-options.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculateComponent,
    LineChartComponent,
    CurrencyOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CalculateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
