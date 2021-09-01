import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@store/reducers';
import { logInFeatureKey } from '@store/reducers/log-in.reducer';
import { AutoUnsubscribeComponent } from 'src/app/shared/components/auto-unsubscribe/auto-unsubscribe.component';
import { ToastMessageService } from 'src/app/shared/components/toast-message/toast-message.service';
import * as loginActions from '@store/actions/log-in.action';
import { ActivatedRoute, Router } from '@angular/router';
import { IsauthenticatedService } from 'src/app/heplers/isauthenticated/isauthenticated.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends AutoUnsubscribeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(
    private toastMessageService: ToastMessageService,
    private readonly store: Store<State>,
    private router: Router,
    private route: ActivatedRoute,
    private canActivateGuard: IsauthenticatedService
  ) {
    super();
  }

  ngOnInit(): void {
    const sub$ = this.store
      .select(logInFeatureKey)
      .subscribe(user => {
        this.isLoggedIn = user.loggedIn;
      });
    this.addsub(sub$);
  }

  logOut() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    this.store.dispatch(loginActions.logOut());
    this.toastMessageService.showSuccessToast(['Sucessfully logged out.']);

    this.redirectTo(this.router.url);
  }

  redirectTo(uri: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
 }

}
