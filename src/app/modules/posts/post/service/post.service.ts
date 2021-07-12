import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mynodeEndPoint } from 'src/app/urls/url';
import { AddPost } from '../model/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  savePost(payload, isEdit: boolean): Observable<any> {
    if (isEdit) {
      return this.http.put(mynodeEndPoint.post, payload);
    }
    return this.http.post(mynodeEndPoint.post, payload);
  }

}
