import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { CurrencyApiService } from '../../currency-api.service';

@Component({
  selector: 'app-calculate-currency',
  templateUrl: './calculate-currency.component.html',
  styleUrls: ['./calculate-currency.component.css']
})

export class CalculadoraComponent implements OnInit {

  constructor(private api: CurrencyApiService) { }

  valueInput: number;
  valueInputReverse: number;
  result: number;
  resultReverse: number;
  valueCurrency: number;
  initials: string = "$:";
  guardaData: any;
  bases = ['GBP', 'USD', 'EUR'];
  valores = []

  ngOnInit() {
    for (let i in this.bases) {
      this.api.base = this.bases[i]
      this.api.getCurrency().subscribe(
        (resp) => {
          this.guardaData = new Object(resp)
          this.valores.push(this.guardaData.rates.BRL)
        });
    }
  }
  saveValue(event) {
    this.valueInput = Number(event.target.value);
    this.result = this.valueInput * this.valueCurrency;
  }

  saveValueReverse(event) {
    this.valueInputReverse = Number(event.target.value);
    this.resultReverse = this.valueInputReverse / this.valueCurrency;
  }

  calcula(event) {
    let eventTitle = event.target.title;
    this.api.base = eventTitle
    this.api.getCurrency().subscribe(
      (resposta) => {
        this.guardaData = new Object(resposta)
        this.valueCurrency = this.guardaData.rates.BRL;
        this.result = 1;
        this.resultReverse = this.valueCurrency;
      }
    )
    switch (eventTitle) {
      case 'USD': this.initials = "USD";
        break;
      case 'EUR': this.initials = "EUR";
        break;
      case 'GBP': this.initials = "GBP";
        break;
    }
  }

  // btnLibra(event) {
  //   this.initials = "TRY:";
  //   this.api.getCurrency(event.target.title).subscribe(
  //     (resposta) => {
  //       this.guardaData = new Object(resposta)
  //       this.valueCurrency = this.guardaData.rates.BRL;
  //       this.result = 1;
  //       this.resultReverse = this.valueCurrency;
  //       // this.result = this.valueInput * this.valueCurrency;
  //       // this.result1 = this.valueInput1 / this.valueCurrency;
  //     });
  // }

  // btnDolar(event) {
  //   this.initials = "USD:";
  //   this.api.getCurrency(event.target.title).subscribe(
  //     (resposta) => {
  //       this.guardaData = new Object(resposta)
  //       this.valueCurrency = this.guardaData.rates.BRL    
  //       this.result = 1;
  //       this.resultReverse = this.valueCurrency;
  //       // this.result = this.valueInput * this.valueCurrency;  
  //       // this.result1 = this.valueInput1 / this.valueCurrency;
  //     });
  // }

  // btnEuro(event) {
  //   this.initials = "EUR:";
  //   this.api.getCurrency(event.target.title).subscribe(
  //     (resposta) => {
  //       this.guardaData = new Object(resposta)
  //       this.valueCurrency = this.guardaData.rates.BRL
  //       this.result = 1;
  //       this.resultReverse = this.valueCurrency;
  //       // this.result = this.valueInput * this.valueCurrency;
  //       // this.result1 = this.valueInput1 / this.valueCurrency;
  //     });
  // }

  // btnYen(event) {
  //   this.initials = "JPY:";
  //   this.api.getCurrency(event.target.title).subscribe(
  //     (resposta) => {
  //       this.guardaData = new Object(resposta)
  //       this.valueCurrency = this.guardaData.rates.BRL
  //       this.result = 1;
  //       this.resultReverse = this.valueCurrency;
  //       // this.result = this.valueInput * this.valueCurrency;
  //       // this.result1 = this.valueInput1 / this.valueCurrency;
  //     });
  // }

}