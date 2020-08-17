import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { CurrencyApiService } from '../../currency-api.service';

@Component({
  selector: 'app-calculate-currency',
  templateUrl: './calculate-currency.component.html',
  styleUrls: ['./calculate-currency.component.css']
})

export class CalculateComponent implements OnInit {

  currencyData: any;
  values: any = [];
  valueInput: number;
  valueInputReverse: number;
  result: number;
  resultReverse: number;
  valueCurrency: number;
  initials: string = "$:";

  constructor(
    private _currencyApiService: CurrencyApiService,
  ) { 
    this._currencyApiService.listen().subscribe((base: any) => {
      this.calcula(base);
    })
  }

  ngOnInit() { }

  saveValue(event) {
    this.valueInput = Number(event.target.value);
    this.result = this.valueInput * this.valueCurrency;
  }

  saveValueReverse(event) {
    this.valueInputReverse = Number(event.target.value);
    this.resultReverse = this.valueInputReverse / this.valueCurrency;
  }

  calcula(event) {

    this._currencyApiService.getCurrency(event).subscribe(resposta => {
      this.currencyData = new Object(resposta)
      this.valueCurrency = this.currencyData.rates.BRL;
      this.result = 1;
      this.resultReverse = this.valueCurrency;
    })

    switch (event) {
      case 'USD': this.initials = "USD";
        break;
      case 'EUR': this.initials = "EUR";
        break;
      case 'GBP': this.initials = "GBP";
        break;
    }
  }

}