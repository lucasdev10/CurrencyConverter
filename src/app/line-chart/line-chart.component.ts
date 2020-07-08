import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './../api.service';
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

  bases = ['GBP', 'USD', 'EUR', 'JPY'];

  constructor(private _apiService: ApiService) { }

  ngOnInit() {

    this.getHistoricValues();

    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [
          {
            label: 'GPB',
            data: this.historicValueOne,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(71, 69, 66)',
            borderWidth: 5,
          }, {
            label: 'USD',
            data: this.historicValueTwo,
            borderColor: 'rgb(13, 16, 212)',
            backgroundColor: 'rgb(52, 44, 121)',
            borderWidth: 5,
          },
          {
            label: 'EUR',
            data: this.historicValueThree,
            borderColor: 'rgb(173, 13, 13)',
            backgroundColor: 'rgb(172, 67, 67)',
            borderWidth: 5,
          },
          {
            label: 'JPY',
            data: this.historicValueFour,
            borderColor: 'rgb(1, 95, 17)',
            backgroundColor: 'rgb(55, 155, 77)',
            borderWidth: 5,
          }
        ]
      },
      options: {
        legend: {
          labels: {
            fontSize: 23,
            fontColor: '#000',
          }
        },
      }
    });
  }

  @ViewChild("meuCanvas", { static: true }) elemento: ElementRef;

  graphic(baseCurrency, historicValue) {
    for (let j = 0; j <= 3; j++) {
      this._apiService.baseApi = baseCurrency;
      for (let i = 0; i < 8; i++) {

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
        this._apiService.getHistoy().subscribe((resposta) => {
          this.historicalGuard = resposta;
          historicValue.reverse()[i] = this.historicalGuard.rates.BRL;
        })
      }
    }
  }

  getHistoricValues() {
    this.graphic("GBP", this.historicValueOne);
    this.graphic("USD", this.historicValueTwo);
    this.graphic("EUR", this.historicValueThree);
    this.graphic("JPY", this.historicValueFour);
  }

}
