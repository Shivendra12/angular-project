import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserService {

  constructor(private http:HttpClient) { }
  fetchLatestNews()
  {
    const url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9c7977a1445849ddac97c68b5303a8c4";
   return this.http.get(url);
  }

}
