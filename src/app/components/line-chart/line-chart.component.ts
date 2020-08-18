import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CurrencyApiService } from '../../currency-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild("myCanvas", { static: true }) elemento: ElementRef;

  saveHistoricalValue: any;
  historicalValueUSD: Array<any> = [];
  historicalValueEUR: Array<any> = [];
  historicalValueGBP: Array<any> = [];
  historicalValueJPY: Array<any> = [];
  historicalValueCAD: Array<any> = [];

  constructor(private _currencyApiService: CurrencyApiService) { }

  ngOnInit() {
    this.chart();
      this.graphic("USD", this.historicalValueUSD);
      this.graphic("EUR", this.historicalValueEUR);
      this.graphic("GBP", this.historicalValueGBP);
      this.graphic("JPY", this.historicalValueJPY);
      this.graphic("CAD", this.historicalValueCAD);
  }

  graphic(baseCurrency, historicValueOf) {
    // Laço para preencher o gráfico com os ultimos 6 dias passados.
    for (let j = 0; j <= 3; j++) {
      this._currencyApiService.baseApiHistoric = baseCurrency;
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
        this._currencyApiService.dates = [year, month, day].join('-')
        this._currencyApiService.getCurrencyHistoric().subscribe((result) => {
          this.saveHistoricalValue = result;
          historicValueOf.reverse()[i] = this.saveHistoricalValue.rates.BRL;
        })
      }
    }
  }

  chart() {
    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: ["1 Dia", "2 Dia", "3 Dia", "4 Dia", "5 Dia", "6 Dia"],
        datasets: [
          {
            label: 'Dólar',
            data: this.historicalValueUSD,
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(71, 69, 66)',
            borderWidth: 5,
          }, {
            label: 'Euro',
            data: this.historicalValueEUR,
            borderColor: 'rgb(13, 16, 212)',
            backgroundColor: 'rgb(52, 44, 121)',
            borderWidth: 5,
          },
          {
            label: 'Libra',
            data: this.historicalValueGBP,
            borderColor: 'rgb(173, 13, 13)',
            backgroundColor: 'rgb(172, 67, 67)',
            borderWidth: 5,
          },
          {
            label: 'Iene',
            data: this.historicalValueJPY,
            borderColor: 'rgb(6, 97, 29)',
            backgroundColor: 'rgb(12, 131, 42)',
            borderWidth: 5,
          },
          {
            label: 'Dólar Canadense',
            data: this.historicalValueCAD,
            borderColor: 'rgb(97, 104, 7)',
            backgroundColor: 'rgb(137, 146, 13)',
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