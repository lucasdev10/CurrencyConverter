import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  guardaHistorico: any;
  valorHistorico = [];
  dataHistorico = ["2020-04-18", "2020-04-17", "2020-04-16", "2020-04-15", "2020-04-14"]

  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.baseApi = "USD"
    // for (let i = 0; i < 10; i++) {
    //   let count 
      
    //   let d = new Date(),
    //     month = '' + (d.getMonth()),
    //     day = '' + (d.getDate()-i),
    //     year = d.getFullYear();

    //   if (month.length < 2) {
    //     month = '0' + month;
    //   }
    //   if (day.length < 2) {
    //     day = '0' + day;
    //   }
    //   console.log([year, month, day])
    //   this.api.dates = [year, month, day].join('-')
    //   this.api.getHistoy().subscribe((resposta)=>{
    //     this.guardaHistorico = resposta;
    //     this.valorHistorico.reverse()[i] = this.guardaHistorico.rates.BRL;
    //     console.log(this.valorHistorico)
    //   })
    // }

  }

  chamaBase(event, chart){
    this.api.baseApi = event.target.title
    for (let i = 0; i < 10; i++) {
      let count 
      
      let d = new Date(),
        month = '' + (d.getMonth()),
        day = '' + (d.getDate()-i),
        year = d.getFullYear();

      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      console.log([year, month, day])
      this.api.dates = [year, month, day].join('-')
      this.api.getHistoy().subscribe((resposta)=>{
        this.guardaHistorico = resposta;
        this.valorHistorico.reverse()[i] = this.guardaHistorico.rates.BRL;
        console.log(this.valorHistorico)
      })
    }
    
  }

  lineChartData: ChartDataSets[] = [
    { data: this.valorHistorico, label: 'Currency History' },
  ];

  lineChartLabels: Label[] = ['1', '2', '3', '4', '5','6','7','8','9','10'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'gray',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}