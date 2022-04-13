import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    FormsModule,
    OverlayPanelModule,
    InputTextModule,
    AutoCompleteModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class MapsModule { }
