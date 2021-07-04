import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';

@Injectable({
  providedIn: 'root'
})
export class IsauthenticatedService implements CanActivate, CanActivateChild {

  constructor(private router: Router,
              private toastMessageService: ToastMessageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    if (!document.cookie) {
      this.toastMessageService.showErrorToast(['Please Log in to continue']);
      this.router.navigate(['auth', 'log-in'],{queryParams:{'redirectURL':state.url}});
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(route, state);
  }
}
