import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mynodeEndPoint } from 'src/app/urls/url';
import { FlamesReq } from '../model/flames.interface';

@Injectable({
  providedIn: 'root'
})
export class CrushService {

  constructor(private http: HttpClient) { }

  getCrush(payload: FlamesReq): Observable<any> {
    return this.http.post(mynodeEndPoint.crush, payload);
  }

}
