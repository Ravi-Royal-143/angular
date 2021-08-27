import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mynodeEndPoint } from 'src/app/urls/url';
import { LogInReq } from '../model/log-in.interface';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  authenticate(payload: LogInReq): Observable<any> {
    return this.http.post(mynodeEndPoint.logIn, payload);
  }

  resetPass(mailId: string) {
    return this.http.get(mynodeEndPoint.resetPass.replace('<ResetMail>', mailId));
  }

}
