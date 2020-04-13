import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
//teste
export class CalculadoraComponent implements OnInit {

  constructor(private api: ApiService) { }

  public cot = [];
  valueInput: number;
  valueInput1: number;
  result:number;
  result1:number;
  valueCurrency: number;
  initials: string = "$:";
  guardaData: any;
  euro:string = "EUR"
  dolar:string = "USD"
  libra:string = "TRY"
  yen:string ="JPY";


  saveValue(event) {
    this.valueInput = Number(event.target.value);
    this.result = this.valueInput * this.valueCurrency;
  }

  saveValue1(event) {
    this.valueInput1 = Number(event.target.value);
    this.result1 =  this.valueInput1 / this.valueCurrency ;
  }

  btnLibra(event) {
    this.initials = "TRY:";
    this.api.getCurrency(this.libra).subscribe(
      (resposta) => {
        this.guardaData = new Object(resposta)
        this.valueCurrency = this.guardaData.rates.BRL;
        this.result = 0;
        this.result1 = 0;
        // this.result = this.valueInput * this.valueCurrency;
        // this.result1 = this.valueInput1 / this.valueCurrency;
      });
  }

  btnDolar(event) {
    this.initials = "USD:";
    this.api.getCurrency(this.dolar).subscribe(
      (resposta) => {
        this.guardaData = new Object(resposta)
        this.valueCurrency = this.guardaData.rates.BRL    
        this.result = 0;
        this.result1 = 0;
        // this.result = this.valueInput * this.valueCurrency;  
        // this.result1 = this.valueInput1 / this.valueCurrency;
      });
  }

  btnEuro(event) {
    this.initials = "EUR:";
    this.api.getCurrency(this.euro).subscribe(
      (resposta) => {
        this.guardaData = new Object(resposta)
        this.valueCurrency = this.guardaData.rates.BRL
        this.result = 0;
        this.result1 = 0;
        // this.result = this.valueInput * this.valueCurrency;
        // this.result1 = this.valueInput1 / this.valueCurrency;
      });
  }

  btnYen(event) {
    this.initials = "JPY:";
    this.api.getCurrency(this.yen).subscribe(
      (resposta) => {
        this.guardaData = new Object(resposta)
        this.valueCurrency = this.guardaData.rates.BRL
        this.result = 0;
        this.result1 = 0;
        // this.result = this.valueInput * this.valueCurrency;
        // this.result1 = this.valueInput1 / this.valueCurrency;
      });
  }

  ngOnInit() {
    // this.api.getCurrency().subscribe((currency: any) => {
    //   this.cot = Array.from(Object.keys(currency), k => currency[k]);
    // });

  }
}