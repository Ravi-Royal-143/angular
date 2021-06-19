import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = new BehaviorSubject<boolean>(false);
  constructor() { }

  loaderChange(data: boolean) {
    this.isLoading.next(data);
  }
}
