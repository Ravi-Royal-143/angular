import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mynodeEndPoint } from 'src/app/urls/url';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(newsCountry: string = 'us') {
    let params = new HttpParams();
    params = params.append('country', newsCountry);
    return this.http.get(mynodeEndPoint.news, { params });
    // return this.http.get(`https://newsapi.org/v2/top-headlines?country=${newsCountry}&apiKey=f9d8dba19c0e40af9bf028bf0b7d65b2`);
  }

  getCountryDetails() {
    return this.http.get('assets/json/countryCode.json');
  }
}
