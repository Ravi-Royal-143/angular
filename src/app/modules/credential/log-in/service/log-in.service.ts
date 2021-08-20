import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mynodeEndPoint, myurlnodeUrl } from 'src/app/urls/url';
import { LogInReq } from '../model/log-in.interface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  authenticate(payload: LogInReq): Observable<any> {
    return this.http.post(mynodeEndPoint.logIn, payload);
  }
}
