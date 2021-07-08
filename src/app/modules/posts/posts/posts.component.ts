import { Component, OnInit } from '@angular/core';
import { PostsModel } from './model/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postsModel = new PostsModel();
  constructor() { }

  ngOnInit(): void {
    // this.postsModel.openDialog = true;
  }

  addPost() {
    this.postsModel.openDialog = true;
  }
  
  onSavePost() {
    this.postsModel.openDialog = false;
  }

}
