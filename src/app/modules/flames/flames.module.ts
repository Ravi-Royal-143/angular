import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlamesComponent } from './flames.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    FlamesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ],
  exports: [FlamesComponent]
})
export class FlamesModule { }
