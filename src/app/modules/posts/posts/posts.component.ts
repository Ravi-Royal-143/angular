import { Component, OnInit } from '@angular/core';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';
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

  constructor(private postsService: PostsService, private toastMessageService: ToastMessageService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe((data: PostsRes) => {
      this.postsModel.posts = data.posts;
      this.postsModel.posts = this.postsModel.posts.map((post: fetchedPosts) => this.postConversion(post) )
  })
}

addPost() {
  this.postsModel.openDialog = true;
}

onSavePost(updatedPost) {
  this.postsModel.openDialog = false;
  this.postsModel.editPostData = null;
  if (updatedPost.isSaved) {
    let index = this.postsModel.posts.findIndex(post => post._id === updatedPost.post._id);
    if (index === -1) {
      this.postsModel.posts.push(this.postConversion(updatedPost.post));
    } else {
      let updatedVal = {
        ...this.postsModel.posts[index],
        ...updatedPost.post
      }
      this.postsModel.posts[index] = this.postConversion(updatedVal);
    }
  }
}

postConversion(post) {
  return {
    ...post,
    img: this.img.replace('<GoogleImgId>', post.googleImgId)
  }
}

onEditPost(data) {
  this.postsModel.editPostData = data;
  this.postsModel.openDialog = true;
}

onDeletePost(post) {
  this.postsService.deletePost(post).subscribe((data: any) => {
    this.toastMessageService.showSuccessToast([data.message]);
    this.postsModel.posts = this.postsModel.posts.filter(data => data._id !== post._id);
  })
}

}
