import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {

  constructor(public httpClient : HttpClient) { }
  
  getEgyptNews(): Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=e2f71a1a23544725af80b24321fc90d3");  
  }



}
