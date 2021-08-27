import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { CredentialRoutingModule } from './credential-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
@NgModule({
  declarations: [LogInComponent, SignUpComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CredentialRoutingModule,
    InputTextModule,
    DialogModule,
    ButtonModule
  ]
})
export class CredentialModule { }
