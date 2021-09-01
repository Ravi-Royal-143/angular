import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribeComponent } from '../auto-unsubscribe/auto-unsubscribe.component';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent extends AutoUnsubscribeComponent implements OnInit {

  isLoading: boolean;
  constructor(private loadingService: LoadingService) {
    super();
   }

  ngOnInit(): void {
    const sub$ = this.loadingService.isLoading.subscribe(loader => {
      this.isLoading = loader;
    });
    this.addsub(sub$);
  }

}
