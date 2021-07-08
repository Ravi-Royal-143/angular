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

  addFormData(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("image", image, title);
    return postData;
  }

  savePost(payload: AddPost): Observable<any> {
    const postData = this.addFormData(payload.title, payload.content, payload.image);
    return this.http.post(mynodeEndPoint.post, postData);
  }
  
}
