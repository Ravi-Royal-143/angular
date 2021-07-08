import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mynodeEndPoint } from 'src/app/urls/url';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(mynodeEndPoint.post);
  }

}
