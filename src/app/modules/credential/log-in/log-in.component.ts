import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogInService } from './log-in/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  userInfo: FormGroup = this.fb.group({
    gmail: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private logInService: LogInService) { }

  onSubmit() {
    const { gmail, password } = this.userInfo.value;
    this.logInService.authenticate({ gmail, password }).subscribe(res => {
      console.log("sucees", res)
    });
  }

}
