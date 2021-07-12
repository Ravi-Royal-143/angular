import { Component, OnInit } from '@angular/core';
import { fetchedPosts, PostsRes } from './model/posts.interface';
import { PostsModel } from './model/posts.model';
import { PostsService } from './service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  img = "https://drive.google.com/uc?export=view&id=<GoogleImgId>"
  postsModel = new PostsModel();
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    // this.postsModel.openDialog = true;
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe((data: PostsRes) => {
      this.postsModel.posts = data.posts;
      this.postsModel.posts.forEach((post: fetchedPosts) => {
        post.img = this.img.replace('<GoogleImgId>', post.googleImgId);
      })
    })
  }

  addPost() {
    this.postsModel.openDialog = true;
  }

  onSavePost() {
    this.postsModel.openDialog = false;
    this.postsModel.editPostData = null;
    this.getPosts();
  }

  onEditPost(data) {
    this.postsModel.editPostData = data;
    this.postsModel.openDialog = true;
  }

}
