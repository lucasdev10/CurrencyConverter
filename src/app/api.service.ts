import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "https://api.exchangeratesapi.io/latest?base=";

const apiHistoryUrl = "https://api.exchangeratesapi.io/";
const apiHistory = "?base=";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public base:any;
  public dates:any;
  public baseApi:any;

  constructor(private http: HttpClient) { }
    getCurrency() {
      return this.http.get(apiUrl + this.base);
    }
    getHistoy() {
      return this.http.get(apiHistoryUrl + this.dates + apiHistory + this.baseApi);
    }
}
