import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "https://api.exchangeratesapi.io/latest?base=";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
    getCurrency(base) {
      return this.http.get(apiUrl + base);
    }
}
