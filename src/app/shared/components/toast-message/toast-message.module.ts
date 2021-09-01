import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [ToastMessageComponent],
  imports: [
    CommonModule,
    ToastModule
  ],
  providers: [MessageService],
  exports: [ToastMessageComponent]
})
export class ToastMessageModule { }
