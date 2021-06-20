import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auto-unsubscribe',
  templateUrl: ''
})
export class AutoUnsubscribeComponent implements OnDestroy {
  protected subscription: Subscription[] = [];

  protected addsub(...sub: Subscription[]): void {
    this.subscription.push(...sub);
  }

  ngOnDestroy(): void {
    for (const sub of this.subscription) {
      sub.unsubscribe();
    }
  }
}
