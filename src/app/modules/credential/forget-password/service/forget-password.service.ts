import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mynodeEndPoint } from 'src/app/urls/url';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private http: HttpClient) { }

  resetPass(mailId: string, token: string, pass: string) {
    return this.http.post(mynodeEndPoint.resetPassEnd.replace('<ResetMail>', mailId).replace('<ResetToken>', token), { password: pass });
  }
}
