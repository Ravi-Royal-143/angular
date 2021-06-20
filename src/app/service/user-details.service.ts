import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { myurlnodeUrl } from '../urls/url';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    Authorization: 'authkey',
    userid: '1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    return this.http.get(myurlnodeUrl + '/user', httpOptions);
  }

  postUserDetails(payload): Observable<any> {
    return this.http.post(myurlnodeUrl + '/user', payload, httpOptions);
  }

  deleteUserDetails(id): Observable<any> {
    return this.http.delete(myurlnodeUrl + '/user/' + id, httpOptions);
  }
}
