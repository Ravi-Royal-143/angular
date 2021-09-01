import { Component, Input, OnInit } from '@angular/core';
import { defaultToast } from './defaultToastValues';
import { ToastMessageService } from './toast-message.service';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {

  @Input() key: string = defaultToast.key;

  constructor(private readonly toastMessageService: ToastMessageService) { }

  ngOnInit(): void {
  }

  onmsgClose(event) {
    this.toastMessageService.removeMesInMessageDispalyed(event.message);
  }

}
