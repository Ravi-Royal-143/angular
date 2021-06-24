import { Component, Input, OnInit } from '@angular/core';
import { defaultToast } from './defaultToastValues';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {

  @Input() key: string = defaultToast.key;

  constructor() { }

  ngOnInit(): void {
  }

}
