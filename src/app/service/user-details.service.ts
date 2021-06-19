import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myurlnodeUrl } from '../urls/url';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    return this.http.get(myurlnodeUrl + '/user');
  }

  postUserDetails(payload): Observable<any> {
    return this.http.post(myurlnodeUrl + '/user', payload);
  }

  deleteUserDetails(id): Observable<any> {
    return this.http.delete(myurlnodeUrl + '/user/' + id);
  }
}
