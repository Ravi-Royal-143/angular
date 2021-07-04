import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    console.log('isLogged', !!document.cookie)
    this.isLoggedIn.next(!!document.cookie);
  }

  startTImer() {
    setInterval(() => {

    }, 1000)
  }

}
