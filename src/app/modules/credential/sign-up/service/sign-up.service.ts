import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mynodeEndPoint } from 'src/app/urls/url';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signUp(payload): Observable<any> {
    return this.http.post(mynodeEndPoint.signUp, payload);
  }

}
