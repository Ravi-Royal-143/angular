import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';
import { SignUpService } from './service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userSignUp: FormGroup = this.fb.group({
    username: ['', Validators.required],
    gmail: ['', Validators.required],
    password: ['', Validators.required],
    repassword: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
    private route: ActivatedRoute,
    private toastMessageService: ToastMessageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { username, gmail, password, repassword } = this.userSignUp.value;
    if (password !== repassword) {
      this.toastMessageService.addToast(['Please Check Password again'])
      return;
    }
    this.signUpService.signUp({ gmail, password, username }).subscribe(res => {
      this.router.navigate(['../', 'log-in'], { relativeTo: this.route })
    });
  }

}
