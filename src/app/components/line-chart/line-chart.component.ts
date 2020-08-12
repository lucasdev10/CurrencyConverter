import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CurrencyApiService } from '../../currency-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  historicalGuard: any;
  historicValueOne: any = [];
  historicValueTwo: any = [];
  historicValueThree: any = [];
  historicValueFour: any = [];

  bases = ['USD', 'GBP', 'EUR'];

  constructor(private _apiService: CurrencyApiService) {

  }

  ngOnInit() {



    this.chart();
    this.getHistoricValues();

  }

  @ViewChild("meuCanvas", { static: true }) elemento: ElementRef;

  graphic(baseCurrency, historicValue) {
    for (let j = 0; j <= 3; j++) {
      this._apiService.baseApi = baseCurrency;
      for (let i = 0; i < 6; i++) {

        let d = new Date(),
          month = '' + (d.getMonth()),
          day = '' + (d.getDate() - i),
          year = d.getFullYear();

        if (month.length < 2) {
          month = '0' + month;
        }
        if (day.length < 2) {
          day = '0' + day;
        }
        this._apiService.dates = [year, month, day].join('-')
        this._apiService.getCurrencyHistoric().subscribe((resposta) => {
          this.historicalGuard = resposta;
          historicValue.reverse()[i] = this.historicalGuard.rates.BRL;
        })
      }
    }
  }

  getHistoricValues() {
    this.graphic("USD", this.historicValueOne);
    this.graphic("GBP", this.historicValueTwo);
    this.graphic("EUR", this.historicValueThree);
  }

  chart() {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ["dia 1", "dia 2", "dia 3", "dia 4", "dia 5", "dia 6"],
        datasets: [
          {
            label: 'Dólar',
            data: this.historicValueOne,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(71, 69, 66)',
            borderWidth: 5,
          }, {
            label: 'Euro',
            data: this.historicValueTwo,
            borderColor: 'rgb(13, 16, 212)',
            backgroundColor: 'rgb(52, 44, 121)',
            borderWidth: 5,
          },
          {
            label: 'Libra',
            data: this.historicValueThree,
            borderColor: 'rgb(173, 13, 13)',
            backgroundColor: 'rgb(172, 67, 67)',
            borderWidth: 5,
          },
        ]
      },
      options: {
        legend: {
          labels: {
            fontSize: 15,
            fontColor: '#000',
          }
        },
        title: {
          fontColor: '#000',
          fontSize: 25,
          display: true,
          text: 'Histórico dos ultimos 6 dias'
        }
      }
    });
  }

}
