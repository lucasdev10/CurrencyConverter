import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './../api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  guardaHistorico: any;

  valorHistorico1 = [];
  valorHistorico2 = [];
  valorHistorico3 = [];
  valorHistorico4 = [];

  // dataHistorico = ["2020-04-18", "2020-04-17", "2020-04-16", "2020-04-15", "2020-04-14"]
  bases = ['GBP', 'USD', 'EUR', 'JPY'];

  constructor(private api: ApiService) { }

  @ViewChild("meuCanvas", { static: true }) elemento: ElementRef;

  graph(parametro, outroParametro) {
    for (let j = 0; j <= 3; j++) {
      this.api.baseApi = parametro;
      for (let i = 0; i < 15; i++) {
        let count

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
        // console.log([year, month, day])
        this.api.dates = [year, month, day].join('-')
        this.api.getHistoy().subscribe((resposta) => {
          this.guardaHistorico = resposta;
          outroParametro.reverse()[i] = this.guardaHistorico.rates.BRL;
          console.log(this.valorHistorico1)

        })

      }
    }
  }
  func() {
    this.graph("GBP", this.valorHistorico1);
    this.graph("USD", this.valorHistorico2);
    this.graph("EUR", this.valorHistorico3);
    this.graph("JPY", this.valorHistorico4);
  }
  ngOnInit() {

    this.func();

    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11","12","13","14","15"],
        datasets: [
          {
            label: 'GPB',
            data: this.valorHistorico1,
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 5,
            fill: false
          }, {
            label: 'USD',
            data: this.valorHistorico2,
            borderColor: 'rgb(13, 16, 212)',
            borderWidth: 5,
            fill: false
          },
          {
            label: 'EUR',
            data: this.valorHistorico3,
            borderColor: 'rgb(173, 13, 13)',
            borderWidth: 5,
            fill: false
          },
          {
            label: 'JPY',
            data: this.valorHistorico4,
            borderColor: 'rgb(1, 95, 17)',
            borderWidth: 5,
            fill: false
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
}
