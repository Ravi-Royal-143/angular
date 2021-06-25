import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AutoUnsubscribeComponent } from 'src/app/shared/auto-unsubscribe/auto-unsubscribe.component';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent extends AutoUnsubscribeComponent implements OnInit, OnDestroy {
  @ViewChild('textRef', {static: false}) textRef: ElementRef;

  chat: string;
  chats: { type: string, message: string }[] = [];

  constructor(private chatService: ChatService) {
    super();
  }

  ngOnInit() {
    this.chatService.setupSocketConnection();
    const sub$ = this.chatService.latestChat.subscribe((data: string) => {
      this.addToChat('recieved', data);
    });
    this.addsub(sub$);
  }

  ngOnDestroy() {
    this.chatService.disconnectSocket();
  }

  onSend() {
    this.chatService.SendMessage(this.chat);
    this.addToChat('sent', this.chat);
    this.textRef.nativeElement.focus();
    this.chat = '';
  }

  addToChat(type: 'recieved' | 'sent', message: string = '') {
    this.chats.push({
      type,
      message
    });
  }

}
