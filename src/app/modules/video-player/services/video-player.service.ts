import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoList } from '@interfaces/video';
import { Observable } from 'rxjs';
import { mynodeEndPoint } from 'src/app/urls/url';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  constructor(private http: HttpClient) { }

  getListofVideo(): Observable<VideoList[]> {
    return this.http.get<VideoList[]>(mynodeEndPoint.listOfVideo);
  }
}
