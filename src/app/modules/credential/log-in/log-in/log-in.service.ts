import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mynodeEndPoint, myurlnodeUrl } from 'src/app/urls/url';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  authenticate(payload): Observable<any> {
    return this.http.post(mynodeEndPoint.logIn, payload);
  }
}
