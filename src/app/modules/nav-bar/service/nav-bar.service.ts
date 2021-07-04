import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    const isLogged = document.cookie ? true : false;
    this.isLoggedIn.next(isLogged);
  }

}
