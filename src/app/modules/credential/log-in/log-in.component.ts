import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AutoUnsubscribeComponent } from 'src/app/shared/components/auto-unsubscribe/auto-unsubscribe.component';
import { ToastMessageService } from 'src/app/shared/components/toast-message/toast-message.service';
import { State } from 'src/app/store/reducers';
import { LogInService } from './service/log-in.service';
import * as loginActions from '@store/actions/log-in.action';
import { ResponseMes } from './model/log-in.interface';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent extends AutoUnsubscribeComponent {
  isgmailValidate: boolean;
  ispasswordValidate: boolean;
  isforgetGmailValidate: boolean;
  isPasswordForgot: boolean;
  forgotGmail = new FormControl('', [Validators.required, Validators.email]);

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
    private readonly store: Store<State>
  ) {
    super();
  }

  onSubmit(): void | undefined {
    this.checkOnSubmit();
    const { gmail, password } = this.userInfo.value;

    if (this.userInfo.invalid) {
      return;
    }
    const sub$ = this.logInService.authenticate({ gmail, password }).subscribe(res => {
      document.cookie = 'cookie' + '=' + res.cookie + ';expires=' + this.expTime().toUTCString() + ';path=/'
      this.store.dispatch(loginActions.login({ loggedIn: true }));
      this.toastMessageService.showSuccessToast(['Sucessfully logged in.']);
      this.redirectionIfAny();
    });
    this.addsub(sub$);
  }

  expTime() {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 36000;
    now.setTime(expireTime);
    return now;
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

  closeForgotPass() {
    this.isPasswordForgot = false;
    this.isforgetGmailValidate = false;
    this.forgotGmail.reset();
  }

  onResetPass() {
    this.checkonResetPass();
    if (this.forgotGmail.invalid) {
      return;
    }
    this.logInService.resetPass(this.forgotGmail.value).subscribe((res: ResponseMes) => {
      this.toastMessageService.showSuccessToast([res.message]);
      this.closeForgotPass();
    });
  }

  checkonResetPass() {
    this.isforgetGmailValidate = true;
  }

}
