import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavBarService } from '@modules/nav-bar/service/nav-bar.service';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';
import { LogInService } from './log-in/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  isgmailValidate: boolean;
  ispasswordValidate: boolean;
  userInfo: FormGroup = this.fb.group({
    gmail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  get formDetails() {
    return this.userInfo.controls;
  }

  get gmailFormDetails() {
    return this.formDetails.gmail;
  }

  get passwordFormDetails() {
    return this.formDetails.password;
  }


  constructor(
    private fb: FormBuilder,
    private logInService: LogInService,
    private router: Router,
    private toastMessageService: ToastMessageService,
    private navBarService: NavBarService

  ) { }

  onSubmit() {
    this.checkOnSubmit();
    const { gmail, password } = this.userInfo.value;
    let isFieldInvalid = false;
    if (this.userInfo.invalid) {
      return;
    }
    this.logInService.authenticate({ gmail, password }).subscribe(res => {
      document.cookie = 'cookie' + '=' + res.cookie;
      this.navBarService.isLoggedIn.next(true);
      this.toastMessageService.showSuccessToast(['Sucessfully logged in.']);
      this.router.navigate(['/']);
    });
  }

  onBlurFields(validateField) {
    this[validateField] = true;
  }

  checkOnSubmit() {
    this.isgmailValidate = true;
    this.ispasswordValidate = true;
  }

}
