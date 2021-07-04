import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    const isLogged = document.cookie ? true : false;
    this.isLoggedIn.next(isLogged);
  }

  ngOnInit() {

  }

  startTImer() {
    setInterval(() => {

    }, 1000)
  }

}
