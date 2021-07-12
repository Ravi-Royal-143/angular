import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mynodeEndPoint } from 'src/app/urls/url';
import { PaginationReq } from '../model/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(paginationData: PaginationReq) {
    let params = new HttpParams();
    params = params.append('page', paginationData.page);
    params = params.append('pagesize', paginationData.pageSize);
    return this.http.get(mynodeEndPoint.post, { params });
  }

  deletePost(post) {
    return this.http.delete(mynodeEndPoint.deletePost.replace('<id>', post._id));
  }

}
