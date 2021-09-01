import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastMessageService } from 'src/app/shared/components/toast-message/toast-message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private toastMessageService: ToastMessageService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
        const error = err;
        const statusCode = err.status;
        if([401, 403].indexOf(statusCode) !== -1) {
          this.toastMessageService.showErrorToast(['Please Log in to continue']);
          this.router.navigate(['auth', 'log-in']);
        // } else {
        // err = new ServiceError(err);
        // showToast
        }
        let message = err.error.message || err.error;
        if (!Array.isArray(message)) {
          message = [message];
        }
        this.toastMessageService.showErrorToast(message);
        return throwError(error);
      })
    );
  }
}
