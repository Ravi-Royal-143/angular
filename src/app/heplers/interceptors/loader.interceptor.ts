import { HttpContext, HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

const FOR_UPLOAD_PROGRESS = new HttpContextToken<boolean>(() => false);

export function withoutLoaderIntercept() {
  return new HttpContext().set(FOR_UPLOAD_PROGRESS, true);
}

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];

  constructor(private loadingService: LoadingService) { }

  removeRequest(req: HttpRequest<any>): void {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loadingService.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.context.get(FOR_UPLOAD_PROGRESS)) {
      return next.handle(req);
    }

    if (this.loadingService.isShowFullPageLoader) {
      this.requests.push(req);
      this.loadingService.isLoading.next(true);
    }

    return new Observable(observer => {
      const sub = next.handle(req)
        .subscribe(
          event => {
            if (event instanceof HttpResponse) {
              this.removeRequest(req);
              observer.next(event);
            }
          },
          err => {
            this.removeRequest(req);
            observer.next(err);
          },
          () => {
            this.removeRequest(req);
            observer.complete();
          });
      return () => {
        this.removeRequest(req);
        sub.unsubscribe();
      };
    });
  }
}
