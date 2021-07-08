import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';
import { mimeType } from './mime-type.validator';
import { PostModel } from './model/post.model';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Output() savedPost = new EventEmitter<void>();
  uploadedFiles: any[] = [];
  imagePreview: string;
  postModel = new PostModel();

  constructor(
    private toastMessageService: ToastMessageService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postModel.displayPopUp = true;
    this.postModel.postform = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
  }

  get formDetails(): { [key: string]: AbstractControl } {
    return this.postModel.postform.controls;
  }

  get titleFormDetails(): AbstractControl {
    return this.formDetails.title;
  }

  get contentFormDetails(): AbstractControl {
    return this.formDetails.content;
  }

  get imageFormDetails(): AbstractControl {
    return this.formDetails.image;
  }

  get validityExceptImg() {
    return this.formDetails.title.valid && this.formDetails.content.valid;
  }

  onSubmit() {
    this.checkOnSubmit();
    if (this.validityExceptImg && this.postModel.postform.invalid) {
      this.toastMessageService.showErrorToast(['Please Select image']);
    }
    if (this.postModel.postform.valid) {
      this.savePost();

    }
  }

  savePost() {
    this.postService.savePost(this.postModel.postform.value).subscribe((res) => {
      this.postModel.displayPopUp = false;
      this.savedPost.emit();
    });
  }

  removeImg() {
    this.postModel.postform.controls.image.setValue(null);
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.postModel.postform.patchValue({ image: file });
    this.postModel.postform.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  checkOnSubmit(): void {
    this.postModel.istitleValidate = true;
    this.postModel.isContentValidate = true;
  }

  onBlurFields(field: string) {
    this.postModel[field] = true;
  }

}
