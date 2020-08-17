import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

const apiUrlCurrency = "https://api.exchangeratesapi.io/latest?base=";


const apiHistoryUrl = "https://api.exchangeratesapi.io/";
const apiHistory = "?base=";

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  private _listners = new Subject<any>();
  public baseCurrency: any;
  public valuesCurrency: any= [];
  public dates: any;
  public baseApi: any;

  constructor(private http: HttpClient) { }

  getCurrency(baseCurrency) {
    return this.http.get(apiUrlCurrency + baseCurrency);
  }

  getCurrencyHistoric() {
    return this.http.get(apiHistoryUrl + this.dates + apiHistory + this.baseApi);
  }

  listen(): Observable<any> {
     return this._listners.asObservable();
  }

  base(base: string) {
     this._listners.next(base);
  }
}
