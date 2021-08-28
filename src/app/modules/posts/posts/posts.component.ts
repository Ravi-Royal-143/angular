import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AutoUnsubscribeComponent } from 'src/app/shared/auto-unsubscribe/auto-unsubscribe.component';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';
import { fetchedPosts, PaginationReq, PostsRes } from './model/posts.interface';
import { PostsModel } from './model/posts.model';
import { PostsService } from './service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent extends AutoUnsubscribeComponent implements OnInit {

  img = "https://drive.google.com/uc?export=view&id=<GoogleImgId>"
  postsModel = new PostsModel();

  constructor(
    private postsService: PostsService,
    private toastMessageService: ToastMessageService,
    private confirmationService: ConfirmationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    let paginationData: PaginationReq = {
      pageSize: this.postsModel.pagination.rowsPerPage,
      page: this.postsModel.reqPage
    }
    const sub$ = this.postsService.getPosts(paginationData).subscribe((data: PostsRes) => {
      this.postsModel.posts = data.posts;
      this.updatingPaagination({ totalRec: data.maxPosts });
      this.postsModel.posts = this.postsModel.posts.map((post: fetchedPosts) => this.postConversion(post))
    });
    this.addsub(sub$);
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
        this.postsModel.reqPage = 1;
        // this.postsModel.posts.push(this.postConversion(updatedPost.post));
        this.getPosts();
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
    const sub$ = this.postsService.deletePost(post).subscribe((data: any) => {
      this.toastMessageService.showSuccessToast([data.message]);
      this.postsModel.posts = this.postsModel.posts.filter(data => data._id !== post._id);
    });
    this.addsub(sub$);
  }

  onPageChange(event) {
    console.log(event)
    let reqData = {
      rowsPerPage: event.rows
    };
    this.postsModel.reqPage = event.page + 1
    this.updatingPaagination(reqData);
    this.getPosts();
  }

  updatingPaagination(event) {
    this.postsModel.pagination = {
      ...this.postsModel.pagination,
      ...event
    }
  }

  confirmDelete(post) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete the post?',
      accept: () => {
        this.onDeletePost(post);
      }
    });
  }

}
