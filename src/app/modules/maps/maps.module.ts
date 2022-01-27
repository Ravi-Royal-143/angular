import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps.routing.module';

import { NgxMapboxGLModule } from "ngx-mapbox-gl";


@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        "pk.eyJ1IjoicmF2aWt1bWFyLTE0MyIsImEiOiJja3dzdHY5aGYxOXc5Mnh1c3BtZ3hhZ2tyIn0.aGmy8sC0KGViEY9frFbjmA"
    })
  ]
})
export class MapsModule { }
