import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';
import { SignUpService } from './service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  isgmailValidate: boolean;
  isUserNameValidate: boolean;
  ispasswordValidate: boolean;
  isrepasswordValidate: boolean;
  userSignUp: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    gmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repassword: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
    private route: ActivatedRoute,
    private toastMessageService: ToastMessageService
  ) { }

  get formDetails(): { [key: string]: AbstractControl } {
    return this.userSignUp.controls;
  }

  get userNameFormDetails(): AbstractControl {
    return this.formDetails.username;
  }

  get gmailFormDetails(): AbstractControl {
    return this.formDetails.gmail;
  }

  get passwordFormDetails(): AbstractControl {
    return this.formDetails.password;
  }

  get repasswordFormDetails(): AbstractControl {
    return this.formDetails.repassword;
  }

  onSubmit(): void | undefined {
    this.checkOnSubmit();
    const { username, gmail, password, repassword } = this.userSignUp.value;
    let isFieldInvalid = false;
    isFieldInvalid = this.userSignUp.invalid ? true : this.checkDataPresent();
    isFieldInvalid = isFieldInvalid ? isFieldInvalid : this.isPasswordSame(password, repassword);
    if (isFieldInvalid) {
      return;
    }
    this.signUpService.signUp({ gmail, password, username }).subscribe(res => {
      this.toastMessageService.showSuccessToast([res.message]);
      this.router.navigate(['../', 'log-in'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    });
  }

  onBlurFields(validateField): void {
    this[validateField] = true;
  }

  checkOnSubmit(): void {
    this.isgmailValidate = true;
    this.isUserNameValidate = true;
    this.ispasswordValidate = true;
    this.isrepasswordValidate = true;
  }

  checkDataPresent(): boolean {
    const errMessage = [];
    Object.keys(this.userSignUp.controls).forEach(fieldName => {
      if (!this.formDetails[fieldName].value) {
        errMessage.push(`Please Enter ${fieldName}`);
      }
    });
    if (errMessage.length) {
      this.toastMessageService.showErrorToast(errMessage);
      return true;
    }
    return false;
  }

  isPasswordSame(password, repassword): boolean {
    if (password !== repassword) {
      this.toastMessageService.showErrorToast(['Password must be same']);
      return true;
    }
    return false;
  }

}
