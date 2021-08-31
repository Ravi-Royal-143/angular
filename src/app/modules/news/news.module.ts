import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NewsRoutingModule,
    DropdownModule,
    DataViewModule
  ]
})
export class NewsModule { }
