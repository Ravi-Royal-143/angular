import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { VideoRoutingModule } from './video-player.rotuing.module';
import { VideoPlayerComponent } from './video-player.component';


@NgModule({
  imports: [CommonModule, VideoRoutingModule, ButtonModule],
  declarations: [VideoPlayerComponent]
})
export class VideoPlayerModule { }
