import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsRoutingModule } from './user-details-routing.module';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }
