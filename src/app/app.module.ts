import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsModule } from './modules/user-details/user-details.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { LoaderInterceptor } from './heplers/interceptors';
import { EmptyRouteComponent } from './empty-route/empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserDetailsModule,
    HttpClientModule,
    LoadingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
