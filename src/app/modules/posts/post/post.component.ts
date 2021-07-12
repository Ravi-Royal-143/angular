import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() editData;

  @Output() savedPost = new EventEmitter<void>();
  uploadedFiles: any[] = [];
  imagePreview: string;
  postModel = new PostModel();

  constructor(
    private toastMessageService: ToastMessageService,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    if (this.editData) {
      this.editValPatch();
    } else {
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
    this.postModel.displayPopUp = true;
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

  get imgValueType() {
    return typeof (this.postModel.postform.value.image) == 'string'
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
    const postData = this.addFormData();
    this.postService.savePost(postData, !!this.editData).subscribe((res) => {
      this.onClosing();
    });
  }


  addFormData() {
    const { title, content, image } = this.postModel.postform.value;
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    if (this.imgValueType) {
      postData.append("image", image);
    } else {
      postData.append("image", image, title);
    }
    if (this.editData) {
      postData.append('_id', this.editData._id);
    }
    return postData;
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

  onClosing() {
    this.postModel.displayPopUp = false;
    this.savedPost.emit();
  }

  editValPatch() {
    const reqData = this.convetToEditVAl();
    this.postModel.postform = new FormGroup({
      title: new FormControl(reqData.title, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(reqData.content, { validators: [Validators.required] }),
      image: new FormControl(reqData.imageTitle)
    });
  }

  removeImgControl() {
    this.postModel.postform.removeControl('image');
  }
  addImgValidator() {
    this.postModel.postform.addControl('image', new FormControl(null, {
      validators: [Validators.required],
      asyncValidators: [mimeType]
    }));
  }

  convetToEditVAl() {
    const title = this.editData.title;
    const content = this.editData.content;
    const imageTitle = this.editData.imageTitle;
    return { title, content, imageTitle };
  }

  removeAttachment() {
    this.removeImgControl();
    this.addImgValidator();
  }

}
