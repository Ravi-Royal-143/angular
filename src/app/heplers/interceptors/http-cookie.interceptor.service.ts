import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpCookieInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf(environment.url) !== -1) {
      const cookie = document.cookie;
      req = req.clone({
        headers: req.headers.set('Authorization', document.cookie)
      });
    }
    return next.handle(req);
  }
}
