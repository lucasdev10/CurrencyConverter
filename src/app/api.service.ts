import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "https://api.exchangeratesapi.io/latest?base=";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public base:any;

  constructor(private http: HttpClient) { }
    getCurrency() {
      return this.http.get(apiUrl + this.base);
    }
}
