import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostModel } from './model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  uploadedFiles: any[] = [];
  imagePreview: string;
  postModel = new PostModel();
  constructor() { }

  ngOnInit(): void {
    this.postModel.displayPopUp = true;
    this.postModel.postform =  new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        // asyncValidators: [mimeType]
      })
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

}
