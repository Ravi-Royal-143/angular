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
        let imgTitle = post.imagePath.split("/").pop().split("-");
        imgTitle.pop();
        post.imgTitle = imgTitle.join('-');
      })
    })
  }
  addPost() {
    this.postsModel.openDialog = true;
  }

  onSavePost() {
    this.postsModel.openDialog = false;
    this.getPosts();
  }

}
