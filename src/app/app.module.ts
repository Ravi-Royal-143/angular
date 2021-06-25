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
import { ButtonModule } from 'primeng/button';
import { CredentialModule } from '@modules/credential/credential.module';
import { HttpCookieInterceptorService } from './heplers/interceptors/http-cookie.interceptor.service';
import { ErrorInterceptorService } from './heplers/interceptors/error-interceptor.service';
import { ToastMessageModule } from './shared/toast-message/toast-message.module';
import { NavBarModule } from '@modules/nav-bar/nav-bar.module';

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
    LoadingModule,
    ButtonModule,
    CredentialModule,
    NavBarModule,
    ToastMessageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpCookieInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
