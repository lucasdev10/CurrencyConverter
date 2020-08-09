import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-options',
  templateUrl: './currency-options.component.html',
  styleUrls: ['./currency-options.component.css']
})
export class CurrencyOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  getValue(event) {
    console.log(event);
  }

}
