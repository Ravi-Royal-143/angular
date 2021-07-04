import { Component, OnInit } from '@angular/core';
import { ToastMessageService } from 'src/app/shared/toast-message/toast-message.service';
import { NavBarService } from './service/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private navBarService: NavBarService, private toastMessageService: ToastMessageService) { }

  ngOnInit(): void {
    this.navBarService.isLoggedIn.subscribe((data: boolean) => {
      this.isLoggedIn = data;
    });
  }

  logOut() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }

    this.navBarService.isLoggedIn.next(false);
    this.toastMessageService.showSuccessToast(['Sucessfully logged out.']);

  }

}
