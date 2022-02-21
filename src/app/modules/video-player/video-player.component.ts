import { Component, OnInit } from '@angular/core';
import { VideoList } from '@interfaces/video';
import { mynodeEndPoint } from 'src/app/urls/url';
import { VideoPlayerService } from './services/video-player.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  listOfVideos: VideoList[] = [];
  urlToVideo: string = null;

  constructor(private readonly videoPlayerService: VideoPlayerService) { }

  ngOnInit(): void{
    this.videoPlayerService.getListofVideo().subscribe((res: VideoList[]) => {
      this.listOfVideos = res;
    })
  }

  openPlayer(id): void {
    this.urlToVideo = `${mynodeEndPoint.videoPlay}/${id}`;
  }
}
