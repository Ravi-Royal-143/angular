import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';

import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }
