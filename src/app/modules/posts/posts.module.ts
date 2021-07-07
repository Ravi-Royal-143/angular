import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts.routing.module';

import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ButtonModule
  ]
})
export class PostsModule { }
