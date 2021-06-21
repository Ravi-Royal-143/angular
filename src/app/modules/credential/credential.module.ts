import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { CredentialRoutingModule } from './credential-routing.module';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LogInComponent, SignUpComponent],
  imports: [
    CommonModule,
    CredentialRoutingModule,
    InputTextModule,
    ButtonModule
  ]
})
export class CredentialModule { }
