import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastMessageService } from 'src/app/shared/components/toast-message/toast-message.service';
import { ResponseMes } from '../log-in/model/log-in.interface';
import { ForgetPasswordService } from './service/forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  gmail: string;
  token: string;

  ispasswordValidate: boolean;
  isrepasswordValidate: boolean;

  resettingPass: FormGroup = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    repassword: ['', Validators.required]
  });

  get formDetails(): { [key: string]: AbstractControl } {
    return this.resettingPass.controls;
  }

  get passwordFormDetails(): AbstractControl {
    return this.formDetails.password;
  }

  get repasswordFormDetails(): AbstractControl {
    return this.formDetails.repassword;
  }

  constructor(
    private route: ActivatedRoute,
    private toastMessageService: ToastMessageService,
    private fb: FormBuilder,
    private router: Router,
    private forgetPasswordService: ForgetPasswordService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.gmail = params.gmail;
      this.token = params.token;
    });
  }

  onBlurFields(validateField): void {
    this[validateField] = true;
  }

  onSubmit() {
    this.checkOnSubmit();
    const { password, repassword } = this.resettingPass.value;
    let isFieldInvalid = false;
    isFieldInvalid = isFieldInvalid ? isFieldInvalid : this.isPasswordSame(password, repassword);
    if (isFieldInvalid) {
      return;
    }

    this.forgetPasswordService.resetPass(this.gmail, this.token, this.passwordFormDetails.value).subscribe((res: ResponseMes) => {
      this.toastMessageService.showSuccessToast([res.message]);
      this.router.navigate(['../../../', 'log-in'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    });
  }

  checkOnSubmit() {
    this.ispasswordValidate = true;
    this.isrepasswordValidate = true;
  }

  isPasswordSame(password, repassword): boolean {
    if (password !== repassword) {
      this.toastMessageService.showErrorToast(['Password must be same']);
      return true;
    }
    return false;
  }

}
