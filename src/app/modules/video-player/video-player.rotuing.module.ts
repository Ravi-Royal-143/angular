import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoPlayerComponent } from './video-player.component';

const routes: Routes = [
    {
        path: '',
        component: VideoPlayerComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideoRoutingModule { }
