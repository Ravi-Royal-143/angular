import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarService } from '@modules/nav-bar/service/nav-bar.service';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';
import { LogInService } from './service/log-in.service';

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

  get formDetails(): { [key: string]: AbstractControl } {
    return this.userInfo.controls;
  }

  get gmailFormDetails(): AbstractControl {
    return this.formDetails.gmail;
  }

  get passwordFormDetails(): AbstractControl {
    return this.formDetails.password;
  }


  constructor(
    private fb: FormBuilder,
    private logInService: LogInService,
    private router: Router,
    private route: ActivatedRoute,
    private toastMessageService: ToastMessageService,
    private navBarService: NavBarService

  ) { }

  onSubmit(): void | undefined {
    this.checkOnSubmit();
    const { gmail, password } = this.userInfo.value;
    if (this.userInfo.invalid) {
      return;
    }
    this.logInService.authenticate({ gmail, password }).subscribe(res => {
      document.cookie = 'cookie' + '=' + res.cookie;
      this.navBarService.isLoggedIn.next(true);
      this.toastMessageService.showSuccessToast(['Sucessfully logged in.']);
      this.redirectionIfAny();
    });
  }

  redirectionIfAny() {
    let redirectURL = '/';
    let params = this.route.snapshot.queryParams;
    if (params['redirectURL']) {
      redirectURL = params['redirectURL'];
    }
    if (redirectURL) {
      this.router.navigateByUrl(redirectURL)
        .catch(() => this.router.navigate(['/']))
    } else {
      this.router.navigate(['/'])
    }
  }

  onBlurFields(validateField): void {
    this[validateField] = true;
  }

  checkOnSubmit(): void {
    this.isgmailValidate = true;
    this.ispasswordValidate = true;
  }

}
