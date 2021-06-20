import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat.routing.module';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ChatRoutingModule,
    ButtonModule,
    CardModule
  ]
})
export class ChatModule { }
