import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CurrencyApiService } from 'src/app/currency-api.service';
import { CalculateComponent } from '../calculate-currency/calculate-currency.component';

@Component({
  selector: 'app-currency-options',
  templateUrl: './currency-options.component.html',
  styleUrls: ['./currency-options.component.css']
})
export class CurrencyOptionsComponent implements OnInit {

  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  basesCurrency: any = ['USD', 'EUR', 'GBP'];
  currencyData: any;
  currencyValues: any[] = [];

  constructor(
    private _currencyApiService: CurrencyApiService,
    public _calculateComponent: CalculateComponent,
  ) { }

  ngOnInit(): void {
    for (let i in this.basesCurrency) {
      this._currencyApiService.baseCurrency = this.basesCurrency[i]
      this._currencyApiService.getCurrency(this.basesCurrency[i]).subscribe(
        (result) => {
          this.currencyData = new Object(result)
          this.currencyValues.push(this.currencyData.rates.BRL)
        });
    }
  }

  getValue(event) {
    this._currencyApiService.base(event);
  }

}
