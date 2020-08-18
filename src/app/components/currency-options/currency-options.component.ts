import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CurrencyApiService } from 'src/app/currency-api.service';

@Component({
  selector: 'app-currency-options',
  templateUrl: './currency-options.component.html',
  styleUrls: ['./currency-options.component.css']
})
export class CurrencyOptionsComponent implements OnInit {

  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  basesCurrency: Array<String> = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];
  currencyValues: Array<String> = [];
  currencyData: any;

  constructor(
    private _currencyApiService: CurrencyApiService,
  ) { }

  ngOnInit(): void {
    for (let i in this.basesCurrency) {
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
